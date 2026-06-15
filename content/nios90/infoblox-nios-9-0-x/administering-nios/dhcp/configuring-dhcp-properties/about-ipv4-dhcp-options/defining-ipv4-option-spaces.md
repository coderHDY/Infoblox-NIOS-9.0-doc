---
title: "Defining IPv4 Option Spaces"
source: "/space/nios90/1331299367"
pageId: "1331299367"
---
DHCP members support the DHCP option space by default. You can create additional option spaces to provide additional configuration or service information. Note that custom options defined in a user-defined option space are always encapsulated in option 43 in DHCP messages  
To add a custom option space:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Option** **Spaces** tab.
2. Click the Add icon -&gt; **IPv4** **Option** **Space**.
3. In the *Option* *Space* wizard, do the following:
   
   - **Name**: Enter the name of the option space.
   - **Comment**: Enter useful information about the option space.
   - **Options**: Click the Add icon to add options. For additional information, see the next section,* *[*Configuring Custom DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/About+IPv4+DHCP+Options#Configuring-Custom-DHCP-Options).
4. Save the configuration and click **Restart** if it appears at the top of the screen.

After you create an option space and add options to it, you can apply the options as described in* *[*Applying DHCP Options*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/about-ipv4-dhcp-options/About+IPv4+DHCP+Options#Applying-DHCP-Options)* *below.
