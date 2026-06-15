---
title: "show tcp_timestamps"
source: "/space/nios90/280887741"
pageId: "280887741"
---
The** show tcp_timestamps** command shows whether TCP timestamps are enabled or disabled. If timestamps are enabled, you can view them in the traffic capture file.

Typically, you run the `show tcp_timestamps` command before running the *[set tcp_timestamps](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-tcp-timestamps)* command to determine the status of the TCP timestamps. Based on the status (enabled or disabled), you can run `set tcp_timestamps` to enable or disable the timestamps.

# Syntax

`show tcp_timestamps`

# Example

When TCP timestamps are enabled:

`Infoblox &gt; show tcp_timestamps`

`TCP timestamps are enabled.`

When TCP timestamps are disabled:

`Infoblox &gt; show tcp_timestamps`

`TCP timestamps are disabled.`
