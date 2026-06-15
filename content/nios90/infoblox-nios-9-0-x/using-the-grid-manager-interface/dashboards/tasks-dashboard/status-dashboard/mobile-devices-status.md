---
title: "Mobile Devices Status"
source: "/space/nios90/1457193696"
pageId: "1457193696"
---
The *Mobile* *Devices* widget provides information about the number of active leases of the DHCP fingerprint devices managed by the Grid. The widget displays a pie chart indicating the number of active leases in percentile for each of the device category. You can click the Refresh icon or configure auto refresh to update the status.

> **warning**
>
> ### Note
> 
> The *Mobile* *Devices* widget updates its data every 15 minutes. A device might not be displayed in this widget if its lease expires within 15 minutes.

To configure the *Mobile* *Devices* widget, click the Configure icon and do the following:

- Click **Select** **Network** **View**. In the *Network* *View* *Selector* dialog box, select a network view from the list and click **OK**.

Note that if multiple network views were previously configured, Grid Manager displays the default network view. You can select another network view from the *Network* *View* *Selector* dialog box.  
The widget displays the number of active leases for the following device classes:

- **MacOS** - Displays all devices that were detected to be running Mac OS.
- **Windows** - Displays all devices that were detected to be running Windows.
- **Android Mobile** - Displays Smartphones/PDAs/Tablets that were detected to be running Android.
- **Apple Mobile** - Displays Smartphones/PDAs/Tablets that were detected to have Apple in the DHCP fingerprint information.
- **No Match** - Displays all devices whose fingerprint information does not match with any of the standard/custom DHCP fingerprint data stored in the appliance. For information about Standard and Custom DHCP Fingerprints, see [*Standard and Custom DHCP Fingerprints*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/configuring-dhcp-fingerprints-and-fingerprint-de/standard-and-custom-dhcp-fingerprints).
- **Other** - Displays all devices that belong to a device class other than those listed above.

*List* *of* *device* *types* *and* *classes*

| **Category ** | **Device Class** | **Device Type** |
| --- | --- | --- |
| Windows | Windows | Microsoft Windows 2000 |
| Microsoft Windows 2003 |
| Microsoft Windows 8 |
| Microsoft Windows Vista/7 or Server 2008 |
| Microsoft Windows XP |
| Mac OS | Macintosh | Apple Mac OS 9 |
| Apple Mac OS X, TV (HD) |
| Apple Mobile | Smartphones/PDAs/Tablets   | Apple iPod |
| Apple iPod, iPhone, iPad or TV (SD) |
| Android Mobile | Smartphones/PDAs/Tablets | Android Phone/Tablet (Generic) |
| Android Phone/Tablet (HTC, older devices) |
| Android Phone/Tablet (Motorola, older devices) |
| Android Phone/Tablet (Sony Ericsson, older devices) |
| Android Phone/Tablet (Unknown devices) |
| Android Phone/Tablet (Vizio tablet, Others) |
| Android Phone/Tablet (newer devices) |
| Android tablets (Samsung, Others) |
| ZTE N9120 Android |
