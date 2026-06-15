---
title: "Viewing Discovered VRFs and Mapping Network Views"
source: "/space/nios90/1340540837"
pageId: "1340540837"
---
# Viewing Discovered VRFs and Mapping Network Views

To view VRF instances (or VRFs) and map corresponding network views, do the following:

1. From the **Data** **Management** tab, select the **Devices** tab, and then click **VRF** **Mapping** from the Toolbar.
2. The *VRF* *Mapping* *dialog* appears and displays the following:
   
   - **VRF** **Name**: The name of the VRF on the hosting device, which typically contains the interface name and its VRF route distinguisher.
   - **Device** **Name**: The discovered name of the device that is hosting the VRF.
   - **Device** **IP** **Address**: The IP address of the managed VRF hosting device.
   - **Network** **View**: The network view that is associated with the VRF. You can click this field and select a different network view from the drop-down list.

You can do the following in this tab:

- To assign the same network view to multiple VRFs, select the checkboxes of the VRFs, and then click the Edit icon. The *VRF* *Mapping* dialog displays the **Edit** **VRF** **Network** **View** panel. From the **Network** **View** drop-down list, select the network view you want to assign to all the selected VRFs, and then click **Save**. If there is only one network view in the Grid, which is the default view, the **Network** **View** column is hidden by default.
- You can use filters to narrow down the list. You can filter the list based on the VRF name, Device name, Device IP address, and network view. For more information, see [*Using Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).
- You can sort the data in ascending or descending order by column.

> **warning**
>
> ### Note
> 
> The appliance displays a warning message when there are discovered VRFs that are not mapped to network views. To ensure that discovered VRFs are mapped to network views, you can configure automatic VRF mapping, as described in [*Configuring Automatic VRF Mapping*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-automatic-vrf-mapping).
