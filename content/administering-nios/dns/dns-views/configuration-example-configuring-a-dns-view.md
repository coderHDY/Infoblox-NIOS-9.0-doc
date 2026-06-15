---
title: "Configuration Example: Configuring a DNS View"
source: "/space/nios90/280272744"
pageId: "280272744"
---
In the figure[ ](#)*C*onfiguring a DNS View below, Member-A is a member of a Grid. It is the primary name server for the example.com zone in the internal DNS view. It allows the IP address 192.168.10.1 and the 10.2.2.0/24 subnet access to DNS zone data in the internal DNS view. At the zone level, it allows transfers to an external secondary server, Infoblox-B, with an IP address of 192.168.10.1. Infoblox-B is a secondary server for the example.com zone. The process follows these steps:

1. Adding an Internal DNS View on Member-A
2. Adding a Zone to a DNS View
3. Copying Records Between DNS Zones from the example.com zone in the default DNS view to the example.com zone in the internal DNS view
4. Verifying the Configuration

*Configuring* *a* *DNS* *View*

*[drawio]*

**Adding** **an** **Internal** **DNS** **View**

1. Expand the Toolbar and click **Add** -> **Add** **DNS** **View**.
2. In the *Add* *DNS* *View* wizard, specify the following, and then click **Next**:
   
   - **Name:** internal
   - **Comment:** internal DNS view
3. In the *Match* *Clients* panel, click **Add** and select **IPv4** **Network** from the drop-down list.
4. Do the following for IP addresses in the network 10.2.2.0/24:
   
   - Enter **10.2.2.0/24** in the in the **Address** field.
   - The **Permission** field displays **Allow** by default. Leave it as is.
   - Click **Add**.
   
   You will have 255 allowed client addresses in the Match Clients list when you are done.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

**Adding** ** a ** **Zone ** **to ** **a** ** DNS** ** View**

1. Expand the Toolbar and click **Add** -> **Zone** -> **Add** **Auth** **Zone**.
2. In the *Add* *Auth* *Zone* wizard, click **Add** **an** **authoritative** **forward-mapping** **zone** and click **Next**.
3. Specify the following, and then click **Next**:
   
   - **Name:** Enter **example.com**.
   - **DNS** ** View:** Select **Internal** from the drop-down list.
4. In step 3 of the wizard, do the following:
   
   1. Select **Use ** **this ** **set** ** of ** **name** ** servers.**
   2. Click the Add icon and select **Grid** ** Primary**.
   3. Click **Select ** **Member** and select **Member** ** A** from the *Select* * Grid * *Member* dialog box.
   4. Click **Add** to add the Grid member to the list of name servers.
   5. Click the Add icon again and select **External ** **Secondary**.
   6. Enter the following information, and then click **Add:**
      
      - **Name:** Infoblox
      - **IP Address:** 192.168.10.1
5. Click1 **Save** **&** **Edit** to display the *Authoritative* *Zone* editor and continue with the zone configuration.
6. Click **Queries**.
7. Click **Override**, and then click the Add icon and select **IPv4** **Network**.
   
   - Enter **10.2.2.0/8** in the in the **Address** field.
   - The **Permission** field displays **Allow** by default. Leave it as is.
   - Click **Add**.
8. This allows queries that the appliance answers from its internal DNS view.
9. Save the configuration and click **Restart** if it appears at the top of the screen.

**Copying** **Records** **Between** **DNS** **Zones**

1. Navigate to the default DNS view and select the example.com zone.
2. Expand the Toolbar and click **Copy** **Records**.
3. In the **Destination** field, click **Select** **Zone**, and then select the **example.com** zone in the Internal DNS view.
4. Select **Copy** **all** **records**, and then click **OK**.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

The records from example.com in the default DNS view are copied to example.com in the internal DNS view.

> **warning**
>
> ### Note
> 
> Only superusers can copy A, AAAA, shared A, and shared AAAA records with a blank name. Limited-access users must have read/write permission to **Adding** **a** **blank** **A/AAAA** **record** in order to copy A, AAAA, shared A, and shared AAAA records with a blank name, otherwise the copying records operation might fail. You can assign global permission for specific admin groups and roles to allow to copy A, AAAA, shared A, and shared AAAA records with a blank name. For more information, see [*Administrative Permissions for Adding Blank A or AAAA Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861).

**Verifying** **the** **Configuration**

1. In the **DNS** tab, click **Members** and select the **Member-A** checkbox .
2. Expand the Toolbar and click **View** -> **View** **DNS** **Configuration**.
3. In the *DNS* *Configuration* *File* viewer, scroll through the contents of the file.

Verify that the internal DNS view section is similar to the configuration file shown.
