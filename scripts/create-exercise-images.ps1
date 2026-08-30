Add-Type -AssemblyName System.Drawing

$outDir = Join-Path (Get-Location) "public\exercises"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$assets = @(
  @{ slug = "respiracao-de-chegada"; title = "Respiracao de chegada"; area = "Foco"; color = "#A7F3D0"; accent = "#172554"; icon = "breath" },
  @{ slug = "uma-tarefa-apenas"; title = "Uma tarefa apenas"; area = "Foco"; color = "#DDD6FE"; accent = "#172554"; icon = "focus" },
  @{ slug = "nomear-3-prioridades"; title = "Nomear 3 prioridades"; area = "Foco"; color = "#BFDBFE"; accent = "#172554"; icon = "list" },
  @{ slug = "mesa-limpa-mente-leve"; title = "Mesa limpa, mente leve"; area = "Foco"; color = "#A7F3D0"; accent = "#0F766E"; icon = "desk" },
  @{ slug = "escrita-de-distracoes"; title = "Escrita de distracoes"; area = "Foco"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "write" },
  @{ slug = "levantar-e-respirar"; title = "Levantar e respirar"; area = "Energia"; color = "#FDE68A"; accent = "#172554"; icon = "stand" },
  @{ slug = "agua-com-presenca"; title = "Agua com presenca"; area = "Energia"; color = "#BAE6FD"; accent = "#0369A1"; icon = "water" },
  @{ slug = "reset-postural"; title = "Reset postural"; area = "Energia"; color = "#A7F3D0"; accent = "#047857"; icon = "posture" },
  @{ slug = "marcha-leve-parada"; title = "Marcha leve parada"; area = "Energia"; color = "#FED7AA"; accent = "#C2410C"; icon = "steps" },
  @{ slug = "luz-e-janela"; title = "Luz e janela"; area = "Energia"; color = "#FDE68A"; accent = "#92400E"; icon = "sun" },
  @{ slug = "luz-baixa-transicao"; title = "Luz baixa de transicao"; area = "Sono"; color = "#C7D2FE"; accent = "#312E81"; icon = "moon" },
  @{ slug = "celular-longe-da-cama"; title = "Celular longe da cama"; area = "Sono"; color = "#DDD6FE"; accent = "#4C1D95"; icon = "phone" },
  @{ slug = "pendencia-para-amanha"; title = "Pendencia para amanha"; area = "Sono"; color = "#BFDBFE"; accent = "#1D4ED8"; icon = "note" },
  @{ slug = "relaxamento-pes-cabeca"; title = "Relaxamento dos pes a cabeca"; area = "Sono"; color = "#C7D2FE"; accent = "#3730A3"; icon = "body" },
  @{ slug = "escaneamento-corporal"; title = "Escaneamento corporal"; area = "Sono"; color = "#E0E7FF"; accent = "#4338CA"; icon = "body" },
  @{ slug = "nomear-humor-atual"; title = "Nomear o humor atual"; area = "Felicidade"; color = "#FBCFE8"; accent = "#BE185D"; icon = "mood" },
  @{ slug = "uma-coisa-boa-agora"; title = "Uma coisa boa agora"; area = "Felicidade"; color = "#FDE68A"; accent = "#B45309"; icon = "spark" },
  @{ slug = "musica-curta-positiva"; title = "Musica curta positiva"; area = "Felicidade"; color = "#DDD6FE"; accent = "#7C3AED"; icon = "music" },
  @{ slug = "diario-3-linhas"; title = "Diario de 3 linhas"; area = "Felicidade"; color = "#FBCFE8"; accent = "#9D174D"; icon = "write" },
  @{ slug = "mensagem-gentil-para-alguem"; title = "Mensagem gentil para alguem"; area = "Felicidade"; color = "#A7F3D0"; accent = "#047857"; icon = "message" },
  @{ slug = "diario-descarrego-mental"; title = "Diario de descarrego mental"; area = "Felicidade"; color = "#FBCFE8"; accent = "#9D174D"; icon = "write" },
  @{ slug = "escrita-preocupacao-controlada"; title = "Escrita de preocupacao controlada"; area = "Felicidade"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "write" },
  @{ slug = "reflexao-fim-de-semana"; title = "Reflexao de fim de semana"; area = "Felicidade"; color = "#FDE68A"; accent = "#B45309"; icon = "write" },
  @{ slug = "planejamento-gentil-dia-seguinte"; title = "Planejamento gentil do dia seguinte"; area = "Felicidade"; color = "#A7F3D0"; accent = "#047857"; icon = "note" },
  @{ slug = "organizacao-5-minutos"; title = "Organizacao de 5 minutos"; area = "Foco"; color = "#A7F3D0"; accent = "#0F766E"; icon = "organization" },
  @{ slug = "organizacao-do-ambiente"; title = "Organizacao do ambiente"; area = "Foco"; color = "#BFDBFE"; accent = "#1D4ED8"; icon = "organization" },
  @{ slug = "pausa-consciente-trabalho"; title = "Pausa consciente no trabalho"; area = "Foco"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "work" },
  @{ slug = "pausa-foco-sem-impacto"; title = "Pausa de foco sem impacto"; area = "Foco"; color = "#A7F3D0"; accent = "#047857"; icon = "posture" },
  @{ slug = "caminhada-consciente"; title = "Caminhada consciente"; area = "Energia"; color = "#A7F3D0"; accent = "#047857"; icon = "walk" },
  @{ slug = "fechamento-do-dia"; title = "Fechamento do dia"; area = "Sono"; color = "#C7D2FE"; accent = "#3730A3"; icon = "moon" },
  @{ slug = "alongamento-leve"; title = "Alongamento leve"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "stretch" },
  @{ slug = "mobilidade-pescoco-ombros"; title = "Mobilidade de pescoco e ombros"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "neck" },
  @{ slug = "mobilidade-de-coluna"; title = "Mobilidade de coluna"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "spine" },
  @{ slug = "alongamento-de-pernas"; title = "Alongamento de pernas"; area = "Corpo & Movimento"; color = "#BFDBFE"; accent = "#1D4ED8"; icon = "legs" },
  @{ slug = "yoga-leve"; title = "Yoga leve"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "yoga" },
  @{ slug = "soltar-tensao-pescoco-ombros"; title = "Soltar tensao de pescoco e ombros"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "neck" },
  @{ slug = "mobilidade-rapida-coluna"; title = "Mobilidade rapida para coluna"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "spine" },
  @{ slug = "alongamento-leve-pernas"; title = "Alongamento leve de pernas"; area = "Corpo & Movimento"; color = "#BFDBFE"; accent = "#1D4ED8"; icon = "legs" },
  @{ slug = "reset-corporal-trabalho"; title = "Reset corporal no trabalho"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "work" },
  @{ slug = "caminhada-consciente-curta"; title = "Caminhada consciente curta"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "walk" },
  @{ slug = "agachamento-leve-guiado"; title = "Agachamento leve guiado"; area = "Corpo & Movimento"; color = "#FDE68A"; accent = "#92400E"; icon = "squat" },
  @{ slug = "jumping-baixo-impacto"; title = "Jumping baixo impacto"; area = "Corpo & Movimento"; color = "#FED7AA"; accent = "#C2410C"; icon = "cardio" },
  @{ slug = "respiracao-mobilidade"; title = "Respiracao + mobilidade"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "breath_mobility" },
  @{ slug = "pular-corda-iniciante"; title = "Pular corda iniciante"; area = "Corpo & Movimento"; color = "#FDE68A"; accent = "#92400E"; icon = "jump_rope" },
  @{ slug = "luta-sombra-leve"; title = "Luta sombra leve"; area = "Corpo & Movimento"; color = "#BFDBFE"; accent = "#1D4ED8"; icon = "boxing" },
  @{ slug = "yoga-energia-leve"; title = "Yoga de energia leve"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "yoga" },
  @{ slug = "funcional-em-casa-iniciante"; title = "Funcional em casa iniciante"; area = "Corpo & Movimento"; color = "#FDE68A"; accent = "#92400E"; icon = "home_functional" },
  @{ slug = "yoga-bolso-coluna-leve"; title = "Yoga de bolso: coluna leve"; area = "Corpo & Movimento"; color = "#A7F3D0"; accent = "#047857"; icon = "yoga" },
  @{ slug = "yoga-bolso-pausa-no-chao"; title = "Yoga de bolso: pausa no chao"; area = "Corpo & Movimento"; color = "#DDD6FE"; accent = "#6D28D9"; icon = "yoga" }
)

function ColorFromHex([string]$hex) {
  return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function RoundedPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function FillRounded($g, [float]$x, [float]$y, [float]$w, [float]$h, [float]$r, $brush) {
  $path = RoundedPath $x $y $w $h $r
  $g.FillPath($brush, $path)
  $path.Dispose()
}

function DrawIcon($g, $icon, $accent, $soft) {
  $pen = New-Object System.Drawing.Pen($accent, 12)
  $thin = New-Object System.Drawing.Pen($accent, 7)
  $brush = New-Object System.Drawing.SolidBrush($accent)
  $softBrush = New-Object System.Drawing.SolidBrush($soft)
  $x = 760
  $y = 190

  FillRounded $g 690 135 320 320 70 $softBrush

  switch ($icon) {
    "breath" {
      $g.DrawEllipse($pen, $x, $y, 150, 150)
      $g.DrawArc($thin, $x + 35, $y + 35, 80, 80, 200, 220)
      $g.FillEllipse($brush, $x + 64, $y + 64, 24, 24)
    }
    "focus" {
      $g.DrawEllipse($pen, $x - 10, $y - 10, 170, 170)
      $g.DrawEllipse($thin, $x + 30, $y + 30, 90, 90)
      $g.FillEllipse($brush, $x + 65, $y + 65, 22, 22)
    }
    "list" {
      for ($i = 0; $i -lt 3; $i++) {
        $yy = $y + ($i * 55)
        $g.FillEllipse($brush, $x, $yy, 24, 24)
        $g.DrawLine($pen, $x + 45, $yy + 12, $x + 170, $yy + 12)
      }
    }
    "desk" {
      $g.DrawRectangle($pen, $x - 10, $y + 40, 180, 105)
      $g.DrawLine($pen, $x + 20, $y + 145, $x + 5, $y + 205)
      $g.DrawLine($pen, $x + 140, $y + 145, $x + 160, $y + 205)
      $g.DrawLine($thin, $x + 35, $y + 80, $x + 130, $y + 80)
    }
    "write" {
      $g.DrawRectangle($pen, $x - 5, $y, 145, 180)
      $g.DrawLine($thin, $x + 25, $y + 45, $x + 110, $y + 45)
      $g.DrawLine($thin, $x + 25, $y + 85, $x + 110, $y + 85)
      $g.DrawLine($thin, $x + 25, $y + 125, $x + 90, $y + 125)
    }
    "stand" {
      $g.FillEllipse($brush, $x + 65, $y, 42, 42)
      $g.DrawLine($pen, $x + 86, $y + 48, $x + 86, $y + 145)
      $g.DrawLine($pen, $x + 86, $y + 75, $x + 35, $y + 115)
      $g.DrawLine($pen, $x + 86, $y + 75, $x + 140, $y + 115)
      $g.DrawLine($pen, $x + 86, $y + 145, $x + 55, $y + 210)
      $g.DrawLine($pen, $x + 86, $y + 145, $x + 120, $y + 210)
    }
    "water" {
      $points = [System.Drawing.Point[]]@(
        [System.Drawing.Point]::new($x + 85, $y),
        [System.Drawing.Point]::new($x + 150, $y + 95),
        [System.Drawing.Point]::new($x + 115, $y + 175),
        [System.Drawing.Point]::new($x + 55, $y + 175),
        [System.Drawing.Point]::new($x + 20, $y + 95)
      )
      $g.FillPolygon($brush, $points)
    }
    "posture" {
      $g.DrawLine($pen, $x + 90, $y + 5, $x + 90, $y + 205)
      $g.DrawArc($thin, $x + 25, $y + 35, 130, 145, 270, 180)
      $g.FillEllipse($brush, $x + 70, $y - 25, 42, 42)
    }
    "steps" {
      $g.FillEllipse($brush, $x + 15, $y + 30, 58, 95)
      $g.FillEllipse($brush, $x + 110, $y + 90, 58, 95)
    }
    "sun" {
      $g.FillEllipse($brush, $x + 45, $y + 45, 95, 95)
      for ($i = 0; $i -lt 8; $i++) {
        $angle = $i * [Math]::PI / 4
        $x1 = $x + 92 + [Math]::Cos($angle) * 75
        $y1 = $y + 92 + [Math]::Sin($angle) * 75
        $x2 = $x + 92 + [Math]::Cos($angle) * 110
        $y2 = $y + 92 + [Math]::Sin($angle) * 110
        $g.DrawLine($thin, [float]$x1, [float]$y1, [float]$x2, [float]$y2)
      }
    }
    "moon" {
      $g.FillEllipse($brush, $x + 30, $y + 20, 140, 140)
      $g.FillEllipse($softBrush, $x + 80, $y, 125, 145)
    }
    "phone" {
      FillRounded $g ($x + 35) $y 110 190 24 $brush
      $g.FillRectangle($softBrush, $x + 55, $y + 30, 70, 115)
      $g.FillEllipse($softBrush, $x + 82, $y + 158, 16, 16)
    }
    "note" {
      FillRounded $g ($x + 15) $y 150 190 24 $brush
      $g.DrawLine($thin, $x + 45, $y + 55, $x + 135, $y + 55)
      $g.DrawLine($thin, $x + 45, $y + 95, $x + 125, $y + 95)
      $g.DrawLine($thin, $x + 45, $y + 135, $x + 100, $y + 135)
    }
    "body" {
      $g.DrawEllipse($pen, $x + 60, $y - 5, 60, 60)
      $g.DrawLine($pen, $x + 90, $y + 60, $x + 90, $y + 170)
      $g.DrawArc($thin, $x + 25, $y + 65, 130, 95, 180, 180)
      $g.DrawLine($pen, $x + 90, $y + 170, $x + 45, $y + 220)
      $g.DrawLine($pen, $x + 90, $y + 170, $x + 135, $y + 220)
    }
    "mood" {
      $g.DrawEllipse($pen, $x, $y, 175, 175)
      $g.FillEllipse($brush, $x + 48, $y + 58, 18, 18)
      $g.FillEllipse($brush, $x + 110, $y + 58, 18, 18)
      $g.DrawArc($thin, $x + 50, $y + 75, 80, 60, 15, 150)
    }
    "spark" {
      $points = [System.Drawing.Point[]]@(
        [System.Drawing.Point]::new($x + 90, $y),
        [System.Drawing.Point]::new($x + 115, $y + 70),
        [System.Drawing.Point]::new($x + 185, $y + 92),
        [System.Drawing.Point]::new($x + 115, $y + 115),
        [System.Drawing.Point]::new($x + 90, $y + 185),
        [System.Drawing.Point]::new($x + 65, $y + 115),
        [System.Drawing.Point]::new($x, $y + 92),
        [System.Drawing.Point]::new($x + 65, $y + 70)
      )
      $g.FillPolygon($brush, $points)
    }
    "music" {
      $g.DrawLine($pen, $x + 70, $y + 25, $x + 70, $y + 150)
      $g.DrawLine($pen, $x + 70, $y + 25, $x + 155, $y + 45)
      $g.DrawLine($pen, $x + 155, $y + 45, $x + 155, $y + 170)
      $g.FillEllipse($brush, $x + 20, $y + 135, 65, 45)
      $g.FillEllipse($brush, $x + 105, $y + 155, 65, 45)
    }
    "message" {
      FillRounded $g ($x + 5) ($y + 35) 180 120 28 $brush
      $g.FillPolygon($brush, [System.Drawing.Point[]]@(
        [System.Drawing.Point]::new($x + 60, $y + 150),
        [System.Drawing.Point]::new($x + 80, $y + 205),
        [System.Drawing.Point]::new($x + 115, $y + 150)
      ))
      $g.DrawLine($thin, $x + 45, $y + 80, $x + 145, $y + 80)
      $g.DrawLine($thin, $x + 45, $y + 115, $x + 125, $y + 115)
    }
    "organization" {
      FillRounded $g ($x - 5) ($y + 20) 190 150 24 $brush
      $g.FillRectangle($softBrush, $x + 20, $y + 45, 45, 35)
      $g.FillRectangle($softBrush, $x + 80, $y + 45, 70, 20)
      $g.FillRectangle($softBrush, $x + 20, $y + 100, 130, 18)
      $g.FillRectangle($softBrush, $x + 20, $y + 135, 100, 18)
    }
    "work" {
      $g.DrawRectangle($pen, $x - 10, $y + 20, 190, 115)
      $g.DrawLine($pen, $x + 35, $y + 135, $x + 10, $y + 205)
      $g.DrawLine($pen, $x + 135, $y + 135, $x + 165, $y + 205)
      $g.DrawLine($thin, $x + 25, $y + 70, $x + 145, $y + 70)
      $g.DrawLine($thin, $x + 25, $y + 105, $x + 105, $y + 105)
    }
    "stretch" {
      $g.FillEllipse($brush, $x + 73, $y, 42, 42)
      $g.DrawLine($pen, $x + 95, $y + 45, $x + 95, $y + 140)
      $g.DrawLine($pen, $x + 95, $y + 70, $x + 35, $y + 20)
      $g.DrawLine($pen, $x + 95, $y + 70, $x + 155, $y + 20)
      $g.DrawLine($pen, $x + 95, $y + 140, $x + 45, $y + 210)
      $g.DrawLine($pen, $x + 95, $y + 140, $x + 145, $y + 210)
    }
    "neck" {
      $g.FillEllipse($brush, $x + 70, $y + 5, 52, 52)
      $g.DrawLine($pen, $x + 96, $y + 62, $x + 96, $y + 120)
      $g.DrawArc($thin, $x + 25, $y + 75, 145, 90, 205, 130)
      $g.DrawLine($pen, $x + 45, $y + 135, $x + 150, $y + 135)
    }
    "spine" {
      $g.DrawArc($pen, $x + 35, $y + 5, 110, 205, 265, 210)
      for ($i = 0; $i -lt 5; $i++) {
        $yy = $y + 35 + ($i * 34)
        $g.DrawLine($thin, $x + 80, $yy, $x + 130, $yy + 12)
      }
    }
    "legs" {
      $g.FillEllipse($brush, $x + 75, $y, 42, 42)
      $g.DrawLine($pen, $x + 96, $y + 45, $x + 96, $y + 120)
      $g.DrawLine($pen, $x + 96, $y + 120, $x + 30, $y + 205)
      $g.DrawLine($pen, $x + 96, $y + 120, $x + 165, $y + 205)
      $g.DrawLine($thin, $x + 25, $y + 205, $x + 75, $y + 205)
      $g.DrawLine($thin, $x + 120, $y + 205, $x + 175, $y + 205)
    }
    "walk" {
      $g.FillEllipse($brush, $x + 76, $y, 42, 42)
      $g.DrawLine($pen, $x + 97, $y + 48, $x + 80, $y + 125)
      $g.DrawLine($pen, $x + 85, $y + 75, $x + 40, $y + 110)
      $g.DrawLine($pen, $x + 88, $y + 75, $x + 145, $y + 105)
      $g.DrawLine($pen, $x + 80, $y + 125, $x + 45, $y + 205)
      $g.DrawLine($pen, $x + 80, $y + 125, $x + 135, $y + 200)
    }
    "squat" {
      $g.FillEllipse($brush, $x + 72, $y, 42, 42)
      $g.DrawLine($pen, $x + 94, $y + 45, $x + 115, $y + 115)
      $g.DrawLine($pen, $x + 115, $y + 115, $x + 155, $y + 160)
      $g.DrawLine($pen, $x + 115, $y + 115, $x + 75, $y + 165)
      $g.DrawLine($pen, $x + 75, $y + 165, $x + 35, $y + 205)
      $g.DrawLine($pen, $x + 155, $y + 160, $x + 185, $y + 205)
    }
    "cardio" {
      $g.FillEllipse($brush, $x + 72, $y, 42, 42)
      $g.DrawLine($pen, $x + 94, $y + 46, $x + 94, $y + 130)
      $g.DrawLine($pen, $x + 94, $y + 75, $x + 35, $y + 35)
      $g.DrawLine($pen, $x + 94, $y + 75, $x + 155, $y + 35)
      $g.DrawLine($pen, $x + 94, $y + 130, $x + 45, $y + 200)
      $g.DrawLine($pen, $x + 94, $y + 130, $x + 145, $y + 200)
      $g.DrawArc($thin, $x + 20, $y + 175, 150, 40, 200, 140)
    }
    "breath_mobility" {
      $g.DrawEllipse($pen, $x + 20, $y + 30, 80, 80)
      $g.DrawArc($thin, $x + 95, $y + 35, 90, 90, 210, 260)
      $g.DrawLine($pen, $x + 80, $y + 140, $x + 35, $y + 200)
      $g.DrawLine($pen, $x + 80, $y + 140, $x + 150, $y + 205)
    }
    "jump_rope" {
      $g.FillEllipse($brush, $x + 72, $y, 42, 42)
      $g.DrawLine($pen, $x + 94, $y + 45, $x + 94, $y + 135)
      $g.DrawLine($pen, $x + 94, $y + 75, $x + 35, $y + 105)
      $g.DrawLine($pen, $x + 94, $y + 75, $x + 155, $y + 105)
      $g.DrawArc($thin, $x + 10, $y + 30, 170, 210, 190, 160)
      $g.DrawLine($pen, $x + 94, $y + 135, $x + 60, $y + 205)
      $g.DrawLine($pen, $x + 94, $y + 135, $x + 130, $y + 205)
    }
    "boxing" {
      $g.FillEllipse($brush, $x + 70, $y, 42, 42)
      $g.DrawLine($pen, $x + 92, $y + 45, $x + 92, $y + 145)
      $g.DrawLine($pen, $x + 92, $y + 75, $x + 30, $y + 55)
      $g.DrawLine($pen, $x + 92, $y + 75, $x + 165, $y + 35)
      $g.FillEllipse($brush, $x + 0, $y + 35, 42, 42)
      $g.FillEllipse($brush, $x + 152, $y + 18, 42, 42)
      $g.DrawLine($pen, $x + 92, $y + 145, $x + 55, $y + 210)
      $g.DrawLine($pen, $x + 92, $y + 145, $x + 135, $y + 210)
    }
    "home_functional" {
      $g.DrawRectangle($pen, $x + 15, $y + 65, 155, 120)
      $g.DrawLine($pen, $x + 15, $y + 65, $x + 92, $y + 10)
      $g.DrawLine($pen, $x + 92, $y + 10, $x + 170, $y + 65)
      $g.FillEllipse($brush, $x + 72, $y + 85, 42, 42)
      $g.DrawLine($thin, $x + 93, $y + 128, $x + 93, $y + 170)
      $g.DrawLine($thin, $x + 93, $y + 145, $x + 55, $y + 165)
      $g.DrawLine($thin, $x + 93, $y + 145, $x + 130, $y + 165)
    }
    "yoga" {
      $g.FillEllipse($brush, $x + 74, $y, 42, 42)
      $g.DrawLine($pen, $x + 95, $y + 45, $x + 95, $y + 135)
      $g.DrawArc($thin, $x + 20, $y + 65, 150, 90, 190, 160)
      $g.DrawLine($pen, $x + 95, $y + 135, $x + 35, $y + 190)
      $g.DrawLine($pen, $x + 95, $y + 135, $x + 155, $y + 190)
    }
  }

  $pen.Dispose()
  $thin.Dispose()
  $brush.Dispose()
  $softBrush.Dispose()
}

foreach ($asset in $assets) {
  $path = Join-Path $outDir "$($asset.slug).png"
  if (Test-Path $path) { continue }

  $bmp = New-Object System.Drawing.Bitmap 1200, 750
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

  $bg1 = ColorFromHex "#F8FAFC"
  $bg2 = ColorFromHex $asset.color
  $rect = New-Object System.Drawing.Rectangle 0, 0, 1200, 750
  $gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $bg1, $bg2, 20)
  $g.FillRectangle($gradient, $rect)

  $white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(230, 255, 255, 255))
  $soft = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(110, (ColorFromHex $asset.color)))
  $accent = ColorFromHex $asset.accent
  $navyBrush = New-Object System.Drawing.SolidBrush((ColorFromHex "#172554"))
  $mutedBrush = New-Object System.Drawing.SolidBrush((ColorFromHex "#334155"))
  $accentBrush = New-Object System.Drawing.SolidBrush($accent)
  $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, $accent), 3)

  FillRounded $g 70 70 1060 610 60 $white
  $g.DrawPath($linePen, (RoundedPath 70 70 1060 610 60))
  FillRounded $g 118 122 220 54 27 $soft

  $fontArea = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold)
  $fontTitle = New-Object System.Drawing.Font("Segoe UI", 54, [System.Drawing.FontStyle]::Bold)
  $fontText = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Regular)
  $fontSmall = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Bold)

  $g.DrawString($asset.area, $fontArea, $accentBrush, [System.Drawing.RectangleF]::new(145, 132, 420, 45))
  $g.DrawString($asset.title, $fontTitle, $navyBrush, [System.Drawing.RectangleF]::new(120, 230, 560, 150))
  $g.DrawString("Pausa guiada e preventiva", $fontText, $mutedBrush, [System.Drawing.RectangleF]::new(124, 395, 500, 70))
  $g.DrawString("Pausa AI", $fontSmall, $mutedBrush, [System.Drawing.RectangleF]::new(124, 590, 260, 40))

  DrawIcon $g $asset.icon $accent ([System.Drawing.Color]::FromArgb(230, 255, 255, 255))

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)

  $linePen.Dispose()
  $white.Dispose()
  $soft.Dispose()
  $navyBrush.Dispose()
  $mutedBrush.Dispose()
  $accentBrush.Dispose()
  $fontArea.Dispose()
  $fontTitle.Dispose()
  $fontText.Dispose()
  $fontSmall.Dispose()
  $gradient.Dispose()
  $g.Dispose()
  $bmp.Dispose()
}
