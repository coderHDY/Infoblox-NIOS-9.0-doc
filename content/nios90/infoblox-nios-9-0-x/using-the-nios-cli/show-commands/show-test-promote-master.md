---
title: "show test_promote_master"
source: "/space/nios90/280887720"
pageId: "280887720"
---
Use the `show test_promote_master` command to view the results of the test promotion of a Grid Master Candidate to Grid Master. You can run a test promotion by running the *[set test_promote_master](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-test-promote-master)* command.

# Syntax

show test_promote_master &lt;ip_address&gt;

| **Argument** | **Description** |
| --- | --- |
| &lt;ip_address&gt; | IP address of the Grid Master Candidate to be promoted to Grid Master |

# Examples

To see the results of the latest run:

`Infoblox &gt; show test_promote_master status `  
`[Mon Sep 23 10:37:34 2019] - [10.39.166.9]: Test state is STARTED `  
`a1.com              IRDP port (:2114): Message is sent from GMC [Mon Sep 23 10:37:34 2019] `  
`                    VPN port (:1194): Message is sent from GMC  [Mon Sep 23 10:37:34 2019] `  
`vm-09-75.com IRDP port (:2114): Connected                       [Mon Sep 23 10:37:35 2019] `  
`                    VPN port (:1194): Connected                 [Mon Sep 23 10:37:35 2019]`

To see the test results for a specific Grid Master Candidate:

`Infoblox &gt; show test_promote_master 10.39.166.9`  
`[Wed Sep 25 05:51:24 2019] - [10.35.191.9]: Test state is FINISHED `  
`a1.com IRDP port (:2114): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`             VPN port (:1194): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`a3.com IRDP port (:2114): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`             VPN port (:1194): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`a2.com IRDP port (:2114): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`             VPN port (:1194): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`a4.com IRDP port (:2114): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`             VPN port (:1194): Message was not received by GMC [Wed Sep 25 05:51:20 2019] `  
`vm-11-77.com IRDP port (:2114): Connected [Wed Sep 25 05:49:21 2019] `  
`                         VPN port (:1194): Connected [Wed Sep 25 05:49:21 2019]`
