---
title: "Scheduling Creation of new IPv4/IPv6 Networks and Associated Device Provisioning"
source: "/space/nios90/1455030658"
pageId: "1455030658"
---
Defining new IP networks in Grid Manager supports scheduled Network Provisioning tasks on discovered and managed infrastructure devices as part of their object definition:

- Provisioning IPv4 networks
- Provisioning IPv6 networks

These networks are managed on the IPAM and DHCP pages (unless the network is excluded from DHCP), with the difference that Network Insight provisions the network directly on the specified router or switch-router. You may define new networks under IPAM and under DHCP as one scheduled task, and may provision those networks on devices that are discovered and managed under Network Insight, as another scheduled task.  
Both tasks may be separately scheduled. They can take place immediately: the network is created first, then the network is provisioned on the device, along with the necessary device configuration, which Grid Manager also handles using the required CLI credentials; or either or both tasks may be scheduled for a later time.  
The scheduled IPv4 or IPv6 network must be created under IPAM or DHCP in Grid Manager before scheduled device configuration or provisioning of networks on those devices can take place.  
When you define a new network under IPAM or DHCP, you can click **Schedule** **for** **Later** in any Wizard page to skip further configuration in the Wizard and commit the network settings to Grid Manager. If you do not want to provision the network, clicking **Schedule** **for** **Later** will display a shorter scheduling page:

*Create* *Network* *Schedule* *page* *(After* *clicking* *Schedule* *for* *Later)*

*[image: media]*

In cases of this type, you schedule or execute only a single task: creating the new network under DHCP/IPAM. No network provisioning task takes place.  
When you provision the network without clicking **Schedule** **for** **Later**, the wizard provides a final Scheduling page with an expanded set of two task schedules as shown in the below figure:

*Scheduling* *Add* *Network* *and* *Network* *Provisioning* *Tasks*

*[image: media]*

1. To immediately create the new network, you can select **Now**.
2. You can choose to have Grid Manager create the network at a later time. To do so, select **Later**. Choose a **Selected time** by entering or selecting a **Start Date** (click the calendar icon to choose a calendar date) and a **Start Time** (click the clock icon to choose a specific time in fifteen minute increments), and choose a **Time Zone**.
3. The Network Provisioning task can be synchronized to take place at the same time as the creation of the new network under IPAM/DHCP; if so, keep the **At same time as above** option.
4. You can also provision the network onto the device at a differently scheduled time. To do so, select **Later** (under **Network Provisioning**). Choose a **Selected time** by entering or selecting a **Start Date** (click the calendar icon to choose a calendar date) and a **Start Time** (click the clock icon to choose a specific time in fifteen minute increments), and choose a **Time Zone**.

> **warning**
>
> ### Note
> 
> Network provisioning tasks (or any operation that queries for or changes device configurations through Grid Manager, including Discovery) are subject to a feature called Blackout periods, which are defined elsewhere in Grid Manager. Blackouts are a scheduled feature that instructs Grid Manager not to perform Discovery operations and Port Control/provisioning operations on the managed network at specified times, days and dates. See the section [*Defining Blackout Periods*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/defining-blackout-periods) for details.
