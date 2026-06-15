---
title: "Managing DNS Traffic Control Servers"
source: "/space/nios90/281215057"
pageId: "281215057"
---
DNS Traffic Control servers are objects that are associated with synthesized A, AAAA, SRV, or CNAME records. DNS Traffic Control servers can be in multiple pools and can be the destination for multiple topology rulesets. You can disable a server while in use, but note that this affects the pools that are associated with the server. You cannot disable a server if it is the last active server for any pool with which it is associated. To disable such a server, first remove it from the associated pools and topology rulesets.

# Configuring DNS Traffic Control Servers

You can add a DNS Traffic Control server on the **Traffic Control** tab. Alternatively, you can do this on the **DNS** -&gt; **Zones** tab or **Members/Servers** tab by selecting an existing A, AAAA, or host record in the table, and then clicking **Create** **DTC** **Server** in the Toolbar or in the record's action menu.

You can also add a DTC server on the **Data** **Management** -&gt; **IPAM** tab based on a selected existing A or host record. You can do so on both **IP** **Map** and **List** subtabs.

If you use multi-tier architecture and want to monitor the availability of separate components of the DNS Traffic Control server, you can add a health monitor for an individual IP address or domain name of the server. You can do it after you have initially configured the server. For information, see Modifying DNS Traffic Control Servers below.

To configure a DNS Traffic Control server, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab.
2. In the Toolbar, click the arrow next to the Add icon and select **Server**.
3. In the *DTC* *Server* *Wizard*, under **Select** **an** **existing** **DNS** **record** **or** **enter** **the** **Name** **and** **Host** **fields**, perform one the following:
   
   - Optionally, click **Select** and choose an existing DNS record which will pre-populate the server information:
     
     1. Select a zone using the filter and click **Apply**.
     2. Select the record type, **Host**, **A**, or **AAAA**, by which to filter the records list.
     3. Click the required record name to select it.
   - Specify the DTC server name and host:
     
     - **Name**: Enter the name of the DTC server.
     - **Host**: Specify the server host by selecting and specifying one of the following:
       
       - **IP** **Address**: The DTC response from the server will contain an auto-created A (IPv4) or AAAA (IPv6) record with this IP address.
       - **Domain** **Name**: The DTC response from the server will contain an auto-created CNAME record that uses this domain name.
         
         This step only applies if you create a DTC server from the **Traffic** **Control** tab. If you create a DTC server on the **DNS** -&gt; **Zones**, **DNS** -&gt; **Members/Servers** tab, or **Data** **Management** -&gt; **IPAM** tab, the record is already selected so this step is not available in the *DTC* *Server* *Wizard.*
4. **Auto-create DTC records**: If this is enabled and the Host field contains an IP address, an A (IPv4), or AAAA (IPv6) record will be created. If the Host field contains a domain name, a CNAME record will be created. If you do not enable auto-created DTC records, you must create those records manually. For more information, see Managing DTC Server Records below.  
   A record type that corresponds to the Host field must exist in order for the DTC Server to return a response.
5. **Comment**: Enter additional information about the server.
6. **Disabled**: Select this to disable the server.
7. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
8. To schedule the change, click **Next** or **Schedule** **for** **Later**. In the *Schedule* *Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.
9. Save the configuration.

# Managing DTC Server Records

You can create A, AAAA, CNAME, SRV, and NAPTR records in a DTC server similar to the NAPTR record in a DNS zone.

A NAPTR (Name Authority Pointer) record specifies a rule that uses a substitution expression to rewrite a string into a domain name or URI (Uniform Resource Identifier). A URI is either a URL (Uniform Resource Locator) or URN (Uniform Resource Name) that identifies a resource on the Internet. For information about NAPTR records, see [*Managing NAPTR Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records).

You can assign multiple A, AAAA, and NAPTR records simultaneously to a DTC server or only one CNAME record. An enabled CNAME record cannot coexist with an enabled A, AAAA, or NAPTR record. A disabled CNAME record cannot coexist with an enabled CNAME record.

This section describes how to add, modify, and delete records in a DTC server. It includes the following sections:

- Adding DTC Records
- Viewing DTC Records
- Modifying DTC Records
- Deleting DTC Records

# Adding DTC Records

To add a DTC record, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic Control **tab.
2. Click the server name to which you want to add the records. Details of the records added to the server are displayed.
3. Click the arrow next to the **Add** icon and select the type of record you want to add. (A Record, AAAA Record, CNAME Record, SRV Record, NAPTR Record, or Unknown record).
4. Enter the following information in the *Add* *&lt;Record_Type&gt; Record* wizard:
   
   - For an A record, complete the following:
     
     - **IP** **address**: Enter an IPv4 address for the A record on the DTC server.
     - **Comment**: Optionally, enter additional information about the A record.
     - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
   - For an AAAA record, complete the following:
     
     - **IP** **address**: Enter an IPv6 address for the AAAA record on the DTC server.
     - **Comment**: Optionally, enter additional information about the AAAA record.
     - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
   - For a CNAME record, complete the following:
     
     - **Canonical** **name**: Enter the complete canonical (or official) name of the host.
     - **Comment**: Optionally, enter additional information about the CNAME record.
     - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
   - For a NAPTR record, complete the following:
     
     - **Service**: Specifies the service and protocol used to reach the domain name that results from applying the regular expression or replacement. You can enter a service or select a service from the list.
     - **Flags**: The flag indicates whether the resulting domain name is the endpoint URI or if it points to another record. Select one of the following:
       
       - **U**: Indicates that the output maps to a URI.
       - **S**: Indicates that the resulting domain name has at least one SRV record.
       - **A**: Indicates that the resulting domain name has at least one A or AAAA record.
       - **P**: Indicates that this record contains information specific to another application.  
         Leave this blank to indicate that the DNS client must use the resulting domain name to look up other NAPTR records. You can use the NAPTR records as a series of rules that are used to construct a URI or domain name.
     - **Order**: Select an Integer from 10 to 100, or enter a value from 0 to 65535. This value indicates the order in which the NAPTR records must be processed. The record with the lowest value is processed first.
     - **Preference**: Select an Integer from 10 to 100, or enter a value from 0 to 65535. Similar to the **Preference** field in MX records, this value indicates which NAPTR record should be processed first when the records have the same Order value. The record with the lowest value is processed first.
     - **REGEX**: The regular expression that is used to rewrite the original string from the client into a domain name. RFC 2915 specifies the syntax of the regular expression. Note that the appliance validates the regular expression syntax between the first and second delimiter against the Python re module, which is not 100% compatible with POSIX Extended Regular Expression as specified in the RFC. For information about the Python re module, refer to [*http://docs.python.org/release/2.5.1/lib/module-re.html*](http://docs.python.org/release/2.5.1/lib/module-re.html)[.](http://docs.python.org/release/2.5.1/lib/module-re.html)
     - **Replacement**: This specifies the domain name for the next lookup. The default is a dot (.), which indicates that the regular expression in the **REGEX** field provides the replacement value. Alternatively, you can enter the replacement value in FQDN format.
     - **Comment**: Optionally, enter a descriptive comment for this record.
     - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
   - For an SRV Record, complete the following:
     
     - **Display input as**: Select the format in which you want the SRV record to be displayed. When you select RFC 2782 format, the appliance follows the _[*service._protocol.name*](http://service._protocol.name) format as defined in RFC 2782. When you select Free format, enter the entire name in the Domain field.
     - **Service**: Specify the service that the host provides. You can either select a service from the list or type in a service, if it is not on the list. For example, if you are creating a record for a host that provides FTP service, select _ftp. To distinguish the service name labels from the domain name, the service name is prefixed with an underscore. If the name of the service is defined at [*http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml*](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml), use that name. Otherwise, you can use a locally-defined name.
     - **Protocol**: Specify the protocol that the host uses. You can either select a protocol from the list or type in a protocol, if it is not on the list. For example, if it uses TCP, select _tcp. To distinguish the protocol name labels from the domain name, the protocol name is prefixed with an underscore.
     - **Domain:** Specify the name determined by LBDN.
     - **Preview**: After you have entered all the information, this field displays the FQDN, which is the concatenation of the Service, Protocol, and Domain fields.
     - **Priority**: Select or enter an integer from 0 to 65535. The priority determines the order in which a client attempts to contact the target host; the domain name host with the lowest number has the highest priority and is queried first. Target hosts with the same priority are attempted in the order defined in the **Weight **field.
     - **Weight**: Select or enter an integer from 0 to 65535. The weight allows you to distribute the load between target hosts. The higher the number, the more that host handles the load (compared to other target hosts). Larger weights give a target host a proportionately higher probability of being selected.
     - **Port**: Specify the appropriate port number for the service running on the target host. You can use standard or nonstandard port numbers, depending on the requirements of your network. You can select a port number from the list or enter an integer from 0 to 65535.
     - **Target**: Enter the canonical domain name of the host (not an alias). For example, [www2.corpxyz.com](http://www2.corpxyz.com)
       
       In addition, you need to define an A record mapping as the canonical name of the host to its IP address.
     - **Comment**: Enter a descriptive comment for the record.
     - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
   - For an Unknown record:
     
     - **Domain name**: Enter the complete canonical (or official) name of the host.
     - **Comment**: Optionally, enter additional information about the CNAME record.
     - **Disable**: Select this checkbox to disable the record. Clear the checkbox to enable it.
5. To schedule the change, click **Next** or **Schedule** **for** **Later**. In the *Schedule* *Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.
6. Save the configuration and click **Restart** if it appears at the top of the screen.

# Viewing DTC Records

To view the records associated with a DTC server, go to the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab -&gt; *DTC* *server*. The Grid Manager displays the following for each DTC record:

- **Name: **The name of the record.
- **Type**: The type of record.
- **Data**: The data that the record contains. For a NAPTR record, this field displays the following data: Order, Preference, Flags, Services, REGEX, and Replacement.
- **Comment**: Comment that was entered for the record.
- **TTL**: The TTL (time-to-live) value of the record.
- **Disabled**: Indicates if the record is disabled.

You can perform the following:

- Click the Add icon to add a DTC record.
- Select a record and click the Edit icon to edit the configuration. You can also click the Action icon next to the record and select **Edit** from the menu.
- Select a record and click the Delete icon to delete it. You can also click the Action icon next to the record and select **Delete** from the menu.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/using-quick-filters).
- Click the Export icon to export the list of DTC records to a .csv file.
- Click the Print icon to print the list of DTC records.

# Modifying DTC Records

To modify a DTC record, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab -&gt; *DTC* *server*.
2. Select the DTC record you want to modify, and click the Edit icon.
3. The *DTC* *Record* editor contains the following tabs from which you can modify information:
   
   - **General**: You can modify most of the information, except for the read-only fields, such as the DNS view. For a description of the fields, see Adding DTC Records above.
   - **TTL**: You can modify the TTL setting. For information, see [*Specifying Time To Live Settings*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-time-to-live-settings).
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> Note
> 
> When you modify an existing A record, AAAA record, or a Host record connected to a DNS Traffic Control server, new DNS Traffic Control configurations are applied after the DNS Traffic Control health update or after the specified TTL expires for the given record.

# Deleting DTC Records

To delete a DTC record, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab -&gt; *DTC* *server*.
2. Select the DTC record you want to delete, and click the Delete icon.
3. When the confirmation dialog box displays, select **Yes**.

Grid Manager moves the DTC record to the Recycle Bin, from which you can restore or permanently delete the record. For information, see [*Using the Recycle Bin*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/using-the-recycle-bin)*.*

# Modifying DNS Traffic Control Servers

To modify a DNS Traffic Control server, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, click the Action icon next to the DTC server and select **Edit** from the menu.
2. The *DTC* *Server* editor contains the following tabs from which you can modify data.
   
   - **General**: This tab displays the **Name,** **Host**, **Auto-create** **DTC** **records**, and **Comment** that you entered while configuring the server. You can enable or disable the server. For information about how to modify the server data, see [*Configuring DNS Traffic Control Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/managing-dns-traffic-control-objects/managing-dns-traffic-control-servers/Managing+DNS+Traffic+Control+Servers#Configuring-DNS-Traffic-Control-Servers)*.* Additionally, specify the Server Name Indication setting:
     
     - **Use Alternate SNI Hostname**: If the SNI name is different from what is configured in the address field, select this checkbox and enter the required hostname by which an HTTPS health monitor should connect to the server.
     - **Health Monitors**: Define health monitors for the DTC server:
       
       1. Click the Add icon. A new row appears in the table.
       2. In **Health Monitor**, select the monitor type: icmp, http, https, sip, pdp, or snmp.
       3. In **Domain Name or IP Address**, type either the FQDN or the IP address to monitor.
       4. If required, add more health monitors for the server as described above. You can add up to ten health monitors per server.   
          In **Health Monitors from Pools**, you can see other health monitors assigned to the pools that the server belongs to. The availability requirement for the pools must be set to either “All” or “Any” for you to be able to add server-specific health monitors. For information, see [*Configuring DNS Traffic Control Pools*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/managing-dns-traffic-control-objects/managing-dns-traffic-control-pools).
       5. Save the configuration.
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with the server. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.*  
       
     For information on warnings related to **Auto Consolidated Monitor**, see [*Warnings for DNS Traffic Control Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/managing-dns-traffic-control-objects)*.*
3. To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule Change* panel, select **Later** and enter a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
4. Save the configuration.
