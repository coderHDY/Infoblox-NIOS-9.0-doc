---
title: "set ms_dns_reports_sync_interval"
source: "/space/nios90/280658893"
pageId: "280658893"
---
You can use the `set ms_dns_reports_sync_interval` command to specify the time interval at which the DNS reporting data from the Microsoft server is synchronized with the NIOS appliance.

# Syntax

`set ms_dns_reports_sync_interval &lt;MS Server IP address&gt; &lt;seconds&gt;`

| **Argument** | **Description** |
| --- | --- |
| `&lt;MS Server IP address&gt;` | Specify the IP address of the Microsoft server. |
| `&lt;seconds&gt;` | Specify the time interval in seconds at which the DNS reporting data from the Microsoft server is synchronized with the NIOS appliance. The default synchronization interval is 15 seconds. |

# Example

`Infoblox &gt; ``set ms_dns_reports_sync_interval 10.102.30.2 14`  
`Current DNS reports sync interval is 15 second(s).`  
`The DNS reports sync interval will be changed to 14 second(s).`  
`Is this correct? (y or n): y`  
`The DNS reports sync interval has been changed to 14 second(s).`
