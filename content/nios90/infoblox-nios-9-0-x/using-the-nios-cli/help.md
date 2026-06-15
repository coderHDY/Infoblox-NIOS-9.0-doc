---
title: "help"
source: "/space/nios90/280659168"
pageId: "280659168"
---
The **help** command displays information about a specified CLI command. If you do not specify a command, a list of all available commands is shown.

# Syntax

`help [``command``]`

| **Argument** | **Description** |
| --- | --- |
| `command`` ` | A variable that you substitute with any CLI command to display a description of the function and a synopsis of its usage. |



# Examples

## Display a list of commands

`Infoblox &gt; ``help`  
` ==================================================================`  
` Command Summary`  
` ==================================================================`  
` ?                       Display help`  
` deleteDelete            files`  
` dig                     Perform a DNS lookup and print the results`  
`exit                    Exit command interpreter`  
` help                    Display help`  
` ping                    Send ICMP ECHO`  
` quit                    Exit command interpreter`  
` reboot                  Reboot device`  
` reset                   Reset system settings`  
` set                     Set current system settings`  
` show                    Show current system settings`  
` shutdown                Shutdown device `  
`traceroute              Route path diagnostic`  
` ddns_add                Send DDNS update to add a record `  
`ddns_delete             Send DDNS update to delete a record `  
`rotate                  Rotate files`  
` =================================================================`

## Display details for a single command

`Infoblox &gt; ``help`` ``exit`  
` Synopsis: `

`exit, quit`  
` `

`Description:`  
` `

`Exits the command interpreter. There are no arguments to exit.`
