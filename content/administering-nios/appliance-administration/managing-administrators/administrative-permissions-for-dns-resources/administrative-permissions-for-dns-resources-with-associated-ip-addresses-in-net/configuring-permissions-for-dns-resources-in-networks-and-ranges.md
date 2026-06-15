---
title: "Configuring Permissions for DNS Resources in Networks and Ranges"
source: "/space/nios90/1482555528"
pageId: "1482555528"
---
To define permissions for resources that are associated with IP addresses in a network container, network, or address range, complete the following:

1. Log in to the appliance through the Infoblox CLI and use the `set dns_perm_for_nw_range` command to enable new permissions, as follows:   
   `Infoblox > set dns_perm_for_nw_range on`  
   ` `You can also enable permission for DNS resources in networks and ranges through the Infoblox GUI, as described in  Enabling Permissions for DNS Resources in Networks and Ranges.
2. Log in to Grid Manager and depending on which permission you want to define, do one of the following:  
   **Network** **View**: From the **Administration** tab, select the **Networks** **View** tab -> *network_view* checkbox and click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -> *network_container* checkbox and click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* checkbox, and then click the Edit icon.  
   **DHCP** **Range**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> **network** ->  
   *addr_range* checkbox, and then click the Edit icon.  
   **Fixed** **Address**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> **network** ->  
   *fixed_address* checkbox, and then click the Edit icon.  
   **Reservation**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> **network** ->  
   *reservation* checkbox, and then click the Edit icon.  
   **Zone**: From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and then click the Edit icon.
   
   Note that you cannot assign permissions for zones that are auto-created.
3. In the editor, click the **Permissions** tab, and select the supported permission from the **Permissions** drop-down list for the admin group or role.
4. Select a resource from the drop-down list in the **Resources** column.
5. Save the configuration.
