---
title: "Using Filters"
source: "/space/nios90/1343292634"
pageId: "1343292634"
---
You can control the amount and the kind of data displayed in a specific panel by adding filter criteria. When you add filter criteria, the appliance screens the data based on your filter rules and displays only the information that matches the rules. To narrow your search for specific information, you can add up to 10 filter rules. In some panels, such as the DHCP Networks tab, you can switch between viewing information with and without the filter criteria by toggling the filter on and off. You can save filter criteria as quick filters so you can reuse the same filter rules to obtain updated information without redefining them each time you log in to the appliance.   
You can also use filters to find objects that have failed an operation. When you try to modify multiple objects with the same extensible attribute, the appliance may not modify all of the selected objects. For information about extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes). For example, after you modify the extensible attribute "Building" with new value "West", you can find the objects that are not updated by defining a filter with "Building" "does not equal" "West".  
Depending on the filter criteria, you can use different filter operations to narrow down your search results. Grid Manager supports the following filter operations based on your selected filter criteria:

- **equals:** Defines a specific value for a selected filter criterion
- **does not equal:** Defines a selected filter criterion that does not equal a specific value
- **begins with:** Specifies a beginning value for a selected filter criterion
- **does not begin with:** Specifies a selected filter criterion that does not begin with a specific value
- **has a value:** Specifies a selected filter criterion that contains a value
- **does not have a value:** Specifies a selected filter criterion that does not contain a value
- **belongs to:** Defines a selected filter criterion that belongs to a specific parent object
- **Inheritance State equals:** Specifies a specific inheritance state

To use a filter:

1. In a panel, click **Show** **Filter** to enable the function.
2. In the filter section, complete the following:
   
   - In the first drop-down list, select a field such as an object name, comment, or an extensible attribute (fields with a gray background) as the filter criterion. Grid Manager displays only the supported fields.
   - In the operator drop-down list, select an operator for the filter criterion. Depending on what you select in the first filter field, this list displays the relevant operators for the selection. The operator **Inheritance** **State** **equals** is displayed only when you select an inheritable extensible attribute from the **Type** drop-down list. This operator is not displayed if the extensible attribute is not inheritable.
   - In the value field, enter or select the attribute value for the first filter field. Depending on what you select for the first two filter fields, you can either enter a value or select an attribute from a drop-down list. For example, if you select an extensible attribute in the first filter field, you can enter the attribute value here. If you select an inheritable extensible attribute from the **Type** drop-down list, and select **Inheritance** **State** **equals** in the operator drop-down list, the value field displays a drop-down list with these values: **Inherited** and **Overridden/No** **Parent**. When you select **Inherited**, extensible attributes that are inherited by the descendants are listed. When you select **Overridden/No** **Parent**, extensible attributes which are overridden or do not have a parent are listed.
3. Optionally, click the **+** icon to add another filter rule. You can add up to 10 filter rules.
4. Click **Apply** to apply the rules  
   or  
   Click **Reset** to clear the filter criteria.

To view information with or without the filter criteria:

- Click **ToggleFilterOn** to apply filter criteria to the displayed data. Grid Manager displays only the filtered data in the panel.  
  or  
  Click **ToggleFilterOff** to have the appliance list all data without applying filter criteria.
