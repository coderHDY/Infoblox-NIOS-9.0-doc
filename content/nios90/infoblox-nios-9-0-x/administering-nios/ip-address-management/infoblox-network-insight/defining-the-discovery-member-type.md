---
title: "Defining the Discovery Member Type"
source: "/space/nios90/280406342"
pageId: "280406342"
---
Before using Network Insight to discover devices and networks, you must first define the consolidator and probes in your Grid and specify the discovering interfaces on these members.

You choose between the following member types:

- **Probe**: Turns the appliance into a discovery Probe appliance.
- **Consolidator**: Turns the appliance into a discovery Consolidator appliance.
- **Unassigned**: Disables the discovery feature on the appliance.

When you first join discovery members to the Grid, the first discovery member that joins the Grid automatically becomes the Consolidator and all other discovery members become Probes. This is the Grid mode. If you have only one discovery member in the Grid, it becomes a Consolidator-Probe discovery appliance – this is the standalone mode.

On some occasions, you may wish to change an appliance with a Discovery license to a Consolidator or to a Probe, or change a Consolidator to a standalone discovery appliance. To make any of these changes, you must first stop the discovery service on the appliance. For more information, see [*Starting and Stopping the Discovery Service*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/starting-and-stopping-the-discovery-service).

To define the discovery member type:

1. From the **Infoblox** **Grid** tab, select** Grid** **Manager **-&gt; **Discovery** to display the list of members running the discovery service.
2. Select the discovery member for which you wish to change the member type.
3. If the discovery service is running on the member, stop it.
4. In the Toolbar, click **Edit** –&gt; **Member** **Discovery** **Properties**.
5. In the **General** tab –&gt; **Member Type** field, choose the required member type.
   
   Note that the **Consolidator** and **Unassigned** member types in the Grid mode are disabled if the member has SDN/SD-WAN configurations on it. This is because SDN/SD-WAN configurations can be added to only Probe or standalone member types. In the standalone mode all member types are available for selection.
6. Save the configuration.

To change the interface over which a member sends and receives discovery traffic, see [*Mapping Discovery Interfaces to Network Views*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/infoblox-network-insight/mapping-discovery-interfaces-to-network-views).
