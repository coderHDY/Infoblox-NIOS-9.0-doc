---
title: "Configuring the TFTP Service"
source: "/space/nios90/1395622093"
pageId: "1395622093"
---
The TFTP file distribution service is disabled on the appliance by default. To allow file distribution access using TFTP, you must specify the clients that are allowed to use the service and then enable the service on the appliance. If you do not specify this information or enable the service, the appliance denies access to all clients. The appliance provides read-only access to the files.

The TFTP service is supported only on LAN1 and MGMT interfaces. For more information, see [*Configuring Ethernet Ports*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274166).

To configure the TFTP file distribution service on a member:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Member* *File* *Distribution* *Properties* editor, select the **TFTP** tab, and then complete the following:
   
   - **Listen** **on** **Port**: Enter the number of the port on which the appliance receives TFTP file distribution requests.  
     The default is port 69.
   - **Allow these clients perform file transfers**: Configure the appliance to grant or deny permissions to TFTP file distribution requests from clients, as described in Configuring Access Control for File Distribution below.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

After you configure the TFTP service, you must enable the service to allow file distribution access. For information, see  Starting and Stopping File Distribution Services below.
