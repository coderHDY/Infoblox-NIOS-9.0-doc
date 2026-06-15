---
title: "Detailed RPZ Violations by Subscriber ID"
source: "/space/nios90/1429013637"
pageId: "1429013637"
---
If you have configured Infoblox Subscriber Services, the *Detailed RPZ Violations by Subscriber ID* dashboard lists the RPZ hits from the subscribers over a given time frame. You can view the subscriber ID, IP address of the client, total subscriber hits, domain name, RPZ entry, RPZ severity, and mitigation action.  
The appliance lists the RPZ Violations by Subscriber ID report in table format. You can click a specific row in the table or the Subscriber ID Value to view sub-report for the selected subscriber, showing the details of the RPZ hits by the subscriber. For information, see [*RPZ Details for the Subscriber ID*](#).

This dashboard displays the following information in table format:

- **Subscriber ID Value**: The subscriber ID. The value is based on the subscriber ID type.
- **Subscriber ID Type**: Displays one of the following AVPs: **IMSI**, **IMEI**, **MSISDN**, **NAS-Port-ID**, **NAS-Port Calling-Station-ID**, **User-Name**, **Realm**, or **Class**.
- **Client ID**: The IP address of the client that queried the domain name that is listed in the RPZ ruleset.
- **Total Subscriber Hits**: Total number of queries that triggered an RPZ policy.
- **Malicious Domains**: The domain name queried by the subscriber.
- **RPZ Entries**: The total number of RPZ entries for each subscriber.
- **RPZ Severity**: The threat severity level of an RPZ zone associated with the RPZ rule that was triggered.
- **Mitigation Action**: The ruleset specified for the blocked domain name or IP address.
- **Result:** Classification of the RPZ hit. The result can be of types **BL** (blacklist), **PXY** (proxy), **CAT:17** (parental control policy), **RPZ:rpz8.com** (RPZ), **WRN:0** (warning). For example, an RPZ hit to [http://www.beer.com](http://www.beer.com)  displays **WRN:0** in the **Result** column. The category number and warning number vary depending on the RPZ hit.
- **IP Space Discriminator**: The name of the IP space discriminator.
