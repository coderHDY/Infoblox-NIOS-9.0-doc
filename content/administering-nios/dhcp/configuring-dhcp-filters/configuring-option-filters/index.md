---
title: "Configuring Option Filters"
source: "/space/nios90/280403707"
pageId: "280403707"
---
You can use option filters to classify DHCP clients and decide which DHCP options each group of clients can receive. By default, regardless of the networks in which the DHCP clients reside and whether an option filter is applied to a DHCP range or range template, all DHCP clients that match the filter criteria receive the DHCP options and values you define in the filter. You can change this configuration so the appliance does not use the filter to classify DHCP clients. For information about how to configure this, see Defining Option Filters below.  
You can add DHCP options and the Hardware Operator option to an option filter. (For information about the Hardware Operator option, see DHCP Hardware Operator below.) Depending on whether the options you add to the filter are also defined at the Grid, member, network, and DHCP range levels, and whether you add the filter to the Class Filter List or Logic Filter List, the appliance either appends them to the existing options or overwrites the option values before returning them to the matching clients. For more information about how the appliance returns DHCP options, see [*Adding Filters to the Logic Filter List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).  
The appliance can filter an address request by the options (such as root-server-ip-address or user-class) of the requesting host. Depending on how you apply an option filter, the appliance can grant or deny an address request if the requesting host matches the filter criteria. You can also create complex match rules that use the AND and OR logic to further define the filter criteria. When you select match rules in Grid Manager, you can preview the rules before committing them to the filter. Grid Manager provides an expression builder that automatically builds the rules after you define them.  
To define an option filter and apply it to an address range:

1. Define an option filter based on either the predefined or custom DHCP options.
2. Apply the filter to a DHCP address range or range template in the Class Filter List or Logic Filter List. For information, see [*Applying Filters to DHCP Objects*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280270743).

After you define an option space and add options to it, you can set up option filters and define option values. For example, to handle two different client classes, you can define two option filters (vendor-class_1 and vendor-class_2) and send different option values to different clients based on the vendor-class-identifier options that you obtain from the clients.
