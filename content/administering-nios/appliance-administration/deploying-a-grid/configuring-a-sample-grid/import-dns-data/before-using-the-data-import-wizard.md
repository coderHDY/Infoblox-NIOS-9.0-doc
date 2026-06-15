---
title: "Before Using the Data Import Wizard"
source: "/space/nios90/1341292626"
pageId: "1341292626"
---
You must set up the legacy server and Grid Master before using the Data Import Wizard.

Before Using the Data Import Wizard:

1. Log in to the legacy name server at 10.0.1.5 and save the named.conf file, which contains all the DNS settings that you want to import into the Infoblox name server, to a local directory on your management system.
2. Enable the legacy server to perform zone transfers to the NIOS appliance. For more information, see [*Infoblox Grid Master - Enabling DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1341292626/Before+Using+the+Data+Import+Wizard#Infoblox-Grid-Master---Enabling-DDNS-Updates).
3. Configure three name server groups for the Grid and allow the Grid Master/hidden primary DNS server at 10.0.1.10 to receive DDNS updates from the Grid members at 10.0.2.10, 10.1.1.10, and 10.3.1.10. These members act as secondary DNS servers and DHCP servers. For more information, see [*Infoblox Grid Master - Enabling Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1341292626/Before+Using+the+Data+Import+Wizard#Infoblox-Grid-Master-%E2%80%93-Enabling-Name-Server-Groups).

## Infoblox Grid Master - Enabling DDNS Updates

1. Log in to the Grid Master at 10.0.1.10, and from the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> **10.0.1.10** checkbox and select the Edit icon.
2. In the *Member* *DNS* *Configuration* editor, select the **Updates** tab -> **Basic** tab and enter the following:
   
   - Select **Override**.
   - Allow updates from: Click the Add icon and select **IPv4 Address**. Enter **10.0.2.10** in the **Name** field of the new row.
3. Click the Add icon again and add **10.1.1.10** and **10.2.1.10** as IP addresses from which you allow DDNS updates.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
   
   Note when all DNS servers are members in the same Grid, the members use database replication to synchronize all their data—including DNS zone data. You can change the default behavior so that Grid members use zone transfers instead. In this example, Grid members use database replication.

## Infoblox Grid Master – Enabling Name Server Groups

1. From the **Data** **Management** tab, select the **DNS** tab -> **Name** **Server** **Groups** tab.
2. Click the Add icon to open the *Add Name Server Group* wizard.
3. Enter the following:
   
   - **Name** **Server** **Group** **Name:** HQ-Group
4. Click the Add icon and add the following:
   
   - **Grid** **Primary**: **ns1.corpxyz.com**; **Stealth**: Select this checkbox.
   - **Grid** **Secondary**: **ns2.corpxyz.com**; **Grid replication (recommended)**: Select this checkbox.
5. Click **Save** **&** **New**.
6. Repeat steps 2 to 4 to create another group. Name it **Site1-Group**, and use **ns1.corpxyz.com** as the hidden primary server, **ns3.site1.corpxyz.com** as a secondary server, and Grid replication for zone updates.
7. Repeat steps 2 to 4 to create another group. Name it **Site2-Group**, and use **ns1.corpxyz.com** as the hidden primary server, **ns4.site2.corpxyz.com** as a secondary server, and Grid replication for zone updates.
