import sys
import subprocess
  
# Arguments passed 
nameFile = sys.argv[1]
newNameFile = nameFile.replace('docx', 'md')
print (newNameFile)
result = subprocess.check_output(['pandoc', '--lua-filter', 'rules_docx.lua', '-s' ,nameFile, '-o',newNameFile])

