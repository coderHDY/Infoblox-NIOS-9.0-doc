---
title: "Supporting Active Directory"
source: "/space/nios90/280272218"
pageId: "280272218"
---
Active Directory™ (AD) is a distributed directory service that authenticates network users and — by working with DHCP and DNS — provides the location of and authorizes access to services running on devices in a Windows® network.

You can integrate a NIOS appliance providing DHCP and DNS services with Windows Server platforms that include Active Directory services. Assuming that you already have AD set up and it is currently in use, you can migrate DHCP and DNS services away from internal operations on the AD domain controller or from other third party DHCP and DNS systems to NIOS appliances that serve DHCP and DNS.

A NIOS appliance providing DHCP and DNS services to an AD environment can send and receive DDNS updates. In addition, a NIOS appliance can use GSS-TSIG (Generic Security Service-Transaction Signatures) authentication for DDNS updates. The basic DHCP, AD, and DNS services are shown in the following DHCP, Active Directory, and DNS figure.

*DHCP,* *Active* *Directory,* *and* *DNS*

*[drawio]*

# Sending DDNS Updates to a DNS Server

You can configure an Infoblox DHCP server to send unauthenticated or GSS-TSIG-authenticated DDNS updates to a DNS server in an AD domain. There are no special configurations to consider when configuring a NIOS appliance to send unauthenticated DDNS updates to the DNS server. (For information about configuring DHCP, see [*Configuring DHCP Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties),[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties)and for information on configuring the DHCP server to send DDNS updates, see [*Configuring DHCP for DDNS*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-dhcp-for-ddns).) For information about configuring a DHCP server to send GSS-TSIG authenticated updates, see [*About GSS-TSIG*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-gss-tsig).
