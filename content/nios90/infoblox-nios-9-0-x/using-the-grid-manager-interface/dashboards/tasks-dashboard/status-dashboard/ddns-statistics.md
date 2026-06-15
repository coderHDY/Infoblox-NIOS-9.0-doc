---
title: "DDNS Statistics"
source: "/space/nios90/1457095649"
pageId: "1457095649"
---
The *DDNS* *Statistics* widget provides information about the dynamic DNS (DDNS) updates that occur on the DNS service of a selected Grid member. The widget displays the total number of DDNS updates that succeeded, failed, and that were rejected. It also displays a line graph that tracks the status of the DDNS updates per second.

You can add a *DDNS* *Statistics* widget to your Dashboard for each DNS server on the Grid that accepts dynamic DNS updates.

To configure the *DDNS* *Statistics* widget, click the Configure icon and do the following:

- Click **Select** **Member**. In the *Member* *Selector* dialog box, select a Grid member from the list.
- **Graph Configuration**: Select which updates you want to track in the **Updates per Second** graph:
  
  - **Success:** The number of DDNS update requests that succeeded.
  - **Prerequisite Reject:** The number of DDNS update requests that were rejected because the prerequisite conditions specified in the request were not met.
  - **Reject:** The number of DDNS update requests that were rejected by the DNS service.
  - **Failure:** The number of DDNS update requests that failed.

The widget displays the following information:

- **DDNS** **Updates** tab: Displays totals for each type of update.
- **Updates per Second** tab: Displays a line graph that tracks the status of the DDNS updates. The time is displayed according to the time zone specified in the User Profile. If the auto-detect time zone option is enabled and Grid Manager cannot determine the browser time zone, then the time is displayed in UTC format. You can mouse over the graph to display the coordinates of any point in the graph.
