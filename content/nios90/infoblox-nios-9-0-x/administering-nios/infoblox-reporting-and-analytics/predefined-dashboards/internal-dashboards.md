---
title: "Internal Dashboards"
source: "/space/nios90/280270248"
pageId: "280270248"
---
You can monitor information about index volume usage on the reporting server for each report category and reporting members. You can track volume usage statistics by generating the following internal reports:

*[toc]*

# Reporting Index Usage Statistics

The *Re*porting *Index* *Usage* *Statistics* dashboard provides information about the current disk space in use and the maximum index space configured for a reporting index. For information about the maximum index size allocated for each index, see *[Reporting Indexes](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/about-reports)** *table. The dashboard shows a bar chart for Index Disk Usage trend. You can mouse over the bar to view the index volume usage/maximum index space allocated for that reporting index.  
Note that the *Reporting**Index**Usage**Statistics* dashboard displays information for only those indexes that demonstrate activities or disk usage. So even if the indexes are enabled but have no activity or disk usage, then information about these indexes is not displayed in the *Reporting**Index**Usage**Statistics* dashboard.

This dashboard shows the following information:

- **Index** **(Reporting Member)**: The name of the index that holds specific types of reporting data.
- **Index** **Disk** **Usage** **Trend** **(%** **used/day)**: The percentage of index disk usage on a daily basis. The trend shows the impact of changing the reporting partition disk allocation and index capacities.
- **Earliest** **Event**: The timestamp of the earliest event in the index.
- Max Volume (MB): The maximum index volume configured.
- **Usage** **(%)**: The percentage of disk space that is currently in use for the index.
- **Volume** **(MB)**: The current index volume in use.

# Reporting License Usage

The *Re*porting *License* *Usage* dashboard provides license usage over a given time frame and license usage warning count if there is any license usage violation. The default dashboard displays bar chart that shows license usage in megabytes over a given time frame.  
This dashboard shows the following information:

- **License Usage (MB):** The total reporting volume used by each report category in megabytes.
- **Time**: The timestamp of license usage.
- **License Usage Warning Count:** The warning count triggered due to license usage violation.

# Reporting Volume Usage Trend per Category

The *Re*porting *Volume* *Usage* *Trend* *per* *Category* dashboard provides reporting volume usage trends over a given time frame. The default dashboard displays line chart that show reporting volume usage trends for report categories over the last day.  
This dashboard shows the following information:

- **Volume (MB):** The total reporting volume used by each report category in megabytes.
- **Time:** The timestamp of events.

# Reporting Volume Usage Trend per Member

The *Re*porting *Volume* *Usage* *Trend* *per* *Member* dashboard provides reporting volume usage trends on members in a given time frame. The default dashboard shows line graphs that track reporting volume usage trends on a member within the last day.  
This dashboard shows the following information:

- **Volume (MB):** The total reporting volume used by each reporting member in megabytes.
- **Time (UTC):** The timestamp of events
