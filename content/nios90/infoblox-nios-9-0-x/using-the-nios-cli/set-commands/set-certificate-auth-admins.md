---
title: "set certificate_auth_admins"
source: "/space/nios90/280855894"
pageId: "280855894"
---
Use the `set certificate_auth_admins` command to disable the certificate authentication service and allow users to log in without validation. Note that when you disable the certificate authentication service, the appliance terminates administrative sessions for all admin users.

# Syntax

`set certificate_auth_admins disable username`

| **Argument** | **Description** |
| --- | --- |
| username | Disables certificate authentication service and allows users to log in without validation. |

# Examples

`Infoblox &gt; ``set`` ``certificate_auth_admins`` ``disable`` ``admin`  
` Certificate authentication for 'admin' was disabled.`
