---
title: "set subscriber_secure_data bypass"
source: "/space/nios90/280789863"
pageId: "280789863"
---
You can use the `set subscriber_secure_data bypass `command to configure bypass subscriber service policies on all members of each site on the entire Grid, all members of the site or on a local member**.** To view information about the status of the command, see [*show subscriber_secure_data bypass*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-subscriber-secure-data/show-subscriber-secure-data-bypass).

## Syntax

`set subscriber_secure_data bypass &lt;on | off &gt; [grid | site][ "site_name" ]`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables subscriber service policies bypass. |
| `off` | Disables subscriber service policies bypass. |
| `grid` | Enable or disable the subscriber service policies bypass for all members of each site on the entire Grid. |
| `site` | Enable or disable the subscriber service policies bypass for all members of the site. |



> **warning**
>
> ### Note
> 
> - The newly added member do not inherit the bypass settings configured for the site. You must re-execute the bypass on/off CLI command.
> - For a member of the group, that is not upgraded, the bypass subscriber service policies are not configured, and the message "Failed to set Subscriber Secure Bypass state for the member dns.com: upgrade is in progress." is displayed.
> - The member must be part of a site even if the Subscriber Services are not running in order to configure Bypass Subscriber Service Policies.
> - When there is a DNS service restart, if a member is restarting and the `set subscriber_secure_data bypass` command is executed, then the Subscriber Secure Bypass state is not enabled for the member.
> - You can execute the `set subscriber_secure_data bypass` command with grid and site arguments only on the Grid Master and not on members.

# Examples

`Infoblox` &gt; `set subscriber_secure_data bypass on site mobile1`

`Site: mobile1`  
`             Member: dns1.com`  
`                            Subscriber Secure Bypass enabled for the member dns1.com.`

`             Member:dns2.com`  
`                            Subscriber Secure Bypass enabled for the member dns2.com.`  
`             Member:dns3.com`  
`                            Subscriber Secure Bypass enabled for the member dns3.com.`

`Infoblox&gt; set subscriber_secure_data bypass off site mobile1`

`Site: mobile1`

`             Member:dns1.com`  
`                            Subscriber Secure Bypass enabled for the member dns1.com.`  
`             Member: dns2.com`  
`                            Subscriber Secure Bypass disabled for the member dns2.com.`  
`             Member: dns3.com`  
`                            Subscriber Secure Bypass disabled for the member dns3.com.`

`Infoblox &gt; set subscriber_secure_data bypass off`

`Member: dns1.com`  
`             Subscriber Secure Bypass disabled on the member dns1.com.`
