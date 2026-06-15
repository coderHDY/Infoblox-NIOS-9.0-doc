---
title: "License Requirements and Admin Permissions for RPZ"
source: "/space/nios90/420544897"
pageId: "420544897"
---
You must install required licenses to use the RPZ feature. An RPZ license is required to configure local RPZs and RPZ feeds. For more information, see the *For Local RPZs and RPZ Feeds* section. For FireEye integrated RPZs, you must first install an RPZ license, and then a Security Ecosystem license. For more information, see the *FireEye Integrated RPZs* section.

Infoblox provides RPZ licenses that are compatible with each product model. For all RPZ-related licenses, you can install one of the following licenses:

- Temporary license: A temporary license provides a 60-day free trial, which you can upgrade to a subscription license. When a temporary license expires, the feature will stop functioning until a subscription license is installed. Infoblox recommends not to install temporary licenses in the production environment. Use them for testing and evaluation purposes only.
- Subscription license: A subscription license has an expiry date and remains valid until the contract expires. When a subscription license expires, RPZs will remain intact. You can continue to add new local RPZs, feed zones, and rules to the existing zones. Additionally, RPZ feed zones continue to receive updated feeds.

This section includes the following topics:

*[toc]*

# For Local RPZs and RPZ Feeds

Before you install an RPZ license, ensure that Grid members are properly configured and DNS is enabled on the members.

> **warning**
>
> **Note**
> 
> Install RPZ licenses only on Infoblox members that have DNS recursion enabled.

Superusers can configure RPZs and RPZ rules by default. You can also assign global permissions for all RPZs and RPZ rules to specific admin groups and roles. For more information about administrative permissions for zones, see [*Administrative Permissions for DNS Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dns-resources).

# Grid-wide licenses for RPZ

Infoblox offers a Grid-wide **Infoblox ****Threat Defense Business On-Premises**, **Infoblox Threat Defense Business Cloud**, and **Infoblox** **Threat Defense Advanced** services for the DNS Firewall feature. These are subscription licenses that you may have to purchase from Infoblox. When you purchase these services, you can use the Infoblox threat subscription data on any appliance that can run DNS Firewall across the Infoblox Grid which you have configured. You can buy these additional services if you do want to use Infoblox threat data and instead use your own or an external threat feed. With these additional services, you get to use a separate license key for each Grid that you use.  
  
When you configure a Grid-wide RPZ license for each Grid, RPZ rules are not applied for queries that originate from the other RPZ member(s) of the Grid. When you use multiple Infoblox Grids, you can use the same TSIG key to configure feed zones across all Grids to synchronize feed subscriptions. Note that these services are valid for NIOS versions 8.0 and above. For more information about managing Grid-wide licenses, see [*Managing Licenses in NIOS 9.0.0*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-licenses-in-nios-9-0-0).  
  
For a thorough understanding of the RPZ process using various NIOS versions, consider a scenario where you have configured four members on the Grid: GM(RPZ license), M1(RPZ license), M2(DNS license), M3(RPZ license), and RM1 (Reporting Member).



In NIOS version 8.x:

- When you install a Grid Wide RPZ license, all members with DNS licenses are added to the ACL list:  
  `infoblox-deny-rpz { localhost; GM_IP, Member1_IP; Member2_IP; Member3_IP; }`
- When you install a Grid Wide RPZ license, but not a member level RPZ license, NIOS adds all the members with DNS licenses to the ACL list:  
  `infoblox-deny-rpz { localhost; GM_IP, Member1_IP; Member2_IP; Member3_IP; }`
- When you do not install a Grid-wide RPZ license but install member-level RPZ licenses, NIOS adds all  members that have RPZ licenses to the ACL list and enables the **Apply** **RPZ** **rules** **only** **on** **this** **member** **if** **possible** check box for that member. You can clear the check box.   
  `infoblox-deny-rpz { localhost; GM_IP, Member1_IP; Member2_IP; Member3_IP; }`

> **warning**
>
> **Note**
> 
> Infoblox suggests that when you upgrade to NIOS 8.0 and later versions, select the check box **ApplyRPZrulesonlyonthismemberifpossible** only if there is an existing RPZ license for the Grid member to ensure that there is no change in behavior due to an upgrade.

Note the following about Grid-wide licenses for RPZ:

- NIOS displays **rpz** in the **Grid Wide** and **Member** tabs when RPZ license is installed.
- When you enable a temporary license for RPZ, it is enabled at the Grid level and listed under the **Grid** **Wide** tab. You do not have to set the license at the member level.
- NIOS performs a pre-provision check for an RPZ member who joins the Grid to verify if a Grid-wide license is installed for the RPZ member. If the Grid-wide license is found, NIOS allows the member to join the Grid.
- After you remove the Grid-wide license for RPZ, this feature still keeps functioning for members that do not have a Grid-wide license until you restart the service. When you remove the RPZ license that is associated with a specific member, NIOS restarts the service automatically and disables RPZ for the respective member.
- NIOS checks for a Grid-wide license of a pre-provisioned type when a member first joins the Grid. For example, if a member is pre-provisioned for RPZ and a Grid-wide RPZ license is installed, then NIOS allows the member to join the Grid, even though the member does not have a valid RPZ license.

## Customizing Threat Feeds on an RPZ Member

To configure an RPZ member to use your own or external threat feeds instead of RPZ feeds, complete the following:

1. From the **Data** **Management** tab, select **DNS**, and then click **Members**.
2. Select a member and click **Edit** from the Toolbar.
3. In the *Member* *DNS* *Properties* editor, click **General** tab -&gt; **Advanced** tab.
   
   - **Apply** **RPZ** **rules** **only** **on** **this** **member** **if** **possible**: Select this check box if the forwarders must not apply RPZ rules to the responses that is returned to the other member, when this RPZ member queries other Grid member details.
4. Save the configuration.

# For FireEye Integrated RPZs

You can enable FireEye integrated RPZs on the appliances that have both the RPZ and Security Ecosystem licenses installed. Note that you must install an RPZ license prior to installing the Security Ecosystem license.   
  
NIOS appliance creates a new group, **fireeye-group**, when you add the first FireEye zone. The FireEye admin group is read-only and you cannot assign permissions to it. It will not have any superuser privileges and you cannot modify or delete this group. You can add users to the **fireeye-group** admin group, and FireEye users can only send alerts to the NIOS appliance. They cannot access the Infoblox GUI, CLI, API, or RESTful API. These users are authenticated based on the usernames and passwords you configure in the FireEye admin group. Only admin users who belong to the FireEye admin group can publish FireEye alerts. Other admin users cannot do so. For information about how to configure the FireEye appliance, see [*Configuring the FireEye Appliance*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/infoblox-dns-firewall/about-fireeye-integrated-rpzs).

> **warning**
>
> **Note**
> 
> The **fireeye-group** is created automatically. Infoblox recommends that you do not add a group with the same name. In addition, The "force password change at next login" feature does not apply to admin users in the **fireeye-group**. These users will not be prompted to change their passwords at the next login. Their original passwords continue to work. For more information managing passwords, see [*Creating Local Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins).

To add users to the **fireeye-group**, complete the following:

1. From the **Administration** tab, select **Administrators**, and then click **Admins**.
2. Click **Add** and enter the usernames and passwords. For more information on how to add users to an admin group, see [*Creating Local Admins*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/creating-local-admins). Select **fireeye-group** for the admin group and add users to this group.

> **warning**
>
> **Note**
> 
> Ensure that you save the usernames and passwords. You must use these credentials when configuring FireEye alerts to enable the alerts to be received by NIOS.

## Uninstalling the Security Ecosystem License

When you uninstall the Security Ecosystem license, new FireEye alerts will not be processed. However, the FireEye integrated RPZs and the rules in those zones will not be deleted. Note the following when you uninstall the Security Ecosystem license:

- New FireEye alerts will not be processed
- FireEye RPZ zones that were created before uninstalling the license will remain
- You cannot create new FireEye RPZ zones
- RPZ rules created from the alert will remain
- Note that if the RPZ and Security Ecosystem licenses are installed, then you must first remove the Security Ecosystem license to remove the RPZ license.
- The fireeye-group and the FireEye zones will remain even after you delete the Security Ecosystem license.
