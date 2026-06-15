---
title: "set default_global_dhcp_class_filter"
source: "/space/nios90/1857650739"
pageId: "1857650739"
---
The `set default_global_dhcp_class_filter` command enables or disables the **Apply this filter as a global DHCP class** checkbox depending on the value you configure.

The **Data Management &gt; DHCP &gt; Filter &gt; ***IPv4 Option Filter*/*IPv6 Option Filter ***Apply this filter as a global DHCP class** checkbox is enabled by default. Enabling or disabling the checkbox gives you more control over applying global DHCP filters.

This setting determines whether a DHCP filter is applied globally across all DHCP-enabled members.

> **warning**
>
> **Note**
> 
> This is applicable to the new filters only. The existing filters are not affected.

## Syntax

`set default_global_dhcp_class_filter`

This command has arguments enabled/disabled.

## Example

`Infoblox &gt; set default_global_dhcp_class_filter`

`Synopsis:`  
`set default_global_dhcp_class_filter &lt;enabled|disabled&gt;`

To view the current default value of the **Apply this filter as a global DHCP class** checkbox, see [show default_global_dhcp_class_filter](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-default-global-dhcp-class-filter).

Also, for more information about the **Apply this filter as a global DHCP class** checkbox, refer to [Defining Option Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters/defining-option-filters).
