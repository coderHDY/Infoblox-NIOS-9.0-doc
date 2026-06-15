---
title: "Defining Basic Polling Settings"
source: "/space/nios90/1343096241"
pageId: "1343096241"
---
Grid polling settings apply to all Probe members and all discovery networks that are assigned to a Probe. You can override the Grid settings at the Probe member and network levels.

To define basic polling settings, complete the following:

1. For the Grid: From the **Infoblox** **Grid** tab, select **Grid Manager** &gt; **Discovery** service, and then select **Edit** &gt; **Grid Discovery Properties** from the Toolbar.  
   For Probe members: From the **Infoblox** **Grid** tab, select **Grid Manager** &gt; **Discovery** service, select a member, and then select **Edit** &gt; **Member Discovery Properties** from the Toolbar.  
   For networks: From the **IPAM** tab, click a network name, and then click the Edit icon.
2. In the *Grid Discovery Properties* or *Member Discovery Properties *editor, click **Polling** &gt; **Basic**.  
   In the *Network* editor, click **Discovery**.
3. If you want to override the inherited Grid settings for Probe members and networks, click **Override** and define the following settings.
4. **SNMP Collection**: Select this to execute SNMP protocols to discover and collect information such as traceroute/path collection, vendor and model, SNMP credential collection, routing and ARP tables, switch port data, and VLAN configuration data. If you disable SNMP collection, previously discovered data remains available for viewing. No new data is added and no existing data is removed.   
   Some devices may not support SNMP, and some devices may not enable SNMP by default.  
   Note When you disable SNMP collection on a network with enabled discovery, Network Insight still attempts to authenticate the SNMP credentials of devices that are newly discovered under this network. All newly discovered devices are automatically bound to a default group with enabled SNMP collection.
5. **CLI Collection**: Select this if you expect to use Network Insight to discover devices that support CLI connectivity through Telnet or SSH, and that you possess admin account information. NIOS can use device admin account logins to query network devices for discovery data collection, including IP configuration, port configuration, routing and forwarding tables, and much more.
   
   Note that for SNMP and CLI Collection methods, configure device polling credentials in the **Credentials** tab of the editor. For more information, see Configuring Device Credentials below.
6. **Port Scanning**: Select this to probe the TCP ports. Ensure that you go to the **Advanced** tab to configure more settings for this option as described in the next section. If you disable Port Scanning, NIOS attempts no port probes other than SNMP on any device.
   
   - **Profile Device**: If enabled, NIOS attempts to identify the network device based on the response characteristics of its TCP stack, and uses this information to determine the device type. In the absence of SNMP access, the Profile Device function is usually the only way to identify non-network devices. If disabled, devices accessible via SNMP are identified correctly. All other devices are assigned a device type of Unknown. Profile Device is disabled by default for network polling.
7. **Smart IPv4 Subnet Ping Sweep**: Select this to execute Ping sweeps only on subnetworks that are known to exist but no IPs can be found within the subnet, such as through ARP or other means.
8. **Complete Ping Sweep**: Select this to enable brute-force subnet Ping sweeps on IPv4 networks. This method executes Nmap that uses ICMP echo requests, ICMP timestamp requests, and TCP SYN to ports 161, 162, 22, and 23 (for the SNMP, SNMPTRAP, SSH, and TELNET services correspondingly). Subnet ping sweeps are used as a last resort in the discovery process. Perform a subnet ping sweep if NIOS cannot identify any network devices in a given subnet. Subnet ping sweeps should be performed no more than once per day, and will stop on a given subnet once NIOS Discovery locates a network device and is able to collect data from it. Ensure that you configure advanced settings for this option in the **Advanced** tab as described in the next section.  
   Note that NIOS does not perform Smart Subnet Ping sweeps on subnets larger than /22. NIOS also does not perform Ping sweeps on IPv6 networks, because of the dramatically greater scale of network addresses in the IPv6 realm. The Complete Ping Sweep differs from the Smart Subnet Ping Sweep in the following ways:
   
   - The Complete Ping Sweep will run only against the specified range.
   - The sweep will run regardless of the range size.
   - The sweep will run regardless of the number of discovered devices within the specified range.
9. **NetBIOS Scanning**: Select this to enable NIOS to collect the NetBIOS name for endpoint devices in the network. This feature can be enabled only by users with SysAdmin privileges. This feature is globally disabled by default (and also for device groups) to prevent unexpected scanning of the network by a new collector.
10. **Automatic ARP Refresh Before Switch Port Polling**: Select this to enable refreshing of ARP caches on switches and switch-routers in the managed network before NIOS performs polling of switch ports. Enabling this feature applies only to switched Ethernet devices. This feature enables more accurate detection of all endpoint devices on L2 switches. Without ARP refresh, some endpoint devices may not be detected. This feature is globally disabled by default. Individual ARPs can also be set to enable or disable this feature.
11. **Switch Port Data Collection**: Select this to enable the Probe member to poll L2 enterprise switches. You can completely disable switch port polling by deselecting this checkbox. You can also separately schedule polling for switch port data collection as follows:
12. **Periodic Polling**: Define regular polling time periods. Choose a polling interval of 30 or more minutes or 1-24 hours.
13. **Scheduled Polling**: Schedule recurrent polling based on hourly, daily, weekly, or monthly time periods. Choosing this option, click the Calendar icon and a Polling Scheduler appears; click the Edit icon to make scheduling changes. Choose a recurrence pattern of **Once**, **Hourly**, **Daily**, **Weekly,** or **Monthly.** In all cases, you must choose an **Execution Time**.
14. In the **Polling Frequency Modifier** field, specify the coefficient that modifies the polling frequency modifier.  
   For example, by default it happens once a day. With the **Polling Frequency Modifier** option introduced in NIOS 9.0.4, you can set the polling frequency modifier to occur once every two days or twice a day.  
   You can set values between **0.5** and **2 **for the global level polling frequency modifier. Interpret the values as follows:
   
   - **0.5**: Makes polling twice as slow.
   - **1**: Takes the default setting, which is once a day.
   - **2**: Makes polling twice as fast.  
     To set the **Polling Frequency Modifier** value for global settings, ensure that you enable the **Use Global Polling Frequency Modifier** checkbox for network configuration.
15. Save the configuration.
