---
title: "set dhcpd_recv_sock_buf_size"
source: "/space/nios90/280855769"
pageId: "280855769"
---
You can use the **set** **dhcpd_recv_sock_buf_size** command to tune the DHCP receive socket buffer memory. The DHCP receive socket buffer holds DHCP packets that are queued on the UDP (User Datagram Protocol) port from the NIC (Network Interface Controller). This command is useful when you want to increase the DHCP receive buffer size to accommodate occasional burst traffic and high volume DHCP requests. Use the [*show dhcpd_recv_sock_buf_size*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dhcpd-recv-sock-buf-size) to view the current buffer size.

> **warning**
>
> ### Note
> 
> Ensure that you use this command only when you are dealing with burst traffic situations in high volume deployments.

# Syntax

`set dhcpd_recv_sock_buf_size N [120 &lt;= N &lt;= 8192, 1024=default]`

# Examples



| **Argument** | **Description** |
| --- | --- |
| *N* | The number of kilobytes to which you want to set the BIND receive socket buffer size. The minimum is 120 kilobytes and the maximum is 8192. The default is 1024. |

`Infoblox &gt; set dhcpd_recv_sock_buf_size 1500`  
` DHCP service restart is required in order for the changed value to take effect`
