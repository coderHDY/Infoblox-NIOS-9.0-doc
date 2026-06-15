---
title: "9.0.6 - What's New"
source: "/space/nios90/1324220543"
pageId: "1324220543"
---
The following are the new features introduced in the NIOS 9.0.6 release.

# DHCPv6 Fixed Address / Host Address based on the value of RFC 6939 (RFE-6873)

NIOS 9.0.6 allows DHCPv6 fixed addresses to be defined and allocated based on the client’s MAC address in addition to its specified DUID. An IPv6 fixed address can be assigned an IPv6 address, an IPv6 prefix delegation, or both. You can create or modify IPv6 fixed addresses, IPv6 host addresses, and IPv6 roaming hosts with a specified MAC address as the match condition using the Grid Manager, WAPI, or CSV import.

For more information see [DHCPv6 Fixed Address](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/configuring-ipv6-fixed-addresses).

# Viewing Specific DNS Notifications Using a Unique TSIG Key (RFE-6526)

Starting from NIOS 9.0.6, you can configure a DNS zone on a primary name server with duplicate external secondary server entries on the DNS zone (primary nameserver) by using the Grid Manager or by using WAPI. These entries use the same FQDN and IP address, but a unique TSIG key name on each entry. To notify an external secondary server about changes in zone data and perform a zone transfer, NIOS matches the TSIG key name configured on the external secondary server entry (on the primary server) with the key configured on the external secondary server.

For instructions, see the [Specifying Secondary Servers ](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers/Assigning+Zone+Authority+to+Name+Servers#Specifying-Secondary-Servers) and [Configuring Zone Transfers](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-zone-transfers/Enabling+Zone+Transfers#%5BinlineExtension%5DConfiguring-Zone-Transfers) sections in the NIOS online documentation.

# Viewing the Detailed Status of an Upgrade

You can now view the current distribution status in the Grid Manager by clicking the newly introduced Upgrade Detailed Status icon next to the **Status** column in the **Infoblox** **Grid** &gt; **Upgrade** screen. Clicking the icon opens a new *Upgrade Detailed Status* window which displays the upgrade status such as percentage of completion, number of files copied and so on of each component. It also displays error messages in case of any errors encountered during the upgrade of each component. For an HA setup, NIOS displays the status of both the active and passive nodes. If some of the component fields are not updated even after the distribution is complete, it means that for that particular Grid member, the data were optional.

For more information see [Upgrading NIOS](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/155942933).

# Adding Device Hints in Network Insight (RFE-12468)

Starting from NIOS 9.0.6, you can provide hints to the discovery engine to enhance the identification of specific types of network devices, primarily routers and switch-routers, by utilizing IP address patterns and DNS name patterns. These hints help prioritize discovered devices in the credential collection queue, accelerating the discovery process. Network Insight considers these hints when determining the device type of a discovered device. For more information, see the “[Configuring Discovery Properties](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties)” topic in the NIOS online documentation.
