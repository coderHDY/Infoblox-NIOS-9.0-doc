---
title: "set test_promote_master"
source: "/space/nios90/280855460"
pageId: "280855460"
---
Run the `set test_promote_master`` `command before promoting a Grid Master Candidate to Grid Master. The command checks whether the Grid Master Candidate is connected to the rest of the Grid members. It runs a test promotion by sending specifically crafted test packets from the Grid Master Candidate and checking whether the Grid members are able to receive these packets. To view the status of the promotion, run the *[show test_promote_master](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-test-promote-master)* command.

You can run a test promotion by also using the **GM Test** option on the Grid Manager. For more information, see *[Managing a Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)*.

# Syntax

`set test_promote_master &lt;ip_address&gt;`

| **Argument** | **Description** |
| --- | --- |
| ip_address | IP address of the Grid Master Candidate that you want to promote to Grid Master |

# Examples

To test the Grid Master Candidate promotion:

`Infoblox &gt; set test_promote_master 10.33.151.4`

`Enter Timeout (&gt;10 secs) for test messages(default 120 sec): 120 `

`Upgrade/Downgrade is prohibited during the test. Do you want to proceed? (y or n): y`

Here, test packets are sent every 10 seconds for 120 seconds from the Grid Master Candidate to the Grid members.

To stop a test promotion that is in progress:

`Infoblox &gt; set test_promote_master stop `

`This action will stop the promote master test which is still in progress. `

`Do you want to proceed? (y or n): y`
