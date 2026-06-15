---
title: "CLI Commands"
source: "/space/nios90/280856042"
pageId: "280856042"
---
The basic Infoblox CLI commands are alphabetically listed in the following table.

| **CLI Command** | **Description** |
| --- | --- |
| ? | Displays the help information. |
| ddns_add | Sends DDNS updates to add records. |
| ddns_delete | Sends DDNS updates to delete records. |
| delete | Deletes specific files. |
| dig | Performs a DNS lookup and prints the results. |
| dns_a_record_delete | Delete a DNS A record |
| exit | Exits the command interpreter. |
| help | Displays the help information. |
| ping | Sends ICMP ECHO requests to verify that the host is functioning properly. |
| quit | Exits the command interpreter. |
| reboot | Reboots the Infoblox appliance. |
| reset | Resets the system settings. |
| restart_product | Restarts the appliance |
| rotate | Rotates specific files. |
| set | Sets the current system settings. This command has other related commands. |
| show | Shows the current system settings. This command has other related commands. |
| shutdown | Shuts down the Infoblox appliance. |
| tracepath | Traces the path to a network host and discovers MTU (Maximum Transmission Unit) along the path. |
| traceroute | Displays the path or route diagnostic information of the IPv4/IPv6 packets. |

The  `
     reset 
  `  ** **`,`** **   ** **`set`** **,  and   ** **`show`** **  commands each have related commands. To view a complete list of the related commands on the remote console ,  go to the command prompt and enter  `
     help set 
  ` or  `
     help show 
  ` .

> **warning**
>
> **Note**
> 
> For the CLI `set traffic_capture` password field will support only these special characters, A-Z, a-z, 0-9, [, ], ., _(underscore), /, \, #, &, @, %, ,(Comma), ~, !, $, `(grave accent), {, }, (, ), =,- (dash), *, ^, +, ?.

# Using CLI Help

You can display a list of available CLI commands by typing  `help ` at the command prompt. For example:

&gt; `help     `** **

** ** `?                    Display help`  
`ddns_add             Send DDNS update to add a record`  
`ddns_delete          Send DDNS update to delete a record`  
`delete               Delete files`  
`dig                  Perform a DNS lookup and print the results`  
`dns_a_record_delete  Delete a DNS A record`  
`exit                 Exit command interpreter`  
`help                 Display help`  
`ping                 Send ICMP ECHO`  
`quit                 Exit command interpreter`  
`reboot               Reboot device`  
`reset                Reset system settings`  
`restart_product      Restart product`  
`rotate               Rotate files`  
`set                  Set current system settings`  
`show                 Show current system settings`  
`shutdown             Shutdown device`  
`tracepath            Check path with MTU`  
`traceroute           Route path diagnostic`

To view a detailed explanation about a CLI command and its syntax, type  help  `&lt;command&gt;      ` after the command prompt. For example:

`&gt;       help rotate `  
`   `

`Synopsis:   `

`rotate log [ syslog | debug | audit | ifmapserver]`  
`rotate file groupname filename [ filename2, filename3, ...]`  
`   `

`Description:`  
`   `

`Rotates the specified log file, up to 10 previous.`  
`logfiles will be preserved   `
