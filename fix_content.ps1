$files = Get-ChildItem -Path . -Filter *.html

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    # 1. Replace $ with ₹
    $content = $content -replace '\$', '₹'

    # 2. Remove "Authorized Channel Partner" and variants
    $content = $content -replace '\s*—\s*Authorized Channel Partner', ''
    $content = $content -replace '\s*\|\s*✅\s*Authorized Channel Partner', ''
    $content = $content -replace '\s*\|\s*Authorized Channel Partner', ''
    $content = $content -replace '(?i)Authorized Channel Partner', ''

    # 3. Change "Call Now" to "Register"
    $content = $content -replace '(?i)Call Now', 'Register'

    if ($file.Name -eq 'index.html') {
        # 4. Hero section pre-launch -> launch
        # regex to match hero section and replace inside it
        if ($content -match '(?s)(<section class="hero".*?</section>)') {
            $heroContent = $matches[1]
            $newHeroContent = $heroContent -replace '(?i)pre-launch', 'Launch'
            $content = $content.Replace($heroContent, $newHeroContent)
        }

        # 5. "how soon are you planneing to buy" -> "how soon are you planning to visit"
        $content = $content -replace '(?i)planning to buy\?', 'planning to visit?'

        # 6. Align text with diagrams
        $content = $content.Replace('max-width: 900px;', 'max-width: 100%;')
        $content = $content.Replace('max-width: 1000px;', 'max-width: 100%;')
        $content = $content -replace '(\.seo-text\s*\{[^}]*text-align:\s*)center([^}]*\})', '$1justify$2'
        $content = $content -replace '(\.seo-paragraph-bottom\s*\{[^}]*text-align:\s*)center([^}]*\})', '$1justify$2'
        
        # 7. Images not completely filling the grid
        if ($content.Contains('.img-large') -and -not $content.Contains('height: 100%;')) {
            $content = $content.Replace('.img-large {
    grid-column: span 2;
}', '.img-large {
    grid-column: span 2;
    height: 100%;
}
.img-small {
    height: 100%;
}')
        }
    }

    # Save content
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
