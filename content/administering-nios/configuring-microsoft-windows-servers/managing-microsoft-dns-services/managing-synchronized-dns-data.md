---
title: "Managing Synchronized DNS Data"
source: "/space/nios90/280270513"
pageId: "280270513"
---
When Grid members are configured to manage Microsoft servers in read/write mode, you can use Grid Manager to view, edit and delete the DNS data of those servers. You can add new zones and assign them to a Microsoft server. You can modify the properties of zones synchronized from the Microsoft server and edit their resource records as well. All updates are synchronized to the Microsoft servers at regular intervals.  
The following sections provide guidelines for managing the zones and resource records served by Microsoft servers:

*[toc]*

Synchronized zones also support the following features:

- You can import data to zones synchronized with Microsoft servers. Note that the import fails if you try to import unsupported records to a Microsoft zone. For information about importing records, see [*Importing Zone Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665197).
- You can copy records to and from zones synchronized with Microsoft servers. When copying records to a Microsoft zone, you can copy only those records that are supported by Microsoft servers. For information about copying records, see as described in [*Defining a Match Destinations List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1415939017).

# Adding Zones to Microsoft Servers

From Grid Manager, you can create zones and assign Microsoft servers as their primary or secondary servers. The managing Grid member then synchronize these zones to the appropriate Microsoft servers.  
From Grid Manager, you can add the following types of zones to Microsoft servers:

- Authoritative forward- and reverse-mapping zones — For information, see [*Configuring Authoritative Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763330).
- Forward- and reverse-mapping stub zones — For information, see [*Configuring Stub Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909).
- Delegations — For information, see [*Configuring a Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909).

Note that you cannot add a zone on a Microsoft server and configure it to be served by an Infoblox Grid member. For example, on the Microsoft server, you cannot add a zone and assign a Grid member as its primary server and the Microsoft server as the secondary server. You must add such a zone from Grid Manager.  
Following are guidelines for adding zones to a Microsoft server:

- The primary or secondary server of the zone must be a Microsoft server.
- If the primary server is a domain controller, you can enable the option to store the zone in Active Directory, making it an AD-integrated zone. Note that you can enable Active Directory integration only after the Microsoft server has been synchronized at least once because its AD ability is not known before the synchronization.
- You do not have to assign a Grid member as the primary or a secondary server of the zone. For example, a zone can have a Microsoft server as its primary server and an external secondary server.
- The zone must be in the same DNS view to which the DNS data of the Microsoft server was synchronized. You cannot add a zone served by the Microsoft server to a different DNS view.
- The zone does not inherit the properties from the Grid or from the DNS view. It uses the Infoblox-defined defaults. You can change the property values, as described in Setting Zone Properties below.
- You can set certain zone properties that are not supported and synchronized to the Microsoft server. For example, you can define extensible attributes and administrative permissions. When you set these properties, they apply to the zones only when they are managed from Grid Manager.
- Infoblox does not support all the zone properties of a Microsoft DNS server. When a Grid member synchronizes zones that were created on Grid Manager to the Microsoft server, the zones contain default values for all unsupported properties.
- If you set the Disable option, the zone status is set to "Paused" on the Microsoft server. A zone in a "Paused" status is not served to DNS clients, nor is it available for zone updates.
- Setting the Disable option does not stop synchronization. Grid members synchronize disabled zones.
- The member learns the Windows version of the Microsoft server after its first successful synchronization. Certain zones and resource records are dependent on a specific Windows version. You cannot assign these zones to Microsoft servers whose versions are unknown or insufficient.
- If the member is a secondary server for a zone with a Microsoft primary server, the member obtains the zone data through DNS zone transfers from the Microsoft primary server; not through synchronizations. This ensures that the zone data is always current on the Infoblox secondary server, as it does not have to wait for synchronizations to update its data.

# Setting Zone Properties

When the primary server of a zone is a Microsoft server, it does not inherit its properties from the Grid. Zones that are synchronized from a Microsoft server retain their original properties. Zones that Grid Manager admins create assume the Infoblox-defined default values.  
To modify the properties of a synchronized zone:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *DNS_view* -> *zone* checkbox and click the Edit icon.
2. In the *Authoritative* *Zone* editor, you can do the following in each tab:
   
   - **General:** You can add or edit comments, and set the Disable and Lock options. Setting the Disable option sets the status of the zone to "Paused" on the Microsoft server. Grid members synchronize disabled zones to Microsoft servers.
   - **Name** **Servers:** You can modify the name servers assigned to the zone. For information, see [*Assigning Zone Authority to Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599).
   - **Settings:** If the zone was synchronized from a Microsoft server, this tab displays the original settings from the Microsoft server. If the zone was created using Grid Manager, then it inherits the TTL values from the Grid. Note that these values might be different from those on the Microsoft server. To change any of these values, see [*Configuring DNS Service Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272968).
   - **Zone** **Transfers:** In this tab, you specify the servers to which zone transfers are allowed. For information about zone transfers, see [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834). Set the following parameters, depending on whether the primary or secondary servers of the zone are Infoblox or Microsoft DNS servers:
     
     - If the primary server is an Infoblox, Microsoft or external primary and the secondary servers are both Infoblox and Microsoft DNS servers, this tab displays two separate tables where you can specify zone transfer settings for the Infoblox DNS servers and the Microsoft DNS servers.  
       **Zone** **Transfer** **Settings** **for** **Infoblox** **Members:** Specify the settings as described in [*Configuring Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834).  
       **Zone** **Transfer** **Settings** **for** **Microsoft** **Servers:** Note that you cannot use a named ACL for access control though you can use individual ACEs. For information about named ACLs and access control, see [*Configuring Access Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667677). You can set access control for zone transfers for Microsoft servers to one of the following:
       
       - **None:** Does not allow zone transfers to any name server.
       - **Any:** Allows zone transfers to any IP address.
       - **Any Name Server:** Allows zone transfers to any name server in the Name Servers table.
       - **Address:** Allows zone transfers to the IP address that you specify.
     - If both the primary and secondary servers are Microsoft servers, the dialog box displays the **Zone Transfer Settings for Microsoft Servers** table only.
     - If no Microsoft servers are primary or secondary servers, then the dialog box displays the **Zone Transfer Settings for Infoblox Members** table only.
   - **Updates:** In this tab, you specify whether the zone can accept dynamic DNS updates. For information about dynamic DNS updates, see [*Configuring*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267879)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267879)[*DDNS*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267879)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267879)[*Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267879). If the primary server is a Microsoft server, regardless of the secondary servers, the **Updates** tab displays the following:
     
     - **Dynamic Updates:** Select one of the following:
       
       - **None:** The zone does not accept dynamic updates.
       - **Secure** **Only:** This appears only if the zone is AD-integrated. The zone accepts GSS-TSIG-signed updates only.
       - **Nonsecure** **and** **Secure:** The zone accepts both nonsecure and GSS-TSIG-signed updates.
   - **Active** **Directory:**
     
     - **Automatically create underscore zones:** This option allows the appliance to create the following subzones that the DNS server must have to answer AD-related DNS queries:  
       *_*msdcs*.zone*  
       *_*sites*.zone*  
       *_*tcp*.zone*  
       *_*udp*.zone*  
       domaindnszones.*zone*  
       forestdnszones.*zone*

Note that these zones are automatically generated. You cannot edit these zones or import data into them. They cannot be modified, thus providing protection against forged updates.

- **Domain Controller:** Displays the configured domain controllers that can add a nameserver record to the zone. For information about configuring domain controllers, see [*Configuring Domain Controller List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763152).
- **Extensible** **Attributes:** Extensible attributes apply to the zones only when they are managed from Grid Manager. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
- **Permissions:** These permissions apply to Infoblox Grid Manager administrators only. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).

# Deleting and Restoring Synchronized Zones

When you delete a synchronized zone from the Grid, Grid Manager moves the zone and its resource records to the Recycle Bin. It deletes the zone and its resource records from the Microsoft server at the next synchronization.  
Note that if you delete a zone on Grid Manager and plan to add it back to the database with different properties or resource records, ensure that you wait until after the deletion is synchronized to the Microsoft server to add the new zone. Otherwise, if you delete a zone and add a new zone with the same name within a synchronization interval, Grid Manager will synchronize the zone properties and resource records from the Microsoft server to the newly added zone on Grid Manager.  
If a zone has subzones, you can choose to remove them and their resource records or "reparent" them to the parent zone of the one you are removing. For information, see [*Removing Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405463).  
If you restore deleted zones from the Recycle Bin, the Grid member restores it on the Microsoft server as well. For information, see [*Restoring Zone Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763008).

# Managing Resource Records in Synchronized Zones

From Grid Manager, you can add and edit resource records in zones served by Microsoft servers. For information about adding and managing resource records, see [*Managing Resource Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762656). You can also use IP Map and the IP List to track A, AAAA and PTR records that are synchronized from Microsoft servers. For information, see [*About IP Address Management*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764648).  
Microsoft DNS servers support all the resource records supported by Infoblox DNS servers, except for hosts, bulk hosts and shared record groups. You cannot add these records to zones served by Microsoft servers or assign zones with these records to Microsoft servers.  
Following are guidelines for adding and managing resource records in synchronized zones:

- Infoblox DNS servers support defining a naming policy for the hostnames of A, AAAA, MX, and NS records based on user-defined or default patterns. For information, see [*Specifying Hostname Policies*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272861). The hostname policy applies only when records are created from Grid Manager. Resource records that originate from the Microsoft server are synchronized to the Grid member even if they do not comply with the hostname policy of the Grid member. The policy is enforced only if you edit the resource record from Grid manager.
- When you create an A or AAAA resource record on the NIOS appliance with the option to automatically create the corresponding PTR record, Grid Manager uses the deepest reverse zone that can hold the record. For example, a Grid has the following reverse zones: 10.in-addr.arpa, 0.10.in-addr.arpa, and 0.0.10.in-addr.arpa. When you create the A record www A with the IP address 10.0.0.1, Grid Manager creates a PTR record in the zone 0.0.10.in-addr.arpa. If the deepest zone does not allow the creation of the PTR record, Grid Manager creates the A record, but not the PTR record, and displays a warning.  
    
  Note that if the **Enable** **PTR** **record** **removal** **for** **A/AAAA** **records** option is selected and if you try to delete the A or AAAA records in zones served by Microsoft servers, the appliance displays the *Delete* *Confirmation* *(A* *or* *AAAA* *Record)* dialog box to confirm whether you want to remove the corresponding PTR record that was automatically generated while creating the A or AAAA record. In the *Delete* *Confirmation* dialog box, select the **Remove** **associated** **PTR** **resource** **record(s)** checkbox and click **Yes** to delete the associated PTR record or click **No** to cancel. For information about enabling this option, see [*Deleting PTR Records associated with A or AAAA Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281247876).

- You can add and edit DNAME records in a DNS zone assigned to a Microsoft server running Windows 2008 or Windows Server 2012. You cannot add or edit DNAME records in zones assigned to Microsoft servers running earlier Windows versions.
- You can disable synchronized resource records from Grid Manager. When you disable a resource record, it is removed from the Microsoft server at the next synchronization.
- If you add a resource record with invalid data from Grid Manager, such as a DNAME record with an alias name that has special characters, the invalid resource record is not synchronized to the Microsoft server and is eventually deleted from the Grid. The error is logged in the Microsoft log.
- If the zone of the resource record was created using Grid Manager, then it and all its resource records inherit their TTL values from the Grid. Note that these values might be different from those on the Microsoft server. You can change these values to match those on the Microsoft server. For information on changing these values, see [*Configuring DNS Service Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272968).
- Grid Manager and Microsoft DNS servers display TXT records differently.  
  On Grid Manager, you enter the text string of TXT records as defined in RFC 1035. You can enter the following:
  
  - A contiguous set of characters without spaces. If you enclose the characters in double quotes, Grid Manager displays the character string without the double quotes. For example, if you enter **"abcdef"**, Grid Manager displays **abcdef**.
  - A string that contains any character, including spaces, enclosed in quotes.
    
    - If the string contains a quote ("), you must precede it with a backslash.
    - If you enter a text string with multiple spaces between each word and the string is not enclosed in double quotes, Grid Manager displays the text string with a single space between each word. For example, if you enter **text** **string**, the GUI displays **text** **string**. To preserve multiple spaces, enclose the string in double quotes.

Unlike on Microsoft DNS servers, you cannot enter a text string on multiple lines in Grid Manager. However, each contiguous set of characters or quoted string entered on Grid Manager is equivalent to a separate line entered on a Microsoft DNS server.  
On a Microsoft DNS server, you can enter text without quotes and with each line on a separate line. Microsoft DNS servers then display the text in a brief format where the lines are separated by a comma and a space.  
For example, if you enter the following in the **Text** field of the TXT Record wizard or editor on Grid Manager:

**"this** **is** **a** **line""with** **another** **line""and** **a** **third** **one"**

It is served by the Microsoft and Infoblox DNS servers as:

**"this** **is** **a** **line""with** **another** **line""and** **a** **third** **one"**

But it is displayed in the Microsoft DNS server as:

**this** **is** **a** **line,** **with** **another** **line,** **and** **a** **third** **one**
