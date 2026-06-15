---
title: "Configuration Example: Using Option Filters"
source: "/space/nios90/1393460111"
pageId: "1393460111"
---
The following example shows you how to create an option space, add custom options to it, create an option filter, and a match rule to filter the options so that the NIOS appliance can filter an address request by the vendor options of the requesting hosts. It can grant or deny an address request if the requesting host matches the filter.

1. Add an option space called MSFT, and then add the following options to it. For information, see [*Applying DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options).

| **Option** **name** | **Code** | **Type** |
| --- | --- | --- |
| root-mount-options | 1 | Text |
| root-server-ip-address | 2 | IP address |
| root-server-host-name | 3 | Text |
| root-server-path-name | 4 | Text |
| swap-server-ip-address | 5 | IP address |
| swap-file-path-name | 6 | Text |
| boot-file-path-name | 7 | Text |
| posix-timezone-string | 8 | String |
| boot-read-size | 9 | 16-Bit unsigned integer |

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab and click the Add icon.

1. In the *AddIPv4Filter* wizard, enter the filter name i86pc, and then select **Options** as the filter type.

1. Select **MSFT** as the option space, select an option, specify a value for it, and then add it to the i86pc option filter. You can select multiple options. Add the following options to the i86pc option filter:

| **Option** **name** | **Code** | **Type** |
| --- | --- | --- |
| root-server-ip-address | 2 | IP address |
| root-server-host-name | 3 | Text |
| root-server-path-name | 4 | Text |
| boot-file-path-name | 7 | Text |

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Filters** tab -&gt; *filter_name*, and then click the Add icon.

1. In the *AddIPv4MatchRule* wizard, select **i86pc** as the option filter, select **vendor-class-identifier(60)** as the matching option, and then enter **MSFT** as the matching value.

1. Add a DHCP range to the network. For information, see [*Configuring IPv4 Address Ranges*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-address-ranges).

1. Apply the i86pc option filter to the DHCP address range. For information, see [*Applying Filters to DHCP Objects*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/applying-filters-to-dhcp-objects).

1. Click **Restart** to restart services.
