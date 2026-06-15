---
title: "Applying Extensible Attributes"
source: "/space/nios90/1344964488"
pageId: "1344964488"
---
Extensible attributes are associated with a specific network view, and are referenced by the Network Provisioning task. Should you configure a new network using a network view, you may need to consider the application of extensible attributes to the new network (they are not automatically applied, but will appear in the Network Provisioning dialog if those attributes are defined in the chosen Network View). Extensible attributes are generally defined for descriptive and tracking purposes in the network. A network view may have attributes such as Building, Country, Region, Site, State or VLAN, for example. Attributes are defined for network views in NIOS but are not defined by the NetMRI appliance.

If the NIOS system supports only a single network view, no View selections are made for the purposes of network provisioning.

To perform an automatic network provisioning task:

1. From the **Dashboards** tab, select the **Tasks** tab -&gt; **Network** **Provisioning**.
2. Select the network type for provisioning: **IPv4** or **IPv4 and IPv6**.
3. To configure IPv4 provisioning:
   
   1. Enter the required name value in the** Interface Hostname** field. (Examples include "eth0" and "serial0.")
   2. Select the **DNS** **Zone** under which the hostname operates.
   3. Choose a device group from the **Device Group** drop-down list.
   4. From the Device drop-down list, choose the switch or router on which the network will originate.
   5. If the selected device is a router, the **VLAN Number** and** VLAN Name** fields will be disabled.
   6. From the **Interface** list, choose the interface to which the network will be reassigned. The drop-down list contains all the interfaces from the chosen network device, and also shows the ports' respective states (up/down, up/up and so on).
   7. If the chosen device is a switch, enter the new **VLAN** **Number** on which the new network segment runs.
   8. If the chosen device is a switch, enter the new **VLAN Name** on which the new network segment runs.
   9. Click **Provision Network** to commit settings.
   10. Enter the **Parent Network** value (or click Select Network to choose the parent network from a list if using a Network View).
   11. Choose the **Network Template** from the drop-down list if one is provided by the chosen Network View. The Network template is otherwise optional.
   12. The Provision Network task provides subnetting tools.
   13. Drag the **Netmask** slider to the required CIDR mask bit depth (1-32).
   14. In the **New Network** field, enter the IP prefix for the new network.
   15. In the **Router Address** field, enter the IP address for the router interface.
   16. Select any **Extensible Attributes** in the list if they are provided; otherwise, you can create new ones by clicking Add and choosing the **Attribute Name**, **Value** and the **Required** setting.

1. To configure IPv6 provisioning:

a. Enter the **Parent Network** value. Or, if using a Network View, click **Select Network** to choose the parent network from the list.  
b. Choose the **Network Template** from the drop-down list if one is provided by the chosen Network View. The Network template is otherwise optional.  
    The Provision Network task provides subnetting tools.  
c.** Drag the Netmask** slider to the required CIDR mask bit depth (1-32).  
d. In the** New Network** field, enter the IP prefix for the new network.  
e. In the** Router Address** field, enter the IP address for the router interface.  
f. Select any **Extensible Attributes** in the list if they are provided; otherwise, you can create new ones by clicking Add and choosing the** Attribute Name**, **Value** and the **Required** setting.

1. Enter the required name value in the** Interface Hostname** field. (Examples include "eth0" and "serial0.")
2. Select the **DNS** **Zone** under which the hostname operates.
3. Choose a device group from the **Device Group** drop-down list.
4. From the Device drop-down list, choose the switch or router on which the network will originate.
5. If the selected device is a router, the **VLAN Number** and** VLAN Name** fields will be disabled.

10. From the **Interface** list, choose the interface to which the network will be reassigned. The drop-down list contains all the interfaces from the chosen network device, and also shows the ports' respective states (up/down, up/up and so on).  
      If an interface shows **Routed** or **Switched**, it cannot be selected for provisioning as it is already being used as part of an active network.  
11. If the chosen device is a switch, enter the new **VLAN** **Number** on which the new network segment runs.  
12. If the chosen device is a switch, enter the new **VLAN Name** on which the new network segment runs.  
13. Click **Provision Network** to commit settings.



The system sends the configuration request to the NetMRI appliance and displays the task configuration sequence.
