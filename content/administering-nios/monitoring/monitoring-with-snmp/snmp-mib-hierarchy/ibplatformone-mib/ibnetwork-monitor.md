---
title: "ibNetwork Monitor"
source: "/space/nios90/1430094637"
pageId: "1430094637"
---
As shown in the following ibNetWorkMonitorObjects figure, the ibNetwork Monitor has one subtree, ibNetworkMonitorDNS, that branches out into the following:

- ibNetworkMonitorDNSActive (Integer) reports on whether DNS latency monitoring is enabled. You can enable DNS latency monitoring using the CLI command set monitor dns. For more information about enabling and disabling DNS alert monitoring, see [*Monitoring Tools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049). This is the only object in this branch. When you send a query for this object, the appliance responds with either "active" (1) or "nonactive" (0).
- ibNetworkMonitorDNSNonAA provides information about the average latency of nonauthoritative replies to DNS queries for 1-, 5-, 15-, and 60-minute intervals.
- ibNetworkMonitorDNSAA provides information about the average latency of authoritative replies to DNS queries for 1-, 5-, 15-, and 60-minute intervals.
- ibNetworkMonitorDNSSecurity provides information about the invalid DNS responses that arrive on invalid ports or have invalid DNS transaction IDs. ibNetworkMonitorDNSSecurity branches out into the following:
  
  - ibNetworkMonitorDNSSecurityInvalidPort
  - ibNetworkMonitorDNSSecurityInvalidTxid
  - ibNetworkMonitorDNSSecurityInvalidPortOnly (Counter)
  - ibNetworkMonitorDNSSecurityInvalidPortCount (Counter)
  - ibNetworkMonitorDNSSecurityInvalidTxidOnly (Counter)
  - ibNetworkMonitorDNSSecurityInvalidTxidCount (Counter)
  - ibNetworkMonitorDNSSecurityInvalidTxidAndPort (Counter)



*ibNetWorkMonitorObjects*

*[image: media]*

*ibNetworkMonitorDNSNonAAandibNetworkMonitorDNSAASubtrees*

The table below describes the objects in ibNetworkMonitorDNSNonAA. You can send queries to retrieve values for these objects.



*ibNetworkMonitorDNSNonAA Objects*

| Object (Type) | Description |
| --- | --- |
| ibNetworkMonitorDNSNonAAT1 | File that contains the objects for monitoring the average latency of nonauthoritative replies to queries in the last minute. |
| ibNetworkMonitorDNSNonAAT1AvgLatency (Integer) | Indicates the average latency in microseconds of nonauthoritative replies to queries in the last minute. |
| ibNetworkMonitorDNSNonAAT1Count (Integer) | Indicates the number of queries used to calculate the average latency of nonauthoritative replies in the last minute. |
| ibNetworkMonitorDNSNonAAT5 | File that contains the objects for monitoring the average latency of nonauthoritative replies to queries in the last five minutes. |
| ibNetworkMonitorDNSNonAAT5AvgLatency (Integer) | Indicates the average latency in microseconds of nonauthoritative replies to queries in the last five minutes. |
| ibNetworkMonitorDNSNonAAT5Count (Integer) | Indicates the number of queries used to calculate the average latency of nonauthoritative replies in the last five minutes. |
| ibNetworkMonitorDNSNonAAT15 | File that contains the objects for monitoring the average latency of nonauthoritative replies to queries in the last 15 minutes. |
| ibNetworkMonitorDNSNonAAT15AvgLatency (Integer) | Indicates the average latency in microseconds of nonauthoritative replies to queries in the last 15 minutes. |
| ibNetworkMonitorDNSNonAAT15Count (Integer) | Indicates the number of queries used to calculate the average latency of nonauthoritative replies in the last 15 minutes. |
| ibNetworkMonitorDNSNonAAT60 | File that contains the objects for monitoring the average latency of nonauthoritative replies to queries in the last 60 minutes. |
| ibNetworkMonitorDNSNonAAT60AvgLatency (Integer) | Indicates the average latency in microseconds of nonauthoritative replies to queries in the last 60 minutes. |
| ibNetworkMonitorDNSNonAAT60Count (Integer) | Indicates the number of queries used to calculate the average latency of nonauthoritative replies in the last 60 minutes. |
| ibNetworkMonitorDNSNonAAT1440 | File that contains the objects for monitoring the average latency of nonauthoritative replies to queries in the last 24 hours. |
| ibNetworkMonitorDNSNonAAT1440AvgLatency (Integer) | Indicates the average latency in microseconds of nonauthoritative replies to queries in the last 24 hours. |
| ibNetworkMonitorDNSNonAAT1440Count (Integer) | Indicates the number of queries used to calculate the average latency of nonauthoritative replies in the last 24 hours. |





The table below describes the objects in ibNetworkMonitorDNSAA. You can send queries to retrieve values for these objects.



*ibNetworkMonitorDNSAA Objects*

| Object (Type) | Description |
| --- | --- |
| ibNetworkMonitorDNSAAT1 | File that contains the objects for monitoring the average latency of authoritative replies to queries in the last minute. |
| ibNetworkMonitorDNSAAT1AvgLatency (Integer) | Indicates the average latency in microseconds of authoritative replies to queries in the last minute. |
| ibNetworkMonitorDNSAAT1Count (Integer) | Indicates the number of queries used to calculate the average latency of authoritative replies in the last minute. |
| ibNetworkMonitorDNSAAT5 | File that contains the objects for monitoring the average latency of authoritative replies to queries in the last five minutes. |
| ibNetworkMonitorDNSAAT5AvgLatency (Integer) | Indicates the average latency in microseconds of authoritative replies to queries in the last five minutes. |
| ibNetworkMonitorDNSAAT5Count (Integer) | Indicates the number of queries used to calculate the average latency of authoritative replies in the last five minutes. |
| ibNetworkMonitorDNSAAT15 | File that contains the objects for monitoring the average latency of authoritative replies to queries in the last 15 minutes. |
| ibNetworkMonitorDNSAAT15AvgLatency (Integer) | Indicates the average latency in microseconds of authoritative replies to queries in the last 15 minutes. |
| ibNetworkMonitorDNSAAT15Count (Integer) | Indicates the number of queries used to calculate the average latency of authoritative replies in the last 15 minutes. |
| ibNetworkMonitorDNSAAT60 | File that contains the objects for monitoring the average latency of authoritative replies to queries in the last 60 minutes. |
| ibNetworkMonitorDNSAAT60AvgLatency (Integer) | Indicates the average latency in microseconds of authoritative replies to queries in the last 60 minutes. |
| ibNetworkMonitorDNSAAT60Count (Integer) | Indicates the number of queries used to calculate the average latency of authoritative replies in the last 60 minutes. |
| ibNetworkMonitorDNSAAT1440 | File that contains the objects for monitoring the average latency of authoritative replies to queries in the last 24 hours. |
| ibNetworkMonitorDNSAAT1440AvgLatency (Integer) | Indicates the average latency in microseconds of authoritative replies to queries in the last 24 hours. |
| ibNetworkMonitorDNSAAT1440Count (Integer) | Indicates the number of queries used to calculate the average latency of authoritative replies in the last 24 hours. |





The below table describes the objects in ibNetworkMonitorDNSSecurity. When you enable the following, the SNMP traps with these objects are received:

- SNMP traps
- DNS network monitoring
- DNS alert monitoring



*ibNetworkMonitorDNSSecurityObjects*

| Object (Type) | Description |
| --- | --- |
| ibNetworkMonitorDNSSecurityInvalidPort | Tracks the number of invalid DNS responses that arrive on invalid ports. For information about invalid ports, monitoring DNS transactions, see [*Monitoring Tools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049). This object contains a subtree with six objects that track invalid ports within a certain time interval. |
| ibNetworkMonitorDNSSecurityInvalidTxid | Tracks the number of invalid TXIDs (DNS transaction IDs). For information about invalid TXIDs, monitoring DNS transactions, see [*Monitoring Tools*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049). This object contains a subtree with six objects that track invalid TXIDs within a certain time interval. |
| ibNetworkMonitorDNSSecurityInvalidPortOnly (Counter) | Tracks the number of DNS responses with both of the following conditions:  - Arrive on invalid ports - Have valid TXIDs |
| ibNetworkMonitorDNSSecurityInvalidTxidOnly (Counter) | Tracks the number of DNS responses with both of the following conditions:  - Arrive on valid ports - Have Invalid TXIDs |
| ibNetworkMonitorDNSSecurityInvalidPortCount (Counter) | Tracks the total number of invalid DNS responses that arrive on invalid ports. |
| ibNetworkMonitorDNSSecurityInvalidTxidCount (Counter) | Tracks the total number of DNS responses that have invalid DNS transaction IDs. |
| ibNetworkMonitorDNSSecurityInvalidTxidAndPort (Counter) | Tracks the number of DNS responses with both of the following conditions:  - Arrive on invalid ports - Have invalid TXIDs |



The following table describes the objects in ibNetworkMonitorDNSSecurityInvalidPort:



*ibNetworkMonitorDNSSecurityInvalidPort Objects*

| Object (Type) | Description |
| --- | --- |
| ibNetworkMonitorDNSSecurityInvalidPort1 (Integer) | Tracks the number of invalid DNS responses that arrive on invalid ports in the last one minute. |
| ibNetworkMonitorDNSSecurityInvalidPort5 (Integer) | Tracks the number of invalid DNS responses that arrive on invalid ports in the last five minutes. |
| ibNetworkMonitorDNSSecurityInvalidPort15 (Integer) | Tracks the number of invalid DNS responses that arrive on invalid ports in the last 15 minutes. |
| ibNetworkMonitorDNSSecurityInvalidPort60 (Integer) | Tracks the number of invalid DNS responses that arrive on  invalid ports in the last 60 minutes. |
| ibNetworkMonitorDNSSecurityInvalidPort1440 (Integer) | Tracks the number of invalid DNS responses that arrive on  invalid ports in the last 24 hours. |
| ibNetworkMonitorDNSSecurityInvalidPortCount (Counter) | Tracks the total number of invalid DNS responses that arrive on invalid ports. |







The following table below describes the objects in ibNetworkMonitorDNSSecurityInvalidTxid:



*ibNetworkMonitorDNSSecurityInvalidTxid Objects*

| Object (Type) | Description |
| --- | --- |
| ibNetworkMonitorDNSSecurityInvalidTxid1 (Integer) | Tracks the number of DNS responses that have invalid DNS transaction IDs in the last one minute. |
| ibNetworkMonitorDNSSecurityInvalidTxid5 (Integer) | Tracks the number of DNS responses that have invalid DNS transaction IDs in the last five minutes. |
| ibNetworkMonitorDNSSecurityInvalidTxid15 (Integer) | Tracks the number of DNS responses that have invalid DNS transaction IDs in the last 15 minutes. |
| ibNetworkMonitorDNSSecurityInvalidTxid60 (Integer) | Tracks the number of DNS responses that have invalid DNS transaction IDs in the last 60 minutes. |
| ibNetworkMonitorDNSSecurityInvalidTxid1440 (Integer) | Tracks the number of DNS responses that have invalid DNS transaction IDs in the last 24 hours. |
| ibNetworkMonitorDNSSecurityInvalidTxidCount (Counter) | Tracks the total number of DNS responses that have invalid DNS transaction IDs. |
