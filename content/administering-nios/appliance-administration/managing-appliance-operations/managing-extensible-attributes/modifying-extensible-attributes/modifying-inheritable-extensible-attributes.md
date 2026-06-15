---
title: "Modifying Inheritable Extensible Attributes"
source: "/space/nios90/1340737208"
pageId: "1340737208"
---
When values are inherited by a descendant, the inheritance state of the inherited extensible attribute is displayed as **Inherited**. You can select **Overridden** and specify a new value or select **Inherited** to retain the same value as the parent. If you select **Not** **Inherited**, the extensible attribute and its value will not be inherited. The inherited value will have a strike-through and you cannot edit the value when the state is set to **Not** **Inherited**.  
In addition to the attribute values, the **Value** column of an inheritable extensible attribute also displays the name of the source and the object type of the extensible attribute. For example, a *Network* *Container* has a descendant, *Network,* which inherits an extensible attribute value from *Network* *Container* and *Network* has a descendant, *Fixed* *Address* that inherits the same extensible attribute value. In this case, *Fixed* *Address* shows *Network* *Container* as the source.

The following table displays various inheritance states and corresponding changes to source and object types that are displayed in the **Value** column of an extensible attribute.

| **Inheritance** **State** | **Source** **and** **Object** **Type** **in** **the** **Value** **Column** |
| --- | --- |
| If an extensible attribute is a native attribute (an object which is at the top of the inheritance chain, or does not have ancestors), | **Source** is not displayed in the **Value** column. This column will not display the source details, if none of the selected objects support inheritance. |
| If the state of an extensible attribute is set to **Inherited,** | then the **Source** and object is displayed. You cannot change the value of the extensible attribute. |
| If the state of an extensible attribute is set to **Overridden** or **Not** **Inherited,** | then the **Source** will have a strike-through. You can change the state of such extensible attributes. You cannot change the value of the extensible attribute when the inheritance state is set to **Not** **Inherited**. |

To modify the value and inheritance state of an inheritable extensible attribute:

1. **For** **IPv4** **and** **IPv6** **Network**: From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** → *network* -> *addr_range* checkbox, and then click the Edit icon.  
   **For** **IPv4** **Range,** **IPv6** **Range,** **Fixed** **Address,** **Reservation,** **and** **Host:** From the **Data** **Management** tab > select the **DHCP **tab -> **Networks **tab -> **Networks **tab -> *network* > click *addr_range,* click the Edit icon.  
   **For DNS View**: From the **Data Management** tab, select the **DNS** tab - > **Zones** tab - > select the checkbox of the **DNS View **- > click the Edit icon.  
   **For VLANs**: From the **Data Management** tab, select the **VLAN** tab - > select the checkbox of the **VLAN Range / VLAN**  - > click the Edit icon.
2. In the editor, click the **Extensible** **Attributes** tab, select the checkbox of the respective attribute.
3. At the parent level, click on the value you want to change and enter the new value.  
   At the descendant level, click on the value you want to change and enter the new value. Note that you can change the value only when the inheritance state is set to **Overridden**.
4. Select a state from the drop-down list displayed in the **Inheritance** **State** column. Note that you can only change the inheritance state of a descendant. You must select **Overridden** from the drop-down list to enter a new value. For more information, see Inheritance States table above.
5. **Select** **the** **inheritable** **extensible** **attributes** **for** **which** **you** **want** **to** **modify** **descendant** **actions:** Select this checkbox if you would like to apply the actions of the *Descendant* *Actions* dialog box for existing extensible attributes. Before you select this checkbox, select the extensible attributes which will be affected by the actions of the *Descendant* *Actions* dialog box. For more information about the *Descendant* *Actions* dialog box, see Managing Inheritable Extensible Attributes at the Parent and Descendant Level above.
6. Save the configuration.
