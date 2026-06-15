---
title: "Adding Superscopes"
source: "/space/nios90/1466925364"
pageId: "1466925364"
---
Before you add a superscope, you must first create at least one DHCP range to include in the superscope. To add a superscope:

1. From the **Data** **Management** tab, select the **DHCP** tab.
2. If you have more than one network view in the system, select the network view in which you want to add the superscope. The network view must be the same one that is assigned to the Microsoft server.
3. Expand the Toolbar and click **Add** -&gt; **Superscope**.
4. In the *Add* *Superscope* wizard, complete the following and click **Next:**
   
   - **Name**: Enter a name for the superscope.
   - **Comment**: Optionally, enter additional information about the superscope.
5. Click the Add icon and select a range from the *Select* *Range* dialog box. This dialog box lists only the address ranges that are served by a Microsoft server.
6. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
7. Save the configuration and click **Restart** if it appears at the top of the screen.   
   or

- Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/scheduling-tasks).
