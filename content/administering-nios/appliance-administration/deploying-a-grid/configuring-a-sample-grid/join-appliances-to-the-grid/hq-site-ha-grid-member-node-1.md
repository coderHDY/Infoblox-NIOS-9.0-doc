---
title: "HQ Site – HA Grid Member (Node 1)"
source: "/space/nios90/1340803447"
pageId: "1340803447"
---
Make a console connection to the appliance that you want to make Node 1 in the HA pair, and then enter the following:  
`Infoblox > set network `   
` NOTICE: All HA configuration is performed from the GUI. This interface is used only to configure a standalone node or to join a Grid.`   
` Enter IP address: 10.0.2.6 `   
` Enter netmask : 255.255.255.0 `   
` Enter gateway address : 10.0.2.1 `   
` Configure IPv6 network settings? (y or n):n Become Grid member? (y or n): y `   
` Enter Grid Master VIP: 10.0.1.10 `   
` Enter Grid Name: corpxyz `   
` Enter Grid Shared Secret: Mg1kW17d `   
` New Network Settings: IP address: 10.0.2.6`   
` Netmask: 255.255.255.0`   
` Gateway address: 10.0.2.1`   
` Join Grid as member with attributes: Grid Master VIP: 10.0.1.10`   
` Grid Name: corpxyz`   
` Grid Shared Secret: Mg1kW17d`   
` WARNING: Joining a Grid will replace all the data on this node!`   
` Is this correct? (y or n): y `   
` Are you sure? (y or n): y   `   
The Infoblox application restarts. After restarting, the appliance contacts the Grid Master and joins the Grid as Node 1.
