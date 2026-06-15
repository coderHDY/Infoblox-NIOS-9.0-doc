---
title: "Monitoring DHCP Authentication"
source: "/space/nios90/280761306"
pageId: "280761306"
---
You can monitor the status of the captive portal service, as described in [*Monitoring Services*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280662651). You can check its status in the *Infoblox* *Grid* *Status* widget and the *Member* *Status* widget on the Dashboard. For information about these widgets, see [*Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266914).  
You can also view the MAC addresses that were added to each MAC address filter, as described in [*Viewing MAC Address Filter Items*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414).

# Viewing DHCP Ranges and Filters

To view the newly created MAC address filters:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Filters** tab**.** Infoblox Grid Manager lists all the configured filters.
2. You can select a filter and view or configure its properties, such as extensible attributes.

For more information about the filters and editing their properties, see [*Managing DHCP Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414).  
To view the DHCP ranges and the newly added filters:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network* *.*
2. Select the DHCP range you want to view and click the Edit icon.
3. If the editor is in Basic mode, click **Toggle Advanced Mode**.
4. Click the **Filters** tab to view the filters.

To verify that the captive portal is the DNS server in the quarantine range:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Networks** tab -> **Networks** section -> *network.*
2. Select the quarantine DHCP range and click the Edit icon.
3. In the *DHCP* *Range* editor, click the **DHCP** tab.

The captive portal IP address is listed in the DNS Servers table.
