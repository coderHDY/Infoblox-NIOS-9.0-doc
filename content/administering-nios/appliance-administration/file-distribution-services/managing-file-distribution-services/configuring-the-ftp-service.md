---
title: "Configuring the FTP Service"
source: "/space/nios90/1395851360"
pageId: "1395851360"
---
The FTP file distribution service is disabled on the appliance by default. To allow file distribution access using FTP, you must create at least one user (see [*Managing Users*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764743)), specify the clients that are allowed to use the service, and then enable the FTP service on the appliance. If you do not specify this information or enable the service, the appliance denies access to all clients. User creation is not necessary to access the FTP service if anonymous is enabled at Grid level.The appliance provides read-only access to the files.  
To configure the FTP file distribution service on a member:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Member* *File* *Distribution* *Properties* editor, select the **FTP** tab, and then complete the following:
   
   - **Listen** **on** **Port:** Enter the number of the port on which the appliance receives FTP file distribution requests. The default is port 21.
   - **Login** **Banner**: Enter your own login banner text that appears after you establish an FTP connection or use the default (**Restricted** **Access** **Only**).
   - **FTP** **Passive** **Mode**: By default, this is selected to enable FTP in passive mode; otherwise, it is in active mode. An FTP connection between a client and server can be in active or passive mode. In active mode, the server initiates the data connection. In passive mode, the client initiates the data connection. Depending on your firewall policy, firewalls can block active mode connections. There is no firewall filtering in passive mode.
   - **FTP** **File** **Listing**: Select this to allow users to list files and subdirectories on the appliance.
   - **Allow these clients perform file transfers**: Configure the appliance to grant or deny permissions to FTP file distribution requests from clients, as described in  Configuring Access Control for File Distribution below.
3. Save the configuration and click **Restart** if it appears at the top of the screen.



**Enabling** **FTP** **Anonymous** **User**   
The 'anonymous' FTP login is disabled by default, except when upgrading an earlier version in which case anonymous FTP is automatically enabled.  
When you enable anonymous FTP at Grid level, you enable anonymous FTP on all Grid members running the FTP service. Anonymous user is only allowed to download files, even if the member is enabled to allow uploads.

1. From the **Data** **Management** tab, select Grid **File** **Distribution** Properties on the toolbar.
2. In the *Grid* *File* *Distribution* *Properties* dialog box, select the **Enable** **Anonymous** **FTP** checkbox.
3. Click **Save** **&** **Close**.
