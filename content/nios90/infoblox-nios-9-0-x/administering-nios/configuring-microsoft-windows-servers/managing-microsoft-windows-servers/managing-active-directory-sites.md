---
title: "Managing Active Directory Sites"
source: "/space/nios90/280403295"
pageId: "280403295"
---
You can manage Active Directory Sites and networks that you defined earlier and modify their information. You can do the following:

- View Active Directory Domains and sites, as described in Viewing Active Directory Domains and Sites.
- Modify Active Directory Sites and networks, as described in [*Monitoring Managed Microsoft Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/monitoring-managed-microsoft-servers).
- Delete Active Directory Sites. For more information, see Associating Active Directory Sites with Networks below.
- Move networks that are associated with an Active Directory Site to another. For more information, see Moving Networks Between Active Directory Sites below.

# Viewing Active Directory Domains and Sites

You can view Active Directory Domains that are associated with the Microsoft server. You can also view Active Directory Sites and networks that are associated with the Active Directory Domains.  
To view Active Directory Domains and sites:

1. From the **Infoblox** **Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Active** **Directory** **Domains** tab.
2. Grid Manager displays the following information:
   
   - **Name**: The name of the Active Directory Domain. You can click the name to view the Active Directory Sites below it.
   - **NetBIOS** **Name**: The name returned in the NetBIOS format.
   - **MS** **Sync** **Server**: The Microsoft synchronization server that is associated with the Active Directory Domain.
   - **Network** **View**: The network view that is associated with the Active Directory Domain.   
     You can do the following in the **Active** **Directory** **Domains** tab:
     
     - Sort the Active Directory Domains in ascending or descending order by column.
     - Use filters and the search function to look for specific values.
     - Export and print the information in the table.
3. To view Active Directory Sites associated with an Active Directory Domain, click the domain name that is displayed as a hyperlink. The appliance displays the list of Active Directory Sites that are associated with the respective Active Directory Domain in the **Active** **Directory** **Domains** **Home** table.

You can do the following in the **Active** **Directory** **Domains** **Home** table:

- 
  
  - Sort the Active Directory Sites in ascending or descending order by column.
  - Use filters and the search function to look for specific values.
  - Export and print the information in the table.

# Modifying Active Directory Sites and Networks

You can edit the name of an Active Directory Site and associate networks with the respective site. You can also add additional networks or remove associated networks from the Active Directory Site.  
To edit an Active Directory Site:

1. From the **Infoblox Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Active** **Directory** **Domains** tab and click respective Active Directory Domain name.
2. In the **Active** **Directory** **Domains** **Home** table, select an Active Directory Site name and click the Edit icon, or click the Action icon
   
   ![image](/assets/280403295/558d2c36-f0f0-497d-922b-489719dd6859.png)
   
   next to the respective Active Directory Site name and select **Edit** from the menu.
3. In the *Active* *Directory* *Site* *Properties* editor, you can do the following:
   
   - **Name**: The name of the Active Directory Site. You can edit the name.
   - **Networks**: The networks that are associated with the Active Directory Site. You can click the Add icon to associate new networks with the Active Directory Site.  
     To delete an associated network, select the checkbox adjacent to the network address, and click the Delete icon.
4. You can either click **Save** **and** **Close** or **Save** to save your settings. Click **Cancel** to close the editor without saving your settings.

# Deleting Active Directory Sites

You can delete Active Directory Sites that are associated with an Active Directory Domain. You cannot delete an Active Directory Site from the Active Directory Domain if the respective Active Directory Site has networks associated with it. You must first delete the associated networks to delete an Active Directory Site.   
To delete Active Directory Sites:

1. From the **Infoblox** **Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Active** **Directory** **Domains** tab and click the respective Active Directory Domain name.
2. In the **Active** **Directory** **Domains** **Home** table, select an Active Directory Site and click the Delete icon, or click the Action icon next to the respective Active Directory Site name and select **Delete** from the menu.
3. The appliance displays a confirmation message. Click **Yes** to delete the sites or click **No** to cancel the operation.

# Moving Networks Between Active Directory Sites

You can move networks from an Active Directory Site to another using either the **Microsoft** **Servers** or the **IPAM** **tab**. You can use the **Microsoft** **Servers** tab to move networks only when you select an Active Directory Site.  
You can add multiple networks from various Active Directory Sites and move them simultaneously to an Active Directory Site. When the Active Directory Site synchronizes, it always maps to a certain network view. You can only select networks from a network view to which the Active Directory Domain belongs.  
To move networks within Active Directory Sites, complete the following:

1. **Microsoft** **Servers** **tab**: From the **Infoblox** **Grid** tab, select the **Microsoft** **Servers** tab -&gt; **Active** **Directory** **Domains** tab and click respective Active Directory Domain name. In the **Active** **Directory** **Domains** **Home** table, click the Action icon next to the respective Active Directory Site name and select **Move** **Networks** from the menu.  
   OR  
   **IPAM** **tab**: From the **Data** **Management** tab, select the **IPAM** tab, select networks that you want to move and click **Move** **Networks** from the Toolbar.
2. In the *Move* *Networks* wizard, complete the following:
   
   - **Destination** **Active** **Directory** **Site**: Click **Select** **Site** to select the destination Active Directory Site. The appliance displays the *Microsoft* *Sites* *Selector* dialog box listing all the Active Directory sites in the Grid. It also displays the smart folders, if any. You can use the filter and **Go** **to** functions to find a specific Active Directory site. To select an Active Directory site, click the site name.
   - **Networks**: You can select networks that you want to move to another Active Directory Site.
     
     - **Go** **to**: Specify an IP address of the network that you want to move to another destination and click **Go**.
     - Click the Add icon to add networks. To delete a network from the list, select the checkbox next to the network and click the Delete icon.
3. Click **Move** to move networks or click **Close** to exit.

## Moving Multiple Networks to an Active Directory Site

You can move multiple networks to a given Active Directory Site in a single operation. The following rules are applicable:

- Only a super-user can move multiple networks to an Active Directory Site.
- The destination site must belong to an Active Directory Domain that is synchronized in Read/Write mode.
- The appliance assigns the destination Active Directory Site to a network in either of the following cases:
  
  - If the network is currently assigned to another Active Directory Site within the same Active Directory Domain.
  - If the network is currently not assigned to any Active Directory Site within the Active Directory Domain.
  - The Active Directory Sites associated with an Active Directory Domain is different from the destination Active Directory Site.

# Associating Active Directory Sites with Networks

You can associate an Active Directory Site with an IPv4 or IPv6 network or an IPv4 and IPv6 network template. The appliance does not check the synchronization mode of the associated Active Directory Domain when you create or modify a template, but it verifies only when you use the template to create a network.  
To assign Active Directory Sites to networks, complete the following:

1. From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab.
2. In the **Networks** section, select either **IPv4** **Network** or **IPv6** **Network** from the **Add** drop-down menu and complete the details as mentioned in [*Adding IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks) and [*Adding IPv6 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv6-dhcp-data/managing-ipv6-networks-319292098)*  *respectively, and complete the following to assign Active Directory Sites to networks:
   
   - **No** **Active** **Directory** **Site**: Select this if you do not want to associate an Active Directory Site with the network.
   - **Assign these Active Directory Domains/sites**: Select this to assign multiple Active Directory Sites to a network, but note that each Active Directory Site must be associated with a different domain. You cannot add an Active Directory Site, if you have already assigned a domain from the same Active Directory Site. When you select this option, the appliance enables the following:
     
     - **Active Directory Domain**: The Active Directory Domains that are synchronized from the Microsoft server. Click an Active Directory Domain that you want to associate.  
       To search for a particular Active Directory Domain, specify the respective name and click **Go**.
     - **Active Directory Sites**: The Active Directory Sites that are associated with the selected Active Directory Domain. Click an Active Directory Site that you want to associate.  
       To search for a particular Active Directory Site, specify the respective name and click **Go**.
     - **Add &gt;**: Click this to add the selected Active Directory Sites to the network.
     - **&lt;Remove**: Click this to remove an Active Directory Site, which you have already added, from the network.
     - **&lt;&lt;Remove all**: Click this to remove Active Directory Sites, which you have already added, from the list.
   - **Assign** **the** **same** **domains/sites** **as** **the** **selected** **network**: Click **Select** **Network** to assign Active Directory Sites, which are associated with the selected network, to the new network that you are configuring. Select a network from the *Network* *Selector* dialog box. The appliance displays the Active Directory Domains and Sites that are associated with the selected network, but you cannot make any changes and the fields are greyed out. Click **Clear** to clear the entry.
3. You can either click **Save** **and** **Close** to save the settings and close the wizard or click **Save** **and** **New** to save your settings and open a new wizard or click **Cancel** to close the wizard without saving your settings.

## Managing Extensible Attributes and Associated Networks

The appliance creates an extensible attribute for each Active Directory Domain that is synchronized with the Grid. Note the following about extensible attributes:

- The appliance generates a name for the extensible attribute. The appliance displays an error message if you have already created an extensible attribute with the same name.
- Extensible attributes are Read-only and does not support inheritance.
- You can define a single value only and there are no default values.
- The appliance restricts an extensible attribute to IPv4 network and IPv6 network objects.
- You can specify a value for each extensible attribute and it is optional.

# Configuring Microsoft Server and LDAP Connections

Active Directory is a distributed directory service that authenticates network users. Active Directory uses LDAP (Lightweight Directory Access Protocol) to access other network services. This protocol is also used when an Active Directory Service entry is configured under Authentication Server Groups. For an Active Directory, the Grid member uses LDAP to communicate with the Microsoft server. Note that the managed Microsoft server must be a part of an Active Directory Domain and it must be a domain controller for the respective domain. The appliance logs an error message in the Microsoft log each time the synchronization happens if the Microsoft server is not a part of the Active Directory Domain or if it is not the domain controller for the respective domain. You can define an LDAP timeout value at the Grid level and override it at the Microsoft server level.  
To configure LDAP timeout settings, complete the following:

1. **Grid**: From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -&gt; **Edit** from the Toolbar. Select the **Microsoft** **Integration** tab in the *Grid* *Properties* *Editor* wizard and click the **Advanced** tab.  
   **Microsoft** **Server**: From the **Grid** tab -&gt; **Microsoft** **Servers** tab -&gt; **Servers** tab, select a **Microsoft** **server** and click the Edit icon. In the Microsoft server editor, select the **General** tab and click the **Advanced** tab.
2. Complete the following:
   
   - **LDAP** **timeout**: Specify the LDAP connection timeout value. The default is 10 seconds. You can specify a value between one and 60 seconds.
3. Save the configuration.

# Configuring Server Site Links

You must choose a site link when you create an Active Directory Site on the Microsoft server. The site link describes how the replication occurs between the sites and the protocol, either IP (Internet Protocol) or SMTP (Simple Mail Transfer Protocol), which is used for communication.  
The appliance uses the default object DEFAULTIPSITELINK when you create an Active Directory Site from the NIOS appliance. If you want to change the site link for a given Active Directory Site, which is already created, you must create the Active Directory Site on the Microsoft server or modify it on the Microsoft server after you create it using the NIOS appliance.  
You must first configure site links on the Microsoft server. When you create Active Directory sites, the appliance automatically associates them with the default IP site link. The value that you specify for default IP site link must exist on the Microsoft server. Note that the appliance does not display any error message when you create a site with a site link that does not exist on the Microsoft server.  
To configure server site links, complete the following:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -&gt; **Edit** from the Toolbar.  
   **Microsoft** **Server**: From the **Grid** tab -&gt; **Microsoft** **Servers** tab -&gt; **Servers** tab, select a **Microsoft** **server** and click the Edit icon. In the Microsoft server editor, select the **General** tab and click the **Advanced** tab.
2. Select the **Microsoft** **Integration** tab in the *Grid* *Properties* *Editor* wizard and complete the following in the **Advanced** tab:
   
   - **Default** **IP** **site** **link**: Specify the default IP site link in the form of a string. The appliance does not validate it against the Windows server during configuration. The appliance displays an error message during synchronization, if the site link for IP does not match the configured name on the Windows server.
3. Save the configuration.
