---
title: "Managing Time Settings"
source: "/space/nios90/280765142"
pageId: "280765142"
---
You can define the date and time settings for your NIOS appliance using the Infoblox Appliance Startup Wizard. Alternatively, you can set the date and time of the appliance anytime after you first configure it if you did not do so using the startup wizard or if you need to change it if, for example, you move an appliance from a location in one time zone to a location in a different time zone. To set the date and time of the appliance, you can either manually enter the values or configure the appliance to synchronize its time with a public NTP server.

# Changing Time and Date Settings

If you do not use the NTP service, you can set the date and time for a Grid.

> **warning**
>
> ### Note
> 
> You cannot manually set the date and time if the NTP service is enabled.

To set the time and date for a Grid using the *Grid* *Properties* editor:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.
2. In the **General** tab of the *Grid* *Properties* editor, complete the following:
   
   - **Date:** Click the calendar icon to select a date or enter the date in YYYY-MM-DD format.
   - **Time:** Click the clock icon to select a time or enter the time in HH:MM:SS format. For afternoon and evening hours, use the integers 13-24.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> Changing the date and time resets the application and terminates the management session.

# Changing Time Zone Settings

Whether you enable NTP (Network Time Protocol) or manually configure the date and time, you must always set the time zone manually. You can set the time zone for a Grid, which then applies to all members. If different members are in different time zones, you can choose the time zone that applies to most members at the Grid level, and then override the setting for the remaining members.

> **warning**
>
> ### Note
> 
> Changing the time zone does not reset the application nor does it terminate the management session.

To set the time zone for a Grid or member:

1. **Grid:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.  
   **Member:** From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the **General** tab of the editor, select the appropriate time zone.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Monitoring Time Services

In a Grid, the Grid Master and its members use an internal NTP daemon to synchronize their time. It is not user-configurable and functions regardless of how you set the time on the Grid Master. The *Detailed* *Status* panel contains an NTP Synchronization icon so you can monitor the internal NTP daemon that runs within a Grid to ensure the time among its members is synchronized.  
To display the *Detailed* *Status* panel, from the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member.*  
checkbox, and then click the Detailed Status icon in the table toolbar of the *Members* panel. The following are descriptions of the NTP status icons in the *Detailed* *Status* panel:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
| ![image](/assets/280765142/57590c4d-bc0b-41b8-9649-dec8e966f250.png) | Green | The NTP service is running properly. |
| ![image](/assets/280765142/1cb5d403-5737-4357-8281-c3c8a600953f.png) | Yellow | The appliance is synchronizing its time. |
| ![image](/assets/280765142/46662207-3ea2-4bdf-81f6-61785b7b0d02.png) | Red | The NTP service is not running properly. View the corresponding description for additional information. |
