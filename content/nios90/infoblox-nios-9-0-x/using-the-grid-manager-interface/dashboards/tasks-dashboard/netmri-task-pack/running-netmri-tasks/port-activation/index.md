---
title: "Port Activation"
source: "/space/nios90/1344964556"
pageId: "1344964556"
---
The Port Activation task provides a central console on which the interfaces for any device anywhere in the managed network can be conveniently enabled or disabled. Ports can be taken administratively Up or Down using this task, and all interfaces on a selected device can be activated or deactivated with a series of mouse clicks.

1. From the **Dashboards** tab, select the **Tasks** tab -&gt; **Port** **Activation**.
2. Choose the **Device Group** from the drop-down list.
3. From the **Device** drop-down list, choose the network device on which port activation will be executed.  
   The **Interfaces** table lists all interfaces on the current device. The **VLAN** and **VLAN** **Name** columns list the VLAN assigned to each port (VLAN 1/Default resides on all ports without an explicit VLAN assignment). The **OP Status** column will show the current state of each interface.
4. Scroll down the table to locate the interface(s) you want to activate.
5. From the **Admin Status** column, select **Up** (or **Down**) from the drop-down list for the chosen interface.
6. Set any other interfaces on the current device based on your assigned task.
7. Click **Apply**.

The system sends the request to the NetMRI appliance and displays the task configuration sequence.

The Port Activation task will also write the full running configuration to memory, making it the saved configuration. If the user made a change to the running configuration, in parallel with the port activation change, and did not save it, those changes will also be saved.

For more details,

*[children]*
