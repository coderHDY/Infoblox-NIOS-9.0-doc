---
title: "set promote_master"
source: "/space/nios90/280789927"
pageId: "280789927"
---
The` set promote_master `command specifies a NIOS appliance as the new Grid Master in the case of a Grid Master failure. The new Grid Master then alerts all the Grid members to redirect their traffic to it. If you have configured multi-site reporting cluster, you can modify the primary reporting site.

For information about reporting clusters, refer to the [*Infoblox NIOS Administrator Guide*](https://infoblox-docs.atlassian.net/wiki/spaces/NIOS/pages/35400616).

You can do one of the following to promote a master candidate to a Grid Master:

- Immediately notify all Grid members about the promotion.
- Set a sequential notification to provide wait time for Grid members to join the new Grid Master. Staggering the restarts of Grid members can minimize DNS outages. The sequential order for Grid members to join the new Grid Master begins with the old Grid Master and then the Grid members in FQDN order. The default delay time is 30 seconds. You can configure the delay time from a minimum of 30 seconds up to 600 seconds.

You must run the `set promote_master `command  within 8 hours of setting the sequential order.

For this command to be effective, you must have previously specified an appliance as the Grid Master candidate. Then when you lose the Grid Master, you can remotely (SSH) log in to the Grid Master candidate and execute this command.

A Grid member takes a product restart time (less than a minute) to reregister to the new Grid Master (Grid Master Candidate before executing the `set promote_master` CLI command).

- If you choose no delay, all Grid members receive the new master notification immediately and must reregister to the new Grid Master together.
- If you choose the delay option or the promotion schedule option, then based on the delay/schedule, Grid members start joining the new Grid Master.

The restart of the Grid Master Candidate to become a Grid Master also varies based on the load of the node and the hardware type. However, a restart should not take more than 2 to 3 minutes.

> **warning**
>
> ### Note
> 
> When the previous Grid Master comes back online, it automatically joins the Grid as a master candidate.

# Syntax

`set promote_master`

This command has no arguments.

# Examples

## Example of Promoting a Grid Master Candidate

`Infoblox &gt; set promote_master`  
`Do you want a delay between notification to Grid members? (y or n):`

Enter `n `to promote the master candidate and send notifications to all Grid members immediately. The appliance displays the following:

`This action will immediately promote master candidate to become the Grid Master. This feature is designed to be used primarily for disaster recovery.`  
`Are you sure you want to do this? (y or n): y`  
`The current member will become the Grid Master.`  
`Are you really sure you want to do this? (y or n): y`  
`Member promotion beginning on this member.`

Enter y to promote the Grid Master Candidate to the Grid Master immediately and specify the delay time for the Grid members to join the new Grid Master. The appliance displays the following:

`Set delay time for notification to Grid members? [Default: 30s]: 200`  
`This action will immediately promote master candidate to become the Grid Master. This feature is designed to be used primarily for disaster recovery.`  
`Are you sure you want to do this? (y or n): y`  
`The current member will become the Grid Master. The Grid members will be notified sequentially with a delay of 200 seconds.`  
`Are you really sure you want to do this? (y or n): y`

## Example of Scheduling the Grid Master Candidate Promotion

If you have selected to delay the promotion or you have selected the promotion schedule option, then based on the delay/schedule, Grid members start joining the new Grid Master.

As soon as the scheduled time arrives, members of Grid Master Candidate groups re-connect to the newly promoted master. The maximum scheduled time for the promotion of any Grid Master Candidate group is 8 hours. To schedule a group reconnection to the newly promoted Grid Master Candidate, select the **GMC Group Promotion** option. For more information, see [*Reconnecting Groups After Grid Master Candidate Promotion*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid/promoting-a-grid-master-candidate/reconnecting-groups-after-grid-master-candidate-).

`Infoblox &gt; set promote_master`

`Do you want a delay between notification to grid members? (y or n): y`

`Set delay time for notification to grid member? [Default: 30s] :`

`This action will immediately promote this member to become the grid master. This feature is designed to be used primarily for disaster recovery.`

`Are you sure you want to do this? (y or n): n`

`Exiting the command.`

## Example of Promoting a Grid Master Candidate in a Multi-Site Reporting Cluster

If you have configured multi-site reporting cluster, the appliance displays all the reporting sites in the order of priority you have configured. For example if you have configured the following reporting sites: site 4(priority 1), site 2 (priority 2), site 1(priority 3), and site 3 (priority 4)

`Infoblox &gt; set promote_master`  
`Do you want a delay between notification to Grid members? (y or n): n`  
`Primary reporting site candidates (in order of priority): `

1. `site4 (Existing primary reporting site)`
2. site2
3. `site1`
4. site3

`Please enter new primary reporting site (1-2) or 'c' to continue without changing primary reporting site: 5`

The appliance displays the following error when you enter value incorrectly:

`ERROR: Please enter a valid choice or 'c' to continue without changing the primary reporting site.`  
` Please enter new primary reporting site (1-2) or 'c' to continue without changing primary reporting site: c`  
` This action will immediately promote this member to become the grid master. This feature is designed to be used primarily for disaster recovery.`  
` Are you sure you want to do this? (y or n): y The current member will become the grid master.`  
` Are you really sure you want to do this? (y or n): y `  
`Master promotion beginning on this member`  
` Good Bye`

To change the primary reporting site:

`Infoblox &gt; set promote_master`  
` Do you want a delay between notification to Grid members? (y or n):n Primary reporting site candidates (in order of priority):`

1. `site4 (Existing primary reporting site)`
2. site2
3. `site1`
4. site3

`Please enter new primary reporting site (1-4) or 'c' to continue without changing primary reporting site: 2`  
` Are you sure you want to do this? (y or n): y The current member will become the grid master.`  
` Are you really sure you want to do this? (y or n): y Master promotion beginning on this member`  
` Good Bye`

The new priority order of reporting sites will be:

`site2 (Existing primary reporting site) `  
`site4`  
`site1`  
`site3`
