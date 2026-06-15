---
title: "Packet Flow for DNS Infrastructure Protection Rules"
source: "/space/nios90/380240397"
pageId: "380240397"
---
DNS Infrastructure Protection rules are designed to work together to provide maximum protection for your environment. This section describes how these rules are being applied and how you can tune some of them to suit your system setup and network environment.  
DNS Infrastructure Protection rules are grouped by rule categories, and most of them have one or more associated rule parameters. All DNS Infrastructure Protection rules contain rule parameters that you may or may not be able to configure. Rule parameters are predefined with default values that generally suit most network environments. However, there are times when you have special setups or configurations in your environment that require special attention. In these cases, you may need to change some of the rule parameters to obtain optimal protection without sacrificing system performance. For detailed information about all DNS infrastructure protection rules and how to tune them when necessary, refer to the *Infoblox DNS Infrastructure* *Protection* *Rules* available on the Support web site.  
Depending on the rules, you may or may not be able to override default values for the following rule parameters (when applicable):

- **Packets** **per** **second**: This parameter defines the rate limit or the number of packets per second that the appliance processes before it performs a triggered action, such as sending warnings or blocking traffic.
- **Drop** **interval**: This is the time period (in seconds) for which the appliance blocks traffic from the client or traffic that matches a certain pattern beyond the rate limit. Based on how you want to handle the traffic that exceeds the rate limit, you can configure this interval to work with the **Rate** **Algorithm** parameter.
- **Rate** **algorithm**: This parameter defines how the appliance handles incoming traffic when the traffic exceeds the rate limit (defined in **Packets** **per** **second**). You can set this to "blocking" or "rate limiting." The default is "rate limiting." When you set this to "blocking," the appliance allows client traffic to go through until it hits the rate limit. It then blocks all traffic for the duration of the drop interval. If client traffic continuously exceeds the rate limit, the appliance continues to block all traffic for subsequent drop intervals without letting through any traffic, which could result in an indefinite traffic blockage. When you set this to "rate limiting," the appliance allows client traffic to go through until traffic hits the rate limit. It then blocks all traffic for the rest of the drop interval. The appliance re-evaluates client traffic at the beginning of each drop interval and repeats the same behavior for subsequent intervals.

To avoid resource exhaustion and limit frauds, you can limit the query rate for each source IP, and then set **Drop****interval** to one second and **Rate****algorithm** to "rate limiting," which results in a rate-limiting behavior that allows some traffic to go through before the rest of the traffic is blocked. In this case, the appliance re-evaluates the client behavior every second. If the client traffic exceeds the rate limit, the appliance processes only queries up to the rate limit and drops all excessive queries for the remainder of the second.  
For more information about how to configure **Rate****algorithm**, **Packets****per****second** and **Drop****interval**, see the following section, Configuration Examples.

- **Events** **per** **second**: The number of events logged per second for the rule. Setting a value to 0 (zero) disables the appliance from logging events for the rule. Most rules have this parameter, and the default value is 1.
- **Packet** **size**: DNS packet size. If the DNS packet size exceeds a certain value, the corresponding rule will be triggered.

# Configuration Examples

Depending on how you want the appliance to handle incoming traffic, you can configure applicable parameters so they work hand-in-hand to deliver desired results. Following are some examples that demonstrate how you can use the **Rate** **algorithm**, **Packets** **per** **second** and **Drop** **interval** parameters.

**Example** **1**

If source IP 100.10.10.1 sends queries at a rate of 100 packets per second, and you have the following configuration for a DNS Infrastructure Protection rule:

**Packets** **per** **second** = 40

**Drop** **interval** = 3

**Rate** **algorithm** = blocking

The appliance handles incoming traffic in the following manner:

1st second: 40 packets are allowed; all other packets are blocked

2nd second: All traffic from 100.10.10.1 is blocked

3rd second: All traffic from 100.10.10.1 is blocked

4th second: All traffic from 100.10.10.1 is blocked

5th second: All traffic from 100.10.10.1 is blocked

6th second: All traffic from 100.10.10.1 is blocked

In this example, the appliance evaluates historic data of the client behavior. If the client traffic exceeds the limit, then the appliance continuously drops traffic, which may result in an indefinite traffic blockage for a client that continuously violates the rate limit.

**Example** **2**

Source IP 100.10.10.1 sends queries at a rate of 100 packets per second for a duration of two seconds. It then sends 30 packets per second for three seconds and 50 packets afterwards; and you have the following configuration for a DNS Infrastructure Protection rule:

**Packets** **per** **second** = 40

**Drop** **interval** = 1

**Rate** **algorithm** = rate limiting

The appliance handles incoming traffic in the following manner:

1st second: 40 packets are allowed; all other packets are blocked for the remainder of the second

2nd second: 40 packets are allowed; all other packets are blocked for the remainder of the second

3rd second: All traffic from 100.10.10.1 is allowed

4th second: All traffic from 100.10.10.1 is allowed

5th second: All traffic from 100.10.10.1 is allowed

6th second: 40 packets are allowed; all other packets are blocked for the remainder of the second

In this case, the appliance re-evaluates the client behavior every second. If client traffic exceeds the rate limit, the appliance processes queries up to the rate limit and drops all excessive queries for the remainder of the second.
