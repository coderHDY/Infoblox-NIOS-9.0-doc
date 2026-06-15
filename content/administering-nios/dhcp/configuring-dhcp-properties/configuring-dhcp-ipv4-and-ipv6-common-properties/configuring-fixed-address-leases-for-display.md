---
title: "Configuring Fixed Address Leases For Display"
source: "/space/nios90/1462436432"
pageId: "1462436432"
---
You can configure the DHCP server to capture the hostname and lease time of a fixed address when you assign an IPv4 or IPv6 fixed address to a client. The appliance displays the hostname, and the start and end time of each fixed address lease in the *Current* *Leases* panel in Grid Manager.  
You can set this at the Grid level only for IPv4 and IPv6 leases.

1. From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.
2. In the *Grid* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode. When the additional tabs appear, click the **General** tab -> **Advanced** tab and complete the following:
   
   - **IPv4** **Properties**
     
     - **Fixed** **Address** **Lease**: Select **Capture** **hostname** **and** **lease** **time** **when** **assigning** **Fixed** **Addresses**. The appliance displays the host name, and the start and end time of each fixed address lease in the *Current* *Leases* panel. If there are multiple records (A, host, and lease) for the IP address, it also displays the information for the records. This option is available in the Grid Properties editor only.)
   - **IPv6** **Properties**
     
     - **Fixed** **Address** **Lease**: Select **Capture** **hostname** **and** **lease** **time** **when** **assigning** **Fixed** **Addresses**. The appliance displays the host name, and the start and end time of each fixed address lease in the *Current* *Leases* panel. If there are multiple records (AAAA, host, and lease) for the IP address, it also displays the information for the records. This option is available in the Grid Properties editor only.)
3. Save the configuration.
