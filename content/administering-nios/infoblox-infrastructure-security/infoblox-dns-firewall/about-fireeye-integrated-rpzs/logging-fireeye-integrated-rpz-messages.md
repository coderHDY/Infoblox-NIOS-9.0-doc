---
title: "Logging FireEye Integrated RPZ messages"
source: "/space/nios90/1406173245"
pageId: "1406173245"
---
The NIOS appliance logs FireEye events and alerts in the syslog and audit log. Each FireEye feed event is logged every time an alert is sent to NIOS by the FireEye appliance. When you create a new rule or update an existing rule, then those are also logged in the syslog. You can use messages logged in syslog to verify events that are related to communication between the FireEye and NIOS appliances. It also enables the admin to monitor alerts and verify how the alerts are processed. Details about alerts that are received and processed are also logged. Syslog messages are logged when:

- an alert is received from the FireEye appliance.
- syslog messages contain required information for reporting.
- an alert is successfully mapped to an RPZ rule. The message format is as follows:
  
  - &lt;FireEye: Found an APT alert&gt;
- the NIOS appliance cannot process alerts. For example, alert structure mismatch, unrecognizable data, etc. The messages will have the following format:
  
  - &lt;FireEye: Cannot parse FQDN due to missing field''cnc-services''&gt;
  - &lt;FireEye: Cannot determine if it is an APT alert..&gt;
  - &lt;FireEye: Invalid Alert Type ....&gt;
  - &lt;FireEye: Couldn't find the required field...&gt;
  - &lt;FireEye: No mapping rule has been set for alert type.....&gt;
- a duplicate alert is sent by the FireEye appliance for which the same RPZ rule already exists.

> **warning**
>
> ### Note
> 
> For debugging purposes, alert messages will be displayed in the infoblox.log file.



NIOS periodically scans the syslog of a member that has RPZ license installed to generate recent hits data for the *RPZ* *Recent* *Hits* tab. This might cause a performance impact as CPU cycles will be used on the member. For more information about *RPZ* *Recent* *Hits* tab, see [*RPZ*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114/Status+Dashboard#RPZRecentHits)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114/Status+Dashboard#RPZRecentHits)[*Recent*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114/Status+Dashboard#RPZRecentHits)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114/Status+Dashboard#RPZRecentHits)[*Hits*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/537002114/Status+Dashboard#RPZRecentHits).
