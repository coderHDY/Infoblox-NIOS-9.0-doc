---
title: "Adding Extensible Attributes"
source: "/space/nios90/1340737146"
pageId: "1340737146"
---
To add a new extensible attribute:

1. From the **Administration** tab, select the **Extensible** **Attributes** tab.
2. Click the Add icon on any of the toolbars.
3. In the *Add* *Extensible* *Attribute* wizard, complete the following:
   
   - **Name**: Enter the name of the attribute. This is a required field and is case-sensitive. You can enter up to 128 UTF-8 characters.
   - **Type**: Specify the type of data that you want to capture for an object. Select one of the following:
     
     - **String**: Select this when the attribute is used to define string values, such as names. When you select this type, the wizard displays the **Number ** **of** ** Characters** field where you can enter the minimum and maximum number of characters that users can enter.
     - **List**: Select this when you want to define a list of values for the attribute. Users can then select a value from this list. For example, if you want to restrict an attribute to five specific values, you can define the attribute as a **List** and then list the five values in the *List* * Values* section. When a user uses the attribute, they are limited to selecting from one of the five values.  
       When you select **List**, the wizard displays the List of values table, where you add the allowed values. These values appear in the drop-down list when a user defines the attribute. Click the Add icon to enter values in the table. You can enter up to 64 UTF-8 characters for each value.  
       You can also modify list values at a later time. When you modify list values, all object attributes using the modified values are updated to the new values.  
       You can also delete values from the list. Note that when you delete a list value, all attributes using the deleted values are removed from the objects. For objects with multiple attribute values, only the deleted values are removed.  
       You can also move a value up or down in the list.
     - **Integer**: Select this when the attribute is used to track whole numbers, such as serial numbers. When you select this type, the wizard displays the **Value** ** Limits** fields where you can enter the range of allowed values. Note that you cannot change your entries in the **Value** ** Limits** fields if you modify the attribute at a later date.
     - **Email**: Select this when the attribute is used for email addresses. Email addresses are entered in the format [ ](mailto:user@domain.com)[*user*](mailto:user@domain.com)[@](mailto:user@domain.com)[*domain.com*](mailto:user@domain.com)[.](mailto:user@domain.com)
     - **URL**: Select this when the attribute is used for tracking URLs (Uniform Resource Locators). URLs must be entered in a valid format.
     - **Date**: Select this when the attribute is used for dates. The date value is displayed in the YYYY-MM-DD format in Grid Manager. However, when stored in the database, Grid Manager automatically adds the time component (T11:01:00Z) to the value. As a result, WAPI call returns it in the DATETIME format, represented as YYYY-MM-DDT11:01:00Z.
   - **Comment**: Enter additional information about the attribute. You can enter up to 256 UTF-8 characters.
4. Click **Next** and complete the following:
   
   - **Enable ** **Inheritance:** Select this checkbox if you want to allow the extensible attribute and its values to be inherited by descendants in an inheritance chain. When you select this checkbox, inheritance is enabled for network related objects only. When you select this checkbox and restrict an attribute to certain objects, then the extensible attribute and its value will be inherited by those objects only.  
     Note the following:
     
     - If you create an extensible attribute with inheritance disabled and later enable it, the *Descendant* *Actions* dialog box may be displayed with the available options for adding an extensible attribute. For more information, see Managing Inheritable Extensible Attributes at the Parent and Descendant Level below.
     - If you create an extensible attribute with inheritance enabled and later disable it, the *Descendant* *Actions* dialog box may be displayed with the available options for deleting an extensible attribute. For more information, see Deleting Inheritable Extensible Attributes Associated with Parent Objects below.
   - **Allow** **multiple** **values:** Select this checkbox if you want to allow multiple values for this attribute to be set on an object. You cannot change this value for predefined attributes. Once you select this checkbox, you cannot deselect it. That is, you cannot allow a single attribute to be set if you selected to allow multiple values to be set on an object.   
     **Restricting** **synchronization** **of** **extensible** **attributes**
   - **Disable** **sync** **to** **MGM**: Select this checkbox to disable synchronization of extensible attributes from the managed Grid to the Multi-Grid Master. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.
   - **Default** **Value**: Enter the default value that the appliance displays for the attribute. Leave this blank if there is no default value for this attribute. If the attribute type is **String**, you can enter up to 256 UTF-8 characters. If the attribute type is **List**, the value must be one of the list values and can be up to 64 UTF-8 characters.
   - **Required**: If you select this option, it is required to enter a value for this attribute when adding or modifying the corresponding object in the GUI.
   - **Recommended**: If you select this option, it is recommended to enter a value for this attribute when adding or modifying the corresponding object in the GUI.
   - **Optional**: This is selected by default. By selecting this option, you may or may not enter a value for this attribute when adding or modifying the corresponding object in the GUI.
   - **Restrict** **to** **Specific** **Object** **Types**: Click the Add icon to select the object type with which you want to associate the attribute. The appliance adds a row to the table. To delete an object type, select an object type and click the Delete icon. By default, the appliance associates an extensible attribute with all the supported object types.
   - **Log** **Attribute** **Values** **When** **Objects** **are** **Updated**: Select this checkbox if you want the appliance to make an entry in the audit log each time an object with this attribute is added or modified. When you select attribute values for audit, they are included in all the audit log entries. For more information about the audit log, see [*Using the Audit Log*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049).
   - **Allow** **cloud** **members** **to** **have** **the** **following** **access** **to** **this** **extensible** **attribute**: Select this if you are configuring this extensible attribute for Cloud Network Automation. When you select this checkbox, the Cloud Platform Appliance can access this extensible attribute and perform requested tasks based on the cloud API requests. This function is enabled by default for all cloud specific extensible attributes. Note that if you disable this function for any cloud attributes, you will receive an error when you try to perform tasks that involve these attributes through cloud API requests. You can select **Read/Write** or **Read** **only**. For more information about this feature, see [*Deploying Cloud Network Automation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758966).
     
     - **Read/Write** **(and** **disallow** **Write** **access** **from** **the** **GUI** **and** **the** **standard** **API)**: When you select this, the Cloud Platform Appliance can access and modify the value of this extensible attribute based on the tasks requested only through cloud API requests. You cannot modify this attribute using Grid Manager or the Infoblox API.
     - **Read** **only**: When you select this, the Cloud Platform Appliance can access this extensible attribute and report the value based on the cloud API requests, but it cannot modify the value. You receive an error if you try to modify this attribute when this option is selected.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

> **error**
>
> Warning  
> The Cloud Platform member is evicted from the Grid Master if you modify the extensible attribute using Grid Manager.

Grid Manager adds the attribute to the **Extensible** **Attributes** tab in either the wizard or editor for the specified object types.

> **warning**
>
> ### Note
> 
> Infoblox recommends that you define values for mandatory extensible attributes using the Grid only and do not use PAPI or RESTful API to define values.
