---
title: "ddns_add"
source: "/space/nios90/280659189"
pageId: "280659189"
---
The **ddns_add** command sends DDNS updates to the appliance when you add new resource records. To use this command, ensure that you have properly configured the appliance for DDNS updates. For information, refer to the *Infoblox* *NIOS* *Administrator* *Guide*. To update a record that contains IDN, you must enter the domain name in punycode. The appliance retains the record in punycode and does not convert punycode to IDN.

# Syntax

`ddns_add &lt;``domain-name``&gt; &lt;``ttl``&gt; &lt;``type``&gt; &lt;``data``&gt; [``keyname:secret``]`

| **Argument** | **Description** |
| --- | --- |
| `domain-name`` ` | The FQDN of the resource record being added. For example, if the name of the record is `dns1 `and the forward-mapping zone name is `corp100.com`, the FQDN is `dns1.corp100.com`.  For an IDN, use the punycode representation of the IDN. For example, if the name of the record is 域 and the forward‐mapping zone name is `corp100.com`, the FQDN is `xn--cjs.corp100.com`. |
| `ttl`` ` | The TTL value (in seconds) of the new resource record. |
| `type`` ` | The record type of the new resource record. For example, enter A for an A record and PTR for a PTR record. |
| `data`` ` | The RDATA of the resource record. For an IDN, use the punycode representation of the IDN. For example, enter the IP address of an A record or the domain name of a PTR record. |
| `[``keyname:secret``]`` ` | The TSIG key name and the secret for sending DDNS updates. You must enter the TSIG key name and shared secret if the DNS zone to which the record belongs is configured with a TSIG key. |

# Example

`Infoblox &gt; ``ddns_add`` ``dns1.corp100.com`` ``20`` ``A`` ``10.0.0.11`
