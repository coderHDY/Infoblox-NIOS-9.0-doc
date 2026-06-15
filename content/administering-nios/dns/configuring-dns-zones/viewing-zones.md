---
title: "Viewing Zones"
source: "/space/nios90/280405374"
pageId: "280405374"
---
To list zones, navigate to the **Data** **Management** tab -> **DNS** tab -> *Zones* panel. If there is more than one DNS view in the Grid, this panel lists the DNS views. Select a DNS view to list its zones. (For information, see [*Listing DNS Views*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90draft/pages/73282458).)

- Click Toggle flat view to display a flat list of all the zones in the view.
- Click Toggle hierarchical view to display only the apex zones.

In the hierarchical view, you can see one entry for the host that represents the entire host object. In a host record, there can be multiple DNS resource records (A, PTR, CNAME) and some DHCP data (fixed addresses) as well. In the flat view, each of the DNS resource records in the host are listed separately.  
For example, the host called server1.infoblox.com contains 2 A records and an ALIAS (which is a host naming convention for CNAME records). If you view the infoblox.com zone using the hierarchical view option, you will see one entry host for server1.infoblox.com. In the flat view, you will see three records (one for each IP address/A record, and one host Alias for the CNAME). In the flat view, you cannot delete one piece of the host record. You can edit the host record and you can remove information. Deleting host records deletes the entire host record only.  
This panel displays the following information for each zone, by default:

- **Name**: The domain name of the zone.
- **MS Sync Server**: When a zone is served by multiple Microsoft servers, this column shows which Microsoft server is actually performing the synchronization of that zone with the Grid.
- **MS Zone Sync**: Displays **Yes** if you have enabled zone synchronization, and displays **No** when the zone synchronization is disabled. This column appears only when you have the Microsoft license installed.
- **Grid Primary Server**: The primary name server configured for an authoritative zone in the DNS view.
- **Type**: The zone type. Possible values are Authoritative, Forward, Stub and Delegation.
- **Multi-master Zone**: Indicates whether this zone has multiple primary name servers.
- **Comment**: Comments that were entered for the zone.
- **Site**: Values that were entered for this pre-defined attribute.

You can also display the following columns:

- **Locked**: Displays Yes when a zone is locked by an admin, and displays No when the zone is unlocked.
- **Function**: Indicates whether the zone is a forward-mapping, or an IPv4 or IPv6 reverse-mapping zone.
- **ZSK rollover date**: Displays the date when the ZSK is due for next rollover. The appliance performs a rollover automatically at this time.
- **KSK rollover date**: Displays the date when the KSK is due for next rollover. The appliance performs a rollover automatically at this time if you have enabled automatic KSK rollover. For more information, see [*Configuring Automatic KSK Rollovers and Notifications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1454997618). You must perform the rollover manually, if you have disabled this option.
- **Disabled**: This field displays **Yes** if the zone is disabled. Otherwise, this field displays **No**. You can double click a row and select the checkbox in this column to disable the zone. Grid Manager displays a warning message when you disable the zone. Click **Yes** to confirm or **No** to cancel.
- **Signed**: This field displays Yes if the zone is a DNSSEC-signed zone. Otherwise, this field displays No. You can do the following:
- List the resource records and subzones of a DNS zone.
  
  - Click a DNS zone name.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.*
- Modify some of the data in the table. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).
- Edit the properties of a DNS zone.
  
  - Click the checkbox beside a DNS zone, and then click the Edit icon.
- Delete a DNS zone.
  
  - Click the checkbox beside a DNS zone, and then click the Delete icon. Grid Manager displays a warning message. Click **Yes** to continue or **No** to cancel the process. Note that this process may take a longer time to complete depending on the size of the data.
- Export the list of DNS zones to a .csv file.
  
  - Click the Export icon.
- Print the list of DNS zones.
  
  - Click the Print icon.
