---
title: "Deleting Inheritable Extensible Attributes Associated with Parent Objects"
source: "/space/nios90/1340475322"
pageId: "1340475322"
---
When you remove an inheritable extensible attribute, which is associated with a parent object, you can choose to retain the descendant extensible attribute or remove it from all the descendants.  
Note that you cannot delete extensible attributes that have the inheritance state set to **Overridden**, **Inherited**, and **Not** **Inherited**. You can delete an extensible attribute that is directly assigned to the object and has its inheritance state set to **No** **Parent** or if the inheritance state is **Disabled**.  
To remove an inheritable extensible attribute associated with a parent object:

1. **IPv4** **and** **IPv6** **Network**: From the **Data ** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** -> *network* -> *addr_range* checkbox, and then click the Edit icon.  
   **For** **IPv4** **Range,** **IPv6** **Range,** **Fixed ** **Address,** ** Reservation,** **and ** **Host:** From the **Data ** **Management** tab **DHCP **-> tab -> **Networks **tab -> **Networks **tab -> network > click *addr_range,* select the object and click Edit icon.  
   **For DNS View**: From the **Data Management** tab, select the **DNS** tab - > **Zones** tab - > select the checkbox of the **DNS View **- > click the Edit icon.  
   **For VLANs**: From the **Data Management** tab, select the **VLAN** tab - > select the checkbox of the **VLAN Range / VLAN**  - > click the Edit icon.
2. In the editor, click the **Extensible** ** Attributes** tab, select the attributes and then click the Delete icon.
3. When you click **Save** ** and** ** Close**, the *Descendant* * Actions* dialog box is displayed automatically with the following options:  
   ** Select the action(s) you want to apply to descendant objects that have the following extensible attribute(s):** ** **  
    ** When deleting an extensible attribute:**
   
   - **Keep** **the** **descendant's** **value** **and** **change** **the** **inheritance** **state** **to** **No** **Parent:** Select this if you want to preserve extensible attributes for all descendants. The inheritance state of the extensible attribute changes to **No** **Parent**.
   - **If** **the** **current inheritance state is Inherited, remove the extensible attribute. If the current inheritance state is Overridden, keep the value and change the inheritance state to No Parent:** Select this if you want to remove the extensible attributes that are inherited by the descendants. If the inheritance state of the extensible attributes is set to Inherited on the descendant, the attributes will be removed; however, if the inheritance state is set to Overridden, then the state will be changed to No Parent.
4. Click **Yes** to save the configuration or **No** to exit.

> **warning**
>
> ### Note
> 
> The deleted extensible attributes will not be moved to the Recycle Bin and you cannot restore extensible attributes that are deleted.

After a superuser admin configures the attributes of an object, they become available in the wizard and editor of the object. This section describes how users can then add and manage the attributes that were configured.  
Grid Manager displays the required extensible attributes in the **Extensible** **Attribute** tab. You must enter values for all required attributes. If an object does not have required attributes, you can add the available optional attributes.  
In the **Extensible** **Attribute** tab of an object, such as a network or host record, you can do the following:

- Enter values for extensible attributes
- Add attributes
- Change the inheritance state of an extensible attribute
- Select if descendants must inherit extensible attribute values from its parent
- Delete optional attributes

To enter values for the extensible attributes of an object:

1. Open the editor of the object. For example, to enter values for the attributes of a network, select it and click its **Extensible** **Attributes** tab.
2. Click the Value column of the attribute. You must enter values for all required attributes.
3. Depending on the required attribute type, either enter or select a value for the attribute from the Value column.
4. Based on whether the attribute is inheritable, the values are displayed in the **Inheritance** **State** column. This value can be set to **Inherited**, **Overridden** or **Not** **inherited**. If the object is at the top of the inheritance chain (Network View), then the inheritance state is not displayed. The inheritance state is set to **No** **Parent** only if an object has a parent, but the parent does not have the inherited extensible attribute. This column is not displayed if all selected objects do not belong to the supported inheritance chain. Example: Zones, DNS View, DNS records, etc.

To add attributes:

1. Click the Add icon. Grid Manager adds a row to the table with the default attribute displayed.
2. Click the default attribute and expand the list of available attributes.
3. Select an attribute from the drop-down list.
4. Enter or select a value for the attribute from the Value column. To delete an attribute:
5. Click the checkbox beside the attribute you want to delete.
6. Click the Delete icon.

> **warning**
>
> ### Note
> 
> You cannot delete an extensible attribute which has its inheritance state set to **Inherited**, **Overridden**, and **Not** **Inherited**. You can delete an extensible attribute that is directly assigned to the object and has its inheritance state set to **No** **Parent** or if the inheritance state is **Disabled**.

To delete all attributes:

1. Click the **Attribute** **Name** checkbox.
2. Click the Delete icon.
   
   Note that you can delete only attributes that are not required. If you have one or more required attributes, you cannot use the delete all function.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
