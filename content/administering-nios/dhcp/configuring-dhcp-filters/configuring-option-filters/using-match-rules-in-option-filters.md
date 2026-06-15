---
title: "Using Match Rules in Option Filters"
source: "/space/nios90/1394540947"
pageId: "1394540947"
---
Each match rule you define in an option filter further defines the filter criteria of a matching client. You can add multiple match rules to an option filter. The appliance writes these rules to the dhcpd configuration file. You can also create complex match rules that use the AND and OR logic to further define the filter criteria. After you define the match rules, you can preview the rules before committing them to the filters.  
For example, you can define the following rules in an option filter:

DHCP option = `vendor-class-identifier`

Substring offset =` 0` (the match value starts at the beginning of the option data received from the client)

Substring length = `4` (the length of the match value MSFT)

Match value = `MSFT`

The appliance generates the following rules in the dhcpd configuration file:

*[image: media]*



*[drawio]*



You can also define more complex rules using the AND and OR logic as follows:

DHCP option = `vendor-class-identifier`

Match value = `infoblox2000a`

OR

DHCP option = `vendor-encapsulated-options`

Substring offset = `0` (the match value starts at the first character of the option data received from the client)

Substring length = `8` (the length of the match value infoblox)

Match value = `infoblox`

AND

DHCP option =` vendor-encapsulated-options`

Substring offset = `10` (the match value starts at the ninth character of the option data received from the client)

Substring length = `5`, the length of the match value `2000a`

Match value = `2000a`

The appliance generates the following rules in the dhcpd configuration file:

`class "infoblox" {`

`match if (option vendor-class-identifier=infoblox2000a:) or `

`((substring(option vendor-encapsulated-options,0,8)="infoblox") and `

`(substring(option vendor-encapsulated-options,10,5)="2000a")); vendor-option-space DHCP`

`}`
