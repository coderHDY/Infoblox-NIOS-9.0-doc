---
title: "reset snmp"
source: "/space/nios90/154763367"
pageId: "154763367"
---
This command clears obsolete SNMP credentials (community strings) of devices polled by Network Insight. After that, Network Insight reguesses the SNMP credentials for each device.

You can run this command on the following Grid members:

- Grid Master
- Discovery Consolidator
- Discovery Probes

When the command is executed on the Grid Master or discovery Consolidator, the SNMP credentials are reset for all devices on all discovery Probes. When the command is executed on a discovery Probe, the SNMP credentials are reset for devices only on this Probe.

# Syntax

`reset snmp`

This command has no arguments.

# Example

`Infoblox &gt; ``reset snmp`

`Resetting SNMP credentials will clear all assigned SNMP credentials and cause to reguess them for each device.`

`Do you wish to continue to the SNMP credentials (y or n): y`

`Probe probe.blox: Success`

`The command 'reset snmp' completed successfully.`
