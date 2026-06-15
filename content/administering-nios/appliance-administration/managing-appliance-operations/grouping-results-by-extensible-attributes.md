---
title: "Grouping Results by Extensible Attributes"
source: "/space/nios90/1340737284"
pageId: "1340737284"
---
You can enable the appliance to group members and services with the same extensible attributes. Grid Manager displayed group data with the same value for the specified extensible attribute.  
To group results by extensible attributes:

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab or **Services** tab.  
   From the **Data** **Management** tab, select the **DHCP** or **DNS** tab -> **Members/Servers** tab.
2. Complete the following to group members with the same extensible attribute value:
   
   - **Group** **Results**: Select this checkbox to enable the appliance to group members by extensible attributes.
   - **Group** **By**: Select an extensible attribute by which you want to group members from the drop-down list.   
     Grid Manager displays data per group of members configured with the same extensible attribute value.  
     To add additional Group By filter, click the + icon, and then select a value from the drop-down list. You can apply up to 10 Group By filters. You can also delete a filter by clicking the - icon.

- **Do** **not** **inherit** **the** **value** **from** **the** **parent** **and** **change** **the** **inheritance** **state** **to** **Not** **Inherited:** Select this if the extensible attributes do not exist on the descendants and you do not want them to inherit the attributes from the parent. The inheritance state is set to **Not** **inherited**.
- **Inherit** ** the ** **value ** **from ** **the ** **parent ** **and ** **change ** **the ** **inheritance ** **state ** **to ** **Inherited:** Select this if you want all descendants to inherit extensible attributes from the parent, and the inheritance state for all descendants will be set to **Inherited**.
