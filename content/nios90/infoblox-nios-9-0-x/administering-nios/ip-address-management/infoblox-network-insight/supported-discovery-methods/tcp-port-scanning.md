---
title: "TCP Port Scanning"
source: "/space/nios90/1346142427"
pageId: "1346142427"
---
By enabling port scanning, Network Insight probes the list of TCP ports enabled in the Advanced tab, to determine whether they are open. You can control some settings for port scanning behavior, including the choice of a TCP scanning technique.

- Profile Device: If enabled, Network Insight attempts to identify the network device based on the response characteristics of its TCP stack, and uses this information to determine the device type. In the absence of SNMP access, the Profile Device function is usually the only way to identify devices that do not support SNMP. If you disable Profile Device, devices accessible via SNMP are still correctly identified; all other devices are assigned a device type of **Unknown**. **Profile** **Device** is disabled by default for discovery polling.

The Profile Device option uses the editable list of TCP protocol ports from the **Grid** **Discovery** **Properties** **–&gt;** **Polling** **–&gt;** **Advanced** tab as its profile, and polls each of the ports enabled in that list, using the configured timeout value and the number of polling attempts for each port.  
For more information, see [*Defining Seed Routers for Probe Members*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/configuring-discovery-properties#DSRPM).  
Should you disable Port Scanning, discovery attempts no port probes other than SNMP on any device.
