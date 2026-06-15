---
title: "Managing RIR Attributes"
source: "/space/nios90/280666911"
pageId: "280666911"
---
Before you can successfully submit RIR data updates, you must ensure that all RIR required attributes contain valid values that can be mapped to data in the RIPE database. The appliance does not validate data with the RIPE database before you submit your updates. The appliance also does not synchronize data from the database.

> **warning**
>
> ### Note
> 
> RIPE does not support UTF-8 data in the **Description** and **Remarks** fields. After an upgrade, the NIOS appliance keeps the UTF-8 data in these fields. However, if you want to modify these fields after the upgrade, you must remove the UTF-8 data before you can save the changes.

When you enter a value for the following RIR attributes that cannot be mapped to a valid reference in the RIPE database, updates to the RIR database will fail. However, these values will still be displayed in the IPv4 or IPv6 network or network container panels of Grid Manager.

- RIPE Routes Maintainer
- RIPE Lower Level Maintainer
- RIPE Reverse Domain Maintainer
- RIPE Admin Contact
- RIPE Technical Contact
- RIPE Computer Security Incident Response Team

You can add multiple values for certain RIR attributes. When you add multiple values of the same attribute, the appliance groups the values in the order they are listed in the attribute table. You can also reorder the RIR attributes using the up and down arrows in the attribute tables.
