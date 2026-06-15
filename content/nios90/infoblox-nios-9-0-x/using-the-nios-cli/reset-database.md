---
title: "reset database"
source: "/space/nios90/280757486"
pageId: "280757486"
---
The **reset** **database** command removes configuration files and DNS and DHCP data from the NIOS appliance database. However, the network and licensing information remains intact. The network settings of the appliance include the IP address and subnet mask for the appliance, the IP address of the gateway, the host name, and the remote access setting.  
 You can use this command to diagnose problems such as the following:

- Misplacing the administrator account and password.
- Preserving the log files when clearing the database.

The **reset** **database** **auto_provision** command resets the NIOS appliance to default settings, re-enables auto-provisioning, and a dynamic IP address is assigned to the appliance.

# Syntax

`reset database [auto_provision]`



| **Argument** | **Description** |
| --- | --- |
| `auto_provision` | Auto-provisioning is re-enabled and a dynamic IP address is assigned after resetting the database of appliance. |

# Reset the database

`Infoblox &gt; ``reset`` ``database`  
` The following network settings can be restored after reset: IP Address: 10.1.1.10`  
` Subnet Mask: 255.255.255.0`  
` Gateway: 10.1.1.1`  
` Host Name: ns1.corp100.com`  
` Remote Console Access: true The entire database will be erased. Do you wish to preserve basic network settings? (y or n) ``y`

## Reset the database and re-enable auto-provisioning

`Infoblox &gt; ``reset`` ``database`` ``auto_provision`  
` The entire system will be reset to default settings and system will try to obtain a dynamic address.`  
` WARNING: THIS WILL ERASE ALL DATA AND LOG FILES THAT HAVE BEEN CREATED ON THIS SYSTEM. ARE YOU SURE YOU WANT TO PROCEED? (y or n): y`
