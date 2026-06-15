---
title: "Viewing Topology Rulesets"
source: "/space/nios90/1412038973"
pageId: "1412038973"
---
To view topology rulesets, navigate to the **Data** **Management** tab -> **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Topology** **Rulesets** in the Toolbar. The Topology Manager lists the configured rulesets, their destination types, sites, and comments.

You can perform the following:

- Add new rulesets. To add a new ruleset, click the Add icon. For more information, see Defining Topology Rulesets above.
- To edit a ruleset, click the checkbox next to the ruleset name, and then click the Edit icon. You can modify the following in the *Ruleset* editor:
  
  - In the **General** **Basic** tab, you can perform the following:
    
    - Add new rules to the ruleset. Click the arrow next to the Add icon and select either **Extensible** **Attribute** **Rule**, **Subnet** **Rule**, or **Geography** **Rule**. For more information, see Defining Topology Rulesets above*.*
    - Modify rules in the ruleset. To edit an existing rule, select the checkbox of the required rule in the Rules table, and then click the Edit icon. When you are finished editing, click **Save** above the Rules table. For more information, see Defining Topology Rulesets above.
    - Delete existing rules from the ruleset. Select the checkbox of the required rule in the Rules table, and then click the Delete icon.
      
      You can modify the destination type only if there are no rules in the ruleset.
  - In the **Extensible Attributes** tab, you can add new or edit existing extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
- Delete a ruleset or schedule the deletion for a later time.
  
  - To delete a ruleset, select the checkbox next to its name and click the arrow next to the Delete icon. To delete the object immediately, select **Delete**.
  - To schedule the deletion, click **Schedule** **Delete**. For more information, see [*Scheduling Deletions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1455063358).
- Export topology rulesets. To export the entire list of rulesets in a format that can be imported, click the Export icon and choose **Export data in Infoblox CSV Import format**. To export all data that is currently visible in the Topology Manager, click the Export icon and choose **Export visible data**.
- Print the data that is currently visible in the Topology Manager. Click the Print icon to print.
