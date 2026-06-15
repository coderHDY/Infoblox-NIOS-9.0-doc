---
title: "set log_txn_id"
source: "/space/nios90/280397704"
pageId: "280397704"
---
The `set`` ``log_txn_id` command enables or disables the display of DHCP transaction IDs in syslog messages. By default, DHCP transaction ID logging is enabled. When you enable DHCP transaction ID logging, the appliance displays transaction IDs for the following packets:

- DHCPDISCOVER
- DHCPREQUEST
- DHCPRELEASE
- DHCPDECLINE
- DHCPINFORM

In Grid Manager, the transaction IDs are appended to the end of the corresponding syslog messages with a prefix of "TransID." You can view this information in the **Administrator** tab -&gt; **Logs** tab -&gt; **Syslog** tab of Grid Manager.  
 When you enable this feature, you must restart DHCP service for the feature to take effect. When you disable this feature, you must perform a force restart services for the change to take effect. Use the [*show*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-log-txn-id)[ ](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-log-txn-id)[*log_txn_id*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-log-txn-id) to display the current status of DHCP transaction ID logging.

# Syntax

`set log_txn_id (ON|OFF)`

| **Argument ** | **Description** |
| --- | --- |
| ON | Enables DHCP transaction ID logging on an appliance. |
| OFF | Disables DHCP transaction ID logging on an appliance. |

# Example

## Enable DHCP transaction ID logging on an appliance

`Infoblox &gt; ``set`` ``log_txn_id`` ``ON`  
` DHCP Transaction id logging turned ON`  
` DHCP force restart services is required in order for the changed value to take effect`

## Disable DHCP transaction ID logging on an appliance

`Infoblox &gt; ``set`` ``log_txn_id`` ``OFF`  
` DHCP Transaction id logging turned OFF`  
` DHCP force restart services is required in order for the changed value to take effect`

## Sample syslog messages in the Syslog tab of Grid Manager:

**When DHCP transaction ID logging is on:**

`2013-03-25T09:39:41+00:00 daemon (none) dhcpd[14434]: info DHCPINFORM from 10.0.0.199`  
`via 10.120.20.182 TransID 78563412: not authoritative for subnet 10.0.0.0`  
`2013-03-25T09:39:36+00:00 daemon (none) dhcpd[14434]: info DHCPDISCOVER from`  
`cc:bb:cc:dd:ee:ff via 10.120.20.182 TransID 78563412`

**When DHCP transaction ID logging is off:**

`2013-03-25T09:39:39+00:00 daemon (none) dhcpd[14434]: info DHCPREQUEST for 10.0.0.199`  
`from cc:bb:cc:dd:ee:ff (dhcp-10-0-0-199) via 10.120.20.182`
