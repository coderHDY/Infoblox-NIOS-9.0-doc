---
title: "Defining Advanced Polling Settings"
source: "/space/nios90/1343325278"
pageId: "1343325278"
---
If you selected any polling settings that involve the TCP scanning and Ping sweeps, configure additional settings for them. Advanced SNMP polling settings consist of choosing the TCP Scan Technique, along with a number of specialized settings for Ping Sweeps and other operations.

To define advanced Grid-wide polling settings for TCP scanning and Ping sweeps, complete the following:

1. For the Grid: From the **Infoblox Grid** tab -&gt; **Grid Manager** tab -&gt; **Discovery** service, select **Edit** -&gt; **Grid Discovery Properties** from the Toolbar.  
   For members: From the **Infoblox Grid** tab -&gt; **Grid Manager** tab -&gt; **Discovery** service, select **Edit** -&gt; **Member Discovery Properties** from the Toolbar.  
   For networks: From the **IPAM** tab, select the *network* checkbox and click the Edit icon.
2. In the *Grid Discovery Properties, Member Discovery Properties, or (IPv4 or IPv6) Network* editor, click **Polling** -&gt; **Advanced** and define the following settings.
3. If you want to override the inherited Grid settings for Probe members and networks, click **Override** and define the following settings.
4. **TCP Scan Technique**: Select the TCP technique you want to use for the discovery. The default is **SYN**. For more information, see [*TCP*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/supported-discovery-methods)*.*
   
   - **SYN**: Select this to quickly perform scans on thousands of TCP ports per system, never completing connections across any well-known port. SYN packets are sent and the poller waits for a response while continuing to scan other ports. A SYN/ACK response indicates the protocol port is listening while an RST indicates it is not listening. The SYN option presents less impact on the network.
   - **CONNECT**: Select this to scan IPv6 networks. Unlike the SYN option, complete connections are attempted on the scanned system and each successive TCP protocol port being scanned.
5. Specify the TCP ports settings:
   
   - In the table, select the checkboxes of the TCP ports you want to discover. To select all ports, click the checkbox in the header.
   - To add a new port, click the Add icon.
6. Specify other advanced polling settings:
   
   - **Purge** ** expired ** **assets ** **data ** **after**: Removes records of discovered assets that are no longer reachable after a specified period of time. The default is set to one day.
   - **Purge** ** expired** ** device ** **data ** **after**: Removes records of discovered network infrastructure devices that are no longer reachable after a specified period of time. The default is set to seven days, a more forgiving value given that devices sometimes require maintenance, upgrades or repairs, or in cases where hosts leave the network on long trips.
   - **ARP Aggregate Limit**: Sets a limit for the number of entries (IP addresses) per MAC address in ARP tables. If there are too many entries associated with a MAC address, this can be treated, for example, as a "honeypot". Therefore, MAC addresses with more entries than the specified limit are ignored and filtered out during data extraction and parsing. The default limit is 30 ARP table entries (IP addresses) per MAC address.
   - **Route** ** Limit**: Limits the size of the routing table that discovery is required to collect from any given device. Some routers can have tables in the hundreds of thousands of entries, and collecting such a large body of data can impose performance problems in the network and in discovery data collection. This setting defaults to 3000, and automatically excludes BGP routes from the collection. Consult Infoblox Technical Support before making changes to this value.
   - **Ping** ** Sweep** ** Timeout** ** (ms)**: Period of time allowed, in milliseconds, before a Ping times out to any given device.
   - **Ping** ** Sweep ** **Attempts**: The number of attempts on each address in a Ping sweep before the sweep continues.
   - **Ping** ** Sweep ** **Frequency**: Defaults to 1, because ping sweep should not be executed more than once a day when the feature is enabled at the grid level or for a given discovery range. This setting affects the **Smart** **Ping** **Sweep** and **Complete** **Ping** **Sweep** features under *Grid* *Discovery* *Properties*.
   - **ARP** ** Cache** ** Refresh**: Defines the time period between ARP refreshes by Network Insight across all switch ports. Before any other switch port polling and discovery operations take place (including any global discovery polling operations initiated by the administrator), another ARP refresh is carried out by the Probe appliance regardless of the time interval. The default is five minutes, because switch forwarding tables are frequently purged from LAN switching devices. The default on Cisco switches is five minutes/300 seconds. Network Insight primarily uses ARP Cache refreshes to improve the accuracy of end-device discovery. Without this feature, some endpoints may not be discovered and cataloged.
   - **Ignore** ** Conflict** ** Duration**: Used when resolving conflicts and when choosing the option to Ignore the conflict when resolving it. The length of time during which conflicts is ignored is defined with this settings. Increments can be defined in **Hours** or **Days**.
   - **Number** ** of** ** discovered ** **unmanaged ** **IP** ** addresses ** **per** ** notification**: The maximum number of unmanaged IP addresses that the appliance discovers before it sends SNMP and email notifications, if enabled. The appliance resets the counter after it hits this number and sends notifications. The default is 20.
   - **Interval** ** between** ** notifications ** **for ** **discovered ** **unmanaged ** **IP** ** addresses**: This number determines how often the appliance sends SNMP and email notifications, if enabled, when it discovers the maximum number of unmanaged IP addresses (configured for ** Number of discovered unmanaged IP addresses per notification **). This is the time interval between two notifications for discovered unmanaged objects. Select the time unit from the drop-down menu. The default is five minutes.
   - **DNS Lookup Option**: Specify whether you want to perform a reverse DNS lookup from discovered IP addresses. Select one of the following from the drop-down list:
     
     - **Network Devices**: Select this to resolve network device (switches and routers) IP addresses. This option is selected by default.
     - **Network Devices and End Hosts**: Select this to resolve both network device (switches and routers) and end host IP addresses.
     - **Off**: Select this to turn off reverse DNS lookups for discovered IP addresses.
     - **DNS Lookup Throttle**: This is the value in a percentage that throttles the traffic on the DNS servers. Setting a lower value reduces the number of requests to DNS servers. You can specify a value between 1 and 100. The default value is 100.
   - **Disable** ** discovery ** **for** ** networks** ** not** ** in ** **IPAM**: Disables executing discovery on any infrastructure networks that are not presented in the Infoblox IPAM system; e.g. present and managed in a network view or network container.
   - **Authenticate ** **and** ** poll** ** using** ** SNMPv2c ** **or** ** later** ** only**: For credential discovery and device polling exclusively using SNMPv2c and up, preventing use of SNMPv1, enable this checkbox.
   - **Use ** **DHCP ** **Routers** ** as ** **Seed ** **Routers**: Select this so the Probe members can use the default gateways for associated DHCP ranges and networks as seed routers to more quickly discover and catalog all devices (such as endpoint hosts, printers and other devices). All such default gateways are automatically leveraged by discovery, and no further configuration is necessary unless you wish to exclude a device from usage.  
     Use this option carefully and avoid continuous updating of DHCP routers by a third-party component such as Microsoft servers, as it may trigger a discovery service restart when attempting to apply the new configuration.
     
     Ensure to check for a list of configured DHCP seed routers for any discovery Probe member in the **Seed** tab -&gt; **Advanced** tab of the *Member* *Discovery* *Properties* editor.
   - **Log** ** IP ** **Discovery** ** events** ** in ** **Syslog**: Sends a message to the configured Syslog service when an IP address of an active host is discovered.
   - **Log** ** network** ** discovery ** **events** ** in ** **Syslog**: Sends a message to the configured Syslog service when a network discovery process takes place in the Grid.
7. Save the configuration.
