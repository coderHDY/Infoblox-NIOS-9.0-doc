---
title: "Integrating Cisco ISE with NIOS"
source: "/space/nios90/330104909"
pageId: "330104909"
---
This section describes how to integrate Cisco ISE (Identity Services Engine) into the NIOS appliance to enhance identity management across devices and applications that are connected to your network routers and switches. It provides guidelines about how to subscribe and publish contextual data, and add notification rules. By integrating Cisco ISE, you can gain greater visibility in user and device information, thereby enhances security across your network resources. It includes the following:

*[toc]*

# Cisco ISE

With the rapid growth of BYOD (Bring Your Own Device) trend, the complexity of securing network resources has become more challenging. To ensure data privacy and security of all network resources against threats, Infoblox introduces the **Ecosystem** feature that allows you to expand the visibility of networks, users, and devices. Using this feature improves overall IT operations by sharing information between network and security teams.  
Integrating Cisco ISE server into NIOS enables NIOS and Cisco ISE to exchange valuable network, user, device, and security-event information, enriching both Infoblox DDI and Cisco ISE data. Cisco ISE is a centralized security solution (Network Access Control) that automates and enforces context-aware security access to network resources.  This feature ensures that only the authorized users from legitimate devices get access to the services they need.

> **warning**
>
> ### Note
> 
> - NIOS does not support IPv6 communication with Cisco ISE through pxGrid.
> - From NIOS 9.0 onwards, Cisco endpoint for pxGrid 1.0 is not supported.

When you configure a Cisco ISE, you can do the following:

- **Subscribe** **to** **contextual** **data**: NIOS acts as a client to the Cisco ISE and collects information about the subscribed data types. You can configure extensible attributes without restricting them to specific object types, and then map these extensible attributes to Cisco ISE data to collect additional information. You can view subscribed information collected from the Cisco ISE in the appropriate tabs (**IPAM**, **IP** **Map** panel, and **Network** **Users**) of the Infoblox GUI. You can also monitor subscription data using the **Subscription** report. For information, see [*Subscription Data*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards/ecosystem-dashboards).
- **Publish contextual data** - You can publish contextual data from NIOS to specific Cisco ISE based on the conditions and criteria specified in the notification rules. For more information about configuring notification rules, see [*Configuring Notification Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules).

# Supported Integrations

NIOS supports the integration of Cisco ISE versions 2.6 and 2.7, and 3.0, and  3.1.

# Administrative Permissions

By default, only superusers can add, edit, and delete Cisco ISEs. Limited-access admin groups can access Cisco ISEs only if their administrative permissions are defined. For information about administrative permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions).

# Prerequisites to Integrate Cisco ISE with NIOS

Do the following before you begin using this feature on NIOS:

| **License** | **Event Types** |
| --- | --- |
| **RPZ** | DNS RPZ |
| **Threat** **Protection** | Security DNS Infrastructure Protection |
| **DNS,** **DHCP, and** **MSMGMT** | IPAM |
| **DNS** **and** **DHCP** | DHCP Lease |

For information about how to install licenses, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0).

- Cisco ISE uses SSL certificates as the method of authentication. You must upload the client certificate and client key when configuring the Cisco ISE server. You can include both client certificate and key in a single file and then upload.  
  Note to make sure to use the host name of the Grid member that is selected as the subscribing member. The host name of the subscribing member must match with the Common Name that you mention while generating the certificate.
- For the bulk download certificate, download the server certificate from the monitoring node. If the admin node and monitoring node are on one node, then download the certificate from the admin node.  
  Log into Cisco ISE and download the default self-signed server certificate (**Administration** -&gt; **System** -&gt; **Certificates** -&gt; **Export**).
- For the CA certificate, download the CA certificate from the admin node or the self-signed certificate (**Administration** -&gt; **System** -&gt; **Certificates** -&gt; **Export**).
- Register NIOS as a client on the Cisco ISE. You must enable the **Auto-Registration** option on the Cisco ISE: From the **Administration** menu -&gt; click **pxGrid Services**, and then click **Enable Auto-Registration**. For more information, refer to Cisco ISE documentation. When you register NIOS successfully, you can view infoblox_client_subscribe_xxxx and infoblox_client_publish_xxxx, where xxxx is a number generated based on the IP of the subscribing member on the Cisco ISE. If auto-registration is not enabled, approve the pxGrid client after registration. If you change the certificates, Cisco ISE may not register the client successfully. In this case, delete the related pxGrid client from the Cisco ISE server, which is automatically created again.
- Enable the Identity Mapping feature on the NIOS appliance:
  
  1. From the **Grid** tab, select the **Grid Manager** tab -&gt; **Grid Properties** -&gt; **Edit** from the Toolbar.
  2. In the *Infoblox* *Grid Properties Editor*, select the **General** tab -&gt; **Advanced** tab, select the **Enable network users feature** checkbox.
- To publish data:
  
  - To publish dynamic data, such as DHCP lease and IPAM information, make sure that you approve **Infoblox_DHCP** and **Infoblox_IPAM** on the Cisco ISE, and then configure notification rules as described in [*Configuring Notification Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules).  
    .

> **warning**
>
> ### Note
> 
> Refer to Cisco ISE documentation for information about how to perform auto-registration, creating authorized groups, and approving dynamic topics.

# Limitation of Integrating Cisco ISE with NIOS

A limitation of the Cisco ISE and NIOS integration is that if the Grid Master is the subscribing member and you promote a Grid Master Candidate to the Grid Master, then you have to create a client certificate for the promoted Grid Master.



# Configuring Cisco ISE Endpoints Using Outbound Endpoint

You can configure the supported versions of Cisco ISE servers on the NIOS appliance. You can subscribe for identity information that you wish to collect from the Cisco ISE, such as user name, domain name, VLAN, session state, SSID, endpoint profile, and security group. You can also add extensible attributes without restricting it to specific object types, and map these extensible attributes with the Cisco ISE field types to collect additional information. Note that you can subscribe to only one Cisco ISE per member and each member can subscribe to only one Cisco ISE. You can publish DNS Infrastructure Protection and RPZ notifications, DHCP and IPAM information from NIOS to Cisco ISEs based on the notification rules that you have configured. You can view the subscribed information from the IPAM tab and the IP Map panel. Make sure that you synchronize time between the managing member and Cisco ISE.

To configure the Cisco ISE endpoint using the **Outbound** **Endpoint** tab, complete the following:

1. From the **Grid** tab, select the **Ecosystem** tab -&gt; **Outbound Endpoint** tab and then click **Add** -&gt; **Add Cisco ISE** **Endpoint** from the Toolbar.
2. In the **Add Cisco ISE Endpoint** wizard:
   
   - **Server Address**: Enter the FQDN of the Cisco ISE server.
   - **Name**: Specify a name for the endpoint.
   - **Subscribing** **Member**: Select a Grid Master Candidate that you want to subscribe as the client on the Cisco ISE server. Or, you can select the current Grid Master as the subscribing member. This member interacts with the Cisco ISE to obtain contextual information for the subscribed data types.
   - **Vendor Type**: The vendor type associated with the endpoint. This is optional.
   - **Client** **Certificate**: Click **Select** to upload the client certificate. In the *Upload* dialog box, click Select to navigate to the certificate, and then click **Upload**.
   - **Manage** **Certificates**: Click **CA** **Certificates** to upload the self-signed certificate or CA certificate. In the *CA* *Certificates* dialog box, click the Add icon, and then navigate to the certificate to upload it.
   - **WAPI** **Integration** **Username**: If you have included at least one "wapi" related field in your action template, you must configure WAPI integration; otherwise the WAPI step fails due to an authorization error. Enter the user name of the admin user you want to designate for Cisco ISE outbound notifications. The appliance ignores the **Auth** **Username** and **Auth** **Password** for WAPI related steps in any action templates if WAPI integration is configured.
   - **WAPI** **Integration** **Password**: Enter the password of the admin user you have designated for Cisco ISE outbound notifications.
   - **Test** **Connection**: Click this to validate the endpoint settings and test the connectivity between the Grid Master and the endpoint. It also validates the certificate that you uploaded and tests the connection between the Grid Master Candidate that is assigned as the outbound member and the endpoint. Grid Manager displays a message indicating whether the connection is successful. Note that the test does not validate the user name and password for the endpoint. It only tests the basic connection between the Grid Master and the endpoint, and validates the certificate.
   - **Comment**: Enter additional information about the Cisco ISE endpoint.
   - **Disable**: Select this checkbox if you want to save the configuration but do not want to use it yet. You can clear this checkbox when you are ready to use this configuration.
   - Click **Next** to set the duration of time that the endpoint waits for a response from the outbound member. Complete the following to specify session timeout value:
     
     1. **Timeout**: Specify the session timeout value for the endpoint. The default value is 30 seconds.
     2. **Log Level**: From the drop-down list, select the severity level for the events. The severity level you select here determines the type of events that are being logged. This can be **Debug**, **Info**, **Warning**, or **Error**. When you select **Debug**, all fields or variables used in the events that were sent to the endpoint are logged, including deduplicated events for RPZ hits. Note that setting this to **Debug** might slightly affect the performance of your production system.
     3. **Template**: Click **Select Template** to select a session management template.
     4. **Vendor Type**: Displays the vendor information for the endpoint.
     5. **Template Type**: Displays the Session Management template.
     6. **Parameters**: Displays the parameters of the template you select. You can access these values in the notification rules.
3. Click **Next** to specify the data types that you are interested to obtain from the Cisco ISE. The Cisco ISE shares information only for the subscribed data types. Complete the following to specify data types you want to collect from the Cisco ISE server:
   
   - **Subscription Settings**: Select the predefined data types to which you want to subscribe from the **Available Data Type** table. Use the arrows to move data types from the **Available Data Type** table to the **Selected Data Type** table. NIOS receives information for all data types in the **Selected Data Type** table.
   - **Map other data types to Extensible Attributes:** You can create extensible attributes and map these extensible attributes to receive additional Cisco ISE data values, such as IP address, MAC, NAS IP Address, NAS Port ID, EPS Status, Posture Status, Posture Timestamp, Endpoint Profile Name, Account Session ID, and Audit Session ID. Click the Add icon and map a Cisco ISE data type to an extensible attribute. You can also select a row and click the Delete icon to delete it.
4. Click **Next** to add data types that you want to publish to the Cisco ISE server. Use the arrows to move data types from the **Available** table to the **Selected** table. NIOS publishes information only for the data types that are added in the **Selected** table.
5. Click **Next** to add extensible attributes for the endpoint.
6. Save the configuration.

# Modifying Cisco ISE Configurations Using Outbound Endpoint

You can select data types that need to be published from NIOS to Cisco ISE after you have configured the Cisco ISE. You can modify the Cisco ISE configurations, as follows:

1. From the **Grid** tab, select the **Ecosystem** tab -&gt; **Cisco** tab, click the **Action** icon next to the server name and select **Edit** from the menu.
2. The *Cisco* *ISE* *Server* editor provides the following tabs from which you can modify data:
   
   - **General**: You can modify data in this tab as described in Configuring Cisco ISE Endpoints Using Outbound Endpoint above.
   - **Subscription**: You can edit data types that you have subscribed. You can use the arrows to move data types from the **Available** **Data** **Type** table to the **Selected** **Data** **Type** table and vice versa. The appliance receives information for all data types in the **Selected** **Data** **Type** table and extensible attributes that are configured.
   - **Publication**: To publish dynamic data from NIOS, you must first configure notification rules, as described in [*Configuring Notification Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules). You can add data types that you want to publish to Cisco ISE server by using the arrows to move data types from the **Available** table to the **Selected** table and vice versa. The appliance publishes information only for the data types that are added in the **Selected** table.
   - **Extensible** **Attributes**: You can add, modify, and delete extensible attributes that are associated with the Cisco ISE server. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
3. Save the changes.

# Overriding Subscription Settings

You can override subscription settings and mapped extensible attributes at the network container, network, and DHCP range levels. By default, networks inherit subscription settings from those configured while adding the Cisco server. You can override these settings and subscribe new values at the DHCP range, network container, or network level. A network inherits subscription settings from its parent object. If you override the values at the network container level, then the network inherits the network container values. Otherwise, the network continues to inherit the values configured from the Cisco ISE. A shared network without a parent network container continues to inherit settings from the Cisco ISE.  
To override an inherited value, click **Override** next to it and complete the appropriate fields. When you click **Override**, the appliance displays the value inherited from its parent object (if any).  
To override subscription settings and mapped extensible attributes:

1. **Network** **Level**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* checkbox, and then click the Edit icon.  
   **Network** **Container**: From the **Data** **Management** tab, select the **IPAM** tab -&gt; *network container* checkbox, and then click the Edit icon.  
   **DHCP** **Range** **Level**: From the **Data** **Management** tab, select the **DHCP** tab -&gt; **Networks** tab -&gt; **Networks** -&gt; *network* -&gt;* addr_range* checkbox, and then click the Edit icon.
2. In the *Network* *or* *Range* editor, click **Toggle** **Advanced** **Mode** if the editor is in basic mode, and then click the Cisco ISE tab.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Viewing Identity Mapping Information

To view user information, you must first enable identity mapping feature at the Grid level. For information about enabling Identity Mapping feature, see [*Enabling Identity Mapping*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-identity-mapping-information).

> **warning**
>
> ### Note
> 
> You do not need an **MSManagement** license to enable the identity mapping feature.

You can view user information in the **Network** **Users** tab. For more information, see [*Viewing Identity Mapping Information*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/managing-ip-addresses/viewing-identity-mapping-information).

# Deleting Cisco ISE Servers

When you delete a Cisco ISE, the appliance moves it to the Recycle Bin, if enabled. You can later restore it if needed. To delete a Cisco ISE server:

1. From the **Grid** tab, select the **Ecosystem** tab &gt; **Cisco** tab -&gt; *Cisco* *ISE* *server* checkbox, and then click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes** to delete the Cisco ISE server.

# Notifications Rules and Templates

Supported events for this endpoint are:

- IPAM
- DHCP
- DNS RPZ
  
  - ATC_HIT_TYPE filter.
  - Allows you to publish ATC hits and Threat Insight event to pxGrid.
  - Enable Outbound Cloud Client.
- Security DNS Infrastructure Protection**, **for more information about adding the notification rules, see [*Configuring Notification Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules)**. **

Sample templates for Cisco ISE are:

**Session template**:

<sup>{
    "version": "6.0",
    "vendor_identifier": "pxgrid",
    "name": "PxgridSession",
    "type": "PXGRID_ENDPOINT",
    "comment": "Pxgrid session template",
    "path": "/wapi/v2.9/",
    "override_path": true,
    "timeout": 123,
    "keepalive": true,
    "retry": 4,
    "retry_template": 2,
    "rate_limit": 200
}
</sup>

DHCP Action template:

<sup>{
    "version": "6.0",
    "name": "Pxgrid Event",
    "type": "PXGRID_EVENT",
    "event_type": ["RPZ","LEASE","ADP","IPAM"],
    "action_type": "Pxgrid Action IPAM",
    "comment": "Pxgrid template",
    "content_type": "application/json",
    "vendor_identifier": "pxgrid",
    "headers": {
        "User-Agent": "Outbound API 0.1 rrtest"
    },
    "transport": {
        "path": "/wapi/v2.9",
        "content_type": "application/json",
        "override_path": true
    },
    "steps":
    [
      {
            "name": "DHCP event",
            "operation": "PX_SEND_DHCP_LEASES"
      }
    ]
}
</sup>

IPAM Action template:

<sup>{
    "version": "6.0",
    "name": "Pxgrid Event",
    "type": "PXGRID_EVENT",
    "event_type": ["RPZ","LEASE","ADP","IPAM"],
    "action_type": "Pxgrid Action IPAM",
    "comment": "Pxgrid template",
    "content_type": "application/json",
    "vendor_identifier": "pxgrid",
    "headers": {
        "User-Agent": "Outbound API 0.1 rrtest"
    },
    "transport": {
        "path": "/wapi/v2.9",
        "content_type": "application/json",
        "override_path": true
    },
    "steps":
    [
      {
            "name": "IPAM event",
            "operation": "PX_SEND_IPAM"
      }
    ]
}
</sup>

QUARANTINE Action template:

<sup>{
    "version": "6.0",
    "name": "Pxgrid Event",
    "type": "PXGRID_EVENT",
    "event_type": ["RPZ","LEASE","ADP","IPAM"],
    "action_type": "Pxgrid Action IPAM",
    "comment": "Pxgrid template",
    "content_type": "application/json",
    "vendor_identifier": "pxgrid",
    "headers": {
        "User-Agent": "Outbound API 0.1 rrtest"
    },
    "transport": {
        "path": "/wapi/v2.9",
        "content_type": "application/json",
        "override_path": true
    },
    "steps":
    [
      {
            "name": "Quarantine",
            "operation": "PX_SEND_QUARANTINE"
      }
    ]
}</sup>

For more information about templates, see [*About Outbound Templates*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/about-outbound-templates).
