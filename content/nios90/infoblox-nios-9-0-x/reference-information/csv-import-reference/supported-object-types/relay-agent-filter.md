---
title: "Relay Agent Filter"
source: "/space/nios90/280401734"
pageId: "280401734"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-RelayAgentFilter | String | Yes |  |  | Example: RelayAgentFilter |
| name | String | Yes | Name | name | Example: Relay Agent Filter 1 |
| _new_name | String | No |  |  | Add this field to overwrite the name field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| circuit_id_rule | String | No | Circuit ID: Match Value | is_circuit_id | Example: MATCHES_VALUE |
| circuit_id | String | No | Circuit ID | circuit_id_name |  |
| remote_id_rule | String | No | Remote ID: Match Value | is_remote_id | Example: MATCHES_VALUE |
| remote_id | Integer | No | Remote ID | remote_id_name | Example: 50 |
| EA-Site | String | No | Extensible Attribute Site | extensible_ attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | String | No | Extensible Attribute Users | extensible_ attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for relay agent filters. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a Relay Agent Filter

This example shows how to import a relay agent filter with a circuit ID and a remote ID.

`header-RelayAgentFilter,name*,circuit_id_rule,circuit_id,remote_id_rule,remote_id RelayAgentFilter,relayagent1,MATCHES_VALUE,123456,MATCHES_VALUE,abcd`

## Overwriting Relay Agent Filter Data

This example shows how to overwrite the circuit ID and remote ID of an existing relay agent filter.

`header-RelayAgentFilter,name*,circuit_id_rule,circuit_id,remote_id_rule remote_id RelayAgentFilter,relayagent1,MATCHES_VALUE,336699,MATCHES_VALUE,xyz`

## Merging Relay Agent Filter Data

This example shows how to merge a comment and extensible attribute Site to an existing relay agent filter.

`header-RelayAgentFilter,name*,comment,EA-Site RelayAgentFilter,relayagent1,This is a comment.,USA`
