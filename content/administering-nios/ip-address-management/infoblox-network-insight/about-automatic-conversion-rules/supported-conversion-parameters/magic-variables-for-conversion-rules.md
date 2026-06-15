---
title: "Magic Variables for Conversion Rules"
source: "/space/nios90/1462436588"
pageId: "1462436588"
---
Some of the functions or predicates use the following magic variables to calculate the matching results.

| **Name** | **Example** | **Description** |
| --- | --- | --- |
| *ip_address* | ${ip_address} | The IP address. Used in is_ipv4, is_ipv6 predicates. |
| *mgmt_ip_address* | ${mgmt_ip_address} | The management IP address. Used in is_interface predicate. |
