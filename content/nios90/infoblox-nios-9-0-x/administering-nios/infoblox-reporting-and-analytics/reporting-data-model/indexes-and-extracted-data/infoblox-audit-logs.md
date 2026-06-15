---
title: "Infoblox Audit Logs"
source: "/space/nios90/1363608679"
pageId: "1363608679"
---
Most of the fields in this index are extracted directly from the **audit.log** file. Some of them are mentioned in the table below:

| **Extracted Field Name** | **Description of the field** | **Values/Range** | **Source of Data** |
| --- | --- | --- | --- |
| ACTION | Indicates the action taken | String. Example: Called | Infoblox audit logs |
| ADMIN | Indicates the name of the admin | String. Example: root | Infoblox audit logs |
| EA | Common Extracted Fields |  |  |
| EXEC_STATUS | Indicates the execution status | String. Example: Pending Approval | Infoblox audit logs |
| HWTYPE | Common Extracted Fields |  |  |
| MAX_DB_OBJECTS | Common Extracted Fields |  |  |
| MAX_DHCP_LPS | Common Extracted Fields |  |  |
| MAX_DNS_QPS | Common Extracted Fields |  |  |
| MEMBER_IP | Common Extracted Fields |  |  |
| MESSAGE | Indicates the message | String. Example: to=Serial   040Console apparently_via=Direct auth=Local group=.admin-group | Infoblox audit logs |
| OBJECT_NAME | Indicates the object name | String. Example: RequestRestartServiceStatus | Infoblox audit logs |
| OBJECT_TYPE | Indicates the object type | String. Example: Shared AAAA Record | Infoblox audit logs |
| TIMESTAMP | Indicates the timestamp | Timestamp. Example: 2017-01-31 01:57:05 | Infoblox audit logs |
| action | Indicates the action | Example: update, insert | Infoblox audit logs |
| address |  | Example: 10.0.0.0 | Infoblox audit logs |
| auth |  | Example: Local | Infoblox audit logs |
| cidr |  | Example: 8 | Infoblox audit logs |
| code |  | Example: created | Infoblox audit logs |
| comment |  | String | Infoblox audit logs |
| date_hour | Splunk Default field |  |  |
| date_mday | Splunk Default field. |  |  |
| date_minute | Splunk Default field |  |  |
| date_month | Splunk Default field |  |  |
| date_second | Splunk Default field |  |  |
| date_wday | Splunk Default field |  |  |
| date_year | Splunk Default field |  |  |
| date_zone | Splunk Default field |  |  |
| eventtype | Splunk Default field |  |  |
| group |  | Example: admin-group | Infoblox audit logs |
| host | Splunk Default field |  |  |
| index | Splunk Default field |  |  |
| linecount | Splunk Default field |  |  |
| member |  | Example: Member:infoblox.localdomain | Infoblox audit logs |
| network_view |  | Example: default | Infoblox audit logs |
| punct | Splunk Default field |  |  |
| source | Splunk Default field |  |  |
| sourcetype | Splunk Default field |  |  |
| splunk_server | Splunk Default field |  |  |
| splunk_server_group | Splunk Default field |  |  |
| user |  | Example: admin | Infoblox audit logs |
| Response_Time |  | Example: 0.1659 | Infoblox audit logs |
| URI |  | Example:  v2.10/record:host | Infoblox audit logs |
| InData |  | Example: {'comment': 'this is my one.xyz comment', 'name': '[user.zone.com](http://user.zone.com)', 'ipv4addrs': [{'configure_for_dhcp': False, 'mac': 'aa:0:0:0:1:cc', 'ipv4addr': '1.1.1.0'}], 'view': 'default'} | Infoblox audit logs |
