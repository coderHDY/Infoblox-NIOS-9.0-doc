---
title: "Promoting the Master Candidate"
source: "/space/nios90/1340803135"
pageId: "1340803135"
---
To promote a Master Candidate, you can make a direct serial connection to the console port on the active node of an HA Candidate or to the console port on a single Candidate. You can also make a remote serial connection (using SSH v2) to the candidate. Enter the following Infoblox CLI command to promote a Master Candidate:  
`     set promote_master `   
You can do one of the following to promote a Master Candidate:

- Immediately notify all Grid members about the promotion.
- Set a sequential notification to provide wait time for Grid members to join the new Grid Master. Staggering the restarts of Grid members can minimize DNS outages. The sequential order for Grid members to join the new Grid Master begins with the old Grid Master and then the Grid members in FQDN order. The default delay time is 120 seconds. You can configure the delay time from a minimum of 30 seconds up to 600 seconds.

> **warning**
>
> Notes
> 
> - During a Grid Master promotion, ensure that you do not designate a Grid member as a Grid Master Candidate or promote a Master Candidate. In addition, wait up to two hours since the last promotion to perform another Grid Master promotion. Otherwise, you might experience unnecessary member reboots. Whenever possible, separate any operations that require product restarts by at least an hour.
> - When a Grid Master Candidate is selected as a subscribing member, then after Grid Master Candidate promotion, the subscription still takes place through the previous Grid Master Candidate member which is new a Grid member.
> - During a Grid Master Candidate promotion, all existing autorization key tokens used to disable BloxConnect become invalid. You must generate a new token after the promotion to Grid Master.

To promote a Grid Master Candidate, do the following:

1. Establish a serial connection (through a serial console or remote access using SSH) to the Master Candidate. For information about making a serial connection, as described in  Method 2-Using the CLI*, *see [*Deploying a Single Independent Appliance*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274626).
2. At the CLI prompt, use the command `set promote_master` to promote the Master Candidate and send notifications to all Grid members immediately, or promote the Master Candidate to the Grid Master immediately and specify the delay time for the Grid members to join the new Grid Master. For more information about the command, refer to the *Infoblox* *CLI* *Guide*.
3. To verify the new master is operating properly, log in to the Infoblox Grid Manager on the new master using the VIP address for an HA master or the IP address of the LAN1 port for a single master.
4. Check the icons in the **Status** column. Also, select the master, and then click the Detailed Status icon in the table toolbar. You can also check the status icons of the Grid members to verify that all Grid members have connected to the new master. If you have configured delay time for Grid member notification, it will take some time for some members to connect to the new master. You can also check your firewall rules and log in to the CLI to investigate those members.

> **warning**
>
> Note that when you promote the Master Candidate to a Grid Master, the IP address will change accordingly. If you have configured a FireEye appliance, then any changes in the Grid Master IP address, FireEye zone name, associated network view or the DNS view will affect the **Server** **URL** that is generated for a FireEye appliance. The FireEye appliance will not be able to send alerts to the updated URL when there is a change in the IP address. You must update the URL in the FireEye appliance to send alerts to the NIOS appliance. For more information, see* *[*Configuring FireEye RPZs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662094).
