---
title: "Using CLI Commands To Join Grid Members"
source: "/space/nios90/1366983471"
pageId: "1366983471"
---
Before joining the pre-provisioned member to a Grid, ensure that you have installed the licenses specified for the pre-provisioned member and generated a token for the member, as described in [*Generating Tokens for Grid Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1367048862).

If for any reason, the automated process of using cloud-init to join pre-provisioned members to a Grid does not function properly, you can use the CLI commands defined in this section to join the members to the Grid.

To join a pre-provisioned NIOS or vNIOS member to a Grid, complete the following steps:

1. Access the Infoblox CLI.
2. Sign in using the default user name and password, *admin* and *infoblox*. User names and passwords are case-sensitive.
3. To change the network settings from the default, enter the **set** **network** command. Then enter information as prompted, to change the IP address, netmask, and gateway for the LAN1 port.  
   `Infoblox > set network`  
   `NOTICE: All HA configuration is performed from the GUI. This interface is used only to configure a standalone node or to join a grid.`  
   `Enter IPv4 address [Default: n.n.n.41]: &lt;Enter the LAN1 port IP address&gt;`  
   `Enter netmask: [Default: 255.255.255.0]: &lt;Enter the LAN1 port netmask&gt;`  
   `Enter gateway address [Default: n.n.n.1]: &lt;Enter the gateway IP address&gt;`  
   `NOTICE: Additional IPv6 interface can be configured only via GUI.`  
   `Become grid member? (y or n): n`
   
   Note that you must enter** **`n` to use a token to join the Grid.  
   If you enter `y`, the member becomes a Grid member and you will not be able to set token and join the pre-provisioned member to the Grid.
4. Use the `set token on` command to set the member token, the Grid Master IP address and certificate to the token file. Following is an example:  
   `Infoblox > set token on`  
   `Enter GM-IP [Current: not defined]: &lt;Enter the Grid Master IP address&gt; `  
   `Enter Token [Current: not defined]: &lt;Copy token from the Your Permission Token dialog in Grid Manager&gt;`  
   `New Token Settings:`  
   `GM-IP: 1.1.1.1`  
   `Token: b25lLnZpcnR1YWxfbm9kZSQx`  
   `Is this correct? (y or n): y`  
   `Do you want to download the certificate from GM and validate (y or n): y`  
   `Is this correct and valid (y or n): y`  
   `Are you sure to apply and save settings to file?: y`  
   `The token and certificate are saved.`
5. To verify the token:  
   `Infoblox > show token`  
   The CLI displays the current token setting and certification information. Verify this information.
   
   Note that if any information is incorrect, use `set token off` to remove the token file.
6. Use the `set token join` command to register the Grid member before joining the member to the Grid. Once the member joins the Grid, the token becomes invalid as you can use the token only once.  
   `Infoblox > set token join`  
   `Are you sure to start Member registration Client? (y or no): y`  
   `Starting Member registration Client...`  
   `Connecting...`  
   For information about the licenses supported in NIOS, see see [*Managing Licenses in NIOS 9.0.0*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194) and [*Managing Licenses in NIOS 9.0.1 and Later*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/318670359).

> **warning**
>
> **Note**
> 
> For HA pairs, repeat the CLI commands on both nodes.
