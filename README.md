# NAOqi Python SDK Security Audit

## Project Description
This project performs a security analysis of Aldebaran's NAOqi Python SDK using static code analysis techniques. The goal is to identify potential vulnerabilities in the SDK that could impact applications built with it.

## Source SDK
The analyzed Python SDK was officially downloaded from:
🔗 [Aldebaran NAO6 Software Downloads](https://aldebaran.com/en/support/kb/nao6/downloads/nao6-software-downloads/)

## Analysis Tool
The audit was performed using:
**Bandit** - A Python static code security analyzer  
📖 [Bandit Documentation](https://bandit.readthedocs.io/en/latest/)

Key capabilities:
- Identifies common security issues in Python code
- Detects vulnerabilities like:
  - Code injection risks
  - Hardcoded secrets
  - Insecure dependencies
  - Improper subprocess usage

## Analysis Report
The complete security report is available in HTML format at:
`/naoqi_sdk_python_bandit_report/report.html`
