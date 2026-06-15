---
title: "Configuring SNMP Health Monitors"
source: "/space/nios90/1394543309"
pageId: "1394543309"
---
An SNMP health monitor sends an SNMPv1, SNMPv2c, or SNMPv3 request to the monitored server. The SNMP agent in the managed server provides the data in the form of variables, and each variable is associated with an unique OID (object identifier). An OID is a dotted-decimal number that defines the location of the object in the universal MIB tree. You can manually enter up to 15 OIDs to be monitored by the SNMP monitor. The server is considered available if the response received from the server matches the expected result for all OIDs. If the server does not respond after a specified number of requests, the server is declared down by the monitor.

To configure an SNMP OID health monitor, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the arrow next to the Add icon and select **SNMP** **Health** **Monitor**.
3. In the *SNMP* *Health* *Monitor* *Wizard,* complete the following:
   
   - **Name**: Enter a name for the SNMP monitor.
   - **Interval** **(seconds)**: Enter the interval value in seconds. The health monitor runs only for the specified interval and it is measured from the end of the previous monitor cycle. The default value is five.
   - **Timeout** **(seconds)**: Enter the timeout value in seconds. The monitor waits for the number of seconds that you specify after sending a response. If it does not receive a response within the number of seconds that you specify, then the appliance considers this check failed. The monitor discards any responses it receives after the timeout. The default value is 15.
   - **Retry** **Up** **Count**: Enter a retry up count integer value. Retry up count is a value that determines how many valid responses or good health checks in a row must be received by the Grid member from the DTC server for setting the DTC server health status to green. When you specify a value, the appliance computes the duration for which health check must be performed based on the following:
     
     `interval*retry up count`  
     For example, If the DTC server has had a red status for a long time because all the SNMP health checks have failed, and when the Grid receives the first good SNMP health check result, the health check counter is set as 1; however, the status of the DTC server is still retained as red. If you specify the **Retry Up Count** as 3 and the health check interval as 5,  when three consecutive good health check results are received, the health check counter value becomes 3 and the DTC server health status now changes to green (3 good health check results in a row at an interval of 5 seconds each over a span of 3*5=15 seconds).
   - **Retry** **Down** **Count**: Enter a retry down count integer value. It is the opposite of the retry up count. Retry down count is a value that determines how many red status health checks (server is unavailable) in a row must be collected by the Grid member from the DTC server to switch the health status from green to red.  
     For example, for a Grid member whose connection to the DTC server is not stable and has its Retry Down Count set as 5, if the health check results received by the Grid member is in the sequence: green, red, red, red, green, then the health status of the DTC server will be retained as green.  
     Note that red health status is set when the health monitor reaches the timeout value that is `[health check interval + timeout]` seconds without a valid response.
   - **Port**: Specify a port for the SNMP connection. The appliance displays 161 by default. You can specify a value between zero and 65535.
   - **Comment**: Enter information about the SNMP health monitor.
4. Click **Next** and complete the following:
   
   - **Version**: Select the SNMP version, **v1**, **v2c**, or **v3**. Note that the available options for versions v1 and v2c differ from those for v3 version.
   - (SNMPv1 and SNMPv2c only) **Community**: Enter the text string that the SNMP monitor must send along with the queries to the server for authentication. The community string is similar to a password and the server accepts queries only from the SNMP monitor that provide the correct community string. Note that this community string must match exactly what you enter in the management system. The default value is **public**.
   - (SNMPv3 only) **SNMPv3User**: Click **Select** or **Create** to specify an SNMPv3 user. For information about SNMPv3 users, see [*Configuring SNMP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662492).  
     If you are modifying an already existing SNMPv3 health monitor in the SNMP Health Monitor editor, two additional optional fields become available:
     
     - **Context**: enter an arbitrary string.
     - **EngineID**: enter an arbitrary string that can contain from 10 to 64 hexadecimal digits (5 to 32 octet numbers).
   
   Click the Add icon above the **Health** **Monitor** **SNMP** **OIDs** table to add an SNMP OID entry. Complete the following:

- **OID**: Specify the object identifier. An OID is a unique dotted-decimal number that identifies the location of the object in the MIB tree. For more information about OIDs, see [*SNMP MIB Hierarchy*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760493)*.*
- **Type**: Select either **String** or **Integer** from the drop-down list.

**Note**: If you use this SNMP monitor with the Ratio: Dynamic load balancing method, note that only integer OID type is supported for this method.

- **Operator**: Select one of these operators from the drop-down list: **Any**, **Equals**, **Larger or equals**, **Range**, and **Smaller or equals**.
- **Value**: If the operator is **Equals**, **Larger or equals**, or **Smaller or equals**, enter a value. If the operator is **Range**, enter the minimum and maximum values in the **Min value** and **Max value** fields respectively.
- **Comment**: Enter information about the SNMP OID entry.
- Click **Add** to add the SNMP OID to the table.

1. Click **Next** to add extensible attributes. For information, see  [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

1. To schedule the change, click **Next** or **Schedule for Later**. In the *Schedule Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.

1. Save the configuration.
