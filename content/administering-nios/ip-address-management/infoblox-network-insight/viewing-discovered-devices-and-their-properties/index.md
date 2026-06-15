---
title: "Viewing Discovered Devices and their Properties"
source: "/space/nios90/280273310"
pageId: "280273310"
---
Grid Manager provides a **Devices** page under **Data** **Management** for a complete list of every device that discovery finds, and lists all unmanaged and managed devices. Here you can explore information about the discovered devices and drill down to specific information about every device. For information, see the next section.

Listed devices can be displayed in one of three states in the **Devices** page:

- Devices that appear with an empty value in the **Managed** column are devices that are discovered, but are not recognized by IPAM, are not part of an IPAM network, and hence cannot be changed to managed status in Grid Manager. These discovered devices cannot be changed to managed status, but you can perform actions such as activating and deactivating ports, executing **DiscoverNow** on the device, view their list of connected networks, and other actions. Avoid changing the state of ports or taking other actions on a discovered device, unless the action is verified by an administrator.
- Device shown in yellow table rows are unmanaged devices, but are recognized by IPAM and can be converted to managed status. Yellow rows appear with a value of **No** in the **Managed** column. You can convert devices in yellow table rows to managed objects under IPAM (host, fixed address, A record or PTR record).
- Devices shown in light grey table rows are managed devices, with a value of **Yes** in the **Managed** column.

> **warning**
>
> ### Note
> 
> For information about managed and unmanaged devices, see [*Converting Unmanaged Devices to Managed Devices*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764086/Managing+Discovered+Data#CUDM). You can also use the "Unmanaged devices and networks" filter in global search to locate all the unmanaged devices and networks discovered through discovery. For more information, see [*Using Global Search*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).

Also, you can view VRF-based devices and map them to network views from the **Data Management** → **Devices** tab. See Viewing Discovered VRFs and Mapping Network Views below.
