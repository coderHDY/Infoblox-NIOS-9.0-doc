---
title: "Licensing  Requirements"
source: "/space/nios90/280791646"
pageId: "280791646"
---
You can install a valid Reporting license on a supported Trinzic Reporting platform and configure it as a reporting member solely for reporting purposes. You cannot add licenses to run other services, such as DNS and DHCP, on the reporting member. For information about Infoblox platforms that support reporting, see *[Configuring Reporting Clustering](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)*.  
Infoblox offers perpetual and subscription licensing programs to meet your business needs. You must obtain a new replacement license from Infoblox if you want to transfer an existing license to another member.

# Perpetual Licensing

A perpetual license is appliance-specific, meaning you can install only one perpetual license on each reporting appliance. There is no expiration date for this license type and you can use the Infoblox Reporting service for the lifetime of the appliance. However, you cannot install a perpetual license on an appliance that already has a valid DNS, DHCP, Microsoft Management, Query Redirection, or Multi-Grid Management license installed. You also cannot join a reporting member that has a perpetual license to a Grid that has a subscription license installed. A subscription license is a Grid-wide license and is not appliance-specific. Reporting members that have perpetual licenses can join a Grid that does not have a subscription license. For information about subscription licenses, see Subscription Licensing below.

> **warning**
>
> **Note**
> 
> All reporting appliances come with a 500 MB trial license. You can use the set temp_license CLI command to install the trial license. Available indexing capacity for a perpetual license: 1, 2, 5, 10 and 20 GB.

If you plan to configure reporting clustering, note that the overall indexing capacity for a reporting cluster increases based on the total licensing capacity for all reporting members. For example, if your Grid has three reporting members with 2 GB licensing capacity each, the overall cluster indexing capacity for the cluster becomes 6 GB. However, the stacking indexing capacity does not apply to trial licenses. In other words, if the three reporting members in your Grid all have trial licenses, the total cluster indexing capacity remains at 500 MB. For information about reporting clustering, see *[About Reporting Clustering](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758629)*.  
Note that you cannot install a perpetual reporting license on a Grid that has unrestricted reporting VMs as Grid members and vice versa. However, you can install a subscription license on a Grid that has unrestricted reporting VMs as Grid members. Unrestricted reporting VMs are reporting appliances for which you can arbitrarily configure CPU, memory, and disk size. You can arbitrarily configure CPU, memory, and disk size on IB-V5005 appliance.

# Subscription Licensing

A subscription license is a Grid-wide license that you install on the Grid Master, and it is not appliance-specific. A subscription license can either be permanent or have an expiration date and Grid Manager (the Infoblox GUI) displays a 90-day and 30-day warning prior to the actual expiration date. The effective start date for a subscription license starts on the day you generate the license. Note that a reporting member that has a perpetual license is not allowed to join the Grid that has a subscription license.  
In a dynamic license pool, expiration warnings are based upon the expiration dates of the sub pools. When any licenses in a sub pool expire, the total available licenses for a pool drops accordingly. On the other hand, a perpetual static license allocated to an appliance does not expire. The appliance continues to run the feature for the lifetime of that appliance. For more information about Managing Grid-wide Licenses, see *[Managing Licenses in NIOS 9.0.0](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280667194)*.

> **warning**
>
> **Note**
> 
> Available indexing capacity for a subscription license: 1, 2, 5, 10, 20, 50, 100, 200, and 500 GB. Contact your Infoblox representative for pricing and availability information.

# About License Violations

License violations occur when the reporting appliance exceeds the maximum allowed daily volume or when the indexed data type is not allowed for the license type. There might be an impact on the reporting service performance if violations occur. License violation is reported in the **Reporting** tab of Grid Manager. During the license violation period, the reporting server continues to index data but the search function will cease to be operational. This means that the **Reporting** tab is available with the following warning message displayed: "Reporting Service is unavailable." You can apply a **Reset** license to remove the violations. Contact Infoblox Technical Support to obtain a **Reporting** **Reset** license.  
Note the following behavior for such violations:

- NIOS continues to index data; however, you will not be able to use the search feature.
- You can use the reporting search when the number of violations in the previous 30 days is within the limit. To obtain valid licenses, contact your Infoblox representative or Infoblox Technical Support.
- If there are five consecutive violations in five consecutive days, then the search feature is disabled for the next 25 days until a **Reset** license is installed. If necessary, contact Infoblox Technical Support to obtain a **Reporting****Reset** license so you can reset the current license violations.
- During a license violation, summary indexing does not work and reports that use the summary index will not display output. For information about reports that use the summary index, see *[Reporting Data Model](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400867)*.
