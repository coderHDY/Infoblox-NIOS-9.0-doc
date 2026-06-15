---
title: "set check_auth_ns"
source: "/space/nios90/280757390"
pageId: "280757390"
---
The `set check_auth_ns` command enables/disables new functionality of checking NS RRset in a response's authority section before overriding delegation NS RRset in recursive cache.

# Syntax

`set check_auth_ns &lt;true|false&gt;`

| **Argument ** | **Description** |
| --- | --- |
| `true` | Enables new functionality of checking NS RRset in a response's authority section. |
| `false` | Disables new functionality of checking NS RRset in a response's authority section. |

# Examples

`Infoblox &gt; ``set check_auth_ns true`
