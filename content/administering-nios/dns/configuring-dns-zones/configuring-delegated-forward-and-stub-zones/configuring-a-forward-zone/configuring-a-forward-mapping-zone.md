---
title: "Configuring a Forward-Mapping Zone"
source: "/space/nios90/1432716320"
pageId: "1432716320"
---
To configure a forward-mapping zone:

1. From the **Data** ** Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add** **Forward** **Zone**.
2. In the *Add* * Forward* * Zone* wizard, click **Add** ** a ** **forward ** **forward-mapping** ** zone** and click **Next**.
3. Enter the following information, and then click **Next**:
   
   - **Name:** Enter the domain name of the zone for which you want the NIOS appliance to forward queries.
   - **DNS** ** View:** This field displays only when there is more than one DNS view in the current network view. Select the DNS view of the forward zone.
   - **Comment:** Enter a descriptive comment.
   - **Disable**: Click this checkbox to temporarily disable this zone. Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock**: Click this checkbox to lock the zone so that you can make changes to it and prevent others from making conflicting changes.
4. Click **Next** to assign a forward/stub server name server group or define the default zone forwarders to which the NIOS appliance forwards queries for the zone. Select one of the following:
   
   1. Select **Use ** **this** ** name** ** server ** **group** to assign a forward/stub server NS group for the zone. You can select the forward/stub server NS group from the drop-down list. For information about forward/stub server NS groups, see [*Using Forward/Stub Server Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   2. Select **Use** ** this ** **set ** **of ** **name ** **servers** to specify the default servers for the zone. Click the Add icon and specify the following:
      
      - **Name:** Enter a domain name of the server to which you want the NIOS appliance to forward queries.
      - **Address:** Enter the IP address of the server to which you want the NIOS appliance to forward queries.
   3. Select **Disable auto-generation of NS records in parent authoritative zone** to disable generation of name server records in a parent authoritative zone that has a subzone, which is conditionally forwarded. The NIOS appliance will not generate name server records and deletes the existing records from the parent authoritative zone when you select the checkbox. Note that the checkbox is clear, by default, which means that the NIOS appliance automatically generates name server records in a parent authoritative zone.
   4. Select **Use** ** Forwarders** ** Only** if you want the NIOS appliance to query forwarders only (not root servers) to resolve domain names in the zone.
5. Click **Next** to assign a forwarding member name server group or define Grid members to serve the forward-mapping zone. Select one of the following:
   
   Note that if you do not define any Grid members to serve the forward-mapping zone, then the named.conf file will not contain the configuration of the newly created forward zone. Hence, the Infoblox DNS server will not be authoritative to the forward zone and by default, the Infoblox DNS server will query the root servers to resolve queries for the forward zone.
   
   1. Select **Use** ** this ** **name** ** server ** **group** to assign a forwarding member NS group for the zone. You can select the forwarding member NS group from the drop-down list. For information about forwarding member NS groups, see [*Using Forwarding Member Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   2. Select **Use** ** this ** **set ** **of ** **name** ** servers** to define the Grid members and use the default forwarders or you can override default forwarders and configure custom forwarders. Click the Add icon to select the NIOS appliance on which the forward zone is configured. For an independent deployment, select the local appliance (it is the only choice). If there are multiple Grid members, the *Member* * Selector* dialog box is displayed. Select the required member by clicking the member name.  
      The following is displayed for each Grid member:
      
      - **Name**: Displays the name of the Grid member.
      - **IPv4** ** Address**: Displays the IPv4 address of the Grid member.
      - **IPv6** ** Address**: Displays the IPv6 address of the Grid member.
      - **Override** ** Default ** **Forwarders**: Displays **Yes** when you override default forwarders. Otherwise, this field displays **No**.
      - **Custom** ** Forwarders**: Displays the IP address of the custom forwarders. Otherwise, this field is blank.
        
        Note to skip the following two steps if you want to use the default forwarders.
6. Select a member and click the Edit icon.
7. In the *Edit* * Per-Member* * Forwarders* editor, select the **Override** ** Default** ** Forwarders** checkbox to override the default forwarders. The Default Zone Forwarders table becomes available only after you select the **Override** ** Default** ** Forwarders** checkbox. Click the Add icon to specify the servers to which the NIOS appliance forwards queries for the zone:
   
   - **Name:** Enter a domain name for the server to which you want the NIOS appliance to forward queries for the specified domain name.
   - **Address:** Enter the IP address of the server to which you want the NIOS appliance to forward queries.
   - Select **Use** ** Forwarders** ** Only** if you want the NIOS appliance to query forwarders only (not root servers) to resolve domain names in the zone.
   - Save the configuration. After successfully saving the configuration, the **Override** ** Default** ** Forwarders** column displays **Yes** and the **Custom ** **Forwarders** column displays the IP address of the forwarders.  
     To configure forwarders for multiple members, repeat the steps for each Grid member.
8. Save the configuration, or click **Next** to continue to the next step where you define extensible attributes as described in [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215)[,](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215/Managing+Extensible+Attributes#bookmark868) and then optionally proceed to the next step where you define admin permissions as defined in [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).  
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
9. Click **Restart** if it appears at the top of the screen.
