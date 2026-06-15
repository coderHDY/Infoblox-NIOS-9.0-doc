---
title: "BIND Server at ISP Site (ns2.corpxyz.com, 2.2.2.2)"
source: "/space/nios90/1345159709"
pageId: "1345159709"
---
1. Open the named.conf file using a text editor and change the recursion and allow-recursion statements to allow recursive queries from 1.1.1.8 (the NAT address of ns3).

`options {`  
`zone-statistics yes;`  
`directory "/var/named/named_conf"; version"";`  
`recursion yes; `  
`listen-on { 127.0.0.1; 2.2.2.2; };`  
`…`  
`allow-recursion {1.1.1.8;}; `  
`transfer-format many-answers;`  
`};`

1. After editing the named.conf file, restart DNS service for the change to take effect.
