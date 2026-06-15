---
title: "Viewing the Grid Node Tree"
source: "/space/nios90/280760851"
pageId: "280760851"
---
You can view graphical representation of the Grid, with its members represented as nodes in the tree. The **Visualization** tab is disabled for new installations and this tab is displayed by default when you upgrade. For information about enabling this option, see *[Enabling Grid Visualization](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/enabling-grid-visualization)*. Each member is labeled with its hostname. You can click **Display** **Node** **Labels** on the left panel to display or hide the labels.   
By default, the Grid Master is the root node at the center of the tree. It is represented by a color-coded icon connected to its members. You can then click a member to re-center the tree on that node. The left panel displays information about the member that is at the center of the node tree.  
In the node tree, the shape of the icons indicate the role of the member in the Grid:

- Circle: Grid Master
- Ellipse: Grid Members

The colors of the icons indicate the status of the member:

- Green: The member is online and functioning properly.
- Grey: The member has not joined the Grid.
- Red: The member has operational problems.

The connectors indicate the connection status between the Grid Master and the member.

- Blue Line: Connects the Grid Master with online Grid members
- Thick White Line: Connects the Grid Master with Grid Master Candidates
- Dashed Line Connector: Connects the Grid Master with offline Grid members

The node tree includes zooming and panning capabilities to enable quick navigation and selection among multiple nodes. You can also hover your mouse over a node to view node information. It displays the same information as that displayed on the left panel, when a node is at the center of the tree.  
For the Grid Master:

- Grid name
- Standalone or HA
- Number of members in the Grid
- Status of each protocol running on the Grid
- Grid status For a Member:
- Member name
- Standalone or HA
- HA Status if HA pair
- Status of each protocol running on that member
