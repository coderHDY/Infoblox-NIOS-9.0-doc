---
title: "Synchronizing IP Addresses with Invalid MAC Addresses"
source: "/space/nios90/380928046"
pageId: "380928046"
---
An invalid MAC address is a MAC address whose length is not six bytes (48 bits). You can synchronize IP addresses with invalid MAC addresses only for Microsoft servers for which you have enabled DHCP synchronization. When you enable this setting for a Microsoft DHCP server, NIOS synchronizes any DHCP lease or reservation with an invalid MAC address and it is effective from the next scheduled DHCP lease or DHCP server synchronization. The synchronization does not affect a DHCP lease or reservation with a valid MAC address.  
You can synchronize IP addresses with invalid MAC addresses at the Grid level and override them at the member level. The appliance displays the invalid MAC address using a red cross mark in the list. You cannot save invalid MAC addresses, but you can view invalid MAC addresses in the list panels and editors.  
When you disable synchronization for invalid MAC addresses, NIOS ignores any DHCP lease or reservation with an invalid MAC address and the object disappears from NIOS during the next synchronization of the Microsoft server to which it belongs. An invalid MAC address that you had synchronized earlier persists until NIOS updates the associated lease or reservation with a new MAC address, or the lease is cleared, or deleted, or expired.  
To synchronize an invalid MAC address, complete the following:

1. From the **Infoblox** **Grid** tab -&gt; **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.
2. Select the **Microsoft** **Integration** tab in the *Grid* *Properties* *Editor* wizard and complete the following in the **Advanced** tab:
   
   - **Allow** **Invalid** **MAC** **Address** **to** **be** **synchronized**: This is enabled, by default. Select this to enable synchronization for invalid MAC addresses.
3. Save the configuration.
