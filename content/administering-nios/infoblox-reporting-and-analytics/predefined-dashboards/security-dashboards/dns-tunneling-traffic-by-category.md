---
title: "DNS Tunneling Traffic by Category"
source: "/space/nios90/1428947968"
pageId: "1428947968"
---
The *DNS* *Tunneling* *Traffic* *by* *Category* dashboard provides information about DNS tunneling activities by specific categories and the percentage of events by the category of DNS tunneling events in a given time frame. This dashboard helps you track abnormal DNS traffic. The default dashboard shows a pie chart that lists the categories of DNS tunneling events. You can mouse over the pie in the chart to view the DNS tunneling category, event counts, and their percentages. You can also configure the appliance to display this dashboard in table format. The default dashboard displays the top 10 DNS tunneling categories within the last week.  
You can click the category in the table or in the pie chart to view the sub-dashboard *DNS* *Top* *Tunneling* *Activity*  
dashboard for the selected category. For more information, see DNS Top Tunneling Activity above. This dashboard displays the following information in table format:

- **Category**: The category to which the DNS tunneling activity belongs. Category can include the type of DNS tunneling activities as well as tunneling tools used to generate the activities. A category can be **short** **TTL**, **NXDomain**, **high-entropy** **domains**, **Iodine** **tool**, and others.
- **Category%**: The percentage based on the number of events in each DNS tunneling category divided by the total number of events in all the DNS tunneling categories.
- **Description**: The description about the rule that was triggered based on the client queries.

The sub-dashboard *DNS* *Top* *Tunneling* *Activity* dashboard displays the following information in table format:

- **Client IP**: The IP address of the source that triggered the DNS tunneling event.
- **Rule SID**: This field displays the rule ID for DNS Infrastructure Protection rule hits. If you select **Detected** **by** **Analytics** **Engine** as the category, this field displays the name of the RPZ used for blacklisted domains detected through the analytics service.
- **Event Count**: The total number of events triggered by a match against the rule.
- **Rule Description**: The description about the rule that was triggered based on the client queries.
- **Last Seen:** The timestamp when the client was last active.
