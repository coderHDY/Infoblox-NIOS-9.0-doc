---
title: "Administrative Permissions for Infoblox DNS Infrastructure Protection"
source: "/space/nios90/280408163"
pageId: "280408163"
---
You can grant read-only or read/write permission, or deny access to the following resources:

- Grid Security Properties—Applies to the Grid and its members.
- Member Security Properties—Applies to the Grid members only.

For information about setting permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for the DNS Infrastructure Protection service.

*Permissions* *for* *hardware-based* *DNS Infrastructure Protection* *Service*

| **Tasks** | **Grid Security Properties** | **Member Security Properties** |
| --- | --- | --- |
| View Grid security properties | **RO** |  |
| Update Grid Security properties | **RW** |  |
| View member security properties for specific Grid members | **RO** | **RO** |
| Update member security properties for specific Grid members | **RW** | **RW** |
| Start and stop DNS Infrastructure Protection service for a Grid member | **RW** | **RW** |
| Publish rules for a Grid member | **RW** | **RW** |
| View rule categories and rules for the Grid | **RO** |  |
| Enable and disable rules for the Grid | **RW** |  |
| Update rule versions for any rules on the Grid | **RW** |  |
| Revert to a previous rule version for any rules on the Grid | **RW** |  |
| Modify configuration parameters, such as action and severity, for rules on the Grid | **RW** |  |
| Create custom rules from rule templates for the Grid | **RW** |  |
| Delete custom rules for the Grid | **RW** |  |
| View rule categories and rules on a Grid member | **RO** | **RO** |
| Enable and disable rules on a Grid member | **RW** | **RW** |
| Update rule versions for any rules on a Grid member | **RW** | **RW** |
| Revert to a previous rule version for any rules on a Grid member | **RW** | **RW** |
| Modify configuration parameters, such as action and severity, for rules on a Grid member | **RW** | **RW** |
| View DNS Infrastructure Protection related event statistics on a Grid member | **RO** | **RO** |
| Upgrade rulesets for a Grid | **RW** |  |



*Permissions* *for* *Software* *DNS Infrastructure Protection*

| **Tasks** | **Grid Security Properties** | **Member Security Properties** |
| --- | --- | --- |
| View the list of DNS Infrastructure Protection profiles in the Profiles Viewer | **RO** | **RO** |
| View profile settings in the DNS Infrastructure Protection Profile Editor | **RO** |  |
| Create a DNS Infrastructure Protection profile | **RW** |  |
| Clone a DNS Infrastructure Protection profile from an existing profile (This also clones all settings for the ruleset from an old profile.) | **RW** |  |
| Clone a DNS Infrastructure Protection profile from an existing member settings | **RW** |  |
| Update the profile settings (name, comment, events per second, disable multiple TCP DNS request, list of members) | **RW** |  |
| Change the ruleset that is assigned to a profile (This internally merges all customizations for an old ruleset to a new ruleset.) | **RW** |  |
| View the profile rules and rule settings | **RO** |  |
| Enable/disable rules in the profile | **RW** |  |
| Change the rule parameters for rules in the profile (action, log severity, events per second etc.) | **RW** |  |
| Merge two profiles | **RW** |  |
| Assign/remove a profile from Member Security properties | **RW** | **RW** |
| Delete a profile | **RW** |  |

# Administrative Permissions for DNS Threat Insight

Only superusers and limited-access users with Read/Write permission can manage Threat Insight service.  
You can grant read-only or read/write permission, or deny access to the following:

- Grid Threat Insight Properties—Applies to the Grid and its members.

For information about setting permissions, [*Managing Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the tasks admins can perform and the required permissions for the Threat Insight service.

*Permissions* *for Threat Insight* *Service*

| **Tasks** | **Grid Threat Insight Properties** | **RPZ Zones** | **Grid Members** | **DNS Views** |
| --- | --- | --- | --- | --- |
| View Grid Threat Insight properties | **RO** |  | **RO** |  |
| Update Threat Insight properties | **RW** | **RW** | **RW** | **RW** |
| Start and stop Threat Insight service | **RW** |  | **RW** |  |
| Create an RPZ and use it as mitigation blocklist feed | **RW** | **RW** | **RW** | **RW** |
| View allowlisted domains | **RO** |  | **RO** |  |
| Move allowlisted domains to the blocklist | **RW** | **RW** |  |  |
| Update Threat Insight module and allowlist sets | **RW** |  |  |  |
| Viewing Threat Insight module and allowlist versions | **RO** |  |  |  |
| Define the Threat Insight Update policy | **RW** |  |  |  |
| Manually Upload Threat Insight Updates | **RW** |  |  |  |



# Administrative Permissions for All Rulesets

You can grant permissions for individual ruleset objects to admin users. NIOS provides a global permission ALL Rulesets for admin groups. To perform operations on an NXDOMAIN ruleset, a blacklist rule, or an RPZ ruleset, you must have permission to the rule or ruleset to which the ruleset object belongs.
