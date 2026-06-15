---
title: "Creating Rulesets"
source: "/space/nios90/1420231083"
pageId: "1420231083"
---
To create a ruleset:

1. From the **Data** **Management** tab -> **DNS** tab -> **NXDOMAIN** **Rulesets** tab, click the Add icon.
2. In the **NXDOMAIN** **Ruleset** wizard, complete the following and click **Next**:
   
   - **Name:** Enter a name for the ruleset.
   - **Comment:** You can enter additional information.
   - **Disable:** You can disable this ruleset for use later on. The appliance ignores disabled rulesets.
3. Click the Add icon to add a rule to the ruleset table.
   
   - In the Pattern column, enter a domain name or pattern, using the guidelines specified in  About NXDOMAIN   Rulesets.
   - In the **Action** column, select **PASS**, **REDIRECT** or **MODIFY**.
   - In the **Order** column, NIOS automatically displays the number of the entry in the list.  
     The appliance applies the rules in the order they are listed. You can order the list as follows:
     
     - Use the up and down arrows to move rules up or down on the list.
     - Use the go-to-top or go-to-bottom arrow to move a rule to the top or bottom of the list.
     - Change the Order number of a rule to move it to the desired location.
     - Delete a rule by selecting it and clicking the Delete icon.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
