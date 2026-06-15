---
title: "set restart_anycast_with_dns_restart"
source: "/space/nios90/280789888"
pageId: "280789888"
---
The `set restart_anycast_with_dns_restart` command sets the DNS and anycast start and restart sequence to the appliance. This command stops the anycast service during a restart or stop of the DNS service and redirects the traffic present on the anycast IP address to another site. You can use this command only on Grid Master. To view information about the current status of the command, see *[show restart_anycast_with_dns_restart](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-restart-anycast-with-dns-restart)* .

# Syntax

`set restart_anycast_with_dns_restart [ on | off ] `

| **Argument** | **Description** |
| --- | --- |
| `on` | Restarting the DNS service stops the anycast service followed by a DNS service stop. The anycast service restarts after the DNS service loads all the zones. In case the DNS service stops, anycast service also stops. The DNS service start triggers anycast service start, after the DNS service loads all the zones. |
| `off` | Restarting the DNS service will not trigger the restart of anycast service. In case of the DNS service stop, anycast service stops after approximately 30-60 seconds of DNS service stop.  In case of DNS service start:  - If the DNS service takes more than approximately 30 seconds to load all the zones, anycast service starts at approximately 30 seconds after DNS service starts. - If the DNS service loads immediately, anycast service starts immediately after DNS service starts. |

# Example

The following is an example to restart anycast.

`Infoblox &gt;`` set restart_anycast_with_dns_restart on `
