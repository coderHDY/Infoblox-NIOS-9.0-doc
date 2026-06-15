---
title: "Configuring a Forward IPv6 Reverse-Mapping Zone"
source: "/space/nios90/1432814274"
pageId: "1432814274"
---
To configure a forward IPv6 reverse-mapping zone:

1. From the **Data** ** Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add ** **Forward** ** Zone**.
2. In the *Add * *Forward* * Zone* wizard, click **Add** ** a** ** forward ** **IPv6 ** **reverse-mapping ** **zone** and click **Next**.
3. Enter the following zone information:
   
   - **IPv6 ** **Network** ** Address:** Enter the 128-bit IPv6 address for the address space for which you want to define the reverse-mapping zone. When you enter an IPv6 address, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a four-hexadecimal group. For example, the complete IPv6 address 2006:0000:0000:0123:4567:89ab:0000:cdef can be shortened to 2006::123:4567:89ab:0:cdef. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The NIOS appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered. Choose the network prefix that defines the IPv6 network address space.  
     or  
     **Name:** Enter the domain name of the reverse-mapping zone.
   - **DNS ** **View:** This field displays only when there is more than one DNS view in the network view. Select a DNS view from the drop-down list.
   - **Comment:** Enter a descriptive comment about the zone.
   - **Disable:** Click this checkbox to temporarily disable this zone. Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock**: Click this checkbox to lock the zone so that you can make changes to it, and also prevent others making conflicting changes.
   - The **Sync to MGM** is used for synchronizing the selected zone from the managed Grid to the Multi-Grid Master and is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this to inherit synchronization settings from the parent level, i.e. the DNS view.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
4. Click **Next** to assign a forward/stub server name server group or define the default zone forwarders to which the NIOS appliance forwards queries for the zone. Select one of the following:
   
   - Select **Use** ** this ** **name** ** server ** **group** to assign a forward/stub server NS group for the zone. You can select the forward/stub server NS group from the drop-down list. For information about forward/stub NS groups, see [*Using Forward/Stub Server Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489)*.*
   - Select **Use** ** this ** **set ** **of ** **name ** **servers** to specify the default servers for the zone. Click the Add icon and specify the following:
     
     - **Name:** Enter a domain name for the server to which you want the NIOS appliance to forward queries.
     - **Address:** Enter the IP address of the server to which you want the NIOS appliance to forward queries.
     - Select **Use** ** Forwarders** ** Only** if you want the NIOS appliance to query forwarders only (not root servers) to resolve domain names in the zone.
5. Click **Next** to assign a forwarding member name server group or define Grid members to serve the forward-mapping zone. Select one of the following:
   
   - Select **Use** ** this ** **name ** **server** ** group** to assign a forwarding member NS group for the zone. You can select the forwarding member NS group from the drop-down list. For information about forwarding member NS groups, see [*Using Forwarding Member Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   - Select **Use** ** this** ** set** ** of** ** name** ** servers** to define the Grid members and use the default forwarders or you can override default forwarders and configure custom forwarders. Click the Add icon to select the NIOS appliance on which the forward zone is configured. For an independent deployment, select the local appliance (it is the only choice). If there are multiple Grid members, the *Member* *Selector* dialog box is displayed. Select the required member by clicking the member name.  
     The following is displayed for each Grid member:
     
     - **Name**: Displays the name of the Grid member.
     - **IPv4** **Address**: Displays the IPv4 address of the Grid member.
     - **IPv6** **Address**: Displays the IPv6 address of the Grid member.
     - **Override** ** Default ** **Forwarders**: Displays **Yes** when you override default forwarders. Otherwise, this field displays **No**.
     - **Custom** ** Forwarders**: Displays the IP address of the custom forwarders. Otherwise, this field is blank.
