---
title: "Configuring Local RPZs"
source: "/space/nios90/280760177"
pageId: "280760177"
---
You can define local RPZs to match responses for recursive queries. Each RPZ can have various rules associated with it. The response of a recursive query is modified if it matches any of the RPZ rules. The responses are first matched with the RPZ rules, and if there is a match, the rule defined at the RPZ level override is used. When creating a new RPZ zone, you can associate this zone with a threat severity level. The RPZ syslog messages provide information about threat severity level of an RPZ zone associated with the matched RPZ rule. To view threat details, you can drill down to the syslog messages. For more information about viewing RPZ in the syslog, [*Verifying RPZ Configuration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269642). You can create multiple local RPZs and define multiple rules for a local RPZ. Note that override depends on the order of the zones. The zones on top will override the zones below. You can change the order of the RPZs. For more information reordering RPZs, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532). You can also configure FireEye integrated RPZs on the NIOS appliance to detect persistent threats and malwares. The NIOS appliance considers the FireEye integrated RPZ as a local RPZ. For more information, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).

> **warning**
>
> ### Note
> 
> - When using IDN (Internationalized Domain Name) in a local RPZ or RPZ feed, you must manually convert the IDN to punycode. For information about IDN, see [*Support for Internationalized Domain Names*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280661204).
> - You cannot convert a local RPZ to an RPZ and vice versa.
> - Enable the SNMP and email notification for the Threat Insight service which will notify administrators if any domains have been added to a  blocklist.

To configure local RPZs:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then click the *Add* icon.
2. When you click the *Add* icon, either the *Add* *Response* *Policy* *Zone* *Wizard* or the *Add* *DNS* *View* wizard is displayed based on the following:
   
   - When you click the *Add* icon, the *Add* *Response* *Policy* *Zone* *Wizard* is displayed if you have not created additional DNS views and only have the default view.
3. If you have configured multiple DNS views, you must drill-down to the corresponding view to assign a local RPZ. Click the *Add* icon and the *Add Response Policy Zone Wizard* is displayed. To create a new DNS view for your local RPZ, click the *Add* icon and complete the details in the *Add DNS View* wizard. For information about adding a DNS view, see [*Adding a DNS View*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272744).
   
   - In the *Add Response Policy Zone Wizard*, select **Add Local Response Policy Zone**, click **Next** and specify the following:
     
     - **Name:** Enter the name of the local RPZ. It can be a combination of alphanumeric characters. You can enter up to 256 characters.
     - **DNS View:** The name of the view that you have selected is displayed by default. You can select a view from the drop-down list to associate it with the local RPZ.  
       Note that the local RPZ must have a primary Grid name server before you can configure it.
   - **Policy Override**: Select a value from the drop-down list. You can override the policy actions that are specified in the rule level.
     
     - **Log Only (Disabled)** – Select this if you want to disable an RPZ rewrite using rules in the RPZ. If the response to the recursive query matches any RPZ rule, then the rule is logged, but the response will not be altered. Note that this option will not override RPZ rules in other RPZ zones, if they take precedence. Select this option to preview the rules in the syslog before they take effect.
     - **None (Given)** – Select this if you want to use the policy from the rule level.
     - **Block (No Data)** – Select this to send a response that contains no data in it.
     - **Block (No Such Domain)** – Select this if you want the user to receive a DNS response that indicates there is no domain. All the policy actions in an RPZ are replaced with a NXDOMAIN block.
     - **Pass thru** – Select this if you want to send an actual response without modification. All the policy actions in an RPZ are replaced with the passthru action.
     - **Substitute (Domain Name) **– Select this if you want to replace all the policy actions in an RPZ with the specified substitution action.
     - **Domain Name**: This appears only when you select **Substitute (Domain Name)** from the **Policy Override** list. Enter the domain name that you want the client to receive instead of the actual domain name, which is malicious or unauthorized.
   - **Severity**: Select the threat severity level for the RPZ zone. The threat severity you select here determines the severity for the RPZ zone. Select Critical, Major, Warning, or Informational. The default threat severity level is Major. Note that each of these levels is represented by a number in the syslog (8 being Critical and 4 being Informational). For information about viewing RPZ in the syslog RPZ and severity levels, see [*Verifying RPZ Configuration*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269642).
   - **Comment**: Optionally, enter additional information about the local RPZ.
   - **Disable:** Select the checkbox to disable a local RPZ without deleting its configuration. Clear the checkbox to enable the local RPZ. For information, see [*Enabling and Disabling Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205). Note that disabling a local RPZ may take a longer time to complete depending on the size of the data.
   - **Lock:** Select the checkbox to lock the zone so that you can make changes to it and prevent others from making conflicting changes. As described in locking and unlocking RPZs, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532).
4. Click **Next** to associate the local RPZ with at least one primary name server:
   
   - Define the name servers for the local RPZ. A Grid name server must be recursive when primary Grid name server is used as an RPZ source. A local RPZ may or may not have a recursive server. For example, there could be a Grid that has only primary Grid name server for a local RPZ to act as an RPZ source for an external set of name servers. A local RPZ must have only one primary Grid name server and it can have one or more secondary Grid name servers. When you select **All Recursive Name Servers** from the list, all the recursivename servers in the Grid are added as secondary servers for the zone. For information on specifying primary or secondary name servers, see [*Assigning Zone Authority to Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599). For information on specifying name server groups, see * *[*Using Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489)*. *For information about configuring RPZs for all recursive servers, see [*Enabling Recursion for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269921).
5. Save the configuration and click **Next** to define extensible attributes. Click **Restart** if it appears at the top of the screen. For information, see [*Managing Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

> **warning**
>
> ### Note
> 
> You cannot convert a local RPZ to an RPZ feed or vice versa.
