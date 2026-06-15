---
title: "Detecting NXDOMAIN Attacks"
source: "/space/nios90/280763594"
pageId: "280763594"
---
NXDOMAIN attacks are symmetrical DDoS attacks that involve a large number of DNS clients sending queries for invalid or non-existent domains, which results in DNS recursion and NXDOMAIN responses. As a result, the DNS server spends valuable resources processing spurious requests instead of providing legitimate DNS services. When a DNS server is under NXDOMAIN attack, clients cannot get valid responses because the cache of the DNS server is flooded with NXDOMAIN results.  
Infoblox provides a few options for detecting possible NXDOMAIN attacks. You can track one or all of the following to raise alerts for these attacks:

- High percentage of NXDOMAIN responses, as described in  Tracking NXDOMAIN Responses below.
- Low cache hit ratio for queries, as described in  Tracking Cache Hit Ratio of Recursive  Queries below.
- High number of dropped UDP packets, as described in  Tracking Dropped UDP Packets below.

Each of these options provides configurable parameters that determine if an alert should be raised. When an alert is triggered, the appliance sends SNMP traps about possible NXDOMAIN attacks. All triggered events are logged to the syslog. Note that you must enable notifications in order for the appliance to send SNMP traps. For more information about how to enable this, see [*Setting SNMP and Email Notifications*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1406500950).

> **warning**
>
> ### Note
> 
> The default values for these configurable parameters are set at an optimum level for general operations.  
> Infoblox recommends that you keep the default values when using these features. Ensure that you understand the ramifications if you want to change the default values.

# Tracking NXDOMAIN Responses

When under NXDOMAIN attack, the ratio of NXDOMAIN responses from upstream servers to all incoming recursive responses is typically high. When the ratio of NXDOMAIN responses to all incoming recursive responses exceeds the configured high water threshold, the appliance sends an alert. Note that timeouts are not counted as responses for this detection.

> **warning**
>
> ### Note
> 
> Changes made to the configuration for tracking NXDOMAIN responses take effect immediately on active DNS service and do not require a service restart.

To configure the parameters for tracking NXDOMAIN responses, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** **Member:** From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *member* checkbox -> Edit icon. To override Grid settings, click **Override** and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **Security** tab and complete the following in the **Bogus-query** **alerting** **and** **mitigation** section:
   
   - **Track** **the** **percentage** **of** **NXDOMAIN** **responses** **to** **recursive** **queries:** Select this checkbox to track the percentage of NXDOMAIN responses from up-stream servers to all incoming recursive responses. Clear this checkbox to disable the detection. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values. This is selected by default.
     
     - **Minimum** **responses** **per** **interval**: Enter the minimum number of incoming DNS responses received (within the detection interval) before the appliance starts calculating the NXDOMAIN ratio at the end of the detection interval. The appliance then compares the calculated percentage to the high water threshold. If the percentage equals or exceeds the high water threshold, the appliance sends an SNMP trap (if enabled) about possible NXDOMAIN attacks. The default is 1000. Note that the **Minimum** **responses** **per** **interval** is implemented to ensure that enough incoming DNS responses are received so the appliance can calculate a meaningful NXDOMAIN ratio and does not declare possible attacks from a small response sample. Therefore, when you change the default value, ensure that you use a reasonable value so the appliance calculates the NXDOMAIN ratio from a reasonable amount of responses. Raising an alert using a small response sample may not be a reliable way for detecting possible NXDOMAIN attacks.
     - **NXDOMAIN** **threshold**: Enter the **Low** and **High** water thresholds at which an alert is triggered. The appliance sends an alert when the percentage equals or exceeds the **High** water threshold. When the percentage in subsequent detection intervals falls below the **Low** water threshold, the appliance sends another alert to notify that the percentage of NXDOMAIN responses has gone back to an acceptable level. The defaults are 70% for **Low** and 80% for **High**.
     - **Detection** **interval** and **Responses**: These parameters work as alternatives to each other in determining when the appliance starts calculating the NXDOMAIN ratio. In the case of a very low response rate when the total responses received within the **Detection** **interval** never reach the **Minimum** **responses** **per** **interval**, the response counters continue to cumulate into subsequent detection intervals until the **Minimum** **responses** **per** **interval** is met. The appliance then sends an alert at the end of the detection interval. On the other hand, in the case of a very high response rate when the total number of responses received equals or exceeds the **Responses** value before the **Detection** **interval** is reached, the **Minimum** **responses** **per** **interval** does not apply and the appliance sends an alert as soon as the total responses equal or exceed the **Responses** value you define here. It does not wait till the end of the **Detection** **interval**. Note that the number of **Responses** you define here must be the same or greater than the **Minimum** **responses** **per** **interval**. The defaults are 10 seconds for the **Detection** **interval** and 100000 for **Responses**.
3. Save the configuration.

## Configuration Examples for Tracking NXDOMAIN Responses

The following examples demonstrate how different responses per second affect the calculation of NXDOMAIN ratio.   
**Example** **One:** **Total** **responses** **per** **second** **=** **250** **and** **parameters** **=** **default** **values**

| **Detection Interval (10 seconds)** |
| --- |
| **Total Responses per** **Second** | **0** | **1st** | **2nd** | **3rd** | **4th** | **5th** | **6th** | **7th** | **8th** | **9th** | **10th** |
|  |  |  |  |  |  |  |  |  |  |  |
| 250/s | 0 | 250 | 500 | 750 | 1000 | 1250 | 1500 | 1750 | 2000 | 2250 | 2500 |

In this example, the total number of responses is 250 per second and the total number of responses hits the **Minimum** **responses** **per** **interval** (default = 1000) at the 4th second of the detection interval. This meets the requirement for the **Minimum** **responses** **per** **interval** and triggers an NXDOMAIN ratio calculation at the end of the detection interval (default = 10 seconds). If the percentage equals or exceeds the high water threshold, the appliance sends an alert and logs the event to the syslog to notify about possible NXDOMAIN flood attacks. The appliance resets the response counters for the next detection interval.   
  
**Example** **Two:** **Total** **responses** **per** **second** **=** **40** **per** **second** **and** **parameters** **=** **default** **values**

| **1st Detection Interval (10 seconds)** |
| --- |
| **Total Responses per Second** | **0** | **1st** | **2nd** | **3rd** | **4th** | **5th** | **6th** | **7th** | **8th** | **9th** | **10th** |
| 40/s | 0 | 40 | 80 | 120 | 160 | 200 | 240 | 280 | 320 | 360 | 400 |



| **2nd Detection Interval (10 seconds)** |
| --- |
| **Total Responses per Second** | **0** | **1st** | **2nd** | **3rd** | **4th** | **5th** | **6th** | **7th** | **8th** | **9th** | **10th** |
| 40/s |  | 440 | 480 | 520 | 560 | 600 | 640 | 680 | 720 | 760 | 800 |



| **3rd** **Detection** **Interval** **(10** **seconds)** |  |
| --- | --- |
| **Total Responses per Second** | **0** | **1st** | **2nd** | **3rd** | **4th** | **5th** | **6th** | **7th** | **8th** | **9th** |  | **10th** |
| 40/s |  | 840 | 880 | 920 | 960 | 1000 | 1040 | 1080 | 1120 | 1160 | 1200 |  |

In this example, the total number of responses is 40 per second. During the first detection interval of 10 seconds, the total number of responses is 400, which does not reach the **Minimum** **responses** **per** **interval** (default = 1000); therefore, no NXDOMAIN ratio calculation occurs and the response counters continue to accumulate into the second detection interval. At the end of the second interval, the total number of responses still does not reach the **Minimum** **responses** **per** **interval**; therefore, no NXDOMAIN ratio calculation occurs and the counters continue to accumulate. Finally, the total number of responses meets the requirement of the **Minimum** **responses** **per** **interval** when the appliance receives 1000 responses at the 5th second during the third detection interval. This triggers an NXDOMAIN ratio calculation at the end of the third detection interval, and the counters reset for the next detection interval. If the NXDOMAIN percentage equals or exceeds the high water threshold, the appliance sends an alert and logs the event to the syslog to notify about possible NXDOMAIN flood attacks.

**Example** **Three:** **Total** **responses** **per** **second** **=** **50000** **and** **parameters** **=** **default** **values**



| **Detection** **Interval** **(10** **seconds)** |
| --- |
| **Total Responses per Second** | **0** | **1st** | **2nd** | **3rd** | **4th** | **5th** | **6th** | **7th** | **8th** | **9th** | **10th** |
| 50000 | 0 | 50000 | 100000 |  |  |  |  |  |  |  |  |

In this example, the total number of responses per second is 50000. When the total number of responses hits 100000, which equals to the **Responses** value, the appliance starts calculating the NXDOMAIN ratio and sends an alert without waiting until the end of the detection interval. If the percentage equals or exceeds the high water threshold, the appliance sends an alert and logs the event to the syslog to notify about possible NXDOMAIN flood attacks. The appliance resets the response counters for the next detection interval.

> **warning**
>
> ### Note
> 
> The above configuration examples also apply to how the appliance tracks cache hit ratio of recursive queries, as described in Tracking Cache Hit Ratio of Recursive Queries below.

# Tracking Cache Hit Ratio of Recursive Queries

Another way to track possible DNS attacks is to monitor the cache hit ratio of recursive queries. A cache hit means the response to a query can be found in the cache of the DNS server. When the response cannot be found, it is a miss. Cache hit ratio is the percentage of cache hits to the total number of queries. The higher the ratio, the more efficiently the cache is operating. When a server is under NXDOMAIN attack, the cache hit ratio tends to drop.  
To track cache hit ratio, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** **Member:** From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *member* checkbox -> Edit icon. To override Grid settings, click **Override** and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **Security** tab and complete the following in the **Bogus-query** **alerting** **and** **mitigation** section:
   
   - **Track** **the** **cache** **hit** **ratio** **of** **queries:** Select this checkbox to track the cache hit ratio of recursive queries. Clear this checkbox to disable the detection. No service restart is required when you change this. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values. This is selected by default.
     
     - **Minimum** **queries** **per** **interval**: Enter the minimum number of incoming DNS queries received (within the detection interval) before the appliance starts calculating the cache hit ratio at the end of the detection interval. The appliance then compares the calculated percentage to the low water threshold. If the percentage equals or falls below the low water threshold, the appliance sends an SNMP trap (if enabled) about possible NXDOMAIN attacks. The default is 1000. Note that the **Minimum** **responses** **per** **interval** is implemented to ensure that enough incoming DNS queries are received so the appliance can calculate a meaningful cache hit ratio and does not declare possible attacks from a small number of incoming queries. When you change the default value, ensure that you use a number that is big enough so the appliance calculates the cache hit ratio from a reasonable amount of queries.
     - **Minimum** **cache** **utilization**: Cache hit ratio detection does not start until cache utilization hits this number. In other words, the appliance does not calculate the cache hit ratio until the cache utilization has reached or exceeded this number. The default is 75%.
     - **Hit** **ratio** **threshold**: Enter the **Low** and **High** thresholds at which an alert is triggered. The appliance sends an alert when the cache hit percentage equals or drops below the **Low** water threshold, which means the cache hit rate is low enough that the server is not operating efficiently, and there could be a high number of bogus queries that do not have matching responses in the cache. When the cache hit percentage in subsequent detection intervals reaches or exceeds the **High** water threshold, the appliance sends another alert to notify that the cache hit rate has gone back to an acceptable level. The defaults are 70% for **Low** and 80% for **High**.
     - **Hit** **ratio** **detection** **interval** and **Responses**: These parameters work as alternatives to each other in determining when the appliance starts calculating the cache hit ratio. In the case of a very low response rate when the total responses received within the **Hit** **ratio** **detection** **interval** never reach the **Minimum** **queries** **per** **interval**, the response counters continue to accumulate into subsequent detection intervals until the **Minimum** **queries** **per** **interval** is met. The appliance then sends an alert at the end of the detection interval. On the other hand, in the case of a very high response rate when the total number of responses received equals or exceeds the **Responses** value before the **Hit** **ratio** **detection** **interval** is reached, the **Minimum** **queries** **per** **interval** does not apply and the appliance sends an alert as soon as the total responses equal or exceed the **Responses** value you define here. It does not wait till the end of the **Hit** **ration** **detection** **interval**. Note that the number of **Responses** you define here must be the same or greater than the **Minimum** **queries** **per** **interval**. The defaults are 10 seconds for the **Hit** **ratio** **detection** **interval** and 100000 for **Responses**.
3. Save the configuration.

# Tracking Dropped UDP Packets

When the DNS server starts dropping UDP packets from incoming traffic, it can be an indication of DNS attacks. Tracking dropped UDP packets can help raise awareness of possible DDoS attacks. For this features, the appliance tracks all UDP packets, not only DNS queries. When tracking dropped UDP packets, the appliance tracks IPv4 and IPv6 packets independently.  
To track dropped UDP packets, complete the following:

1. **Grid:** From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.** **Member:** From the **Data** **Management** tab, select the **DNS** tab -> **Members** tab -> *member* checkbox -> Edit icon. To override Grid settings, click **Override** and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click the **Security** tab and complete the following in the **Bogus-query** **alerting** **and** **mitigation** section:
   
   - **Track** **the** **number** **of** **UDP** **packets** **dropped:** Select this checkbox to track the number of dropped UDP packets. Clear this checkbox to disable the detection. No service restart is required when you change this. Note that disabling this does not clear any of the previously configured values. When you enable this feature again, the appliance preserves the previously configured values. This is selected by default.
     
     - **Packet** **drop** **detection** **interval**: Enter the time interval of each detection period for tracking dropped UDP packets. The default is 10 seconds.
     - **Minimum** **packets** **per** **interval**: Enter the minimum number of UDP packets the appliance allows (within the detection interval) before it starts calculating the percentage of dropped packets to the total number of packets. The appliance compares the calculated percentage to the high water threshold. If the percentage equals or exceeds the high water threshold, the appliance sends an SNMP trap (if enabled). The default is 1000.
     - **Packet** **drop** **threshold**: Enter the **Low** and **High** water thresholds at which an alert is triggered. The appliance sends an alert when the percentage equals or exceeds the **High** water threshold. When the percentage in subsequent detection intervals equals or falls below the **Low** water threshold, the appliance sends another alert to notify that the amount of dropped UDP packets has gone back to an acceptable level. The defaults are 20% for **Low** and 30% for **High**.
3. Save the configuration.
