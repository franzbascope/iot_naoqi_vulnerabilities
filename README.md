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



# Pepper Java SDK Security Analysis

## Project Overview
Security audit of SoftBank Robotics' Pepper Java SDK using OWASP Dependency-Check to identify vulnerable dependencies.

## SDK Source
Official Pepper SDK obtained from:  
🔗 [Pepper SDK IntelliJ Plugin](https://plugins.jetbrains.com/plugin/8354-pepper-sdk)

## Analysis Tool
**OWASP Dependency-Check**  
📖 [Official Documentation](https://owasp.org/www-project-dependency-check/)

Key features:
- Identifies known vulnerabilities in dependencies
- Supports Java/Kotlin projects
- Generates HTML/XML/JSON reports
- Uses NVD database for CVE matching

## Report
Output report is in folder ./reports/dependency-check-report.html

## Commmands used to manually add SDK jars to maven project.

- Create a empty Maven project using JDK 17
- Download the Jars to a folder.
- Run the following commands, replace ./lib with the actual path where you downloaded the jars:
mvn install:install-file -Dfile=./lib/annotations-13.0.jar -DgroupId=com.pepper -DartifactId=annotations -Dversion=13.0 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/kotlin-stdlib-1.3.72.jar -DgroupId=com.pepper -DartifactId=kotlin-stdlib -Dversion=1.3.72 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/kotlin-stdlib-common-1.3.72.jar -DgroupId=com.pepper -DartifactId=kotlin-stdlib-common -Dversion=1.3.72 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/kotlin-stdlib-jdk7-1.3.72.jar -DgroupId=com.pepper -DartifactId=kotlin-stdlib-jdk7 -Dversion=1.3.72 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/kotlin-stdlib-jdk8-1.3.72.jar -DgroupId=com.pepper -DartifactId=kotlin-stdlib-jdk8 -Dversion=1.3.72 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/libqi-java-desktop-2.0.3.jar -DgroupId=com.pepper -DartifactId=libqi-java-desktop -Dversion=2.0.3 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/rdta-1.5.3.jar -DgroupId=com.pepper -DartifactId=rdta -Dversion=1.5.3 -Dpackaging=jar

mvn install:install-file -Dfile=./lib/searchableOptions-1.5.3.jar -DgroupId=com.pepper -DartifactId=searchableOptions -Dversion=1.5.3 -Dpackaging=jar