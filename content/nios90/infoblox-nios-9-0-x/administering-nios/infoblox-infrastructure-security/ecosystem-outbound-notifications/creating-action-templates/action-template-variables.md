---
title: "Action Template Variables"
source: "/space/nios90/1375568669"
pageId: "1375568669"
---
| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| version | Must be 5.0 | No | No | The version number of the template. Note that 5.0 is the latest version. The appliance still fully supports the previous schema version. |
| name | String | No | No | The template name. |
| type | Must be   REST_EVENT for   REST API endpoints   Must be DXL_EVENT   for DXL endpoints   Must be SYSLOG_EVENT for Syslog endpoints   Must be PXGRID_ENDPOINT for Cisco ISE endpoints. | No | No | The template type. |
| vendor_identifier | String | No | No | The vendor identifier for an endpoint. |
|   event_type | List of ENUM (except for SESSION) |   Yes |   No | Available event types:  RPZ, LEASE, TUNNEL, ADP, DXL, NETWORK_IPV4, NETWORK_IPV6, RANGE_IPV4, RANGE_IPV6, FIXED_ADDRESS_IPV4, FIXED_ADDRESS_IPV6, HOST_ADDRESS_IPV4,HOST_ADDRESS_IPV6, DISCOVERY_DATA, SCHEDULE, DNS_RECORD, DNS_ZONE, SESSION, SYSLOG_SEND_EVENT, DXL_SEND_REQUEST  Note that SESSION is used for the login and logout events for the session management templates. For information about supported variables for the session management template, see [*Session Management Template Variables*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/creating-session-management-templates). |
| action_type | String | No | No | The action type. |
| comment | String | No | No | Additional information. |
| content_type | String | No | No | The content type for the whole template. If not specified, it is set as “application/json”. It can be specified either in the template, inside the transport, or both. If both are specified, then the content type specified in the template takes precedence. |
| quoting | ENUM | No | No | Sets the default serialization for template variables. The valid value is one of the following: JSON, XML, XMLA, ASIS, or URL. If not specified, this is set to JSON. To use XMLA for serialization, you must specify a valid quoting for variables. Infoblox strongly recommends that you use XMLA as the quoting option (as opposed to XML) when you create new action templates. New operations such as PUSH, POP, SHIFT and others are not officially supported for XML parsed data. |
| headers | Dictionary of key/value pairs | No | Yes | If specified, it is sent for every request of the template, in addition to any other H: namespace variables. |
| instance_variables | List of VARIABLE structs | No | No | It must be specified in the GUI to create a template instance. |
| template_variables | List of VARIABLE structs | No | No | template_variables is used when there are common settings in various steps. They are specified for maintainability and they are also available in L: namespace. Note that the template variables are evaluated immediately so that they can be used as reference values in other areas of the template. |
| transport | TRANSPORT struct | No | No | It is the default for steps. |
|  |  |  |  | Steps are executed in sequence. You cannot execute them |
| steps | List of STEP structs | Yes |  | Steps are executed in sequence. You cannot execute them in a backward manner. |
| step_execution_limit | Integer |  |  | The maximum number of times a step can be executed. Steps can be executed more than once if using certain template constructs. To avoid possible endless loops, you can limit an individual step to be executed up to a certain number of times. If a step is executed again after the limit is reached, the execution will be interrupted and a failure is logged. The default is 10. The maximum number is 1000. |
