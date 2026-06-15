---
title: "Creating Port Reservations for IPAM Objects"
source: "/space/nios90/280763890"
pageId: "280763890"
---
A port reservation instructs Network Insight to reserve ports on discovered and managed devices, for exclusive use by Grid members and by IPAM objects such as hosts or fixed addresses. Network Insight ensures that doing so does not interfere with existing device and port configurations and active networks, because port reservations automatically apply only to ports that are discovered to be available on network devices. Network Insight prevents a user from reserving the same port for more than one object. Should a port reservation somehow conflict with another more recent port reservation, Network Insight automatically reports a conflict and enables you to respond to the issue (for more information on this topic, see [*Resolving Port Reservation Conflicts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432817922)).

When you create new IPAM objects, you can create the new objects and define port reservation settings at that time, or create the new object without any port-related settings and edit them later, after the object is established in Grid Manager. The *Add IPv4 Reservation Wizard*, Add Fixed Address Wizard, Add Host Wizard and Add Grid Member Wizards all support the full set of port configuration settings, as shown in the below figure.  
*Defining* *Port* *Reservations* *during* *Object* *Creation*   
  
Making a port reservation does not guarantee that the port is in fact available on the requested device. All interfaces appearing in the Interface list are ports that are otherwise known to Network Insight as Operationally Down during its last discovery task, and that are not already reserved by a port reservation.

1. Begin by checking the Reserve Port checkbox.
   
   Note that optionally, you can completely skip port reservation and port configuration by clicking **Next**.
2. Click the Device Name button to choose the device for which the port reservation is associated. You should know the identity of the device to which the Infoblox appliance is connected before taking this step.
3. After choosing the device, choose the Interface with which the reservation is bound. The drop-down list shows only interfaces that are most recently found to be available by Network Insight during the last discovery cycle. This list does not include any ports that are Administratively Up and Operationally Up and are otherwise already assigned to other networks or objects.
   
   - The Wizard page also shows a list of any VLANs that are currently configured in the chosen device. This Wizard page does not allow the definition of new VLANs for port configuration–only the assignment of an existing VLAN in the device for port configuration.
4. Select the Configure Port checkbox to define specific port control settings for the port reservation.
   
   Note that if you do not take this action when you create the object, you cannot perform the configuration later while editing the object.
5. If the chosen device supports them, choose the Voice VLAN and/or the Data VLAN settings you may need for the port assignment. You do not create new VLAN values in this step; you can select from VLANs that are provisioned on the currently chosen device. All VLANs configured on the device and discovered by Network Insight during its most recent discovery polling cycle appear in the drop-down lists.
6. Set the Admin Status to Up if you need to activate the port in the current task. Though the port reservation is associated only with the current object, any port configuration creates a new Port Control task under Task Manager.
7. Enter a description for the port assignment. Infoblox recommends doing so to help other technicians to recognize the port assignment event.
8. When finished, click **Save & Close** or select other tabs to change settings for the object.  
   Note once a switch port or other device port is reserved, Network Insight prevents further port reservations from using the same port for another reservation.
   
   See the following sections for examples on how to create IPAM objects with port reservations:

- [*Adding*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Host*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)[*Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666779)
- [*Configuring IPv4 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761742)
- [*Configuring IPv4 Fixed Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271095)
- [*Configuring IPv4 Reservations*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404203)
- [*Configuring IPv6 Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280404032)
- [*Configuring an IPv6-only Grid*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274984)
- [*Adding Grid Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)
- See* *Defining Port Reservations for an Infoblox Grid Member below

**Editing** **Port** **Reservation** **Settings** **for** **IPAM** **Objects**   
As previously noted, you can create IPAM objects such as hosts or fixed addresses without device information and port reservation settings, and edit them later after the object is established in the Grid Manager. You can change port reservations in any object to new settings. Limitations exist when editing existing objects.

The **Port** **Reservation** editing page settings uniformly apply to Grid members, IPv4 reservations, hosts, and fixed address objects. Note that you cannot change port configurations when editing objects, as shown in the below figure.   
  
*Editing* *an* *Existing* *Object's* *Port* *Reservation*   
  
Unlike creating an object, editing an existing object's port reservation does not permit configuring the selected port. (You can edit the port from the device's **Interfaces** page, including inline editing.) Physical interfaces with an Operational Status of Down appear in the **Interface** drop-down list. Ports that are already active, that are reserved through a port reservation, or that are administratively Up/Operationally Up do not appear in the **Interface** drop-down list.

For object editing, you can select interfaces but you cannot edit their settings, such as setting the **Admin** **Status** to **Up** or choosing the **Data** **VLAN** or **Voice** **VLAN**.

Port reservation editable settings are as follows:

- **Reserve** **Port**–Enables the port reservation task for the new object;
- **Device** **Name**–Shows the name of the chosen devices, which must be selected by clicking Select Device and using the Device Selector window (for information, see [*Using the Device Selector*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200));
- **Interface**–Drop-down menu listing for all interfaces on the selected device.  
  **The** **Following** **VLANs** **Are** **Configured**–A read-only panel that shows the VLANs, if any, that are configured on the currently selected **Interface** setting.

Port configuration and VLAN settings cannot be performed when editing objects–you are limited to selecting a different port (from the same device or from a different device) to be bound to the current object.   
 **Defining** **Port** **Reservations** **for** **an** **Infoblox** **Grid** **Member**

> **warning**
>
> **Note**
> 
> Editing Grid members does not allow for port configuration when you create or change a port reservation. For Grid member editing, you can select interfaces but you cannot edit them, such as setting the **Admin** **Status** to **Up** or choosing the **Data** **VLAN** or **Voice** **VLAN**. This section applies only to creating and defining port reservations and configurations for new Grid members. For the complete Grid member creation procedure, see [*Adding Grid Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129).

You can configure port reservations for a Grid member, including HA members, in the Add Grid Member wizard. All interfaces on a member (LAN1, LAN2, HA and MGMT) may have independently defined port reservations. For Grid members, port reservations are not subject to scheduling and workflow approval, and Grid Manager executes them immediately.

# Defining Port Reservations for an HA Pair

The process of defining port reservations and port configurations for a Grid member allows these settings to be defined during the creation of the new member. (You can also edit them afterwards.) Before performing this procedure, consult the sections [*Planning for an HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644), [*About HA Failover*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644) and [*Adding an HA Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129) for more details.

1. Go to **Infoblox** **Grid –>Grid Manager** and choose **Add –> Grid Member** from the vertical toolbar. Define your new HA Pair's settings and click **Next**.
2. In the second *Add Grid Member Wizard* step (Step 2 of 5), select the **High Availability Pair** option:
   
   1. Enter the required **Virtual Router ID** value.
   2. (Only for NIOS 9.0.4 or later) Select **Public Cloud** If you are deploying the vNIOS instance on a public cloud platform, and then choose the platform from the drop-down list. This option appears after you enable **High** **Availability** **Pair**.  
      For additional steps that must be performed in the cloud platform portal, see the [*Infoblox vNIOS installation guide*](https://docs.infoblox.com/space/Appliances/35364966/Virtual+Appliances) of the corresponding cloud platform.
3. As with a normal HA pair configuration, enter the IP information about the following interfaces: VIP, Node 1 HA and LAN1 ports, Node 2 HA and LAN1 ports. The VIP address and the IP addresses for all the ports must be in the same subnet. For a vNIOS instance deployed on Google Cloud, the LAN1 and HA ports on a node (Node1 or Node2) must be assigned to subnets on different VPCs. Follow the guidelines provided in the section [*Adding an HA Member*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/686097129)*.*
4. Ensure all settings are correct and click **Next**.
5. The following step in the Add Grid Member Wizard presents a workflow that must be performed three times for each appliance–once for each of the three interfaces (LAN1, HA and MGMT) participating in the HA pair. (LAN2 may be configured by editing the Grid member afterwards.)
   
   *Beginning the HA Pair Configuration's Port Reservations*
6. Begin by clicking the checkbox for the **Node** 1 **-> LAN1** appliance port. (You do not perform port reservation for the VIP port).
   
   1. Select the **Reserve Port** checkbox. The **Node1-> LAN1** port listing changes to read **Pending**.
   2. Click **Select Device** to choose the device (switch or switch-router) that is Node 1 of the HA Pair. For information, see [*Using the Device Selector*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200).
   3. After selecting the device, click **OK**.
   4. Choose the device port for Node 1's LAN1 port by choosing it from the **Interface** menu.   
      The panel **The Following VLANs are configured** refreshes to show any VLANs that are currently provisioned on the selected port.
   5. (*This step is optional.*) Select the **Configure Port** checkbox.
   6. (This step is optional.) If the **Data VLAN** setting is enabled, select the **VLAN** from the **Data VLAN** menu.
   7. (This step is optional.) Choose an **Admin Status** of **Up**.
   8. (This step is optional.) Enter a **Description**.
   9. For the **Node 1 –> HA** port, follow steps 6a through 6h for that appliance port. Ensure you select the same switch and **Data VLAN** settings.
   10. For the **Node 1 –> MGMT** port, follow steps 6a through 6h for that appliance port. Ensure you select the same switch and **Data VLAN** settings.
7. For the second appliance Node 2, follow steps 6a through 6j above.
8. Click **Next** when finished with the Reserve Port and optional Configure Port settings for all interfaces. The result appears similar to the example shown in the below figure.  
     
   *Port* *Reservations* *for* *an* *HA* *Pair*
9. In the final step of the Add Grid Member Wizard, *if you have defined *port configuration, a final wizard step shows that the port configuration (which is a Port Control task) executes Now, without allowing a scheduling of the task. *Port reservation for the HA Pair is not scheduled* and also takes effect automatically as a part of the new Grid member configuration. (Grid Manager creates the Grid member immediately after you click **Save & Close**.)
10. After you click **Save & Close** to create the new HA pair Grid member, thus closing the Add Grid Member wizard, opening the editor for the HA member and clicking the **Port Reservations** tab displays the LAN2 port along with the previous port settings:  
     
   *Completing* *the* *HA* *Pair* *Port* *Reservations* *with* *the* *LAN2* *Ports*
11. Select the LAN2 port for each node and follow steps 6a through 6h above. If VLANs are provisioned on the selected port, you can also select them.
12. Click **Save & Close**.

## Editing Port Reservation Settings for an Infoblox Grid Member

Editing an existing Grid member's port reservation does not permit configuring the currently selected port. You can select ports from any device to change the port reservation. For any selected device, ports with an **Operational Status** of **Down** appear in the **Interface** list.

For editing Grid member settings, you can select interfaces but you cannot configure them; setting the **Admin** **Status** to **Up** or choosing the **Data** **VLAN** and changing the **Description** are not allowed when editing a Grid member.

*Editing* *a* *Grid* *Member's* *Port* *Reservation* *Settings*   
  
  
You can edit any appliance's port reservation settings:

1. Go to **Infoblox Grid –> Grid Manager** and select the checkbox for the Grid member you wish to edit. Click **Edit** from the vertical toolbar.
2. Click the **Port Reservation** tab.
3. Select the **Reserve Port** checkbox. The **Node1->LAN1** port listing changes to read **Pending**.
4. Click **Select Device** to choose the device. (For information, see [*Using the Device Selector*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280666200).)
5. After selecting the device, click **OK**.
6. Choose the device interface from the **Interface** menu. Click **Save & Close** when finished.

On HA pairs the process is quite similar except that you may edit up to the full complement of interfaces used for each appliance in the HA pair. The *Grid Member Properties Editor* supports all ports for each appliance in the HA Pair.

> **warning**
>
> **Note**
> 
> When editing Grid members and HA Grid members, Grid Manager does not allow changes to VLAN settings, Admin Status or port description in the editor. You can change these values in the **Interfaces** table by double-clicking the table row for the interface you want to edit.

### Defining Device Information

During the process of configuring a port reservation for an IPAM object, you can define device information settings as descriptive information for IPAM objects, as seen in the below figure.  
*Device* *Information* *Settings* *for* *IPAM* *Objects* *in* *the* *Wizard*  
  
**Note:** If you define Device Information and Device Vendor settings for a port reservation, which are optional, and choose to discover the object to which the port reservation is associated, you may see a conflict if discovery of the object finds that the device for the port reservation is a different type or different vendor. For example, if the specified information states that the device is a switch, and the discovered device is a router, Network Insight reports a conflict. Another example: you declare the vendor to be Aruba, and the discovered value is Cisco. For information on resolving such conflicts, see [*Resolving Port Reservation Conflicts*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432817922).

The **Device** **Type** menu provides the following settings:

- **ESX Server**–identifies the object as a VMware ESX host.
- **MSFT Server**–identifies the object as a Microsoft Hyper-V host.
- **Net MRI**–NetMRI appliance from Infoblox;
- **NIOS**–Infoblox appliance;
- **Router**–Provides routed connections, including VLANs;
- **Switch**–provides L2 switched connections only;
- **Switch-Router**–Provides L2/L3 switched connectivity, including VLANs;
- **VNIOS**–Infoblox virtual appliance.

The **Device** **Vendor** menu provides the following device vendor choices:

- Cisco
- Juniper
- Infoblox
- Aruba
- Dell
- HP

IPAM object wizards allow definition of the settings when you create the object, or you can define the settings later.
