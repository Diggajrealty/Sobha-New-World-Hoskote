import os
import glob
import re

def main():
    html_files = glob.glob('*.html')
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 1. Replace $ with ₹
        content = content.replace('$', '₹')
        
        # 2. Remove "Authorized Channel Partner" and variants
        content = re.sub(r'\s*—\s*Authorized Channel Partner', '', content, flags=re.IGNORECASE)
        content = re.sub(r'\s*\|\s*✅\s*Authorized Channel Partner', '', content, flags=re.IGNORECASE)
        content = re.sub(r'\s*\|\s*Authorized Channel Partner', '', content, flags=re.IGNORECASE)
        content = re.sub(r'Authorized Channel Partner', '', content, flags=re.IGNORECASE)
        
        # 3. Change "Call Now" to "Register"
        content = re.sub(r'Call Now', 'Register', content, flags=re.IGNORECASE)
        
        if file == 'index.html':
            # 4. Hero section pre-launch -> launch
            # Find the hero section
            hero_match = re.search(r'(<section class="hero".*?</section>)', content, re.DOTALL)
            if hero_match:
                hero_content = hero_match.group(1)
                hero_content_new = re.sub(r'Pre-launch|Pre-Launch|pre-launch', 'Launch', hero_content, flags=re.IGNORECASE)
                content = content.replace(hero_content, hero_content_new)
            
            # 5. "how soon are you planneing to buy" -> "how soon are you planning to visit"
            content = re.sub(r'planning to buy\?', 'planning to visit?', content, flags=re.IGNORECASE)
            
            # 6. Align text with diagrams
            content = content.replace('max-width: 900px;', 'max-width: 100%;')
            content = content.replace('max-width: 1000px;', 'max-width: 100%;')
            # For .seo-text and .seo-paragraph-bottom, change text-align: center to left (as justify might look weird on short lines)
            # Actually, justify is better for blocks of text to align with diagrams.
            content = re.sub(r'(\.seo-text\s*\{[^}]*text-align:\s*)center([^}]*\})', r'\1justify\2', content)
            content = re.sub(r'(\.seo-paragraph-bottom\s*\{[^}]*text-align:\s*)center([^}]*\})', r'\1justify\2', content)
            
            # 7. Images not completely filling the grid
            if '.img-large' in content and 'height: 100%;' not in content[content.find('.img-large'):content.find('.img-large')+100]:
                content = content.replace('.img-large {\n    grid-column: span 2;\n}', '.img-large {\n    grid-column: span 2;\n    height: 100%;\n}\n.img-small {\n    height: 100%;\n}')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == '__main__':
    main()
