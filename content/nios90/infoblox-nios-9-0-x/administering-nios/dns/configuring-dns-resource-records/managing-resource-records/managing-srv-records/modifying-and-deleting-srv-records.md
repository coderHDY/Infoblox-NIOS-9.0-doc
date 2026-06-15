---
title: "Modifying and Deleting SRV Records"
source: "/space/nios90/1423081749"
pageId: "1423081749"
---
To modify an SRV record, perform the following steps:

- In the **General** tab, the **Display** **input** **as** field displays the format in which the SRV record was configured. For RFC 2782 format, the appliance matches the *{*}service.*protocol.name* format and displays the corresponding information in the Service and Protocol fields. If the appliance cannot match the service and protocol, it displays the entire name in the Domain field. For Free format, the entire name is displayed in the Domain field.

> **warning**
>
> ### Note
> 
> The appliance does not match the service and protocol names to exactly how they appear in the drop-down lists. It only checks whether the first two parts of the names start with an underscore. If the first two parts do not start with an underscore, the appliance assumes it is a free format. For example, _abc._xyz.name is considered as RFC 2782 format even though _abc is not in the **Service** drop-down list, and _xyz is not in the **Protocol** drop-down list. Grid Manger displays _abc in the **Service** field and _xyz in the **Protocol** field. On the other hand, "abc.xyz.name" is considered as a free format because the first two parts do not start with underscores, and Grid Manager displays this in its entirety in the **Domain** field.

You can also enter or edit information in the **TTL**, **Extensible Attributes,** and **Permissions** tabs. For information on modifying and deleting resource records, see Modifying, Disabling, and Deleting Host and Resource Records below.
