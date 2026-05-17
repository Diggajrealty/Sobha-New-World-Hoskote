
import sys

def check_duplicates(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    ids = {}
    for i, line in enumerate(lines):
        if 'id="' in line:
            start = line.find('id="') + 4
            end = line.find('"', start)
            id_val = line[start:end]
            if id_val in ids:
                ids[id_val].append(i + 1)
            else:
                ids[id_val] = [i + 1]
    
    for id_val, line_nums in ids.items():
        if len(line_nums) > 1:
            print(f"ID '{id_val}' duplicated at lines: {line_nums}")

if __name__ == "__main__":
    check_duplicates(sys.argv[1])
