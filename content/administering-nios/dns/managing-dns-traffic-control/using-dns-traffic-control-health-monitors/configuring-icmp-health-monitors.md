---
title: "Configuring ICMP Health Monitors"
source: "/space/nios90/1394543217"
pageId: "1394543217"
---
An ICMP monitor sends an ICMP or ICMPv6 echo request to the IP address of the target server and expects an ICMP/ICMPv6 echo response. The ICMP monitor determines the health of a server by monitoring the response to an ICMP ping.

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the arrow next to the Add icon and select **ICMP** **Health** **Monitor**.
3. In the *ICMP* *Health* *Monitor* *Wizard,* complete the following:
   
   - **Name**: Enter a name for the ICMP health monitor.
   - **Interval** **(seconds)**: Enter the interval value in seconds. The health monitor runs only for the specified interval and it is measured from the end of the previous monitor cycle. The default value is five.
   - **Timeout** **(seconds)**: Enter the timeout value in seconds. The monitor waits for the number of seconds that you specify after sending a response. If it does not receive a response within the number of seconds that you specify, then the appliance considers this check as failed. The monitor discards any response it receives after the timeout. The default value is 15.
   - **Retry** **Up** **Count**: Enter a retry up count integer value. Retry up count is a value that determines how many valid responses or good health checks in a row must be received by the Grid member from the DTC server for setting the DTC server health status to green. When you specify a value, the appliance computes the duration for which health check must be performed based on the following:
     
     `interval*retry up count`  
     For example, If the DTC server has had a red status for a long time because all the ICMP health checks have failed, and when the Grid receives the first good ICMP health check result, the health check counter is set as 1; however, the status of the DTC server is still retained as red. If you specify the **Retry Up Count** as 3 and the health check interval as 5,  when three consecutive good health check results are received, the health check counter value becomes 3 and the DTC server health status now changes to green (3 good health check results in a row at an interval of 5 seconds each over a span of 3*5=15 seconds).
   - **Retry** **Down** **Count**: Enter a retry down count integer value. It is the opposite of the retry up count. Retry down count is a value that determines how many red status health checks (server is unavailable) in a row must be collected by the Grid member from the DTC server to switch the health status from green to red.  
     For example, for a Grid member whose connection to the DTC server is not stable and has its Retry Down Count set as 5, if the health check results received by the Grid member is in the sequence: green, red, red, red, green, then the health status of the DTC server will be retained as green.  
     Note that red health status is set when the health monitor reaches the timeout value that is `[health check interval + timeout]` seconds without a valid response.
   - **Comment**: Enter information about the ICMP health monitor.

1. Click **Next** to add extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).

1. To schedule the change, click **Next** or **Schedule for Later**. In the *Schedule Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.

1. Save the configuration.
