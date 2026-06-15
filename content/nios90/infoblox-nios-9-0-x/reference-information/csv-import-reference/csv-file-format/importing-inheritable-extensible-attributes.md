---
title: "Importing Inheritable Extensible Attributes"
source: "/space/nios90/280661843"
pageId: "280661843"
---
You can specify new inheritable extensible attributes in the spreadsheet and import this file using the CSV Import feature. When you import inheritable extensible attributes using the CSV Import feature, you must specify two new columns, **EA-XXX** and **EAInherited-XXX**, with relevant values as mentioned in the following tables. Note that *XXX* is the name of the inheritable extensible attribute.  
For example, if you want to update the value of an existing inheritable extensible attribute **Building**, you must set the inheritance state to **OVERRIDE** in the spreadsheet. The following example shows that the original value of attribute **Building**, which is replaced by **Millennium** **Tower**.

| **A** | **B** | **C** | **D** | **E** |
| --- | --- | --- | --- | --- |
| **HEADER-** **NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Building** | **EAInherited-Building** |
| NETWORK | 10.251.133.128 | 255.255.255.192 | Millennium Tower | OVERRIDE |

The following example shows two new columns, **EA-Region** and **EAInherited-Region,** which are added to the spreadsheet to associate a new inheritable extensible attribute with an existing object:

| **A** | **B** | **C** |  |  |
| --- | --- | --- | --- | --- |
| **HEADER-** **NETWORK** | **ADDRESS*** | **NETMASK*** | **EA-Region** | **EAInherited-Region** |
| NETWORK | 10.251.133.128 | 255.255.255.192 | San Pablo | INHERIT |

Note the following about inheritance states:

- When you import attributes for a parent object, the inheritance state must be set to **OVERRIDE**.
- For descendants, the inheritance state can be set to **OVERRIDE** or **INHERIT**. If you specify **INHERIT**, the attribute value will be inherited from the parent object. If you specify **OVERRIDE**, the original value of the attribute will be replaced with the value specified in the spreadsheet.  
  This is valid for Network related objects only. The supported inheritance chain is: **Network View -&gt; Network Container -&gt; Network -&gt; Range -&gt; Host/Fixed Address/Reservation**.
