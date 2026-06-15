---
title: "Configuring DHCP Lease Management"
source: "/space/nios90/280761976"
pageId: "280761976"
---
When setting up DHCP properties, you can configure how the appliance handles lease management. For example, when a DHCP client moves from one network to another, the DHCP lease granted by the DHCP server in the previous network remains associated with the network device until the lease expires. When this happens to multiple clients, the address range could run out of IP addresses; thus, preventing other clients from retrieving an IP address. To avoid this, you can configure the DHCP server to release a lease when a client moves out of the network. Note that this is valid only if the client has included the client ID while requesting a lease. For example, a DHCP IPv4 client has included the client ID while requesting a lease from network A. This client then moves from network A to B. The DHCP server immediately releases the lease for reuse by another client on network A, based on the client ID. If the client does not include the client ID in the request, the lease on network A remains active until the lease expires.  
You can also enable one-lease-per-client to ensure that each DHCP IPv4 client receives only one lease at any given time. When you enable one-lease-per-client and a DHCP client sends a DHCPREQUEST for a particular lease, the appliance releases other leases that the client holds, on the interface that the client is currently using.  
Enabling one-lease-per-client is useful when you want to control the number of leases on your subnets and ensure that each DHCP client receives only one lease at a time. Typically, you enable one-lease-per-client for a DHCP client that moves around a lot within different subnets and uses long leases.  
Note that this feature supports only DHCP IPv4 clients. When you configure lease management at the Grid level, all members inherit the setting. You can override the Grid setting for each member.

> **warning**
>
> **Note**
> 
> One-lease-per-client enables a single lease per client on a per member basis, not on a Grid wide basis. Lease information is not replicated among members. Note that you must restart the DHCP service for the changes to take effect.

To configure DHCP lease management:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* checkbox, and then click the Edit icon.  
   **Standalone** **DHCP**: From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **System** **DHCP** **Properties**.
2. In the *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode. Click the **General** tab -> **Advanced** tab and select the respective radio button under **Multiple** **Lease** **Management**:
   
   - **Release** **leases** **for** **clients** **with** **Client** **IDs:** Select this option to release only those leases that have a client ID when the clients move from one network to another before the leases expire. This is selected by default.The DHCP server does not release leases that do not have a client ID.
   - **Retain** **leases** **for** **clients** **with** **Client** **IDs:** Select this option to retain all the leases the client holds. The DHCP server retains all the leases either with or without a client ID. The amount of time taken by the DHCP server to find a lease for a client might increase if you use this option when the pools are almost full. Choosing this option might also increase the amount of active leases in the pools when the client moves from one network to another.
   - **Allow** **only** **one** **lease** **per** **client**: Select this option to enable one-lease-per-client per Grid member. This is valid for leases both with and without client IDs.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
