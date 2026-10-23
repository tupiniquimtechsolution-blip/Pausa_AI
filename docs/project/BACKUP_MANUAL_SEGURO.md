# Backup real e restauração local — passo a passo

Preparado em 22/10/2026 para Pausa AI, projeto `bccdypogqyrzmflimlom`. **Backup real e restore ainda não executados.** O usuário informou que ainda não possui arquivo ou conexão local e pediu estas instruções. Nenhum plano, PITR, projeto ou serviço foi contratado.

## 1. Preparar as ferramentas e a pasta privada

Instalar as ferramentas cliente oficiais do PostgreSQL 17 (`pg_dump`, `pg_restore`, `psql` e `createdb`) e ter uma instância PostgreSQL 17 local dedicada ao ensaio. As ferramentas não foram encontradas no PATH desta sessão; o PostgreSQL embarcado dos testes não inclui esses clientes. [Download oficial para Windows](https://www.postgresql.org/download/windows/).

Escolher uma pasta privada fora do repositório, do Notion e de pastas públicas/sincronizadas. Usar armazenamento criptografado já disponível ou um arquivo criptografado com ferramenta local apropriada; o formato custom do pg_dump comprime, mas não criptografa. O arquivo conterá dados pessoais e hashes de senha. Não enviar seu conteúdo ao chat/GitHub nem ativar transcrição do terminal durante a operação.

## 2. Obter a conexão de backup no Supabase

Abrir o projeto Pausa AI e clicar **Connect → Direct → Session pooler → URI** para uma rede IPv4. Para conexão direta com IPv6 disponível, usar Direct connection. Copiar apenas os parâmetros necessários para seu terminal local: host, usuário e banco, conforme exibidos nessa tela. Não usar o Transaction pooler/porta 6543 para este ensaio de backup.

A senha solicitada pelo cliente é a senha PostgreSQL do projeto, não a senha de login do aplicativo. Não precisa criar usuário na aba Authentication. A senha será digitada no prompt local; não colocá-la na linha de comando, arquivo versionado, chat ou variável de texto do tutorial. Não redefinir a senha existente só para realizar backup.

[Conexões e poolers oficiais](https://supabase.com/docs/guides/database/connecting-to-postgres). Usar TLS; para validação de identidade do servidor, obter o certificado raiz indicado pelo painel e configurar `PGSSLMODE=verify-full` e `PGSSLROOTCERT` para o caminho local desse certificado. Resolver qualquer falha de certificado antes de exportar.

## 3. Exportar o schema public e seus dados

Esta primeira cópia cobre os dados do aplicativo no schema public. Não inclui credenciais de roles, configurações do Worker, schemas gerenciados do Supabase ou conteúdo de Storage. A medição desta data encontrou 85 tabelas, 86 FKs, dois usuários e zero objetos de Storage. Configurações/roles e demais componentes precisam de inventário separado para um plano completo de recuperação.

No PowerShell local, preencher somente parâmetros não secretos. Os valores entre `PREENCHER_...` são instruções, não valores reais:

```powershell
$backupFolder = 'PREENCHER_PASTA_PRIVADA_FORA_DO_REPOSITORIO'
$dbHost = 'PREENCHER_HOST_EXATO_DO_CONNECT'
$dbUser = 'PREENCHER_USUARIO_EXATO_DO_CONNECT'
$backupFile = Join-Path $backupFolder 'pausa-public-20261022.dump'
$env:PGSSLMODE = 'verify-full'
$env:PGSSLROOTCERT = 'PREENCHER_CAMINHO_DO_CERTIFICADO_RAIZ'
if (Test-Path -LiteralPath $backupFile) { throw 'Escolha outro nome; preserve o backup existente.' }
pg_dump --host $dbHost --port 5432 --username $dbUser --dbname postgres --password --schema public --format custom --no-owner --no-acl --lock-wait-timeout 10s --file $backupFile
if ($LASTEXITCODE -ne 0) { throw 'Exportação falhou; não registrar backup aprovado.' }
Get-FileHash -Algorithm SHA256 -LiteralPath $backupFile
```

Digitar a senha somente quando o cliente pedir. Guardar data/hora, versão do pg_dump, tamanho e SHA256 separadamente. Nunca abrir ou copiar o dump no chat. Escolher uma janela sem cadastro/check-in de teste; medições feitas em momentos diferentes podem variar por novas escritas.

## 4. Restaurar somente em banco local novo

Confirmar que o servidor de destino é uma instância local dedicada, sem túnel para Supabase. Não usar o botão Restore do projeto real nem importar SQL no SQL Editor de staging. Criar um banco novo com nome exclusivo, por exemplo `pausa_restore_20261022`; se já existir, escolher outro nome. Não usar `--clean`, apagar tabelas ou reaproveitar um banco ocupado.

Abrir um novo terminal para separar a conexão local das variáveis TLS da origem. Ajustar a porta para a instância local dedicada. Executar:

```powershell
$localPort = 5432
$restoreDb = 'pausa_restore_20261022'
$backupFile = 'PREENCHER_CAMINHO_PRIVADO_DO_DUMP'
createdb --host 127.0.0.1 --port $localPort --username postgres --password $restoreDb
if ($LASTEXITCODE -ne 0) { throw 'Destino não foi criado; não prosseguir.' }
$restoreStart = Get-Date
pg_restore --host 127.0.0.1 --port $localPort --username postgres --password --dbname $restoreDb --no-owner --no-acl --single-transaction --exit-on-error $backupFile
if ($LASTEXITCODE -ne 0) { throw 'Restore falhou; manter gate pendente e revisar o log local.' }
$restoreElapsed = (Get-Date) - $restoreStart
$restoreElapsed.TotalSeconds
```

Não conectar o app nem executar cron/e-mail/seed contra a cópia restaurada. Verificar os dados somente em leitura; a cópia mantém dados pessoais e sessões armazenadas.

## 5. Conferir integridade sem listar dados pessoais

Abrir o banco local pelo psql/cliente PostgreSQL e executar em transação de leitura:

```sql
BEGIN TRANSACTION READ ONLY;
SELECT count(*) AS public_tables FROM pg_tables WHERE schemaname='public';
SELECT count(*) AS public_foreign_keys
FROM pg_constraint c JOIN pg_namespace n ON n.oid=c.connamespace
WHERE n.nspname='public' AND c.contype='f';
SELECT count(*) AS users FROM public."User";
SELECT count(*) AS orphan_user_roles
FROM public."UserRole" ur
LEFT JOIN public."User" u ON u.id=ur."userId"
LEFT JOIN public."Role" r ON r.id=ur."roleId"
WHERE u.id IS NULL OR r.id IS NULL;
COMMIT;
```

Comparar tabelas, FKs e contagens por tabela com um manifesto da mesma janela da exportação; não usar apenas tamanho do arquivo como prova. O esperado para órfãos é zero. Registrar falhas de extensão/default/FK, sem ignorá-las. As contagens 85/86/2 são o preflight desta data, não valores fixos para todos os backups futuros.

## 6. Entregar somente evidência sanitizada

Informar: data/hora do backup, SHA256, tamanho, versões, duração do restore, contagens e resultado de integridade. Isso permite registrar RTO medido. O intervalo desde o último backup válido ajuda a avaliar RPO; um único ensaio não estabelece frequência ou SLA. Guardar outra cópia protegida fora da máquina segundo a política acordada. Não remover banco/dump até revisão da evidência e definição de retenção.

Próxima ação manual: preparar ferramentas/pasta/conexão local e avisar que estão prontas. Nunca enviar senha ou URI. Depois, acompanhar a exportação e o restore seguros com o agente.

## Limites e manutenção pendente

- A documentação oficial recomenda exportação manual no plano gratuito. Não habilitar PITR, add-ons, upgrade, branching ou restore em novo projeto.
- Backup PostgreSQL não contém os arquivos de Storage; o preflight encontrou zero objetos, mas deve ser repetido em cada execução. Assets versionados são recuperados separadamente pelo Git; imagens originais continuam adiadas.
- O banco reporta PostgreSQL 17.6. O changelog atual descreve correções no 17.11; manutenção gerenciada precisa de revisão após backup válido. Não houve upgrade neste trabalho. Não foram encontradas colunas ltree nem operadores públicos com estimadores no preflight; pgcrypto está instalado e uso de cifras legadas ainda precisa ser revisto antes da manutenção.
- O ensaio sintético anterior não substitui este backup real. Gates de backup/restore e rollback integral permanecem abertos.

[Backups Supabase](https://supabase.com/docs/guides/platform/backups) · [Mudanças PostgreSQL 17.11](https://supabase.com/changelog/postgres-15-19-17-11-breaking-changes) · [Preflight agregado](evidence/2026-10-22/admin-backup-preflight.json).
