---
title: "Adding Device Hints"
source: "/space/nios90/1513226388"
pageId: "1513226388"
---
Starting from version 9.0.6, you can provide hints to the discovery engine to enhance the identification of specific types of network devices, primarily routers and switch-routers, by utilizing IP address patterns and DNS name patterns. These hints help prioritize discovered devices in the credential collection queue, accelerating the discovery process. Network Insight considers these hints when determining the device type of a discovered device. For instance, if most routers are found at an IP address ending with ".1", specifying "*.*.*.1" and associating the router device type with an IP address hint allows the appliance to prioritize discovered devices matching that hint higher in its credential collection queue to help speed discovery. Network Insight considers this hint when it attempts to determine a device type for a discovered device.

- Use a single asterisk (*) to wildcard an entire IPv4 octet (192.168.1.*). The " * " wildcard is not applicable for IPv6 hint rules. The double colon ("::") is used for IPv6 hint values.
- Valid IP address patterns are either the numeric values of the octet or an asterisk for any number of octets in the IP address. For device name matches, valid DNS characters and the asterisk character are valid definitions. For instance, **rtr** will match any device name with "rtr" in its definition.
- Device hints are optional and are used only to speed network discovery and to assist with the determination of device types absent other discovery data.

To create a new device hint, perform the following steps:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab, and then click **Discovery**.
2. Click **Edit** &gt; **Grid Discovery Properties** in the Toolbar.
3. Click the **Device Hints **tab.
4. Click **Add **(+) to add a new device hint.
5. Select the **Device Type** from the drop-down list.
6. Enter the IP address pattern or DNS pattern needed for device detection under **Criteria.**
7. To delete a device hint, use the selection checkbox on the left to select the hint and click **delete.**

Device Hints apply across the entire system and are not associated with network views.

### **IPv6 Hint Details**

For IPv6, router hints are formatted to start with a double-colon designator ("::") and followed by the host-side identifier for the hint. IPv6 router rules can be up to 48 bits in length, applying only to networks where the rule fits. The shorter the hint, the broader the rule.

Such rules apply to router or Switch-router devices to be used during discovery.

For IPv6 networks, the process entails discovering routes and then sending probes, using those hints, into those networks to discover the intermediate hops leading to them. Discovery performance can be improved if a site uses static IPv6 addresses for routers, such as:

&lt;any 64-bit network prefix&gt;:&lt;first 56 bits of host IP&gt;:10

These values can be added as hints. Further examples are as follows:

| **Discovered/Found** **Route** | **Hint** | **Resulting** **Discovery** **Target** |
| --- | --- | --- |
| FC00:db8:a2:b01::/64 | ::1 | FC00:db8:a2:b01::1 |
| FC00:2345:3400:1678::/64 | ::2022:0:1 | FC00:2345:3400:1678::2022:0:1 |
| FC00:2224:1353::/48 | ::2:0:10 | FC00:2224:1353::2:0:10 |



Network Insight introduces support for POSIX regular expressions to define patterns for matching IP addresses or DNS names.

Examples:

- ^switch\-([0-9]+).*$ will match DNS names such as "switch-0123-office2", "switch-3".
- ^.+\.254$ will match IP addresses ending with .254, such as "10.0.0.254", "172.19.20.254".
- ^19\..+$ will match IP addresses starting with 19., such as "19.0.0.1", "19.45.67.234".
- ^(router.+)|(.+\.127)$ will match DNS names starting with "router" or IPv4 addresses ending with .127.

The maximum length of a pattern is 255 characters.

### **WAPI Support**

Device hints can be added, modified, or deleted using the `discovery:gridproperties` object in WAPI.

- **Type:** String
- **Max length:** 255 characters
- **Search:** The field is not available for search.

Device Hints should be configured at the Grid Discovery level only and apply to all devices. Overrides at the Member Discovery Properties level are not allowed.
