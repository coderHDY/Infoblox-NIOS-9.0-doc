---
title: "CSV Format for Inheritable Extensible Attributes"
source: "/space/nios90/280402258"
pageId: "280402258"
---
# Exporting Inheritable Extensible Attributes

When you export data, if an object has inheritable extensible attributes associated with it, then an additional column **EAInherited-XXX** is displayed in the spreadsheet, where XXX is the name of the inheritable extensible attribute. Note that the column **EA-XXX** displays the name of the inheritable extensible attribute and its value whereas  
 **EAInherited-XXX** displays the inheritance state, which is either **Inherit** or **Override**. Extensible attributes with the following inheritance states will be exported: **Inherited**, **Native**, and **Overridden**.  
 Note the following about inheritable extensible attributes:

- By default, the value is displayed as **Override** for inheritable extensible attributes, which are at the top of the inheritance chain or if the value of the inherited extensible attribute is overridden at the descendant level.
- If the value is inherited by the descendants of the parent object, then the inheritance state is set to **Inherit.**
- If an extensible attribute is not inheritable or if the status is set to **Not** **Inherited**, then the **EAInherited-XXX** column will not be displayed for these attributes.
- NIOS does not support EA inheritance for DNS objects, but you might see the **EAInherited-XXX** column in the CSV file when you export data through Grid Manager. Note that NIOS treats these objects as normal extensible attributes even when you enable inheritance for extensible attributes.
