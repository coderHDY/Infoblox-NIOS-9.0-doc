---
title: "DNS Top RPZ Hits by Clients"
source: "/space/nios90/1429242804"
pageId: "1429242804"
---
The *DNS* *Top* *RPZ* *Hits* *by* *Clients* dashboard lists the total number of RPZ hits from a client during an interval, irrespective of the rules and mitigation actions. You can view the IP address of the client, total hits and the date and time during which the hits were received.  
The appliance lists the top RPZ hits by clients in table format. You can click a specific row in the table to view the lease history of a client. Grid Manager displays another report that specifies more detailed information, such as the leased IPs, host name, and MAC addresses for each client. For more information about RPZs, see [*About Infoblox DNS Firewall*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402698). In addition, you can click the client IP address to view login details of the user. For information, see User History for IP Address above.

If you have configured Infoblox Subscriber Services, you can click **Subscriber ID** to view the sub-dashboard *RPZ Details for the Subscriber ID* dashboard. For information, see RPZ Details for the Subscriber ID below.

This dashboard displays the following information in table format:

- **Client** **ID**: The IP address of the client that queried the domain name that is listed in the RPZ ruleset.
- **Total** **Client** **Hits**: The total number of hits received for all DNS view from the respective client.
- **Subscriber ID**: The subscriber ID type and the subscriber ID value. This field is displayed only if you have configured Infoblox Subscriber Services.
- **Time**: The date and time when the last hit was received.
