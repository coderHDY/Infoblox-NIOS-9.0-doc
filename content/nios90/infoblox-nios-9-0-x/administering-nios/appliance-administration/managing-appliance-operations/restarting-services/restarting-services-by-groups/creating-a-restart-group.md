---
title: "Creating a Restart Group"
source: "/space/nios90/1356301563"
pageId: "1356301563"
---
You can add a member to a group if the member has a license for the corresponding service. Only members with the appropriate license are available for grouping. For pre-provisioned members, you can add them to groups, but the restart requests are not created for such members.  
When you assign members to restart groups, Grid Manager checks if the restart may affect the service operation. If the restart with the current grouping configuration can lead to a service interruption, a warning message is displayed. For example, you cannot add two members from a DHCP failover association to the same group configured to restart its members simultaneously.  
To create a restart group:

1. Click **Infoblox** **Grid** **–&gt;** **Grid** **Manager** **–&gt;** **DHCP** or **DNS**.
2. On the **Services** tab, click **Toggle** **Restart** **Groups** **View**.
3. Click the **Add** icon.
4. Specify the general information for the group:
   
   - Name
   - Comment
   - Restart order for group members: simultaneously or sequentially
     
     Note that for how to delay service restarts, see Configuring Restart Settings below.
5. Click **Next**.
6. Add members by clicking the **Add** icon for each new member.
7. Click **Next**.
8. If you want to create a restart schedule for this group, select **Enable** **Restart** **Schedule** and specify the required parameters.
   
   Note that the restart schedule can run either once or on a recurring basis. It does not create scheduled tasks. If a schedule is configured for a restart group, you can still perform one-time restarts independently for Grid members or restart groups and create scheduled tasks for these restarts.
9. Select the restart type for the services on the affected members:
   
   - **If** **needed**: Select this to restart services only if there are changes requiring a service restart.
   - **Force** **service** **restart**: Select this to force a service restart even if it is not needed. A forced restart may be delayed if there are pending restarts for the same service.
10. Click **Next**.
11. If necessary, specify the extensible attributes.
12. Click **Save** **&** **Close**.
