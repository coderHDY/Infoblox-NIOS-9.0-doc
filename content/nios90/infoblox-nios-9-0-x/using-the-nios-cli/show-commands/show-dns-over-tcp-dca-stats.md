---
title: "show dns-over-tcp-dca-stats"
source: "/space/nios90/684359739"
pageId: "684359739"
---
The `show dns-over-tcp-dca-stats` command, introduced in NIOS 9.0.4, displays statistics related to DNS over TCP (DCA) traffic.

It provides information about the number of received packets (`rx_packets`), transmitted packets (`tx_packets`), dropped packets (`dropped_packets`), maximum query overflow session drops (`max_qry_overflow_sess_drop`), and the current number of open sessions (`curr_sessions`) and closed sessions (`closed_sessions`).

# Syntax

`show dns-over-tcp-dca-stats`

This command has no arguments

# Example

```
Infoblox > show dns-over-tcp-dca-stats
IP 10.35.189.1 (TCP):
  rx_packets:                  0
  tx_packets:                  0
  dropped_packets:             0
  max_qry_overflow_sess_drop:  0
  opened_sessions:             0
  closed_sessions:             0
  curr_sessions:               0
IP 10.34.31.99 (TCP):
  rx_packets:                  24000
  tx_packets:                  23644
  dropped_packets:             356
  max_qry_overflow_sess_drop:  0
  opened_sessions:             2000
  closed_sessions:             2000
  curr_sessions:               0
```
