---
title: "Understanding DNS Infrastructure Protection Rulesets and Rules"
source: "/space/nios90/280270117"
pageId: "280270117"
---
To fully implement Infoblox DNS Infrastructure Protection , ensure that you import the latest DNS Infrastructure Protection ruleset. To import rulesets, you must have the **Threat** **Protection** **Update** license installed on the appliance. For more information, see [*Supported DNS Infrastructure Protection Appliances and Licensing Requirements*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/supported-dns-infrastructure-protection-applianc). A ruleset comprises all DNS Infrastructure Protection rules, including system and auto-generated rules, rule templates, custom rules (if any), and parameter definitions and values. For detailed information about DNS Infrastructure Protection rules, refer to the *Infoblox* *DNS Infrastructure* *Protection* *Rules* available on the Support web site. Infoblox supports a common DNS Infrastructure Protection ruleset for both hardware and Software DNS Infrastructure Protection members. This ruleset supports all rules and templates. You can also manually upload your rulesets or download rulesets automatically from the IT server.  
Infoblox DNS Infrastructure Protection supports the following DNS infrastructure protection rules:

- Predefined system and auto-generated rules, as described in [*System and Auto Rules*](/nios90/by-id/280668961).
- Custom rules, as described in [*Custom Rules*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/understanding-dns-infrastructure-protection-rule/custom-rules).

Each DNS Infrastructure Protection rule belongs to a rule category. When you import a ruleset, the appliance publishes the system and auto rules in their respective categories. NIOS automatically manages rule categories and you cannot add, delete, or modify them. It also provides rule templates for creating custom rules. During a ruleset update, some categories and rules may be added or removed. These actions are performed without intervention after the updates are authorized or automatically executed. You cannot add or delete system and auto rules, but you can create custom rules through predefined rule templates and delete them when necessary.

> **warning**
>
> **Note**
> 
> You can recover only custom rules from the Recycle Bin, if enabled. Rules, rule templates and categories that are removed through ruleset updates are permanently deleted and cannot be restored from the Recycle Bin.

To obtain initial rules and subsequent rule updates, you can configure the appliance to automatically download and publish rulesets or you can manually download them from the Infoblox Support web site and then publish them. For information about how to configure automatic and manual rule settings, see [*Configuring Grid Security Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/about-infoblox-dns-infrastructure-protection/configuring-grid-security-properties). Note that only the Grid Master receives rules and rule updates. Grid member receives rules and updates through standard Grid replication from the Grid Master. Ruleset data is not replicated to Grid members that do not have the DNS Infrastructure Protection services enabled.  
Infoblox recommends that you configure the appliance to automatically receive ruleset updates so your appliance receives the latest rules periodically. If you prefer to manually download and publish rulesets, ensure that you download them frequently to receive the most updated rules. The appliance can store up to nine ruleset versions, and you can select up to five rulesets and switch between these versions for the Grid or members when necessary. For more information about ruleset versions and updates, see [*About Ruleset Versions and Updates*](/nios90/by-id/280766422).
