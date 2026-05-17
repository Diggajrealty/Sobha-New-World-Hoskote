import re

def main():
    file_path = r"c:\Users\vansh\OneDrive\Desktop\Sobha\Sobha One World\Sobha One World\index.html"
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Move Pricing Section
    # Find Section 10 start
    s10_start_idx = content.find("<!-- SECTION 10 — CONFIGURATION & PRICING -->")
    
    # Find Section 12 start (which is right after Section 11 ends)
    s12_start_idx = content.find("<!-- SECTION 12 — MASTER PLAN OVERVIEW -->")
    
    if s10_start_idx != -1 and s12_start_idx != -1:
        sections_10_11 = content[s10_start_idx:s12_start_idx]
        
        # Remove sections 10 & 11 from their current position
        content = content[:s10_start_idx] + content[s12_start_idx:]
        
        # Insert them before Section 7
        s7_start_idx = content.find("<!-- SECTION 7 — CTA FORM #1 -->")
        if s7_start_idx != -1:
            content = content[:s7_start_idx] + sections_10_11 + "\n\n" + content[s7_start_idx:]
            print("Moved Sections 10 & 11 before Section 7.")

    # Remove zero brokerage
    content = re.sub(r'(?i)Zero brokerage[.,]*\s*', '', content)
    content = re.sub(r'(?i)at absolutely zero brokerage charges', 'with full transparency', content)
    content = re.sub(r'(?i)zero brokerage to buyers,', '', content)
    content = re.sub(r'(?i)\+\s*zero brokerage\s*✅', '', content)
    
    # Replace unit counts
    content = content.replace("5,406", "3000+")
    content = content.replace("5406", "3000+")
    
    # Replace floor counts
    content = content.replace("54 floors", "44+ floors")
    content = content.replace("G+54", "G+44")

    # Replace duplicate image references
    content = content.replace('src="images/floor-plan-2bhk.jpg" alt="2 BHK Grande Floor Plan"', 'src="images/floor-plan-2bhk-grande.jpg" alt="2 BHK Grande Floor Plan"')
    content = content.replace('src="images/floor-plan-3bhk.jpg" alt="3 BHK Grande Floor Plan"', 'src="images/floor-plan-3bhk-grande.jpg" alt="3 BHK Grande Floor Plan"')
    
    # Fix the duplicate connectivity map
    # First instance is at 4167 (connectivity), second is at 5318 (STRR)
    content = content.replace('src="images/hoskote-connectivity.jpg" alt="STRR NH-75 infrastructure Hoskote East Bangalore 2026"', 'src="images/strr-infra.jpg" alt="STRR NH-75 infrastructure Hoskote East Bangalore 2026"')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    main()
