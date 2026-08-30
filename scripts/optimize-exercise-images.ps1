Add-Type -AssemblyName System.Drawing

$dir = Join-Path (Get-Location) "public\exercises"
$maxWidthForLargeFiles = 720
$largeFileThresholdBytes = 900KB

Get-ChildItem $dir -Filter "*.png" | ForEach-Object {
  if ($_.Length -lt $largeFileThresholdBytes) { return }

  $sourcePath = $_.FullName
  $image = [System.Drawing.Image]::FromFile($sourcePath)

  try {
    if ($image.Width -le $maxWidthForLargeFiles) { return }

    $ratio = $maxWidthForLargeFiles / $image.Width
    $targetWidth = [int]$maxWidthForLargeFiles
    $targetHeight = [int][Math]::Round($image.Height * $ratio)
    $bitmap = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)

    $tempPath = "$sourcePath.tmp.png"
    $bitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
    $image.Dispose()

    Move-Item -LiteralPath $tempPath -Destination $sourcePath -Force
  } finally {
    $image.Dispose()
  }
}
