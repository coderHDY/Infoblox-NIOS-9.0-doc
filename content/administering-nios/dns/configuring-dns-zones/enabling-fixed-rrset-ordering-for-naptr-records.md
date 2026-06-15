---
title: "Enabling Fixed RRset Ordering for NAPTR Records"
source: "/space/nios90/280405592"
pageId: "280405592"
---
You can enable fixed RRset ordering for the authoritative zone to save the order of the NAPTR records that are imported to the zone using CSV import. When you enable fixed RRset ordering for the zone, the NAPTR records are saved in the same order as received in the CSV file and the appliance returns the NAPTR records in the fixed order in response to a query. If you enable fixed RRset ordering for an authoritative zone, the zone data is read-only and you cannot add, delete, or modify DNS records of the zone using GUI or API. You can add, delete, or modify DNS records of the zone using CSV import only. The fixed RRset ordering for the NAPTR records is retained only when the NAPTR records are imported to the zone through CSV import. If you change the position of the NAPTR records by disabling fixed RRset ordering, then the changes made for the position of the records will not be retained when you later enable fixed RRset ordering.  
Note the following:

- When you import NAPTR records to an empty zone, you must use the **Add** CSV import option and to update the zone data you must use the **Replace** CSV import option to ensure that the RRset order of the NAPTR records is the same as specified in the CSV import file. For more information about CSV import feature, see [*Guidelines for CSV Import*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/421855638)*.*
- It is not recommended to configure DDNS updates for a zone, if you have enabled fixed RRset ordering for the zone.
- If you enable fixed RRset ordering for an authoritative zone with existing NAPTR records, the RRset order of the existing records will not change.
- The RRset order for NAPTR records imported to the zone through DNS zone transfers or DIW (Data Import Wizard) will not be preserved.
- You cannot enable fixed RRset ordering for an authoritative zone if the zone has subzones.
- You cannot enable fixed RRset ordering for an authoritative zone, if the zone has bulk hosts or if the zone is associated with a shared record group.
- This feature is applicable only for forward-mapping authoritative zones.
- This feature is not supported for Microsoft zones.

To enable fixed RRset ordering for NAPTR records imported to the zone using CSV import:

1. From the **Data Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative Zone* editor, click **Toggle Advanced Mode** if the editor is in the basic mode.
3. Click the **Advanced** subtab of the **General** tab and then complete the following:
   
   - **Enable fixed RRset ordering**: Select this checkbox to enable fixed RRset ordering for the NAPTR records that are added to the authoritative zone through CSV import, as described in [*Guidelines for CSV Import*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/421855638).
4. Save the configuration and restart DNS service for the change to take effect.
