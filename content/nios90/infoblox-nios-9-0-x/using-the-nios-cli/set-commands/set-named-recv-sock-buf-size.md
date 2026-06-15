---
title: "set named_recv_sock_buf_size"
source: "/space/nios90/280757159"
pageId: "280757159"
---
You can use the `set`` ``named_recv_sock_buf_size`` `command to tune the BIND receive socket buffer memory to a maximum of 8 MB. The DNS receive socket buffer holds BIND packets that are queued on the UDP (User Datagram Protocol) port from the NIC (Network Interface Controller). This command is useful when you want to increase the BIND receive buffer size to accommodate occasional burst traffic and high volume DNS recursive queries. Note that the same buffer is also used for updates and non-recursive queries. Use the *[show named_recv_sock_buf_size](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-named-recv-sock-buf-size)* to view the current buffer size.

> **warning**
>
> **Note**
> 
> Ensure that you use this command only when you are dealing with burst traffic situations in high volume deployments.



# Syntax

`set named_recv_sock_buf_size {N}`

| **Argument ** | **Description** |
| --- | --- |
| N | The number of kilobytes to which you want to set the BIND receive socket buffer size. The minimum is 120 kilobytes and the maximum is 8192. The default is 1536. |

# Example

## Set the BIND receive socket buffer size to 5000 KB

`Infoblox &gt; ``set`` ``named_recv_sock_buf_size`` ``5000`  
` Infoblox &gt;`
