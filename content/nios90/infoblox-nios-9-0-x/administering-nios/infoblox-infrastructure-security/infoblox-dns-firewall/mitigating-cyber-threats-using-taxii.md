---
title: "Mitigating Cyber Threats using TAXII"
source: "/space/nios90/280760093"
pageId: "280760093"
---
To mitigate the increasingly complex cyber attacks, you can enable the appliance to run a TAXII (Trusted Automated eXchange of Indicator Information) service to receive information on real-time threat incidents. The information in each threat incident is represented using the STIX (Structured Threat Information eXpression) language format. STIX is a standard language used to describe structured cyber threat information, which is shared between different TAXII clients.  
When you run the TAXII service on a Grid member, the appliance acts as a TAXII server that receives TAXII messages (for one or more specified STIX collection) from TAXII clients. The TAXII message typically contains a list of IP addresses (both IPv4 and IPv6) and domains. The member then communicates with the Grid Master and sends a request to create an RPZ rule on the specified RPZ based on the TAXII messages it receives. The RPZ rule created on NIOS is available in the **Response** **Policy** **Zones** tab, as shown in the RPZ Rules created for the Mapped RPZ and Collection figure below.

> **warning**
>
> **Note**
> 
> Once you start the TAXII server, the inbox for the configured collections is available at https://&lt;member address&gt;/services/inbox and the TAXII discovery service is available at https://&lt;member address&gt;/services/discovery, where &lt;member address&gt; is the MGMT or LAN IP address (IPv4 or IPv6 address of the port that is configured).



For more information about TAXII and STIX, refer to the following: * **[ ](https://taxii.mitre.org/)** *

* **[https://taxii.mitre.org/](https://taxii.mitre.org/)**   *

* **[http://taxiiproject.github.io/](http://taxiiproject.github.io/)** *

# Supported Appliances for TAXII Service

You can run the TAXII service on the following Infoblox appliance models: IB-1410, IB-1415, IB-1420, IB-1425, IB-VM-1410, IB-VM-1415, IB-VM-1420, IB-VM-1425, TE-815, TE-2215, TE-2225, IB-VM-4010, IB-4030-10GE, IB-VM-2220, IB-VM-2225, PT-1405, PT-2205 and PT-2205-10GE.

# Licensing Requirements and Permissions

To enable the TAXII service, you must install the **Security** **Ecosystem** license on any Grid member. You must also install an **RPZ** license on any Grid member in the Grid in order to create RPZ rules based on the TAXII messages. To allow a group to access the TAXII service, you can enable the group to authenticate with the TAXII server.  
To enable a group to access the TAXII server:

1. From the **Administration** tab, select the **Administrators** tab -&gt; **Groups** tab, and then click the Add icon.
2. In the *Add* *Admin* *Group* wizard, click the **Roles** tab and then complete the following in the **Allowed** **Interfaces** section:
   
   - **TAXII**: Select this checkbox to enable a group to authenticate with the TAXII server.
3. Save the configuration.

# Mapping RPZs with TAXII Collections

NIOS supports arbitrary set of RPZ rules mapped to the corresponding TAXII collection. To map an RPZ with a TAXII collection:

1. From the** Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Services** tab.
2. In the **Services** tab, select the *TAXII_member* checkbox, and then click **Edit** -&gt; **Member** **TAXII** **Properties** from the Toolbar.
3. In the *Member* *TAXII* *Properties* editor, complete the following:
   
   - **Response** **Policy** **Zone**: Click the Add icon and click **Select** **RPZ** to select an RPZ. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box from which you can select one.
   - **Collection**: Enter the name of the TAXII collection that will be mapped to the RPZ. Note that you can only use valid URI characters as collection names. You cannot use special characters or spaces.
   - **Add**: Click the Add icon to add the RPZ and collection name to the table.
   - **Save** **and** **Close**: Click this to save the configuration and close the editor.

You can do the following in this tab:

- To edit an entry in the list, click the checkbox beside an RPZ, and then click the Edit icon.
- To delete an entry in the list, select the checkbox beside an RPZ, and then click the Delete icon.

*Mapping* *RPZs* *with* *TAXII* *Collection*

*[drawio]*

*RPZ* *Rules* *created* *for* *the* *Mapped* *RPZ* *and* *Collection*

# Starting and Stopping the TAXII Service

To start the TAXII service:  
1. From the **Grid** tab, select the **Services** tab -&gt; *TAXII_member* checkbox and then click the Start icon from the vertical Toolbar.  
To stop the TAXII service:  
1. From the **Grid** tab, select the **Services** tab -&gt; *TAXII_member* checkbox and then click the Stop icon from the vertical Toolbar.

# Extensible Attributes for TAXII Service

You can define extensible attributes that are specific to the TAXII service. When you define TAXII specific extensible attributes, the RPZ rules created will have these attributes and their corresponding values (received in the TAXII messages) added automatically.  
For information about how to configure extensible attributes, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.

*Extensible* *attributes* *for* *TAXII* *service*

| **Attribute**** ****Name** | **Attribute**** ****Type** | **Description** |
| --- | --- | --- |
| TAXII_collection | String | The name of the TAXII collection the TAXII client delivered the message to. |
| TAXII_source | String | The IP address of the TAXII client that sent the TAXII message. |
| TAXII_member | String | The TAXII Grid member that receives TAXII message resulting in the creation of the RPZ rule. |
| TAXII_timestamp | Date/Integer | The timestamp when the TAXII message was received. |
| TAXII_user | String | The login name of the user the TAXII client connected as to the TAXII server on the member that received the message. |



#  Monitoring TAXII Server

You can monitor the status of the TAXII server, as described in *[Monitoring Grid Services](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-services)*. If there are any invalid TAXII messages, the appliance makes a syslog entry. For information, see *[Verifying RPZ in the Syslog](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/verifying-rpz-configuration)*. The appliance also sends an SNMP trap and an email notification, if configured. For information about setting SNMP and email notification, see *[Configuring SNMP](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp)*.
