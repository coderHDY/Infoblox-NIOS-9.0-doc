---
title: "Enabling and Disabling DNS Health Check Monitor"
source: "/space/nios90/281182312"
pageId: "281182312"
---
You can enable the DNS health check monitor to monitor whether the DNS server is responding to client requests. When you enable this feature, the appliance sends a query to the DNS server and waits for the response until the specified timeout duration. If the appliance is unable to receive a response from the DNS server after the specified number of retries, the appliance sends SNMP traps and email notifications about the failure. The appliance performs the DNS health check periodically based on the specified time interval.

> **error**
>
> ### Warning
> 
> *The* *DNS Health Check* *monitor* *might not* *work* *properly* *if* *DNS* *blackhole* *feature* *is* *enabled* *or*  
> *if* *any* *named* *ACL* *is* *blocking* *the* *query* *sent* *to loopback* *interface.*

To enable or disable the DNS health check monitor:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, and then select **Grid** **DNS** **Properties** from the Toolbar.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.
2. In the *Grid* *DNS* *Properties* or the *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode** if the editor is in the basic mode.
3. Click the **Advanced** subtab of the **General** tab and then complete the following:
   
   - **Enable** **DNS** **Health** **Check**: This checkbox is deselected by default, meaning the DNS health check monitor is disabled. Select this checkbox to enable the DNS health check monitor and specify the following:
     
     - **Interval**: Enter the time interval in seconds. The interval value is measured from the end of the previous monitoring cycle. The default is 30 seconds. You can enter a value between 10 and 21600 seconds.
     - **Timeout**: Enter the timeout value in seconds. This is the time the appliance waits for a response to the query. The default is 3 seconds. You can enter a value between 1 and 10 seconds.
     - **Retries**: Enter the number of times the appliance tries to send the query after a failed attempt. The default is 3. You can enter a value between 1 and 10.
4. Save the configuration.
