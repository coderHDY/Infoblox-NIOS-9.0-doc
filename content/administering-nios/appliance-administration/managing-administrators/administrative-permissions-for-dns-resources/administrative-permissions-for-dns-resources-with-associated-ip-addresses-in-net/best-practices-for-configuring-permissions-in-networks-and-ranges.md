---
title: "Best Practices for Configuring Permissions in Networks and Ranges"
source: "/space/nios90/1483079821"
pageId: "1483079821"
---
Before using permissions for DNS resources in networks and ranges, consider the following:

- You can enable and disable these permissions using the set dns_perm_for_nw_range CLI command. When you disable permissions after you have enabled and defined them, the appliance retains the permissions in an inactive mode. Inactive permissions are not verified nor displayed in Grid Manager. When you re-enable the permissions, the appliance activates them and displays them in Grid Manager. You can also use the show dns_perm_for_nw_range CLI command to verify the status of new permissions.

Note that permissions for fixed addresses and reservations are not controlled by the CLI command; they are always enabled.  
You can also enable and disable permissions for DNS Resources in Networks and Ranges through Grid Manager, as described in [*Enabling Permissions for DNS Resources in Networks and Ranges*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/414711908/Administrative+Permissions+for+DNS+Resources+with+Associated+IP+addresses+in+Networks+and+Ranges#Enabling-Permissions-for-DNS-Resources-in-Networks-and-Ranges) below.

- When you switch between enabling and disabling these permissions, changes take effect immediately and a service restart in Grid Manager is not required. However, you may need to refresh Grid Manager to view the changes.
- You can assign these permissions when DNS, DHCP, or Microsoft Management licenses are installed. If you remove all of these licenses after you have configured relevant permissions for supported resources, the appliance retains the permissions, but you will not be able to see the permissions nor configure them.
