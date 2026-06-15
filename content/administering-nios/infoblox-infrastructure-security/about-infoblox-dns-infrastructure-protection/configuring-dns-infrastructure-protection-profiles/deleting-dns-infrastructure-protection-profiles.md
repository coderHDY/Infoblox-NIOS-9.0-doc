---
title: "Deleting DNS Infrastructure Protection Profiles"
source: "/space/nios90/280408771"
pageId: "280408771"
---
When you select this option, NIOS deletes the selected DNS Infrastructure Protection profile from the database. When you delete a DNS Infrastructure Protection profile or a profile rule, the appliance puts them in the Recycle Bin, if enabled. You can restore them if necessary. Note the following about DNS Infrastructure Protection profiles:

- When you delete a profile that contains an active ruleset, which is overridden at the profile level, you can restore the profile including the configuration if the ruleset exists on the Grid. You cannot restore the profile if the ruleset is deleted.
- When you delete a profile that inherits ruleset from the Grid, and if the same ruleset is still active on the Grid, you can restore the profile including the configuration for profile rules. If the ruleset is deleted or if the active ruleset on the Grid has changed, the appliance restores the profile from the Grid along with the profile rule settings for the current active ruleset.

To delete a DNS Infrastructure Protection profile, from the **Data** **Management** tab, select the **Security** tab -> **Profiles** tab, select the DNS Infrastructure Protection profile that you want to delete, click the Action icon  and then select **Delete**. Click **Yes** in the confirmation dialog box to delete.
