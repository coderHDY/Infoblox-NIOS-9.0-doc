---
title: "Modifying Shared Records"
source: "/space/nios90/1340736937"
pageId: "1340736937"
---
You can modify, disable, or delete any shared record. When physical repair or relocation of a network device occurs, you can disable a record instead of deleting it. This alleviates having to delete, and then add the shared record again. When the changes to the physical device are complete, you can simply enable the shared record.  
To modify or disable a shared record:

1. Perform a global search to retrieve the host or resource record you want to modify.   
   or   
   From the **Data** **Management** tab, select the **DNS** tab -> **Shared** **Record** **Groups** tab -> *shared_record_group* -> **Shared** **Records** tab.
2. Select the shared record you want to modify and click the Edit icon.
3. The *Shared* *Records* editor contains the following tabs from which you can modify information:
   
   - **General**: You can change most of the information, except for the read-only fields, such as the Host Name Policy. You can also select the **Disable** checkbox to disable the record.
   - **TTL**: You can modify the TTL setting. For information, see [*About Time To Live Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281215163).
   - **Extensible** **Attributes**: You can modify the attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   - **Permissions**: This tab displays if you logged in as a superuser. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
4. Save the configuration and click **Restart** if it appears at the top of the screen.
