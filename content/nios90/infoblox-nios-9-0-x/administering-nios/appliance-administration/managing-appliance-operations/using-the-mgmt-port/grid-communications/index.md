---
title: "Grid Communications"
source: "/space/nios90/1468335367"
pageId: "1468335367"
---
You can isolate all Grid communications to a dedicated subnet as follows:

- For Grid communications from the Grid Master, which can be an HA pair or a single appliance, the master uses either the VIP interface on the HA port of its active node (HA master) or its LAN port (single master). Neither a single nor HA Grid Master can use its MGMT port for Grid communications. (This restriction applies equally to Master Candidates.)
- Common Grid members connect to the Grid Master through their MGMT port.

This ensures that all database synchronization and Grid maintenance operations are inaccessible from other network elements while the common Grid members provide network protocol services on their LAN ports.  
The below figure shows how Grid members communicate to the master over a dedicated subnet.

*Grid* *Communications*

*[drawio]*
