---
title: "9.0.2 - What's New"
source: "/space/nios90/1323565147"
pageId: "1323565147"
---
The following are the new features introduced in the NIOS 9.0.2 release.

## Support for IPv6 Relay Agent Option Filters (RFE-12987)

NIOS 9.0.2 introduces three IPv6 relay agent filters for the DHCPv6 option filter:

- dhcp6.subscriber-id(38) string
- dhcp6.remote-id(37) string
- dhcp6.interface-id(18) string

You can use the **IPv6 Option Filter option** to selectively filter and process specific options sent by the IPv6 relay agent. You can set the **Relay Agent** field to a value from 0 to 33.

For more information, see the [*Defining Option Filters*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-option-filters) topic.

## DNS Type 64/ Type 65 Caching Support on Virtual DNS Cache Acceleration (RFE-12820)

NIOS 9.0.2 introduces the `expand` argument to the `show dns-accel-cache` CLI command. The `expand` argument displays the expanded DNS type 64/DNS type 65 records stored in the virtual DNS Cache Acceleration cache.

For more information, see the [*show dns-accel-cache*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dns-accel-cache) topic.

## X6 Series Appliance Support for vNIOS for OCI (RFE-13528)

From NIOS 9.0.2 onwards, vNIOS for Oracle Cloud Infrastructure (OCI) is supported on X6 series of appliances. Also from NIOS 9.0.2 onwards, you can deploy a vNIOS for OCI node as a Grid Master as well a Grid member.  For more information, see *Infoblox Installation Guide vNIOS for Oracle Cloud Infrastructure* at [*docs.infoblox.com*](https://docs.infoblox.com).
