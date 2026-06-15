---
title: "set extra_dns_name_validations"
source: "/space/nios90/280790117"
pageId: "280790117"
---
Use the `set extra_dns_name_validations` command to enable or disable additional validation on host names that takes place at the time of data entry when creating zones, subzones, and records of type A, AAAA, host record, ALIAS, CAA, MX, and NS. The additional validation invokes the same functions in the BIND library that the DNS service invokes when it is loading a zone and this can impact the performance of your current operation.

By default, the additional validation is disabled. When the validation is enabled, if you enter an invalid name, NIOS displays an error message and does not save the record until the name that you enter passes the additional validation.

# Syntax

`set extra_dns_name_validations`` ``[on|off]`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables the additional DNS name validation that takes place when you create a zone or a resource record. |
| `off` | Disables the additional DNS name validation that takes place when you create a zone or a resource record. |

# Example

`Infoblox &gt; set extra_dns_name_validations on`  
`WARNING: This has a performance impact when creating or importing multiple records at a time. Do you want to continue? (y or n): y`  
`Extra DNS name validations is turned on`
