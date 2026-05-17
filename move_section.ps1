$c = Get-Content "index.html" -Raw -Encoding UTF8
$s10 = $c.IndexOf("<!-- SECTION 10")
$s12 = $c.IndexOf("<!-- SECTION 12")
if ($s10 -gt -1 -and $s12 -gt -1) {
    $sec = $c.Substring($s10, $s12 - $s10)
    $c = $c.Remove($s10, $s12 - $s10)
    $s7New = $c.IndexOf("<!-- SECTION 7")
    $c = $c.Insert($s7New, $sec)
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) "index.html"), $c, [System.Text.Encoding]::UTF8)
    Write-Host "Success"
} else {
    Write-Host "Failed to find sections"
}
