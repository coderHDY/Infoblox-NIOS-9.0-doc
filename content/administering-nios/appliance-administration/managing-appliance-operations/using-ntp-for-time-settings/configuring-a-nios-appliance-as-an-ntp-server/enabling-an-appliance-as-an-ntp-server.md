---
title: "Enabling an Appliance as an NTP Server"
source: "/space/nios90/1449623594"
pageId: "1449623594"
---
To enable an appliance as an NTP server and add authentication keys:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **NTP** -> **NTP** **Member** **Config**.
3. In the **General** tab of the *Member* *NTP* *Properties* editor, do the following:
   
   - **Enable** **the** **NTP** **Server** **on** **this** **Member**: Select this option to configure a Grid Master or a Grid member as an NTP server. If you have configured DNS anycast on the appliance, it can answer NTP requests through the anycast IP address.
   - Click **Override** in the NTP Keys section to enter NTP authentication keys at the member level. The member uses these keys when acting as an NTP server and authenticates requests from NTP clients. Clear the checkbox to use the Grid-level authentication keys.
4. Click **Add** in the NTP Keys section. For information, see Adding NTP Authentication Keys above.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

After you enter the authentication keys, you can download the key file (usually called ntp.keys) and distribute it to NTP clients as follows:

1. **Grid:** From the** Infoblox Grid** tab, select the **Grid** **Manager** tab.  
   **Member:** From the **Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox.
2. Expand the Toolbar and click **NTP** -> **Download** **NTP** **Keys**.
3. In the *Opening* *ntp.keys* dialog box, save the file, and then click **OK**.
4. Distribute this to the NTP clients using a secure transport.
