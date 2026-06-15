---
title: "sapwalk2"
source: "/space/nios90/1743913861"
pageId: "1743913861"
---
The `sapwalk2` command is a diagnostic CLI tool available on Network Insight probes that enables SNMP-based network discovery through a structured SNMP walk, targeting SAP (Service Advertising Protocol) or equivalent enterprise MIB trees. It is useful for retrieving detailed service-level data from SNMP-enabled network devices.

> **warning**
>
> This command is available in the serial console of Network Insight Probes and requires a Discovery license.

## Syntax

`sapwalk2`

This command has no arguments. All required input is collected interactively through a CLI menu.

## Example

The following example shows how to run the `sapwalk2` command:

```
Infoblox > sapwalk2

IP Address: 192.168.0.1
Enter the IP address of the device.

1. 172.19.11.17  
2. 2.5.61.123  
Select source IP address or q to quit: 1

1. v1  
2. v2c  
3. v3  
Select SNMP version or q to quit: 3

Username: snmpv3_user  
Select SNMP Authorization Protocol or q to quit: 4  
SNMP Authorization Protocol Password: ********  
Select SNMP Privacy Protocol or q to quit: 1  
Root OID to start walk [1.3.6.1.2.1.1]:
```

After the scan completes, the output is displayed and saved as a log file in the following directory:

```
/storage/infoblox.var/sapwalk2/
```

## Transferring Log Files

To export log files, you can use the following command:

```
set transfer_sapwalk2_logs ftp|scp &lt;server_ip&gt; &lt;username&gt; &lt;password&gt; dest &lt;remote_destination&gt;
```

### Examples

```
set transfer_sapwalk2_logs ftp 10.0.2.1 ftpuser ftppassword dest /upload/sapwalk2
set transfer_sapwalk2_logs scp 10.0.2.3 sshuser - dest ~/sapwalk2
```

Use `-` as the password to trigger a secure prompt (password will not be logged).

The log files are automatically deleted after 3 days by a scheduled script.
