---
title: "show hardware-type"
source: "/space/nios90/280266099"
pageId: "280266099"
---
Use the `show`` ``hardware-type`` `command to display the current hardware type, member host platform, and hypervisor details for your appliance.

For IB-FLEX only, you can set the hardware type on an appliance and configure it as an IB-FLEX. For more information, see *[set hardware-type](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-hardware-type)*. For information about IB-FLEX, see *[About IB-FLEX](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/about-ib-flex)*.

# Syntax

`show hardware-type`

This command has no arguments.

# Example

To display the hardware type of an appliance:

`Infoblox &gt; show hardware-type`

`Member hardware type: IB-V825`

`Member host platform = Openstack`

`Member hypervisor = KVM`

> **warning**
>
> **Note**
> 
> The `Member hypervisor` value differs based on the underlying hypervisor. For example, in Nutanix host platforms, the `Member hypervisor` value is displayed as `HYPERV` or `KVM`. This is because Nutanix AHV supports different types of hypervisors in Windows and Linux platforms.
