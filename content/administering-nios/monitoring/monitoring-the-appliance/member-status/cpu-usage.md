---
title: "CPU Usage"
source: "/space/nios90/1320422504"
pageId: "1320422504"
---
Grid Manager displays the current percentage of the CPU usage on the selected Grid member. The maximum is 100%. It also describes whether the CPU usage has exceeded the trigger or reset value. Note that the trigger and reset values are user configurable. The default trigger value is 81% and the reset value is 70%. You can see more details about CPU usage through the CLI command: show CPU.

The status icon can be one of the following:

| **Icon** | **Color** | **Meaning** |
| --- | --- | --- |
|    | Green | The CPU usage is either below the reset value or has not yet reached the trigger value. |
|    | Red | The CPU usage has exceeded the trigger value. |
