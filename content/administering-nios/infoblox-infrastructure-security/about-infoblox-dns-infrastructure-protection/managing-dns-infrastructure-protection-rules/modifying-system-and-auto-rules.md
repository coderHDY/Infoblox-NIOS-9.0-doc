---
title: "Modifying System and Auto Rules"
source: "/space/nios90/280668768"
pageId: "280668768"
---
1. From the **Data** **Management** tab, select the **Security** tab ->** DNS Infrastructure** **Protection** **Rules** tab.
2. In the Grid Rules table, expand the category to which the rule belongs, select the checkbox, and then click the Edit icon.
3. In the *System* *Rule* or *Auto* *Generated* *Rule* editor, select the **General** tab -> **Basic** tab to modify the following:
   
   - **Comment**: Enter information about the system rule.
   - **Disable**: Select this checkbox to disable the system rule. You cannot disable auto rules. You can also view the following information (but you cannot modify it):
   - **Rule** **ID**: Displays the rule ID of the system rule.
   - **Name**: Displays the name of the rule.
   - **Category**: Displays the category to which the system rule belongs.
   - **Description**: Displays the description of the system rule.
   - **Order**: Displays the number that indicates the order in which the rule will be executed by the appliance. The rule order can change during a ruleset update.
4. In the *System* *Rule* or *Auto* *Generated* *Rule* editor, select the **Settings** tab -> **Basic** tab. Depending on the rule, you may or may not be able to modify the following:
   
   - **Action**: Displays one of the following: **Alert**, **Drop** or **Pass**. Some rules are restricted to specific actions. For example, the action for all blacklisting rules is set as **Drop**, where the appliance drops the packets and logs the activity when such an event occurs. The action for all whitelisting rules is set as **Pass**, where the appliance silently passes the packets without logging when such an event occurs.
     
     - **Alert**: Logs the activity, and passes the packet.
     - **Drop**: Logs the activity and drops the packet.
     - **Pass**: Silently passes the packet without logging.
   - **Log** **Severity**: Select the log severity level from the drop-down list. You can select **Critical**, **Major**, **Warning**, or **Informational**. The selection here corresponds to the severity levels you configure for logging in the syslog.
   - **Rule** **Parameters**: In the Rule Parameters table, the **Description** column displays the rule parameters. Click the row and enter the corresponding values for the rule parameters in the **Value** column. Depending on the rule, this table displays only the parameters that are relevant to the system or auto rule.
5. Save the configuration.
