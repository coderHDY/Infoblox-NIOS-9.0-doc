---
title: "Viewing Name Server Groups"
source: "/space/nios90/280762871"
pageId: "280762871"
---
You can view the configured authoritative, delegation, forwarding member, stub member, and forward/stub server name server groups by navigating to the **Data** **Management** tab -> **DNS** tab -> **Name** **Server** **Groups** tab.  
The panel displays the following information about each name server group:

- **Name**: The name of the name server group.
- **Type**: The name server group type. Possible values are **Authoritative**, **Delegation**, **Forwarding** **Member**, **Stub** **Member**, and **Forward/Stub** **Server.**
- **Comment**: Comments that were entered for the name server group.
- **Site**: Values that were entered for this pre-defined attribute. You can do the following:
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.*
- Modify some of the data in the table. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).
- Edit the properties of a name server group.
  
  - Select the checkbox beside a name server group, and then click the Edit icon.
- Delete a name server group.
  
  - Select the checkbox beside a name server group, and then click the Delete icon. Note that you cannot delete a delegation name server group that is assigned to a zone.
- Export the list of Grid members to a .csv file.
  
  - Click the Export icon.
- Print the list of Grid members.
  
  - Click the Print icon.
