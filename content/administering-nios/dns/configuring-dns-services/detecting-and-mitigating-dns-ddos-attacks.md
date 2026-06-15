---
title: "Detecting and Mitigating DNS DDoS Attacks"
source: "/space/nios90/280405893"
pageId: "280405893"
---
DNS is a tempting target for attacks given that most traditional enterprise firewalls are configured to allow port 53 traffic to service DNS, which gives attackers an easy way to evade your firewall implementation. Since DNS queries are asymmetrical, they can result in a response many times larger than the query, which means that your DNS system can be used to amplify an attack.  
To protect your DNS servers and DNS service performance, Infoblox provides the following features to detect and mitigate DNS DDoS attacks, such as NXDOMAIN attacks:

- Automated mitigation of phantom domain attacks (a subset of NXDOMAIN attacks), as described in [*Automated Mitigation of Phantom Domain Attacks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665773).
- Configurable parameters used to detect possible NXDOMAIN attacks, as described in* *[*Detecting NXDOMAIN Attacks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763594)*.*
- Mitigation of NXDOMAIN responses by removing the LRU (Least Recently Used) items from the list of NX (non-existent) RRsets. The appliance uses the LRU list to select entries for removal from the cache when the cache utilization exceeds the allowed threshold. For more information, see [*Mitigating Possible NXDOMAIN Attacks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405866)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405866)
- CLI commands for configuring RRL (Response Rate Limiting) to mitigate DNS DDoS attacks by reducing the rate at which authoritative servers respond to high volumes of malicious queries, as described in [*Support for RRL (Response Rate Limiting)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763562)*.*

Infoblox also offers the following security features to fully protect your DNS infrastructure and implementation:

- [*Infoblox DNS Infrastructure Protection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267604)
- [*Infoblox DNS Firewall*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402698)
- [*Infoblox Threat Insight*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400743)
