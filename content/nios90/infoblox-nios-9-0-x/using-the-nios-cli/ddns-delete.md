---
title: "ddns_delete"
source: "/space/nios90/280790300"
pageId: "280790300"
---
The **ddns_delete** command sends DDNS updates to the appliance when you delete existing resource records. To use this command, ensure that you have properly configured the appliance for DDNS updates. For information, refer to the *Infoblox* *NIOS* *Administrator* *Guide*. To delete a record that contains IDN, you must enter the domain name in punycode.

# Syntax

`ddns_delete &lt;``domain-name``&gt; [``type``[``keyname:secret``]``]`

| **Argument** | **Description** |
| --- | --- |
| `domain-name`` ` | The FQDN of the resource record being deleted. For example, if the name of the record is `dns1 `and the forward-mapping zone name is `corp100.com`, the FQDN is `dns1.corp100.com`.  For an IDN, use the punycode representation of the IDN. For example, if the name of the record is 域 and the forward‐mapping zone name is corp100.com, the FQDN is xn--cjs.corp100.com. |
| `type`` ` | The record type of the resource record. For example, enter A for an A record and PTR for a PTR record. This is optional. |
| `[``keyname:secret``]`` ` | The TSIG key name and the secret for sending DDNS updates. You must enter the TSIG key name and shared secret if the DNS zone to which the record belongs is configured with a TSIG key. |

# Example

Infoblox &gt; **ddns_delete** **dns1.corp100.com**
