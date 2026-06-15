---
title: "Blacklists"
source: "/space/nios90/280665713"
pageId: "280665713"
---
Your organization can prevent customers or employees from accessing certain Internet resources, particularly web sites, by prohibiting a recursive DNS member from resolving queries for domain names that you specify.  
You can create blacklist rules that specify how a DNS member responds to recursive queries for data for which it is not authoritative. Each rule specifies a domain name and the action of the DNS member when the domain name in the query matches that in the rule. Instead of resolving the query, the DNS member can redirect the DNS client to predefined IP addresses or return a REFUSED response code indicating that resolution is not performed because of local policy.  
When the DNS member receives a query for data for which it is not authoritative, it first tries to match the domain name in the query with a domain name in any of its rules. If it finds a match, it responds according to the action specified in the rule. If it does not find a match and the NXDOMAIN feature is enabled, the DNS member checks the NXDOMAIN rulesets for a match and responds accordingly. If the NXDOMAIN feature is not enabled, the DNS member resolves the query. (For information about the NXDOMAIN feature, see [*About NXDOMAIN Redirection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665798)*.*  
Infoblox DNS members can modify their responses to queries for A records only. Therefore, if the matched query is for a record other than an A record, including a query with a type of "ANY", the DNS member sends a REFUSED response if the matched rule has an action of "Redirect".  
In the figure Blacklist below, a DNS client opens a web browser and tries to access xxx.domain.com. When the DNS member receives the query for xxx.domain.com, it checks its blacklist rulesets and finds xxx.domain.com in a rule with an action of "Redirect". The DNS client is redirected to the configured redirection destination IP address 10.1.2.3.

*Blacklist*

*[drawio]*

This feature supports queries for data in IPv4 and IPv6 reverse-mapping zones, as well as forward-mapping zones. Note that when a user with a Windows DNS client with IPv6 installed tries to access a domain name, the Windows client sends queries for AAAA records before queries for A records. After the DNS member sends a Refused response to the query for the AAAA record, the DNS client then sends a query for the A record. The DNS member then responds according to the blacklist rules.  
When DNSSEC is enabled on the Infoblox DNS server, it does not redirect DNS clients that request DNSSEC data. (For information about DNSSEC, see [*Configuring DNSSEC*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661031).) If DNSSEC is not enabled and the query includes a request for DNS data, the appliance ignores the request for DNSSEC data and redirects the clients.  
To apply the configured DNS blacklist rules regardless of whether a DNS query requests DNSSEC data, configure the appliance accordingly. For more information about how to configure this, see [*Applying Policies and Rules to DNS Queries that Request DNSSEC Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664293).  
You can enable the blacklist feature at the Grid, member, and DNS view levels. Note that only recursive DNS servers can support this feature. For information on enabling recursion on a DNS member, see* *[*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882).

# About Blacklist Rulesets

A blacklist ruleset is a list of rules that a DNS member uses to determine its response to recursive queries for certain domain names. When you enable the blacklist feature, you must define at least one rule in a ruleset. Each rule consists of a domain name and an associated action. The DNS member matches the domain names in the rules with the entire domain name in the query, including its suffix. The domain name in the rule can contain any printable character. Domain name matching is case-insensitive. Unlike the NXDOMAIN rules, blacklist rules do not support metacharacters in domain names.  
The action in a rule is either "Pass" or "Redirect".

- Pass: The DNS member resolves the query and forwards the response to the DNS client.
- Redirect: The DNS member does not resolve the query. The DNS member redirects the client to the predefined IP addresses or sends a REFUSED response, depending on your configuration. Note that the DNS member can redirect the client only if the query is for an A record. If the query is for another resource record, the DNS member sends a REFUSED response.

You can use the Blacklist wizard, described in Adding a Blacklist Ruleset, to add blacklist rulesets, but not rules. You can only add rules by importing them in a CSV file, as described in [*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280665713). Note that if a blacklist ruleset contains duplicate domain names, the DNS member loads the first rule in the ruleset and discards the other rules.  
  
The following example illustrates how the DNS member applies blacklist rules. Ruleset 1:

| Pattern | Action |
| --- | --- |
| a1.foo.com | PASS |
| foo.com | REDIRECT/BLOCK |

- If the DNS member receives a recursive query for a1.foo.com, it resolves the query and forwards the response to the client.
- If the DNS member receives a recursive query for the A record of b1.foo.com, it redirects the DNS client to the specified IP address. If the query is for another record type, such as an MX record, the member sends a REFUSED response to the client.

# Blacklist Guidelines

The following summarizes how a DNS member responds to a DNS client when the blacklist feature is enabled:

- If the domain name in the query matches a domain name in a rule, the member does the following:
  
  - If the query is for an A record, the member performs the action specified in the rule.
    
    - If the action is "Redirect", the member performs the action specified in the Blacklist wizard.
      
      - If the action in the wizard is to redirect, the DNS member redirects the client to the listed IP addresses.
      - If the action in the wizard is to return a REFUSED response, the DNS member sends a REFUSED response to the DNS client.
    - If the action in the rule is" Pass", the DNS member resolves the query and forwards the response to the DNS client.
  - If the query is for a non-A record, the member performs the action in the rule as follows:
    
    - If the action is "Redirect", the DNS member returns a REFUSED response to the DNS client.
    - If the action is "Pass", the DNS member resolves the query and forwards the response to the DNS client.
- If the domain name in the query does not match a domain name in a rule:
  
  - If the NXDOMAIN feature is enabled, the DNS member tries to find a match with the NXDOMAIN rules and responds accordingly.
  - If the NXDOMAIN feature is disabled, the DNS member resolves the query and forwards the response to the DNS client.Note that if an A record with a dotted hostname is added to an authoritative zone through a dynamic DNS update, and that A record should actually belong in an existing delegation, the appliance may not redirect a query for that A record according to the Blacklist and NXDOMAIN guidelines.

# Related topic

[*Configuring Blacklists*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665688)
