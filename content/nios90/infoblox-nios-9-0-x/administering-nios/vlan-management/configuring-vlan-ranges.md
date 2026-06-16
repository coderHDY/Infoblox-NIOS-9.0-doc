---
title: "Configuring VLAN Ranges"
source: "/space/nios90/280791376"
pageId: "280791376"
---
A VLAN range is used by NIOS to group VLAN objects. A VLAN range ID must be in between 1 and 4094 (1 and 4094 included). A VLAN view can include one or more ranges. However, it is not mandatory that a VLAN view must include a range.

# Adding a VLAN Range

To add a VLAN range:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the Toolbar, click **Add**-&gt; **VLAN Range**. The *Add VLAN Range Wizard* is displayed.
3. Click **Select VLAN View** to select the view to which the range must belong.
4. In the **VLAN Range Name** field, enter a name for the VLAN range.
5. In the **Start VLAN ID** field, enter the minimum ID that can be used by a VLAN object.
6. In the **End VLAN ID** field, enter the maximum ID that can be used by a VLAN object.
7. Select the **Pre-create VLANs** checkbox if you want NIOS to automatically create VLANs. When you select this checkbox, the **VLAN Name Prefix** field becomes enabled and NIOS creates VLANs between the range you specified in the **Start VLAN ID** and **End VLAN ID** fields. If you select this checkbox when adding a VLAN range, VLANs are created inside of the range. If you create an empty VLAN range, all existing VLANs (in a VLAN view) are re-parented by range if their IDs are in the start to end range IDs of the VLAN range. Therefore, if there are VLANs to re-parent by the newly created range, you cannot pre-create VLANs in this range. You cannot edit the **Pre-create VLANs** checkbox.
8. In the **VLAN Name Prefix** field, enter a prefix that will be added to the VLAN name. The VLAN name is constructed using the following pattern: `&lt;VLAN Prefix Name&gt; + &lt;VLAN ID&gt;` (the VLAN ID is optionally prefixed with zeros). VLANs are automatically created with the prefix name and VLAN ID. You cannot edit this field.
9. In the **Comment** field, enter additional information if any.
10. Click **Next** to define extensible attributes. For more information, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
11. Click **Save & Close** to save your configuration.

# Editing a VLAN Range

To edit the details of a VLAN range:

1. From the **Data Management** tab, click the **VLANs** tab.
2. Click the VLAN view that the range belongs to, select the Action icon and click **Edit**.
3. Edit the details as required. You cannot edit the **VLAN Name Prefix** field and the **Pre-create VLANs** checkbox.
4. Click **Save & Close**.

> **warning**
>
> **Note**
> 
> Changing the start and end VLAN IDs may lead to re-parenting of the child VLANs. Based on how the start and end VLAN IDs of the range changed, new VLANs may be added to the range or removed from it (in which case the VLAN view becomes the new parent). Also, changing parent field allows you to move ranges between views.



# Deleting a VLAN Range

To delete a VLAN range:

1. From the **Data Management** tab, click the **VLANs** tab.
2. Click the VLAN view that the range that you want to delete belongs to.
3. Select the VLAN range, select the Action icon and click **Delete**.
4. Select the **Delete only the VLAN Range and re-parent the VLANs** option if you want to delete only the VLAN range and not the VLAN child objects under the range. In this case, if you had selected the **Allow VLAN Range Overlapping** option when creating the VLAN view:  
   -  If the VLAN IDs of the VLAN objects can be categorized into another VLAN range, then the child objects are automatically categorized under the new VLAN range.   
   -  If the VLAN IDs cannot be categorized under a VLAN range, then the VLAN child objects are categorized under the VLAN view.   
   -  If the VLAN IDs can be categorized into more than one VLAN range, then NIOS displays an error message because it cannot determine the VLAN range under which to categorize the VLAN IDs and the VLAN range is not deleted.
5. Select the **Delete the VLAN Range and all VLANs below it** option if you want both the VLAN range and the VLAN child objects that belong to the VLAN range to be deleted.
6. Click **Yes** in the *Delete Confirmation* dialog box.

> **warning**
>
> **Note**
> 
> You cannot delete or modify a VLAN object that is already assigned to a network. If a child VLAN object is assigned to a network and you select the Delete the VLAN Range and all VLANs below it option or the Delete only the VLAN Range and re-parent the VLANs option, NIOS displays an error message. You can resolve the error by manually restructuring the VLAN objects.



## Example - VLAN Range Deletion

The following example illustrates how VLAN objects are categorized when you delete a VLAN range.

![image](/assets/280791376/88ff24f4-9900-435d-8c95-5ce587fb62c5.png)

This example illustrates 3 VLAN ranges that allow overlapping VLAN IDs. If you try to delete VLAN Range 3, NIOS displays an error message because the child VLAN objects VLAN 40 and VLAN 41 can either be categorized under VLAN Range 1 or VLAN Range 2, and the VLAN Range 3 is not deleted. In this scenario, you must manually change the parent of the VLAN objects.
