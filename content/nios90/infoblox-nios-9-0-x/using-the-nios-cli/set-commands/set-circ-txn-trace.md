---
title: "set circ_txn_trace"
source: "/space/nios90/280855867"
pageId: "280855867"
---
The `set circ_txn_trace` command enables or disables a circular trace buffer for DB transaction. The file used for capturing the trace buffer is of fixed size, so tracing can be left running for an indefinite period without considering the disk space when trying to capture a problem.

# Syntax

`set circ_txn_trace [on|off]`

| **Argument** | **Description** |
| --- | --- |
| on | Enable tracing for circular DB transactions |
| off | Disable tracing for circular DB transactions |

# Example

`Infoblox &gt; set circ_txn_trace on`

`Infoblox &gt; set circ_txn_trace off `

`Circular txn trace generated /storage/cores/circ.1632251896.gz`
