---
title: "Infoblox Subscriber Parental Control"
source: "/space/nios90/280400677"
pageId: "280400677"
---
The Infoblox Subscriber Parental Control provides a mechanism to enable subscribers to manage Internet access and content for their mobility devices, houses, families, or corporations based on the content categories and domains. This helps in restricting users from accessing certain specific content, especially restrict children from accessing specific websites, that are deemed inappropriate. Each subscriber who has opted for the service must be associated with a filtering profile that includes the categories to be blocked for the subscriber session. You can use the pre-defined profiles that address different population segments (such as child, youth, young adults, etc.) or you can create custom profiles for each subscriber in the Infoblox Subscriber Interface. For example, you can define profiles, such as to block children from accessing gambling websites, allow access to educational websites, and monitor access to entertainment websites. You can define profiles for a specific time of the day and for a specific duration. For example, parents can block children from accessing gaming websites from 7.00 AM to 9.00 PM every day. RPZs are used to perform content filtering for the subscribers who have opted for the service. Whenever a subscriber query matches the content of any RPZ, flagged by the blocked category, the traffic is blocked and redirected to the blocking VIP addresses.

You can also add exceptions for the blocked or allowed categories for each profile or policy in the Infoblox Subscriber Interface. For example, you can block gambling websites but allow casino.com or allow alcohol websites but block vodka.com. You can add a maximum of 10 domains each to the blacklist and whitelist domains for each subscriber. The subscriber query is matched with the blacklist and whitelist domains and appropriate action is taken. If a query is matched with a blacklisted domain, the query is redirected to the blocking server and if a query is matched with a whitelisted domain, the query is resolved normally.

As illustrated in the following Infoblox Subscriber Parental Control figure, the DNS server receives RADIUS accounting messages and AVPs (Attribute Value Pairs) from the Infoblox Harmony product. For information about Infoblox Harmony product, refer to Infoblox Harmony documentation. The AVP includes the policy vector that defines the blocked categories and domains for the subscribers who has opted for the service. RPZs perform the filtering of content for these subscribers by applying the parental control policies on incoming subscriber queries. The appliance either allows or blocks the traffic based on the parental control policies. The blocked traffic might also be redirected to the MSP server for evaluation of the traffic. When the traffic is blocked, a blocking page is displayed to the subscriber describing the reason for blocking the traffic. The parental control policies are configured on the Infoblox Harmony product using the Infoblox Subscriber Interface and the policies can have an expiration date.

The NIOS appliance logs all parental control related events, conformed to CEF (Common Event Format), in the syslog. You can get information about the hit when users try to access one of those websites on the blocking list. The reporting server in the Grid generates corresponding reports that contain statistics about parental control related events. For information about monitoring parental control hits by users, see [*Monitoring Subscriber Policy Violations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660618).

*Infoblox Subscriber Parental Control*

*[drawio]*

# Guidelines for Using Infoblox Subscriber Parental Control

Following are some guidelines to take into consideration when using Infoblox Subscriber Parental Control:

- Infoblox recommends that you configure Infoblox Subscriber Parental Control only on appliances that have a disk size greater than 250 GB.
- You must configure the subscriber collection service and ensure that it is running properly in order to enable Infoblox Subscriber Parental Control.
- The appliance processes DNS queries using the standard DNS query processing, for unknown subscribers.
- You must restart the DNS service after you enable or disable the Subscriber Parental Control.
- To enable Subscriber Parental Control, the Infoblox Harmony product is required. You must configure a DTC (DNS Traffic Control) health monitor to monitor the health of the Infoblox Harmony product.
- Enabling Subscriber Parental Control automatically creates an authoritative zone in the default DNS view with A, AAAA, and CNAME records for Infoblox Harmony and the blocking VIP addresses.
- Deleting a record from the parental control authoritative zone can lead to a service interruption.
- If you make any changes to the parental control policy configuration in the Infoblox Subscriber Interface, it might take up to 15 minutes for the changes to take effect.

# Configuring Infoblox Subscriber Parental Control

To enable and configure Infoblox Subscriber Parental Control on the supported Infoblox appliances, complete the following:

1. Obtain and install a valid Grid-wide or member level **RPZ** license. But for IB-FLEX members, the **RPZ** license is included in the **FLEX Grid Activation** license. For information about licenses license requirements and admin permissions, see [*Infoblox Subscriber Insight and Subscriber Policy Enforcement*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280791404). You can also configure a reporting appliance in the Grid to generate reports that contain statistics about RPZ related events.
2. Configure admin permissions so admin users can manage the Infoblox Subscriber Service related tasks. For information about how to configure admin permission, see* *[*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
3. Create a subscriber site with at least one Grid member. For information about adding subscriber sites, see [*Scaling Using Subscriber Sites and IPSD*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641). It is recommended to add more than one Grid member to the subscriber site for redundancy. You can add a maximum of five Grid members to the subscriber site.
4. Start the subscriber collection service on all the members in the subscriber site, as described in starting and stopping the subscriber collection service, see [*Infoblox Subscriber Insight Policy*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280791404).
5. Create RPZs in the default DNS view and specify the order of RPZs. Note that only the default DNS view is supported for configuring RPZs for Subscriber Services. For information about creating RPZs, see [*Configuring Local RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177). For information about specifying the order of RPZs and Reordering RPZs, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532). You can create a total of 32 RPZs, out of which the first five RPZs are employed for DNS Firewall and are applied to all DNS lookups. The rest of the RPZs are applied to selective subscribers depending on the policies. The parental control policies received from Infoblox Harmony enables the selection of the RPZs applicable for the subscribers.
6. Enable all the members in the Grid to respond to recursive queries, as described in [*Enabling Recursive Queries*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665882). Add a forwarder and enable **Use Forwarders Only** option in the** Forwarders** tab of the *Member DNS Properties* editor.
7. Enable RPZ logging in the *Member DNS Properties* editor for each member of the site, to ensure that all events related to RPZ are logged to the Syslog. Note that you can also enable logging of queries and responses, but it might significantly affect system performance. For information about how to set DNS logging categories, see [*Using a Syslog Server*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148).
8. After completing the DNS configuration on the Grid members, start the DNS service on the Grid members. For information about how to start and stop the DNS service, see [*Starting and Stopping the DNS Service*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/281247822).  
   Note that you ensure to enable IPv6 on the Grid members to support IPv6 subscribers. For information about configuring IPv6 on a Grid Member, see [*Understanding DNS for IPv6*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763647).
9. You can add AVPs that are not available in the list of predefined AVPs. For information about adding AVPS, see [*Managing AVPs (Attribute Value Pairs)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280857063)*.*
10. Configure the subscriber ID settings to associate an AVP with the subscriber in the *Subscriber Services Properties* editor, as described in the Configuring Subscriber Services Properties, see [*Infoblox Subscriber Insight Policy Enforcement*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280791404).
11. Enable Subscriber Parental Control in the *Subscriber Services Properties* editor, as described in Enabling Subscriber Parental Control below.
12. Configure the blocking VIP addresses and add IP addresses of the policy management server in the **Parental Control** tab of the *Subscriber Site Properties* editor for each subscriber site. For information about Modifying Subscriber Sites, see [*Scaling Using Subscriber Sites and IPSD*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641)*.*
13. Define subscriber profiles and subscriber policies on the Infoblox Harmony product using Infoblox Subscriber Interface. For information, refer to Infoblox Harmony documentation.
14. Assign subscriber profile and subscriber policy for each subscriber who has opted for the service in the Infoblox Subscriber Interface. For information, refer to Infoblox Harmony documentation.
15. Publish parental control policies in the Infoblox Subscriber Interface. For information, refer to Infoblox Harmony documentation.

After you set up the Infoblox Subscriber Parental Control, you can monitor parental control related events using predefined reports and the syslog, as described in [*Monitoring Subscriber Policy Violations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660618).

> **warning**
>
> ### Note
> 
> If the subscriber site has HA and the HA passive node is the first to upgrade, the data repository connectivity uses the IPv4 protocol for the site members. If you want the data repository to be connected over the IPv6 protocol, you must stop and restart the subscriber service in the upgraded Grid. The subscriber data is lost when the service is stopped and restarted. It is recommended to stop/start the service of each member at a time to synchronize the subscriber cache with the next active member on the same site.

# Enabling Subscriber Parental Control

To enable Subscriber Parental Control, you must ensure that the subscriber collection service is configured and is running properly. After enabling Subscriber Parental Control, you must add Parental Control blocking VIP addresses and add at least one MSP server to the subscriber site. For information about adding Parental Control blocking IP addresses and MSP addresses to the subscriber site and Modifying Subscriber Sites, see [*Scaling Using Subscriber Sites and IPSD*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280660641)*.* Enabling Subscriber Parental Control, automatically creates an authoritative zone in the default DNS view with A, AAAA, and CNAME records for the MSP and the blocking VIP addresses.

> **warning**
>
> ### Note
> 
> You can disable Subscriber Parental Control only when all the Parental Control blocking VIP addresses and the MSP addresses in all the subscriber sites are removed.

To enable Infoblox Subscriber Parental Control:

1. From the **Data Management** tab -> **DNS** tab -> **Subscriber Services Deployment** tab, expand the Toolbar and click **Subscriber Services Properties**.
2. In the **Parental Control** tab, complete the following:
   
   - **Enable Parental Control**: Select this checkbox to enable Subscriber Parental Control globally.
   - **Category Information**: Complete the following to add information about the server for the category feed:  
     Contact Infoblox Technical Support for the category feed account information.
     
     - **User Name**: Enter the logon name of the user.
     - **User Password**: Enter the password of the user.
     - **Server URL**: Enter the URL of the categorization feed server for the category feed.
     - **Update Interval in hours**: You can specify the time interval in hours that determines how often the category information is updated.
   - **Category Proxy**: Complete the following to add information about the proxy server for the category feed.
     
     - **Proxy URL**: Enter the URL of the proxy server for the category feed.
     - **Proxy User Name**: Enter the logon name of the user.
     - **Proxy User Password**: Enter the password of the user.
   - **Local Zone Name**: Enter the name of a local authoritative zone in the **Name** field.
