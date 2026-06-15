---
title: "Editing Multiple Extensible Attribute Values"
source: "/space/nios90/1340737248"
pageId: "1340737248"
---
You can also manage the extensible attributes of multiple objects at the same time. For example, you can select several zones, and view and modify their extensible attributes all at once in the *Multi-Select* *Edit* *Extensible* *Attributes* editor.  
Note that Grid Manager may not apply the changes you made to all the selected objects. It applies the change to objects that meet the following criteria:

- You have read/write permission to the object.
- The selected object is not locked by another user or does not have a scheduled pending task.
- If the attribute was restricted to certain object types, the object must be one of those types. To edit multiple extensible attribute values:

1. Select the objects whose extensible attributes you want to modify. You can select specific objects or select all objects in a dataset, as described in [*Selecting Objects in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#Selecting-Objects-in-Tables).
2. Expand the Toolbar and click **Extensible** **Attributes**.  
   Grid Manager displays the *Multi-Select* *Edit* *Extensible* *Attributes* dialog box which lists the extensible attributes of the selected objects. It displays the following information for each attribute:
   
   - **Attribute** **Name**: This field displays the name of the extensible attribute associated with the selected object.
   - **Value**: If the selected objects have the same value for the attribute, Grid Manager displays that value in this field. If the selected objects have different values for the attribute or if some have values and others do not, this field displays **Multiple** ** Values** and the cell is highlighted in gray.  
     An attribute can have multiple rows if it allows multiple values. Grid Manager displays the values that all objects have in common, if any. Otherwise, it displays **Multiple** **Values**. This column displays the source for inherited extensible attributes only. Note that when you add new extensible attributes, edit values of existing extensible attributes or delete an extensible attribute, then the *Descendant* *Actions* dialog box is displayed, even if the objects do not have any descendants. For more information about Source values, see Modifying Inheritable Extensible Attributes above.
   - If you select objects that have the same inherited extensible attributes, but objects have different parents, then the **Source** column will display **Multiple** **Ancestors**.
   - If the inheritance state of an extensible attribute is **Not** **Inherited**, then the extensible attribute will not be added as a new extensible attribute to objects that are currently not inheriting this extensible attribute.
   - **Inheritance** **State:** This field displays the inheritance state of an extensible attribute. The column value can be **Inherited**, **Not** **Inherited**, **No** **Parent**, **No** **Change** or **Overridden**. This column is not displayed if all selected objects do not belong to the supported inheritance chain. Example: Zones, DNS View, DNS records, etc.  
     If extensible attributes for the selected objects have the same inheritance state, then the respective inheritance state is displayed in this column. When objects have different inheritance states, this column displays **No** **Change**, so that the current inheritance state is retained on the selected objects. If you then change the inheritance state of an extensible attribute to a specific state, the corresponding attribute will be changed to the selected inheritance state on all selected objects where the extensible attribute is currently inherited. If the object is at the top of the inheritance chain (Network View), then the inheritance state is not displayed. The inheritance state is set to **No** **Parent** only if an object has a parent, but the parent does not have the inherited extensible attribute. For more information about inheritance states, see Inheritance States table above.
   - **Required**: This field displays **Yes** if the attribute is required in at least one object associated with the attribute. It displays **No** if the attribute is not required in any of the objects.
3. You can do the following:
   
   - Change the value of an attribute. Depending on the attribute type, select the value and either enter a new value or select one from the drop-down list.
   - Add an attribute to the selected objects. Click the Add icon. In the **Attribute** **Name** field of the new row, select an attribute from the list of available attributes and specify its value. If the attribute that you added was configured as a required attribute, the **Required** field displays **Yes**. Otherwise, it displays **No**.
   - Delete an attribute. You can delete an attribute if it is not required. Select the attribute and click the Delete icon.
4. Click **OK** when you are finished modifying the extensible attributes.

Grid Manager applies your changes to the applicable objects. This operation might take a long time, depending on the amount of data being modified. You can choose to run this operation in the background, as described in [*Tasks Dashboard*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759015).
