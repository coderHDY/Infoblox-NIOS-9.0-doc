---
title: "Configuring OSPF on the NIOS Appliance"
source: "/space/nios90/1468498790"
pageId: "1468498790"
---
### Note

> **warning**
>
> Use the CLI command **show** **ospf** or show ipv6_ospf to display configuration and statistical information about the OSPF protocol running on the appliance. You can also use the **set** **ospf** or set ipv6_ospf command to write OSPF statistical information to the syslog. In the NIOS appliance, configuration of OSPF is limited to Syslog and the DNS anycast application.

To support DNS anycast and other routing-dependent applications on NIOS appliances, you must first configure the LAN1 or LAN1 (VLAN) interface as an OSPF advertising interface, and then assign an area ID on the interface to associate it with a specific OSPF area. The interface advertises the OSPF routing information to the network so that routers can determine the best server to query. Note that the appliance automatically uses the HA interface as the advertising interface for an HA pair, even though you select the **LAN1** interface. For anycasting, the advertising interface sends out routing advertisements about the anycast address into the network out to upstream routers.

> **warning**
>
> ### Note
> 
> IPv6 is not supported for the **Stub** and **Not-so-stubby** area types.

To configure the LAN1 (HA) or LAN1(VLAN) interface to be an OSPF advertising interface, perform the following tasks:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *Grid_member* checkbox, and then click the Edit icon.
2. Select the **Anycast** tab in the *Grid* *Member* *Properties* editor.  
   The **Anycast** **Interfaces** appear in a table. You can add new anycast interfaces when needed.
3. Click the Add icon of the OSPF Area Configuration table and choose **IPv4** **Configuration** or **IPv6** **Configuration** to define a new OSPF Area. The OSPF Area Configuration will show a similar set of **Add** **(IPv4/IPv6)** **OSPF** **Area** configuration settings based on the protocol type. Enter the following information to configure the LAN1, or LAN1 (VLAN) as the OSPF advertising interface:
   
   - **Advertising** **Interface**: Displays the interface that sends out OSPF routing advertisement. OSPF advertisements are supported on the LAN1 and LAN1(VLAN) interfaces. For an HA pair, select **LAN1** and the appliance automatically uses the HA interface as the advertising interface.
   - **Area** **ID:** Enter the OSPF area identifier of the network containing the upstream routers, in either an IP address format or a decimal format. All network devices configured with the same OSPF area ID belong to the same OSPF area. The area ID configured on the Grid member must match the area ID of the upstream router configuration. Area ID numbers are defined in the same format for IPv6 and IPv4.
   - **Area** **Type:** Select the type of OSPF area to associate with the advertising interface from the drop-down list. The area type configured on the Grid member must match the area type of the upstream router configuration. The supported area types are described as follows:
     
     - **Standard**: A standard area has no restrictions on routing advertisements, and connects to the backbone area (Area 0) and accepts both internal and external link-state advertisements.
     - **Stub**: A stub area is an area that does not receive external routes.
     - **Not-so-stubby**: A not-so-stubby area (NSSA) imports autonomous system (AS) external routes and sends them to the backbone, but cannot receive AS external routes from the backbone or other areas.
       
       OSPF for IPv6 (known as OSPFv3) configuration does not support OSPF authentication options.
   - **AuthenticationType:** Select the authentication method to use to verify OSPF routing advertisements on the interface. The authentication type configured on the Grid member must match the authentication type of the upstream router configuration. The supported authentication types are described as follows:
     
     - **None**: No authentication for OSPF advertisement.
     - **Simple**: A simple password for OSPF advertisement authentication, in clear text.
     - **MD5**: An MD5 hash algorithm to authenticate OSPF advertisements. This is the most secure option.
     - **Authentication** **Key** **ID:** Enter the key identifier to use to specify the correct hash algorithm after you select **MD** as your OSPF authentication type. The authentication key ID configured on the Grid member must match the authentication key ID of the upstream router configuration.
     - **Authentication** **Key:** Enter the authentication password to use to verify OSPF advertisements after you select **Simple** or **MD** as your OSPF authentication type. Specify a key string between 1 to 8 characters for Simple authentication, and a string between 1 to 16 characters for MD5 authentication. The authentication key configured on the Grid member must match the authentication key of the upstream router configuration.
     - **Cost**: Select one of the following:
       
       - **Calculate** **Automatically:** Select this checkbox to auto generate the cost to associate with the advertising OSPF interface to the appliance. If this checkbox is not selected, then you specify the cost value explicitly. Calculate the cost as 100,000,000 (reference bandwidth) divided by the interface bandwidth. For example, a 100Mb interface has a cost of 1, and a 10Mb interface has a cost of 10.
       - **Fixed** **Metric:** Enter the cost to associate with the advertising OSPF interface to the appliance.
     - **Hello** **Interval:** Specify how often to send OSPF hello advertisements out from the appliance interface, in seconds. Specify any number from 1 through 65,535. The default value is 10 seconds. The hello interval configured on the Grid member must match the hello interval of the upstream router configuration.
     - **Dead** **Interval:** Specify how long to wait before declaring that the NIOS appliance is unavailable and down, in seconds. Specify any number from 1 through 65,535. The default value is 40 seconds. The dead interval configured on the Grid member must match the dead interval of the upstream router configuration.
     - **Retransmit** **Interval:** Specify how long to wait before retransmitting OSPF advertisements from the interface, in seconds. Specify any number from 1 through 65,535. The default value is 5 seconds. The retransmit interval configured on the Grid member must match the retransmit interval of the upstream router configuration.
     - **Transmit** **Delay:** Specify how long to wait before sending an advertisement from the interface, in seconds. Specify any number from 1 through 65,535. The default value is 1 second. The transmit interval configured on the Grid member must match the transmit interval of the upstream router configuration.
     - Click **Add** to add the interface to the table.  
       The **Cost**, **Hello** **Interval**, **Dead** **Interval**, **Retransmit** **Interval** and **Transmit** **Delay** settings can be configured for IPv6 deployments. OPSF authentication is not supported for IPv6 on the NIOS platform.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
