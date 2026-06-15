---
title: "Viewing IPv6 Data"
source: "/space/nios90/280764533"
pageId: "280764533"
---
To the configured IP addresses in an IPv6 network:  
by selecting an IPv6 leaf network from the Network List panel

- For a leaf network that is not in a network container, from the **Data** **Management** tab, select the **IPAM** tab, and then click the IPv6 network you want to view.
- For a leaf network that is in a network container, from the **Data** **Management** tab, select the **IPAM** tab → *network_container* -> *network*.

Grid Manager lists the configured IPv6 addresses. You can export and print the list. It displays the following information about each IP address:

- **IP** **Address:** The name of the IPv6 DHCP object, which can be a DHCP range, fixed address, host configured for DHCP, or a roaming host with an allocated IP address.
- **Name:** The name of the record associated with the IP address.
- **DUID:** The DHCP Unique Identifier (DUID) of the device that was assigned the IP address.
- **Status:** The status of the IPv6 object, such as Used or Unused.
- **Type:** The object type associated with the IP address, such as **AAAA** **record**, **IPv6** **Fixed** **Address**, or **Unmanaged**.
- **Usage:** Indicates whether the IPv6 address is configured for DNS or DHCP.
- **Exclude**: (*Applies* *only* *with* *Network* *Insight*) Denotes whether the IP is excluded from discovery.
- **Lease** **State:** (*Applies* *only* *with* *Network* *Insight*) The lease state of the record, such as Active.
- User Name: The name of the user who received the lease for the IP address.
- **First** **Discovered**: (*Applies* *only* *with* *Network* *Insight*) The date and timestamp of the first occasion that NIOS discovered the IP address.
- **Last** **Discovered**: (*Applies* *only* *with* *Network* *Insight*) The date and timestamp of the last occasion that NIOS discovered the IP address.
- **OS**: The operating system of the IP.
- **NetBIOS** **Name**: The returned NetBIOS name from the last discovery.
- **Device** **Type(s)**: Shows the device type for the device associated with the IP address.
- **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the network device that was identified through DHCP fingerprint detection. This field displays **No** **Match** for devices that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see [*DHCP Fingerprint Detection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989).
- **Comment:** Displays comments about the record.
- **Site**: The site to which the IP address belongs. This is a predefined extensible attribute.

You can display all available extensible attributes. You can also sort the list of IP addresses in ascending or descending order by **IP** **Address** only.  
You can drill down further and view the records associated with an IP address. To view the associated records of an IP address, select it and Grid Manager displays information about the IP address in the **Related** **Objects** and **Audit** **History** tabs.

**Related** **Objects**  
Grid Manager displays the following information about the records associated with the IP address:

- **Name**: The record name. For example, if the IP address belongs to a host record, this field displays the hostname.
- **Type**: The object type. For example, AAAA Record, PTR Record, Host Record, IPv6 Fixed Address.
- **Comment:** Additional information that was entered in the record about the IP address.

# Audit History

Grid Manager displays the following information about the last five actions performed on the selected IP:

- **Timestamp**: The day, date, and time of the operation.
- **Action**: The type of operation that was performed by the administrator.
- **Object** **Type**: The object type of the entry.
- **Admin** **Name**: The name of the administrator that performed the operation.
- **Message**: Description of the administrative activity.

# Filtering the IP Address List

You can filter the IP address list, so it displays only the IP addressees you need. You can filter the list based on any combination of extensible attributes and the parameters displayed in the IP address list, such as usage and type. When you expand the list of available fields you can add to the filter, note that the extensible attributes are those with the gray background.
