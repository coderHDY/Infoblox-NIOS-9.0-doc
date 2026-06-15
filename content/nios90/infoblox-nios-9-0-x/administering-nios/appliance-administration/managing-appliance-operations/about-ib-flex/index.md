---
title: "About IB-FLEX"
source: "/space/nios90/280667152"
pageId: "280667152"
---
IB-FLEX is a virtual platform that is scalable based on the resource that you allocate to a virtual machine instance deployed on a platform or an instance configured as an IB-FLEX appliance. NIOS automatically detects the capacity of the virtual machine and scales it to the appropriate platform after you provision the IB-FLEX member.

An IB-FLEX appliance can be configured to function as a Grid Master or a member. According to the Grid-wide licenses that are offered for an IB-FLEX appliance designated as a Grid Master, following flavors are available:

- IB-FLEX: Install the ‘Flex Grid Activation’ license on the IB-FLEX Grid Master to enable the combination of features bundled with this license on all members of that Grid.
- IB-FLEX for managed services: Install the ‘Flex Grid Activation for Managed Services’ license on the IB-FLEX Grid Master to enable the combination of features bundled with this license on all members of that Grid. The Flex Grid Activation for Managed Services license is bundled with all existing Infoblox licenses that can be implemented as a NIOS Grid-wide license.

For more information about the Flex Grid Activation and Flex Grid Activation for Managed Services licenses, see the [*Managing Grid-Wide Licenses*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0) section.

Consider the following points when setting up an IB-FLEX appliance:

- To join an IB-FLEX appliance as a member in a Grid that has a non IB-FLEX appliance as the Grid Master, install a Grid license on the Grid Master to allow members to join the Grid. Installing a Flex Grid Activation license will have no effect on the non IB-FLEX Grid Master.
- To join an IB-FLEX appliance as a member to a Grid that has an IB-FLEX appliance as the Grid Master, install a Flex Grid Activation license on the Grid Master.
- An IB-FLEX appliance designated as a member does not require any license, either Grid or vNIOS, while joining a Grid. When you register an IB-FLEX member, it checks for Grid (enterprise) license required to join the Grid. The Flex Grid Activation license is required to get access to the **Grid-Wide** tab required for managing the IB-FLEX member.
- To use an IB-FLEX appliance as a Grid Master, install the Flex Grid Activation or the Flex Grid Activation for Managed Services license on it.
- To effectively use an IB-FLEX Grid Master Candidate, ensure that the Flex Grid Activation license, which is a Grid-wide license, is installed on the IB-FLEX Grid Master.
- IB-FLEX members can join a Grid through the MGMT interface when DNS Infrastructure Protection is enabled.
- To enable reporting for a Grid member that is running DNS Infrastructure Protection, you must configure the MGMT interface.  
  A non IB-FLEX appliance designated as a member requires either a Grid and/or vNIOS/NIOS licenses installed to join the Grid. Similarly, for a reporting appliance to join the Grid, you must install a Grid and/or vNIOS/NIOS licenses.
- You cannot assign pool licenses to an IB-FLEX appliance.
- IB-FLEX supports HA for appliances that are running DNS Infrastructure Protection.
- Infoblox supports pre provisioning of IB-FLEX members that use the **Flex** **Grid** **Activation** Grid-wide license. It also supports pre provisioning for DNS Infrastructure Protection on the supported platforms. You must add the new IB-FLEX model to the list of supported pre provisioning hardware types, so that you can select it during member pre provisioning.

> **warning**
>
> **Important**
> 
> To set up a supported virtual appliance as an IB-FLEX, you must first define the hardware type of the virtual appliance as IB-FLEX before you configure it. Depending on the platform or environment in which you are installing IB-FLEX, you can define the **hardware-type** parameter to **IB-FLEX** during the cloud-init process, or you can manually set the hardware type using the `set hardware-type` CLI command.  For more information, see [*set hardware-type*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-hardware-type).
