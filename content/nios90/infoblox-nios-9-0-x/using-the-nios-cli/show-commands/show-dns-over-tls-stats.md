---
title: "show dns-over-tls-stats"
source: "/space/nios90/280920370"
pageId: "280920370"
---
The `show dns-over-tls-stats` command displays the statistics of DNS over TLS sessions. Statistics displayed include but are not limited to:

- Active TLS sessions
- Total number of queries received over TLS
- Total number of responses sent over TLS

# Syntax

`show dns-over-tls-stats`

This command has no arguments.

# Example

`Infoblox &gt; ``show dns-over-tls-stats`  
`IP 10.39.51.58 (TLS):`  
`  rx_packets:                  0`  
`  tx_packets:                  0`  
`  dropped_packets:             0`  
`  max_qry_overflow_sess_drop:  0`  
`  opened_sessions:             0`  
`  closed_sessions:             0`  
`  curr_sessions:               0`  
`IP 2620:010a:6000:2745::1011 (TLS):`  
`  rx_packets:                  0`  
`  tx_packets:                  0`  
`  dropped_packets:             0`  
`  max_qry_overflow_sess_drop:  0`  
`  opened_sessions:             0`  
`  closed_sessions:             0`  
`  curr_sessions:               0`
