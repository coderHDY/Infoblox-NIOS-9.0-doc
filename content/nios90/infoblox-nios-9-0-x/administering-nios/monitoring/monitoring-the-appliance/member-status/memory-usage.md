---
title: "Memory Usage"
source: "/space/nios90/1321175060"
pageId: "1321175060"
---
Grid Manager displays the current percentage of system memory in use on the selected Grid member. It also describes whether the usage has exceeded the trigger or reset value. Note that the trigger and reset values are user configurable. The default trigger value is 90% and the reset value is 80%. You can see more details about memory usage through the CLI command: show memory. The status icon can be one of the following.

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|    | Red | The memory usage has exceeded the trigger value. |
|    | Yellow | The memory usage is decreasing from the trigger value, but has not yet reached the reset value. |
|    | Green | The memory usage is either below the reset value or has not yet reached the trigger value. |
