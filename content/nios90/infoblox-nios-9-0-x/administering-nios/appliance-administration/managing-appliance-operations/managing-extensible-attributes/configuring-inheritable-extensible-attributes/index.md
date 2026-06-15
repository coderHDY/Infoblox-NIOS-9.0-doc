---
title: "Configuring Inheritable Extensible Attributes"
source: "/space/nios90/1340541030"
pageId: "1340541030"
---
An extensible attribute can be inherited by descendants when it is at the top or in the middle of the inheritance chain.  
When you add a new extensible attribute to a parent object, the same extensible attribute may or may not already exist at the descendant levels. If the extensible attribute exists on a descendant, you can choose to have the descendant inherit the value from the parent, or retain the original value from the descendant. When the extensible attribute does not exist on the descendant, you can choose to have the descendant either inherit the extensible attribute and its value from the parent or not inherit anything from the parent.  
When you add a range, host, fixed address or IPv4 reservation to a parent object which has inheritable extensible attributes, the newly added object can inherit extensible attributes from the parent object. For example, if you create an IPv4 network with inheritable extensible attributes, and then add a host, the values you specified for the extensible attributes while creating the network can be inherited by the host.  
To assist you in identifying whether an extensible attribute value is inherited or overridden, the appliance displays the inheritance state of an attribute in the **Inheritance** **State** column of an extensible attribute. This column is displayed only for objects that support inheritance. For more information about how to view inheritance states, see Modifying Inheritable Extensible Attributes below.  
Following are the supported inheritance states:

*Inheritance* *States*

| **Inheritance** | **State** **Description** |
| --- | --- |
| Inherited | The extensible attribute inherits its value from the parent. You cannot edit the value of an attribute when the inheritance state is set to **Inherited**. You can change the state to **Overridden** and then change the value of the attribute or change the state to **Not** **Inherited** to remove the inherited value. |
| Overridden | The extensible attribute overrides the value inherited from the parent. You can change the state to **Inherited** and restore the original inherited value or change the state to **Not** **Inherited** and remove the inherited value. |
| Not Inherited | The extensible attribute can inherit its value from the parent, but the attribute does not exist on the descendant. You can change the state to **Inherited** and restore the original inherited value or change the state to **Overridden** and change the value of the attribute.   Note that when the state of an inheritable extensible attribute is **Not** **Inherited**, the corresponding attribute will not be added as a new extensible attribute for objects that are currently not inheriting this extensible attribute. |
| No Parent | The inheritance state is set to **No** **Parent** when an object has a parent, but the parent does not have an extensible attribute or the parent's extensible attribute is set to **Not** **Inherited**. |
| Disabled | Extensible attribute inheritance is not enabled for the attribute. |
| No Change | The extensible attributes of the selected objects do not have the same inheritance state for all objects. This state allows you to retain the current state on the selected objects. Note that this state is only seen in the *Multi-object* *Extensible* *Attributes* editor. |

When you add an inheritable extensible attribute to an object, if there are descendants of this object the *Descendant* *Actions* dialog box is displayed which will provide options for the descendants. Following is a summary of these options:

- Retain the original value of the attribute for all descendants.
- Inherit the extensible attribute and its value from the parent object.
- Inherit the extensible attribute and its value when it does not exist on descendants.
- If the extensible attribute does not exist on the descendant, do not add it.
- If you are deleting an inherited extensible attribute from a parent object you can retain or remove the extensible attribute from the object's descendants.

To configure default descendant actions for inheritable extensible attributes:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, expand the Toolbar and click **Grid** **Properties** -&gt; **Edit**.
2. In the **Extensible Attribute** **Inheritance** tab, complete the following:  
   **When adding** **an extensible** **attribute that already** **exists on a descendant:**
   
   - **Keep** **the** **descendant's** **existing** **value** **and** **change** **the** **inheritance** **state** **to** **Override:** Select this if you want to retain the existing extensible attribute values for all direct descendants, irrespective of the values you define at the parent level. The inheritance state for all direct descendants will be set to **Overridden**. Note that this is applicable only when you add a new extensible attribute to the parent object that already exists on the descendant. If you modify the value of an existing extensible attribute that is already inherited by the descendant, and select the above option in the Descendant Actions dialog box, then the new value will be inherited by the descendant, but the inheritance state will remain **Inherited**. For example, consider a network 10.0.0.0/16 that has an extensible attribute **Site** with the value **SA** (native). When you add another network 10.0.0.0/24, extensible attribute **Site** inherits its value, **SA**, from the parent object**.** Now, if you add network 10.0.0.0/8, assign extensible attribute **Site** and set its value to **NY**, then when you choose this option, the value of **Site** will remain as **SA**, but the inheritance state will be changed to **Overridden** for network 10.0.0.0/16; however, network 10.0.0.0/24 will still have its value as **SA** for **Site** with the inheritance state set to **Inherited**.
   - **Inherit** ** the ** **parent's ** **value** ** and ** **change** ** the ** **inheritance ** **state** ** to ** **Inherit:** Select this to inherit the extensible attribute values from the parent for all descendants. The inheritance state for all descendants will be set to **Inherited**.
   - **Change ** **the ** **inheritance ** **state ** **to ** **Inherit** ** only ** **if** ** the ** **descendant's ** **value ** **is ** **the ** **same ** **as ** **the ** **parent's ** **value.**  
      **Otherwise,** **change** **the** **state** **to** **Override:** Select this to set the inheritance state to **Inherit** if the descendants have the same extensible attribute value as the parent. Otherwise, retain the original extensible attribute value on the descendants and change the inheritance state to **Overridden**.
   
   **When** **adding** **an** **extensible** **attribute** **that** **does** **not** **exist** **on** **a** **descendant:Do** **not** **inherit** **the** **value** **from** **the** **parent** **and** **change** **the** **inheritance** **state** **to** **Not** **Inherited:** Select this if the extensible attributes do not exist on the descendants and you do not want them to inherit the attributes from the parent. The inheritance state is set to **Not** **inherited**.
   
   - **Inherit** ** the ** **value ** **from ** **the ** **parent ** **and ** **change ** **the ** **inheritance ** **state ** **to ** **Inherited:** Select this if you want all descendants to inherit extensible attributes from the parent, and the inheritance state for all descendants will be set to **Inherited**.
   
   **When** **deleting** **an** **extensible** **attribute:**
   
   - **Keep** **the** **descendant's** **value** **and** **change** **the** **inheritance** **state** **to** **No** **Parent:** Select this if you want to preserve extensible attributes on all descendants when you delete an inheritable extensible attribute. The inheritance state for direct descendants will be set to **No** **Parent**.
   - **If** ** the ** **current** ** inheritance ** **state ** **is ** **Inherited,** ** remove** ** the ** **extensible ** **attribute. ** **If ** **the** ** current ** **inheritance ** **state ** **is ** **Overridden, ** **keep** ** the** ** value ** **and ** **change ** **the ** **inheritance ** **state ** **to** ** No ** **Parent:** Select this if you want to remove the extensible attributes that are inherited by the descendants. If the inheritance state of the extensible attributes is set to **Inherited** on the descendant, the attributes will be removed; however, if the inheritance state is set to **Overridden**, then the state will be changed to **No ** **Parent**.
3. Save the configuration.

For more information about how to configure inheritable extensible attributes, see [*Configuration Examples for Inheritable Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/configuration-examples-for-inheritable-extensibl)*.*

**Admin** **Permissions** **and** **Inheritable** **Extensible** **Attributes**   
Permissions for descendant objects can affect the results of the actions that are chosen in the *Descendant* *Actions*   
dialog box:

- When you add an extensible attribute to the parent object: The descendants to which you have read-write permission will behave as expected with any of the chosen options in the *Descendant* *Actions* dialog box.
- When you change the extensible attribute value on the parent object: The descendants that have the same extensible attribute set to **Inherited** will be automatically changed to the new value, even though you may not have write permission for those descendants.
- When you select to preserve descendant values while removing an extensible attribute associated with the parent object, values will be preserved even if you do not have write read-write permission for those descendants.
- When you select to remove an extensible attribute on descendants when removing a parent's extensible attribute, an error message will be displayed if you do not have read-write permission to some of the descendants.

In this section:

*[children]*
