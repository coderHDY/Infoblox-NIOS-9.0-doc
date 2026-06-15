---
title: "Restarting Services by Groups"
source: "/space/nios90/1356301531"
pageId: "1356301531"
---
You can use the group restart feature for the DHCP and DNS services. You do this by adding Grid members to groups and defining the restart order. Each service has a separate set of groups. You can specify whether a group is restarted sequentially or simultaneously and can also create a recurring schedule for restarts.  
To access restart groups:

1. Click **Infoblox Grid** **–>** **Grid** **Manager** **–>** **DHCP** or **DNS**.
2. On the **Services** tab, click **Toggle** **Restart** **Groups** **View**.

You can arrange group restart order for each service independently. Members in a group can restart simultaneously or sequentially, depending on your choice. When members are started sequentially, they are started in alphabetical order. When you have several restart groups, they all restart sequentially in the order that you define. For information, see  Ordering Restart Groups below.  
For each service, there exists the Default restart group in Grid Manager: Default DHCP group and Default DNS group. All Grid members belong to the Default group until you add them to another custom restart group. By default, the members of the Default group are restarted sequentially. The Default group is always restarted in the last place in the restart sequence for a service.

> **warning**
>
> ### Note
> 
> You can manage restart groups only if you are a superuser. If you are a limited-access user, you can see the restart groups and their restart status only if these groups include members for which you have permissions. When you restart services by groups, the services are restarted only on those members for which you have permissions.

For more information on how to create and manage restart groups, see the following sections. For how to restart services by groups, see Restarting Groups below.
