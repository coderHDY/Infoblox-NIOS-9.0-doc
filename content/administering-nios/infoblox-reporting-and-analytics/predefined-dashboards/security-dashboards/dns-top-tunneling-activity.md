---
title: "DNS Top Tunneling Activity"
source: "/space/nios90/1428849515"
pageId: "1428849515"
---
The *DNS* *Top* *Tunneling* *Activity* dashboard lists the clients that have the most number of DNS tunneling activities in a given time frame. The default dashboard shows a horizontal bar chart that lists clients that have the most total counts of DNS tunneling events and their percentages over the given time frame. You can also configure the appliance to display this dashboard in table format. The default dashboard displays the top 10 clients within the last week.  
You can click the client IP address in the table or click the bar in the bar chart to view a sub-report *Rule* *hits* *for* *Client* *IP* for a specific client.  
This dashboard displays the following information:

- **Client IP**: The source IP address that triggered the DNS tunneling event.
- **Event Count:** The total number of DNS tunneling events triggered by the client.

The sub-dashboard *Rule* *hits* *for* *Client* *IP* lists the number of events triggered by the selected client for each DNS tunneling category. It displays the following information in table format:

- **Category**: The category to which the DNS tunneling activity belongs. Category can include the type of DNS tunneling activities as well as tunneling tools used to generate the activities. A category can be **short** **TTL**, **NXDomain**, **high-entropy** **domains**, **Iodine** **tool**, and others.
- **Event Count:** The number of events triggered in each DNS tunneling category.
- **Last Seen:** The timestamp when the client was last active.
