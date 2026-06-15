---
title: "About Data Exfiltration"
source: "/space/nios90/280662029"
pageId: "280662029"
---
The DNS protocol is increasingly used as a pathway for data exfiltration through DNS tunneling attacks. DNS tunneling involves tunneling another protocol through port 53 — often not inspected by firewalls (even the next-generation firewalls) — by malware-infected devices or malicious insiders. There are a number of tools available for tunneling over DNS for a common motivation of bypassing captive portals for paid Wi-Fi access. A free tunneling application released under the ISC license for forwarding IPv4 traffic through DNS servers is one example of the software used in this kind of attack.

As illustrated in the below figure,  sensitive information such as credit card numbers and company financial can be stolen either by establishing a DNS tunnel from within the network or by encrypting and embedding chunks of that data in DNS queries. Data is decrypted at the other end and put back together so valuable information can be stolen and misused by malicious attackers.

*Data** Exfiltration*

*[drawio]*

You can use the following features to specifically target DNS tunneling traffic and minimize the risk of DNS data exfiltration:

- Infoblox DNS Infrastructure Protection: Infoblox DNS Infrastructure Protection rules detect signature-based payload encoding techniques, such as Base32, Base64 and suspicious label lengths, commonly used by tunneling products such as OzymanDNS, Iodine, DNS2TCP, and SplitBrain. For more information, see [*About Infoblox DNS Infrastructure Protection*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection).
- Infoblox Threat Insight: Infoblox employs streaming analytics to study DNS statistics and create algorithms to identify DNS tunneling traffic. To further defend your system against DNS data exfiltration, Infoblox Threat Insight detects and mitigates DNS tunneling traffic by analyzing DNS queries and responses. Infoblox Threat Insight constantly evaluates incoming DNS traffic and develops a systematic pattern in defending against illegitimate DNS tunneling traffic and constantly updating blocklists of known malicious destinations. For information about how to configure Infoblox Threat Insight, see *[About Infoblox Threat Insight](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-threat-insight/about-infoblox-threat-insight)*.
