---
title: "Managing DNS Traffic Control Pools"
source: "/space/nios90/281247795"
pageId: "281247795"
---
A pool contains load balanced servers. You can define multiple servers for a pool. Each LBDN must have at least one pool associated with it to be operational. For sites with a large volume of incoming traffic, you can configure DNS Traffic Control to distribute client requests to multiple servers using a load balancing pool. An individual server can belong to one or multiple load balancing pools, depending on how you want to manage your network traffic. You can also set the order of servers in the pool and define a ratio on a server basis.

# Configuring DNS Traffic Control Pools

A pool can contain preferred and alternative load balancing methods. You can define permissions on these pools and associate extensible attributes with them. Each pool can contain one or more health monitors associated with it. You can define TTLs at the LBDN level. These TTLs are valid for dynamic RRsets that are created by the querying process for each query.

To configure a pool, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, and then click the arrow next to the Add icon and select **Pool**.
2. In the *DTC* *Pool* *Wizard*, complete the following:
   
   - **Name**: Enter the name of the pool.
   - **Comment**: Enter additional information about the pool.
   - **Auto Consolidated Monitors**: Select this option to enable auto-managing of DNS Traffic Control Consolidated Monitors. This option locks all the DNS Traffic Control consolidated monitor settings and creates a DNS consolidated monitor for each health monitor in the pool with the following settings:
     
     - Availability – ALL
     - Full health communication – Yes
     - Listen To members - all DNS Traffic Control members that serve linked LBDN(s).
     
     Enabling the **Auto Consolidated Monitor** option also helps to synchronize the health statuses of DNS Traffic Control objects in the LBDN for each DNS Traffic Control Grid member, which means if one Grid member considers that the DNS Traffic Control Server is RED, this server will be RED for each Grid member performing the health check. For information on DNS consolidated monitors, see [*Configuring DTC Monitors for Health Check*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/configuring-dtc-monitors-for-health-check)*.*  
     For information on Limitations and Warnings of the **Auto Consolidated Monitors** option, see [*Limitations For DNS Traffic Control*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/managing-dns-traffic-control-objects)*.*
   - **Disabled**: Select this to disable the pool.
3. Click **Next** to associate health monitors with the pool:
   
   - **Health Monitors**: Select the health monitor from the **Available** table, which you want to associate with the pool, and then click the right arrow to move the selected health monitor to the **Active** table. You can use SHIFT+click and CTRL+click to select multiple health monitors. To dissociate the health monitor from the pool, select it and click the left arrow to move it to the **Available** pane from the **Active** pane.
   - **Availability Requirements**: Select from the following:
     
     - **All**: All active monitors must report the available status for the pool to be determined as available.
     - **Any**: Any number of active monitors must report the available status for the pool to be determined as available.
     - **At least**: The minimum number of active monitors that must report the available status for the pool to be determined as available.
4. Click **Next** and select the preferred load balancing method:
   
   - **All Available**
   - **Ratio: Dynamic (see details below in the procedure)**
   - **Global Availability**
   - **Source IP Hash**
   - **Ratio: Fixed**
   - **Round Robin**
   - **Topology (see details below in the procedure)**  
     For more information, see [*Load Balancing Methods for DNS Traffic Control*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/load-balancing-methods-for-dns-traffic-control)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/managing-dns-traffic-control/load-balancing-methods-for-dns-traffic-control)
5. If you select Ratio: Dynamic as the preferred method, also select a dynamic ratio method from the following:
   
   - **Round Trip Delay**: Select this to enable load balancing based on the proximity of DTC servers determined through round trip delay. Specify the following:
     
     - **Monitor**: Select a pre-configured health monitor to use for monitoring the round trip delay.
   - **SNMP**: Select this to enable load balancing based on a server metric captured by an SNMP health monitor. Specify the following:
     
     - **Monitor**: Select a health monitor for which to track a server metric.
     - **OID**: Specify an object identifier that indicates the metric to track.
     - **Weighing**: Select to weigh DTC servers by priority or ratio.
     - **Inverse OID value**: Select this if you want to use the value of the monitored metric as inversed for convenience of determining the availability of the server.
6. If you select **Topology** as preferred method, also select a Topology Ruleset. Only topology rulesets with the Server destination type are displayed in the drop-down list.  
     
   If you select Topology as the preferred method, you can also specify the alternate method which is used to select a server from the pool if the preferred one does not return any result. The preferred and alternate methods must be different.
7. If applicable, select the alternate load balancing method.
   
   - **All Available**
   - **Ratio: Dynamic**
   - **Global Availability**
   - **Source IP Hash**
   - **None**
   - **Ratio: Fixed**
   - **Round Robin**
   - **Topology**  
       
     For details on each alternate method, see the description of the preferred method above.
8. Click **Next** to associate servers with the pool. Click the Add icon, select a server from the *DTC* *Server* *Selector* dialog box and click **OK**. You can use SHIFT+click and CTRL+click to associate multiple servers. The appliance displays the following information:
   
   - **Server Name**: The name of the DNS Traffic Control server.
   - **Host**: The host address of the server.
   - **Ratio**: You can modify the ratio value. The value must be greater than zero.
   - **Disabled**: Indicates whether the server is disabled.
   - **Order**: Displays the order of servers in the list.  
     To dissociate a server from the pool, select the checkbox next to the server name and click the Delete icon.
9. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
10. To schedule the change, click **Next** or **Schedule for Later**. In the *Schedule Change* panel, select **Now** to immediately execute this task. Or, select **Later** to schedule this task, and then specify a date, time, and time zone.
11. Save the configuration.

# Modifying DNS Traffic Control Pools

To modify a pool, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, click the Action icon next to the pool name and select **Edit** from the menu.
2. The *DTC* *Pool* editor contains the following basic tabs from which you can modify data. For information about how to modify data, see Configuring DNS Traffic Control Pools above.
   
   - **General**: This tab displays the pool **Name** and **Comment**. You can edit the values and enable or disable the pool.
   - **TTL**: This tab displays the TTL value configured for the pool. The default value is inherited from the LBDNs which are using the pool. There can be multiple inheritance. Click **Override** to override the value.
   - **Health Monitors**: This tab displays health monitors that are associated with the pool. You can associate new health monitors or dissociate the health monitors that are already associated with the pool.
   - **Load Balancing**: This tab displays the load balancing methods that you have selected while configuring the pool. You can select a new preferred and alternate load balancing methods.
   - **Pool Members**: This tab displays the servers that are associated with the pool. You can add new servers or delete servers that are associated with the pool. You can also modify the ratio and order of servers.
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with the pool. You can also modify the values of extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
3. To schedule this task, click the Schedule icon at the top of the wizard. In the *Schedule* *Change* panel, select **Later** and enter a date, time, and time zone. The Schedule icon is green when there is a pending scheduled task. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks)*.*
4. Save the configuration.
