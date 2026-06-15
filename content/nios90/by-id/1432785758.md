---
title: "Principle of Conflicts for DHCP Ranges"
source: "/space/nios90/1432785758"
pageId: "1432785758"
---
A DHCP Range is an object used for DHCP Service, to define which IP can be temporary allocated to a device using LEASE. It is expected that ONLY the device that hold the LEASE is using this IP.

If an IP is discovered on an IP slot of a DHCP Range and there is no corresponding LEASE, then there is a possible DHCP Range conflict (between the IP and the DHCP Range).

If in case the IP discovered is allocated for a LEASE, then we have two use case scenario:

- The LEASE IP has the same MAC than the discovered IP. All good.
- The LEASE IP has a different MAC than the discovered IP. Here a MAC ADDRESS conflict will be seen between the IP discovered and the IP LEASED.
