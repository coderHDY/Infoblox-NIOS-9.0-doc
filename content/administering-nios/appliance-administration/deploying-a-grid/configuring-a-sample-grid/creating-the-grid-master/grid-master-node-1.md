---
title: "Grid Master – Node 1"
source: "/space/nios90/1340737584"
pageId: "1340737584"
---
1. By making a console connection to the appliance that you want to make Node 1 of the HA pair for the Grid Master, change the default network settings of its LAN1 port to the following:
   
   - **IP Address**: **10.0.1.6**
   - **Netmask**: **255.255.255.0**
   - **Gateway**: **10.0.1.1**
2. Connect your management system to the HQ network, open a browser window, and connect to [*https://10.0.1.6*](https://10.0.1.6).
3. Log in using the default username and password **admin** and **infoblox**.
4. Review the End-User License Agreement and click **I** **Accept**.
5. On the *Grid Setup* wizard, first screen, select **Configure** **a** **Grid** **Master** and click **Next**.
6. Specify the Grid properties:
   
   - **Grid** **Name:** Enter **corpxyz**.
   - **Shared** **Secret:** Enter **Mg1kW17d**.
   - **Confirm** **Shared** **Secret:** Enter **Mg1kW17d**.
   - **Hostname:** Enter [**ns1.corpxyz.com**](http://ns1.corpxyz.com).
   - **Type** **of** **Network** **Connectivity:** Select **IPv4** from the drop-down list.
   - **Is** **the** **Grid** **Master** **an** **HA** **pair?**: Select **Yes**.
7. Specify the network properties and click **Next**:
   
   - **Virtual** **Router** **ID:** Enter **143**.
   - (Only for NIOS 9.0.4 or later) **Public Cloud**: Select the checkbox If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option appears after you select **Yes** for **Is the Grid Master an HA pair?**.  
     Note that HA configuration with IPv6 networks is not supported on public cloud platforms.
   - **Required** **Ports** **and** **Addresses:** Enter the details in the *Required Ports and Addresses* table to set up the HA pair.
8. **Enter a new password**: **1n85w2IF**. Retype it and click **Next**.
9. Then, complete the following:
   
   - **Time** **zone:** Select **Asia/Kolkata**
   - Enable **NTP**, click the Add icon and enter the IP address of the NTP server: **10.120.3.10**
10. Click **Finish**. When you click **Finish**, the Infoblox GUI application restarts.

For steps that must be performed in the cloud platform portal, see the [*Infoblox vNIOS installation guide*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances) of the corresponding cloud platform.

*Required Ports and Addresses*

| **Interface** | **Address** | ***Subnet Mask (IPv4) or Prefix Length (IPv6)** | **Gateway** | **Port Settings** | ****Interface ID**   **(for AWS)** | ****NIC Name**   **(for Azure)** | ****Compute Name**   **(for Google Cloud)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VIP ( IPv4) | 10.0.1.10 | 255.255.255.0 | 10.0.1.1 | Automatic | NA | NA | NA |
| Node2 HA (IPv4) | 10.0.1.9 | 255.255.255.0 | 10.0.1.1 | Automatic | eni-0a483dd404b008db9 | Nic_ha2 | Comp_resc_ha2 |
| Node2 LAN1 (IPv4) | 10.0.1.8 | 255.255.255.0 | 10.0.1.1 | Automatic | NA | NA | NA |
| Node1 HA (IPv4) | 10.0.1.7 | 255.255.255.0 | 10.0.1.1 | Automatic | eni-0a483dd404b006db9 | Nic_ha1 | Comp_resc_ha1 |
| Node1 LAN1 (IPv4) | 10.0.1.7 | 255.255.255.0 | 10.0.1.1 | Automatic | NA | NA | NA |

*****For vNIOS instances deployed on Google Cloud, ensure that the HA and LAN1 interfaces on a node are assigned to subnets on different VPCs. For example, VIP, Node1 LAN1, Node2  LAN1 can be assigned to a subnet of one VPC and Node1 HA and Node2 HA can be assigned to a subnet on a different VPC.

**According to the public cloud platform that you select in the **Public Cloud** field, either the **Interface ID**, **NIC Name**, or **Compute Name** filed is displayed for AWS, Azure, or Google Cloud respectively.
