---
title: "NXDOMAIN Redirection Guidelines"
source: "/space/nios90/1420231046"
pageId: "1420231046"
---
The following summarizes how a DNS member responds to a query for an A record when the NXDOMAIN feature is enabled:

- If there are no rulesets configured, the DNS member queries other name servers.
  
  - If the DNS member receives a non-NXDOMAIN response from an authoritative server, it forwards the response to the DNS client.
  - If the DNS member receives an NXDOMAIN response from an authoritative server, it redirect the DNS client.
- If rulesets are configured, the DNS member tries to match the domain name in the query with a domain name in the rules.
  
  - If the DNS member finds a match, it perform the action specified in the rule.
    
    - If the action is "Redirect", the DNS member redirect the DNS client.
    - If the action is "Pass", the DNS member queries other name servers and forwards the response to the DNS client.
    - If the action is "Modify", the DNS member queries other name servers. If it receives a non-NXDOMAIN response, it forwards the response to the DNS client; if it receives and NXDOMAIN response, it redirects the DNS client.
  - If the DNS member does not find a match, the DNS member queries other name servers.
    
    - If the DNS member receives a non-NXDOMAIN response, it forwards the response to the DNS client.
    - If the DNS member receives an NXDOMAIN response from an authoritative server, it redirects the DNS client.

Note that if an A record with a dotted hostname is added to an authoritative zone through a dynamic DNS update, and that A record should actually belong in an existing delegation, the appliance may not redirect a query for that A record according to the Blacklist and NXDOMAIN guidelines.
