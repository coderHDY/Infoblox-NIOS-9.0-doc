---
title: "Configuring Infoblox Threat Intelligence Feed"
source: "/space/nios90/411664388"
pageId: "411664388"
---
Infoblox introduces the Infoblox Threat Intelligence Feed, a threat feed subscription for RPZ updates that offer protection against malicious hostnames. Contact your Infoblox representative for pricing and availability information.

You can configure the Threat Intelligence Feed and receive reputation RPZ updates on a regular basis. An RPZ feed receives response policies from the Infoblox in-house threat intelligence team, which produces reputation RPZ data and transfers the data to Grid name servers through zone transfers with or without a TSIG key. To ensure proper authentication and integrity of the RPZ feed zone transfers, using a TSIG key is recommended.

> **warning**
>
> ### Note
> 
> TSIG Key is used for authentication when downloading information about DNS infrastructure protection feeds. If you have a complex configuration, such as using standalone appliances or Grids that receive DNS infrastructure protection feeds from other standalone appliances or Grids and not directly from the Infoblox distribution servers, ensure that you use the same TSIG key for the RPZ feed zone transfers.

Note that the RPZ feed must have an external primary name server before you can configure it. To propagate RPZs as quickly as possible, the secondary DNS server needs an address to which the RPZ source feed can send NOTIFY messages. For example, if the secondary DNS server is configured behind a NAT, you may want to establish a one-to-one NAT for the lead secondary DNS server so it can receive NOTIFY messages from the RPZ source feed. Otherwise, the lead secondary DNS server will need to periodically poll the RPZ source feed, which could take longer than expected.

> **warning**
>
> ### Note
> 
> To enter IDNs (Internationalized Domain Name) in an RPZ feed, you can use the punycode representation of the IDN.

To configure the Threat Intelligence Feed:

1. From the **Data Management** tab, select the **DNS** tab -&gt; **Response Policy Zones** tab, and then click the *Add* icon.
2. When you click the *Add* icon, either the *Add Response Policy Zone Wizard* or the *Add DNS View* wizard is displayed based on the following:
   
   - When you click the *Add* icon, the *Add Response Policy Zone Wizard* is displayed, if you have not created additional *DNS views* and only have the *default view.*
   - If you have configured multiple DNS views, you must drill-down to the corresponding *DNS_View* to assign an RPZ feed. Click the *Add* icon and the *Add Response Policy Zone Wizard* is displayed. To create a new DNS view for your RPZ feed, click the *Add* icon and complete the details in the *Add DNS View* wizard. For information about adding and modifying a DNS View, see [*Configuration Example: Configuring a DNS View*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuration-example-configuring-a-dns-view)*.*
3. In the *Add Response Policy Zone Wizard*, select **Add Response Policy Zone Feed**, click **Next** and specify the following:
   
   - **Name:** Enter the name of the Infoblox RPZ feed. It can be a combination of alphanumeric characters. You can enter up to 256 characters. For more information, see Infoblox Threat Intelligence Feeds below.
   - **DNS View:** The name of the view that you have selected is displayed by default. You can select a view from the drop-down list to associate it with the RPZ feed.
   - **Policy Override:** Select a value from the drop-down list. You can override the policy actions that are specified in the rule level.
   - **Log Only (Disabled)** – Select this if you want to disable an RPZ rewrite using rules in the RPZ zone. If the response to the recursive query matches any RPZ rule, the rule is logged, but the response will not be altered. You cannot overwrite the response to the user. Note that this option will not override RPZ rules in other RPZ zones, if they take precedence.  
     Note that when you select the **Log Only** option, the RPZ related reports are not updated even though the information is logged to the syslog.
     
     - **None (Given)** – Select this if you want to use the policy from the rule level.
     - **Block (No Data)** – Select this if you want the user to receive a response that indicates that there is no data.
     - **Block (No Such Domain) **– Select this if you want the user to receive a NXDOMAIN as the DNS response. All the policy actions in an RPZ are replaced with a NXDOMAIN block.
     - **Passthru** – Select this if you want the user to see the actual response without modification. All the policy actions in an RPZ are replaced with the passthru action.
     - **Substitute (Domain Name)** – Select this if you want to replace all the policy actions in an RPZ with the substitution action that is specified.
       
       - **Domain Name**: This appears only when you select **Substitute (Domain Name)** from the **Policy Override** list. Enter the domain name that you want the client to receive instead of the actual domain name, which is malicious or unauthorized.
   - **Severity**: Select the threat severity level for the RPZ zone. The threat severity you select here determines the severity for the RPZ rule. Select **Critical**, **Major**, **Warning**, or **Informational**. The default threat severity level is Major. Note that each of these levels is represented by a number in the syslog (8 being Critical and 4 being Informational). For information about viewing RPZ in the syslog  
     and severity levels, see [*Verifying RPZ Configuration*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/verifying-rpz-configuration).
   - **Comment**: Optionally, enter additional information about the Infoblox RPZ feed.
   - **Disable:** Select the checkbox to disable the RPZ feed without deleting its configuration. Clear the checkbox to enable the RPZ feed. For information, see [*Enabling and Disabling Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/locking-unlocking-enabling-disabling-zones). Note that disabling an RPZ feed may take a longer time to complete depending on the size of the data.
   - **Lock:** Select the checkbox to lock the RPZ feed so that you can make changes to it and prevent others from making conflicting changes. For information about Locking and Unlocking  RPZ*s*, see [*Managing RPZs*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/managing-rpzs).
4. Click **Next** to associate the RPZ feed with at least one external primary name server and a secondary name server
5. Define name servers for the RPZ feed. An RPZ feed must have at least one RPZ source as an external primary name server and at least one Grid secondary name server. For external primary servers, specify the following:
   
   - **Name:** Enter the zone name of the primary name server.
   - **Address**: Enter the name server IP address provided by Infoblox for the RPZ feed.
   - **Use** **TSIG:** Select the checkbox to specify TSIG settings.
   - **Key** **Name:** Enter the TSIG Key Name provided by Infoblox.
   - **Key** **Algorithm:** Select **hmac-md5**.
   - **Key** **Data:** Enter the TSIG string provided by Infoblox.  
     Note that either the Grid name server or the DNS view must be recursive for the RPZ feed. You can associate a lead secondary with an RPZ feed. For information on specifying primary and secondary, see [*Assigning Zone Authority to Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers)*. *When you select **All** **Recursive** **Name** **Servers** from the list, all the recursive name servers in the Grid are added as secondary servers for the zone. For information about how to configure a local RPZ, or RPZ feed, or FireEye RPZ for all recursive servers, see [*Configuring RPZs for All Recursive Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/enabling-recursion-for-rpzs). For information on specifying name server groups, see [*Using Name Server Groups*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/using-name-server-groups).
6. Save the configuration and click **Next** to define extensible attributes. Click **Restart** if it appears at the top of the screen. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

# Infoblox Threat Intelligence Feeds

Infoblox Threat Intelligence RPZ feeds are categorized into pure malicious feeds and combination feeds. For detailed information about the Threat Intelligence feeds, see the following topics:

- For a list of all supported Threat Intelligence RPZ feeds, see [*Supported Threat Intelligence Feeds*](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneThreatDefense/pages/35403598).
- For information about sync time to NIOS, feed generation time, and SOA for each feed, see [*Threat Feed Update and Sync Intervals*](https://docs.infoblox.com/space/BloxOneThreatDefense/1784447623/Threat+Feed+Update+and+Sync+Intervals).
- For information about the limitations on the number of threat intelligence entries that can be loaded on to each appliance, see [*Sizing Guidelines for Trinzic Appliances*](https://docs.infoblox.com/space/BloxOneThreatDefense/35434905/Sizing+Guidelines+for+Trinzic+Appliances).
- For information about NIOS RPZ feed recommendations, the release of new threat feeds in April 2024, and best practices for transitioning to the new threat feeds, see [*Feed Revamp for NIOS*](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneThreatDefense/pages/622493764).
