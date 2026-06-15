---
title: "Viewing Active Network Users"
source: "/space/nios90/1481015565"
pageId: "1481015565"
---
You can view all the users who are currently active on a network in the **Active** **Users** tab. Using the Action icon , you can do the following in the **Active** **Users** tab:

- **Go** **To** **IPAM** **IP** **Address** **Details**: Select this to open the IPAM Home page to view the network address of the device. This option is greyed out for devices that have an IP address and is not part of an IPAM network.
- **Go** **To** **DHCP** **Network** **Details**: Select this to open the **DHCP** &gt; **Networks** tab to view the network address of the device. This option is greyed out for devices that have an IP address and not managed by the Grid.
- **Go** **To** **IPAM** **Network** **Details**: Select this to open the IPAM Map for the selected user. The page shows network information in graphical format. This option is greyed out for devices that have an IP and not managed by the Grid.

To view active users:

1. From the **Data ** **Management** tab, select the **Network** ** Users** tab &gt; **Active** ** Users** tab.   
   or  
   You can use the Action icon
   
   in the following tabs to open the *Active* * Users* dialog box:  
   **IPAM** tab: From the **Data ** **Management** tab, select the **IPAM** tab, click the Action icon next to the respective network and select **Show** ** Active ** **Users**.  
   **DHCP** tab: From the **Data** ** Management** tab, select the **DHCP** tab &gt; **Networks** tab, click the Action icon
   
   next to the respective network and select **Show** ** Active** ** Users**.  
   **Cloud** tab:

- In the **Networks** tab, click the Action icon next to the respective network and select **Show** **Active** **Users**.
- In the **VMs** tab, click the Action icon
  
  and select **Show** ** Active ** **Users**.  
  **DNS** tab: From the **Data** **Management** tab, select the **DNS** tab &gt; **Zones** tab &gt; **Records** tab, click the Action icon and select **Show** **Active** **Users**.
  
  The **Active** **Users** tab or *Active* *Users* dialog box displays the following information:

- **User** **Name**: Displays the logon name of the user. When the same user logs in to the domain from multiple clients, entry for each IP address is displayed separately. If multiple users logs in to the same domain, entry for each user is listed separately.
- **Domain**: The name of the domain.
- **First** **Seen**: The timestamp when the user logged in to the network for the first time.
- **IP** **Address**: The IP address of the client.
- **Data** **Source**: The IP address of the Microsoft server or the API method.
- **Data** **Source** **IP** **Address**: Displays the source from which the data is collected. It can be Cisco ISE, Microsoft server or the API method.
- **Last** **Seen**: The timestamp when the user was last seen accessing the network.
- **Last** **updated**: Displays the timestamp when the user information was last updated.
