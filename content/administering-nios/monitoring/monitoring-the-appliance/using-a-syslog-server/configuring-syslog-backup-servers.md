---
title: "Configuring Syslog Backup Servers"
source: "/space/nios90/1381138978"
pageId: "1381138978"
---
You can configure external syslog backup servers to forward rotated syslog files. You can configure up to 10 external syslog backup servers.

To configure external backup servers, complete the following:

1. **Grid**: From the **Infoblox Grid** tab -> **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -> **Edit**.** **  
   **Member**: From the **Infoblox** **Grid** tab -> **Grid** **Manager** tab, click the **Members** tab, select the *member* checkbox, and click the **Edit** icon.
2. **Grid**: In the *Grid* *Properties* editor, select the **Syslog** **Backup** tab.  
   **Member**: In the *Grid* *Member* *Properties* editor, select the **Syslog** **Backup** tab and then click **Override** to override the Grid-level settings.  
   To modify backup server settings, complete the following:
   
   - **Address/FQDN**: Enter the IP address or the FQDN of the external backup server. You are not allowed to configure more than one server using the same IP address or the FQDN at the same level (Grid or member). However, you can use the same server IP address or the FQDN at different levels (Grid or member). Note that you cannot modify the IP address for the overridden server.
   - **Protocol**: Select **SCP** or **FTP** from the drop-down list.
   - **Port**: Enter the destination port number. The default port is 20 for FTP and 22 for SCP.
   - **Path**: Enter the directory path for the syslog file.
   - **Username**: Enter the username of your FTP or SCP account.
   - **Password**: Enter the password of your FTP or SCP account. If you do not change the password of the overridden server, then make sure that you use the same password specified at the Grid level.
   - **Enabled**: Select this checkbox to enable the FTP or SCP server. The appliance forwards the rotated syslog files to the external servers that you configure only after you select this checkbox. Clear the checkbox to disable the server.
3. Click **Save** **and** **Close**.
