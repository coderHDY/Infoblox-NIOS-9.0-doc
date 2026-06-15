---
title: "Configuring Blacklists"
source: "/space/nios90/280665688"
pageId: "280665688"
---
You can perform the following operations on the blacklist feature:

1. Add blacklist rulesets, as described in Adding a Blacklist Ruleset below.
2. Create one or more CSV files that contain the rules for each ruleset and import the files to the Grid. For information about importing CSV files, see [*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=280665688).
3. Enable blacklisting, as described in Enabling Blacklisting below.

# Adding a Blacklist Ruleset

To add the name of a blacklist ruleset:

1. From the **Data** **Management** tab -> **DNS** tab -> **Blacklist** **Rulesets** tab, click the Add icon.
2. In the *Blacklist* wizard, complete the following:
   
   - **Name:** Enter a name for the ruleset.
   - **Comment:** You can enter additional information.
   - **Disable:** You can disable this ruleset for use later on. The appliance ignores disabled rulesets.
3. Save the configuration and click **Restart** if it appears at the top of the screen. You can then use the CSV Import feature to import the rules for each ruleset.

# Managing Blacklist Rulesets

To view rulesets, navigate to the **Data** **Management** tab -> **DNS** tab -> **Blacklist** **Rulesets** tab. The panel lists the configured rulesets and their associated comments. You can also display the Disabled column which indicates which rulesets are disabled. From this panel, you can do the following:

- Add more rulesets, as described in the preceding section, Adding a Blacklist Ruleset.
- Edit a ruleset, by clicking its checkbox and clicking the Edit icon. You can set the following in the Blacklist Ruleset editor:
  
  - In the **General Basic** tab, you can change entries in any of the fields.
  - In the **Permissions** tab, you can set admin permissions for the ruleset.
- Delete a ruleset, by clicking its checkbox and clicking the Delete icon.
- View the rules that were imported in each ruleset by selecting it. For each rule, the panel displays the following:
  
  - Domain name
  - The action of the recursive DNS member when the domain name in a query matches the domain name in the rule.

To delete or edit rules in a ruleset, you must delete the ruleset from this panel, edit the CSV file and re-import it.

# Enabling Blacklisting

Only DNS members with recursion enabled can support this feature. You can enable this feature at the Grid level and override it for a member or DNS view with recursion enabled.  
You can also enable the DNS member to log queries that matched blacklist rules. The logs include the queried domain name, source IP address, the pattern of the matched rule, and the name of the corresponding ruleset.  
To enable blacklisting:

1. **Grid:** From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid DNS Properties.**  
   **Member:** From the **Data Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.  
   **DNS View:** From the **Data Management** tab, select the **DNS** tab and click the **Zones** tab -> *dns_view* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. If the *Grid DNS Properties* or *Member DNS Properties* editor is in basic mode, click **Toggle Advanced Mode**.
3. Click **Blacklist** and complete the following:  
   **Enable Domain Name Blacklist:** Select this checkbox.  
   **Blacklist Rulesets:** To add a ruleset, click the Add icon. If there are multiple rulesets, select one from the *Select Ruleset* dialog box. Use the up and down arrows to move rulesets up and down in the list. The appliance applies rulesets in the order they are listed.  
   **For blacklisted domain names,return:** Select the action of the appliance when it receives a query for a record that matches a rule with an action of Redirect/Block.  
   If you selected **This list of IP addresses**, add an IP address to the **Redirect to** table by clicking the Add icon and entering the address. The addresses are listed in round robin fashion in the synthesized response of the DNS member. You can enter up to 12 IP addresses.  
   **Blacklist TTL:** Specify how long the DNS client caches the A record with the redirected IP address.  
   **Log queries for blacklisted domain names:** Select this option to enable the appliance to log queries for blacklisted domain names, including the source IP address of the query.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

# Related topic

[Blacklists](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665713)
