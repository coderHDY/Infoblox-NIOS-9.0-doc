---
title: "Supported Functions"
source: "/space/nios90/1462338305"
pageId: "1462338305"
---
| **Name** | **Example** | **Result** | **Description** |
| --- | --- | --- | --- |
| *dashed* | <sup>${dashed(${ip_address})}-vm.example.com</sup> | [1-2-3-4-vm.example.com](http://1-2-3-4-vm.example.com) / 1.2.3.4 | Replaces the dot "." and colon ":" symbols with the hyphen symbol "-". |
| *reversed* | <sup>${reversed(${ip_address})}-vm.example.com</sup> | [4.3.2.1-vm.example.com](http://4.3.2.1-vm.example.com) / 1.2.3.4 | Reverts the octets of the IP address. IPv6 address is converted to the dotted representation. |
| *underscored* | <sup>${underscored(${ip_address})}-vm.example.com</sup> | 1_2_3_4-vm.example.com / 1.2.3.4 | Replaces the dot "." and colon ":" symbols with the underscore symbol "_". |
