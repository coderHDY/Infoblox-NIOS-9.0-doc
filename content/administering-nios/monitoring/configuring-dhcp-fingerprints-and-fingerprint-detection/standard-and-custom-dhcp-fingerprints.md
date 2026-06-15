---
title: "Standard and Custom DHCP Fingerprints"
source: "/space/nios90/380109711"
pageId: "380109711"
---
Standard DHCP fingerprints are automatically installed on the appliance when you first set it up or after you have completed an upgrade from previous NIOS releases to the latest NIOS release. Note that new DHCP fingerprints are added to the appliance during a major NIOS upgrade. For more information about upgrades, see *[Upgrading NIOS](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Upgrading%20NIOS&linkCreation=true&fromPageId=380109711)*.

> **warning**
>
> **Note**
> 
> When you upgrade, DHCP fingerprint detection is disabled during the upgrade. You must enable it if you want the appliance to use DHCP fingerprint detection. For information, see *[Enabling and Disabling DHCP Fingerprint Detection](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270341)*.

You can configure custom DHCP fingerprints for devices whose DHCP fingerprints are not captured in the standard DHCP fingerprints. For information about how to add custom DHCP fingerprints, see as described in *[Adding New DHCP Fingerprints](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760677)*.  
Both standard and custom DHCP fingerprints are cached in memory for matching purposes. Depending on the information provided in a DHCP fingerprint, the appliance first matches the option number sequence sent in the DHCP REQUEST message. If option 55 is not included in the request or if there is no match from the cached DHCP fingerprints, the appliance then tries to match the vendor ID in option 60. When there is an option number sequence match, the appliance displays the name of the DHCP fingerprint in Grid Manager. If there is no option number sequence match but there is a vendor ID match, the appliance displays the vendor ID. For information about how to view fingerprint information, see as described in *[Viewing DHCP Fingerprint Information](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280760677)*.   
You can also create IPv4 and IPv6 DHCP fingerprint filters and then apply them as class filters to specific IPv4 and IPv6 DHCP ranges and range templates. For information about how to configure and use DHCP fingerprint filters, see *[Configuring DHCP Fingerprint Filters](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663241)*.

# Administrative Permissions

DHCP fingerprint detection is enabled by default for new installations. For upgrades, you must enable this feature after the upgrade is completed. For information, see *[Enabling and Disabling DHCP Fingerprint Detection](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270341)*. No special licenses are required for this feature.  
Superusers can add, modify, and delete DHCP fingerprints and DHCP fingerprint filters. Limited-access users with Read/Write permission to DHCP fingerprints can add, modify, and delete DHCP fingerprints while those who have Read-only permission can only view information in the **Data** **Management** tab -> **DHCP** tab -> **Fingerprints** tab. For information about administrative permissions, see *[About Administrative Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.
