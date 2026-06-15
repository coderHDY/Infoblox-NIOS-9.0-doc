---
title: "Defining Option 60 Match Rules"
source: "/space/nios90/1331397226"
pageId: "1331397226"
---
The appliance uses option 60 (vendor-class-identifier) to forward client requests to the DHCP server for services that the clients require. You can define option 60 match rules and filter on these rules. You can set these rules for the Grid and override for a member.   
To define option 60 for the Grid or member:

1. **Grid**: From the **Data Management** tab, select the **DHCP** tab, and then click **Grid DHCP Properties** from the Toolbar.  
   **Member**: From the **Data Management** tab, select the **DHCP** tab -> **Members** tab -> **Members** -> *member* check box, and then click the Edit icon.
2. In the *DHCP Properties* editor, click **Toggle Advanced Mode** if the editor is in basic mode. When the additional tabs appear, click the **DHCP Options** tab -> **Advanced** tab and complete the following:  
   To override the Grid configuration for a member, click **Override** next to the property. Grid Manager hides the Grid configuration. You can then add new values for the member.
   
   1. **Option60 (Vendor Class Identifier) Match Rules**: Click the Add icon if you want to add a match rule to a vendor class option. The appliance adds a row to the table. Complete the following:
      
      - **Option Space**: Select an option space from the drop-down list. This field appears only when you have custom option spaces. The appliance uses the default **DHCP** option space if you do not have custom option spaces.
      - **Match Value**: Enter the value you want the appliance to use when matching vendor class options.
      - **Is Substring**: Select this check box if the match value is a substring of the option data.
      - **Substring Offset**: Enter the number of characters at which the match value substring starts in the option data. Enter 0 to start at the beginning of the option data, enter 1 for the second position, and so on. For example, when you enter 2 here and have a match value of RAS, the appliance matches the value RAS starting at the third character of the option data.
      - **Substring length**: Enter the length of the match value. For example, if the match value is SUNW, the length is 4.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
