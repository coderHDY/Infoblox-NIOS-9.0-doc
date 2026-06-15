---
title: "show doh-stats"
source: "/space/nios90/280822213"
pageId: "280822213"
---
The `show doh-stats` command displays the statistics of DNS over HTTPS sessions. Statistics displayed include but are not limited to:

- Active HTTPS sessions
- Total number of queries received over HTTPS
- Total number of responses sent over HTTPS

# Syntax

`show doh-stats`

This command has no arguments.

# Example

I`nfoblox &gt; show doh-stats`  
`IP 192.0.2.10`  
`  rx_queries:                  0`  
`  tx_queries:                  0`  
`  dropped_packets:             0`  
`  max_qry_overflow_sess_drop:  0`  
`  opened_sessions:             11`  
`  closed_sessions:             11`  
`  curr_sessions:               0`  
`IP 2001:db8:abcd::10`  
`  rx_queries:                  0`  
`  tx_queries:                  0`  
`  dropped_packets:             0`  
`  max_qry_overflow_sess_drop:  0`  
`  opened_sessions:             0`  
`  closed_sessions:             0`  
`  curr_sessions:               0`
