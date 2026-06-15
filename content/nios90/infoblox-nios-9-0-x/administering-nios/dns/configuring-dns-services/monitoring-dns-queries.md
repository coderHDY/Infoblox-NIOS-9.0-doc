---
title: "Monitoring DNS Queries"
source: "/space/nios90/280272829"
pageId: "280272829"
---
You can monitor DNS resource records by their **Last** **Queried** time. You can configure this feature in the *Grid* *DNS* *Properties* editor -&gt; **DNS** **Scavenging** tab. Infoblox recommends that you keep the number of zones or domains for monitoring below 1000; specifying more may adversely affect performance.  
To view DNS queries by their **Last** **Queried** time:

1. From the **Data** **Management** tab -&gt; **DNS** tab, click the **Query** **Monitoring** tab.
2. The **Query** ** Monitoring** tab provides a **Last** ** Queried** report for the monitored resource records, including the following information:
   
   - **Network** ** View**: Network view name. You cannot sort on this column. This column is hidden by default.
   - **DNS** ** View**: DNS view name. This column is hidden by default. **Zone**: FQDN of zone.
   - **Name**: FQDN of resource record.
   - **Record ** **Type**: Resource record type.
   - **Record ** **Data**: Value of resource record, such as address of an A record.
   - **Monitored ** **Since**: Date monitoring started.
   - **Last** ** Queried**: Displays "Not Monitored", "Not Queried Since xxxx", or date of last query.
     
     Note this report does not display the last queried information for automatically generated NS records.

To enable last queried time monitoring for resource records, do the following in the DNS scavenging properties for the Grid, a view, or a zone:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **DNS** **view:** From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; *dns_view* checkbox -&gt; Edit icon.  
   **DNS** **zone**: From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab -&gt; click a DNS view -&gt; *zone* checkbox -&gt; Edit icon.
2. If the properties editor is in basic mode, click **Toggle** **Advanced** **Mode**.
3. Click **DNS** **Scavenging**.
4. Select the **Enable** **last** **queried** **time** **monitoring** **for** **resource** **records** checkbox. For more information, see [*Configuring DNS Record Scavenging Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/dns-record-scavenging).
5. Click **Save** **&** **Close**.

> **warning**
>
> ### Note
> 
> Exporting the query monitoring data may take longer than usual if the report contains a lot of records. Also, if a Grid secondary server uses zone transfer to update zone data from a Grid primary server, NIOS does not monitor queries made to the Grid secondary server and it does not update the last queried timestamp for the resource records in a zone.

When multiple values are specified with the same filter, the filter applies *or* logic, e.g. 'a' or 'b'. Other perspectives in NIOS UI apply *and* logic, e.g., 'a' and 'b'. You can use the following filters to get specific information in this report:

- **DNS** **View**: DNS view name.
- **Not** ** Queried**: Specify a date when the last query was made. The only operator is "Since".
- **Zone**: FQDN of zone.
- **Type**: Only a single record type filter can be specified. This filter has the following resource records:
  
  - A Records
  - AAAA Records
  - BulkHost
  - CAA Records
  - CNAME Records
  - DNAME Records
  - DS Records
  - DTC LBDN Records
  - Host Address
  - Host Alias
  - Host Record
  - MX Records
  - NAPTR Records
  - NS Records
  - PTR Records
  - Resource Record
  - SRV Records
  - Shared A Record
  - Shared AAAA Record
  - Shared CNAME Record
  - Shared MX Record
  - Shared SRV Record
  - TXT Records
  - Other Records

> **warning**
>
> ### Note
> 
> NIOS does not monitor queries or update timestamp for DNSSEC records, except for DS records. As a result, the **QueryMonitoring** tab displays "Not Monitored" in the Last Queried column for all DNSSEC records. In addition, the Not Queried filter does not display any DNSSEC records.
