---
title: "DHCP Inheritance"
source: "/space/nios90/280404426"
pageId: "280404426"
---
When you configure DHCP properties for the Grid, members, networks, shared networks, DHCP ranges, fixed addresses, reservations, host addresses, and roaming hosts, the appliance applies the configured properties hierarchically. In addition, IPv4 DHCP objects inherit IPv4 specific properties and IPv6 objects inherit IPv6 specific properties. For example, when you set DHCP IPv4 properties for the Grid, all DHCP IPv4 objects inherit the properties from the Grid unless you override them at a specific level, and the same applies for IPv6 properties and objects.  
Properties set at the member level override Grid-level settings and apply to the objects that the member serves. Properties set at the network level override member-level settings and apply to the objects within the network. Properties set for a DHCP range override those set at higher levels. You can also set specific properties that apply only to fixed addresses, reservations, host addresses, and roaming hosts.  
The figure Inheritance Hierarchy in a Grid below illustrates some inheritance scenarios that can occur in a Grid. As shown in the figure, the authoritative server configuration set for the Grid is inherited by the members. Since Member 1 has no overrides and Member 2 overrides the authoritative server configuration, they have different DHCP configurations. Grid Manager applies DHCP properties hierarchically from the Grid down. Therefore, a DHCP object below the member level can inherit DHCP properties with multiple values from multiple sources. In Inheritance Hierarchy in a Grid, network 10.1.1.0/24 inherits multiple values (True and False) from the members for the authoritative server configuration. The shared network, which includes 10.1.1.0/24, inherits DHCP properties from both members. For DHCP range 10.1.1.11 - 10.1.1.50, since Member 1 is the assigned member, it inherits properties from Member 1 and the network. The fixed address 10.1.1.2 overrides the BOOTP settings and inherits the authoritative server configuration from both members and the network.

*Inheritance* *Hierarchy* *in* *a* *Grid*

*[drawio]*

When a DHCP property contains inherited values from different sources, the appliance displays the corresponding information when you create or modify an object. Based on the information provided, you can then decide whether to override or keep the inherited values. You must have read/write permissions to the DHCP resources to override inherited values. You can only view inherited values and paths if you have read-only permissions.

# Overriding DHCP Properties

DHCP properties configured at the Grid level apply to the entire Grid. You can choose to keep the inherited properties or override them when you configure the properties for a member, network, shared network, DHCP range, fixed address, host address, or roaming host. For example, you can override the values of DHCP properties inherited from a member and enter unique values for a network that is configured for DHCP.  
To override an inherited value:

1. In a wizard or editor, click **Override** next to a property to enable the configuration. The **Override** button changes to **Inherit**.
2. Enter a new value to override the inherited value.

# Viewing Inherited Values

When you configure DHCP properties that contain inherited values, the appliance displays the information based on the inheritance sources. The following table summaries what the appliance can display:

| **When**** ****you**** ****see...** | **it**** ****means...** | **For**** ****details,**** ****see...** |
| --- | --- | --- |
| **Inherited** **From** ***&lt;object&gt;*** | the DHCP property has a definite value from an inheritance source. | Simple Inheritance below |
| **Inherited** **From** **Upper** **Level** | the appliance cannot determine the inherited value or inheritance source for the DHCP property. | Unknown Inheritance below |
| **Inherited** **From** **Multiple** | the DHCP property has the same value that it inherits from multiple sources. | Multiple Inheritance below |
| **Settings** **Inherited** **from** **Multiple** **Ancestors,** **View** **Multiple** **Inheritance** **Scenarios** | the DHCP property has multiple values that it inherits from multiple sources, and you can view the values and their corresponding sources by clicking the **View** **Multiple** **Inheritance** **Scenarios** link. | Multiple Inheritance below |

## Simple Inheritance

When a DHCP property has an inherited value from a specific source, the appliance displays the value. It also displays **Inherited** **From** ***&lt;object&gt;*** (where *&lt;object&gt;* can be the Grid, member, network, shared network, or DHCP range) to indicate the source from which the value is inherited.  
For example, when you set DHCP properties at the Grid level and do not override the properties at any level, the members, networks, shared networks, DHCP ranges, fixed addresses, reservations, host addresses, and roaming hosts inherit these properties from the Grid. The appliance displays the property value and **Inherited** **From** **Grid** **Infoblox** for each configured DHCP property, as shown in the figure Simple Inheritance below.  
  
*Simple* *Inheritance*

## Unknown Inheritance

In some cases, DHCP properties may not have definite inherited values and inheritance sources. The following are examples of unknown inheritance:

- The appliance cannot determine the inheritance sources of the DHCP properties in a template until you use the template to create an object.
- When a network or a DHCP range does not have an assigned member, it does not have a clear definition of an inheritance source because a network or a DHCP range inherits properties from a member.
- When individual networks in a shared network do not have member assignments, the shared network has unknown inheritance because the shared network inherits DHCP properties from a member and its networks.
- All roaming hosts have unknown inheritance because the DHCP properties can be inherited from different DHCP ranges within a network view.

In cases where the source of the inheritance is unknown, the appliance displays **Inherited** **From** **Upper** **Level** as the inheritance source. As shown in the figure Unknown Inheritance, network 10.1.1.0 has unknown lease time value because it does not have any assigned member.

*Unknown* *Inheritance*

## Multiple Inheritance

As illustrated in the figure Multiple Inherited Paths with the Same Inherited Value, a network can have multiple inherited values and inheritance sources for DHCP properties when it is served by multiple members. When an object inherits a DHCP property from different sources, the property value can be the same from all sources or it can be different. When the value is the same, the appliance displays the value in the property field. When there are multiple values inherited from multiple paths, the appliance displays the information to indicate so.  
In a Grid, when two members serve the same network, the network inherits DHCP properties from both associated members. If both members have the same configured DHCP property, the network inherits the same value from both members. For example, when DHCP network 10.1.1.0 has two associated members and both members have the lease time set for 20 hours, the appliance displays the lease time value and **Inherited** **From** **Multiple** to indicate the value is inherited from multiple sources, as shown in the following figure.

*Multiple* *Inherited* *Paths* *with* *the* *Same* *Inherited* *Value*   
    
In the same Grid with the two members serving the same network, the network inherits different values for the same properties if you override the Grid configuration on one member but not on the other. For example, you can configure different PXE lease times for the members and configure a member as an authoritative DHCP server for the domain and the other not. In this case, the appliance displays **Settings** **inherited** **from** **multiple** **ancestors** and provides a **View** **Multiple** **Inheritance** **Scenarios** link so you can view the inherited values and paths, as shown in Multiple Inheritance Sources with Multiple Values.

*Multiple* *Inheritance* *Sources* *with* *Multiple* *Values*   
  
    
  
For example, to view the multiple inherited values of the **Authoritative** field, click **View** **Multiple** **Inheritance** **Scenarios**, and the *Multiple* *Inheritance* *Viewer* displays the inherited values from the two members. Since member1.foo.net does not have a configured value for this field, the viewer displays **Not** **Set**, as shown in the figure Multiple Inheritance Viewer below*.* You can use this information to determine whether you want to keep the inherited values or configure new ones.

*Multiple* *Inheritance* *Viewer*   
    
Another scenario of multiple inherited levels is when you have multiple DHCP properties that can inherit the same or multiple values from different sources. For example, when you configure multiple DHCP custom options, each of the options can inherit the same or multiple values from multiple paths. You can override the inherited options and configure new ones at a specific level other than the Grid level. Though these options are grouped under *DHCP* *Custom* *Options*, the appliance treats each of them as a separate property. The appliance groups the inherited options at the top, as shown in DHCP Custom Options with Multiple Inheritance Sources*.* You can override these options but you cannot delete them. For multiple values inherited from multiple sources, you can view the values in the Multiple Inheritance Viewer by clicking **View** **Inheritance**, as shown in the figure Multiple Inheritance Viewers for Options*.** *

*DHCP* *Custom* *Options* *with* *Multiple* *Inheritance* *Sources*

*Multiple* *Inheritance* *Viewers* *for* *Options*   
    
When you configure email notification for the Grid or Grid member from the **Data** **Management** tab -&gt; **Grid** tab, the email address you enter there is inherited by the DHCP configuration for the Grid, members, networks, and DHCP ranges unless you override it at a specific level. The appliance uses this email address to send notification for a DHCP range when the DHCP usage crosses either the effective watermark threshold. For information, see *[Configuring Thresholds for DHCP Ranges](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-properties/configuring-thresholds-for-dhcp-ranges)*.   
A network container inherits DHCP options from its parent and grandparent network containers. A network container does not inherit DHCP options defined at the Grid or member level.  
Note the following about the DHCP option inheritance:

- For networks and shared networks, you can override an inherited DHCP option defined at the Grid or Member level.
- A shared network without a parent network container continues to inherit DHCP options from its parent Grid or member. The parent object is derived from the first network within the shared network.
- A network inherits DHCP option from its parent object. For example, if a network has a parent network container parent and parent shared network parent, if a DHCP option is overridden on the shared network, then this overridden value gets inherited. If the DHCP option is overridden on a network container, then this overridden value gets inherited. Otherwise, the network continues to inherit from its parent Grid or member.
