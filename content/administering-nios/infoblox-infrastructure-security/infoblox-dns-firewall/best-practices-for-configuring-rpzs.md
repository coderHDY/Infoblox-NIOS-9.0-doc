---
title: "Best Practices for Configuring RPZs"
source: "/space/nios90/280269951"
pageId: "280269951"
---
Before configuring RPZs, observe the following best practices to ensure a successful configuration:

# General RPZ Best Practices

- When you enable Infoblox DNS Firewall , DNS performance for all queries, recursive or authoritative, will be affected.
- For performance reasons, Infoblox recommends that you maintain a reasonable number of zones.
- Do not enable RPZ on multiple layers, such as on DNS client facing servers and forwarders.
- If you have multiple DNS servers in a Grid, ensure that you configure RPZs on the recursive server that is closest to your DNS clients. If you configure RPZs on second level DNS caching servers, you will not be able to identify the DNS clients because only the IP addresses of the forwarding name servers can be identified.
- Infoblox recommends that you preview your RPZ rules to ensure ruleset integrity and to avoid unexpected results. You can preview your rules by selecting **Log** **Only** **(Disabled)** when you configure **Policy** **Override** for an RPZ, RPZ feed, or FireEye integrated RPZ. For information about how to configure this, see *[Configuring Local RPZs](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177)* and* **[About FireEye Integrated RPZs](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)*.
- The appliance logs all matching and disabled rules for all queries in the syslog. You can view the syslog to ensure that the rules are set up correctly before they take effect. Ensure that you enable **rpz** in the **Logging** **Category** of *Grid* *DNS* *Properties* editor to log these events. For information about how to set logging categories as described in setting DNS logging categories, see *[Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*.
- You can use the standard TSIG mechanism to ensure that feed zones come from the correct servers. Grid members can function either as a primary or secondary servers for the RPZ. As with hosting any zone as a secondary, please ensure that the appliance is sized properly to hold the zone contents in memory.
- You can only export or import the RPZ local zones using the CSV export or import feature, but you cannot import or export FireEye zones using this feature.
- Note that the NIOS blacklist and NXDOMAIN features take precedence over RPZs.
- In order to leverage DNS notify messages to trigger zone transfer of the feed zone, port 53 of the lead secondary must be open to receive such messages. If not, the zone will refresh based on the refresh setting in the SOA.
- The name of the zone, which is assigned to an RPZ member, must not exceed 241 characters. When the name exceeds this limit, respective zone fails to load.
- For RPZs that contain IP addresses, RPZ query name recursion continues to take place irrespective of other settings (such as the **Enable RPZ query name recursion (qname-wait-recurse)** checkbox). Recursion takes place for the first RPZ that contains the IP rules. Because of this, if data exfiltration through DNS is to be blocked, then RPZs associated with disrupting the blockage must be placed before RPZs containing the IP rules. That is, RPZs that use IP rules must be placed last in the RPZ order.

# Best Practices For FireEye Integrated RPZs

Before you configure a FireEye integrated RPZ, consider the following:

- FireEye integrated RPZs inherit default values from local RPZs. You can create, edit and delete rules using the Infoblox GUI, API, and RESTful API.
- To avoid false positives, Infoblox recommends that you create a whitelist of allowed zones using a local RPZ that is sorted above the FireEye RPZ and add your own domain to the whitelist RPZ. For example, you can add your company domain name, such as corpxyz.com. This list must contain popular domains, such as Alexa 250, and other desired domains.
- Note that there will be an impact on the storage capacity when you create a new FireEye alert and map it with an RPZ rule. The processing of alerts will consume a few CPU cycles, which will have some impact on the system.
- You must properly configure the settings on a FireEye appliance. NIOS supports only **Per** **Event** delivery mechanism and **JSON** **Normal** message format. To ensure that the NIOS appliance process alerts properly, configure the FireEye appliance accordingly. For more information about alerts as described in handling alerts from the fireeye appliance, see *[About FireEye Integrated RPZs](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)*.
- You cannot add a FireEye integrated RPZ during a scheduled full upgrade. However, updates to the CNAME record are processed during a full upgrade. NIOS updates CNAME records in the database to store information that is specific to FireEye alerts.
- The rules created due to insertion of alerts will be visible through the FireEye RPZ viewer. Infoblox recommends that you do not modify any internal objects. For more information about viewing RPZs, see *[Managing RPZs](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532)*.
- Note that SSL certificate validation is not supported.
- You must verify the following after you configure the FireEye and NIOS appliances:
  
  - The URL configured on the FireEye appliance matches the URL in the FireEye integrated RPZ on NIOS.
  - Verify the username and password for FireEye admin on the FireEye appliance.
  - Ensure that the settings are properly configured on the FireEye appliance.
  - Verify the state of the FireEye appliance.

For more information about configuring the FireEye appliance to send alerts to the NIOS appliance, see *[About FireEye Integrated RPZs](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094)**.**.*

- Note that the frequency of alerts received from FireEye can be minimal. A very small number of alerts are generated on a weekly basis. For example, the FireEye appliance may generate only tens of alerts per day.
