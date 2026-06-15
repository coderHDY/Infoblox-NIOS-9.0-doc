---
title: "set safemode"
source: "/space/nios90/280920754"
pageId: "280920754"
---
The `set`` ``safemode` command disables DNS and DHCP services. Use this command to troubleshoot a NIOS appliance with unreliable services.  
This command restarts all the services, including DNS and DHCP. DNS and DHCP remain active only long enough to write `named.conf` and `dhcp.conf` files. These services then shut down. All other services remain functional. This allows you to review the `named.conf` and `dhcp.conf` files to determine and alleviate the cause of the appliance distress.  
Once you have determined the problem, you can reinstate DNS and DHCP services using the *[set nosafemode](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-nosafemode)* command.

# Syntax

`set safemode`

This command has no arguments.

# Example

`Infoblox &gt; ``set`` ``safemode`
