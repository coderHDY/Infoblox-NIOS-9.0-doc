---
title: "tracepath"
source: "/space/nios90/2175696901"
pageId: "2175696901"
---
The `tracepath` command traces the path to a network host and discovers MTU (Maximum Transmission Unit) along the path.

# Syntax

`tracepath [ hostname | ip_address ] [ opt ]`

| **Argument** | **Description** |
| --- | --- |
| `hostname` | The name of the remote host that you want to verify. |
| `ip_address` | The IP address of the remote host that you want to verify. |
| `opt` | - `numerical`(skip DNS lookups) - `UDP &lt;port&gt;` (Use UDP with specified destination port) - `packetsize &lt;bytes&gt;` (set initial packet length instead of 65536 for v4 or 128000 for v6) - `v6` (IPv6 hostname) |

# Example

```
Infoblox > tracepath 10.1.1.1
tracing path to 10.1.1.1
 1?: [LOCALHOST]                      pmtu 1500
 1:  ???                                                   0.579ms asymm  2 
```

-
