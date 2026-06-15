---
title: "Defining Topology Rulesets"
source: "/space/nios90/1412137451"
pageId: "1412137451"
---
A topology ruleset can contain multiple rules. The rules in a topology ruleset must use the same destination type. Multiple LBDNs or pools can reuse a topology ruleset.

Each server that you use as a destination in the topology must exist in every pool that is using the topology. When you select Topology as a load balancing method for a pool, you can select one of these rulesets for the topology rules. The ruleset can be a combination of extensible attribute, subnet, and/or geography rules.

Note the following about extensible attribute, subnet, and geography source matches:

- A rule with an extensible attribute source matches if a client query comes from the network that has the specified set of extensible attributes. In other words, extensible attributes you specify when you create a rule.
- A rule with a subnet source matches if the subnet contains the client IP address.
- A rule with a geography source label matches if the client IP address and geography source label match corresponding information in the MaxMind location database.

Note the following information about rules and rulesets:

- When you upload a new MaxMind location database or restore a backup, the appliance does not automatically remove rules that contain invalid labels. Instead, it marks the rules with labels that do not exist in the database as invalid. The appliance ignores these rules during the querying process, and you cannot save the configuration if it is modified, but you can use the existing configuration.
- The appliance checks specific combinations of labels when the rules use multiple conditions. For example, if you have a rule with the source types Country = Canada and City = Vancouver and you change the Country source type to Russia, the City source type is cleared and the selector resets to contain only known cities in Russia. This is applicable for both geography and extensible attribute rules.

The following is an example of valid source types:

| **Continent** | **Country** | **Subdivision** | **City** |
| --- | --- | --- | --- |
| Any | Canada | Any | Vancouver |
| Any | Any | Any | Vancouver |
| North America | Any | Any | Vancouver |
| North America | USA | Washington | Vancouver |

- When rules have multiple source conditions, the client must match all conditions for the rule to execute.
- A ruleset may have multiple subnet rules and the subnets may overlap. Similarly, a ruleset may have multiple geography rules and the matches may overlap. Similarly, a ruleset may have multiple extensible attribute rules and the matches may overlap. During the querying process, the rules in a topology ruleset are evaluated in order. For example, if you configure subnet rules where #1 is 10.10.0.0/16 and #2 is 10.0.0.0/8, both are considered valid in the appliance.

To define a ruleset, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, and then click **Manage** **Topology** **Rulesets** in the Toolbar.
2. In the *Topology* *Manager* window, click the Add icon.
3. In the *Ruleset* wizard that appears, complete the following:
   
   - **Name**: Enter a name for the ruleset.
   - **Destination** **Type**: Select a destination type, **Pool**, or **Server**. Rulesets with the Pool destination type can only be used by LBDNs. Rulesets with the Server destination type can only be used by pools. You cannot change the destination type if the ruleset contains any rules.
   - **Comment**: Enter additional information about the ruleset.
   - **Rules**: You can define multiple extensible attribute rules, subnet rules, and geography rules in the ruleset. Click the arrow next to the Add icon and select either **Extensible** **Attribute** **Rule**, **Subnet** **Rule**, or **Geography** **Rule**.
     
     - When you select **Extensible** **Attribute** **Rule**, the Grid Manager displays the following:
       
       - **Source** **Type**: Define up to four extensible attributes to use as the source type for the EA topology ruleset. The values for the IPAM object EAs are provided from the DNS Traffic Control EAs selected in the Grid DNS Properties editor. To define extensible attribute source types for the topology rules, see [*Configuring Grid DNS Traffic Control Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-traffic-control-properties).  
         Note that "Any" matches any value. There must be at least one source type with a specific value (the value is not "Any").   
         When a source type uses "does not equal" as the operator, it must be the lowest level source type (most specific). For example, with Continent/Country/Subdivision/City, City is the most specific source type.
       - **Destination/Response**:
         
         - **DTC Pool/Server**: Click **Select** to select a destination. The appliance displays the *DTC* *Pool* *Selector* dialog box when you have selected the Pool destination type, and displays *DTC* *Server* *Selector* dialog box when you have selected the Server destination type. Click a specific pool or server to select it. Note that if there is only one pool or server, no dialog box is displayed when selecting the destination.
         - **NOERROR/NODATA (Response)**: Select this option to provide a **NOERROR/NODATA** response for DTC queries.
         - **NXDOMAIN (Response): **Select this option to provide an **NXDOMAIN** response for DTC queries.  
           Click **Add** to add the source. The appliance displays the following information in the Rules table:
           
           - **Source**: The values of extensible attributes that you specified.
           - **Destination**: The destination that you selected.
           - **Valid Source**: After you save the ruleset, the value is set to **Yes** if the extensible attributes exist in the EA database.
             
             Note that the source must be valid when creating a ruleset. It can become invalid when a new topology database no longer contains the source.
           - **Order**: Displays the order of the rule in the ruleset.
           - **Return Type:** The response type that is selected.
     - When you select **Subnet Rule**, the Grid Manager displays the following:
       
       - **Source Subnet**: Select a value from the drop-down list. You can either select **equals** or **does not equal,** and specify a subnet IP address or click **Select** and choose a network from the *Network Selector* dialog box.  
         Note that "Any" matches any value. There must be at least one source subnet with a specific value (the value is not "Any").  
         When a source subnet uses "does not equal" as the operator, it must be the lowest level source subnet (most specific).
       - **Destination/Response**:
         
         - **DTC Pool/Server**: Click **Select** to select a destination. The appliance displays the *DTC Pool Selector* dialog box when you have selected the Pool destination type and displays the *DTC Server Selector* dialog box when you have selected the Server destination type. Click a specific pool or server to select it. Note that if there is only one pool or server created, no dialog box is displayed when selecting the destination.
         - **NOERROR/NODATA (Response)**: Select this option to provide a **NOERROR/NODATA** response for DTC queries.
         - **NXDOMAIN (Response)**: Select this option to provide an **NXDOMAIN** response for DTC queries.  
           Click **Add** to add the source. The appliance displays the following information in the Rules table:
           
           - **Source**: The subnet address that you specified.
           - **Destination**: The destination that you selected.
           - **Valid Source**: For a subnet rule, the rule is always marked as valid after you save the ruleset.
           - **Order**: Displays the order of the rule in the ruleset.
           - **Return Type: **The response type that is selected.
     - When you select **Geography** **Rule**, Grid Manager displays the following:
       
       - **Source** **Type**: Select a source type.
       - **Continent**: Select a continent from the drop-down list. You can also enter the first few characters of the continent to match an item in the database.
       - **Country**: Select a country from the drop-down list. You can also enter the first few characters of the country to match an item in the database.
       - **Subdivision**: Select a subdivision from the drop-down list. You can also enter the first few characters of the subdivision to match an item in the database.
       - **City**: Select a city from the drop-down list. You can also enter the first few characters of the city to match an item in the database. The drop-down list has paging controls to page through the available values.
       - **Destination/Response**:
         
         - **DTC Pool/Server**: Click **Select** to select a destination. The appliance displays the *DTC Pool Selector* dialog box when you have selected the Pool destination type and the displays *DTC Server Selector* dialog box when you have selected the Server destination type. Click a specific pool or server to select it. Note that if there is only one pool or server created, no dialog box is displayed when selecting the destination.
         - **NOERROR/NODATA (Response)**: Select this option to provide a **NOERROR/NODATA** response for DTC queries.
         - **NXDOMAIN (Response)**: Select this option to provide an **NXDOMAIN** response for DTC queries.  
           Click **Add** to add the source. The appliance displays the following information in the Rules table:
           
           - **Source**: The subnet address that you specified.
           - **Destination**: The destination that you selected.
           - **Valid Source**: After you save the ruleset, the value is set to **Yes** if the labels exist in the MaxMind location database.
           - **Order**: Displays the order of the rule in the ruleset.
           - **Return Type: **The response type that is selected.
           - **Default destination if none of the above rules match (optional)**: Click **Select** to select the default destination if none of the above rules match. The appliance displays the *DTC Pool Selector* dialog box when you have selected the Pool destination type and displays the *DTC Server Selector* dialog box when you have selected the Server destination type. Click a specific pool or server to select it. You can click **Clear** to remove the selected pool or server. Note that you can select a default destination even if there are no rules defined in the Rules table.
4. If necessary, modify the order of rules in the table. You can do so by editing the value in the **Order** column or by using the arrows on the left-hand side of the table.
5. Click **Next**.
6. Define the extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
7. Click **Next** to schedule a change. In the *Schedule Change* panel, click **Now** to immediately execute this task. Or click **Later** to schedule this task, and then specify a date, time, and time zone.
8. Click **Save & Close**.

> **warning**
>
> ### Note
> 
> After making changes to the extensible attributes, you may need to rebuild the topology EA database. For more information, see Rebuilding EA Database below*.*
