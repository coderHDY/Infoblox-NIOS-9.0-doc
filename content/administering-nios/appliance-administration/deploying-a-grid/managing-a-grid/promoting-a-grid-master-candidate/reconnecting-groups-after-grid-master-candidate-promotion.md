---
title: "Reconnecting Groups After Grid Master Candidate Promotion"
source: "/space/nios90/1340803171"
pageId: "1340803171"
---
This feature gives you more control over the Grid Master Candidate promotion, minimizes service outages by allowing you to group the members and schedule a time for the groups to reconnect to the newly promoted Grid Master. As soon as the scheduled time arrives, members of Grid Master Candidate groups will re-connect to the newly promoted master.

To schedule a group reconnection to the newly promoted Grid Master Candidate, do the following:

1. From the **Infoblox Grid** tab > **Grid Manager** tab, expand the Toolbar, and then click **GMC Group Promotion**.
2. In the **GMC Group Promotion Schedule** editor, specify the following:
   
   - **Activate GMC Group Promotion Schedule**: Select this option to enable the scheduled reconnection of the group after the Grid Master Candidate is promoted.
   - Click the **+ **icon and specify the following in **Add GMC Group** **Wizard**:
     
     - **Name**: Provide the group’s name.
     - **Promotion Policy**: Select either **Simultaneously** or **Sequentially**, as required.  
       **Simultaneously**: Select this option to simultaneously reconnect the group members after the Grid Master Candidate promotion at the same time.  
       **Sequentially**: Select this option to sequentially reconnect the group members after Grid Master Candidate promotion in a sequence. Note that when you select sequentially, each group member joins the Grid master in a sequence with an interval of 30 seconds.
     - **Time** **Zone**: Select a time zone that applies to the start time you enter. If this time zone is different  
       from the Grid time zone, the appliance converts the time you enter here based on the Grid time  
       zone, after you save this schedule. When you display this schedule again, it displays the  
       converted time. Selecting the time zone here does not affect any time zone settings in the Grid.  
       (For information about setting the Grid and member time zones, see [*Managing Time Settings*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765142)). After the Grid Master Candidate promotion, members will reconnect based on the selected time zone.
     - **Date**: Enter a start date of the group members reconnecting after Grid Master Candidate promotion in YYYY-MM-DD (year-month-day) format. You can click the calendar icon to select a date from the calendar widget.
     - **Time**: Enter a start time of the group members reconnecting after Grid Master Candidate promotion in hh:mm:ss AM/PM (hour:minute:second in AM or PM) format. You can select a time from the drop-down list.
     - **Comment**: Enter your comments.
     - Click **Next**.
     - In the **Members Assignment** wizard, select the Grid member(s) to add to the newly created group.
3. **Save** and **close** the wizard.

To modify an existing group, on the **GMC Group Promotion Schedule** editor:

1. Click Edit icon, and modify the changes in **Add GMC Group** **Wizard**.
2. **Save** and **close** the wizard.

To delete an existing Grid Master Candidate group, do the following in the **GMC Group Promotion Schedule** editor:

1. Click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes**.

After enabling the Grid Master Candidate group promotion, use the `set promote_master` CLI command to start the Grid Master Candidate promotion.  
Use the `set gmc_promotion disable` CLI command to disable the **Activate GMC Group Promotion Schedule **option. Note that, this command can be executed on Grid Master and Grid Master Candidate. For more information see, [*set gmc_promotion*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/317424916)*.*

> **warning**
>
> Notes
> 
> - If the **Activate GMC Group Promotion Schedule** option is not enabled on Grid Master, and if you choose to continue with Grid Master Candidate promotion using the command, `set promote_master`, then the Grid Master Candidate promotion works as described in [*Promoting the Master Candidate*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1340803135).
> - By default, all the members are part of the **Default** group. The Grid Master Candidate group members can be customized according to your requirement; however Grid Master Candidate cannot be customized as Grid Master Candidate is part of the **Default** group only.
> - If you want to reconnect members of any group to the newly promoted Grid Master, irrespective of the scheduled time, you can click **Join Group Now** option, by selecting the **Join Group Now** icon  in **GMC Group Promotion Schedule** editor. This works only during the promotion of a Grid Master Candidate. That is, **Join Group Now** is activated (enabled) only during the promotion of Grid Master Candidate group; it is disabled after the scheduled time of all the groups expires after the Grid Master Candidate is promoted. For any offline member, the **Join Group Now** will be disabled 8 hours after the Grid Master Candidate promotion.
> - The **Add GMC Group** **Wizard **in the **GMC Group Promotion Schedule** editor is available only for future schedules. The maximum scheduled time for the promotion of any Grid Master Candidate group is 8 hours.
> - We do not recommend enabling a schedule Grid upgrade and **GMC Group Promotion Schedule **at the same time.
> - The **Time Zone** for any group, displays the Grid Manager’s time zone, and if there are any member(s) in the group, the **Time Zone** automatically reflects the first group member(s) time zone.
> - The scheduled **Time** displays the new time zone, if the **Time Zone** is modified or if a member is moved across different groups.
> - During the Grid Master Candidate promotion, if a Grid member is offline, Grid Manager continuously attempts to connect to the offline Grid member for every 60 seconds.
> - If the **GMC Group Promotion Schedule** editor is disabled after Grid upgrade, then you can unset the previously triggered Grid Master Candidate promotion, by using the CLI command `set gmc_promotion forced_end`. It is recommended to run this command when the Grid is completely upgraded. For more information see, [*set gmc_promotion*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/317424916)*.*
