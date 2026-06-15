---
title: "set pc_domain add"
source: "/space/nios90/280789952"
pageId: "280789952"
---
You can use the `set pc_domain add` command to add category overrides for a specified domain. Use category 104 to add domains to the global proxy list. Queries to domains added to the global proxy list are proxied to the Multi-Service Proxy server when the **Enforce the global proxy list **parental control option is selected. For more information, see *[Adding Subscriber Sites](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/scaling-using-subscriber-sites-and-ipsd/Scaling+Using+Subscriber+Sites+and+IPSD#Adding Subscriber Sites)*.

For information about the status of the command, see *[show pc_domain](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-pc-domain)*. You can use the  `set pc_domain delete` command to delete a specific domain.

# Syntax

`set pc_domain add &lt;domain&gt; &lt;category 1&gt; &lt;category 2 &gt; &lt;category 3&gt;`

> **warning**
>
> **Note**
> 
> - Category values must be integers.
> - If the specified domain is cached in a DNS Cache Acceleration server and if you add the same domain to the global proxy list using the `set pc_domain add` command, the domain does not get proxied unless the TTL (Time To Live) setting of the domain in the DNS Cache Acceleration server has expired. For more information about TTL settings, see *[Specifying Time To Live Settings](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/specifying-time-to-live-settings)*.
> - Domains added to category 104 using the `set pc_domain add` command are not proxied for members until the domains are synchronized with the members, which happens only after the expiry of the time set in the **Update Interval in hours** field in Subscriber Services Properties. By default this is 24 hours. For more information about the setting, see [*Enabling Subscriber Parental Control*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services/infoblox-subscriber-parental-control/Infoblox+Subscriber+Parental+Control#Enabling Subscriber Parental Control).

| **Argument** | **Description** |
| --- | --- |
| `domain` | Name of the domain for which the category override is executed. |
| `category 1`` ` | Category 1 value. |
| `category 2` | Category 2 value. |
| `category 3` | Category 3 value. |

# Examples

`Infoblox &gt;` `set pc_domain add`` `**[bbc.com](http://bbc.com/)**` ``10308 0 0`

`Successfully added category override for "`[bbc.com](http://bbc.com/)`".`
