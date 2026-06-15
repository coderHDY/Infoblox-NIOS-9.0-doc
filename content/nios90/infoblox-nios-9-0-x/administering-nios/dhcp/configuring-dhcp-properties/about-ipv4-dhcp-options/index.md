---
title: "About IPv4 DHCP Options"
source: "/space/nios90/280271370"
pageId: "280271370"
---
DHCP options provide specific configuration and service information to DHCP clients. These options appear as variable-length fields at the end of the DHCP messages that DHCP servers and clients exchange. For example, DHCP option 3 is used to list the available routers in the network of the client and option 6 is used to list the available DNS servers.

An option space is a collection of options. ISC (Internet Systems Consortium) DHCP has five predefined option spaces: dhcp, agent, server, nwip, and fqdn. The NIOS appliance supports only the predefined DHCP option space, which contains the industry standard options as well as additional options you can configure as needed:

- Predefined options: These are option codes 1 to 125. They are allocated by the IANA and defined by IETF standards. The DHCP server knows these standard options, and they are predefined on the server. You cannot redefine these options or delete them from the DHCP option space.
- Custom options: These are option codes 126 to 254. They are not defined by IETF standards and are available for private use. You can use these option codes to provide configuration or service information that none of the predefined options provide.

You can also create option spaces to define new groups of options. For example, you can create additional option spaces to define vendor specific options, which are encapsulated in option 43. When a DHCP client requests vendor specific options, it makes a request using the vendor identifier set in option 60 and a list of requested vendor specific options (option 43). The DHCP server then responds with the list of replies for the various options encapsulated into option 43.  
Note that custom options defined in the DHCP option space are included in the options section of the DHCP messages that DHCP servers and clients exchange. Custom options defined in a user-defined option space are always encapsulated in option 43 in DHCP messages.  
You can apply options globally at the Grid level, or more specifically at the member, network, network container, range, host and roaming host levels.  
A network inherits DHCP options from its parent object. You can override the inherited DHCP options configured at the Grid or Member level for the networks and shared networks. If a network has a parent network container and parent shared network and if you override the DHCP options on the shared network, then the network inherits the shared network values. If you override the DHCP options at the network container level, then the network inherits the network container values. Otherwise, the network continues to inherit DHCP options from its parent Grid or member. A shared network without a parent network container continues to inherit DHCP options from its parent Grid or member. The parent object is derived from the first network within the shared network. A network container inherits DHCP options from its parent and grandparent network containers. A network container does not inherit DHCP options defined at the Grid or member level.  
To override an inherited value, click **Override** next to it and complete the appropriate fields. When you click **Override**, the appliance displays the value inherited from its parent object (if any). If you do not set any value at the higher level, the appliance displays the default DHCP options. The following table lists the default DHCP Options:  
  
*Default* *DHCP* *Options*

|  | **Name** | **Default Value** |
| --- | --- | --- |
| IPV4 Common DHCP Options | Enable PXE Lease Time | Disabled |
|  | Lease Time | 43200 |
|  | Routers | Empty List |
|  | Domain Name | Empty |
|  | DNS Servers | Empty List |
|  | Broadcast Address | 127.0.0.1 |
|  | Custom DHCP Options | "" |
|  | Lease Scavenging | Disabled |
|  | Authoritative (Advanced) | Disabled |
|  | Lease Deletion (Advanced) | Disabled |
|  | Ignore Optionlist (Advanced) | Disabled |
| IPv4 DDNS | Enable DDNS Updates | Disabled |
|  | DDNS Domain Name | "" |
|  | DDNS Update TTL | 0 |
|  | DDNS Update Method | Interim |
|  | Generate Hostname | Disabled |
|  | Fixed Address Updates | Disabled |
|  | Option 81 Support | Disabled |
|  | Lease Renewal Update | Disabled |
| IPv4 Threshold Options | Enable DHCP Thresholds | Disabled |
|  | High - Trigger | 95 |
|  | High - Reset | 85 |
|  | Low - Trigger | 0 |
|  | Low - Reset | 10 |
|  | Enable SNMP Warnings | Disabled |
|  | Enable Email Warnings | Disabled |
|  | Email Addresses | Empty List |
| IPv4 BOOTP/PXE | Enable PXE Lease Time | Disabled |
|  | Lease Time (Value) | 0 |
|  | Deny-BOOTP-Requests | Disabled |
|  | Boot File | "" |
|  | Next Server | "" |
|  | Boot Server | "" |
| IPv6 DHCP Options | Valid Lifetime | 43200 |
|  | Preferred Lifetime | 27000 |
|  | Domain Name | "" |
|  | DNS Servers |  |
|  | Custom DHCP Options |  |
|  | Lease Deletion | Enabled |
|  | Lease Scavenging | Disabled |
| IPv6 DDNS Options | Enable DDNS Updates |  |
|  | DDNS Domain Name | "" |
|  | DDNS Update TTL | 0 |
|  | DDNS Update Method | Interim |
|  | Generate Hostname | Disabled |
|  | FQDN Support  - DHCP server always updates DNS - DHCP server updates DNS if requested by client | Disabled |
|  | Lease Renewal Update | Disabled |

You can also create an option filter the appliance uses to filter address requests by the DHCP options of requesting hosts. The filter instructs the appliance to either grant or deny an address request if the requesting host matches the filter. For information, see [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters).  
The DHCP option configuration conforms to the following RFCs:

- *RFC* *2132*, *DHCP* *Options* *and* *BOOTP* *Vendor* *Extension*
- *RFC3046*, *DHCP Relay Agent Information Option*. The supported options include option 60 (Client Identifier), 21 (Policy Filter), 22 (Maximum Datagram Reassembly Size), 23 (Default IP Time-to-Live), and 82 (Support for Routed Bridge Encapsulation).
- *RFC3925*, *Vendor-Identifying Vendor Options for Dynamic Host Configuration Protocol version 4* (DHCPv4)
- *RFC2939*, *Procedures and IANA Guidelines for Definition of New DHCP Options and Message Types*

In this section:

*[children]*
