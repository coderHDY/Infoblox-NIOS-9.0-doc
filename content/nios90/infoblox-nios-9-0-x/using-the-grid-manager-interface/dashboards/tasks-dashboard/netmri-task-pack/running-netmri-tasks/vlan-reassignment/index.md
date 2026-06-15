---
title: "VLAN Reassignment"
source: "/space/nios90/1345062927"
pageId: "1345062927"
---
VLANs can be reassigned to new interfaces on individual L2/L3 switches in the managed network. A VLAN can have a path across several switches; when you make changes on a given switch, make sure that the path is maintained.

To ensure end-to-end connectivity, you may need to change VLAN port assignments on more than one switch in the path. This feature operates with the VLAN Trunking Protocol (VTP). VLAN switching is changed across one port per switch at a time. Should you need to change VLAN assignments across more than one switch in the path, plan accordingly.

VLANs must already be configured on the switch(es) being changed, and be detected by the NetMRI appliance.

1. From the **Dashboards** tab, select the **Tasks** tab -&gt; **VLAN** **Reassignment**.
2. Begin by selecting the Device Group from the drop-down list. For **VLAN Reassignments**, you typically choose the Switching device group.
3. From the **Device** drop-down list, choose the switch on which port reassignment will be executed.
4. From the **Port** list, choose the interface to which the VLAN will be reassigned. The **Port** list also shows the Administrative and Operational states of each interface on the current device (Administratively Up/Operationally Down, for example.)
   
   Note that you can reassign a VLAN to a port that is operationally or administratively Down.The Current VLAN value will show the VLAN to which the selected interface is currently assigned.
5. Choose the new VLAN value for port reassignment from the **New VLAN** drop-down list.
6. Click **Move VLAN**.

The system sends the configuration request to the NetMRI appliance and displays the task configuration sequence.

The VLAN Reassignment task will also write the full running configuration to memory, making it the saved configuration. If the user made a change to the running configuration, in parallel with the port activation change, and did not save it, those changes will also be saved.

For more details, see

*[children]*
