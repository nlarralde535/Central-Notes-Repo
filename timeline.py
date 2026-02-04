from pathlib import Path
import html
import subprocess

def format_entries(entries):
    result = "<table>"
    for date,entry in (entries):
        result += "<tr>"
        result += f'<td class="subset">{date}</td>'
        result += f'<td>{entry}</td>'
        result += "</tr>"
    result += "</table>"
    return result

out = Path("./pages/index.html")

path = "./timeline_entries/"

rows = []
arr_dates = []
dict_dates = {}
for path in sorted(Path(path).iterdir(), reverse=True):
    if path.is_file():
        with path.open(errors="ignore") as f:
            s = f.read(200)
            more = "..." if f.read(1) else ""
        yyyy_mm_dd = Path(path.name).stem
        yyyy_mm = yyyy_mm_dd[:7]
        entry = s + more
        if yyyy_mm not in dict_dates:
            arr_dates.append(yyyy_mm)
            dict_dates[yyyy_mm] = []
        dict_dates[yyyy_mm].append([yyyy_mm_dd[5:], f'<div class="entry">{entry}</div>'])

for d in dict_dates:
    rows.append(f'''
        <tr>
            <td style="vertical-align: top;">
                {d}
            </td>
            <td>
                {format_entries(dict_dates[d])}
            </td>
        </tr>''')

out.write_text(f"""
<!doctype html>
<html>
<head>
<style>
    body {{
        font-family: Arial;   
        font-size: 12pt;
    }}
    table {{
      border-collapse: collapse;
    }}
    td {{
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 1px solid black;
      padding: 8px;
    }}
    td:first-child {{
        border-right: 3px solid black;
    }}
    td:first-child.subset {{
        border-right: none;
    }}
    .entry {{
        border: 1px dashed green;
        background-color: lightgreen;
        border-radius: 8px;
        padding: 5px;
        width: 300px;
        margin: 10px;
    }}
</style>
</head>
<body>
<table>
{''.join(rows)}
</table>
</body>
</html>
""")

