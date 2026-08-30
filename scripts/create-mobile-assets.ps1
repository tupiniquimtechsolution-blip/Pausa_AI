Add-Type -AssemblyName System.Drawing

$assetDir = Join-Path (Get-Location) "mobile\assets"
New-Item -ItemType Directory -Force -Path $assetDir | Out-Null

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

function DrawLogo($path, [int]$size, [bool]$splash) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

  $bg = New-Object System.Drawing.SolidBrush((ColorFromHex "#F8FAFC"))
  $navy = New-Object System.Drawing.SolidBrush((ColorFromHex "#172554"))
  $mint = New-Object System.Drawing.SolidBrush((ColorFromHex "#A7F3D0"))
  $lavender = New-Object System.Drawing.SolidBrush((ColorFromHex "#DDD6FE"))
  $line = New-Object System.Drawing.Pen((ColorFromHex "#172554"), [Math]::Max(6, $size / 70))

  $g.FillRectangle($bg, 0, 0, $size, $size)
  if ($splash) {
    $font = New-Object System.Drawing.Font("Segoe UI", [Math]::Round($size / 9), [System.Drawing.FontStyle]::Bold)
    $subFont = New-Object System.Drawing.Font("Segoe UI", [Math]::Round($size / 28), [System.Drawing.FontStyle]::Regular)
    $g.DrawString("Pausa AI", $font, $navy, [System.Drawing.RectangleF]::new($size * 0.19, $size * 0.58, $size * 0.7, $size * 0.16))
    $g.DrawString("Pequenas pausas para respirar melhor o dia.", $subFont, $navy, [System.Drawing.RectangleF]::new($size * 0.20, $size * 0.72, $size * 0.62, $size * 0.12))
    $font.Dispose()
    $subFont.Dispose()
  }

  $cardSize = $size * 0.36
  $cardX = ($size - $cardSize) / 2
  $cardY = if ($splash) { $size * 0.22 } else { ($size - $cardSize) / 2 }
  $cardPath = RoundedPath $cardX $cardY $cardSize $cardSize ($cardSize * 0.24)
  $g.FillPath($mint, $cardPath)
  $g.DrawPath($line, $cardPath)

  $cx = $size / 2
  $cy = $cardY + $cardSize / 2
  $r = $cardSize * 0.22
  $g.FillEllipse($lavender, $cx - $r, $cy - $r, $r * 2, $r * 2)
  $g.DrawArc($line, $cx - $r * 1.35, $cy - $r * 1.35, $r * 2.7, $r * 2.7, 210, 210)
  $g.FillEllipse($navy, $cx - $r * 0.18, $cy - $r * 0.18, $r * 0.36, $r * 0.36)

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)

  $cardPath.Dispose()
  $line.Dispose()
  $bg.Dispose()
  $navy.Dispose()
  $mint.Dispose()
  $lavender.Dispose()
  $g.Dispose()
  $bmp.Dispose()
}

DrawLogo (Join-Path $assetDir "icon.png") 1024 $false
DrawLogo (Join-Path $assetDir "adaptive-icon.png") 1024 $false
DrawLogo (Join-Path $assetDir "splash.png") 2048 $true
