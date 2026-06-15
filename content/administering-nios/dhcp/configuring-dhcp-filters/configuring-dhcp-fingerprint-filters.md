---
title: "Configuring DHCP Fingerprint Filters"
source: "/space/nios90/280663241"
pageId: "280663241"
---
The appliance can filter an address request by the DHCP fingerprint of a requesting client. Depending on how you apply DHCP fingerprint filters, the appliance can grant or deny the address request if the requesting client matches the filter criteria. Note that only superusers can add, modify, and delete DHCP fingerprint filters. Limited-access users cannot perform any DHCP fingerprint filter related tasks, though with the correct permissions they can apply DHCP fingerprint filters to DHCP ranges and range templates. For information about how to apply filters to DHCP ranges, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
You can define a DHCP fingerprint filter by selecting one or multiple DHCP fingerprints from the existing list of DHCP fingerprints, and then assign a grant or deny permission to the filter. You can then apply the filter to a DHCP address range, if DHCP fingerprint detection is enabled. For information about how to enable DHCP fingerprint detection, see [*Enabling and Disabling DHCP Fingerprint Detection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270341).  
Note that once you apply a DHCP fingerprint filter to an address range, you cannot disable DHCP fingerprint detection or disable individual DHCP fingerprints that have been included in the filter. You must first delete or disable the DHCP fingerprint filter that you have applied to the address range before you can disable any fingerprint related tasks. For information about how to delete a DHCP fingerprint filter, see [*Deleting Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280761414).  
On lease renewals, requesting clients must send the same DHCP fingerprint information in order for the appliance to properly grant or deny leases based on the configured DHCP fingerprint filters. For example, if a client sends option 55 in the original request but does not send the same information in the renewal request, and you have configured a DHCP fingerprint filter to grant a lease to this client, the appliance may not be able to properly grant a lease to this client.  
To apply a DHCP fingerprint filter to an address range:

1. Define a DHCP fingerprint filter. For information, see Defining DHCP Fingerprint Filters below.
2. Apply the filter to a DHCP address range or range template, and specify that if the DHCP fingerprint of a requesting host matches the filter definition, the appliance either grants or denies the address assignment. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).

Associating a DHCP fingerprint filter with a DHCP range on a DHCP member or a failover association does not require a DHCP service restart. Changes are propagated seamlessly to the the dhcpd process memory without a service restart and the dhcpd.conf file is not updated until you restart the service.

# Defining DHCP Fingerprint Filters

To define a DHCP fingerprint filter:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Filters** tab, and then expand the Toolbar and click **Add** -> **IPv4** **Fingerprint** **Filter**.  
   From any panel in the **DHCP** tab, expand the Toolbar and click **Add** -> **IPv4** **Fingerprint** **Filter**.
2. In the *Add* *IPv4* *Fingerprint* *Filter* wizard, complete the following:
   
   - **Name**: Enter a meaningful name for the filter. For example, if you want to filter address requests by a specific device class, you can name one filter "Gaming Console," another "Android Phones," and so on. The filter name must be unique among all DHCP fingerprint filters.
   - **Comment**: Enter useful information about the filter.
3. Click **Next** and then click the Add icon in the Select Fingerprints table. In the *Fingerprint* *Selector* dialog box, select the DHCP fingerprint you want to include in this filter. Click Add icon to select another DHCP fingerprint.
   
   When you select **No** **Match**, the appliance applies the filter to all requesting clients that do not send option 55 and option 60 or to clients that send values in option 55 and 60 that do not match any existing DHCP fingerprints.
4. Click **Next** to enter values for required extensible attributes or add optional extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
5. Save the configuration.
