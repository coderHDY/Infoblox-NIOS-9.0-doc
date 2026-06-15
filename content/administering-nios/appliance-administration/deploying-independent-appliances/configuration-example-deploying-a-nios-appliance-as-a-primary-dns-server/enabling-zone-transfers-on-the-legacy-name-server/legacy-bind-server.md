---
title: "Legacy BIND Server"
source: "/space/nios90/1432786807"
pageId: "1432786807"
---
1. Open the named.conf file using a text editor and change the allow-transfer statement as shown below:
   
   - **For All Zones** — To set the allow-transfer statement as a global statement in the named.conf file for all zones:  
     `options {`  
     `zone-statistics yes;`  
     `directory "/var/named/named_conf"; version "";`  
     `recursion yes;`  
     `listen-on { 127.0.0.1; 10.1.5.3; };`  
     `…`  
     `allow-transfer {10.1.5.2; }; transfer-format many-answers;`  
     `};`
   - **For a Single Zone** — To set the allow-transfer statement in the named.conf file for the [corpxyz.com](http://corpxyz.com) zone:  
     `zone "corpxyz.com" in { type master;`  
     `allow-transfer {10.1.5.2;}; `  
     `notify yes;`  
     `};`
2. After editing the named.conf file, restart DNS service on the appliance for the change to take effect.
