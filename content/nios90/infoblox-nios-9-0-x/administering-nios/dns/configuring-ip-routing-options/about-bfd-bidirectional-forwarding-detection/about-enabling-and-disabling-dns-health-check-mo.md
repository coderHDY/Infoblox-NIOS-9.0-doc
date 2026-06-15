---
title: "About Enabling and Disabling DNS Health Check Monitor"
source: "/space/nios90/1412006278"
pageId: "1412006278"
---
In order to minimize downtime for DNS and ensure high availability, NIOS implements DNS process monitoring and self-recovery on each Grid member, in order to minimize downtime for DNS and ensure high availability. You can enable the DNS health check monitor to monitor whether the DNS server is responding to client requests. When you enable this feature, the appliance sends a query to the DNS server and waits for the response until the specified timeout duration. If the appliance is unable to receive a response from the DNS server after the specified number of retries, the appliance sends SNMP traps and email notifications about the failure. The appliance performs the DNS health check periodically based on the specified time interval.  
If BFD is used for anycast fault detection, the BFD session state advertised from the member can be in the Down state whenever there is a DNS health check failure. This allows quick anycast route tear-down and the network might converge with another DNS server that can serve same anycast IP.

Additionally, you can also configure domain names in the DNS health check monitor, which are probed simultaneously and if any one of the domains fail to resolve for consecutive attempts, the DNS health is considered as Down. If recursion is enabled on the Grid member, the queries to these domains help to assert the ability of the DNS server to reach the external authoritative servers and optionally trigger network re-convergence in case of a failure. When no domains are configured, local PTR queries are used to probe the DNS process.

> **error**
>
> ### Warning
> 
> *The DNS health check monitor might not work properly if the DNS blackhole feature is enabled or if any named ACL is blocking the query sent to the loopback interface.*

To enable or disable the DNS health check monitor:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, and then select **Grid** **DNS** **Properties** from the Toolbar.   
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -&gt; *member* checkbox -&gt; Edit icon.  
   In the *Grid* *DNS* *Properties* or the *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode** if the editor is in the basic mode.
2. Click the **Advanced** subtab of the **General** tab and then complete the following:
   
   - **Enable** **DNS** **Health** **Check**: This checkbox is deselected by default, meaning the DNS health check monitor is disabled. Select this checkbox to enable the DNS health check monitor and specify the following:
   - **Interval**: Enter the time interval in seconds. The interval value is measured from the end of the previous monitoring cycle. The default is 30 seconds. You can enter a value between 10 and 21600 seconds.
   - **Timeout**: Enter the timeout value in seconds. This is the time the appliance waits for a response to the query. The default is 3 seconds. You can enter a value between 1 and 10 seconds.
   - **Retries**: Enter the number of times the appliance tries to send the query after a failed attempt. The default is 3. You can enter a value between 1 and 10.
   - **Link** **BFD** **session** **state** **to** **DNS** **Health** **Check**: Select this checkbox to link the anycast session state with the DNS health check monitor.
   - **Resolve** **Additional** **Domains**: Click the Add icon and enter the domain name. The DNS health check monitor sends recursive queries to the local DNS server (BIND) for the domain names listed in this table. You can add up to 16 domain names.
3. Save the configuration.



> **warning**
>
> ### Note
> 
> You must carefully select the domain names for DNS health check monitor with BFD session in order to avoid unnecessary changes in downstream DNS traffic due to transient health check query failures. Setting a higher timeout or retry count might help in avoiding false alarms.



*Enabling* *DNS* *Health* *Check* *Monitor*
