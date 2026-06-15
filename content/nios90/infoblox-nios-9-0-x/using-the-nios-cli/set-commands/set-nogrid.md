---
title: "set nogrid"
source: "/space/nios90/280397608"
pageId: "280397608"
---
The` ``set`` ``nogrid` command removes the specified member from the current Grid. Execute this command from the Grid member. This command is valid only on a member.

> **warning**
>
> **Note**
> 
> Infoblox recommends that you use this command only in an emergency, such as when the network is down between the master and the member. Otherwise, you should configure the member to leave the Grid using the GUI on the Grid Master.

# Syntax

`set nogrid`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``nogrid`  
` The normal method to configure a node to leave a Grid is to use the GUI on the Grid Master. This method is only used for emergencies (e.g. network is down from the master to this node).`  
` Is this such an emergency? ``y`  
` The current node will become a standalone machine, with default values for Grid settings.`  
` Are you sure? (y or n) ``y`  
` The network settings have been updated.`
