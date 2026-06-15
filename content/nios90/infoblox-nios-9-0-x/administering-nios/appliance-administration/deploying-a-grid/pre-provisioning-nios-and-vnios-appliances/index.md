---
title: "Pre-Provisioning NIOS and vNIOS Appliances"
source: "/space/nios90/280765527"
pageId: "280765527"
---
Before joining a member to a Grid, you can first enable provisional licenses and make necessary configurations on the offline member, which allows DNS and DHCP data to be associated with the member prior to its deployment. Note that pre-provisioned members are treated as offline members.

There are a few guidelines to consider before you pre-provision a member. For more information about the guidelines, see [*Guidelines for Pre-Provisioning Offline Grid Members*](#PreProvision_Guidelines_for_Grid_Members).

When you add a new member to the Grid, the **Pre-Provisioning** tab is displayed in the *Grid* *Member* *Properties* editor. You can pre-provision the member by defining its hardware model and enable certain provisional licenses through the **Pre-Provisioning** tab. This tab is not displayed after the member successfully joins the Grid. Before you can make supported configurations on the pre-provisioned member, you must enable provisional licenses. For more information about these licenses and the list of supported provisional licenses, see [*About Provisional Licenses*](#ABL).

> **warning**
>
> **Note**
> 
> You must have the Enterprise and vNIOS licenses pre-provisioned in order for a vNIOS appliance to join the Grid.

Grid Manager displays licenses on the **Infoblox Grid** tab -&gt; **Licenses** tab. You can view license information for all licenses on the **Member** tab.

To pre-provision an offline Grid member and join it to the Grid at a later time, complete the following steps:

1. Review the [*Guidelines for Pre-provisioning Offline Members*](#PreProvision_Guidelines_for_Grid_Members).
2. Add an offline Grid member or an HA pair to the Grid as described in [*Adding a Single Member*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members/adding-a-single-member) or [*Adding an HA Member*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members/adding-an-ha-member).
3. Pre-provision the offline member you just created as described in the [*Configuring Pre-Provisioned Members*](#Configuring_PerProvisioned_Members) section.
4. Review the [*Guidelines for Joining Pre-Provisioned Members to the Grid*](#Guidelines_to_Join_PreProvisioned-Members) and join the pre-provisioned member to the Grid as described in [*Joining Pre-Provisioned Members to a Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/pre-provisioning-nios-and-vnios-appliances/joining-pre-provisioned-members-to-a-grid).
5. Verify that the Grid member has successfully joined the Grid as described in [*Viewing*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance)[*Status*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance).

# Guidelines for Pre-provisioning Offline Grid Members

Before you pre-provision a Grid member, consider the following:

- A pre-provisioned Grid member is an offline member. When you upgrade a Grid that has a pre-provisioned member, the upgrade behaves the same way as it does when you upgrade the Grid that has an offline member. Note that you cannot pre-provision a member or update its settings during a scheduled upgrade.
- You cannot change the pre-provisioned member configuration after you save it. To change the configuration, you must first delete the member and pre-provision it again. If you want to delete certain provisional licenses or change the hardware model for the pre-provisioned member, you must also first delete the existing member and define a new one. For information about deleting a member, see [*Removing a Grid Member*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid)
- When you assign a network, zone, or IPv4 DHCP failover association to a pre-provisioned member, the **Restart** **Service** button is not displayed. If you restart any service on a pre-provisioned member, no action is actually taken even though you may receive a message indicating that the operation may take a few minutes. When you join the member to the Grid, NIOS will run respective member services on the joined member. For more information about service restarts, see [*Restarting Services*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/restarting-services).
- NIOS allows you to backup information about the pre-provisioned member. When you perform a forced restore however, NIOS does not restore the pre-provisioned licenses if you have already installed permanent NIOS licenses on the corresponding member. For more information about backup and restore, see [*Backing up and Restoring Configuration Files*](https://infoblox-docs.atlassian.net/wiki/spaces/niosupgrade/pages/1321074738).
- You can use **Manage** **Member** **Services** to manage the pre-provisioned member services. For more information, see [*Monitoring Member Services*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/monitoring-services)*.*

# Configuring Pre-Provisioned Members

The pre-provisioning feature is disabled by default. You must select a supported hardware model for the Grid member to enable this feature. A member that has pre-provisioning configured does not need a permanent license to join the Grid.

Note that to join pre-provisioned vNIOS members to the Grid, you must include the **Grid** and **vNIOS** provisional licenses.

To pre-provision an offline member, log in to the Grid Master and complete the following:

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab, and then click the **Add** icon.
2. In the *Add* *Grid Member* wizard, add a new member as described in [*Adding a Single Member*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members)*.*
3. After you add the member to the Grid, select the member in the **Members** tab and click the **Edit** icon.
4. In the *Grid* *Member Properties* editor, select the **Pre-Provisioning** tab, and complete the following:
   
   - **Member** **Type**: Displays the member type that you have selected in the **General** tab. The pre-provisioning feature is supported only for **Infoblox** and **Virtual** **NIOS** member types. Note that you must select a hardware model for the member in order to enable the pre-provisioning feature.
   - **Hardware** ** Model**: Select the hardware model from the drop-down list. Grid Manager displays only the supported hardware models for the specified member type. Once you select the hardware model, the pre-provisioning feature is enabled for the member. NIOS allows you to pre-provision HA members that have the same or different hardware models for Node 1 and Node 2. A few hardware specific features, such as DSCP, VLAN, LAN2, and LOM (Light Out Management), are enabled based on the pre-provisioned hardware model you specify here.
   - **Provisional** ** Licenses**: Select the licenses that you want to enable for the pre-provisioned member. You can select the licenses only after you have specified the hardware model for the member. Once you select and enable a license, you can no longer modify the hardware model for the member. Note that licenses that you later add to the member must include the ones that are specified for pre-provisioning.  
     For more information about provisional licenses, see the *About Provisional Licenses* section below.
5. Save the configuration.
   
   Note that after you save the configuration, you can no longer modify the hardware model for the member. You also cannot disable any provisional licenses though you can add new ones. To disable provisional licenses, you must first remove the pre-provisioned member and then configure a new one.

# About Provisional Licenses

If a member has never joined a Grid, you can pre-provision this member provided that you define the hardware model for the member and assign provisional licenses to it. Provisional licenses are not permanent NIOS licenses. Though they do not have expiration dates or validity periods, you must replace these licenses with corresponding permanent, subscription, or temp licenses based on the version of NIOS before you join the member to the Grid. For more information about licenses, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0) and [*Managing Licenses in NIOS 9.0.1 and Later*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-1-and-later).

> **warning**
>
> **Note**
> 
> Before you join the member to the Grid, use the CLI command `set license` or `set temp_license` to add the corresponding licenses that you have specified for pre-provisioning. You can also allocate pre-purchased licenses from the pool in case of NIOS versions that support dynamic licenses.

NIOS supports the following provisional licenses: Cloud Platform, DHCP, DNS, DNS Traffic Control, Enterprise (Grid), FireEye, Microsoft Management, RPZ (Response Policy Zone), and vNIOS.

After you configure the offline member, you can select the pre-provisioned member from the corresponding wizards and editors based on the required license(s). The following table lists the wizards and editors from which you can select a pre-provisioned member when required pre-provisioned licenses are enabled:

| Wizards and editors from which you can select a pre-provisioned member | Required license(s) |
| --- | --- |
| DNS Zones and Name Server Groups | dns |
| DHCP IPv4 and IPv6 networks | dhcp |
| IPv4 DHCP Failover Association | dhcp |
| Microsoft servers  Note that the initial synchronization with Microsoft servers is read-only. When you join the appliance to the Grid, the appliance removes all Microsoft management objects that you have configured on the Microsoft servers after the synchronization. The configuration on the Microsoft servers will replace the configuration on the NIOS appliance. | ms_management |
| Grid Members | vnios |
| Grid license | enterprise |
| Response Policy Zones | RPZ |
| Response Policy Zones | FireEye |
| DNS Traffic Control | DTC |
| Cloud tabs and related wizards and editors | cloud_api |

> **warning**
>
> **Note**
> 
> If you configure a DHCP Failover using an online member and a pre-provisioned member, assign it to a range, and start DHCP service, no addresses will be served because the initial synchronization does not happen due to the pre-provisioned offline member. NIOS logs the following message in the syslog:   
> `2013-12-24T08:37:23+00:00 daemon (none) dhcpd[8790]: info DHCPDISCOVER from cb:86:a8:45:6c:5c via 10.120.21.236: not responding (recovering)`

# Guidelines for Joining Pre-Provisioned Members to the Grid

Before you join a pre-provisioned member to the Grid, ensure that you verify the appliance model and provisional licenses for the member. For information about how to join a member to the Grid, see [*Joining Pre-Provisioned Members to a Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/pre-provisioning-nios-and-vnios-appliances/joining-pre-provisioned-members-to-a-grid).  
Note the following about joining a pre-provisioned member to the Grid:

- If you install fewer licenses than the provisional licenses specified when pre-provisioning a member, you cannot join the member to the Grid.
- If the pre-provisioned member does not have any provisional licenses enabled, you can join the member to the Grid provided that you install a license on the member.
- You must install at least the set of licenses that were specified for pre-provisioning along with any other needed licenses, except for the following:
  
  - You can join the member to the Grid if the pre-provisioned member is a vNIOS virtual appliance and has only the DNS license enabled, and you install both the vNIOS and DNS licenses on the member.
  - Similarly, you can join the member to the Grid if the pre-provisioned member is a vNIOS virtual appliance and has both DNS and DHCP licenses enabled, and you install the vNIOS, DNS, and DHCP licenses on the member.
- After you successfully join the pre-provisioned member to the Grid, provisional licenses are removed and other licenses you have installed take effect.
- After the member joins the Grid successfully, the **Pre-Provisioning** tab is not displayed in the *Grid Member Properties* editor.
