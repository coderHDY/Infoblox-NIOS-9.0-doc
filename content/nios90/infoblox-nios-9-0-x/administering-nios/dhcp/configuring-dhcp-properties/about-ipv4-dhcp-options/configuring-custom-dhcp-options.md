---
title: "Configuring Custom DHCP Options"
source: "/space/nios90/1331332156"
pageId: "1331332156"
---
You can define custom options in the DHCP option space or in an option space that you configured, as follows:

1. From the **Data Management** tab, select the **DHCP** tab -&gt; **Option Spaces** tab.
2. Select either the **DHCP** option space or an IPv4 option space that you configured, and then click the Edit icon.
3. In the *Option Space* editor, click the Add icon to add a custom option. In the new row, complete the following:
   
   - **Name**: Enter the name of the custom DHCP option.
   - **Code**: Select an option code from the drop-down list. Select a number between 126 and 254 if you are adding custom options to the **DHCP** option space. If you are adding custom options to an IPv4 option space you configured, you can enter a number between 1 and 254.
   - **Type**: Select the option type (such as ip-address, text, boolean, and string as described in the DHCP Option Data Types table above).  
     For example, to create an option that defines the IP addresses of Solaris root servers, enter the name SrootIP4, select option code 126, and then select the type as ip-address.  
     Click the Add icon to add more options.
4. Save the configuration.
