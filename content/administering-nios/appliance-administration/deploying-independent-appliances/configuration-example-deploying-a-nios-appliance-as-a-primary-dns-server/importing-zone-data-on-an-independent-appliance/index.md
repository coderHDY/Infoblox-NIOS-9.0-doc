---
title: "Importing Zone Data on an Independent Appliance"
source: "/space/nios90/1432819088"
pageId: "1432819088"
---
You can import zone data from a legacy server or manually enter it. When you import both forward-mapping and reverse-mapping zone data, the NIOS appliance automatically creates Infoblox host records if corresponding A and PTR records are present. You can then modify the host records to add MAC addresses. However, if you only import forward-mapping zone data, the NIOS appliance cannot create host records from just the A records. In that case, because you cannot later convert A records to host records, it is more efficient to create the [corpxyz.com](http://corpxyz.com) zone, and define host records manually.

Infoblox host records are data models that represent IP devices within the Infoblox semantic database. The NIOS appliance uses a host object to define A, PTR, and CNAME resource records in a single object, as well as a DHCP fixed address if you include a MAC address in the host object definition. The host object prevents costly errors because you only maintain a single object for multiple DNS records and a DHCP fixed address. Therefore, it is advantageous to use host records instead of separate A, PTR, and CNAME records.

> **warning**
>
> ### Note
> 
> If you only have forward-mapping zones on your legacy servers and you want to add reverse-mapping zones, automatically convert A records to host records in the imported forward-mapping zones, and create reverse host records in corresponding reverse-mapping zones, create the reverse-mapping zones on the NIOS appliance and then import the forward-mapping zones data. The NIOS appliance automatically converts the imported A records to host records in the forward-mapping zones and creates reverse host records in the reverse-mapping zones.

You also have the option of using the *Data Import Wizard* for loading DNS and DHCP data. For large data sets, this option is an efficient approach. To download the *Data Import Wizard*, visit [  ](http://www.infoblox.com/import/)[*www.infoblox.com/import/*](http://www.infoblox.com/import/).

In this example, when you create the [corpxyz.com](http://corpxyz.com) forward-mapping zone, you import zone data for the existing [corpxyz.com](http://corpxyz.com) zone from the legacy server at 10.1.5.3. When you create the 1.1.1.0/24 reverse-mapping zone, you also import the reverse-mapping zone records from the legacy server. After the appliance has both the forward- and reverse-mapping zone data, it converts the A and PTR records to Infoblox host records.
