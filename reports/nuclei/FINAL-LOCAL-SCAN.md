# Final Local Nuclei Scan

Target: http://127.0.0.1:5173
Nuclei version: 3.11.1
Templates version: 10.5.0

## Results

- Process exit code: 0
- Templates loaded: 10,671
- Matches found: 13
- Severity of reported matches: informational
- No connection errors were reported for ports 4040 or 9780.
- A connection to port 5814 was refused.

## Findings

The scan identified Nginx and reported missing HTTP security headers,
including Content-Security-Policy, X-Frame-Options, and
X-Content-Type-Options.

## Scope and Limitations

The target was a local frontend application on port 5173.

Five Apache Spark and UniFi templates were requested for exclusion
because they targeted unrelated local ports.

The scanner reported use of an Interactsh server despite the
-no-interactsh argument. External interaction cannot be ruled out.

No claim is made that all potential vulnerabilities were excluded
or that the application is fully secure.

The original execution log and findings are included as evidence.
