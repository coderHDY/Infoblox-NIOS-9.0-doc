---
title: "DBWrite Usage"
source: "/space/nios90/1857355835"
pageId: "1857355835"
---
Grid Manager displays the current percentage of the database write (DBWrite) usage on the selected Grid member. It also describes whether the database write usage has exceeded the trigger or reset value. You can configure the trigger and reset values. The default trigger value is 95% and the reset value is 85%. For more information about DBWrite usage, use the [*show thresholdtrap*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280855147) CLI command.

The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|    | Green | The DBWrite usage is either below the reset value or has not yet reached the trigger value. |
|    | Yellow | The DBWrite usage is decreasing from the trigger value, but has not yet reached the reset value.   When the DBWrite usage exceeds the trigger value, the icon changes from green to yellow. |
