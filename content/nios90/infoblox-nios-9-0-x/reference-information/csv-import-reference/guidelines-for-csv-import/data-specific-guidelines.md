---
title: "Data Specific Guidelines"
source: "/space/nios90/422543546"
pageId: "422543546"
---
Follow these guidelines to enter data:

- The appliance uses double quotes (") as the escape characters in CSV import. If you want to include supported separators in a field, you must enclose the data in a pair of double quotes (" "). This applies to the field names and data. For example, if you want to use the field name **ADMGRP-CSV****,;****Import**, you must enter **"ADMGRP-CSV****,;****Import"** as the value. Otherwise, the import fails. When you enter "123""123", the imported data is 123""123, and when you enter "\ \ ", the imported data is \ \.
- If you have an empty value in the last field, you must still include the separator at the end of the data row. Otherwise, the corresponding column and all its data are not imported, and the appliance generates an error.
- Any data cell starting with the characters ‘=’, ‘+’, ‘-’, or ‘@’ will contain a single space (" ") added at the beginning during the CSV export. This measure is taken to prevent spreadsheet programs from interpreting these cells as malicious macros that could otherwise execute harmful commands on your system.
- For each supported object type, you must include all the required fields in the data file. For information, see [*Supported Object Types*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types). All required fields are marked with an asterisk (*) in an exported file.  
  Note that if you want to modify a required field XXX (for either the overwrite or merge function), you must add a corresponding field, *new_XXX, to include the new value. For example, "fqdn" is a required field in an A record. If you want to update this field, you must include a new field "_new_fqdn" and define the new value here. The appliance overwrites the existing data in the required field using the values you specify in the new field. Note that the replace function ignores __new_XXX* fields in the imported CSV files.
- When you perform an overwrite function, you must define all boolean and integer data types in each supported object type in order for the appliance to overwrite existing data.
- Inherited fields: The appliance uses the following conventions to override inherited fields:
  
  - When a value is specified in a field, the appliance overrides the inherited value with the new value.
  - When a value is set to " " or an empty value, the appliance does not override the inherited value.
  - When a value is set to a string with a value of &lt;empty&gt;, the appliance overrides the inherited value with an empty value.
- Extensible attributes: A field name of EA-XXX indicates an extensible attribute, where XXX is the attribute name. The value of an extensible attribute can be a string, a list, an integer, an email address, a URL, or a date in YYYY-MM-DD format. Note that extensible attributes do not support time zones. Following are some examples:
- "EA-Site" is a predefined string type for locations. It can have a value of "Santa Clara".
- "EA-User" is a user defined list type for employee types. It can have a list of values, such as "Local,Remote,Temp". Note that only one value can be specified when importing the extensible attribute.
- "EA-Building" is a predefined integer type for building numbers. It can have a value of "5".
- "EA-TechPubs" is a user defined email address type. It can have a value of "techpubs@infoblox.com".
- "EA-IB" is a user defined URL type. It can have a value of "*[www.infoblox.com](https://www.infoblox.com/)*".
- "EA-Date" is a user defined date type attribute. It can have a value of "2010-11-20".
- Admin permissions: A field name of ADMGRP-XXX indicates the admin permission of a specific admin group, where XXX is the name of the admin group. The value of an admin permission can be a string or a list of strings with subtypes. If there is a single value in the permission, use RW, RO, or DENY. If there is a subtype in the permission, use a list format, such as "RW, ARecord/RO".
- DHCP options: A field name of OPTION-XXX-nn indicates a DHCP option, where XXX is the vendor name of the option and nn is the option number. If the option is of the DHCP vendor class, you can omit -XXX in the field name. For example, OPTION-1 implies vendor class = DHCP and option number = 1, and OPTION-CISCO-122 implies vendor class = CISCO and option number = 122.
- Named ACLs (access control lists): When you import a named ACL or ACEs (access control entries) to a named ACL, ensure that you validate the named ACLs to avoid conflicts and unexpected results. When adding ACEs to a named ACL, all entries are appended to the end of the list. To reorder ACEs in a named ACL through CSV import, you must first export the ACEs, delete all the ACEs in the current ACL, reorder the ACES in the exported .csv file, and than re-import the ACEs to the named ACL. For more information about access control and named ACLs, refer to the *Infoblox* *NIOS* *Administrator* *Guide*.
