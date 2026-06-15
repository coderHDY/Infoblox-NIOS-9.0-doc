---
title: "About Infoblox DNS Firewall"
source: "/space/nios90/280402698"
pageId: "280402698"
---
Infoblox DNS Firewall employs DNS RPZs (Response Policy Zones), a technology developed by ISC (Internet System Consortium) for allowing reputable sources to dynamically communicate domain name reputation so you can implement policy controls for DNS lookups.

On an Infoblox appliance, you can configure RPZs and define RPZ rules to block DNS resolution for malicious or unauthorized hostnames, or redirect clients to a walled garden by substituting responses. You can assign actions to RPZ rules. For example, abc.com can have an action of pass thru or substitute (domain) with the domain xyz.com. You can also configure a Grid member to act as a lead secondary that receives RPZ updates from external reputation sources and redistributes the updates to other Grid members. Infoblox DNS Firewall supports both IPv4 and IPv6 networks. It also facilitates the detection of malware and APTs (Advanced Persistent Threats) by integrating the NIOS appliance with a FireEye appliance. You can employ APT mitigation strategy using FireEye as an external threat detection source.  
An Infoblox Grid performs RPZ actions for queries that originate from external sources. The name server recursive cache on an RPZ enabled Grid member uses the address of the client from which the query originates to identify if the query is generated from an external source or an internal Grid. If the query originates from a Grid Master or a Grid member that has RPZ license installed, RPZ actions are automatically bypassed for those queries. For RPZ, Infoblox uses the ACL *infoblox-deny-rpz*, which contains a list of addresses for bypassing RPZ actions. The *infoblox-deny-rpz* list excludes Grid members that do not have an RPZ license. Note that RPZ action is performed only once for a single recursion.  
As illustrated in the below figure, the Infoblox DNS server receives RPZ updates, which include blacklisted hostnames and responses, from a reputation data server through a DNS zone transfer. The appliance then blocks or redirects queries and responses based on the imported RPZ rules. The reporting server can then generate the *DNS* *Top* *RPZ* *Hits* report that details the top DNS clients that have received redirected responses through RPZs.

*Infoblox* *DNS* *Firewall*

*[drawio]*

There are three types of RPZs:

- Local RPZ – A local RPZ is a zone that allows administrators to define multiple response policies locally. Responses sent are based on the defined rules. For information about how to configure local RPZs, see [*Configuring Local RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177).
- RPZ Feed – An RPZ feed receives response policies from external sources. DNS clients receive responses based on the imported rules from a reputable source, such as a commercial RPZ provider. For information about RPZ feed, see [*Configuring Infoblox Threat Intelligence Feed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/411664388).
- FireEye integrated RPZ – By integrating the NIOS appliance with the FireEye appliance, you can detect malware and APTs and take necessary actions to mitigate those threats. For information about FireEye integrated RPZ, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).

> **warning**
>
> ### Note
> 
> You can configure up to a total of 32 RPZs, including local and FireEye integrated RPZs.

For more information on configuring RPZ feeds using On-Prem Firewall Service, see [*On-Prem DNS Firewall Service*](https://docs.infoblox.com/display/BloxOneThreatDefense/On-Prem+DNS+Firewall+Service)*.*

# Setting Up Infoblox DNS Firewall

For a successful Infoblox DNS Firewall deployment to protect your endpoint devices and servers from stealthy malware and malicious hostnames, consider the guidelines described in [*Best Practices for Configuring RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269951). To configure Infoblox DNS Firewall , complete the following tasks:

1. Install a valid RPZ license on the appliance, as described in [*License Requirements and Admin Permissions for RPZ*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/420544897).  
   Note to ensure that you have installed a valid DNS license on the same appliance.
2. Enable recursive queries for a DNS view, member, or Grid, as described in [*Enabling Recursion for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269921).  
   Note to ensure that you enable recursive queries for RPZ rules to take effect.
3. Configure RPZ logging to ensure that all matching and disabled rules for all queries are logged in the syslog. You can view the syslog to ensure that the rules are set up correctly before they take effect. Ensure that you enable **rpz** in the **Logging** **Category** of *Grid* *DNS* *Properties* editor to log these events. For information about how to set logging categories, see [*Using a Syslog Server*](#).
4. You can configure a local RPZ, an RPZ feed, or a FireEye RPZ on the NIOS appliance. Complete one of the following depending on your selection:
   
   - On a DNS member, complete the following to create local RPZ rules:
     
     1. Create an RPZ, as described in [*Configuring Local RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760177).
     2. Configure rules for the local RPZ you have created, as described in [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891).
   - Optionally, complete the following to receive RPZ updates from an RPZ feed:
     
     1. Configure an RPZ feed, as described in [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891).. You can also configure the Infoblox DNS feed, as described in [*Configuring Infoblox Threat Intelligence Feed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/411664388). The Infoblox DNS feed is a reputable data server validated by Infoblox to provide reputation RPZ updates.
     2. Download rules from the RPZ feed, as described in [*Downloading Rules for an RPZ Feed*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269855).
   - Optionally, complete the following to receive alerts from a FireEye appliance:
     
     1. Create a FireEye integrated RPZ, as described in configuring fireeye RPZs, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).
     2. Define rules for FireEye RPZs,as described in configuring fireeye RPZs, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).
     3. Create FireEye admin users, as described in for fireeye integrated RPZs, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).
     4. Add URLs and user credentials on the FireEye appliance, as described in configuring fireeye RPZs, see [*About FireEye Integrated RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).

> **warning**
>
> ### Note
> 
> To apply the configured RPZ policies regardless of whether a DNS query requests DNSSEC data, configure the appliance accordingly. For more information about how to configure this, see [*Applying Policies and Rules to DNS Queries that Request DNSSEC Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664293).

5. Test your RPZ configuration and verify that RPZ is functioning properly by viewing the syslog and the **Last** **Updated** column in the **Response** **Policy** **Zones** tab. For more information, see [*Testing RPZ Feed Rules*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760150).

After you have set up your RPZs, RPZ feeds, and RPZ rules. You can do the following:

- Manage local RPZs such as viewing a list of RPZs, modifying, reordering, and deleting RPZs. You can also lock or unlock RPZs. For more information, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532).
- Verify RPZs are functioning properly by viewing the syslog and the last updated RPZ. For more information, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532).
- Manage Local RPZ rules such as viewing, modifying, and deleting RPZ rules. You can also copy and import RPZ rules. For more information, see [*Managing RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402532).
- Generate the *DNS* *Top* *RPZ* *Hits* report, if you have a reporting server set up in the Grid. For more information DNS Top RPZ Hits, see [*About Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911).
- Define thresholds for RPZ hit rate and configure the appliance send alerts when the RPZ hit rate exceeds the thresholds. For information, see [*Configuring Thresholds for RPZ Hit Rate*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269676).
