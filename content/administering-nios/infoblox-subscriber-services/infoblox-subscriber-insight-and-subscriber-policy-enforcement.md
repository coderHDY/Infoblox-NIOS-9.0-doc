---
title: "Infoblox Subscriber Insight and Subscriber Policy Enforcement"
source: "/space/nios90/280791404"
pageId: "280791404"
---
The Infoblox Subscriber Insight solution provides a mechanism to monitor events related to the subscriber session. This solution allows you to identify subscriber devices, such as laptops, computers, tablets, and smartphones on your data networks that are violating RPZ rules. It can also find the type of domain the subscriber tries to access.

The Infoblox Policy Enforcement solution analyzes the DNS queries, identify subscribers and correlates the information to enforce the subscriber security policies per subscriber.

The solution works by receiving RADIUS accounting messages from a RADIUS server through the NAS (Network Access Server) gateway. The DNS server caches the RADIUS accounting messages, which includes subscriber information and subscriber security policies. The subscriber security policy specifies the RPZs that are applicable for a subscriber. DNS RPZs are used to determine the bad FQDNs. If a subscriber, who has opted for the service, queries an FQDN that is listed in the RPZ, the DNS resolver performs RPZ actions for the subscriber query.

Subscribers behind a home gateway network are identified by their local ID or client ID, which is the MAC address of the subscriber device. The local ID is received by the DNS server as part of the RADIUS accounting message. As all subscribers behind a home gateway network will have the same IP address of the home router, the local ID is used to create separate records for each of the subscribers in the subscriber cache. Each subscriber behind the home gateway network can have their own policy. Note that if a guest connects through a home gateway network, then the default home router policy is applied to the guest device.

As illustrated in the figure below, the Infoblox DNS member, with subscriber collection service enabled, receives RADIUS accounting messages, which includes subscriber information and the subscriber security policies, through the NAS gateway. The subscriber security policy specifies the RPZs that are applicable for a subscriber. When a subscriber queries an FQDN that is listed in the RPZ, the DNS resolver performs RPZ actions for the subscriber query. The NIOS appliance logs all RPZ related events, conformed to CEF (Common Event Format), in the syslog. The CEF logs include the subscriber identity information, thus identifying the subscribers that are violating RPZ rules. In a Grid with a reporting server, you can view the *Detailed RPZ Violations by Subscriber ID* report that contains information about RPZ hits by the users. For information about detailed RPZ violations by subscriber ID, see [*About Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911).

*Infoblox Subscriber Insight and Subscriber Policy Enforcement*

*[drawio]*

# Supported Subscriber Insight and Subscriber Policy Enforcement Appliances

Infoblox Subscriber Insight and Subscriber Policy Enforcement is currently supported on the following Infoblox appliances (physical and virtual):

- TE-2205
- TE-2215
- TE-2225
- TE-4015
- TE-4025
- TE-4126
- TE-2306
- TE-2326
- TE-4106
- IB-FLEX (medium, large, and medium large). You can enable the DNS cache acceleration feature on IB-FLEX appliances.

# License Requirements and Admin Permissions

To configure Infoblox Subscriber Services, you must install the **RPZ** license. But for IB-FLEX members, the **RPZ** license is included in the **FLEX Grid Activation** license. For information about how to install licenses, see [*Managing Licenses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194).

Only superusers can configure Infoblox Subscriber Services. Limited-access admin groups can perform this operation only if their administrative permissions are defined. For information about administrative permissions, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).

# Guidelines for Using Infoblox Subscriber Insight and Subscriber Policy Enforcement

Following are some guidelines to take into consideration when using Infoblox Subscriber Threat Insight and Subscriber Policy Enforcement:

- When the subscriber service allowed blocklist (ABL) feature is enabled, no other service must be enabled in NIOS.
- A Grid member can be associated with only one subscriber site.
- The Grid members in the subscriber site must be added as primary or secondary name servers for all RPZs.
- The subscriber collection service does not support an IPv6 only Grid member.
- All NAS gateways in a subscriber site must be configured for IPv4 only and must use the same port.
- The subscriber data is not persistent and will be cleared from the subscriber cache if you stop the subscriber collection service on all the members of a subscriber site.
- The NAS gateways can send the RADIUS accounting messages to only one Grid member (collector member) in a subscriber site.
- Overlapping networks are not supported in the Subscriber Insight and Subscriber Policy Enforcement solutions.

# Configuring Infoblox Subscriber Insight and Subscriber Policy Enforcement

To set up Infoblox Subscriber Insight and Subscriber Policy Enforcement, you must install a Grid-wide or a member level **RPZ** license and configure the Grid members to serve recursive DNS queries. Note that for IB-FLEX members, you do not need to install an **RPZ** license as the **FLEX Grid Activation** license includes the **RPZ** license. You must also configure a subscriber site and add Grid members (collector members and RPZ members) and NAS (Network Access Server) gateways to receive RADIUS accounting messages from a RADIUS server. The RADIUS accounting messages include subscriber information (such as subscriber source IP address, subscriber ID, local ID for networks with overlapping IP addresses) and subscriber security policies. The source IP address, subscriber ID, local ID, and the subscriber security policy is mapped in the DNS cache. The collector member caches the subscriber information and the policies, which are replicated to all Grid members within the subscriber site. The RPZ members in the subscriber site applies policies for incoming subscriber queries and performs RPZ actions.

The DNS Cache Acceleration processes incoming EDNS0 packets that contains the local ID. The NIOS appliance matches the local ID against the DNS server as part of the RADIUS accounting message and populates the subscriber cache in DNS Cache Acceleration with the parental control policy information. The DNS Cache Acceleration answers all queries that comes from the DNS Cache Acceleration for each of these subscribers listed in the subscriber cache. These changes are valid for individual IP addresses with local ID only and the subnet local ID is considered as 0. For more information, see [*Using the NIOS CLI*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/284230124) and  for viewing the DNS accelerator cache, [*Clearing DNS Cache*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272937) in the *Infoblox DNS Cache Acceleration Administrator Guide*.

Note the following while configuring Infoblox Subscriber Insight and Subscriber Policy Enforcement:

- You can configure up to a total of 32 RPZs in the default view and set the priorities for the RPZs. Subscribers with subscriber security policies can set the policy to any of the 32 RPZs and the RPZs are applied to selective subscribers depending on the subscriber security policies. But for subscribers who have not opted for the service, only the first five (top priority) RPZs are applied. Note that once the first hit matches, the rest of the RPZs will not be looked up.
- For DNS queries received from unknown subscriber source IP addresses, the DNS server processes the queries based on the standard DNS query processing.

To configure the Infoblox Subscriber Insight and Subscriber Policy Enforcement on supported Infoblox appliances, complete the following:

1. Obtain and install a valid Grid-wide or member level **RPZ** license. But for IB-FLEX members, the **RPZ** license is included in the **FLEX Grid Activation** license. For information about licenses, see License Requirements and Admin Permissions below. You can also configure a reporting appliance in the Grid to see subscriber reports that contain statistics about RPZ related events.
2. Configure admin permissions so admin users can manage the Infoblox Subscriber Service related tasks. For information about how to configure admin permission, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Create a subscriber site with at least one Grid member and a NAS gateway. For information, see [*Adding Subscriber Sites*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641). It is recommended to add more than one Grid member to the subscriber site for redundancy. You can add a maximum of five Grid members to the subscriber site.
4. Start the subscriber collection service on all the members in the subscriber site, as described in Starting and Stopping the Subscriber Collection Service below.
5. Create RPZs in the default DNS view and specify the order of RPZs. Note that only the default DNS view is supported for configuring RPZs for Subscriber Services. For information about creating RPZs, see [*Configuring Local RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177). For information about specifying the order of RPZs, see [*Reordering RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532). You can create a total of 32 RPZs. Subscribers with subscriber security policies can set the policy to any combination of the 32 RPZs and the RPZs are applied to selective subscribers depending on the subscriber security policies. But for subscribers who have not opted for the service, only the first five (top priority) RPZs are applied. The NAS gateways must provide the subscriber security policies that enable the selection of RPZs applicable for the subscriber.
6. Enable all the members in the Grid to respond to recursive queries, as described in [*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882).
7. Enable RPZ logging in the *Member DNS Properties* editor for each member of the subscriber site, to ensure that all events related to RPZ are logged to the syslog. Note that you can also enable logging of queries and responses, but it might significantly affect system performance. For information about how to set logging categories, see [*Using a Syslog Server*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148).
8. After completing the DNS configuration on the Grid members, start the DNS service on the Grid members. For information about how to start and stop the DNS service, see [*Starting and Stopping the Discovery Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764199).
   
   Ensure that you enable IPv6 on the Grid members to support IPv6 subscribers. For information, see [*Configuring IPv6 on a Grid Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763647/Understanding+DNS+for+IPv6#CIP6GM).
9. Add AVPs that are not available in the list of predefined AVPs. For information, see  [*Adding AVPs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857063).
10. Configure the subscriber ID settings to associate an AVP with the subscriber in the Subscriber Services Properties editor, as described in Configuring Subscriber Services Properties below.

After you set up the Infoblox Subscriber Insight and Subscriber Policy Enforcement, you can do the following:

- View the subscriber sites, as described in [*Viewing Subscriber Sites*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641).
- View the NAS gateway message rates for the accounting servers of the subscriber site, as described in [*Viewing NAS Gateway Message Rates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641).
- Monitor RPZ related events and subscriber policy violations using predefined reports and the syslog, as described in [*Monitoring Subscriber Policy Violations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660618).
- Configure Infoblox Subscriber Parental Control solution, as described in [*Infoblox Subscriber Parental Control*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400677).

# Starting and Stopping the Subscriber Collection Service

To start the subscriber collection service, you must have at least one **RPZ** license installed (it can be a Grid-wide license or a member-level license.) You can also stop the service when necessary.

To start or stop the subscriber collection service:

1. From the **Infoblox** **Grid** tab -> **Grid Manager** tab -> **Services** tab, click the **Subscriber Collection** link. Grid Manager displays only the members that are running the subscriber collection service. Select the member checkbox.
2. From the Toolbar, click **Start** to start the service or **Stop** to stop the service.

> **warning**
>
> ### Note
> 
> The subscriber data is not persistent and will be cleared from the subscriber cache if you stop the subscriber collection service on all the members of a subscriber site.

# Configuring Subscriber Services Properties

To configure the subscriber services properties:

1. From the **Data Management** tab -> **DNS** tab -> **Subscriber Services Deployment** tab, expand the Toolbar and click **Subscriber Services Properties**.
2. In the **General** tab, complete the following:

- **Subscriber ID**: Select the AVP that you want to use as the subscriber ID. Depending on the AVP you select in this field, the appliance extracts those AVPs from the RADIUS accounting messages. All the sites in the Grid will use the AVP selected in this field as the subscriber ID. You can select one of the following AVPs from the drop-down list: APN, Calling-Station-Id, Class, IMEI, IMSI, MSISDN, and User-Name.   
  Note that for subscribers who have opted for Parental Control service, you can select Calling-Station-Id as the subscriber ID for mobile networks and for fixed line, you can select User-Name as the subscriber ID.
- **REGEX for Subscriber ID data extraction**: Specify the regular expression for subscriber ID if you want to extract specific data from the RADIUS accounting messages. The regular expression can contain as many sub-expression groups that you may specify in the next field.
- **Subexpression**: Choose a number of the sub-expression groups from the drop-down list. If the sub-expression is set to zero, then the text matching the entire regular expression is used for data extraction. If it is non-zero, then the REGEX must contain at least that many sub-expression groups.
- **Alternate Subscriber ID**: Select the AVP that you want to use as the alternate subscriber ID. For example, the alternate subscriber ID can be used to identify the fixed line or home gateway router. Depending on the AVP you select in this field, the appliance extracts those AVPs from the RADIUS accounting messages. All the sites in the Grid will use the AVP selected in this field as the alternate subscriber ID. Note that the alternate subscriber ID configuration will override the subscriber ID configuration when both the AVPs are available in the RADIUS account messages.  
  You can select one of the following AVPs from the drop-down list: APN, Calling-Station-Id, Class, IMEI, IMSI, MSISDN, and User-Name. Note that for subscribers who have opted for Parental Control service, you can select User-Name as the alternate subscriber ID.
- **REGEX for Alternate Subscriber ID data extraction**: Specify the regular expression for alternate subscriber ID if you want to extract specific data from the RADIUS accounting messages. The regular expression can contain as many sub-expression groups that you may specify in the next field.
- **Subexpression**: Choose a number of the sub-expression groups from the drop-down list. If the sub-expression is set to zero, then the text matching the entire regular expression is used for data extraction. If it is non-zero, then the REGEX must contain at least that many sub-expression groups.
- **Local ID**: Select **LocalId** AVP from the drop-down list to identify subscribers behind a gateway. For example, a home gateway. Each device behind the home gateway network is identified by their local ID/ client ID which is the MAC address of the subscriber device. The appliance extracts the local ID/client ID from the RADIUS accounting messages. Note that for subscribers who have opted for Parental Control service, must select **LocalID** AVP.  
  The home gateway router attaches the MAC address of the host in an EDNS0 option to DNS query request. The DNS Cache Acceleration extracts the EDNS0 option and uses the value to look up for the relevant policy. The client identification information defined in dnsmasq version 2.78 is used to determine the client ID. The MAC address can only be added if the requestor is on the same subnet as the dnsmasq server. Note that the mechanism used to achieve this (an EDNS0 option) is not yet standardized, so this should be considered experimental. Also, note that exposing MAC addresses in this way may have security and privacy implications.
- **REGEX for Local ID data extraction**: Specify the regular expression for local ID if you want to extract specific data from the RADIUS accounting messages. The regular expression can contain as many sub-expression groups that you may specify in the next field.
- **Subexpression**: Choose a number of the sub-expression groups from the drop-down list. If the sub-expression is set to zero, then the text matching the entire regular expression is used for data extraction. If it is non-zero, then the REGEX must contain at least that many sub-expression groups.
- **IPv6 Anchor IP Address**: The ordered list of IPv6 anchor IP address AVP precedence. Note that you cannot modify the IPv6 anchor list, but you can change the order of the list.
- **Subexpression**: Choose a number of the sub-expression groups from the drop-down list. If the sub-expression is set to zero, then the text matching the entire regular expression is used for data extraction. If it is non-zero, then the REGEX must contain at least that many sub-expression groups.
- **NAS Contextual Information**: Select one of the following from the drop-down list: APN, NAS-IP-Address, NAS-IPv6-Address, NAS-Identifier, NAS-Port, or NAS-Port-Identifier.
- **Ancillary Fields**: You can select a list of ordered AVP ancillary fields. Select an ancillary field from the Available column and click the right arrow to move it to the **Selected** column.
- **Interim Accounting Interval**: Specify the time interval in minutes for the RADIUS accounting data to be fully populated in the subscriber collector. The Subscriber Service must be active (green state) before Anycast can serve. The green state is dependent on the value you specify in the Interim Accounting Interval field. That is, the time interval that the subscriber cache has been processing accounting RADIUS messages. RAIUS must send a START or an UPDATE accounting message for every active subscriber during the interim accounting interval. Once this interval passes, the cache is considered fully populated and then Anycast is allowed to serve. If Parental Control is enabled, Anycast needs to wait for the category database to be available before it is allowed to serve. Anycast is allowed to serve only if the Subscriber Service is green. If the Subscriber Service is yellow, it means that either the interim accounting interval has not passed, or that the category database is not available. Note that if you have configured DNS Anycast for the Grid member, then DNS Anycast is disabled for the member during the interim accounting interval.
- **Collect on the MGMT interface only**: Select this checkbox if you want the NAS RADIUS traffic to be accepted over the MGMT interface only.

# Device Handling Performance Optimization for NIOS Subscriber Cache

The NIOS subscriber cache supports various subscribers, including mobile devices, households (CPEs), and devices behind each CPE. The devices behind a CPE include registered devices with policies provisioned or unregistered devices without policies in the Harmony database. Mobile devices and CPEs are classified as provisioned devices.

In NIOS, provisioned devices are not allowed in the Least Recently Used (LRU) classification, but all other devices including unregistered active devices can be allowed in the LRU. The devices in the LRU classification are not subject to garbage collection, and will be deleted as they age due inactivity. Unregistered devices are deleted first based on the LRU classification, to prevent the subscriber's cache from exceeding its limit.

The Harmony database accepts the NIOS modifications for more efficient use of the NIOS cache. Device handling performance optimization optimizes the use of NIOS subscriber cache by updating only the provisioned devices to NIOS thereby reducing the number of devices delivered to the NIOS cache.
