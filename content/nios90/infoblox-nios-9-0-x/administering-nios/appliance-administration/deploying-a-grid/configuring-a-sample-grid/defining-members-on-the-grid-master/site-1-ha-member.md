---
title: "Site 1 – HA Member"
source: "/space/nios90/1340541459"
pageId: "1340541459"
---
1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab.
2. Expand the Toolbar and click **Add** -&gt; **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, enter the following and click **Next**:
   
   - **Member** **Type**: Select **Infoblox**.  
     If this member is a NIOS virtual appliance, then select **Virtual NIOS**.
   - **Host** **Name**: Enter [**ns3.site1.corpxyz.com**](http://ns3.site1.corpxyz.com)
   - **Comment**: Enter **Site 1 - **[**ns3.site1.corpxyz.com**](http://ns3.site1.corpxyz.com)
4. Specify the following information about the member that you are adding to the Grid and click **Save & Close**:
   
   - **Type** **of** **Network** **Connectivity:** Select **IPv4** from the drop-down list.
   - **High** **Availability** **Pair**: Select this option.
   - (Only for NIOS 9.0.4 or later) **Public Cloud**: Select the checkbox If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option is appears after you enable **High** **Availability** **Pair**.  
     For additional steps that must be performed in the cloud platform portal, see the [*Infoblox vNIOS installation guide*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances) of the corresponding cloud platform.  
     Note that HA configuration with IPv6 networks is not supported on public cloud platforms.
   - **Virtual** **Router** **ID**: Enter **111**.
   - **Required** **Ports** **and** **Addresses**:

| **Interface** | **Address** | ***Subnet Mask (IPv4) or Prefix Length (IPv6)** | **Gateway** | **Port Settings** | **Interface ID**   **(for AWS)** | **NIC Name**   **(for Azure)** | **Compute Name**   **(for Google Cloud)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VIP (IPv4) | 10.1.1.10 | 255.255.255.0 | 10.1.1.1 | Automatic | eni-0a483dd404b066db9 | NA | NA |
| Node1 HA (IPv4) | 10.1.1.7 | 255.255.255.0 | 10.1.1.1 | Automatic | eni-0a483dd404b067db9 | Nic_mem_ha1 | Comp_resc_mem_ha1 |
| Node2 HA (IPv4) | 10.1.1.9 | 255.255.255.0 | 10.1.1.1 | Automatic | eni-0a483dd404b066db9 | Nic_mem_ha2 | Comp_resc_mem_ha2 |
| Node1 LAN1 (IPv4) | 10.1.1.6 | 255.255.255.0 | 10.1.1.1 | Automatic | eni-0a483dd404b067db9 | NA | NA |
| Node2 LAN1 (IPv4) | 10.1.1.8 | 255.255.255.0 | 10.1.1.1 | Automatic | eni-0a483dd404b066db9 | NA | NA |
