---
title: "Configuration Example: Defining a Custom Option"
source: "/space/nios90/1331822628"
pageId: "1331822628"
---
In this example, you configure two custom options in the DHCP option space, and apply them to a DHCP range in the network 192.168.2.0/24.  
Add the custom options to the DHCP options space:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Option** **Spaces** tab.
2. Select the **DHCP** check box, and click the Edit icon.
3. In the *DHCP* *(Option* *Space)* editor, click the Add icon. In the new row, complete the following:
   
   - **Name**: Enter **tftp-server**.
   - **Code**: Enter **150**.
   - **Type**: Select **array** **of** **ip-address**.
4. Click the Add icon to add another [option.In](http://option.In) the new row, complete the following:
   
   - **Name**: Enter **pxe-configfile**.
   - **Code**: Enter **209**.
   - **Type**: Select **text**.
5. Click **Save** **&** **Close.**

Enter values for the newly defined custom options and apply them to a DHCP range:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** subtab, and click the 192.168.2.0/24 network.
2. Click the 192.168.2.10 - 100 check box, and then click the Edit icon.
3. In the *DHCP* *Properties* editor, select the **DHCP** tab and complete the following in the **Custom** **DHCP** **Options** section:
   
   - From the drop-down list of options, select **tftp-server** **(150)** **array** **of** **address**. In the second field, enter **192.168.1.2**.  
     Click **+** to add another option.
   - From the drop-down list of options, select **pxe-configfile** **(209)** **text**. In the second field, enter **pxe.config**, which is the file name of the boot image.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

The member then includes options 150 and 209 in its DHCP messages to clients that are allocated IP addresses from the DHCP range 192.168.2.10 - 100.
