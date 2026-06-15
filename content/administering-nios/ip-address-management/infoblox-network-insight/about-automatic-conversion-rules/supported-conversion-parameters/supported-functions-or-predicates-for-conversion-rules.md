---
title: "Supported Functions or Predicates for Conversion Rules"
source: "/space/nios90/1462338340"
pageId: "1462338340"
---
Predicates accept either none or one argument. Depending on the predicate, it could accept both variables and strings or only one of them. The predicate can be compared only to boolean value: true or false.

| **Name** | **Argument Type** | **Example** | **Description** |
| --- | --- | --- | --- |
| is_interface | N/A | <sup>${is_interface} == true</sup> | Check discovered data in an interface. It validates the mgmt_ip_address variable. |
| is_ipv4 | N/A | <sup>${is_ipv4} == true</sup> | Check to see if the variable ip_address is an IPv4 address. |
| is_ipv6 | N/A | <sup>${is_ipv6} == false</sup> | Check to see if the variable ip_address is an IPv6 address. |
| is_belongs_to | string | <sup>${ip_belongs_to("10.0.0.0/8")} == false</sup> | Check to see if the ip_address variable belongs to the given IPv4 or IPv6 network range. |
| is_fqdn | variable | <sup>${is_fqdn(${discovered_name})} == true</sup> | Check to see if the given variable is an FQDN. |
