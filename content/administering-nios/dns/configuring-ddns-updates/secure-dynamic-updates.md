---
title: "Secure Dynamic Updates"
source: "/space/nios90/280664653"
pageId: "280664653"
---
The secure dynamic updates feature provides several methods to restrict dynamic DNS updates to certain records. This includes:

- Restrictions for updates to statics records. For more information, see Restricting Updates to Static Records below.
- Restrictions for updates to records marked as protected. For more information, see Restricting Updates to Protected Records below.
- Restrictions based on GSS-TSIG principal authentication. For more information, see Restricting Updates Based on GSS-TSIG Principal Authentication below.
- Restrictions based on FQDN patterns. For more information, see Restricting Updates Based on FQDN Patterns below.

Only static and dynamic record source type support secure dynamic updates. You can see the record source type in the Resource Record Viewer. The following table shows which type of secure dynamic updates is applicable to different record source types.   
*Secure* *Dynamic* *Update* *Types*

| **Secure** **Dynamic** **Update** **Type** | **Record** **Source** **Type** |
| --- | --- |
| Restrictions for updates to statics records | Static |
| Restrictions for updates to protected records | Static, dynamic |
| Restrictions based on GSS-TSIG principal authentication | Dynamic |
| Restrictions based on FQDN patterns | Static, dynamic |

Sometimes when the updating record has the same data as the existing record, you may need to initialize the record creation timestamp to avoid unwanted DNS record scavenging. For more information, see Forcing Creation Timestamp Initialization for Unchanged Records below.

Failed attempts to dynamically update secured records are recorded in the NIOS syslog. You can view it, as described in [*Viewing the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148/Using+a+Syslog+Server#bookmark2796)and [*Searching in the Syslog*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148).  
You can use Smart Folders to organize data by record source, principal, or protection state. For more information, see [*Smart Folders*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280757969).

In addition, you can use Global Search to search for records by principal name. For more information, see [*Using Global Search*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).

> **warning**
>
> ### Note
> 
> To use the secure dynamic updates feature, you must have a DNS license installed in the Grid Manager.

# Restricting Updates to Static Records

This method prevents updates to all RRsets containing static records at once in the Grid, DNS view, or zone. To prevent updates to specific static records, see Restricting Updates to Protected Records below.

> **warning**
>
> ### Note
> 
> When you upgrade from a previous NIOS release to later versions, all dynamic updated records are labelled as static records if you enable the Secure Dynamic Updates feature. Infoblox suggests that you enable this feature only after all records are changed to Dynamic. NIOS tags the RRsets that are not auto-generated as static records.

To restrict updates to all static records in the Grid, DNS view, or zone:

1. In the Grid DNS, view, or zone properties, click **Updates** -> **Advanced**.
2. To override the inherited properties, click **Override**.
3. Under **Secure** **Dynamic** **Updates**, select **Prevent** **dynamic** **updates** **to** **RRsets** **containing** **static** **records**.
4. Click **Save** **&** **Close**.

# Restricting Updates to Protected Records

You can restrict updates to the records of your choice, by marking them as protected. You can do this for both static and dynamic records. The Resource Record Viewer displays the protection status of the records in the Protected column: Yes or No.  
You can protect the following record types:

- A record
- AAAA record
- CNAME record
- DNAME record
- MX record
- NAPTR record
- PTR record
- SRV record
- TXT record
- Host record

For all the above mentioned records except the host record, you can change the type from static to dynamic and back, if required.  
To restrict updates to protected records:

1. In the DNS Resource Records viewer, select a record or multiple records.
2. In the Toolbar, select **Protect** **Records** -> **Enable** **Protection**.   
   Or  
   In the properties dialog for a record, click **Updates**, select the **Protected** checkbox, and then click **Save** **&** **Close**.
3. Enable updates prevention at the corresponding level:
   
   1. In the Grid DNS, view, or zone properties, click **Updates** -> **Advanced**.
   2. If necessary, click **Override** to override the inherited properties.
   3. Select **Prevent dynamic updates to RRsets containing protected records**.
   4. Click **Save & Close**.

# Restricting Updates Based on GSS-TSIG Principal Authentication

This method implies tracking the Kerberos GSS-TSIG principal that created a record and restricting DDNS updates attempted by a different GSS-TSIG principal on this record.  
The Resource Record Viewer displays the GSS-TSIG authentication information in the Principal column: it displays the principal name if the client that created the record is authenticated and the principal is tracked.  
The tracked principal is also displayed in the record properties. You can change the principal associated to a record by clicking **Select** **Principal** in the record properties and specifying the required principal.  
Additionally, you can use dynamic update groups to manage the allowed principals. For more information, see About Dynamic Update Groups below.  
To restrict updates based on GSS-TSIG principal authentication:

1. In the Grid DNS, view, or zone properties, click **Updates** -> **Advanced**.
2. To override the inherited properties, click **Override**.
3. Under **Secure Dynamic Updates**, select **Track the GSS-TSIG principals that create dynamic records**.  
   Note that for this option to work, ensure that you have selected **Enable** **GSS-TSIG** **authentication** **of** **clients** in the GSS-TSIG properties of the Grid or the corresponding zone or view.
4. Select **Require** **the** **appropriate** **GSS-TSIG** **principal** **to** **update** **RRsets** **that** **track** **principals**.
5. Optionally, specify an active dynamic update group.
6. Click **Save & Close**.

## About Dynamic Update Groups

In some cases, for example, in DHCP failover associations, you need to allow different GSS-TSIG principals to update each other's records. To that end, you can join multiple principals into clusters, where all principals are considered as equivalent and therefore can update affected records without being their originators. You can join multiple clusters into a dynamic update group. The clusters within a group, however, are not considered equivalent and cannot update each other's records.  
When you have several dynamic update groups defined, you can assign different groups to be active for the Grid, a DNS view, or a zone as described in Restricting Updates Based on GSS-TSIG Principal Authentication below. If no group is assigned, then no principals are considered to be equivalent.  
For information on how to add dynamic update groups and clusters, see Managing Dynamic Update Groups and Clusters below.

> **warning**
>
> ### Note
> 
> Viewing and modifying the configuration of a dynamic update group requires Grid DNS permissions. Selecting a group as active for the Grid, a view, or a zone requires read permission on the Grid DNS, as well as write permission on the object being modified.

## Managing Dynamic Update Groups and Clusters

To add a dynamic update group:

1. In **Data Management** -> **DNS**, expand the Toolbar and click **Manage Dynamic Update Groups**.
2. Click the Add icon.
3. Select **Add Dynamic Update Group**.
4. Specify the group name.
5. Optionally, provide a comment.
6. Click **Save** **and** **Close**. Proceed to adding clusters to the group as described below.

To add a cluster:

1. In the *Manage Dynamic Update Groups* window, click the Add icon.
2. Select **Add Cluster**.
3. Select the dynamic update group in which you want to include the cluster.
4. Specify the cluster name.
5. Optionally, provide a comment.
6. Click **Save and Close**.
7. To add principals to the cluster, select the cluster in the *Manage Dynamic Update Groups* window and click the Add icon. A principal can appear in multiple clusters.
8. Select one of the following:
   
   - **Add Principal**: This adds a new row in the table. Specify the principal name in the row.
   - **Select Principal**: This opens the *Principal Selector* dialog. Select the required principal from the list.
9. Click **Close**.

To edit or delete a group, cluster, or principal, select it in the *Manage* *Dynamic* *Update* *Groups* window, and click the corresponding icon.  
You can also export data about dynamic update groups, their clusters, and principals in the Infoblox CSV Import format by clicking the Export icon in the *Manage* *Dynamic* *Update* *Groups* window. For more information, see [*Exporting Data to Files*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280664653).

# Restricting Updates Based on FQDN Patterns

This implies defining FQDN patterns for domain names which prevents DDNS updates to matching FQDNs. To restrict updates based on FQDN patterns:

1. In the Grid DNS, view, or zone properties, click **Updates** -> **Advanced**.
2. To override the inherited properties, click **Override**.
3. Under **Dynamic** **Update** **Patterns**, select **Prevent** **dynamic** **updates** **to** **FQDNs** **matching** **these** **patterns** and specify patterns:
   
   - To add an FQDN pattern, click the Add icon and specify a pattern in the new table row.
   - To delete an FQDN pattern, select the checkbox next to the pattern and click the Delete icon.
4. Click **Save** **&** **Close**.

# Forcing Creation Timestamp Initialization for Unchanged Records

If the attributes of a resource record do not change in the result of a DDNS update, Grid Manager ignores the update and the record’s creation timestamp remains the same. This may cause valid records with outdated timestamp to be removed during DNS scavenging. To avoid this, you can set the record creation time to be modified even when the record data do not change at DDNS update. You can do this for the whole Grid, or for a specific DNS view or authoritative zone.

To force the creation timestamp initialization for unchanged resource records:

1. Open the *Grid DNS Properties*, *DNS View Properties*, or *Authoritative Zone Properties* editor.
2. For a DNS view or authoritative zone, click **Override**.
3. Select **Modify creation time even when resource record data is unchanged**.
4. Click **Restart** in the Grid Manager’s system messages banner for the setting to take effect.

For information about DNS scavenging, see [*DNS Record Scavenging*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405717).
