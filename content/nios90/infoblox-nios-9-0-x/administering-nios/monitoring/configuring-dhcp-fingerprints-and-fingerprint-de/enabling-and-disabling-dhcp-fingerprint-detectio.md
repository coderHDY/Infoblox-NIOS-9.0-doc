---
title: "Enabling and Disabling DHCP Fingerprint Detection"
source: "/space/nios90/280270341"
pageId: "280270341"
---
Grid DHCP fingerprint detection is enabled by default for new installations, and no special licenses are required. You can disable this or override the Grid setting at a member level. Note that when you enable DHCP fingerprint detection, there will be a slight impact on DHCP performance.  
When you enable DHCP fingerprint on an HA pair, both peers in a failover association maintain the same DHCP fingerprinting state (enabled or disabled) even when one of the peers fails or becomes operational again. Note that both peers must be in the same Grid for the fingerprinting state to stay the same. For information about DHCP failover, see *[DHCP Failover](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-failover/dhcp-failover)*.  
To enable and disable Grid DHCP fingerprinting:

1. **Grid**: From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.** **  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Members** tab -&gt; **Members** -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Grid* *DHCP* *Properties* or *Member* *DHCP* *Properties* editor, select the **Fingerprinting** tab.
3. Complete the following
   
   - **Enable** **Fingerprint** **Detection:** Deselect this checkbox to disable the feature. You can enable DHCP fingerprint detection again by selecting the checkbox. Click **Override** to change the configuration for a member, or click **Inherit** to inherit the Grid setting.
4. Save the configuration and click **Restart** at the top of the screen.
