---
title: "STEP Struct"
source: "/space/nios90/1375601452"
pageId: "1375601452"
---
Each step can perform a different operation, such as **SLEEP**, **CONDITION**, **NOP**, **GET**, **POST**, **PATCH**, **DELETE**, **DXL_EVENT_SEND**, or **PUT**. The STEP Structs table below, lists the step variables.

> **warning**
>
> ### Note
> 
> The name for each step must be unique.

- **SLEEP**: Steps with a SLEEP operation will pause the execution for the number of seconds specified in the timeout parameter.
- **NOP**: Steps with a NOP operation will only parse the text specified in body/body_list without sending it to the endpoint. This can be useful for executing operations on variables to prepare data for subsequent steps.
- **CONDITION**: Steps with a CONDITION operation will cause a condition specified in statements to be matched. See CONDITION Structs table below, for information about condition variables and STATEMENT Structs table below, for statement variables.

If the condition matches, the execution of the template will do the following:

- 
  
  - Stop without errors If the stop field is present,
  - Stop with an errors if the error field is present,
  - Jump forward to the specified step if the next field is present,
  - and/or evaluate the text in eval if the field is present.

If the condition does not match, the text in the else_eval field will be evaluated instead, if the field is present.

- **GET,** **POST,** **PATCH**, **DELETE**, and **PUT**: These steps will result in an endpoint communication. The request will be sent to an URI composed by the URI configured in the endpoint, plus the path configured in the session management template if present (or replaced by it, depending on its override setting), plus the path configured in the event template if present (same override considerations), plus the path configured in the individual step if present (same override considerations).  
  After variable substitution, any data present in the H: namespace will be sent as headers, any parameters listed will be sent as URI parameters, and any data in body/body_list will be sent as the body of the request. Note also that each step can override the endpoint timeout. This is useful when a certain operation is known to require a longer execution time.  
  If the result variable is set in the step, the reply from the server will be evaluated and compared against the specified codes and/or REGEX, and the operation specified in the result step will be executed.  
  If parse is set in the step, the result from the server will also be parsed and be made available in the P: namespace as described above.

> **warning**
>
> ### Note
> 
> Set the "wapi" field to send WAPI requests to the Grid Master using available event data. For example, you can add or modify extensible attributes of a NIOS object at the time when the object is being synchronized. If you include the "wapi" field in a step, you must enable WAPI integration by entering the WAPI login username and password while configuring the endpoint. Otherwise, the WAPI step will fail due to an authorization error. For information about how to configure endpoints, see [*Configuring Outbound Notifications*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-outbound-notifications).



*STEP* *Structs*

| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| name | String | Yes | No | Used to refer to the steps used in the execution of the template. |
| operation | ENUM | Yes | No | The valid value can be one of the following: GET, POST, DELETE, PATCH, PUT, SLEEP, CONDITION, NOP, VARIABLEOP, DXL_EVENT_SEND, SERIALIZE, or FUNCTION. If you specify SLEEP, only timeout is supported, where timeout is the sleep length in seconds. If you specify NOP, only variable operations are performed, and only body/body_list is supported. If you specify VARIABLEOP, you must use the VARIABLE struct within your steps that are executed in sequence. See  VARIABLE Struct below, for the supported fields. If you specify **SERIALIZE**, see SERIALIZE Struct below,  for the supported variables. |
| function_name | String | Yes |  | Function name. Applicable only if the operation is set to** FUNCTION**. |
| condition | CONDITION Struct | No |  | Applicable only if the operation is set to **CONDITION**. |
| timeout | String | No | Yes | If specified, overrides the endpoint configuration value (it is useful if the template is slow during execution). Note that the timeout value is invalid for NOP. Since the timeout variable is a string, you can substitute the variable in individual steps. |
| transport | TRANSPORT Struct | No | Path only |  |
| result | List of RESULT Structs | No | No | If not present, you can assume 200, everything else is a failure. If not specified, the steps are executed sequentially. This is not valid for SLEEP, NOP, or CONDITION variables. |
| parse | ENUM | No | No | If specified, the output of the server will be parsed. The valid value is one of the following: JSON, REGEXLINE, REGEXMULTILINE, REGEX, REGEXSPLIT, XMLA, or XML. Infoblox recommends that you use **XMLA** instead of **XML** for parsing. Ensure that you see  Result Parsing below  for details. |
| parse_regex | String | No | No | You can set one of the following: REGEX, REGEXSPLIT, REGEXLINE, or REGEXMULTILINE |
| parameters | List of PARAMETERS | No | Value only | These are URI parameters. |
| headers | Dictionary of name/value pairs | No | Yes | This is sent as HTTP headers. The name space substitution is supported only for value. Note that assigning to the H: name space also sends headers. |
| override_headers | Boolean | No | No | If specified, only these headers and H: name space headers are sent instead of template headers. |
| body | String | No | Yes | This is applicable only for POST, PATCH, DXL_EVENT_SEND, and PUT requests as well as NOP and FUNCTION operations. It will be sent as the body of the request. Note that name space substitution is supported. |
| body_list | List of strings | No | Yes | This is an alternative to the body. If specified, the strings in the list will be joined before sending it. Any leading or trailing whitespace is removed. This is applicable to FUNCTION operation. |
| no_connection_debug | Boolean | No | No | The valid value is True or False. If this is set to True even if the endpoint is set to a Debug level logging, only the body, headers, and cookies for the corresponding step will NOT be output to the debug log. Only explicit DEBUG calls will be displayed. This is generally used in login templates to avoid usernames and passwords from being logged to the log files in plain text. |
| variable_ops | List of VARIABLEOP structs | No | No | For more information, see VARIABLEOP Struct below*.* |
| serializations | List of SERIALIZE structs | No | No | For more information, see SERIALIZE Struct below. |
| comment | String | No | No | Adds information about the steps. |
| wapi | String | No | No | The WAPI version. When this is set, the username and password (auth username and auth password) specified for the endpoint are ignored for WAPI related steps only. Other steps still use the configured auth username and auth password. All WAPI requests are sent to the Grid Master IP. The path of the requests is */wapi/[version]*/ with the appended path as specified in the step. The override path option as well as any path configured in the session management template will have no effect. |
| wapi_quoting | ENUM | No | No | The valid value is one of the following: JSON or XML. If this is not specified, it is set to JSON. The default is JSON. JSON and XML parsing performs as usual for WAPI. |
| dxl_topic | String | No | Path only | The DXL topic that is used to send data by DXL.   **Note**: This variable is applicable only for the DXL templates. |
