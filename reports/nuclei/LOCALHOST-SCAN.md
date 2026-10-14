# Nuclei Host-Port Security Scan

## Service
Frontend Dashboard

## Target
http://host.docker.internal:5173

The service is published on localhost:5173 on the Windows host.

Because Nuclei runs inside Docker, host.docker.internal is used to access the host's published port.

## Scan Details
- Date: October 14, 2026
- Tool: Nuclei v3.11.1
- Templates loaded: 6,607
- Severity filter: Medium, High, Critical
- Duration: 21 minutes
- Result: 0 findings

## Evidence
frontend-localhost-results.jsonl

The JSONL file is empty because no findings were detected.

## Limitations
No findings does not guarantee that the application is free of vulnerabilities.
