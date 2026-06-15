---
title: "Adding Trap Receivers"
source: "/space/nios90/1406500914"
pageId: "1406500914"
---
You can enable the NIOS appliance to send traps to specific management systems using either SNMPv1/SNMPv2 or SNMPv3, or all versions of SNMP. You can then add management systems that are allowed to receive traps from the appliance. Note that you cannot enable both SNMPv1/SNMPv2 and SNMPv3 on the same trap receiver. The appliance sends traps when certain events occur. You can enable SNMP traps and add trap receivers to the Grid. You can also override the Grid settings at the member level.  
To enable the appliance to send traps and to add trap receivers, do the following:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab, and then select **Grid** **Properties** -&gt; **Edit** from the Toolbar. Member: From the **Grid** tab, select the **Grid** **Manager** -&gt; **Members** tab -&gt; *member*, and then click the **Edit** icon.
2. In the *Grid* *Properties* or *Grid* *Member* *Properties* editor, select the **SNMP** tab. To override Grid settings, click **Override** in the *Grid* *Member* *Properties* editor.
3. Complete the following in the **SNMP** tab:
   
   - **Enable** **SNMPv1/SNMPv2** **Traps:** Select this to enable the appliance to send traps to specified management systems.
     
     - **Community** ** String:** Enter a text string that the NIOS appliance sends to the management system together with its traps. Note that this community string must match exactly what you enter in the management system.
   - **Enable** **SNMPv3** **Traps:** Select this to enable the appliance to send traps to specified SNMPv3 users.
4. Click the Add icon and select one of the following from the drop-down menu to add an SNMP trap receiver:
   
   - **SNMPv1/SNMPv2**: Select this to add an SNMPv1 or SNMPv2 management system as a trap receiver. Grid Manager adds a row to the table. In the **Address** field, enter the IP address of the SNMP management system to which you want the SNMP agent on the appliance to send traps. You can enter more than one trap receiver. To remove a trap receiver from the list, select the address, and then click the Delete icon.
   - **SNMPv3**: Select this to add an SNMPv3 management system as a trap receiver. Grid Manager displays the *SNMPv3* *User* *Selector* dialog box. Click the name of the SNMPv3 user in the dialog box. Grid Manager adds the user to the table. In the **Address** field, enter the IP address of the SNMP management system to which you want the SNMP agent on the appliance to send traps. You can add more than one trap receiver. To remove a trap receiver from the list, select the address, and then click the Delete icon.  
     Trap receiver IP addresses may be in IPv4 or IPv6 format.
   - In the Trap Receiver table, Grid Manager displays the following information about the trap receivers:
     
     - **Address**: The IPv4 or IPv6 address of the trap receiver. Note that when an SNMPv3 user is disabled, SNMPv1/SNMPv2 traps are disabled. You can modify the IP address of the trap receiver even when the following are disabled: SNMPv3 users, SNMPv1/SNMPv2 traps, and SNMPv3 traps.
       
       - **SNMPv3** **User**: The user name of the SNMPv3 trap receiver. This is for SNMPv3 only.
       - **Comment**: Information you entered about the management system.
5. Save the configuration.
