---
title: "set tcp_timestamps"
source: "/space/nios90/280658709"
pageId: "280658709"
---
The **set tcp_timestamps** command allows you to enable or disable TCP timestamps. You can view these timestamps in the traffic capture file. TCP timestamps are enabled by default. If you disable TCP timestamps, the timestamps are not displayed in the traffic capture file.

You can run the *[show tcp_timestamps](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-tcp-timestamps)* command to determine whether the TCP timestamps are enabled or disabled before running `set tcp_timestamps`.

# Syntax

`set tcp_timestamps {enable|disable} `

# Example

`Infoblox &gt; set tcp_timestamps enable`
