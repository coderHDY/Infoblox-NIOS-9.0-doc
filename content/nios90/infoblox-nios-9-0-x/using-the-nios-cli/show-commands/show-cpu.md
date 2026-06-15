---
title: "show cpu"
source: "/space/nios90/280920584"
pageId: "280920584"
---
The `show`` ``cpu` command displays the processor and memory statistics for the NIOS appliance. This command tells you how busy the appliance is and indicates if an appliance is not performing properly.

# Syntax

`show cpu`

This command has no arguments.

# Example

The following example provides information on:

- **swpd:** Amount of virtual memory (swap space) used
- **free:** Amount of available memory
- **idle:** Amount of idle memory
- **buff:** Amount of memory used as buffers (I/O)
- **cache:** Amount of memory used as cache (kernel used memory)
- **swap**
  
  - **si:** Amount of memory paged in (per/sec) from swap or the file system
  - **so:** Amount of memory swapped out
- **io:** Disk input/output
  
  - **bi:** Blocks (4K each) received from a block appliance
  - **bo:** Blocks sent to a block appliance
- **system**
  
  - **in:** Number of hardware interrupts per second—measures how busy the CPU is
  - **cs:** Number of context switches per second—measures how busy the CPU is
- **cpu:** Measures (%) of CPU used in each of these areas—the total equals 100%
  
  - **us:** Percentage of CPU used running the Infoblox product and other non-kernel processes
  - **sy:** Percentage of CPU used running kernel processes
  - **id:** Percentage of CPU that is currently idle
  - **wa:** Percentage of CPU spent waiting for disk I/O

---

**Note:** If the combined io (bi and bo) and cpu wa values are high, it is a sign that the system is overloaded.

---

` Infoblox &gt; showcpu`  
` ---------memory------------------- -swap-- --io--- --system- -----cpu-------`

`swpd   free    idle   buff   cache  si  so bi bo in cs us sy id wa st`  
`0      984024  15432  51932  916660 0   0  0  42 61 94 3  2  95 0  0`` `
