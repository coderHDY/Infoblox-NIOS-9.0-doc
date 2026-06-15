---
title: "Configuring SNMP"
source: "/space/nios90/280662492"
pageId: "280662492"
---
You can configure the appliance to receive SNMP queries from specific management systems and send SNMP traps to specific trap receivers. SNMP operation supports both IPv4 and IPv6 networks. The appliance supports SNMPv1, SNMPv2, and SNMPv3. You can set up either SNMPv1/SNMPv2 or SNMPv3, or all of them for a Grid. You can also override the Grid settings at a member level.  
  
To configure SNMPv1 and SNMPv2 on the appliance, do the following:

- Enable the NIOS appliance to accept queries. See
- Specify the management systems to which the appliance sends traps, as described in *Adding* *Trap* *Receivers* in the following section.
- Specify system information using managed objects in MIB-II, the standard MIB defined in *RFC* *1213*. For information, see  *Setting* *SNMP* *System* *Information* in the following section.

To configure SNMPv3 on the appliance, do the following:

- Add an SNMPv3 user and set up authentication and privacy protocols. After you set up an SNMPv3 user, you can modify and delete it.
- Enable the NIOS appliance to accept queries, as described in * Accepting Queries* in the following section.
- Specify the management systems to which the appliance sends traps, as described in see  *Adding* *Trap* *Receivers* in the following section.
- Specify system information using managed objects in MIB-II, the standard MIB defined in *RFC* *1213*.
