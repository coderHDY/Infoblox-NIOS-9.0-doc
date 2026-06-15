---
title: "show ntp"
source: "/space/nios90/280265990"
pageId: "280265990"
---
The `
    ``show`` ``ntp``
  ` command displays a list of the peers of the NTP server, along with status information about each peer.

# Syntax

`show ntp`

This command has no arguments.

# Example

`Infoblox &gt;`` ``show`` ``ntp`  
` remote      refid   st t   when   poll  reach  delay  offset   jitter`  
`==============================================================================`  
`*LOCAL(1)   LOCAL(1) 12 l   47     64    377   +0.000  0.000    0.008`  
  
When you execute the `show ntp` command, the NIOS appliance displays the following information:

- **remote**: The IP address of the remote peer.
- **refid**: Identifies the reference clock.
- **st**: The stratum of the remote peer.
- **t**: The type of the peer, such as local, unicast or broadcast.
- **when**: When the last packet was received.
- **poll**: The polling interval, in seconds.
- **reach**: The reachability register, in octal numerals.
- **delay**: The current estimated delay, in seconds.
- **offset**: The offset of the peer clock relative to the local clock, in milliseconds. The offset value is generally limited to 6 digits.
- **jitter**: The estimated time error of the system clock.

The jitter and offset values must remain low and stable.

The following special characters may be seen on a peer:

- *****: The NTP server is synchronized to this peer.
- **#**: The NTP server is almost synchronized to this peer.
- +: This peer is selected for possible synchronization.
- –: This peer is a candidate for selection.
- ~: This Peer is statically configured.
