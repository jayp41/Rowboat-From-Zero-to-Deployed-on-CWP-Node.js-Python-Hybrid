import sys
import json

def rowboat_logic(task):
# Your agent logic here
response = f"Rowboat received: {task}"
return response

if name == "main":
task = sys.argv[1] if len(sys.argv) > 1 else ''
result = rowboat_logic(task)
print(result)
