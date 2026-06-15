---
title: "Creating Session Management Templates"
source: "/space/nios90/280759926"
pageId: "280759926"
---
You can use a session management template to specify settings that will be applied to an endpoint. You can define settings such as the timeout value after which the outbound requests are aborted. This template can also contain additional child templates that can be referenced by the configuration. However, you cannot reference other templates in the system from the session management template.  
Once you upload a session management template to the Grid, the configuration in the template automatically applies to the specified endpoint, if the connection to the endpoint has been established and if the template is assigned to the endpoint.

The table below lists the supported variables you can use in a session management template.

> **warning**
>
> **Note**
> 
> Changes made to the variables of the template through Grid Manager override the variables in the template. Although the latest template version is 3.0, template versions 2.0 and 1.0 continue to work with their respective syntax. Session management templates do not support instance variables. To access online resources about this feature, including training videos and sample outbound templates for supported ecosystem partners, visit the Infoblox Community Site at *[https://community.infoblox.com](https://community.infoblox.com/)*.



The following are the session management templates that you can create:

## Session Management Template Variables

*Session* *Management* *Template* *Variables*

| **Variable** | **Type** | **Mandatory** | **Description** |
| --- | --- | --- | --- |
| version | Must be 6.0 | Yes | The version number of the template. Note that 5.0 is the latest version. The appliance still fully supports the previous schema version. |
| type | Must be REST_ENDPOINT   for REST API endpoints   Must be DXL_ENDPOINT   for DXL endpoints  Must be SYSLOG_EVENT for Syslog endpoints  Must be PXGRID_ENDPOINT for Cisco ISE Endpoints | Yes | The template type. |
| name | String | Yes | The template name. |
| vendor_identifier | String | Yes | The vendor identifier for an endpoint. |
| comment | String | No | Additional information. |
| path | String | No | Path string to append to what the user enters in the GUI. |
| override_path | Boolean | No | If present, the path above replaces the path the user enters in the GUI. |
| timeout | Integer | No | The timeout value in seconds. The minimum is 1 and the maximum is 3600. The default is 30. |
| keepalive | Boolean | No | The value can be **True **or **False**. The default is **False**. |
| keepalive_timeout | Integer | No | The keepalive timeout value in seconds. The connection is closed after this timeout. The minimum is 1 and the maximum is 300. The default is 5. |
| dxl_keepalive_timeout | Integer | No | The keepalive timeout value in seconds with a connected DXL broker. This controls the rate at which the client will send ping   messages to the broker if there is no exchange of other messages. The minimum is 1 and the maximum is 3600. The default is 30.   **Note**: This field is applicable only for the DXL templates. |
| dxl_topic | String | No | The DXL topic that is used to send data by DXL.   **Note**: This variable is applicable only for the DXL templates |
| retry | Integer | No | The number of attempts to try to connect to the endpoint before considering the connection a failure (this covers only timeout/network errors). The default value is 2. |
| retry_template | Integer | No | The number of attempts the appliance retries the full template if it returns a failure (this covers a template returning anything but 200). The default value is 0 (no retry). |
| rate_limit | Float | No | The maximum number of messages (per second) that are sent to an endpoint. The default value is 0 (no rate limiting). You can enter a value less than 1.0 to have lower rate limits. For example, if you set the value to 0.5, the appliance sends less than 1 message in every 2 seconds. |
| rate_limit_requests | Integer | No | Use this along with `rate_limit_interval` to define the absolute number of requests for rate limiting. For example, if you set this to 10 and `rate_limit_interval` to 5000 milliseconds, no further requests are sent until the number of requests falls below 10 in 5000 milliseconds. So if 3 requests are sent at 0 second and 7 requests are sent at the 3rd second, no requests will be sent until the 5th second, where 3 requests are allowed for another 3 seconds. The default is 0 = no rate limiting. You can set this to an integer between 0 and 267840000000. |
| rate_limit_interval | Integer (in milliseconds) | No | Use this along with `rate_limit_requests` to define the rate limiting interval . The default is 0 = no rate limiting. You can set this to an integer between 0 and 2678400000 milliseconds. |
| rate_limit_reset | Integer (in epoch time) | No | Use this together with rate_limit_requests and rate_limit_interval to reset the epoch time for rate limiting. The default is 0 = not resetting the epoch time for rate limiting. You can set this to an integer between 0 and 4102437600 milliseconds.  Example: If `rate_limit_requests = 10, rate_limit_interval = 5` seconds, and `rate_limit_reset = 3 p.m. on 10 January 2017` (set in epoch time), 10 requests can be sent within 5 seconds after the reset time.  For instance, 3 messages are sent at the 1st second and 7 messages sent at the 3rd second and no more messages can be sent in the next 2 seconds, which is within 5 seconds after 3 p.m. on 10 January 2017. |
| endpoint_variables | List of VARIABLE structs | No | If specified these will be accessible via the S: namespace in templates. |
| inactivity_interval | Integer (in milliseconds) | No | A logout request is sent after this time interval, provided no other requests have occurred during this time period. The default is 0 = “disable.” You can set this to an integer between 0 and 2^63-1 milliseconds. |
| login_template | String | No | The template that requires user login if there is no active session currently running for the endpoint. Only templates with `event_type` set to SESSION are supported for this. You must include the template name in the string. Ensure that you upload the login template if you plan to use this variable in the session management template. |
| logout_any_condition | Boolean | No | Specifies whether a logout request is sent, depending on whether `logout_status_code` or `logout_regexp` are set. The value can be **True** or **False**. The default is **False**. If this is set to **True**, a logout request is triggered if either `logout_status_code` or `logout_regexp` is set. If this is set to **False**, both `logout_status_code` and `logout_regexp` must be set. |
| logout_regexp | String | No | Any response returned by the endpoint that matches the regular expression in this field will trigger a logout request. |
| logout_status_code | Integer | No | The HTTPS response status code used for the provisional response will trigger a logout request. The default is 0 = “disable.” Valid values are between 0 and 599. |
| logout_template | String | No | The template that is being executed after steps are executed or after various session duration constraints are met. You must include the template name in the string. Only templates with `event_type` set to SESSION are supported for this. Ensure that you upload the logout template if you plan to use this variable in the session management template. |
| requests_per_session | Integer | No | The number of requests that are sent before a logout request is sent. The default is 0 = “disable.” You can set this to an integer between 0 and 2^63-1. |
| logout_only_at_template_end | Boolean | No | The value can be **True** or **False**. The default is **False**. If this is set to **True**, a logout request is sent only after the execution of the template has been completed to ensure that all template requests pertaining to a session are executed if that is required by the API. Therefore, it is possible to set `requests_per_session` to 1 and have each template call executed in its own session regardless of the number of requests it contains. |
| session_cooldown | Integer (in milliseconds) | No | When this is set, a login request will be sent only after the amount of time set for this has been elapsed after a logout. The default is 0 = “disable.” You can set this to an integer between 0 and 2^63-1 milliseconds. |
| session_duration | Integer (in milliseconds) | No | The time interval after which a logout request is sent unconditionally after a login. For example, if you sent this to 150 milliseconds, after a login, a logout will be sent after 150 milliseconds whether there is current traffic or not. The default is 0 = “disable.” You can set this to an integer between 0 and 2^63-1 milliseconds. |
| wapi_rate_limit | Float | No | Independent of the endpoint rate limiting, use this for persistent WAPI requests only. The maximum number of messages (per second) that are sent to an endpoint. The default value is 0 (no rate limiting). You can enter a value less than 1.0 to have lower rate limits. For example, if you set the value to 0.5, the appliance sends less than 1 message in every 2 seconds. The default is 0 = “disable.” You can set this to an integer between 0 and 100000. |
| wapi_rate_limit_requests | Integer | No | Independent of the endpoint rate limiting, use this for persistent WAPI requests only. Use this along with the `wapi_rate_limit_interval` field to define the absolute number of requests for rate limiting . For example, if you set this to 10 and `rate_limit_interval` to 5000 milliseconds, no further requests are sent until the number of requests falls below 10 in 5000 milliseconds. So if 3 requests were sent at 0 second and 7 requests were sent at the 3rd second, no requests will be sent until the 5th second, where 3 requests are allowed for another 3 seconds. The default is 0 = “disable.” You can set this to an integer between 0 and 267840000000. |
| wapi_rate_limit_interval | Integer (in milliseconds) | No | Independent of the endpoint rate limiting, use this for persistent WAPI requests only. Use this along with the `wapi_rate_limit_requests` field to define the rate limiting interval . The default is 0 = no rate limiting. The default is 0 = “disable.” You can set this to an integer between 0 and 2678400000 milliseconds. |
| wapi_rate_limit_reset | Integer (epoch time) | No | Independent of the endpoint rate limiting, use this for persistent WAPI requests only. Use this to reset the epoch time for rate limiting. The default is 0 = not reseting the epoch time for rate limiting. You can set this to an integer between 0 and 4102437600 milliseconds. |
