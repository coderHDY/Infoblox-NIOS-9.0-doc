---
title: "Using a MIB Browser to Identify SNMP Traps and Their Definitions"
source: "/space/nios90/1430192900"
pageId: "1430192900"
---
You can use a **MIB browser** to dynamically **search, view, and analyze trap definitions and OIDs**. This allows you to retrieve real-time data and ensures accuracy based on the MIB version you are using. For example, if you are using ireasoning MIB browser, follow the below steps:

## Step1: Load Infoblox MIB files into a MIB browser

1. Open your **SNMP MIB browser** (e.g., iReasoning).
2. Go to **File → Load MIBs**.
3. Select the following MIB files (in order):
   
   1. `IB-SMI-MIB.txt`
   2. `IB-TRAP-MIB.txt`
   3. `IB-PLATFORMONE-MIB.txt`
   4. `IB-DNSONE-MIB.txt`
   5. `IB-DHCPONE-MIB.txt`
   6. `IB-DNSSERV-MIB.txt`
   7. `IB-DHCPSERV-MIB.txt`
   8. `IB-DHCPV6ONE-MIB.txt`
4. Click **Open** to load the MIBs into the MIB Tree.

## Step 2: Search for a specific SNMP trap

1. In the **MIB Tree**, navigate to:
   
   1. **iso → org → dod → internet → private → enterprises → infoblox**
2. Use **Ctrl + F** to search for the **Trap Name** (e.g., `ibThresholdCrossingEvent`).
3. Expand the results to view:
   
   1. **OID**
   2. **Trap Type (Notification Type)**
   3. **Bound Variables (e.g., ibNodeName, ibTrapSeverity, ibProbableCause)**

## Step 3: Retrieve OID and Trap Details

1. Right-click the **trap name** and select **Get Bulk** to retrieve details.
2. The **Results Table** will display:
   
   1. **OID**: Unique identifier for the trap.
   2. **Value**: Current system-reported value.
   3. **Type**: Data type (e.g., Integer, String).
3. Double-click an entry to see more details.
