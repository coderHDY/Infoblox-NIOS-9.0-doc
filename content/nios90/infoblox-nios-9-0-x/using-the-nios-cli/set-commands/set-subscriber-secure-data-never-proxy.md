---
title: "set subscriber_secure_data never_proxy"
source: "/space/nios90/280855509"
pageId: "280855509"
---
If you have configured Infoblox Subscriber Services, use the `set subscriber_secure_data never_proxy` command to set a 32-bit hexadecimal character. This character represents the list of categories to be used in the global list used to resolve DNS queries without proxying to an MSP (Multi-Services Proxy) server.

You can view the hexadecimal value of the never_proxy category using the [show subscriber_secure_data never_proxy](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-subscriber-secure-data/show-subscriber-secure-data-never-proxy)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-subscriber-secure-data/show-subscriber-secure-data-never-proxy)command.

# Syntax

`set subscriber_secure_data never_proxy &lt;category hexadecimal_character&gt;`

> **warning**
>
> **Note**
> 
> You must restart the DNS service for the hexadecimal character to be set.

For a list of the different types of parental control policies and their hexadecimal values, refer to the supplemental documentation provided by Infoblox or contact your Infoblox representative.

# Example

`Infoblox &gt; set subscriber_secure_data never_proxy 000fffffffffffffffffffffffffff01`  
`never_proxy categories are set`  
`!!! A RESTART of the DNS service is required before this change can take effect !!!`

In this example, the hexadecimal character of 000fffffffffffffffffffffffffff01 represent the category "Alcohol". Therefore, any domain related to alcohol (for example, www.beer.com, www.liquor.com) is not proxied to an MSP server. Instead, it is directly resolved by NIOS.
