---
title: "Joining Pre-Provisioned Members to a Grid"
source: "/space/nios90/280407076"
pageId: "280407076"
---
After you pre-provision Grid members as described in [*Pre-Provisioning NIOS and vNIOS Appliances*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/pre-provisioning-nios-and-vnios-appliances), you can join the pre-provisioned members to the Grid either manually by using CLI commands or automatically by using cloud-init in case of vNIOS members.

To join pre-provisioned members to a Grid, review the [*Guidelines for Joining Pre-Provisioned Members to the Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/pre-provisioning-nios-and-vnios-appliances) and complete the following steps:

1. Obtain and install the licenses that you specified when pre-provisioning the member. For more information about licenses, see [Managing Licenses in NIOS 9.0.0](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0) and [*Managing Licenses in NIOS 9.0.1 and Later*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later).
2. Generate a token required for the Grid member to authenticate itself and join the Grid as defined in the [*Generating Tokens for Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/pre-provisioning-nios-and-vnios-appliances/joining-pre-provisioned-members-to-a-grid) section.
3. Join the pre-provisioned member to a Grid as follows:
   
   1. For NIOS and vNIOS members, join the member by using the CLI commands defined in the [*Using CLI Commands to Join Grid Members*](/nios90/by-id/1366983471) section.
   2. For vNIOS members, use cloud-init to automatically join the member to the Grid as defined in the [*Using Cloud-Init to Join Pre-Provisioned vNIOS Members*](/nios90/by-id/1366983504) section.
4. Verify that the Grid member has successfully joined the Grid as described in [*Viewing*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance)[*Status*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance).

NIOS also includes a full set of APIs for pre-provisioning, deploying, and de-provisioning vNIOS appliances, making it simple to add or remove DNS or DHCP capacity on-demand to meet changing infrastructure requirements, which is critical for realizing the benefits of dynamic cloud environments.
