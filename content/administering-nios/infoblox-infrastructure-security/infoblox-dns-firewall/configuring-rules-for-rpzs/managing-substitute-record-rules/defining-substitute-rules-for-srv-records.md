---
title: "Defining Substitute Rules for SRV Records"
source: "/space/nios90/1320356972"
pageId: "1320356972"
---
A DNS RPZ SRV object represents an SRV resource record, which is also known as a service record. You can define a substitute for an SRV record. When the response to a user's query matches with an RPZ rule, then the combination of actual service, protocol, domain name and the zone is substituted with a combination of priority, weight, port and target details that you specify.  
To define substitute rules for SRV records:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(SRV** **Record)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(SRV** **Record)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(SRV* *Record)* *Rule* wizard:
   
   - **Display** **input** **as:** Select the format in which you want the SRV record to be displayed. When you select RFC 2782 format, the appliance follows the _*service._protocol.name* format as defined in RFC 2782. When you select Free format, enter the entire name in the Domain field.
   - **Service**: Specify the service that the host provides. You can either select a service from the list or type in a service, if it is not on the list. For example, if you are creating a record for a host that provides FTP service, select _ftp. To distinguish the service name labels from the domain name, the service name is prefixed with an underscore. If the name of the service is defined in RFC 1700, Assigned Numbers, use that name. Otherwise, you can use a locally-defined name. This field is disabled when you select **Free** **Format** as the display input.
   - **Protocol**: Specify the protocol that the host uses. You can either select a protocol from the list or type in a protocol, if it is not on the list. For example, if it uses TCP, select _tcp. To distinguish the protocol name labels from the domain name, the protocol name is prefixed with an underscore. This field is disabled when you select **Free** **Format** as the display input.
   - **Domain:** If Grid Manager displays a zone name, enter the name here to define an SRV record for a host or subdomain. The displayed zone name can either be the last selected zone or the zone from which you are adding the SRV record. If no zone name is displayed or if you want to specify a different zone, click **Select Zone**. When there are multiple zones, Grid Manager displays the *Zone Selector* dialog box. Click a zone name in the dialog box, and then enter the name to define the SRV record. The SRV record name is used to determine the substitute.
   - **Preview**: After you enter all the information, this field displays the FQDN.
   - **DNSView:** Displays the DNS view to which the selected RPZ belongs.
   - **Priority**: Select or enter an integer from 0 to 65535. The priority determines the order in which a client attempts to contact the target host; the domain name host with the lowest number has the highest priority and is queried first. Target hosts with the same priority are attempted in the order defined in the **Weight** field.
   - **Weight**: Select or enter an integer from 0 to 65535. The weight allows you to distribute the load between target hosts. The higher the number, the more that host handles the load (compared to other target hosts). Larger weights give a target host a proportionately higher probability of being selected.
   - **Port**: Specify the appropriate port number for the service running on the target host. You can use standard or nonstandard port numbers, depending on the requirements of your network. You can select a port number from the list or enter an integer from 0 to 65535.
   - **Target**: Enter the canonical domain name of the host (not an alias); for example, [www2.corpxyz.com](http://www2.corpxyz.com).
   - **Comment**: Optionally, enter additional information about the SRV record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
