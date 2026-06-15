---
title: "Keeping Leases in Deleted IPv4 and IPv6 Networks and Ranges"
source: "/space/nios90/1462370875"
pageId: "1462370875"
---
You can configure the DHCP server to store leases in a deleted DHCP range for up to one week after the leases expire. When you add a new DHCP range that includes the IP addresses of these leases or assign the DHCP range to another member within the Grid, the appliance automatically restores the active leases. You can configure this feature for the Grid, and override the configuration for members, networks, and DHCP ranges.  
To keep active leases in a deleted DHCP range:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.  
   **Network**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network_container* checkbox, and then click the Edit icon.  
   **Range:** From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt; *range* checkbox, and then click the Edit icon.
2. In the *DHCP Properties* editor of the Grid or member, click **Toggle Advanced Mode** if the editor is in basic mode, and then click the **General** tab -&gt; **Advanced** tab. In the Network editor or Range editor, click **Toggle Advanced Mode** if the editor is in basic mode, and then click **IPv4DHCPOptions** -&gt; **Advanced** or **IPv6 DHCP Options** -&gt; **Advanced**. Complete the following:
   
   - **IPv4 Properties**
     
     - **Lease Deletion**: When you select **Keep leases from deleted range until one week after expiration** and delete a DHCP range with active leases, the appliance stores these leases for up to one week after they expire.
   - **IPv6 Properties**
     
     - **Lease Deletion**: When you select **Keep leases from deleted range until one week after expiration** and delete a DHCP range with active leases, the appliance stores these leases for up to one week after they expire.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
