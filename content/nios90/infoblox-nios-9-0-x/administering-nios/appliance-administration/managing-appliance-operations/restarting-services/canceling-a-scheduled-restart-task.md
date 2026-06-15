---
title: "Canceling a Scheduled Restart Task"
source: "/space/nios90/1356301608"
pageId: "1356301608"
---
Limited-access users can only cancel a scheduled task that they created. Superusers can cancel a scheduled task that any user created. You can cancel scheduled restart tasks from **Task** **Manager**. For information, see [*Viewing Task*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks)[s](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks).  
When you delete a scheduled restart task, the system cancels the scheduled task to restart services on the member or Grid and does not restart services. To cancel a scheduled restart, see [*Canceling Scheduled Tasks*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Canceling%20Scheduled%20Tasksa&linkCreation=true&fromPageId=1356301608).  
You can also turn off the automatic service restart feature for other scheduled tasks. For example, if you set a recurring automatic restart for a restart group, you may not need the automatic service restart which should normally happen after a scheduled change of an object. You can do so from the Infoblox CLI using the set scheduled command. For information, see the section *set* *scheduled* in the *Infoblox* *CLI* *Guide*.  
Alternatively, administrator users with the approver role can cancel the automatic service restart for individual tasks when approving them. If you are an approver, you can do so by deselecting the **Enable** **automatic** **service** **restart** option for a task in the **Task** **Manager**. For information, see [*Viewing Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks/viewing-tasks).
