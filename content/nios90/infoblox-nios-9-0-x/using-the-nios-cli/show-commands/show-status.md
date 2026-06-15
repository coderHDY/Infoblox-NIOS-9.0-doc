---
title: "show status"
source: "/space/nios90/280822323"
pageId: "280822323"
---
The `
    ``show`` ``status``
  ` command shows the Grid and HA status. For a Grid member, the command also shows the host name and the Grid Master IP address. You can use this command to gather information about the current state of a Grid.

# Syntax

`show status`

This command has no arguments.

# Examples

## Status of Grid Master

`Infoblox &gt; ``show`` ``status``
  `   
` Grid Status: ID Grid Master `  
`HA Status: Not Configured`

## Status of Grid Member

`Infoblox &gt; ``show`` ``status`` `  
`Grid Status: ID Grid Member `  
`HA Status: Not Configured `  
` Hostname: member1.infoblox.local `  
`Grid Master IP: 10.64.40.31`

## Status of HA member

`Infoblox &gt; ``show`` ``status`` `  
`Grid Status: ID Grid Member `  
`HA Status: Active`   
` Hostname: member1.infoblox.com `  
`Grid Master IP: 10.35.113.15`

---

**Note:**

- If the Grid member uses IPv6 communication protocol to join a dual mode Grid, then IPv6 address of the Grid Master is displayed.
- If a Grid Master has a Management Interface set up, then the `show status` output of its Grid Member shows the Management interface IP address as the Grid Master IP address.

---
