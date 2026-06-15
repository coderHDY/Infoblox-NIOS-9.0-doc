---
title: "Assigning VLANs to a Network"
source: "/space/nios90/280400578"
pageId: "280400578"
---
You can assign a VLAN object to different networks. You can also assign multiple VLAN objects to a single network. You can also assign multiple networks to a single VLAN. Once a VLAN object is assigned to a network, the status of VLAN object changes from Unassigned or Reserved to **Assigned**. For information about the types of VLAN status, see *[Configuring VLANs](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/configuring-vlan-objects)*.

Assigning a VLAN object enables you to compare an assigned VLAN object with the VLAN objects discovered by Network Insight. You can then generate inventory and conflict reports based on this data.

You can also create [smart folders](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders) and obtain a list of networks by the assigned VLAN ID or name.

> **warning**
>
> **Note**
> 
> - You can assign VLAN objects only to IPv4 or IPv6 networks.
> - You cannot assign VLAN objects to a network container.
> - If a VLAN object is assigned to a network, you cannot convert that network into a network container.
> - You cannot split or join a network that has VLAN objects assigned to it.

# Viewing VLAN Objects Assigned to a Network

You can view the VLAN objects assigned to a network on the **IPAM** tab or the **DHCP** tab. The** Assigned VLAN ID** and **Assigned VLAN Name** columns display the VLAN ID and name of the assigned object. If multiple VLANs are assigned to a network, **Multiple** is displayed in the **Assigned VLAN ID** and **Assigned VLAN Name** columns. You can then compare it to the data in the **Discovered VLAN ID** and **Discovered VLAN Name** columns and view conflicts if any.

# Adding VLAN Objects to a Network

To add or assign a VLAN object to a network, perform the following steps:

1. From the **Data Management** tab, select the **IPAM** tab or **DHCP** tab -&gt; *network* checkbox of the network to which you want to assign the VLAN object.
2. Select the Action icon and then click **Edit**.
3. Click **VLAN Assignment**. A list of all the VLAN objects associated with the network is displayed.
4. Click the Add icon.
5. From the **VLAN Parent Type** drop-down list, select the parent type of the VLAN object that you want to add. The parent type can either be a VLAN view or a VLAN range. For more information, see *[Configuring VLANs](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/configuring-vlan-objects)*.
6. From the **VLAN Parent** field, select the VLAN view or VLAN range that the VLAN object belongs to.
7. From the **VLAN Name **field, select the VLAN object. Alternatively, click **Next Available VLAN** if you want NIOS to assign a VLAN object. NIOS searches for a VLAN object with the lowest ID in the specified VLAN view or range. VLAN objects whose status is **Assigned** or **Reserved** are ignored. However, you can still select a reserved or assigned VLAN object by clicking the **VLAN Name **field and selecting the VLAN object. The **VLAN ID** field is populated with the ID of the selected VLAN object.
8. Click **Add** to add the VLAN objects The table is populated with the VLAN object details.
9. You can click the Add icon to add more VLAN objects.
10. Click **Save & Close**.

You can also assign a VLAN object when creating an IPv4 or IPv6 network. For more information, see *[Configuring IPv4 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks)* and *[Managing IPv6 Networks](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098)*.

# Editing Assigned VLAN Objects

To edit a VLAN object that is already assigned, perform the following steps:

1. From the **Data Management** tab, select the **IPAM** tab or **DHCP** tab -&gt; *network* checkbox of the network that you want to edit.
2. Select the Action icon and then click **Edit**.
3. Click the **VLAN Assignment** tab.
4. Select the VLAN object that you want to edit and click the Edit icon. Details of the VLAN object are displayed. You can edit and select another VLAN object in another VLAN view for example.
5. Click **Save & Close**.

# Deleting Assigned VLAN Objects

You cannot delete a VLAN object that is assigned to a network. You must first unassign the VLAN object and then delete it. Deleting an unassigned VLAN object from the list of VLAN objects that are assigned to a network does not delete it from NIOS. Also, you cannot delete a network, network view, or a parent network container that have VLAN objects assigned to them.

To unassign a VLAN object, perform the following steps:

1. From the **Data Management** tab, select the **IPAM** tab or **DHCP** tab -&gt; *network* checkbox of the network that you want to edit.
2. Select the Action icon and then click **Delete**.
3. Click the **VLAN Assignment** tab.
4. Select the VLAN object that you want to edit and click the Delete icon. The VLAN object is deleted from the assignment.
5. Click **Save & Close**.
