---
title: "Configuring VLAN Views"
source: "/space/nios90/280400628"
pageId: "280400628"
---
You can create a VLAN view and group VLAN objects and VLAN ranges into that VLAN view. A VLAN view allows you to view grouped VLANs in an hierarchical format.

A VLAN view named **default** is automatically created for all NIOS installations starting from NIOS 8.4 and upgrades from earlier versions.

# Viewing a VLAN View

To view the list of VLAN views, perform the following steps:

1. From the **Data Management** tab, click the **VLANs** tab. A list of all the VLAN views is displayed. The following details of the VLAN view are displayed:
   
   - **Name**: Name of the VLAN view
   - **Start VLAN ID**: Integer from which the VLAN ID can start.
   - **End VLAN ID**: Integer till which the VLAN ID can end.
   - **Comment**: Information for the VLAN view if any.
   - **Allow Range Overlapping**: Whether VLAN ranges with overlapping VLAN IDs are allowed in the VLAN view. For information about overlapping VLAN IDs, see Allow VLAN Range Overlapping below.
   - **Site**: Extensible attribute for the VLAN view.
2. Click a VLAN view name to view all the VLAN objects and VLAN ranges that belong to the VLAN view.

# Adding a VLAN View

To add a VLAN view:

1. From the **Data Management** tab, click the **VLANs** tab.
2. From the Toolbar, click **Add**-&gt; **VLAN View**. The *Add VLAN Wizard* dialog box is displayed.
3. In the **VLAN View Name **field, enter a name for the VLAN view.
4. In the **Start VLAN ID** field, enter the minimum ID that can be used by a child VLAN range or VLAN object. VLANs can acquire an ID that is in between the values you enter in the **Start VLAN ID** and **End VLAN ID** fields. The VLAN ID must be  greater than or equal to 1 and less than or equal to 4094. A VLAN ID is unique. No VLAN object can share the same VLAN ID.
5. In the **End VLAN ID** field, enter the maximum ID that can be used by a child VLAN range or VLAN object. The VLAN ID must be  greater than or equal to 1 and less than or equal to 4094. A VLAN ID is unique. No VLAN object can share the same VLAN ID.
6. Select the **Pre-create VLANs** checkbox if you want NIOS to automatically create VLANs. When you select this checkbox, the **VLAN Name Prefix** field becomes enabled and NIOS creates VLANs between the range you specified in the **Start VLAN ID** and **End VLAN ID** fields. You cannot edit the **Pre-create VLANs** checkbox.
7. In the **VLAN Name Prefix** field, enter a prefix that will be added to the VLAN name. The VLAN name is constructed using the following pattern: `&lt;VLAN Prefix Name&gt; + &lt;VLAN ID&gt;` (the VLAN ID is optionally prefixed with zeros). VLANs are automatically created with the prefix name and VLAN ID. You cannot edit the **VLAN Name Prefix** field.
8. Select the **Allow VLAN Range Overlapping** checkbox if you want to allow different VLAN ranges in the same VLAN view to have overlapping start and end VLAN IDs. Overlapping VLAN ranges will have unique VLAN IDs. For example, if you create a VLAN view with two ranges from 1 to 15 and from 2 to 18, and a VLAN object with ID 14  under the first range, the VLAN object will belong to both VLAN range 1 and VLAN range 2. However, its parent VLAN range is the range under which it was created; in this case, the first VLAN range. The parent VLAN range is displayed in the **Parent VLAN Range** column when viewing a VLAN range details.  If there are overlapping ranges in a VLAN view, you cannot disable the checkbox. If you want to disable the checkbox, you must reconfigure the VLAN ranges to avoid conflicts and then disable the option.
9. In the **Comment** field, enter comments if any.
10. Click **Next** to define extensible attributes. For more information, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.
11. Click **Save & Close** to save your configuration.

# Editing a VLAN View

To edit the details of a VLAN view:

1. From the **Data Management** tab, click the **VLANs** tab.
2. Select the VLAN view that you want to edit, select the Action icon and click **Edit**.   
   **Note:** Changing the start or end VLAN ID values in a VLAN view may lead to errors. For example, if the VLAN IDs of a VLAN view are from 1 to 5, you cannot change them to 1 to 2 in case there is a child VLAN with ID 3 or 4 or 5 in the VLAN view.
3. Edit the details as required.
4. Click **Save & Close**.

# Deleting a VLAN View

You cannot delete a VLAN view that contains VLANs assigned to a network. To delete a VLAN view:

1. From the **Data Management** tab, click the **VLANs** tab.
2. Select the VLAN view that you want to delete, select the Action icon and click **Delete**.
3. Click **Yes** in the *Delete Confirmation* dialog box.

> **warning**
>
> **Note**
> 
> When you delete a VLAN view, all child VLANs and ranges are also deleted.
