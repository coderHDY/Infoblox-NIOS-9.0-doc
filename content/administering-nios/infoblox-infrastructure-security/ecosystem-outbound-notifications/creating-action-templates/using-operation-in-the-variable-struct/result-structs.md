---
title: "RESULT Structs"
source: "/space/nios90/1375568873"
pageId: "1375568873"
---
Note the following:

- **codes** and **regex** are ignored if the operation is SLEEP or NOP.
- At least one of the following is required: **next**, **stop**, or **error**.

| **Variable** | **Type** | **Mandatory** | **Sub** | **Description** |
| --- | --- | --- | --- | --- |
| codes | string separated by commas | No | No | The http return code. |
| regex | REGEX | No | No | If specified, REGEX is matched against the returned body. |
| next | id | No | No | The step to execute the next template if the code (and REGEX, if  specified) match. But if the next template is already executed once, the  appliance displays an error. |
| stop | Boolean | No | No | If set, the execution of the script is stopped. Note that next, error, and stop are mutually exclusive. |
|   error |   Boolean |   No |   No | If set, the execution of the script is stopped and then rerun with an error status if the retry_template is not set to 0. Note that next, error, and stop are mutually exclusive. |
