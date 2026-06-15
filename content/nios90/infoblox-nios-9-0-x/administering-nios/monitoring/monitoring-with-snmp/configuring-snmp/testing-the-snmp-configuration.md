---
title: "Testing the SNMP Configuration"
source: "/space/nios90/1406500985"
pageId: "1406500985"
---
After you configure SNMP on the appliance, you can do the following to test your SNMP configuration:

- From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -&gt; **Members** tab -&gt; *Grid_member* checkbox, and then select **Test** **SNMP** from the Toolbar.

The appliance sends a “test trap” string to the trap receiver and displays a confirmation message at the top of the screen if your SNMP configuration is properly set up. If your SNMP configuration is not complete or if it is invalid, the appliance displays an error message. You can check your configuration and try again.

The following is a sample test trap that the trap receiver can get:

`2011-04-04 17:37:14 10.32.2.80 [UDP: [10.32.2.80]:49244-&gt;[10.32.2.80]]:`

`SNMPv2-MIB::snmpTrapOID.0 = OID: SNMPv2-MIB::snmpTrapOID`

`SNMPv2-MIB::sysName.0 = STRING: 'Test trap'`
