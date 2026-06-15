---
title: "Defining MAC Address Filters"
source: "/space/nios90/280403585"
pageId: "280403585"
---
After you configure the network and DHCP ranges, you must then configure the MAC address filters and add them to the appropriate DHCP ranges. If you configured DHCP ranges for authenticated and guest users, you must configure MAC address filters for each range with an action of Allow. You must also add those filters to the quarantine range with an action of Deny, to ensure that the member does not allocate an address from the quarantine range to a host whose MAC address matches an entry in the MAC filters for the authenticated and guest DHCP ranges.  
When you create the filters, you also specify whether the MAC address entries expire. The member automatically deletes expired MAC address entries from the filter. If a client that registered earlier attempts to renew its IP address or to register after its MAC address has expired, it is redirected to the captive portal because its MAC address is no longer in the filter.  
You can run the *Captive* *Portal* wizard to automatically create the MAC address filters, as described in the next section, *[Using the Captive Portal Wizard](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/authenticated-dhcp/using-the-captive-portal-wizard)*, or you can configure each filter as described in *[Defining MAC Address Filters](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/configuring-dhcp-filters/configuring-mac-address-filters)*.
