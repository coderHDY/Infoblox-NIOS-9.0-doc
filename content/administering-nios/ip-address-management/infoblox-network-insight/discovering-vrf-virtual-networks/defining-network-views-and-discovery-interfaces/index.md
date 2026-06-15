---
title: "Defining Network Views and Discovery Interfaces"
source: "/space/nios90/1343293133"
pageId: "1343293133"
---
In all three deployment types, you decide whether you want one or multiple network views based on how your network operates, as outlined in the three network types above. You can also consider the following guidelines:

- When all infrastructure devices for the network are reachable through a management VRF or a shared services VRF, and you do not need extended discovery capabilities to discover and/or manage end hosts, you can use a single network view. You also use a single virtual discovery interface to connect to the same 802.1q ID as the management VRF network. You can then discover and analyze all VRF-aware devices on the management VRF.
- If you want your devices end host and downstream device information separated for viewing and reporting, then you will want to use network views for each virtual network. Doing so is helpful for visual purposes, but it is not required.
- If you want ping sweeps, port scanning, fingerprinting and other discovery services into end hosts within each of your VRF networks, you must define multiple network views, one for each of your VRF networks; and each of which requires an associated virtual discovery interface and discovery ranges.

In this section:

*[children]*
