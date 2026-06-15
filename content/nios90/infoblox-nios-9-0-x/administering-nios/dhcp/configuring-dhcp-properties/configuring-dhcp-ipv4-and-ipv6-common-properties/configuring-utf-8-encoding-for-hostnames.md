---
title: "Configuring UTF-8 Encoding for Hostnames"
source: "/space/nios90/1462403620"
pageId: "1462403620"
---
When you configure the appliance as a DHCP server, the appliance supports UTF-8 encoding of hostnames that are encoded with Microsoft Windows code pages. You can configure the DHCP services on the appliance to convert these client hostnames to UTF-8 characters. The appliance stores the UTF-8 encoded hostnames in the database. If you also configure the DHCP services on the appliance to perform DDNS updates, the appliance sends the UTF-8 encoded host names in the DDNS updates. You can configure the UTF-8 encoding of host names at the Grid DHCP service and member DHCP service levels.  
The appliance displays the host names in their original characters in the following:

- DHCP lease history
- DHCP lease details
- IP address management
- Syslog
- Audit log

To configure UTF-8 encoding for hostnames:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then select **Grid** **DHCP** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.
2. In the *DHCP* *Properties* editor, select the **General** **Basic** tab and complete the following:
   
   - **IPv4** **Properties**
     
     - **Microsoft** **Clients** **Code** **Page**: From the drop-down list, select the code page with which the host names are encoded when the appliance converts the Microsoft code page encoded host names to UTF-8 characters.
   - **IPv6** **Properties**
     
     - **Microsoft** **Clients** **Code** **Page**: From the drop-down list, select the code page with which the host names are encoded when the appliance converts the Microsoft code page encoded host names to UTF-8 characters.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
