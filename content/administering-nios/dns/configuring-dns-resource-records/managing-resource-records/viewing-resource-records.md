---
title: "Viewing Resource Records"
source: "/space/nios90/1422229773"
pageId: "1422229773"
---
You can view the configured resource records by navigating to the **Data** **Management** tab -> **DNS** tab -> **Zones** tab ->* zone* -> **Records** tab. Grid Manager displays the following information for each resource record in the zone:

- **Name**: The name of the record, if applicable. For host records, this field displays the canonical name of the host. For PTR record, this displays the PTR record name without the zone name.
- **Type**: The resource record type.
- **Data**: Data that the record contains. For host records, this field displays the IP address of the host. For PTR records, this displays the domain names.
- **Record Source**: Displays the record source type. For example, static, dynamic.
- **Principal**: Displays the principal name for dynamic records with the GSS-TSIG principal authentication enabled in the advanced updates properties of the Grid, view, zone, or standalone.
- **Protected: **Displays the record as protected to restrict DDNS updates to this record.
- **Comment**: Comments that were entered for the resource record.
- **Site**: Values that were entered for this pre-defined attribute.
  
  Note that the DNS record that is obscured by an LBDN record is indicated by a strikethrough, for example, an obscured A record appears as A Record in Grid Manager.

You can also display the following columns:

- **MS Delegation Addresses**: This column appears only if the primary server of the zone is a Microsoft server. It displays the IP addresses that are associated with an NS record.
- **TTL**: The TTL (time-to-live) value of the record.
- **Address**: The IPv4 or IPv6 address associated with the owner domain name in a reverse-mapping zone.
- **Shared**: Displays true for shared resource records. Otherwise, displays false.
- **Shared Record Group**: Displays the shared record group name of a shared record.
- **Disabled**: Indicates if the record is disabled.

You can perform the following steps:

- Modify some of the data in the table. Double click a row and either modify the data in the field or select an item from a drop-down list. Click **Save** to save the changes. Note that some fields are read only.
- Add new DNS records by clicking the arrow next to the Add icon and selecting **Host**, **Record**, **Shared Record**, and then selecting the required record type.
- View the DNS Traffic Control structure for an LBDN.
  
  - Select the LBDN record and click the Open Visualization icon. For more information, see [*Visualization for DNS Traffic Control Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271616)*.*
- Create a DTC server based on an existing A, AAAA, or host record by selecting a record in the table and clicking **Create DTC Server** in the Toolbar or in the record's Action menu. For more information, see [*Configuring DNS Traffic Control Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271694).
- Edit the properties of a resource record.
  
  - Select the resource record, and then click the Edit icon.
- Delete a resource record.
  
  - Select the resource record, and then click the Delete icon.
- Export the list of resource records to a .csv file.
  
  - Click the Export icon.
- Print the list of resource records.
  
  - Click the Print icon.
- Use filters and the **Goto** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Goto** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria:
  
  1. In the filter section, click **Show** **Filter** and define filter criteria for the quick filter.
  2. Click **Save** and complete the configuration In the Save Quick Filter dialog box.  
     The appliance adds the quick filter to the quick filter drop-down list in the panel. Note that global filters are prefixed with [G], local filters with [L], and system filters with [S].
