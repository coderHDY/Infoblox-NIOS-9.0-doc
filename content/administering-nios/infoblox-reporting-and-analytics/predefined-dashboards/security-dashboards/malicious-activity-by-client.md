---
title: "Malicious Activity by Client"
source: "/space/nios90/1428849467"
pageId: "1428849467"
---
The *Malicious* *Activity* *By* *Client* dashboard lists the clients that have the most malicious activities. The default dashboard shows a bar chart that lists clients that have the most total counts of malicious activities that triggered the RPZ rule over the given time frame. The default dashboard displays the top 10 clients within the last week.

> **warning**
>
> Note
> 
> To enable this dashboard, you must select the DNS Query and Security checkboxes in the Grid Reporting Properties editor. To select the checkboxes, go to the **Administration** tab -> Reporting tab -> Grid Reporting Properties -> General tab -> Basic tab, and then select the checkboxes DNS Query and Security under Report Category.

If you have configured Infoblox Subscriber Services, you can click **Subscriber ID** to view the sub-dashboard *RPZ Details for the Subscriber ID* dashboard. For information, see RPZ Details for the Subscriber ID below.

This dashboard displays the following information:

- **Client** **ID:** The IP address of the client that queried the malicious domains.
- **#** **Hits**: The total number of RPZ hits by the client.
- **Domains**: The top three malicious domains queried by the client.
- **Subscriber ID**: The subscriber ID type and the subscriber ID value. This field is displayed only if you have configured Infoblox Subscriber Services.
- **Last** **Active**: The timestamp of the last attempt when the client queried a malicious domain.
