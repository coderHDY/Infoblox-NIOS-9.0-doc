---
title: "Infoblox MIBs"
source: "/space/nios90/1430192757"
pageId: "1430192757"
---
You can configure a NIOS appliance as an SNMP-managed device so that an SNMP management station can send queries to the appliance and retrieve information from its MIBs. Perform the following tasks to access the Infoblox MIBs:

1. Configure a NIOS appliance to accept queries, as described in [*Configuring SNMPv3 Users*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-with-snmp/configuring-snmp).
2. Load the MIB files onto the management system. To obtain the latest Infoblox MIB files:
   
   1. From the **Infoblox Grid** tab, select the **Grid Manager** tab &gt;, then select **Download** -&gt; SNMP MIBs from the Toolbar.
   2. In the *Save As* dialog box, navigate to a directory to which you want to save the MIBs.
   3. Click **Save**.

1. Use a MIB browser or SNMP management application to query the objects in each MIB.

The NIOS appliance allows read-only access to the MIBs. This is equivalent to the Get and Get Next operations in SNMP.

You can download the MIB files from this topic as a reference.
