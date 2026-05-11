$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $files) {
    $path = $file.FullName
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

    # 1. Replace $ with ₹
    $content = $content.Replace("$", "₹")

    # 2. Remove "Authorized Channel Partner"
    $content = $content -replace "\s*—\s*Authorized Channel Partner", ""
    $content = $content -replace "\s*\|\s*✅\s*Authorized Channel Partner", ""
    $content = $content -replace "\s*\|\s*Authorized Channel Partner", ""
    $content = $content -replace "(?i)Authorized Channel Partner", ""

    # 3. Change "Call Now" to "Register"
    $content = $content -replace "(?i)Call Now", "Register"

    if ($file.Name -eq "index.html") {
        # 4. Hero section pre-launch -> launch
        if ($content -match "(?s)(<section class=`"hero`".*?</section>)") {
            $heroContent = $matches[1]
            $newHeroContent = $heroContent -replace "(?i)pre-launch", "Launch"
            $content = $content.Replace($heroContent, $newHeroContent)
        }

        # 5. planning to buy -> planning to visit
        $content = $content -replace "(?i)planning to buy\?", "planning to visit?"

        # 6. Align text with diagrams
        $content = $content.Replace("max-width: 900px;", "max-width: 100%;")
        $content = $content.Replace("max-width: 1000px;", "max-width: 100%;")
        $content = $content -replace "(\.seo-text\s*\{[^}]*text-align:\s*)center([^}]*\})", "`$1justify`$2"
        $content = $content -replace "(\.seo-paragraph-bottom\s*\{[^}]*text-align:\s*)center([^}]*\})", "`$1justify`$2"

        # 7. Images grid fix
        if ($content.Contains(".img-large") -and -not $content.Contains("height: 100%;")) {
            $content = $content.Replace(".img-large {`n    grid-column: span 2;`n}", ".img-large {`n    grid-column: span 2;`n    height: 100%;`n}`n.img-small {`n    height: 100%;`n}")
            $content = $content.Replace(".img-large {`r`n    grid-column: span 2;`r`n}", ".img-large {`r`n    grid-column: span 2;`r`n    height: 100%;`r`n}`r`n.img-small {`r`n    height: 100%;`r`n}")
        }
    }

    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}
