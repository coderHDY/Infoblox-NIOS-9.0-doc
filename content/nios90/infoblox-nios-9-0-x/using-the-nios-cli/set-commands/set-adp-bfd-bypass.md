---
title: "set adp_bfd_bypass"
source: "/space/nios90/1483637207"
pageId: "1483637207"
---
The `set adp_bfd_bypass`** **command enables or disables BFD bypass for DNS Infrastructure Protection. This command is applicable only if Threat Protection (hardware-based or software add-on) licenses are installed on the platform. To view the BFD bypass status for DNS Infrastructure Protection, see [*show adp_bfd_bypass*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-adp-bfd-bypass).

# Syntax

`set adp_bfd_bypass &lt;on|off&gt;`

# Arguments

| **Argument** | **Description** |
| --- | --- |
| on | Enabled BFD for DNS Infrastructure Protection |
| off | Disables BFD for DNS Infrastructure Protection |

# Example

To enable BFD bypass for DNS Infrastructure Protection:

`Infoblox &gt; set adp_bfd_bypass on`

To disable BFD bypass for DNS Infrastructure Protection:

`Infoblox &gt; set adp_bfd_bypass off
`
