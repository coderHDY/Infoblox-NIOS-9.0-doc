---
title: "Detecting and Mitigating DNS DDoS Attacks"
source: "/space/nios90/280405893"
pageId: "280405893"
---
DNS is a tempting target for attacks given that most traditional enterprise firewalls are configured to allow port 53 traffic to service DNS, which gives attackers an easy way to evade your firewall implementation. Since DNS queries are asymmetrical, they can result in a response many times larger than the query, which means that your DNS system can be used to amplify an attack.  
To protect your DNS servers and DNS service performance, Infoblox provides the following features to detect and mitigate DNS DDoS attacks, such as NXDOMAIN attacks:

- Automated mitigation of phantom domain attacks (a subset of NXDOMAIN attacks), as described in [*Automated Mitigation of Phantom Domain Attacks*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/automated-mitigation-of-phantom-domain-attacks).
- Configurable parameters used to detect possible NXDOMAIN attacks, as described in* *[*Detecting NXDOMAIN Attacks*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/detecting-nxdomain-attacks)*.*
- Mitigation of NXDOMAIN responses by removing the LRU (Least Recently Used) items from the list of NX (non-existent) RRsets. The appliance uses the LRU list to select entries for removal from the cache when the cache utilization exceeds the allowed threshold. For more information, see [*Mitigating Possible NXDOMAIN Attacks*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/mitigating-possible-nxdomain-attacks)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/mitigating-possible-nxdomain-attacks)
- CLI commands for configuring RRL (Response Rate Limiting) to mitigate DNS DDoS attacks by reducing the rate at which authoritative servers respond to high volumes of malicious queries, as described in [*Support for RRL (Response Rate Limiting)*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/support-for-rrl-response-rate-limiting)*.*

Infoblox also offers the following security features to fully protect your DNS infrastructure and implementation:

- [*Infoblox DNS Infrastructure Protection*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection)
- [*Infoblox DNS Firewall*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-infoblox-dns-firewall)
- [*Infoblox Threat Insight*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-threat-insight)
