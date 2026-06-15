---
title: "show dnstap-status"
source: "/space/nios90/280266134"
pageId: "280266134"
---
Use the show dnstap-status command to view the status of the dnstap configuration. The CLI displays the status of the all the fields in the **Toggle** **Advanced** **Mode** &gt; **Logging** tab. To enable or disable the dnstap status use the *[set enable_dnstap](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-enable-dnstap)* command.

# Syntax

`show dnstap-status`

# Example

`Infoblox &gt; show dnstap-status`  
`DNSTAP is on`  
`DNSTAP configuration overridden on a Member level.`  
`Enable forwarding queries category of log messages using DNSTAP: Yes`  
`Enable forwarding DNS responses category of log messages using DNSTAP: No`  
`IP address of DNSTAP receiver to transfer captured DNS queries/responses: 7.29.121.1`  
`DNSTAP receiver port number: 7000`
