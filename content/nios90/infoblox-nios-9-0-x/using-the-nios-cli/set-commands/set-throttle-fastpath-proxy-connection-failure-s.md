---
title: "set throttle_fastpath_proxy_connection_failure_syslog"
source: "/space/nios90/1583808559"
pageId: "1583808559"
---
The `set throttle_fastpath_proxy_connection_failure_syslog` CLI command enables or disables throttling of syslog messages generated when a proxy connection failure occurs during accelerated networking. The command allows configuration of a throttling interval, which controls how frequently such messages appear in the logs.

# Syntax

`set throttle_fastpath_proxy_connection_failure_syslog &lt; on | off &gt; [interval]`

| **Argument** | **Description** |
| --- | --- |
| on | Enables throttling |
| off | Disables throttling |
| interval | Time in seconds to supress repeated log messages.  Valid range: 1-600 seconds. |

If the interval is not specified when enabling, the default value of 1 second will be applied.

# Example

Case 1: Enables throttling and supresses repeated proxy connection failure logs for 60 seconds

`set throttle_fastpath_proxy_connection_failure_syslog on 60`

Case 2: Disables throttling

`set throttle_fastpath_proxy_connection_failure_syslog off`
