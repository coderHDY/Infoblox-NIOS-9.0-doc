---
title: "Managing Recursive DNS Views"
source: "/space/nios90/1416561202"
pageId: "1416561202"
---
When you add a DNS view that has recursion enabled, the appliance resolves recursive queries from hosts on the Match Clients list of that view. If the DNS view contains zones and you delete those zones, the appliance retains the view in its configuration file, as long as recursion is enabled in the view. Such a view is called an empty recursive DNS view because it does not contain any zones. It enables the appliance to respond to recursive queries from the specified clients.

In a Grid, all members automatically store DNS views that have recursion enabled in their configuration files. If you do not want a Grid member to respond to recursive queries for clients in a particular DNS view, you can remove the view from the member's configuration file.  
To delete or retain an empty recursive DNS view in the DNS configuration file of a Grid member:

1. From the **Data Management** tab, click the **DNS** tab > **Members** tab> *Grid_member *checkbox -> Edit icon.
2. In the *Member* *DNS* *Configuration* editor, click **Toggle** **Expert** **Mode** if the editor is in basic mode, and then select the **DNS** **Views** tab.
3. The *Recursive* *Views* *Assigned* *to* *this* *Member* section lists the empty recursive DNS views. Move a DNS view to the *Selected* column to explicitly assign the view to the Grid member and include it in the DNS configuration file of the member. Move a DNS view to the *Available* column to remove it from the configuration file of the member.  
   Empty recursive DNS views that you retain in the configuration file are automatically listed at the bottom of the list of DNS views. You can move them up on the list when you manually change the order of the DNS views, as described in Managing the DNS Views of a Grid Member below.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
