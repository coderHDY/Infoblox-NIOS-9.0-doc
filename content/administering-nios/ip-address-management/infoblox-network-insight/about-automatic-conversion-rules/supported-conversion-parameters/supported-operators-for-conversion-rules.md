---
title: "Supported Operators for Conversion Rules"
source: "/space/nios90/1462436611"
pageId: "1462436611"
---
Operators always result in boolean value: true or false. Therefore, you can use them only in logical expressions.

| **Name** | **Left Value (lvalue)** | **Right Value (rvalue)** | **Example** | **Description** |
| --- | --- | --- | --- | --- |
| LIKE | variable | string (regular expression in extended format) | <sup>${discovered_name} like "[vV]m-[0-9]+.devnet.org"</sup> | Evaluates as true if the lvaluevariable matches the given regular expression rvalue; otherwise false |
| == | variable | string | <sup>${ip_address} == "167.45.13.29"</sup> | Evaluates to true if the lvalue variable equals to rvalue string literal, false otherwise |
| != | variable | string | <sup>${mac_address} != "00:50:56:00:00:01"</sup> | Evaluates to true if the lvalue variable is not equal to rvalue string literal, false otherwise |
