---
title: "Configuring VLAN Objects"
source: "/space/nios90/280400602"
pageId: "280400602"
---
You can create a VLAN topology or hierarchy by adding VLAN objects and grouping them together to create a VLAN view or range. You can then track statuses of the VLANs, set some additional details (such as department, contact, description). You can also assign VLANs to DHCP/IPAM networks.

# Viewing VLAN Objects in a VLAN View

To view all the VLAN objects that belong to a particular view:

1. From the **Data Management** tab, click the **VLANs** tab. A list of all the VLAN views is displayed. If the VLAN object belongs to a particular VLAN range, click the VLAN range.
2. Click the VLAN view whose details you want to see. All the VLAN objects and VLAN ranges belonging to the view are displayed with the following details:
   
   - **Name**: Name of the VLAN.
   - **Type**: VLAN or VLAN range.
   - **VLAN ID**: ID of the VLAN.
   - **Start VLAN ID**: Integer from which the VLAN view ID starts. This is applicable only to VLAN views and ranges.
   - **End VLAN ID**: Integer from which the VLAN view ID ends. This is applicable only to VLAN views and ranges.
   - **Description**: Description of the VLAN.
   - **Contact**: Contact information of the person or team managing or using the VLAN
   - **Department**: Name of the department using the VLAN
   - **Status**: Status can be **Assigned**, **Unassigned**, or **Reserved**. An Assigned status indicates that the VLAN is linked to an IPAM network object. An Unassigned status indicates that the VLAN is not linked to an IPAM object. A Reserved status indicates that the VLAN will be excluded from the list of VLANs that are proposed to be assigned to an IPAM object.
   - **Comment**: Any comment entered for the VLAN
   - **Assigned to**: IPAM objects that the VLAN is linked to. This is a read-only value and you cannot edit it.
   - Extensible attributes if any

> **warning**
>
> **Note**
> 
> The details you see vary depending on whether you are viewing the details of the VLAN view or the VLAN range.

Except the **Assigned to** value, you can double-click any of the VLAN details to edit them.

# Adding a VLAN Object

To add a VLAN object to your network:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the Toolbar, click **Add**-&gt; **VLAN**.
3. In the *Add VLAN Wizard*, from the **VLAN Parent Type** drop-down list, select whether you want to add the VLAN to the VLAN view or VLAN range.
4. In the **VLAN Parent** field, select the specific VLAN view or range to which you want the VLAN to belong.
5. In the **VLAN Name** field, specify a name for the VLAN.
6. Click **Next Available VLAN ID** for NIOS to automatically assign an ID for the VLAN. You can also manually specify the VLAN ID. The value of the VLAN ID must be greater than or equal to 1 and lesser than or equal to 4094. When you click **Next Available VLAN ID**, NIOS searches for the lowest unused ID in the specified VLAN view or range.
7. Select the **Reserved** checkbox if you want the VLAN to be excluded from the list of VLANs that are proposed for assignment to an IPAM network object by clicking **Next Available VLAN**.
8. In the **Description** field, enter a description for the VLAN.
9. In the **Contact** field, enter the contact information of the person or team managing or using the VLAN. It can be a name, email ID, telephone number or so on.
10. In the **Department **field, enter the name of the department for which the VLAN will be used.
11. In the **Comment **field, enter additional information if any.
12. Click **Next** to define extensible attributes. For more information see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
13. Click **Save & Close** to save your configuration.

You can now add the VLAN to a VLAN view.

# Editing a VLAN Object

To edit the details of an existing VLAN object:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the list of VLAN views, click the VLAN view that the VLAN object to be edited belongs to. If the VLAN object belongs to a VLAN range, click the VLAN range.
3. Select the VLAN object that you want to edit, select the Action icon and click **Edit**.
4. Edit the details as required. You cannot edit the **Assigned to** field. You cannot change the ID, parent, and status for VLAN objects that are assigned to a network.
5. Click **Save & Close**.

# Editing Multiple VLAN Objects at the Same Time

You can select and edit multiple VLAN objects at the same time. To do this:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the list of VLAN views, click the VLAN view that the VLAN objects to be edited belong to. If the VLAN objects belong to a VLAN range, click the VLAN range.
3. Select all the VLAN objects that you want to edit, select the Action icon and click **Edit**.
4. Edit the details as required. You can edit the parent VLAN, **Reserved** checkbox, **Description**, **Contact**, **Department**, and **Comment** fields. However, you cannot edit the parent of a VLAN object that does not belong to a VLAN range and belongs directly to a VLAN view.
5. Click **Save & Close**.

> **warning**
>
> **Notes**
> 
> - You can select multiple VLAN objects to edit only if all the selected VLAN objects belong to the same VLAN range.
> - You can edit the **VLAN Parent** field to select only another VLAN range as the new parent. You cannot select a VLAN view as the new parent. The new VLAN range must belong to the same VLAN view.
> - You cannot edit the **VLAN Parent** field for multiple VLAN objects that belong directly to a VLAN view and not to a VLAN range.
> - You cannot edit the VLAN parent of VLAN objects that are assigned to a network.

# Deleting a VLAN Object

You cannot delete a VLAN object that is assigned to a network. For more information, see *[Assigning VLANs to a Network](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/assigning-vlans-to-a-network)*.

To delete a VLAN object:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the list of VLAN views, click the VLAN view that the VLAN to be deleted belongs to. If the VLAN object belongs to a VLAN range, click the VLAN range.
3. Select the VLAN object that you want to delete, select the Action icon and click **Delete**.
4. Click **Yes** in the *Delete Confirmation* dialog box.
