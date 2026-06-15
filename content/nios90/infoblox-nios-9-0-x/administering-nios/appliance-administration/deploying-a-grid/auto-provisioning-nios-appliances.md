---
title: "Auto-Provisioning NIOS Appliances"
source: "/space/nios90/280765557"
pageId: "280765557"
---
In addition to using the Grid Setup Wizard or access the *Join* *Grid* dialog box to join appliances to a Grid, you can set up an appliance using the auto-provisioning feature, which allows a DHCP server to automatically assign an IP address to the appliance. You can then join the auto-provisioned appliance to the Grid.  
Auto-provisioning is enabled by default for new installations of physical appliances, but it is not supported for vNIOS appliances. When you connect the appliance to the network, a lease request is automatically sent to the DHCP server. The DHCP server fingerprints the client as "Infoblox Appliance," as the DHCP client provides the unique option sequence (1,28,2,2,3,3,15,6,12) and vendor ID (INFOBLOX). The DHCP server assigns a DHCP lease and a dynamic IP address to the appliance. If the DHCP lease request fails, the default IP address (192.168.1.2) is assigned to the appliance. The DHCP client tries to send the lease request for a duration of one minute when the appliance is either in the factory default state or in the auto-configured default IP address state after a reboot. If you do not use  
auto-provisioning to set up the appliance, then you can wait one minute before connecting the appliance to the network. Otherwise, the DHCP server will assign a dynamic IP address to the appliance. Note that if you have already set the IP address for the appliance through the Infoblox CLI, GUI, or API, then auto-provisioning is disabled for the appliance and the lease address is not requested. When auto-provisioning is enabled for an appliance, the DNS, DHCP, FTP, TFTP, HTTP, NTP, Captive Portal, Reporting services, as well as backup and restore are disabled for the member until a static IP address is set for the appliance. You can join a single appliance or HA pair to the Grid. After the appliance joins the Grid, the static IP address is set for the appliance.

> **warning**
>
> ### Note
> 
> - Auto-provisioning supports only IPv4 addressing and not IPv6 addressing.
> - Auto-provisioning supports only physical appliances. You cannot auto-provision a hybrid HA setup of a physical and virtual appliance.

When you upgrade or downgrade the appliance to a release that includes this feature, auto-provisioning is disabled for the appliance.

# Setting Up Physical Appliances Using Auto-Provisioning

Complete the following to set up an appliance using auto-provisioning and to join the auto-provisioned appliance to the Grid Master:

1. Connect the appliance to a network using an Ethernet cable, connect it to a power source, and then turn on the power. For information about cabling the appliance to a network and powering the appliance, refer to the user guide or installation guide that ships with the product.   
   A lease request is automatically sent to the DHCP server that assigns a DHCP lease and a dynamic IP address to the appliance. The DHCP client tries to send the lease request for a duration of one minute and if the request fails, the default IP address (192.168.1.2) is assigned to the appliance.
2. Join the appliance to the Grid Master. You can join the auto-provisioned appliance to the Grid Master using the *Connect* dialog box.  You can also join an appliance to the Grid using the *JoinGrid* dialog box.   
   A static IP address is set and auto-provisioning is automatically disabled for the appliance after it joins the Grid.

Only the following physical platforms supports Auto-Provisioning:

IB-4015, IB-4025, TE-815, TE-825, TE-1415, TE-1425, TE-2215, TE-2225, TR-1405, TR-2205, TR-4005.

> **warning**
>
> Note
> 
> When auto-provisioning is disabled for an appliance and the network address is not preserved, auto-provisioning will be re-enabled and a DHCP lease request is sent to the DHCP server if you reset the appliance using the CLI command  `reset all auto_provision` or reset the database using the CLI command `reset database auto_provision`. However, if the static IP address for an appliance is set and network settings are preserved, auto-provisioning will be re-enabled for the appliance but the lease address will not be requested if you reset the database using the CLI command `reset database auto_provision`.

# Joining Auto-Provisioned Appliances to the Grid

You can join a predefined appliance with a DHCP lease to the Grid Master using the *Connect* dialog box. You can join a single appliance or an HA pair to the Grid Master. For an HA pair, the member which is offline will join the Grid Master and it will become the active node. When both the members of an HA pair are offline, Node 1 of an HA pair is joined to the Grid Master.  
Only superusers can join a Grid member to the Grid Master. If the Grid member fails to join the Grid, then the remote console is enabled for the appliance and you can join the appliance to a Grid through the remote console. You can log in to the remote console using the user name, **admin** and the Grid shared secret as the password.  
To join a single appliance or an HA pair to a Grid Master, complete the following:

1. Log in to the Grid Master. Note that the single appliance or the HA pair must be online and the Grid Master must be able to reach the appliance.
2. From the **Infoblox Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab.
3. Add the appliance as a Grid member. For information about adding Grid members to the Grid, see [*Adding Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).
4. Select the Grid member that you want to join to the Grid Master, expand the Toolbar and click **Connect**.
5. The following fields are displayed in the *Connect* dialog box:
   
   - **Host** ** Name**: The name of the member.
   - **Configured ** **IPv4** ** Address**: The IPv4 address of the member.
   - **Site**: The site to which the IP address belongs. This is one of the predefined extensible attributes.
   - **Temporary** ** IPv4** ** Address**: Enter the IPv4 address of the DHCP lease or click **Select** to select the DHCP lease.  
     Grid Manager displays the *Lease* *Selector* dialog box from which you can select the DHCP lease. Note that the *Lease* *Selector* displays the active DHCP leases which are fingerprinted as "Infoblox Appliance".
6. Click **Next** to retrieve the appliance information.  
   The Grid Master uses SSL to connect to the appliance and it gets the appliance information. Grid Manager displays the following information for the appliance:
   
   - **Remote** **Appliance** **Type**: The appliance type.
   - **Remote Appliance** **Serial** **Number**: The serial number of the appliance.
   - **Licenses**: Grid Manager displays the Grid license and the licenses that are pre-provisioned on the member.  
     It displays the following information:
     
     - **Type**: The license type.
     - **String**: The license string. If the license string is not displayed, you can enter or paste it here.
7. Click **Connect** to join the appliance to the Grid Master.  
   To confirm that the appliance has successfully joined the Grid, check the status in the **Status** column of the newly added member. (Green = The appliance has joined the Grid Master and is functioning properly; Yellow = The appliance is in the process of joining the Grid Master; Red = The appliance has not joined the Grid Master).
