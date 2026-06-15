---
title: "VM Disk Partition"
source: "/space/nios90/1367016071"
pageId: "1367016071"
---
Infoblox uses an "A/B" upgrade scheme. There are two root partitions and two storage partitions. On an upgrade, the "alternate" partitions are populated must be rebooted. They flip back and forth for successive upgrades. (This is also what allows a revert to the previous version when necessary.)

The 500 GB disk size partition is as follows:

| **Name** | **PARTLABEL** | **Size** |
| --- | --- | --- |
| sda |  | 500 GB |
| \|-sda1 | root1 | 8 GB |
| \|-sda2 | root2 | 8 GB |
| \|-sda3 | boot | 1 GB |
| \|-sda4 | config | 1 GB |
| \|-sda5 | storage1 | 229 GB |
| \|-sda6 | storage2 | 229 GB |
| \|-sda7 | swap | 24 GB |

The formula for storage size is: (disk - (2*8+2*1+24))/2

That is, the disk size minus the space for root1, root2, boot, config, and swap, divided by half.

For a 500 GB disk: (500-(2*8+2*1+24))/2 = 229

For a 250 GB disk, (250-(2*8+2*1+24))/2 = 104. That is, each storage partition will be 104 GB.
