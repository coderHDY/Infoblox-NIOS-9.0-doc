---
title: "reset cli"
source: "/space/nios90/280855985"
pageId: "280855985"
---
This command clears obsolete CLI credentials (community strings) of devices polled by Network Insight. After that, Network Insight reguesses the CLI credentials for each device.

You can run this command on the following Grid members:

- Grid Master
- Discovery Consolidator
- Discovery Probes

When the command is executed on the Grid Master or discovery Consolidator, the CLI credentials are reset for all devices on all discovery Probes. When the command is executed on a discovery Probe, the CLI credentials are reset for devices only on this Probe.

# Syntax

`reset cli`

This command has no arguments.

# Example

`Infoblox &gt; ``reset cli`

`Resetting CLI credentials will clear all assigned CLI credentials and cause to reguess them for each device.`

`Do you wish to continue to the CLI credentials (y or n): y`

`Probe probe.blox: Success`

`The command 'reset cli' completed successfully.`

`Infoblox &gt;`
