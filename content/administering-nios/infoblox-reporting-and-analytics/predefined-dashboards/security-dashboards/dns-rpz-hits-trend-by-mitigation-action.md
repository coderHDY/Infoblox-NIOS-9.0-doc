---
title: "DNS RPZ Hits Trend By Mitigation Action"
source: "/space/nios90/1429242842"
pageId: "1429242842"
---
The *RPZ* *Hit* *Trend* *by* *Mitigation* *Action* dashboard provides trends for the total number of RPZ hits for each mitigation action along with the total client hits in a given time frame. You can view this report in either a line chart, a stacked chart, or in table format. You can choose to display the report in all the three formats. The default dashboard displays stacked chart for the RPZ hits by the mitigation action in a given time frame. You can hover your mouse over the graph to view the coordinates in the graph. Note that the values plotted in the stacked chart and line chart are average hits aggregated over time.  
The dashboard displays the following information in table format:

- **Time**: The date and time when the last hit was received.
- **Block**: Total number of queries that triggered a **Block** **(No** **Data)** and **Block** **(No** **Such** **Domain)** RPZ rule. For information about managing **Block** **(No** **Data)** and **Block** **(No** **Such** **Domain)** RPZ rules, see [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891) respectively.
- **Passthru**: Total number of queries that triggered the **Passthru** RPZ rule. For information about managing **Passthru** RPZ rule, see [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891).
- **Substitute**: Total number of queries that triggered the **Substitute** **(Domain** **Name)** and **Substitute** **(Record)** RPZ rule. For information about managing **Substitute** **(Domain** **Name)** and **Substitute** **(Record)** RPZ rules, see [*Configuring Rules for RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280269891) respectively.
- **Client** **Hits**: Total number of queries that triggered an RPZ policy. The client hits is the sum of **Block** **(No** **Data)**, **Block** **(No** **Such** **Domain)**, **Passthru**, **Substitute** **(Domain** **Name),** and **Substitute** **(Record)** RPZ hits. Note that this data is not displayed in the **Stacked** **Chart**, but displayed in the **Line** **Chart** and in **Table** format.
