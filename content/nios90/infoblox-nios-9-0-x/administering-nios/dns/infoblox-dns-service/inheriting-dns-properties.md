---
title: "Inheriting DNS Properties"
source: "/space/nios90/280273018"
pageId: "280273018"
---
You can configure DNS properties at the Grid, member, zone, and resource records level. The NIOS appliance applies the properties hierarchically, with the Grid at the top of the hierarchy. Grid settings apply to all members in the Grid, unless you override them at the member, zone, or resource record level. When you set DNS properties for a particular member, these properties override the Grid properties and apply to all zones served by that member. When you set properties for a specific zone, they override the member properties and apply to the resource records in the zone. You can also override the zone properties and set properties for specific resource records.  
When you configure DNS properties that contain inherited values, the appliance displays the information based on the inheritance sources. There may be times when an object can inherit properties from different sources with different settings. The following table summarizes what the appliance can display:

| **When**** ****you**** ****see...** | **it**** ****means...** |
| --- | --- |
| **Inherited** **From** ***&lt;object&gt;*** | the DNS property has a definite value from an inheritance source. |
| **Inherited** **From** **Upper** **Level** | the appliance cannot yet determine the inherited value or inheritance source for the DNS property. |
| **Inherited** **From** **Multiple** | the DNS property has the same value that it inherits from multiple sources. |
| **Settings** **Inherited** **from** **Multiple** **Ancestors,** **View** **Multiple** **Inheritance** **Scenarios** | the DNS property has different values that it inherits from multiple sources, and you can view the values and their corresponding sources by clicking the **View** **Multiple** **Inheritance** **Scenarios** link. |

Based on the information provided, you can then decide whether to override or keep the inherited values. You must have read/write permissions to the DNS resources to override inherited values. You can only view inherited values and paths if you have at least read-only permissions.  
In the example in the below figure, the DNS zone is served by members with different query settings.   
*DNS* *Zone* *with* *Different* *Inherited* *Settings*   
  
The Multiple Inheritance Viewer indicates that the two servers have different query ACLs, as shown in Multiple Inheritance Viewer figure below. You can then view the Query properties of each member and edit them, or override the setting and specify values that apply to the zone only.   
*Multiple* *Inheritance* *Viewer*   
    
  
**Overriding** **DNS** **Properties**  
DNS properties configured at the Grid level apply to the entire Grid. You can choose to keep the inherited properties or override them when you configure the properties for a member, zone, or resource record.  
To override an inherited value:

1. In a wizard or editor, click **Override** next to a property to enable the configuration. The **Override** button changes to **Inherit**.
2. Enter a new value to override the inherited value.
