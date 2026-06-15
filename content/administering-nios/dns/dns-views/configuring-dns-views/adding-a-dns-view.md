---
title: "Adding a DNS View"
source: "/space/nios90/1416301078"
pageId: "1416301078"
---
You can add up to 1000 DNS views. When you add a DNS view, specify the following:

- The network view in which you are creating the DNS view.  
  The appliance lists the network views only when there are multiple network views. Otherwise, it automatically associates the DNS view with the default network view.
- A Match Clients list specifying the hosts allowed access to the DNS view.  
  If you do not define a list, the appliance allows all hosts to access the DNS view. For more information, see Defining Match Clients Lists below*.*
- Whether recursive queries are allowed.  
  When a name server is authoritative for the zones in a DNS view, you can disable recursion since your name server should be able to respond to the queries without having to query other servers.  
  if you want to allow a Grid member to respond to recursive queries from specific IP addresses, you can create an empty DNS view, that is, one that has no zones in it, and enable recursion. For information, see [*Configuration Example: Configuring a DNS View*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272744).

> **warning**
>
> ### Note
> 
> This setting overrides the recursion setting at the Grid and member levels.

To configure a new DNS view:

1. If there is more than one network view in the Grid, select the network view in which you are creating the DNS view.
2. From the **Data** **Management** tab -> **DNS** tab, expand the Toolbar and click **Add** -> **Add** **DNS** **View**.
3. In the *Add* *DNS* *View* wizard, complete the following fields:
   
   - **DNS** **View:** Enter the name of the DNS view. It can be upto 64 characters and can contain any combination of printable characters.  Two DNS views with the same name are not allowed even if they are in different network views.
   - **Comment:** Optionally, enter information about the DNS view. You can enter up to 256 characters.
   - **Enable** **Recursion:** This field's initial default state is inherited from the Grid. It is inactive and greyed out until you click **Override**. After you click override, you can select or clear the checkbox to define a setting that applies to the DNS view only.  
     Note that a DNS view actually inherits its recursion setting from the Grid members that serve its zones. When you first create a DNS view though, it does not have any zones and therefore inherits its setting from the Grid. After you create zones in the DNS view, Grid Manager can then determine the associated members and display the resulting inheritance. If a DNS view has multiple zones served by multiple members with different recursion settings, you can view the different settings in the Multi-Inheritance viewer.  
     You can click **Inherit** to have the DNS view inherit its recursion setting from the Grid.  
     If the [*set rpz_recursive_only*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280658762) command is set to `no `for a DNS view or zone, you can deselect the **Enable Recursion** checkbox even if the RPZ zone is configured as the Grid secondary. In a single DNS view, if the [*set rpz_recursive_only*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280658762) command is set to `no `for one zone and not set to no for another zone, then you cannot disable recursion. Ensure that there is no conflict between [*set rpz_recursive_only*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280658762) `yes`, `none`, and `no` settings in different zones in the same view when you disable recursion. If a scheduled Grid upgrade is in progress, then you cannot deselect the **Enable Recursion **checkbox.
   - **Disable**: Select this checkbox to disable this DNS view. Note that disabling a DNS view may take a longer time to complete depending on the size of the data.
   - **Disable sync to MGM**: Select this option to disable synchronization of the selected DNS View from the managed Grid to the Multi-Grid Master.
4. Save the configuration and click **Restart** if it appears at the top of the screen, or click **Next** to define a Match Clients list. For information, see Defining Match Clients Lists below or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
