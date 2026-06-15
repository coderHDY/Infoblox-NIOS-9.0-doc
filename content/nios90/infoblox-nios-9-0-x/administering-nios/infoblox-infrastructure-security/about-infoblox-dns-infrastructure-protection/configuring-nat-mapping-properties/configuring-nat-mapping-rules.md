---
title: "Configuring NAT Mapping Rules"
source: "/space/nios90/280766398"
pageId: "280766398"
---
To enable the NAT Mapping feature and to configure NAT Mapping rules for a Grid or a member:

1. **Grid**: From the **Data** **Management** tab, select the **Security** tab, and then click **Grid** **Security** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **Security** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Grid* *Security* *Properties* or *Member* *Security* *Properties* editor, select the **NAT** **Mappings** tab -&gt; **Basic** tab, and then complete the following:  
   The member inherits the NAT mapping settings from the Grid, by default. To override the settings, click **Override**. To retain the same settings as the Grid, click **Inherit**. Note that if you choose to override the Grid settings, you must override the entire setting; you cannot override partial setting.
   
   - **Enable ****tracking**** for ****NAT mappings**: This checkbox is disabled by default. When you select this checkbox, you can configure certain addresses, networks, and ranges for NAT tracking. When the NAT Mapping feature is enabled or disabled for the Grid, all members in the Grid inherit this setting.
   - **NAT**** Mappings**: To define the NAT Mapping rule, click the Add icon and select one of the following:
     
     - **Address**: Select this to configure a single NAT address. For example, if you have only one single NAT client or a single NAT source IP, select this.
     - **Network**: Select this if you want to configure an entire subnet for NAT.
     - **Range**: Select this if you want to configure a partial subnet for NAT.  
         
       After you select the NAT mapping type, the appliance adds a new row to the table and displays the type in the table (you cannot modify this in the table). In the **Address/Network/Range** column of the new row, enter a single NAT address, if you have selected **Address**. You can also configure a network address as a single NAT address. Enter a subnet if you have selected **Network**; or enter the partial subnet if you have selected **Range**. Note that IPv6 address, network, or range entry is not supported.  
       Click **+** beside the NAT mapping type, and then click the cell of the following fields in the new row to enter information:
       
       - **Start**** Port**: Enter the first source port in the port range. For example, if the port range is 1000-2000, you can enter 1000 as the start port.
       - **End**** Port**: Enter the end source port in the port range. For example, if the port range is 1000-2000, you can enter 2000 as the end port.
       - **Block**** size**: Enter the port block size. This determines the number of port blocks and each port block is considered as a logical NAT client. Based on the port block size, the port range is divided into port blocks. For example, if the start port is 1000 and the end port is 2000, and if you enter the port block size as 100, then 1000-1099 is the first port block, 1100-1199 is the second port block, 1200-1299 is the third port block, and so on.  
           
         You can create a separate NAT Mapping rule for each source IP address, network, or range. You can add a maximum of 32 NAT Mapping rules and a maximum of 32 port ranges for each rule.

> **warning**
>
> **Note**
> 
> The combination of the source IP address, network, or range and the port blocks configured for each NAT'ed client must be unique and it should not overlap.

3. Save the configuration.

> **warning**
>
> **Note**
> 
> If you change the NAT Mapping rule after you have configured the NAT Mapping rule or if you enable or disable the NAT Mapping feature, you must publish the changes by clicking **Publish** **Changes** from the Toolbar. For information, see *[Publishing Rule Updates](/nios90/by-id/280408857)*.
