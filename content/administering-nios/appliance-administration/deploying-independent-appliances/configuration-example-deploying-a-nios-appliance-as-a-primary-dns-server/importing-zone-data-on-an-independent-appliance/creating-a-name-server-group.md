---
title: "Creating a Name Server Group"
source: "/space/nios90/1432819121"
pageId: "1432819121"
---
1. Open an Internet browser window, enter [*https://10.1.5.2*](https://10.1.5.2), and then log in to Grid Manager using the username **admin** and password **SnD34n534**.
2. From the **Data** **Management** tab, select the **DNS** tab -> **Name** **Server** **Groups** tab, and then click the Add icon -> **Name** **Server** **Group**.
3. In the *Name* *Server* *Group* wizard, complete the following:
   
   - **Name**: Enter **corpxyz** as the group name.
   - **Name** **Servers**: Click the Add icon -> **Primary**.
   - In the *Add* *Primary* section, Grid Manager displays the host name of the independent appliance. Click Add.  
     Grid Manager adds the independent system as the primary server.
   - Click the Add icon -> **External** **Secondary**.
   - In the *Add* *External* *Secondary* section*,* complete the following:
     
     - **Name:** Enter [**ns2.corpxyz.com**](http://ns2.corpxyz.com).
     - **Address:** Enter **2.2.2.2**.
     - **Stealth:** Clear this checkbox.
     - Click **Add**. Grid Manager adds the external secondary to the name server group.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
