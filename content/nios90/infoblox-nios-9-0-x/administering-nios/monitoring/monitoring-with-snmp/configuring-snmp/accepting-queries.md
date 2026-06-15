---
title: "Accepting Queries"
source: "/space/nios90/1406468117"
pageId: "1406468117"
---
You can allow specific management systems to send SNMP queries to a NIOS appliance. For SNMPv1 and SNMPv2, you must specify a community string. The appliance accepts queries only from management systems that provide the correct community string. You can also specify SNMPv3 users to send queries.  
To configure an appliance to accept SNMP queries:

1. Grid: From the **Infoblox Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -&gt; **Edit** from the Toolbar. Member: From the **Grid** tab, select the **Grid** **Manager** -&gt; **Members** tab -&gt; *member*, and then click the **Edit** icon.
2. In the *Grid* *Properties* or *Grid* *Member* *Properties* editor, select the **SNMP** tab. To override Grid settings, click **Override** in the *Grid* *Member* *Properties* editor.
3. Complete the following in the **SNMP** section.
   
   - **Enable** **SNMPv1/SNMPv2** **Queries:** Select this to accept SNMPv1 and SNMPv2 queries from management systems.
     
     - **Community** **String:** Enter a text string that the management system must send together with its queries to the appliance. A community string is similar to a password in that the appliance accepts queries only from management systems that send the correct community string. Note that this community string must match exactly what you enter in the management system.
   - **Engine** **ID**: Displays the engine ID of the appliance that manages the SNMP agent. The management system needs this ID to send traps to the appliance. If the appliance is an HA pair, this field displays the engine IDs for both the active and passive nodes.   
     Infoblox recommends that you set a unique engine ID. This is because if you choose to override the Grid settings, only then is the engine ID from the current Grid member settings considered.
   - **Enable** **SNMPv3** **Queries**: Select this to enable queries from SNMPv3 management systems. Click the Add icon to add SNMPv3 users that you have configured on the appliance. In the *SNMPv3* *User* *Selector* dialog box, click the SNMPv3 user you want to add. The appliance displays the selected SNMPv3 users in the table. You can add comments in the table. You can also select an SNMPv3 user and click the Delete icon to remove it from the table. Note that a disabled SNMPv3 user cannot send queries to the appliance.

1. Save the configuration.
