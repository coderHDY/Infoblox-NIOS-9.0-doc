---
title: "My Smart Folders and Predefined Smart Folders"
source: "/space/nios90/280857674"
pageId: "280857674"
---
Grid Manager has two types of smart folders available:

- My Smart Folders
- Pre-defined Smart Folders

# My Smart Folders

In My Smart Folders, you can create personal smart folders and links to global smart folders. When you create links to global smart folders, you can only view information in the folders. However, you can create a local copy of the global smart folder in its current state for editing purposes. Note that when the original global smart folder is updated, information in your local copy is not updated. For information, see [*Saving Smart Folders Data*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/smart-folders/saving-smart-folders-data). When you delete a link to a global smart folder in this tab, only the link is deleted. There is no impact on the information in the original global smart folder.  
 Grid Manager displays a list of smart folders in the list panel. The same list of smart folders is also displayed in the* Finder* panel. For more information, see [*About the Grid Manager Interface*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/about-the-grid-manager-interface).  
When you mouse over a smart folder in the list panel, the following icons appear:

- **Information**: Displays information about the selected smart folder. Information includes comments and filter criteria of the folder. It also displays how you grouped the filtered data.
- **Edit**: Click this icon to edit the definition and filter criteria for the smart folder.
- **Delete**: Click this icon to delete the smart folder. This operation does not affect the objects or networks that are in the folder. Only the smart folder is deleted.

# Predefined Smart Folders

The appliance can detect remote clients through their DHCP fingerprints, or through device information discovered through SNMP and other device and network detection protocols. You can use predefined smart folders to view lease history, IP addresses, network infrastructure devices, and other related information for remote clients that contain DHCP fingerprint information related to the following device groups:

- **Smartphone,PDA,Tablet Devices**: Includes all devices that were detected as smartphones, PDAs, and tablets.
- **Microsoft Windows Devices**: Includes all devices that were detected to be running Windows OS.
- **Apple MAC OS Devices**: Includes devices that were detected to be running MAC OS.
- **Conflicts**: Includes hosts detected in the network that have a MAC Address conflict. A discovered host has a MAC address conflict when its MAC address is different from that specified in its fixed address, DHCP lease, or host record.
- **Discovered Routers/Switches**: Includes core network infrastructure devices of the specific Router, Switch, or Switch-Router types discovered by NIOS using the discovery feature set. Clicking on a device name opens the device page under **DataManagement–&gt;Devices** and shows the **Interfaces** page for the chosen device.
- **Active Directory Sites**: Includes all names that were detected as Active Directory Sites. Clicking on an Active Directory Site opens the *Active Directory Site Properties* editor where you can edit the name, add, or delete networks that are associated with the Active Directory Site. For more information, see [*Managing Active Directory Sites and Associated Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/managing-active-directory-sites-and-associated-n).
- **Gaming Console Devices**: Includes devices that were detected as gaming consoles.
- **Router and Wireless Access Point Devices**: Includes devices there were detected as routers or wireless access point devices.
- **Unmanaged**: Shows all unmanaged devices.

# Related topics

[*DHCP Fingerprint*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/dhcp-fingerprint)

[*Infoblox Network Insight*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight)
