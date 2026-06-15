---
title: "show dns-over-tcp-dca-config"
source: "/space/nios90/684523549"
pageId: "684523549"
---
The `show dns-over-tcp-dca-config` command, introduced in NIOS 9.0.4,  displays the configuration settings related to DNS over TCP (DCA). Specifically, it shows the IP addresses (both IPv4 and IPv6) that the DNS server listens on for TCP connections and the port number (usually port 53) where it accepts incoming TCP connections.

# Syntax

`show dns-over-tcp-dca-config`

This command has no arguments

# Example

```
Infoblox > show dns-over-tcp-dca-config
TCP listen on v4 addresses:
  10.35.189.1
  10.34.31.99
TCP listen on v6 addresses:
  none
TCP listen on port: 53
```
