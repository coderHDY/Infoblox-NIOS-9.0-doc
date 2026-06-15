---
title: "Unsupported Operations for Submitters"
source: "/space/nios90/1455358493"
pageId: "1455358493"
---
When admins are part of a submitter group in an approval workflow, there are certain operations they cannot perform even though they may have the permissions to do so. Following is the list of operations that submitters cannot perform:

- Reclaim IPv4 or IPv6 addresses
- Expand networks
- Resize networks
- Split networks
- Sign (DNSSEC) zones
- Unsign DNSSEC signed zones
- Import DS to DNSSEC signed zones
- Perform KSK rollovers on a DNSSEC signed zones
- Copy records from one DNS zone to another
- Clear all discovered data
- Clear discovered timestamps
- Clear unmanaged addresses
- Resolve discovery conflicts
- Update extensible attributes on multiple objects at a the same time
- Delete or modify several objects at a time (using the "Select all objects in this dataset" option from Grid Manager)
- Order DHCP Ranges inside a network (feature is available only when used with Sophos)
- Configure member DHCP Captive Portal through the wizard
- Restore objects from the Recycle Bin
- Delete non-native NIOS DNS resource records. These objects can only be synchronized from a Microsoft DNS server
- Copy rules from one Response Policy Zone to another
- Order Response Policy Zones
