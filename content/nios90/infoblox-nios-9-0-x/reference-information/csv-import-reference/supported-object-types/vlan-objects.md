---
title: "VLAN Objects"
source: "/space/nios90/280759628"
pageId: "280759628"
---
The list of VLAN objects are:

*[toc]*

> **warning**
>
> **Notes**
> 
> - Scheduled operations (create/update/delete) are not supported for new VLAN objects. However, scheduled assignment of VLAN objects to IPv4/IPv6 Networks is supported.
> - CSV export operations for VLAN objects are supported only from Grid Manager and not from WAPI.

# VLAN View

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| name | String | Yes | Name | name | Name of the VLAN view. Example: VLAN_view1 |
| start_vlan_id | Unsigned Integer | Yes | Start VLAN ID | start_vlan_id | Start ID of the VLAN view. The default value is 1. |
| end_vlan_id | Unsigned Integer | Yes | End VLAN ID | end_vlan_id | End ID of the VLAN view. The default value is 4094. |
| comment | String | No | Comment | comment | A descriptive comment for the VLAN view. |
| allow_range_overlapping | Boolean | No | Allow Range Overlapping | allow_range_overlapping | When set to **true**, the VLAN ranges under the VLAN view can have overlapping IDs. By default, the value is set to **false**. |

# VLAN Range

VLAN view is an import dependency for VLAN range. Ensure that VLAN view data is available in the CSV file while importing data for VLAN range.

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| vlan_view | Object Reference | Yes | VLAN View | vlan_view | Reference to the parent VLAN view to which the VLAN range belongs. |
| name | String | Yes | VLAN Range Name | name | Name of the VLAN range. Example: VLAN_range3 |
| start_vlan_id | Unsigned Integer | Yes | Start VLAN ID | start_vlan_id | Start ID of the VLAN range. |
| end_vlan_id | Unsigned Integer | Yes | End VLAN ID | end_vlan_id | End ID of the VLAN range. |
| comment | String | No | Comment | comment | A descriptive comment for the VLAN range. |

# VLAN Object

VLAN view and VLAN range are import dependencies for a VLAN object depending on whether the VLAN object has been added directly to the VLAN view or as part of a VLAN range. Ensure that the relevant VLAN view or VLAN range data is available in the CSV file while importing data for a VLAN object.

| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| parent | Object Reference | Yes | VLAN Parent | parent | Reference to the parent VLAN view or VLAN range to which the VLAN object belongs. |
| name | String | Yes | VLAN Name | name | Name of the VLAN object. Example: VLAN30 |
| id | Unsigned Integer | Yes | VLAN ID | id | VLAN ID value. |
| comment | String | No | Comment | comment | A descriptive comment for the VLAN object. |
| reserved | Boolean | No | Reserved | reserved | When set to **true**, the VLAN object can only be assigned manually to the IPAM object. By default, it is set to **false**. |
| description | String | No | Description | description | A description for the VLAN object. The description may be used for longer VLAN names. |
| contact | String | No | Contact | contact | Contact information for the person or team managing or using the VLAN object. |
| department | String | No | Department | department | Department where the VLAN object is used. |
