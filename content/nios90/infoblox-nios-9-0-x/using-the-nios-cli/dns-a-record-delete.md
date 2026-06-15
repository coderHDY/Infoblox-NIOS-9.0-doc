---
title: "dns_a_record_delete"
source: "/space/nios90/280397911"
pageId: "280397911"
---
The **dns_a_record_delete** command deletes a DNS record of A record type.

# Syntax

`dns_a_record_delete &lt;dns view&gt; &lt;record name&gt; &lt;zone name&gt; &lt;ip address&gt;`

| **Argument** | **Description** |
| --- | --- |
| `&lt;dns view&gt;` | The DNS view where the target DNS A record belongs.   |
| `&lt;record name&gt;` | The name of the target DNS A record. |
| `&lt;zone name&gt;`` ` | The name of the parent zone. |
| `&lt;ip address&gt;` | The IP address of the target record. |

# Example

Infoblox &gt; **dns_a_record_delete default_view my_record.with.long.name test.com 1.2.3.4**
