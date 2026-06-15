---
title: "Infoblox Infrastructure Security"
source: "/space/nios90/280659371"
pageId: "280659371"
---
The mission-critical DNS infrastructure can become a vulnerable component in your network when it is inadequately protected by traditional security solutions and consequently used as an attack surface. Compromised DNS services can result in catastrophic network and system failures. To fully protect your network in today's cyber security threat environment, Infoblox sets a new DNS security standard by offering scalable, enterprise-grade, and integrated protection for your DNS infrastructure.  
While your external (internet-facing) DNS server can be subject to cyber attacks such as DNS DDoS (Distributed Denial of Service) and others, threats can also come from the inside of your firewalls. Today's targeted attacks pose risk to both data and infrastructure inside an enterprise. You could have an endpoint infected with malware or threats trying to communicate with C&C (Command-and-Control) servers that use DNS as a protocol. You could also have a malicious insider trying to steal valuable digital assets by opening a DNS tunnel or embedding data in DNS queries.  
Depending on how you want to protect your mission-critical DNS infrastructure, you can configure your Infoblox appliance to mitigate against external, internal, or both (external and internal) DNS threats.

This section contains information about the Infoblox infrastructure security features that protect external DNS from cyber DNS attacks and internal DNS from infrastructure attacks, data exfiltration, and APTs (Advanced Persistent Threats) and malware. It covers the following topics:

*[children]*

# Infoblox DNS Infrastructure Protection

The Infoblox DNS Infrastructure Protection solution employs hardware-accelerated security rules to detect, report upon, and stop attacks such as DDoS, DNS reflection, DNS amplification, DNS hijacking, and other network attacks targeting DNS authoritative applications. This security solution helps minimize "false positives" and ensures that your mission-critical DNS services continue to function even when under attack. For more information, see *[Infoblox DNS Infrastructure Protection](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection)*.

# Infoblox DNS Firewall

Infoblox DNS Firewall uses DNS RPZs (Response Policy Zones) for allowing reputable sources to dynamically communicate reputation domain names so you can implement policy controls for DNS lookups. For more information, see *[Infoblox DNS Firewall](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-infoblox-dns-firewall)*.

# Infoblox Threat Insight

The Infoblox Threat Insight solution defenses against data exfiltration through DNS tunneling for ultimate network protection. For more information, see *[Infoblox Threat Insight](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-threat-insight)*.

# Security Ecosystem

The Infoblox security ecosystem comprises FireEye integrated RPZs for detecting malware and APTs and the TAXII (Trusted Automated eXchange of Indicator Information) service for mitigating cyber attacks. For more information, see *[Infoblox DNS Firewall](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-infoblox-dns-firewall)*.  
For best practices in securing your networks, you can also set up DNS blacklists or configure a security banner. When you enable DNS Integrity Check for top-level authoritative zones, the appliance verifies DNS data in the NS RRsets and glue records, and reports any data discrepancies so you can mitigate possible DNS domain hijacking.  
Following are other DNS security features for your network security:

# Access Control (Named ACLs)

To effectively manage your core network services, you can grant legitimate hosts access to specific operations on the appliance using an ACL (access control list) or anonymous ACEs (access control entries). You can also configure a named ACL and apply it to multiple operations, such as file distribution and DNS zone transfers. For more information, see *[Configuring Access Control](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuring-access-control)*.

# DNS blacklists

Your organization can prevent customers or employees from accessing certain Internet resources, particularly web sites, by prohibiting a recursive DNS member from resolving queries for domain names that you specify. You can configure a recursive DNS member to redirect the DNS client to predefined IP addresses or return a REFUSED response code (indicating that resolution is not performed because of local policy), depending on the domain name. For more information, see *[Blacklists](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/blacklists)*.

# Security Banner

You can configure and publish a notice and consent banner as the first login screen that includes specific terms and conditions you want end users to accept before they log in to the Infoblox Grid. When you enable the notice and consent banner, users must accept the terms and conditions displayed on the consent screen before accessing the login screen of Grid Manager. For more information about configuring notice and consent banner, see *[Managing a Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)*.

# DNS Integrity Check

DNS domain hijacking or domain theft is the act of changing the registration of a domain name without the permission of its original registrant. In some cases, hijackers change the DNS data of a domain after gaining control of it. They consequently redirect users to a fraudulent site, instead of the legitimate site, on the Internet. To protect your authoritative DNS servers against this type of domain hijacking, you can configure the appliance to monitor NS records and glue records for top-level authoritative zones. Based on your configuration, the appliance periodically checks the DNS data for the zones and compares the data with that in the appliance database. The severity in data discrepancies can help identify possible domain hijacking. For more information about this feature, see *[Configuring DNS Integrity Check for Authoritative Zones](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-dns-integrity-check-for-authoritativ)*.
