---
title: "Named ACLs"
source: "/space/nios90/280268494"
pageId: "280268494"
---
Consider the following when you import named ACLs and ACEs for an existing named ACL:

- The appliance appends ACES to the end of the named ACL.
- Validate all imported named ACLs after a CSV import. The appliance does not automatically validate ACEs. To avoid conflicts and unexpected results, you must validate the named ACLs.
- To reorder an existing named ACL through CSV import, complete the following:
  
  1. Export the named ACL.
  2. Delete all ACEs in the named ACL. The appliance allows a named ACL without any ACEs.
  3. Reorder the ACEs in the .csv file.
  4. Re-import the updated file through CSV import.
- You can add a named ACL as a nested ACL to an existing named ACL.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-namedacl | String | Yes |  | NamedACL | Example: namedacl |
| name | String | Yes | Name | nacl | Example: nacl1 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment | Add this field to overwrite the comment you entered for the name ACL. |

# Examples

This section contains examples of how to create data files for named ACLs. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a new named ACL

This example shows how to import a new named ACL nacl1.

`Header-namedacl,name*,comment namedacl,nacl1,"This is a new named ACL."`

## Overwriting the name of a named ACL

This example shows how to overwrite the name of an existing named ACL nacl1 to nacl2.

`Header-namedacl,name*,_new_name namedacl,nacl1,nacl2`
