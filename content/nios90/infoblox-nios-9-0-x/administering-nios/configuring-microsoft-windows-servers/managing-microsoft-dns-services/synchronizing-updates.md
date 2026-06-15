---
title: "Synchronizing Updates"
source: "/space/nios90/280760953"
pageId: "280760953"
---
A Grid member synchronizes DNS data with each managed Microsoft server at regular intervals. Grid Manager admins with the applicable permissions can then update the synchronized DNS zones and resource records. During each synchronization, updates from Grid Manager are applied to the Microsoft server and updates from the Microsoft server are applied to the Grid as well. Note that the resource records are synchronized only if there is a change to the SOA record on either the Microsoft server or the Grid.  
The following examples illustrate how Grid members synchronize DNS data:

- If a Microsoft server admin adds the finance.example.com zone, it is also added to the Grid after a synchronization.
- If a Grid Manager admin changes the A record of admin.example.com from 10.2.1.5 to 10.2.1.6, the IP address of its corresponding A record on the Microsoft server is updated to 10.2.1.6.
- If a Grid Manager admin deletes a DNS zone that is assigned to a Microsoft server, the corresponding zone on the Microsoft server is deleted as well in the next synchronization.

Because admins can update DNS data from the Microsoft server and from Grid Manager, conflicts can occur during synchronization. In addition, Microsoft servers and Infoblox DNS servers have some differences in the features they support and the way they handle certain zones and resource records.  
The following guidelines describe how the Grid member resolves conflicts and handles any differences when DNS data is synchronized between a Microsoft server and the Grid.

- On Microsoft servers, users can enter FQDNs and labels using a mix of upper and lower case characters. The servers preserve the original case when they store the data. When the Grid member synchronizes data with the Microsoft server, it displays the data in lower case in Grid Manager and the Infoblox API. The case of the data is preserved as long as no change is made to the DNS zone or resource record. If a Grid Manager admin modifies a DNS zone or resource record, the next synchronization converts the object name to lower case on the Microsoft server.
- If a Microsoft server admin modifies an object that has a pending scheduled task and synchronization occurs before the scheduled task, the object is modified in both the Microsoft server and the Grid member. When the scheduled task executes at its scheduled time, it fails and an error message is logged in the audit log.
- A situation could arise where two Microsoft servers in different domains are primary servers for zones with the same name. For example, two reverse-mapping zones could be named 1.1.10.in-addr-arpa in two Microsoft servers managed by the same member. If the two Microsoft servers are synchronized to different DNS views, the Grid member synchronizes each one separately. If the Microsoft servers are synchronized to the same DNS view, then the Grid member synchronizes the zone with the first Microsoft server. During the synchronization with the second Microsoft server, the Grid member logs an error and does not synchronize the zone.
- The Grid member does not synchronize the naming policy configured on Microsoft servers. Zones and resource records that fail the policy check on Microsoft servers are reported in the synchronization log file.
- When you remove a Microsoft server that is assigned to a zone, the succeeding synchronization removes the zone from the Microsoft server.
- When a Microsoft server admin and a Grid Manager admin change the same object, the Grid member retains the version that exists on the Microsoft server. Following are some examples:

| Grid Manager Admin... | Microsoft Server Admin... | After Synchronization |
| --- | --- | --- |
| Deletes the example.com zone | Updates the example.com zone | The example.com zone is created on the Grid with the updates and is assigned to the Microsoft server . |
| Changes the zone transfer settings of the sales.example.com zone. | Deletes the sales.example.com zone. | The sales.example.com is deleted from the Grid as well. |

- Changing the name or IP address of a resource record on the Microsoft server effectively deletes the original resource record and creates a new record with the current information. During the synchronization, the Grid member also deletes the original record, including its associated properties, such as its extensible attributes and administrative permissions, and creates a new record.

For example, as shown in the below figure, the A record for printer1.example.com is on both the Microsoft and Infoblox Grid member. On the Grid, the A record has extensible attributes and a comment. A Microsoft server admin changes the IP address of the A1 resource record from 10.1.1.2 to 10.1.1.3. On the Microsoft server, this is equivalent to deleting the A1 resource record with the IP address 10.1.1.2 and then adding a new A1 resource record with the IP address 10.1.1.3. When the data is synchronized, the Grid member deletes the original record with its extensible attributes and comments and creates a new A record with IP address 10.1.1.3.

*[drawio]*



- If a Microsoft server admin changes the IP address of a resource record and a Grid Manager admin changes the IP address of the same resource record, they are effectively deleting the record and each creating a new one.  
  For example, as shown in the below figure, a Microsoft server admin changes the IP address of the A resource record for printer1.example.com from 10.1.1.2 to 10.1.1.3, and a Grid Manager admin changes the IP address of the same resource record to 10.1.1.4. When the data is synchronized, the Grid member deletes the A1 resource record with IP address 10.1.1.2 and creates an A resource record with IP address 10.1.1.3 and another A1 resource record with IP address 10.1.1.4.

*[drawio]*

- The Microsoft server does not allow the creation of arpa subzones as forward-mapping zones, similarly, the appliance restricts assigning arpa subzones (zone names ending with .arpa) to the Microsoft server.
- NIOS does not synchronize the top-level reverse-mapping zones (in-addr.arpa and ip6.arpa) created on the Microsoft server and the top-level reverse-mapping zones (in-addr.arpa and ip6.arpa) created on the NIOS appliance cannot be assigned to the Microsoft server.
- Grid members can synchronize classless IPv4 reverse-mapping zones from the Microsoft server to the Grid only if the zone prefix is in one of the following formats: *&lt;subnet&gt;*/*&lt;subnet* *mask* *bit* *count&gt;* or *&lt;subnet&gt;*-*&lt;subnet* *mask* *bit* *count&gt;* . For example, 128/26.2.0.192.in-addr.arpa. If the zone prefix is not in the specified format, the Grid member skips the zone and logs an error message. For information, see[* http://technet.microsoft.com/en-us/library/cc961414.aspx*](http://technet.microsoft.com/en-us/library/cc961414.aspx).   
  Likewise, Grid Manager admins can add a classless IPv4 reverse-mapping authoritative or stub zone to a Microsoft server only if its prefix is in the specified format. For information about configuring classless IPv4 reverse-mapping zones in Grid Manager, see [*Specifying an RFC 2317 Prefix*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-reverse-mapping-zone).

- Grid members synchronize DNS records that contain values that Infoblox does not support. Grid Manager admins can view these records, but they cannot edit or restore such records. For example, if a member synchronizes a NAPTR record that contains an unsupported value in the Service field, admins can view this record but they cannot edit or restore it, as long as it contains an unsupported value.
- When a Grid member synchronizes a zone from a Microsoft server to the appliance and that zone contains UTF-8 characters in the "Responsible Person" field, Grid Manager displays the "Responsible Person" value in the RNAME field of the SOA record of the zone. Note though that you cannot edit the SOA record if the RNAME field contains unsupported UTF-8 characters.
- Synchronizing a new zone from the Microsoft server to the Grid is a two-step process. First the zone name is synchronized, and then its properties and records are synchronized. The zone synchronization from the Microsoft server is not considered complete until both steps are done. NIOS drops any records that are created on the appliance for the synchronized zone before it is completely synchronized.  
  For example, the example.com zone is created on a Microsoft server and then synchronized to the NIOS appliance. If a NIOS admin creates a record, such as an A record, in the example.com zone before it is fully synchronized, the record is removed from the example.com zone. Ensure that both the zone and its contents are completely synchronized before you add a record to a zone on the NIOS appliance.

- When a Microsoft admin deletes a zone whose primary and secondary servers are Microsoft servers, the zone is deleted from the Grid after a synchronization. If the secondary Microsoft servers are managed by the member in Read-Write mode, the zone is removed from the secondary servers as well. But if some of the secondary Microsoft servers are managed by the member in Read-Only mode, then at the next synchronization the zone is recreated on the Grid with the Microsoft servers as the secondary servers and the masters defined for the zone as external primary servers.
- If you add Grid members or other Microsoft servers as secondary servers to a zone on the Microsoft server, NIOS does not automatically add them as Grid Secondary or Microsoft Secondary servers in the Name Servers tab of the zone after the synchronization. Instead, NIOS creates NS records for them in the zone.

# Synchronizing Delegations

When a parent zone delegates a subdomain to one or more name servers, Infoblox DNS servers require the delegation name servers to also be authoritative for the subzone. Microsoft servers do not; they allow the delegation servers of a subzone to be different from its authoritative servers. Infoblox DNS servers support this configuration only if the primary server of the parent zone is a Microsoft server. This configuration is retained when delegations are synchronized from Microsoft servers to the Grid.

For example, as shown in the below figure, on a Microsoft server, example.com delegates sales.example.com to the name server ns1.example.com; but the authoritative server of sales.example.com is 2k3r264-2.infoblox.com.

*Delegation Server and* *Authoritative* *Server* *for* *example.com*   
  
  
   
The following figure shows that after example.com and its subzone are synchronized to the Grid, example.com contains an NS record for sales.example.com and an A record for the delegation name server ns1.example.com. The *MS* *Delegation* *Addresses* column displays the IP address of the delegation server of the subzone sales.example.com.

*example.com* *Synchronized* *to* *the* *Grid*   
    
  
After the synchronization, you can add name servers for the delegation as follows:

1. Select the zone by navigating to the **Data** **Management** tab -&gt; **DNS** -&gt; **Zones** -&gt; *parent_zone*.
2. Click the Add icon and select **Record** -&gt; **NS** **Record**.
3. Complete the following and click **Next**:
   
   - **Name** **Server**: Enter the hostname you want to configure as the name server for the zone.
   - **Name**: Specify the name of the subzone. Note that you cannot change this name when you edit the record.
4. Enter the IP address of the name server.
5. Save the configuration.

NIOS adds an NS record for the new delegation server and synchronizes this update to the Microsoft server. In the following figure, a new delegation server, ns2.example.com, was added.

*NS* *Record* *for* *ns2.example.com*   
  
    
When you navigate to the **Name** **Servers** tab of sales.example.com to view the authoritative name servers for the subzone, note that as shown in the following figure, the table displays 2k8r264-2.infoblox.com as the authoritative server for the subzone. The **Parent** **Delegation** column indicates if the FQDN and IP address of the authoritative name server for the zone matches the FQDN and IP address in the delegation zone's NS record. In the example, the authoritative name server 2k8r264-2.infoblox.com is different from the delegation name servers (ns1.example.com and ns2.example.com), so the column displays **No**.

*Authoritative* *Name* *Server* *of* *sales.example.com*   
    
Note though that because Infoblox DNS servers require the delegation servers to also be authoritative for the subzone, if you add another authoritative name server to the subzone from Grid Manager, NIOS also adds it as a delegation server in the parent zone. For example, as shown in the below figure, when an admin adds the name server ns-100.example.com as an external secondary server for sales.example.com, NIOS automatically adds it as a delegation server by adding an NS record for it in the parent zone.   
  
*Adding* *Another* *Authoritative* *Server* *from* *Grid* *Manager*

# Synchronizing AD-Integrated Zones

An AD-integrated zone can be served by multiple domain controllers, and a Grid member can manage more than one of the domain controllers. If the domain controllers are configured to synchronize their DNS data to different DNS views, the Grid member synchronizes DNS data with each domain controller. If the domain controllers are configured to synchronize their DNS data to the same DNS view, the member selects a principal server for synchronization purposes and synchronizes data with that principal server only. The selection of the principal server is logged, as well as when it changes. The Grid member selects a principal server as follows:

- The first domain controller that is assigned as the primary server is designated principal server.
- If a domain controller fails three successive synchronizations, it loses its principal status. The Grid Master then checks the date that each domain controller last became a principal server and selects the one that has not been the designated principal the longest.
- If the domain controllers are managed in read-only and read/write modes, the Grid member always selects the domain controller that is managed in read/write mode.

When a zone is served by multiple Microsoft servers, the **MS** **Sync** **Server** column of the **Zones** tab shows which Microsoft server is actually performing the synchronization of that zone with the Grid.

The Grid member periodically checks if each zone has one principal server. If it does not find a principal server for a zone, the Grid member selects one among the name servers assigned to the zone. It gives priority to the server that was not the designated principal server the longest.

Following are additional guidelines when synchronizing AD-integrated zones:

- You can create an AD-integrated zone on Grid Manager and assign one domain controller as its primary server. If a domain controller admin adds more primary servers to the zone, they are added to the zone on Grid Manager when the zone is synchronized. If you want to delete the primary servers, you must delete all the primary servers at once. You cannot delete only a subset of the servers.
- From NIOS 9.0.7 onwards, you will not be able to delete or remove a Microsoft primary nameserver within an Active Directory domain by using the Grid Manager or WAPI.
- A situation could arise where two domain controllers in different AD domains are primary servers for zones with the same name. For example, two reverse-mapping zones could be named 1.1.10.in-addr-arpa in two domain controllers managed by the same member. If the two domain controllers are synchronized to different DNS views, the Grid member synchronizes each one separately. If the domain controllers are synchronized to the same DNS view, then the Grid member synchronizes the zone with the first domain controller. During the synchronization with the second domain controller, the Grid member logs an error and does not synchronize the zone.
- If a Grid Manager admin deletes a CNAME record that has a blank canonical name from an Active Directory -integrated zone, this CNAME record is not deleted from the Microsoft server after the synchronization if the Active Directory -integrated zone is hosted on a Microsoft server running Windows 2008 R2 or Windows Server 2012.
- When a Microsoft server is the primary server of a zone that contains an _msdcs zone, it appends the parent zone name to the server name in the NS record of the _msdcs zone. But when an Infoblox Grid member is the primary server of a zone that contains an _msdcs zone, it specifies the server name only in the NS record. For example, the _msdcs zone is in the example.com zone and the name server is nameserver100.com. When a Microsoft server is the primary server of example.com, the server name on the NS record of the _msdcs zone is nameserver100.com.example.com. When a Grid member is the primary server, the server name on the NS record of the _msdcs zone is nameserver100.com.

# Resolving Conflicts

Some conflicts require intervention from an admin. For example, a Grid member cannot synchronize a zone when its primary server on the Microsoft server is different from its primary server on the Grid. When a Grid member is unable to synchronize data due to such conflicts, it logs an error, skips the object with the error and continues synchronizing the rest of the data. You can then view the Microsoft logs to check which objects were not synchronized. If you resolve the problem, the Grid member synchronizes the object on its next attempt. For information about the logs, see [*Viewing Synchronization Logs*](/nios90/infoblox-nios-9-0-x/administering-nios/configuring-microsoft-windows-servers/managing-microsoft-windows-servers/monitoring-managed-microsoft-servers/Monitoring+Managed+Microsoft+Servers#Viewing-Synchronization-Logs).
