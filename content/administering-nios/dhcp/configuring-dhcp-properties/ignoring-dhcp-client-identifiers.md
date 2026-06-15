---
title: "Ignoring DHCP Client Identifiers"
source: "/space/nios90/280761952"
pageId: "280761952"
---
You can set the DHCP server to ignore the UID (unique client identifier) and MAC address (hardware address) of a DHCP client when it places a request to the DHCP server for a new lease. When you configure the appliance to ignore the MAC address of a DHCP client, you can specify the list of MAC addresses. You can enter up to 10 MAC addresses to be ignored. The appliance ignores all the MAC addresses if you do not specify any MAC addresses. If the **Ignore** **Hardware** **Address** option is enabled and a DHCP client makes a request without a client UID for a new lease, then the appliance drops this request. This option is disabled by default. When you enable "Ignore DHCP Client ID" and a DHCP client sends a DHCPREQUEST for a lease, the DHCP server identifies the DHCP client using the physical MAC address of the appliance while the UID is ignored. The DHCP server then allocates an IP address based on the MAC address of the DHCP client.  
For example, when a DHCP client places a request for a new lease, the DHCP server identifies the DHCP client with the MAC address and allocates the same IP address that was previously allocated for that MAC address.  
You can define this feature at the Grid level, which is inherited at the member, shared network, IPv4 network and range level. This feature is disabled by default.

> **warning**
>
> **Note**
> 
> This feature is applicable only to dynamic leases and does not have any effect on the static lease generated for fixed addresses or roaming hosts.



To ignore the client identifier of DHCP clients:

1. **Grid:** From the **Data**** Management** tab, select the **DHCP** tab, and then click **Grid**** DHCP**** Properties** from the **Toolbar**.  
   **Member**: From the **Data**** Management** tab, select the **DHCP** tab -> and click the **Members** tab -> *member* checkbox -> *Edit* icon.  
   **Standalone ****DHCP:** From the **Data**** Management** tab, select the **DHCP** tab, and then click **System**** DHCP ****Properties.**  
   **Shared**** Network ****Editor:** From the **Data**** Management** tab, select the **DHCP** tab -> **Networks** tab -> **Shared**** Networks** section -> *shared_network* checkbox, and then click the *Edit* icon.  
   **IPv4**** Network**** Editor:** From the **Data**** Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section ->*network* checkbox, and then click the *Edit* icon.  
   **IPv4 ****Range ****Editor:** From the **Data**** Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> click on the network address. Select the *IP **address** range* checkbox, and then click the *Edit* icon.
2. In the *DHCP **Properties* editor, select the **General** tab -> **Advanced** tab (or click **Toggle**** Advanced ****Mode**) and then complete the following:
   
   - **Accept**** Client ****Identifier**** and ****MAC**** Address:** Select this checkbox to instruct the DHCP server to recognize MAC address and client UID of a DHCP client when it requests for a new lease.
   - **Ignore**** Client**** Identifier**: By default, this checkbox is not selected at the Grid level. Select this checkbox to ignore the client identifier of a DHCP client while placing a request to the DHCP server for a new lease. The DHCP server will only identify the MAC address and ignores the client identifier. DHCP clients requesting leases with different client UIDs receive the same IP address based on the MAC address. The initial default state is inherited from the Grid level. Click **Override** to modify the inherited setting. To inherit the Grid settings, click **Inherit** at the member, IPv4 network and range, or shared network level.
   - **Ignore**** MAC**** Address:** By default, this checkbox is not selected at the Grid level. Select this checkbox to ignore MAC address of a DHCP client while placing a request to the DHCP server for a new lease. To override the value that has been inherited from the Grid, click **Override**. Click the Add icon, the appliance adds a row to the table. Click the row and enter the MAC address to be ignored. You can also select a checkbox and click the Delete icon to delete the MAC address. To inherit the Grid settings, click **Inherit** at the member, IPv4 network and range, or shared network level.
3. Save the configuration and click **Restart** at the top of the screen.

# Limitations of the Ignore Client ID Feature on DHCP Failover Associations

- You cannot assign a DHCP range that has the ignore DHCP client ID feature enabled to a DHCP failover association if:
  
  - one of the members is an external DHCP server in the failover association.
- The DHCP failover association does not work if a DHCP range having multiple inherited values has the ignore DHCP client ID feature enabled on one server and disabled on the other.
- The range assigned to a DHCP failover association and the member (failover peer) must have the same DHCP range setting. The DHCP failover association does not work if a range associated with it does not have the same ignore DHCP client ID setting as the member.
