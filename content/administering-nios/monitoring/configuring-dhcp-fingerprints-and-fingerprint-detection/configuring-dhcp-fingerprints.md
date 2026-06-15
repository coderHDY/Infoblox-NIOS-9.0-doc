---
title: "Configuring DHCP Fingerprints"
source: "/space/nios90/280760677"
pageId: "280760677"
---
The appliance installs standard DHCP fingerprints when you first install or upgrade to latest NIOS version. You cannot modify standard DHCP fingerprints nor delete them, but you can disable them. When you disable a DHCP fingerprint, the appliance disables the associated option number sequence and vendor ID, and it cannot match a remote device against the disabled DHCP fingerprint.  
When you add a new DHCP fingerprint, the appliance marks it as a custom DHCP fingerprint. For information about adding custom DHCP fingerprints, see Adding New DHCP Fingerprints below. You can modify information about custom DHCP fingerprints, and you can delete them. For information, see Modifying Custom DHCP Fingerprints and Deleting Custom DHCP Fingerprints below. When you delete a custom DHCP fingerprint, the appliance moves it to the Recycle Bin, if enabled. You can later restore it from the Recycle Bin if needed.  
Activities such as additions, modifications, and deletions of DHCP fingerprints are recorded in the audit log. For information about how to use the audit log, see *[Monitoring Tools](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049)*.

> **warning**
>
> **Note**
> 
> The appliance periodically updates the cached DHCP fingerprints. When you add, modify, or delete a DHCP fingerprint, you do not need to restart the services, but it may take up to two minutes before the appliance updates the DHCP fingerprint.

# Adding New DHCP Fingerprints

To add a custom DHCP fingerprint, complete the following steps:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Fingerprints** tab, and then click the Add icon.
2. In the *Add* *DHCP* *Fingerprint* wizard, complete the following:
   
   - **Name**: Enter the name of the custom DHCP fingerprint. The name must be unique, and it cannot contain any UTF-8 characters.
   - **Device** **Class**: From the drop-down list, select the device category to which this new fingerprint belongs. You can also enter a new device class here. When you enter a device class that already exists, the appliance matches the entry and uses the class from the current list. Device class is used for filtering purposes. For information about defining a DHCP fingerprint filter, see *[Configuring DHCP Fingerprint Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663241)*.
   - **Protocol**: From the drop-down list, select the protocol used for custom DHCP fingerprint.
   - **Option** **Number** **Sequence**: Click the Add icon in the table. The appliance adds a row to the table. Click the row and enter the DHCP option number that you want the appliance to validate. Valid values are from 0 to 255. When you enter more than one option, you must use commas (without spaces) to separate the numbers. For example, you can enter `1,15,3,6,44,46,47,31,33``,249,43` for a Microsoft Windows Kernel 5.1,5.2 system.  
     You can also select an option sequence and click the Delete icon to delete it. Note that if you enter an option sequence that already exists in a standard DHCP fingerprint, you must disable that standard fingerprint before you can add the option sequence to the new DHCP fingerprint.
   - **Vendor** **Identifier**: Click the Add icon in the table. The appliance adds a row to the table. Click the row and enter a vendor ID for this fingerprint. You can add more than one vendor ID. You can also select a vendor ID and click the Delete icon to delete it.
   - **Comment**: Enter additional information about the custom DHCP fingerprint.
   - **Disabled**: Select this if you want to save the configuration for the DHCP fingerprint but do not want to activate it yet. You can clear this checkbox when you are ready to use this DHCP fingerprint.

3. Save the configuration or click **Next** to define extensible attributes. For information, see *[Using Extensible Attributes](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*.

To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule Change* panel, click **Later**, and then specify a date, time, and time zone.

# Modifying Custom DHCP Fingerprints

You can modify custom DHCP fingerprints, but not the standard ones. Note that the appliance periodically updates the cached DHCP fingerprints. When you modify a DHCP fingerprint, you do not have to restart the services, but it may take up to two minutes before the appliance updates the DHCP fingerprint.  
To modify a custom DHCP fingerprint, complete the following steps:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Fingerprints** tab -> *custom_fingerprint* checkbox, and then click the Edit icon.
2. The *DHCP* *Fingerprint* editor provides the following tabs from which you can modify information:
   
   - **General**: Modify the general information, such as the name and device class, as described in Adding New DHCP Fingerprints above. Note that when you change the name of a DHCP fingerprint, the old name no longer exists, and you cannot use it for searching or filtering purposes. You may not be able to modify all fields in a standard DHCP fingerprint.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the DHCP fingerprint. You can also modify the values of extensible attributes. For information, see *[Using Extensible Attributes](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)*. Note that you cannot modify extensible attributes for standard fingerprints.
3. Save the configuration.

To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule Change* panel, click **Later**, and then specify a date, time, and time zone.

# Deleting Custom DHCP Fingerprints

When you delete a custom DHCP fingerprint, the appliance moves it to the Recycle Bin, if enabled. You can later restore the DHCP fingerprint if needed. Note that you cannot delete standard DHCP fingerprints.  
To delete a custom DHCP fingerprint, complete the following steps:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Fingerprints** tab -> *custom_fingerprint* checkbox, and then click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes** to delete the DHCP fingerprint.

To schedule this task, click the Delete icon -> **Schedule** **Delete**. In the *Schedule* *Deletion* dialog box, click **Delete** **Later**, and then specify a date, time, and time zone.

# Viewing DHCP Fingerprint Information

The following are a few ways that you can use to view the DHCP fingerprint information:

- In a Grid with a reporting server, you can view reports that contain information about the top OSs and device types of the leasing clients in your network. For more information about DHCP Dashboards, see *[Predefined Dashboards](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758557)*.
- The appliance provides a few predefined smart folders from which you can view lease information about specific device groups, such as gaming consoles and Microsoft Windows devices. For more information, see *[Predefined Smart Folders](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857674)*.
- When the appliance finds a DHCP fingerprint match for a client, Grid Manager displays either the fingerprint name or the vendor ID in the following panels of Grid Manager: *IP List*, *Current Lease*, *Lease History*, and *DHCP Range*. You can see this information in the **Fingerprints** column in these panels.
- The appliance records all DHCP fingerprint related activities in the audit log. For more information about using the audit log, see *[Monitoring Tools](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049)*.
