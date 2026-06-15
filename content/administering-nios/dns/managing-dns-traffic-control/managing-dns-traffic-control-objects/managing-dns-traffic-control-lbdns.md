---
title: "Managing DNS Traffic Control LBDNs"
source: "/space/nios90/299368879"
pageId: "299368879"
---
A DTC LBDN is a load balanced domain name object that is used by DNS Traffic Control to process DNS queries for load balanced resources. You can define multiple LBDNs on the NIOS appliance and associate extensible attributes to them. You can configure permissions for DTC LBDNs. For more information, see* *[*License Requirements and Admin Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755).

# Configuring DNS Traffic Control LBDNs

You can configure a load balancing method for each LBDN. You can assign multiple pools and a single load balancing method to an LBDN. You can associate or dissociate LBDNs with a zone. Note that zone transfers and incremental zone transfers ignore LBDNs. When you configure or modify DTC LBDNs, a service restart is required in order for the new configuration to take effect.

On the appliance, the DNS Traffic Control querying process generates A, AAAA, NAPTR, SRV or CNAME records for an LBDN, called LBDN records. LBDN records are served by DNS Traffic Control servers. An LBDN record must be associated with an authoritative zone. For more information about LBDN records, see Managing LBDN Records below.

To configure an LBDN, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, click the arrow next to the Add icon, and select **LBDN**.  
   or  
   From the **Data** **Management** tab -> **DNS** tab -> **Zones** tab -> *authoritative_zone* -> **Records** tab, click the Add icon, and select **Record** -> **DTC** **LBDN**.
2. In the *DTCLBDN* wizard, complete the following:
   
   - **Display** **Name**: Enter a display name for the LBDN.
   - **Patterns**: Click the Add icon to add an LBDN pattern. For more information, see [*Configuring LBDN Patterns*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/299368879/Managing+DNS+Traffic+Control+LBDNs#Configuring-LBDN-Patterns)*.*  
     To delete an LBDN pattern, select the checkbox next to the pattern and click the Delete icon.
   - **Load Balancing Method**: From the drop-down list, select the method you want to use for load balancing. You can select one of the following: **Global Availability**, **Source IP Hash,**** ****Ratio:Fixed**, **Round Robin**, and **Topology**. The default is **Round Robin**. For more information about the load balancing methods, see [*Load Balancing Methods for DNS Traffic Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404881).
   - **Topology** **Ruleset**: This is displayed only when you select the Topology load balancing method. In the drop-down list, only the topology rulesets with the Pool destination type are displayed. Select a topology ruleset for the Topology load balancing method. For more information, see [*Defining Topology Rulesets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1412137451)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664223/Configuring+Topology+Rules+and+Rulesets#bookmark2098)
   - **Persistence**: Select this checkbox and enter a value greater than zero seconds to enable persistence for the LBDN. You can specify a period between one second to 2 hours. Even if the DNS restart takes longer than the value specified in the **Persistence** field, the DNS server directs the request to the same server. If you specify zero, the appliance does not cache the requests. When you enable persistence for an LBDN, the appliance stores the results for specific LBDN responses in the DNS Traffic Control cache. When a request originates from the respective FQDN or an IP address within the specified period, the DNS server directs the request to the same server.  
     Note that when the persistence is enabled, cached results are not guaranteed to persist for the configured duration. The maximum size of the persistence cache is limited globally by the platform. When the limit exceeds the maximum size, the oldest results are deleted. The appliance might discard persistence results if the relevant configuration changes. HA DTC cache replication works on both active and passive nodes and during an HA failover, the DTC cache is replicated from the active node to the passive node.  
     If you send a DNS query with a DNSSEC option, an LBDN sends a response with a signature. When you enable persistence for different LBDN patterns in the DNS query, you will receive the same DNS response and signature.
     
     DTC cache replication in HA mode is supported only for IPv4 communications.
   - **Priority**: Select a priority value, **1** (High), **2** (Normal), or **3** (Low). The priority value is used when there are LBDNs that have patterns matching the same FQDN and that are assigned to the same zone. In this case, the matching LBDN with the highest priority is used. For example, an LBDN with "*.[foo.com](http://foo.com)" and an LBDN with "www.*.com" patterns can be linked to the same zone "[foo.com](http://foo.com)" if the LBDN with the "*.[foo.com](http://foo.com)" pattern has priority 1 and the LBDN with the "www.*.com" pattern has priority 2 or 3. If there are no matches, the default LBDN is used.
   - **Comment**: Enter additional information about the LBDN object.
   - **Auto Consolidated Monitors**: Select this option to enable auto managing DNS Traffic Control Consolidated Monitors on DNS Traffic Control Pools linked to the LBDN. This option will lock all the DNS Traffic Control Consolidated Monitor settings on affected DNS Traffic Control Pools, and creates a DNS Traffic Control Consolidated Monitor for each health monitor with the following settings:
     
     - Availability - ALL
     - Full health communication - Yes
     - Listen To members - all DNS Traffic Control members that serve particular LBDN.  
       The **Auto Consolidated Monitor** option also helps to synchronize the health statuses of DNS Traffic Control objects in the LBDN for each DNS Traffic Control Grid member, which means if one Grid member considers that the DNS Traffic Control Server is RED, this server will be RED for each Grid member performing the health check.  
       For information on Limitations and Warnings of the** Auto Consolidated Monitors** Option, see* *[*Limitations for DNS Traffic Control LBDN*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271694)*.*
   - **Disabled**: Select this to disable the LBDN.
3. Click **Next** and complete the following:
   
   - **Return these record types for the associated zones**: Select any or all of the following LBDN record types: **A**, **AAAA**, **NAPTR**, **SRV,** and **CNAME**. You must select at least one record type for the LBDN, otherwise the LBDN is disabled. The patterns and the record types can overlap with another LBDN that is linked to the same zone only if their priorities differ.  
       
     If you select the **A** or **AAAA** record type, the LBDN returns the corresponding record and/or a CNAME record when the client queries for any record type and if the server selected by DNS Traffic Control has the required data.  
       
     However, if the client queries for CNAME explicitly, ensure that you select the **CNAME** record type checkbox for the CNAME records to be returned.  
       
     If you select the **CNAME** or **NAPTR** record type, the LBDN returns the CNAME or NAPTR record respectively when the client queries for those records and if the server selected by DNS Traffic Control has the required data. As the CNAME response must be unique, the CNAME record type is unavailable for an LBDN if any pool in that LBDN uses the All Available load balancing method.
     
     Unlike other DNS Traffic Control** **record types, **SRV** record type has a name. If the QNAME matches the pattern in LBDN and the QTYPE is enabled, a server is selected and all the records of the QTYPE configured for the server are returned. DNS Traffic Control SRV name is not used in name matching during DNS resolution in BIND.
     
     To receive distinct responses, use separate LBDNs as well as separate servers for every service/protocol/domain combination.
     
     
   - **Associated Zones**: Click the Add icon to associate zones with the LBDN. Select a zone from the *ZoneSelector* dialog box and click **OK**. The appliance displays the following information:
     
     - **Zones**: The name of the selected zone.
     - **DNS View**: The DNS view associated with the selected zone (if there is more than one DNS view).
     
     The LBDN is active only when you associate zones with it. You can associate only authoritative forward-mapping zones with the LBDN. The LBDN must contain at least one matching pattern for the zone. For example, an LBDN with patterns "www.*.com" and "www**.***.net" may be linked to a zone "[foo.com](http://foo.com)". For more information, see Managing LBDN Records below.
   - You can also associate LBDNs with DNSSEC signed zones. For more information, see Associating LBDNs with DNSSEC Signed Zones below.
4. Click **Next** and click the Add icon to associate pools with the LBDN. Select a pool from the *DNS Traffic Control Pool Selector* dialog box and click **OK**. The appliance displays the following information:
   
   - **Name**: The name of the selected pool.
   - **Ratio**: The ratio of the associated server. You can edit this value.
   - **Comment**: Displays information that you specified for the pool.
   - **Members**: Displays the member associated with the pool.
   - **Order**: Displays the order of the pools.  
     To dissociate a pool associated with an LBDN, select the checkbox next to the respective pool name and click the Delete icon.
5. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
6. To schedule the change, click **Next** or **Schedule for Later**. In the *Schedule Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.
7. Save the configuration and click **Restart** if it appears at the top of the screen.

# Configuring LBDN Patterns

An LBDN pattern is a domain name. You can define a pattern with multiple * and ? in any position of the domain name. Note the following about * and ?:

- A sequence of *s has the same effect as a single *.
- A sequence of **?**s will match exactly as many octets as there are **?**s.
- A * terminates on label boundaries and will not match a label separator. For example, *.com matches [foo.com](http://foo.com) but not [www.foo.com](http://www.foo.com).
- A **?** does not match a label separator.
- An empty LBDN pattern will match the root and it is automatically changed to "." when you save the LBDN.
- An LBDN pattern matches an FQDN if the entire FQDN matches.
- LBDN patterns may contain special characters. For example, a\032 [b.com](http://b.com) contains two adjacent spaces.
- LBDN patterns do not support IDN and they will not convert Unicode to punycode. You can enter punycode, but note that the LBDN pattern matching does not support punycode.

> **warning**
>
> ### Note
> 
> There are many cases where the use of wildcards within LBDN patterns is advisable; however, Infoblox recommends using wildcards with caution in the left-most position because it may lead to unexpected behavior or responses. When in doubt, the most predictable behavior comes from using the target domain name as the pattern when configuring the LBDN.

# Managing LBDN Records

In order to manage an LBDN in an authoritative zone, you must enable the authoritative zone and associate it with the LBDN. If an LBDN pattern matches a zone name, the records of type "DTC LBDN Record" are created in that zone as proxies for the LBDN.

To view DTC LBDN records, complete the following:

- Select the **Data** **Management** tab -> **DNS** tab -> **Zones** tab -> *authoritative_zone* -> **Records** tab.

The record name is the zone-relative portion of the pattern, including wildcards. For example, when you link an LBDN with patterns "www[.*.](http://www/)com", "www.a*z.*.com", "*.com", "bar.*.net" to zone "[foo.com](http://foo.com)", the appliance creates three LBDN records with names "" (zone origin), "www", and "www.a*z" in the zone. These records will refer to their respective LBDN.  
You cannot modify LBDN records. The appliance creates or deletes LBDN records based on the matched LBDN patterns. When you delete an LBDN, the appliance automatically deletes linked zones associated with it and deletes all LBDN records. You can edit the pattern that is associated with the respective LBDN record. For more information, see Modifying DNS Traffic Control LBDNs below.

Note that an LBDN record is a separate object from the LBDN and each of these have separate permissions. For more information, see [*License*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[*Requirements*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[*and*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[*Admin*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755)[*Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271755).

> **warning**
>
> ### Note
> 
> **SRV** record type uses a name. If the QNAME matches the pattern and the QTYPE is enabled, then a server is selected and ALL records of the QTYPE configured for the server are returned. For distinct responses use separate LBDNs as well as separate servers for every service/protocol/domain combination. DTC SRV name is not used in name matching during DNS resolution in BIND.

# Associating LBDNs with DNSSEC Signed Zones

If a zone is DNSSEC signed, you can still associate an LBDN, but some restrictions apply. You can set either Signed or Unsigned mode for the response from DNSSEC signed zones.

The following restrictions apply in the Signed mode:

- You cannot assign an LBDN to a zone or unassign an LBDN from a zone while signing, i.e. key rollover, is in progress for that zone. For information about key rollovers, see [*About Key Rollovers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276)*.*
- If an LBDN is assigned to a zone for which signing is in progress, then all changes to that LBDN and its dependent configuration (including pools, servers, and topologies) are prohibited until signing completes. The only thing you can do while signing is in progress is to assign an LBDN already assigned to a signed zone to another unsigned zone.
- An LDBN assigned to a signed zone cannot use the All Available load balancing method or have a pattern with a wildcard in the zone. Also, you cannot sign an unsigned zone with such an LBDN assigned.

In the Unsigned mode, unsigned responses in signed zones are returned.

For more information about how to set the Signed or Unsigned mode, see [*Configuring Grid DNS Traffic Control Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665557).

> **warning**
>
> ### Note
> 
> You cannot assign any signed zone during staged Grid upgrade if not all of the NIOS appliances have been moved to a new software version. This restriction is working in both Signed and Unsigned modes.

# Modifying DNS Traffic Control LBDNs

To modify an LBDN, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, click the Action icon next to the LBDN name and select **Edit** from the menu.
2. The *DTC* *LBDN* editor contains the following tabs from which you can modify data. For information about how to modify data, see Configuring DNS Traffic Control LBDNs above[.](/wiki/pages/resumedraft.action?draftId=26774863#ManagingDNSTrafficControlObjects-bookmark2127)
   
   - **General**: This tab displays the **Display** **Name**, **Patterns**, **Load** **Balancing** **Method**, **Persistence**, **Priority**, and **Comment** of the LBDN object. Here you can also disable the LBDN.
   - **Associated** **Zones** **and** **Records**: This tab displays the record types that can be returned for the associated zones, the **TTL**, and the **Associated** **Zones**. You can select any or all of the following record types: **A**, **AAAA**, **SRV**, and **NAPTR**. Note that the default TTL value is 8 hours and is inherited from the associated zones of the Infoblox Grid. You can override this value or associate new zones with the LBDN to inherit a new value.
   - **Pools**: This tab displays the pools that are associated with the LBDN. You can delete an existing pool or add new pools.
   - **Extensible** **Attributes**: Add and delete extensible attributes that are associated with the LBDN. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
3. To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule* *Change* panel, select **Later** and enter a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)*.*
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Testing DNS Traffic Control LBDNs

You can select an LBDN and test the DTC response for the respective LBDN. To test an LBDN, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab.
2. In the **Traffic** **Control** panel, select the LBDN object that you want to test and click **Test** **LBDN** in the Toolbar.
3. In the *Test* *DTC* *LBDN* dialog box, complete the following:
   
   - **Query** **Source**: Enter the client IP address.
   - **Query** **Name**: Enter the FQDN of the record that you are requesting.
   - **Member**: Click **Select** to select the Grid member that will return the response. The dialog box displays the list of members that have a DTC license.
   - **Record** **Type**: Select a record type, **A**, **AAAA**, **SRV**, or **NAPTR** from the drop-down list.
4. Click **Start**.

The appliance displays the response for the request in the text output area. To clear the response from the text area, click **Clear**.
