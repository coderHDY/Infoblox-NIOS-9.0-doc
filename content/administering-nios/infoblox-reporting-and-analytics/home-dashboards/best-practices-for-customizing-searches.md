---
title: "Best Practices for Customizing Searches"
source: "/space/nios90/1367049111"
pageId: "1367049111"
---
You can optimize the performance of your reporting server and more efficiently view and manage your reports. Depending on the type of search and the data you want to search for, Infoblox recommends that you use the following guidelines:

- Specify shorter start and end times whenever possible.
  
  - Time range is one of the most important factors for search performance. Depending on the number of events that need to be loaded from the disk, it might take a long time when you specify a wider time range as it involves a large amount of data.
- Be specific about the fields you use.
  
  - Rare searches are faster than dense searches, so be specific whenever possible.
  - Start a search from a smaller dataset and then gradually apply it to bigger dataset.
  - When experimenting searches, start with a small date and time range, and then apply it to a bigger time range only when it is optimized.
- If a search is running for a long time, you can use the **Pause** and **Stop** buttons.
  
  - You can tune the search criteria and run it again if you stop an ongoing search job.
- Configure the panels to display data only if you have specific input instead of adding too many panels to the dashboard.
- Scheduling expensive searches.
  
  - You can configure reports and dashboards by scheduling searches because prefetched search results are displayed each time the reports and dashboards are opened. This reduces the workload on the reporting server without data freshness.
- Stagger scheduled searches.

Try to stagger your searches whenever possible. When you define how often the reporting server runs a search, be aware of other searches that the server is running. When you schedule the server to run many searches at the same time, the server performance can be negatively affected.
