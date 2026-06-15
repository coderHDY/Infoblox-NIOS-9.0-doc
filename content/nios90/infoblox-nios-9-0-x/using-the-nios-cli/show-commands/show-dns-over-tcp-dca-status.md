---
title: "show dns-over-tcp-dca-status"
source: "/space/nios90/684556310"
pageId: "684556310"
---
The `show dns-over-tcp-dca-status` command, introduced in NIOS 9.0.4, provides information about the current status of DNS over TCP (DCA) service. The output indicates whether TCP over DCA is enabled or disabled, whether trace logging is active, and details about the maximum and current number of server sockets and client sockets.

# Syntax

` show dns-over-tcp-dca-status`

This command has no arguments

# Example

```
Infoblox > show dns-over-tcp-dca-status
TCP over DCA service is enabled
TCP over DCA trace is off
Max server sockets:  128
curr server sockets: 2
curr client sockets: 0
Infoblox >
```
