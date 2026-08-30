# Planejamento de imagens - Exercicios de Energia

Padrao visual: ilustracao premium semi-realista, personagem recorrente, ambiente acolhedor, luz natural, plantas, madeira clara, azul-marinho, lavanda, menta e amarelo suave para sinal de energia. Sem texto, sem logo e sem visual fitness agressivo.

Cada exercicio de energia usa 3 frames:

1. Inicio: queda de energia, corpo parado ou ambiente pedindo ativacao.
2. Execucao: pratica leve, segura e possivel.
3. Fechamento: retorno com mais presenca, sem euforia nem cobranca.

## Exercicios

| Slug | Exercicio | Ideia visual |
| --- | --- | --- |
| `pausa-de-energia` | Pausa de energia | Agua, postura e movimento minimo para recomecar. |
| `ativacao-leve-3-minutos` | Ativacao leve de 3 minutos | Movimento simples em pe, bracos e coluna acordando o corpo. |
| `levantar-e-respirar` | Levantar e respirar | Sair da cadeira devagar, apoiar os pes e respirar em pe. |
| `agua-com-presenca` | Agua com presenca | Beber agua com atencao antes de voltar para uma acao pequena. |
| `reset-postural` | Reset postural | Ajustar coluna, ombros e maos depois de ficar sentado. |
| `marcha-leve-parada` | Marcha leve parada | Passos leves no lugar, baixo impacto e ritmo confortavel. |
| `luz-e-janela` | Luz e janela | Aproximar-se da luz natural, olhar para longe e voltar com mais clareza. |

## Arquivos gerados

Para cada slug acima foram gerados/atualizados os 4 arquivos principais em `public/exercises/`:

- `<slug>-1.png`: cena inicial.
- `<slug>-2.png`: execucao da pratica.
- `<slug>-3.png`: fechamento/retorno com energia gentil.
- `<slug>.png`: imagem principal da ficha, derivada da cena de execucao.

O objetivo e trocar qualquer visual simplificado por arte premium semi-realista coerente com o lote de Foco aprovado.

Observacao: alguns slugs ja tinham arquivos antigos `-4.png` e `-5.png`. Eles foram preservados por compatibilidade, mas a experiencia principal da biblioteca usa a sequencia nova de 3 cenas.
