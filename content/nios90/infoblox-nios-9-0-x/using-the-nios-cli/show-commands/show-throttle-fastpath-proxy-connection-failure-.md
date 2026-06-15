---
title: "show throttle_fastpath_proxy_connection_failure_syslog"
source: "/space/nios90/1583972380"
pageId: "1583972380"
---
The `show throttle_fastpath_proxy_connection_failure_syslog` CLI command displays the current throttling status for proxy connection failure syslog messages during accelerated networking, along with the configured throttling interval.

# Syntax

`show throttle_fastpath_proxy_connection_failure_syslog`

The displayed interval if configured, will be within the valid range of 1 to 600 seconds.

# Example

Case 1: Throttling enabled

```
show throttle_fastpath_proxy_connection_failure_syslog
Throttling: Enabled
Interval: 60 seconds
```

Case 2: Throttling disabled

```
show throttle_fastpath_proxy_connection_failure_syslog
Throttling: Disabled
```
