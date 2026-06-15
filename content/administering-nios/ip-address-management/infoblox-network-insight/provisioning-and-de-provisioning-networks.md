---
title: "Provisioning and De-Provisioning Networks"
source: "/space/nios90/280273160"
pageId: "280273160"
---
You may provision networks and remove or de-provision networks from individual devices. You can also provision networks when creating a network in IPAM (for more information, see [*Adding IPv4 and IPv6 Network Containers and Networks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1346798188)). Network provisioning and de-provisioning comprises the second type of port control tasks under Network Insight. Provisioning a network involves creating a new network and adding it to the list of networks in IPAM, and also involves changes to device configuration.

> **warning**
>
> ### Note
> 
> If a port control task requires administrative approval, and it is not approved before its scheduled execution, the task appears as unsuccessful in Task Manager.

Provisioning networks also allows for provisioning VLANs. If devices do not support VLANs, options for provisioning VLANs do not appear for those devices and their associated interfaces.

If a network is already provisioned for an interface, regardless of its status under Grid Manager, you cannot provision another network upon it.

Only available interfaces that support network provisioning are shown in Grid Manager for provisioning tasks. The horizontal toolbar also provides related functions:

**Provision** **Network** : Available for discovered devices and for managed devices, this icon opens the **Provision** **Network** feature, allowing you to provision an existing IPAM network onto the selected device by selecting a device interface or assigning a VLAN. Grid Manager creates a new Port Control task, and you can choose the interface on which the network is provisioned, along with VLAN configuration and other settings.

**De-provision** **Network** : Available for networks that are managed under IPAM, for de-provisioning on devices that are managed under IPAM on the **Data** **Management** **–>** **Devices** page. A dialog box appears summarizing the task you are instructing Grid Manager to perform. This action changes the configuration of the device.

To provision IPAM networks onto a device:

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device whose interfaces you want to provision.
3. Click the Name of the device. The Devices page displays the five tabs of information associated with the device.
4. Click the **Networks** tab.
5. The Networks page lists all discovered networks (highlighted in grey), unmanaged networks (highlighted in yellow), and any managed networks (highlighted in white, showing **Yes** in the **Managed** column) present on the selected device.
6. Open the vertical toolbar and click **Provision** **Network**. The Provision network wizard appears.
7. Click **Select** **Network** to choose the network the you want to provision. If only one managed network is available on the device, that network value is populated after clicking the button.  
   If more than one managed network is available under IPAM, the Network Selector dialog opens, listing all networks managed under IPAM.
8. Choose the network to provision onto the device and click **OK**.
9. Enter the **Router** **IP** **Address**. This required field may be pre-populated with the DHCP router IP address if the device already has a DHCP configuration. If not, enter the gateway router IP address for the current device.
10. If necessary, check the **DHCP** **Forwarding** checkbox. Check this checkbox to enable DHCP forwarding for the newly provisioned network. If a DHCP failover is already present, the IP addresses from that failover are used for DHCP forwarding information.
11. For choosing the Interface, you can choose one out of two options:
   
   1. **Interface** drop down list: If you are provisioning the network directly onto an interface, select it from this list. Only interfaces that are available for provisioning on the chosen device appears on this list; interfaces that are already active in a network do not appear;  
      –or–
   2. For a switch-router, select **Create** **VLAN**, and specify the **VLAN** **Name** and its new **VLAN** **ID**. Ensure that the VLAN ID is not one that is already provisioned on the device.  
        
      *Provisioning a VLAN on a Switch-Router*
12. Click **Next** to go to the second step in the Provision Network wizard, in which you define whether to provision the configuration now or to schedule it.
13. To immediately provision the new network on the chosen device, select **Now**.
   
   1. You can choose to have Grid Manager create the network at a later time. To do so, select Later. Choose a **Selected** time by entering or selecting a **Start Date** (click the calendar icon to choose a calendar date) and a **Start Time**, and choose a **Time Zone**.
14. Click **Save & Close** when finished.

## **De-Provisioning** **Networks**

> **warning**
>
> ### Note
> 
> De-provisioning a network changes the device configuration. As such, a separate task is created for the action under Task Manager. However, you cannot schedule the de-provisioning of a network–once you confirm the de-provisioning action in Grid Manager, the action takes place. Each managed and unmanaged device under Grid Manager provides a Permissions page (**DataManagement–>Devices–>** Select Device **–>** click **Edit–>Permissions** tab). By default, no admin group or Role is assigned to managed devices. Infoblox recommends using caution when assigning rights to users that may be able to access devices and change device configurations.

De-provisioning networks is a relatively straightforward task that can be performed for any selected network, whether it is a non-NIOS network (a network that cannot be configured in IPAM), an unmanaged network, or a managed network.

> **warning**
>
> ### Note
> 
> If the network is also managed under IPAM, de-provisioning the network from a device does not delete the network from IPAM.

If you are deleting a network from the main IPAM page, any devices that have endpoints provisioned on that network are also de-provisioned for that network.

> **warning**
>
> ### Note
> 
> A network may not be de-provisioned until after you set the interface for the network on the device(s), to **Down** in **Admin** **Status**.

1. From the **Data** **Management** tab, select the **Devices** tab.
2. Click the **Next** **Page** and **Last** **Page** icons to locate the device through which you want to locate the interfaces to convert.
3. Click the Name of the device. The Devices page displays the five tabs of information associated with the device.
4. Click the **Networks** tab for the chosen device. The Network page lists all discovered networks (highlighted in grey), unmanaged networks (highlighted in yellow), and managed networks (highlighted in white) present on the selected device.
5. Click the **Next** **Page** and **Last** **Page** icons to locate the network that you wish to de-provision.
6. Click the Action icon
   
   *[image: media]*
   
   next to the network you want (this automatically selects it) and select **De-Provision** **Network**. The dialog box appears, listing the device name, the device's IP address, the interface to which the network is currently bound, and the network's endpoint IP address on the current device.
   
   *De-Provisioning* *a* *Network* *from* *a* Device
   
   *[image: media]*
7. Click **Yes** to confirm the de-provisioning action.

> **warning**
>
> ### Note
> 
> Ensure that the de-provisioning of the network has administrative approval.

You can also select multiple network entries from the list on the same device and de-provision all of them in a single step. Exercise caution when performing such actions.

**De-Provisioning** **Networks** **by** **Deleting** **Networks** **in** **IPAM**

> **warning**
>
> ### Note
> 
> Deleting a network under IPAM creates a new Object Change task in Task Manager. You can check the **Administration–>Workflow–>TaskManager** page to view its status.

You can simply delete a managed or unmanaged network in IPAM to de-provision it. Doing so opens a Delete Confirmation dialog. IPAM also automatically prompts you to verify that you are deleting the network from all devices that have interfaces connecting to the network, subject to verification and permissions.

By default, when you delete the network, all devices that connect to the network, *that* *are* *also* *managed* *by* *IPAM*, are part of the new de-provisioning port control task created by Grid Manager. If you do not want the network  
de-provisioned from all devices, clear the **De-provision** **network** **from** **all** **interfaces** checkbox or simply cancel out from the Delete Confirmation dialog.

# Troubleshooting Port Control Tasks

Issues can occur when attempting to define port configurations on devices. When you define port configurations through Network Insight, you are defining a *port* *control* *task* that can be viewed, investigated, and run again when necessary. You do so by using the Task Manager (**Administration** **–>** **Workflow** **–>** **Task** **Manager**) and looking for tasks that show a **Type** of **Port** **Control**. Each Port Control task provides an Execution Log and the ability to re-run a task that has failed for any reason.

The Task Manager page provides an Action icon  column with a series of menu options for features related to Grid Manager tasks to manage task execution, scheduling and approval. Menu choices change based upon the context and the current state of tasks in the table; features available in the Action menu include the following:

*Task* *Manager* *Action* *menu*

- **Approve**: Enables admins to approve a pending job.
- **Reject**: Enables admins to reject a pending job, immediately cancelling it.
- **Execution** **Log**: Opens a completed task's execution log window. the Execution Log lists the complete communications sequence sent to a device to perform a port control task.
- **Execute** **Now**: Force a selected pending task to execute immediately.
- **Re-Execute**: Allows you to re-run the selected task. Combined with the Execution Log, this process can aid in troubleshooting a failed port control task.
- **Reschedule**: Opens the Reschedule window for the selected task. To immediately execute this task, click **Now**. Or, in the *Reschedule* panel, click **Later**, and then specify a date, time, and time zone. You can reschedule the task if you have the applicable permissions. Click **Save** to commit the changes.
- **Delete**: Deletes the pending task.
- **View**: Opens the Task Viewer to the currently selected task. For related information, see [*Using the Task Viewer to View Job Logs and Approve Jobs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408536).

The Execution Log allows you to see task behavior when it executes. You can check the configuration directly on the device and re-run the job if it has failed, by selecting **Re-execute** from the Action menu on the Task Manager page.
