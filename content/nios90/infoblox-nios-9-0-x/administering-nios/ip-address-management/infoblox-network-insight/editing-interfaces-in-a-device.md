---
title: "Editing Interfaces in a Device"
source: "/space/nios90/280666028"
pageId: "280666028"
---
> **warning**
>
> ### Note
> 
> Voice VLAN settings are applicable only for Cisco devices.

To speed port configuration workflows, you can select one interface or multiple interfaces for a device to change the admin status, description and VLAN settings. For example, this feature is handy if you want multiple interfaces to participate in the same data VLAN. There are two ways to approach this feature: directly from the **Devices** page, or by selecting a device on the **Devices** page, opening its **Interfaces** page and selecting ports from there.  
Editing interfaces is done from the main **Data** **Management** **–&gt;** **Devices** page.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the Action icon
   
   *[image: media]*
   
   for a chosen device and choose **Interfaces** from the popup menu.
3. Select the checkbox for a specific interface, click the Action icon
   
   *[image: media]*
   
   for the interface and choose **Edit**. The interface editor appears as shown in the figure below.   
   *Interface* *Editor,* *with* *editable* *Admin* *Status* *and* *Description* *settings*

*[image: media]*

4. The editable settings are **Admin** **Status** (**Up** or **Down**) and **Description** (click inside the field to edit). In some cases, owing to device permissions, the device type or other device settings, you may not be able to edit these values for the selected interface.  
     5. To edit VLANs for the chosen interface, click the **VLAN** tab. The following figure shows an example. VLAN editing also is subject to permission limitations based on the device, and on the device type.

*Editing* *VLANs*   
    6. Choose a data VLAN to assign to the port from the **Data** **VLAN** drop-down menu.  
    7. If supported, choose a voice VLAN (Cisco only) from the **Voice VLAN** drop-down menu.  
    8. Click the **Extensible Attributes** tab to add any attributes that are necessary for the interface.  
    9. Click **Save** **&** **Close** to close the interface editor.

# Editing Multiple Interfaces

To edit multiple interfaces for a device:

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the Action icon
   
   *[image: media]*
   
   for a chosen device and choose **Interfaces** from the popup menu.
3. Select the checkboxes for each interface that you want to edit.
4. Expand the Toolbar and click **Edit**. The Interfaces editor appears as shown in the figure below.  
   *Editing* *Multiple* *Interfaces*

You can select one or more interfaces for configuration, define their settings in the dialog, and then select other interfaces and define different settings for them.

> **warning**
>
> ### Note
> 
> Once you change **Admin** **Status**, **Data** **VLAN** or **Voice** **VLAN** settings for any selected port, no automatic eversion exists to the original settings from the same editing session. You must cancel out of the Interfaces editor to reject any changes and begin with a new editing session from the **Interfaces** page. Use the **Verify** button to verify your changes.

5. Select the checkboxes for one or more ports and define the Port Configuration settings for the following:

- **Admin Status**: Select Up or Down from the menu, depending on the current state of the port(s);
- **Description**: Provide a brief description of the port configuration or other information;
- **DataVLAN**: (Hidden if editing a VLAN is not supported) Drop-down list of all data VLANs actively configured in the current device. One of the values can be chosen for the currently select interface(s);
- **VoiceVLAN**: (Hidden if editing a voice VLAN is not supported) Drop-down list of all voice VLANs actively configured in the current device. One of the values can be chosen for the currently select interface(s).

6. After making configuration changes to all ports, click **Verify** to check over your changes:

*Verifying* *port* *configuration* *changes*

7. Click **OK**. The changes are not committed by doing so.  
    8. If the port configuration changes are correct, click **Save & Close** or click the Scheduling icon at the top of the editor. To schedule this task, click the Schedule icon at the top of the editor. In the *ScheduleChange* panel, click **Later**, and then specify a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. You can reschedule the task if you have the applicable permissions.

When you complete the configuration, all port configurations in the session are combined into a single task by Grid Manager.

# Editing Multiple Interfaces from the Devices Page

The **Data** **Management** **–&gt;** **Devices** page allows you to immediately set the Admin Status, descriptions and VLAN settings for any selection of ports on a single device.

1. Click the Action icon
   
   *[image: media]*
   
   for a chosen device and choose **Edit** from the popup menu. The **Interfaces** page appears for the device editor.
2. Select the checkboxes for one or more ports and define the Port Configuration settings for the following:
   
   1. **Admin** **Status**: Select Up or Down from the menu, depending on the current state of the port(s);
   2. **Description**: Provide a brief description of the port configuration or other information;
   3. **Data** **VLAN**: (Hidden if editing a VLAN is not supported) Drop-down list of all data VLANs actively configured in the current device. One of the values can be chosen for the currently select interface(s);
   4. **Voice** **VLAN**: (Hidden if editing a voice VLAN is not supported) Drop-down list of all voice VLANs actively configured in the current device. One of the values can be chosen for the currently select interface(s).
3. After making configuration changes to all ports, click **Verify** to check over your changes.
4. Click **OK**. The changes are not committed by doing so.
5. If the port configuration changes are correct, click **Save** **&** **Close** or click the Scheduling icon at the top of the editor. To schedule this task, click the Schedule icon at the top of the editor. In the *Schedule* *Change* panel, click **Later**, and then specify a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. You can reschedule the task if you have the applicable permissions.

When you complete the configuration, Network Insight combines all port configurations in the session into a single task.

# Inline Interface Editing

You can directly edit a device's interface listings in the Interfaces page. Double-click any table row and the fields that you can edit for the row, which consist of the VLAN ID, Admin Status and **Description** fields for each interface, open in an inline editing selection field.  
Fields are editable as applicable to device types. If you are editing an interface on a L2 switch, for example, the **VLAN** **ID** field does not appear.   
  
*Editing* *Interface* *values* *inline.*   
  
Double-clicking a table row opens the editable fields for the selected record.  
If editable fields are not present in the table display, you cannot change their values in the **Interfaces** page.  
After making inline changes, click **Save** on the selected row to commit them. To prevent using any changes, click **Cancel**. This also de-selects the row.

*[image: media]*

> **warning**
>
> ### Note
> 
> When you make inline changes to an interface, a new task is created under Grid Manager, which you can view in the Task Manager page (for more information, see [*Viewing Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks)). A status icon appears next to the interface element you have changed, indicating the status of the new task and providing a link to the Task Manager page. New tasks appear with a status icon of Pending (||). When the new task completes, the icon changes to a green checkmark.

*[image: media]*
