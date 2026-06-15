---
title: "restart service"
source: "/space/nios90/423002532"
pageId: "423002532"
---
Use the **restart** **service** command to restart services on a member. You can start individual service on the member, provided that the service is enabled. Note that you can use this command to restart services only on single independent appliances and the active nodes of HA pairs. You cannot use this command on the Grid Master.

# Syntax

`restart service [dhcp | dns | tftp | http-fd | ftp | ntp | captive_portal]`

| **Argument** | **Description** |
| --- | --- |
| `dhcp`` ` | Restart the DHCP service |
| `dns`` ` | Restart the DNS service |
| `tftp` | Restart the TFTP service |
| `http-fd` | Restart the HTTP file distribution service |
| `ftp` | Restart the FTP service |
| `ntp` | Restart the NTP service |
| `captive_portal` | Restart the captive portal service |

# Examples

`Infoblox &gt; ``restart`` ``service`` ``dhcp`
