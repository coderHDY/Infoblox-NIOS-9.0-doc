---
title: "Testing SNMP and CLI Credentials"
source: "/space/nios90/1343292886"
pageId: "1343292886"
---
After configuring SNMP and CLI credentials, you can click **Test** **Credentials** in the SNMP Credentials or CLI Credentials panel to test the credentials. Credential testing ensures that the configured credentials work for as many devices and networks as possible. The procedure in this section applies to both the Grid and the member levels. You can override the Grid settings at the member level.

For CLI credentials, you can test an admin login name and password tuple as well as a following enable credential, if necessary. You can also override CLI credentials and enable credentials for IPAM objects such as fixed addresses, IP reservations, and host objects. You can test any credential set, an enable credential, or both in combination against any device within any network view. Network Insight sets the login sequence to match the command-line standards for the selected device.

To test SNMP credentials or CLI credentials, complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then click **Discovery**.
2. For the Grid: Click **Edit** &gt; **Grid** **Discovery** **Properties** in the Toolbar.  
   For a Probe member: Select a *member* checkbox, and then click **Edit** &gt; **Member** **Discovery** **Properties** in the Toolbar.
3. In the **Grid Discovery Properties** or **Member Discovery Properties Editor**, click the **Credentials** tab &gt; **SNMPv1/v2** tab, **SNMPv3** tab, or **CLI** tab.
4. Select the checkbox or checkboxes for the Login credentials and/or Enable credentials (if applicable) you want to test.   
   For a Probe member, click **Override**, and then select the credential checkboxes.
5. Click **Test** **Credentials**.
6. In the **Test SNMP Credentials** or **Test CLI Credentials **dialog box, complete the following:
   
   - **IP** **Address**: Select this to test the credential against an IP address of a reachable device in a network (even if it has not been discovered or managed through NIOS) within a specified network view. Enter the IP address in the field. Ensure that you select the respective network view in which this IP address resides.
   - **Network** **View**: If you have multiple network views, select the network view in which the IP address resides from the drop-down list. If you have only one network view, which is the default view, the **Network** **View** drop-down list is hidden by default. NIOS conducts credential testing for the IP address in the selected network view.
   - **Device**: Select this to test against a selected device. Click **Select** **Device** and the *Device* *Selector* appears. If you have multiple network views, you must first select the network view in which the device resides from the **Network** **View** drop-down list, located at the upper left-hand corner of the selector. If you have only one network view, which is the default view, the **Network** **View** drop-down list is hidden by default. You can check the device categories under **All** **Devices** to locate discovered switches and routers or any unmanaged devices previously detected by discovery under NIOS. You can explore categories including Discovered Switches/Routers, Microsoft Windows Devices (this can include items such as Windows Servers of various types), Router and Wireless Access Point Devices, Unmanaged, and others. By default, all devices previously discovered appear in this selector. If you have a long list of devices, you can enter a device name search value or a search expression in the **Find** field and click **Go**. You can also click **Show** **Filter** to narrow down your selection by selecting available filters. Click **OK** after you have selected a device and its corresponding network view.
7. Click **Start** to begin testing the credential against the IP address or selected device. The communication and testing processes appear in the lower panel of the editor.

> **warning**
>
> ### Note
> 
> If the specified IP address is excluded from all discovery ranges, if it is not a part of the selected network view, or if the credential is entered with missing information, a message appears at the top of the editor after clicking **Start**. Otherwise, the test begins and its process and results appear in the lower panel of the editor.
