# Planejamento de imagens - Exercicios de Corpo & Movimento

Padrao visual: ilustracao premium semi-realista, personagem recorrente, ambiente acolhedor, luz natural, plantas, madeira clara, azul-marinho, lavanda e menta. Sem texto, sem logo, sem visual fitness agressivo e sem posturas avançadas. A proposta e movimento leve, seguro e gratuito.

Cada exercicio de Corpo & Movimento usa 3 frames:

1. Inicio: preparacao segura.
2. Execucao: movimento principal com postura clara.
3. Fechamento: desaceleracao e retorno ao cuidado.

## Exercicios

| Slug | Exercicio | Ideia visual |
| --- | --- | --- |
| `yoga-bolso-coluna-leve` | Yoga de bolso: coluna leve | Alongar coluna em pe ou sentado, com inclinacao lateral suave. |
| `yoga-bolso-pausa-no-chao` | Yoga de bolso: pausa no chao | Pausa no tapete com postura simples e respiracao. |
| `mobilidade-de-coluna` | Mobilidade de coluna | Movimento leve para destravar a coluna sem torcao intensa. |
| `mobilidade-pescoco-ombros` | Mobilidade de pescoco e ombros | Soltar pescoco e ombros com amplitude pequena. |
| `alongamento-leve` | Alongamento leve | Alongar corpo de forma geral, sem forcar. |
| `alongamento-de-pernas` | Alongamento de pernas | Soltar pernas com apoio e postura segura. |
| `caminhada-consciente-curta` | Caminhada consciente curta | Caminhar devagar em casa ou perto da janela, com presenca. |
| `ativacao-leve-3-minutos` | Ativacao leve de 3 minutos | Movimento simples em pe para acordar o corpo. |
| `reset-corporal-trabalho` | Reset corporal no trabalho | Pausa corporal ao lado da mesa de trabalho. |
| `agachamento-leve-guiado` | Agachamento leve guiado | Agachamento seguro com cadeira como referencia. |

## Arquivos gerados

Para cada slug acima foram gerados/atualizados 4 arquivos em `public/exercises/`:

- `<slug>-1.png`: cena inicial.
- `<slug>-2.png`: execucao do movimento.
- `<slug>-3.png`: fechamento.
- `<slug>.png`: imagem principal da ficha, derivada da cena de execucao.

Observacao: quando havia arquivos antigos `-4.png` e `-5.png`, eles foram preservados por compatibilidade, mas a biblioteca principal usa os 3 primeiros frames.
