---
title: "Configuring DNS Traffic Control Properties"
source: "/space/nios90/280665557"
pageId: "280665557"
---
You can configure the DNS Traffic Control properties at the Grid or member level. The member DTC properties are inherited from the Grid DTC properties unless you override them.  
  
The following sections explain how to configure DTC properties for the Grid or a Grid member.

# Configuring Grid DNS Traffic Control Properties

To configure DNS Traffic Control properties for the Grid, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the toolbar, and then click **Grid** **DNS** **Properties**.
2. In the **Traffic** **Control** tab, complete the following:
   
   - **Extensible Attributes Source Types for Topology Rules**: Specify up to four extensible attributes to use as source types when defining DNS traffic control topology rules. For information about the extensible attribute topology rules, see [*Defining Topology Rulesets*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280664223). You can use either predefined EAs or use your own. When using the predefined EAs you can select all or select specific types of IPAM objects, network containers, networks, ranges, and hosts and their EA values to be considered for the predefined EAs. For information about predefined extensible attributes, see  . For information about creating custom extensible attributes, see [*Adding Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).  
     You can select only string, enum, and integer types as the EAs to be used. Also, you cannot select EAs for which multiple values have been set. That is, the **Allow multiple values** checkbox must not be enabled for EAs that you want to use to define topology rules.
     
     Note that the enabled IPAM object for Extensible Attributes Source Types for Topology Rules depend on the upgrade history of the Grid. In case, Grid is upgraded from the earlier NIOS version to a later version which supports different IPAM object types, only IPAM Networks and IPAM Ranges types are enabled by default. However, in a Grid that is created with the possibility to select different IPAM object types, all the IPAM object types are enabled by default.
   - **When** **DNS** **Traffic** **Control** **is** **enabled,** **direct** **traffic** **according** **to** **EDNS0** **Client** **Subnet** **when** **possible**: Select this checkbox to direct traffic according to EDNS0 client subnet option when DNS Traffic Control is processing DNS queries.  
     You can enable the appliance to redirect traffic according to EDNS0 client subnet option when DNS Traffic Control is processing DNS queries that contain the EDNS0 client subnet option. When you enable this feature, DNS Traffic Control querying process uses the client address specified in the EDNS0 client subnet option of the DNS query and the appliance includes the EDNS0 client subnet option in the response message. If there are multiple EDNS0 client subnet options in a query, the appliance considers only the first option and ignores the other options. When this feature is disabled, DNS Traffic Control querying process ignores the EDNS0 client subnet option. For more information about EDNS0, see [*Using Extension Mechanisms for DNS (EDNS0)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/154623126).
   - **Specific behavior for DNS queries**: Select one of the following options if you want the appliance to return DNS responses when no DNS traffic control responses are available. The **Return DNS response if there are no DNS Traffic Control responses available** option is selected by default.
     
     - **Return DNS response if there are no DNS Traffic Control responses available**: Select this option if you want the appliance to return DNS responses when DNS Traffic Control responses are not available.
     - **Drop LBDN matched DNS queries during full health update**: Select this option to drop all LBDN queries when the DNS service is waiting to receive a full health status update from the health monitor. The appliance drops the LBDN queries and returns a SERVFAIL response.
     - **No specific behavior**: Select this option when you do not want the appliance to return DNS responses when DNS Traffic Control responses are not available.
   - **Return** **the** **following** **type** **of** **response** **from** **DNSSEC** **signed** **zones**: Select one of the following response types for DNSSEC-signed zones:
     
     - Signed
     - Unsigned  
       For more information on the Signed and Unsigned modes, see [*Managing LBDN Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1422721242)*.*
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Configuring Member DNS Traffic Control Properties

To configure DNS Traffic Control properties for a Grid member, complete the following:

1. From the **Data** **Management** tab, click the **DNS** tab -> **Members** tab -> *member* checkbox -> Edit icon.  
   Alternatively, you can click the **DNS** tab -> **Traffic** **Control** tab, click **Member** **DNS** **Properties** in the toolbar, and then select the required member.
2. In the **Traffic Control** tab, complete the following:
   
   - **DTC Health Check Source**: Select which NIOS network interface to use for the DTC health check. Choose one of the following:  
     Note that for vNIOS appliances, some of the options may vary depending on your vNIOS configuration. For example, if you are using a single network interface instance of vNIOS for Google Cloud, you will see choices specific to the LAN1 interface only. For more information, see the vNIOS documentation specific to your product at [*Appliances*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances).
     
     - ANY interface
     - VIP interface
     - LAN2
     - MGMT interface
     - IP (This is displayed only when you have configured additional IP addresses in the network settings. Specify the IP address of the source.)
   - **Specific Behavior for DNS queries**: Select one of the following options if you want the appliance to return DNS responses when no DNS traffic control responses are available. The **Return DNS response if there are no DNS Traffic Control responses available** option is selected by default. To override the Grid setting, click **Override**.
     
     - **Return DNS response if there are no DNS Traffic Control responses available**
     - **Drop LBDN matched DNS queries during full health update**
     - **No specific behavior**
   - **When DNS Traffic Control is enabled, direct traffic according to EDNS0 Client Subnet when possible**: To retain the same setting as the Grid, keep the inherited value. To override the Grid setting, click **Override**.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
