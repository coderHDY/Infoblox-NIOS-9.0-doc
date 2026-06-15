---
title: "HQ Site – HA Member"
source: "/space/nios90/1340541412"
pageId: "1340541412"
---
1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** -> **Members** tab.
2. Expand the Toolbar and click **Add** -> **Add** **Grid** **Member**.
3. In the *Add* *Grid* *Member* wizard, complete the following and click **Next**:
   
   - **Member** **Type**: Select **Infoblox**.  
     If this member is a NIOS virtual appliance, then select **Virtual NIOS**.
   - **Host** **Name**: Enter [**ns2.corpxyz.com**](http://ns2.corpxyz.com).
   - **Comment**: Enter **HQ Site - **[**ns2.corpxyz.com**](http://ns2.corpxyz.com).
4. Enter the following information about the member that you are adding to the Grid and click **Save** **&** **Close**:
   
   - **Type** **of** **Network** **Connectivity**: Select **IPv4** from the drop-down list.
   - **High** **Availability** **Pair**: Select this option.
   - **Virtual** **Router** **ID**: **210**
   - (Only for NIOS 9.0.4 or later) **Public Cloud**: Select the checkbox If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option is appears after you enable **High** **Availability** **Pair**.
   - **Required** **Ports** **and** **Addresses**:

| **Interface** | **Address** | ***Subnet Mask (IPv4) or Prefix Length (IPv6)** | **Gateway** | **Port Settings** | ****Interface ID**   **(for AWS)** | ****NIC Name**   **(for Azure)** | ****Compute Name**   **(for Google Cloud)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| VIP (IPv4) | 10.0.2.10 | 255.255.255.0 | 10.0.2.1 | Automatic | NA | NA | NA |
| Node1 HA (IPv4) | 10.0.2.7 | 255.255.255.0 | 10.0.2.1 | Automatic | eni-0a483dd404b066db9 | Nic_hqmem_ha1 | Comp_resc_hqmem_ha1 |
| Node2 HA (IPv4) | 10.0.2.9 | 255.255.255.0 | 10.0.2.1 | Automatic | eni-0a483dd404b067db9 | Nic_hqmem_ha2 | Comp_resc_hqmem_ha2 |
| Node1 LAN1 (IPv4) | 10.0.2.6 | 255.255.255.0 | 10.0.2.1 | Automatic | NA | NA | NA |
| Node2 LAN1 (IPv4) | 10.0.2.8 | 255.255.255.0 | 10.0.2.1 | Automatic | NA | NA | NA |
