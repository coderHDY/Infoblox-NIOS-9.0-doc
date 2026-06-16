---
title: "Microsoft Servers Status Widget"
source: "/space/nios90/1457652618"
pageId: "1457652618"
---
The *Microsoft* *Servers* *Status* widget displays the operational status of each Microsoft server managed by the Grid. Grid Manager displays this widget only when at least one member in the Grid has a Microsoft management license. You can configure this widget to display the status of all Microsoft servers or only those with warnings and errors. You can also view the monitor and control status for the DNS and DHCP service on the Microsoft server. To modify the *Microsoft* *Servers* *Status* widget, click the Configure icon and select one of the following:

- **Show** **all** **Microsoft** **servers**
- **Only** **show** **servers** **with** **service** **warnings** **or** **errors**

The *Microsoft* *Servers* *Status* widget displays the following information about each Microsoft server:

- **Server** **Name**: The hostname of the Microsoft server.
- **IP Address**: The IP address of the Microsoft server.
- **Status**: The connection status of the Microsoft server.
  
  - **OK:** The Grid member is connected to the Microsoft server.
  - **Connecting:** The Grid member is connecting to the Microsoft server.
  - **Error:** The Grid member tried to connect to the Microsoft server, but failed. You can check the syslog for any messages.
  - **Not Available:** The Microsoft server is disabled. The Grid member does not try to connect to disabled servers.
- **DNS**: The status of the DNS service on the Microsoft server. The DNS service status can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|   ![Status Dashboard_green_color_icon.png](/assets/1457652618/e12ddaa1-caed-44bd-bfcb-6532b8930af1.png)   | Green | The DNS service is functioning properly. |
|   *[image: Status Dashboard_red_color_icon.png]*   | Red | The Microsoft server is unavailable. |
|   ![Status Dashboard_yellow_color_icon.png](/assets/1457652618/d2d76c95-1e74-4d3d-93bd-bcc92cad517f.png)   | Yellow | The DNS service is starting or stopping. |
|   ![Status Dashboard_gray_color_icon.png](/assets/1457652618/a34e8a1f-1d44-4392-9b1f-c4b3dd67e2ee.png)   | Gray | The DNS service is stopped or management of the Microsoft DNS server is disabled. |



- **DHCP**: The status of the DHCP service on the Microsoft server. The DHCP service status can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|   ![Status Dashboard_green_color_icon.png](/assets/1457652618/e12ddaa1-caed-44bd-bfcb-6532b8930af1.png)   | Green | The DHCP service is functioning properly. |
|   ![Status Dashboard_red_color_icon.png](/assets/1457652618/a6deeb59-d688-437c-adbc-f11d1a4a9c6c.png)   | Red | The Microsoft server is unavailable. |
|   ![Status Dashboard_yellow_color_icon.png](/assets/1457652618/d2d76c95-1e74-4d3d-93bd-bcc92cad517f.png)   | Yellow | The DHCP service is starting or stopping. |
|   ![Status Dashboard_gray_color_icon.png](/assets/1457652618/a34e8a1f-1d44-4392-9b1f-c4b3dd67e2ee.png)   | Gray | The DHCP service is stopped or management of the Microsoft DHCP server is disabled. |



- **Active** **Directory** **Sites**: The status icon in green indicates the synchronization status of Active Directory Sites on the Microsoft server.
- **Enable DNS Monitor & Control**: Displays **Yes** if the monitor and control status is enabled for the DNS service on the Microsoft server and displays **No** if it is disabled.
- **Enable DHCP Monitor & Control**: Displays **Yes** if the monitor and control status is enabled for the DHCP service on the Microsoft server and displays **No** if it is disabled.
