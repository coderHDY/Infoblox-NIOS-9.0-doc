---
title: "set connection_limit"
source: "/space/nios90/280855837"
pageId: "280855837"
---
You can use the set **connection_limit** command to set the per client IP address maximum connection limit for the following protocols: HTTP and HTTPS. Note that maximum connections here refer to the network level connections, not application level connections. For example, an HTTPS connection limit of 4 means that there can be a maximum of four TCP connections between any given client IP address and the appliance using the HTTPS protocol. Valid values are from 0 to 2147483647, where 0 means no limit. The default value is 20 for all protocols.

> **warning**
>
> **Note**
> 
> Setting a low connection limit may have a negative effect on client functionality. For example, some versions of the Firefox browser require at least four TCP connections to function correctly with the appliance. Setting an HTTPS connection limit below four may result in certain browser issues.

To view the current connection limit, see *[show connection_limit](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-connection-limit)*.

# Syntax

`set connection_limit {http | https}`

| **Argument ** | **Description** |
| --- | --- |
| http | Setting maximum connection limit for the HTTP protocol. Valid values are from 0 to 2147483647. The default value is 20. |
| https | Setting maximum connection limit for the HTTPS protocol. Valid values are from 0 to 2147483647. The default value is 20. |

# Examples

## Set the Per Client Address Maximum Connection Limit for the HTTP Protocol

`Infoblox &gt; ``set`` ``connection_limit`` ``http`` ``150`
