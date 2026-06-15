---
title: "set traffic_capture"
source: "/space/nios90/280920695"
pageId: "280920695"
---
The `set traffic_capture` command allows you to capture the traffic for one or all of the ports on a NIOS appliance and save the traffic capture in a file. To capture traffic, the NIOS appliance must have a minimum of 500 MB of free disk space; otherwise, the traffic capture might fail.

The NIOS appliance saves all traffic it captures in a .cap file and compresses it into a .tar.gz file. The size of the .cap file is limited to 1 GB for all NIOS appliances. In Grid Manager, you can download the traffic capture file after the traffic capture stops by navigating to the **Grid** tab -&gt; **Grid** **Manager** tab -&gt; **Members** tab -&gt; and click **Traffic** **Capture** from the Toolbar. To view information about the traffic capture running on the member, see [*show traffic_capture_status*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-traffic-capture-status).  
You can also transfer the traffic capture file to remote hosts either using FTP or SCP. You cannot transfer the traffic capture files when the traffic capture is in progress. Note that this operation may take a long time to complete.

# Syntax

`set traffic_capture on [port &lt;all|lan1|lan2|mgmt|ha&gt;] [vlan &lt;id&gt;] [duration &lt;seconds&gt;]`  
`[filter 'valid-tcpdump-filter-expression'] [with-rolling]`  
`set traffic_capture off`  
`set traffic_capture transfer [ftp|scp] &lt;server-ip&gt; &lt;user-name&gt; &lt;user-password&gt;`  
`[dest &lt;file_name&gt;]`

| **Argument** | **Description** |
| --- | --- |
| `on ` | Starts the traffic capture. |
| `off ` | Stops the traffic capture after you have started it. |
| `port`  `  all`   `  lan1`   `  lan2`   `  mgmt`   `  ha ` | Specifies the port for which you want to capture the traffic:  - Captures traffic on all ports. - Captures traffic on the LAN1 port. - Captures traffic on the LAN2 port. - Captures traffic on the MGMT port. - Captures traffic on the HA port.  The default is LAN1. Note that if you have enabled the LAN2 failoverfeature, the LAN1 and LAN2 ports generate the same output. (For   information about the LAN2 failover feature, see the *About Port Redundancy *section in the *Infoblox NIOS Administrator Guide*.) |
| `vlan &lt;id&gt; ` | Captures traffic for the vLAN interface on LAN1 or LAN2 |
| `duration &lt;seconds&gt; ` | Specifies the duration in seconds for which you want the traffic capture to run. The default is 1800 seconds. |
| `filter`   `'valid-tcpdump-filter-expression' ` | Allows you to set the “tcpdump” filter for traffic capture. |
| `with-rolling ` | Enables rolling of traffic capture file. When the traffic capture file reaches the maximum size limit, the appliance automatically saves the file into a new file and continues capturing the traffic. The appliance can save up to 4 traffic capture files. |
| `transfer ` | Allows you to transfer the traffic capture file to an FTP server or a SCP server. |
| `ftp ` | Transfers the traffic capture file to an FTP server. |
| `scp ` | Transfers the traffic capture file to an SCP server. |

# Example

## Start the traffic capture

`Infoblox &gt; set traffic_capture on`  
` Traffic capture started successfully.`

## Stop the traffic capture

`Infoblox &gt; set traffic_capture off`  
` Traffic capture stopped successfully.`

## Start the traffic capture on a specific port

`Infoblox &gt; set traffic_capture on port lan1`  
` Traffic capture started successfully.`

## Specify the traffic capture filter

`Infoblox &gt; set traffic_capture on port lan1 filter 'host 10.32.2.34'`  
` Traffic capture started successfully. `  
` Infoblox &gt; set traffic_capture on port lan1 filter 'net 192.168.0.0/24'`  
` Traffic capture started successfully. `  
` For information about valid tcpdump filter expressions, refer to `[*https://wiki.wireshark.org/CaptureFilters*](https://wiki.wireshark.org/CaptureFilters)`.`

## Transfer traffic capture file to an FTP server

`Infoblox &gt; set traffic_capture transfer ftp 10.120.20.239 frtest Infoblox123 dest`  
` /home/rpadasalagi/ftp_back.tar.gz`  
` WARNING: This operation may take a long time to complete `  
`Do you want to proceed? (y or n):y`

## Transfer traffic capture file to an SCP server

`set traffic_capture transfer scp 10.120.20.239 frtest - dest /home/test/scp_back.tar.gz `  
`Enter password:`  
` WARNING: This operation may take a long time to complete `  
`Do you want to proceed? (y or n):y `

---

WARNING: When you use the `set traffic_capture transfer` command, the user password is logged in the history. In order to avoid exposure of the user password, you can enter dash (-) instead of the actual password in the `&lt;user-password&gt;` field. You can enter the password when the appliance prompts for the password.

---
