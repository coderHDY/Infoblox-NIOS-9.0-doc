---
title: "Limitations of Configuring Topology Rules and Rulesets"
source: "/space/nios90/1412006415"
pageId: "1412006415"
---
- Based on the destination type of the DTC Topology ruleset settings, you can set the **NOERR/NODATA** or the **NXDOMAIN** response for a new DTC Topology rule. However, you cannot choose the destination **DTC Pool** or the** DTC Server**.
- If the **Destination** **Type** is set as **SERVER**, then the topology rule set for DTC pool cannot have only **NOERR** and **NXDOMAIN** rules. This is because the NAMED does not process the queries in the IDNS if the incoming requests are matched to LBDN with no topology balance method. Also, the pools under this LBDN do not have active or existing servers. Hence a **NOERR** response is always received. To prevent this behavior, the grid must have at least one active server as the **Rule** **Destination** under any DTC pool in the LBDN to allow IDS processing for the current LBDN and Pool. The rule set must have at least one rule with the **REGULAR** Return Type.
- The **Disable for DHCP** checkbox must be not be selected to enable networks and to build the topology database. For more information about the checkbox, see [*Configuring IPv4 Networks*](/nios90/infoblox-nios-9-0-x/administering-nios/dhcp/managing-ipv4-dhcp-data/configuring-ipv4-networks).
- The topology ruleset must have a specific order for the following rules:
  
  1. REGULAR rules
  2. NOERR rules
  3. NXDOMAIN rules

The ruleset cannot have rules with a **REGULAR** return type after the **NOERR** or **NXDOMAIN** rules are set in order. You will receive a warning message when you try to save the topology ruleset in any other order. However, the GRID automatically sorts the rules in the correct order, once you accept the warning message.

> **warning**
>
> ### Note
> 
> During the WAPI call, if the rules are not in the correct order, they are automatically sorted as WAPI does not give any warnings.
