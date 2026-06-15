---
title: "DNS Statistics"
source: "/space/nios90/1457652710"
pageId: "1457652710"
---
The *DNS* *Statistics* widget provides statistics for a member or for a zone. The zone statistics are cumulative, collected from all the members that are authoritative servers for zones or are hosting stub zones. The widget displays the totals for each type of DNS response as well as a line graph that tracks the responses per second.

You can add a *DNS* *Statistics* widget to your Dashboard for each zone or member DNS server on the Grid. To configure the *DNS* *Statistics* widget, click the Configure icon and do the following:

- Click **Select** **Member**. In the *Member* *Selector* dialog box, choose a Grid member to display statistics for all its stub zones and authoritative zones.  
  or
- Click **Select** **Zone**. In the *Zone* *Selector* dialog box, choose a DNS zone to display statistics for that zone only.

The widget displays only the option that you selected on your subsequent logins. For example, if you clicked **Select** **Member**, the widget displays the **Select** **Member** option only, and not the **Select** **Zone** option, when you log in again.

- **Graph Configuration**: Select which DNS messages you want to track in the **Responses per Second** graph.
  
  - **Success**: The number of successful queries.
  - **NXDOMAIN**: The number of queries for domain names that did not exist in the database.
  - **Referral**: The number of queries that became referrals.
  - **NXRRSET**: The number of queries for domain names that did not have the requested records.
  - **Failure:** The number of queries that failed due to reasons other than nonexistent domain names or records in a domain.
  - **Recursion**: The number of recursive queries for which the name server sent queries to other name servers.

The widget displays the following information:

- **DNS** **Responses** tab: Displays a pie chart and the total number of each type of message. It also displays the total number of full and incremental zone transfers that the Grid member performed.
- **Responses per Second** tab: Displays a line graph that tracks the DNS responses received per second, within an hour. The time is displayed according to the time zone specified in the User Profile. If the auto-detect time zone option is enabled and Grid Manager cannot determine the browser time zone, then the time is displayed in UTC format. You can mouse over the graph to display the coordinates of any point in the graph.
