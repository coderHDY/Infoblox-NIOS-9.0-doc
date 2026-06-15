---
title: "show subscriber_secure_data bypass"
source: "/space/nios90/280397167"
pageId: "280397167"
---
If you have configured Infoblox Subscriber Services, the `show subscriber_secure_data bypass` command allows you to view the status of the subscriber data bypass for the member, all members of each site on the entire Grid, or all members of the site. For information about how to set data bypass, see *[set subscriber_secure_data bypass](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-subscriber-secure-data-bypass)*. For information about Infoblox Subscriber Services, see *[Infoblox Subscriber Services](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-subscriber-services)*.

# Syntax

`show subscriber_secure_data bypass ``[ grid | site ] [ "site_name" ]`

| **Argument** | **Description** |
| --- | --- |
| `grid` | Display the status of the subscriber service policies bypass for all members of each site on the entire Grid. |
| `site` | Display the status of the subscriber service policies bypass for all members of the site. |

# Examples

`Infoblox &gt;`` ``show subscriber_secure_data bypass site mobile1`

`Site: Site1`  
`          Member:`` ``dns1.com`  
`                         Subscriber Secure Bypass disabled for the member`` ``dns1.com``.`  
`          Member:`` ``dns2.com`  
`                         Subscriber Secure Bypass enabled for the member`` ``dns2.com``.`  
`          Member:`` ``dns3.com`  
`                         Subscriber Secure Bypass disabled for the member`` ``dns3.com``.`

`Infoblox&gt;`` ``show subscriber_secure_data bypass`

`Member:`` ``dns3.com`  
`          Subscriber Secure Bypass disabled on the member`` ``dns3.com``.`
