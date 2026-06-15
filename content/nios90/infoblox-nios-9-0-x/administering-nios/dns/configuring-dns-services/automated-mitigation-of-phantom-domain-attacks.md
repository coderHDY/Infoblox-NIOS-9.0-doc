---
title: "Automated Mitigation of Phantom Domain Attacks"
source: "/space/nios90/280665773"
pageId: "280665773"
---
A phantom domain attack happens when the attacker sets up "phantom" domains that do not respond to DNS queries. Under normal circumstances, the DNS recursive server contacts authoritative servers to resolve recursive queries. When phantom domain attacks happen, the recursive server continues to query non-responsive servers, which causes the recursive server to spend valuable resources waiting for responses. When resources are fully consumed, the DNS recursive server may drop legitimate queries, causing serious performance issues.  
NIOS provides a few configurable parameters for mitigating phantom domain attacks in which recursive server continues to query non-responsive servers. Before you configure any of the parameters for mitigating phantom domain attacks, review the guidelines that might help you understand the relationship between these parameters. For information, see Guidelines for Mitigating Phantom Domain Attacks below.  
To configure parameters for mitigating phantom domain attacks, see Configuring Parameters for Mitigating Phantom Domain Attacks.  
All events related to these operations are logged to the syslog. For information about the syslog and how to use it, see [*Using a Syslog Server*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server).

# Guidelines for Mitigating Phantom Domain Attacks

To detect phantom domain attacks, you can review your log messages. One possible indication of attack is when you receive a log message similar to the following:

`2015-04-29T10:20:06+00:00 daemon infoblox named\[25390\]: warning no more recursive clients: quota reached
`

Consider the following guidelines to mitigate the attack:

- Increase the number of recursive clients.
- Use a combination of the following parameters to achieve optimum results:
  
  - **Limit** **recursive** **queries** **per** **server** and **Limit** **recursive** **queries** **per** **zone**
  - **Enable** **holddown** **for** **non-responsive** **servers** and **Limit** **recursive** **queries** **per** **zone**
- When you enable any of the options, the default values are set at an optimum level for general operations. Infoblox recommends that you keep the default values when using these commands. Ensure that you understand the ramifications if you want to change the default values.

# Configuring Parameters for Mitigating Phantom Domain Attacks

> **warning**
>
> ### Note
> 
> - Updating the parameter values for mitigating phantom domain attacks takes effect immediately through Grid replication. However, for these values to be updated in the named.conf file, you need to restart the DNS service. To restart the member service, see [*Restarting Services*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/restarting-services).
> - Infoblox recommends that you do not use fetches per server or fetches per zone with forwarders.

To adjust the parameters to mitigate phantom domain attack parameters, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** **Member:** From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox -&gt; Edit icon. To override Grid settings, click **Override** and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **Security** tab and complete the following in the **Non-responsive** **servers** section:
   
   - **Enable holddown for non-responsive servers:** When you select this checkbox, the appliance stops sending queries to non-responsive servers for a specified time interval (**Hold down duration**) when the number of consecutive attempts to contact a non-responsive server exceeds the threshold value (**Timeouts to trigger**). No service restart is required when you change this. Clear this checkbox to disable the holddown. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values.
     
     - **Minimum timeout**: When the time taken for a timeout to happen exceeds this number, the timeout is counted towards the number of consecutive timeouts (**Timeouts to trigger**). You can specify a value between 0 and 5000 milliseconds. For example, if you set the minimum timeout to 1000 milliseconds, only timeouts that took longer than 1000 milliseconds are counted towards the number of consecutive timeouts. The default is 1000 milliseconds.
     - **Timeouts to trigger**: The number of consecutive timeouts before holding down a server. You can specify a value between 0 and 4294967295. For example, setting the threshold value to 5 means the appliance stops sending queries to the non-responsive server after five consecutive timeouts. The default is 5.
     - **Hold down duration**: The holddown duration for a server. You can specify a value between 1 and 86400 seconds. For example, if you set the holddown time to 60 seconds, the server stops sending queries for 60 seconds. The default is 60 seconds.
       
       Note in order to get enough upstream queries and for the appliance to effectively identify non-responsive servers and stop sending queries to them, do not set a high value for the **Minimum** **timeout** field. The higher the value you configure for this field, the longer it takes to capture a timeout and the harder it is to satisfy the total counts of consecutive timeouts (**Timeouts** **to** **trigger**). Until the total count of consecutive timeouts is exceeded, no mitigation happens against the non-responsive servers. As a result, it is less likely for the appliance to identify phantom domain attacks when you set the **Minimum** **timeout** field at a high value. Infoblox highly recommends that you keep the default **Minimum** **timeout** value to achieve optimum protection against these attacks.
   - **Limit recursive queries per server**: Select this checkbox to configure the maximum number of concurrent recursive queries that the appliance sends to a single upstream name server. Queries above the limit will be blocked and may result in a SERVFAIL response to the client. When you enable this option, the appliance dynamically adjusts the concurrent query limit for a specific server based on the ATR (Average Timeout Ratio). No service restart is required when you change this. Clear this checkbox to disable this option. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values.
     
     - **Maximum fetches per server**: The maximum number of concurrent recursive queries that the appliance sends to a single upstream name server before blocking additional queries to that server. You can specify a value between 0 and 4294967295. The default value is 500.
     - **Quota recalculation interval**: This determines how often (in number of recursive responses) the appliance recalculates the average timeout ratio. You can specify a value between 0 and 4294967295. The default value is 200. Note that if you set this value to 0 (zero), the appliance will never recalculate the ATR. Infoblox strongly recommends that you do not set this value to 0.
   - **Limit recursive queries per zone**: Select this checkbox to configure the maximum number of concurrent recursive queries the DNS server sends for a domain. If the number of recursive queries exceeds the configured value, the server, by default, drops new queries for that domain without responding or returns a SERVFAIL response. No service restart is required when you change this. Clear this checkbox to disable the option. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values.
     
     - **Maximum fetches perzone**: The maximum number of concurrent recursive queries that a server sends for one of its domain. When the number of queries exceeds this limit, the server, by default, drops new queries for that domain without responding or returns a SERVFAIL response. You can specify a value between 0 and 4294967295. The default value is 200.
