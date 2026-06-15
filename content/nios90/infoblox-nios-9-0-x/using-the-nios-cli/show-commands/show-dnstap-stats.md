---
title: "show dnstap-stats"
source: "/space/nios90/280397382"
pageId: "280397382"
---
The `show dnstap-stats` command displays the number of violations over TLS, queries and responses sent to the destination when the dnstap log format is enabled for high performance query logging. To configure dnstap in Grid Manager, see *[Capturing DNS Queries and Responses](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/capturing-dns-queries-and-responses)*. To enable the dnstap log format, see *[set enable_dnstap](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-enable-dnstap)*.

# Syntax

`show dnstap-stats`

This command has no arguments.

# Example

`Infoblox &gt; show dnstap-stats`  
`Packed queries: 0`  
`Packed responses: 0`  
`Total queries-responses records: 0`  
`BIND violations: 3`  
`DCA violations: 1`  
`Total BIND-DCA violations: 4`  
`Duration connected(s): 1898`  
`Total bytes sent: 624`
