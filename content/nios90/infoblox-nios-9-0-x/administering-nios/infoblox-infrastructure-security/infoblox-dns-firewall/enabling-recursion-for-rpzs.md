---
title: "Enabling Recursion for RPZs"
source: "/space/nios90/280269921"
pageId: "280269921"
---
For RPZ rules to function properly, you must enable DNS recursion. You can enable DNS recursion at the Grid, member, or DNS view level. To enable recursion:

- For the Grid or member, see *[Enabling Recursive Queries](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/enabling-recursive-queries)*.
- For a DNS view, see *[Managing Recursive DNS Views](/nios90/infoblox-nios-9-0-x/administering-nios/dns/dns-views/configuring-dns-views)**.*

# Configuring RPZs for All Recursive Servers

When you configure a local or FireEye integrated RPZ, you must define an internal primary name server. The primary name server can be either recursive or non-recursive, depending on its usage. When you configure an RPZ feed, you must define an external primary name server. You can associate a name server or a name server group with the local RPZ, RPZ feed, or FireEye RPZ. You can also configure RPZs and RPZ feeds for all recursive servers in the Grid.  
A local RPZ can have one or more secondary name servers associated with it. For an RPZ feed, you must create an external primary name server.  
To configure a local RPZ, or RPZ feed, or FireEye RPZ for all recursive servers, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Response** **Policy** **Zones** tab, and then click the *Add* icon.
2. Enter the *Response* *Policy* *Zone* details and click **Next** to associate an RPZ with at least one name server. For information about creating a local RPZ, and creating an RPZ feed, see *[Configuring Local RPZs](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/configuring-local-rpzs)*. For information about creating a FireEye integrated RPZ, see *[Configuring FireEye RPZs](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs)*.
3. Select **All** **Recursive** **Name** **Servers** from the list to add all the recursive name servers in the Grid as the secondary name servers for the corresponding zone.
   
   - Save the configuration and click **Next** to define extensible attributes. Click **Restart** if it appears at the top of the screen. For information about extensible attributes, see *[Managing Extensible Attributes](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)*.

# Enabling and Disabling RPZ Query Name Recursion

An RPZ query name recursion is disabled by default, the DNS recursive name server sends responses for the domains being queried, without forwarding queries to the authoritative name servers. This can speed up recursive RPZ lookups by eliminating unnecessary recursions for domains that are known to be malicious, possibly caused by internal DDoS attacks on the recursive server.  
You can enable RPZ query name recursion by selecting the **Enable** **RPZ** **query** **name** **recursion** **(qname-wait-recurse)** checkbox. When you select this checkbox, the appliance performs RPZ query name recursions. You can configure this at the Grid, member, and DNS view levels.

> **warning**
>
> **Note**
> 
> RPZ query name recursion is disabled by default. The **Enable****RPZ****query****name****recursion****(qname-wait-recurse)** checkbox is deselected for all new installations and upgrades. You can select this checkbox to enable RPZ query name recursion.

To enable or disable RPZ query name recursion:

1. From the **Data** **Management** tab, select the **DNS** tab, and then click **Grid** **DNS** **Properties** from the Toolbar.   
   or  
   From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then click the Edit icon.  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *dns_view* checkbox, and then click the Edit icon.
2. In the *Grid* *DNS* *Properties*, *Member* *DNS* *Properties,* or *DNS* *View* editor, click the **General** tab -&gt; **Advanced** tab and complete the following.
   
   - **Enable** **RPZ** **query** **name** **recursion** **(qname-wait-recurse)**: This checkbox is deselected by default, meaning RPZ query name recursion is disabled. When RPZ query name recursion is disabled, the DNS recursive name server sends responses for the domains being queried, without forwarding queries to the authoritative name servers. When you select this checkbox, the DNS recursive name server performs recursive lookups for the fully qualified domain names that are part of an RPZ. To override the value inherited from the Grid, click **Override**. To retain the same value as the Grid, click **Inherit**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

Following are sample configuration details in the named.conf file when the **Enable** **RPZ** **query** **name** **recursion** **(qname-wait-recurse)** checkbox is deselected:

`response-policy {`

`   zone "local.com" policy Given;# priority 0 `

`   zone "rpz.net" policy Given;# priority 1 `

`   zone "example.com" policy Given;# priority 2`  
`     } qname-wait-recurse no ; `

`     dnssec-enable yes; `

`     dnssec-validation yes; `

`     dnssec-accept-expired no;`

`    filter-aaaa-on-v4 no; `

`     zone "." in {`  
`         type hint;`  
`         file "named.cache._default";`  
`   };`
