---
title: "set sysName"
source: "/space/nios90/280658727"
pageId: "280658727"
---
You can use the **set** **sysName** command to set the FQDN (fully qualified domain name) of the appliance to allow configured SNMP management system to query the sysName value. If the appliance is an HA pair, you can use the **name2** command to set the FQDN of node 2 of the HA pair.

# Syntax

`set sysName ``name1 ``[``name2``]`

| **Argument** | **Description** |
| --- | --- |
| `name1`` ` | The FQDN of the appliance. |
| `name2` | The FQDN of node 2 of an HA pair. |

# Examples

## Setting the FQDN of the appliance

Enter the following on the appliance:

`Infoblox &gt; ``set`` ``sysName`` ``eng.corp100.com`

## Setting the FQDNs of an HA Pair

Enter the following on the appliance:

`Infoblox &gt; ``set`` ``sysName`` ``active.corp100.com`` ``passive.corp100.com`
