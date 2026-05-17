$content = Get-Content "index.html" -Raw -Encoding UTF8
$content = $content -replace "(?i)Zero brokerage[.,]*\s*", ""
$content = $content -replace "(?i)at absolutely zero brokerage charges", "with full transparency"
$content = $content -replace "(?i)zero brokerage to buyers,", ""
$content = $content -replace "(?i)\+\s*zero brokerage\s*✅", ""
$content = $content.Replace("5,406", "3000+")
$content = $content.Replace("5406", "3000+")
$content = $content.Replace("54 floors", "44+ floors")
$content = $content.Replace("G+54", "G+44")
$content = $content.Replace('src="images/floor-plan-2bhk.jpg" alt="2 BHK Grande Floor Plan"', 'src="images/floor-plan-2bhk-grande.jpg" alt="2 BHK Grande Floor Plan"')
$content = $content.Replace('src="images/floor-plan-3bhk.jpg" alt="3 BHK Grande Floor Plan"', 'src="images/floor-plan-3bhk-grande.jpg" alt="3 BHK Grande Floor Plan"')
$content = $content.Replace('src="images/hoskote-connectivity.jpg" alt="STRR NH-75 infrastructure Hoskote East Bangalore 2026"', 'src="images/strr-infra.jpg" alt="STRR NH-75 infrastructure Hoskote East Bangalore 2026"')

$s10 = $content.IndexOf("<!-- SECTION 10 — CONFIGURATION & PRICING -->")
$s12 = $content.IndexOf("<!-- SECTION 12 — MASTER PLAN OVERVIEW -->")
if ($s10 -gt -1 -and $s12 -gt -1) {
    $sec = $content.Substring($s10, $s12 - $s10)
    $content = $content.Remove($s10, $s12 - $s10)
    $s7New = $content.IndexOf("<!-- SECTION 7 — CTA FORM #1 -->")
    $content = $content.Insert($s7New, $sec + "`r`n`r`n")
}

[System.IO.File]::WriteAllText((Join-Path (Get-Location) "index.html"), $content, [System.Text.Encoding]::UTF8)
