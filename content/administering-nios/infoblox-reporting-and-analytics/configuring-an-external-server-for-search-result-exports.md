---
title: "Configuring an External Server for Search Result Exports"
source: "/space/nios90/413335645"
pageId: "413335645"
---
You can configure an FTP, SCP, or TFTP server to which you plan to schedule the export of search results. Only superusers can configure the remote server and limited-access users cannot do so.   
The **Set** **up** page to configure an FTP, SCP, or TFTP server is displayed for all new installations and upgrades if you have not previously scheduled the export of search results. If you have configured any scheduled export of search results in a previous NIOS release, NIOS migrates one of the server settings to the Reporting and Analytics App. In this case, the **Set** **up** page is not displayed. However, you can still access the **Set** **up** page from the **Reporting** tab > **Administration** tab, as illustrated in Setup Page to specify Server for Exporting Search Results figure below.  
To configure an FTP, SCP, or TFTP server:

1. From the **Reporting** tab -> select the **Administration** tab -> click **Set** **up**.
2. To configure a remote server, complete the following:
   
   - **Username**: Enter the username of your server account.
   - **Password**: Enter the password of your server account.
   - **Confirm** **Password**: Enter the same password.
   - **Protocol**: Select **FTP** or **SCP** or **TFTP** from the drop-down list.
   - **Host/IP** **Address**: Enter the host IP address.
   - **Host** **Port**: Enter the port number on the selected server.
   - **Destination** **Path**: Enter the path and the file name of the export file. For example, you can enter  
     /export/Infoblox_2009_10_20_15_30 on a Linux server, or c:\export\Infoblox_2009_10_20_15_30 on a Microsoft Windows server.
3. Click **Save**.

*Setup* *Page* *to* *specify* *Server* *for* *Exporting* *Search* *Results*

*[drawio]*
