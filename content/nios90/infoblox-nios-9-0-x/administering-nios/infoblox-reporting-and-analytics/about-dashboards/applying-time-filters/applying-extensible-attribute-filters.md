---
title: "Applying Extensible Attribute Filters"
source: "/space/nios90/1356890425"
pageId: "1356890425"
---
You can use extensible attribute filters to narrow down the search by including only members that contain certain extensible attribute values. An extensible attribute added to a member is displayed in the **Extensible** **Attribute** filter. For information about managing extensible attributes, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes). When you configure group-by-extensible-attribute search and apply the **Extensible** **Attribute** filter, the dashboard displays results for grouped members that have the same extensible attribute value for the **Site** extensible attribute. If you have configured multiple attribute values for a member, then applying the **Extensible** **Attribute** filter displays all the attribute values associated with that member. For example, if member 1 has predefined attribute **Site** with attribute values `member a` and `member b` and member 2 has predefined attribute **Site** with attributes values `member c` and `member d`, then the dashboard displays `member a` and `member b` when you apply the **Member** **Site** **&lt;member** **1&gt;** filter.  
In addition, you can apply **Group** **By** **EA** **Tag** filter and group members with the same extensible attribute value so that instead of displaying data per member, the reports display data per group of members with the same value for the **Site** extensible attribute. When you apply **Group** **By** **EA** **Tag** filter, you can set the data calculation method to decide which statistic value [Aggregate, Average, or Maximum] you want to be displayed for grouped members. You can group by Active Directory Sites for the *IPAMv4* *Network* *Usage* *Statistics* report, *IPAMv4* *Top* *Utilized* *Networks* report, and *DHCPv4* *Network* *Usage* *Statistics* report.  
To apply an extensible attribute and group by EA tag/field filters:

1. From the **Reporting** tab, select the **Dashboards** tab -&gt; select a dashboard.
2. In the filter section, complete the following:
   
   - **Member &lt;Extensible** **Attribute&gt;:** Select an extensible attribute configured for a member. If you need an additional extensible attribute filter, you must first clone the default dashboard, and then add an extensible attribute filter by editing the XML source code. For information, see Editing the XML Source Code of a Dashboard above.
   - **Group By** **EA** **Tag/Field**: Select an extensible attribute to enable the reporting server to group networks by members that have certain extensible attribute tags or fields. Note that this option is available for specific dashboards only.  
     Note that if you use special characters in the extensible attribute name, the appliance replaces these special characters with equivalent values. For example, the extensible attribute **Site** **In** **London** is displayed as Site20In20London in the **Group** **By** **EA** **Tag/Field** drop-down list. In this example, space is replaced with 20. If you add the extensible attribute **London@**, it is displayed as **London40** in the **Group** **By** **EA** **Tag/Field** drop-down list.
   - **Calculation** **Methods**: This field is enabled only when you select the **Group** **by EA** **Tag/Field** checkbox. The displayed result varies based on your search definitions. The result values can contain information such as event counts, DNS queries, traffic rate, and usage trends. For example, when you select **Maximum**, the *DNS* *Query* *Rate by Member* dashboard shows all the members that have the same extensible attributes and members with the maximum DNS queries, and the *DNS Infrastructure* *Protection Event* *Count* *By* *Member* dashboard shows the members that have the same extensible attributes and maximum event counts. Select one of the following methods:
     
     - **Aggregate**: Displays the sum of values for individual members in a group.
     - **Average**: Displays the mathematical average of a group. This value is obtained by adding values for all members in a group and then dividing the total by the number of members.
     - **Maximum**: Displays the maximum value among the members in a group.

> **warning**
>
> ### Note
> 
> When you apply **GroupByEATag/Field** in Active Directory Sites supported reports, the values displayed in these reports are aggregated sum of absolute values (sum of values of individual networks in a group) and utilization% is the mathematical average of the group.

You can configure the group-by-extensible-attribute filter and data calculation methods for the following dashboards only. For more information about these dashboards, see [*Predefined Dashboards*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-reporting-and-analytics/predefined-dashboards)*.*

- CPU Utilization Trend (Detailed)
- IPAMv4 Network Usage Statistics
- IPAMv4 Top Utilized Networks
- IPAMv4 Network Usage Trend
- DDNS Update Rate Trend
- DHCPv4 Usage Statistics
- DNS Daily Query Rate by Member
- DNS Query Rate by Member
- DNS Daily Peak Hour Query Rate by Member
- DNS Response Latency Trend
- DNS Cache Hit Rate Trend
- DNS Traffic Control Resource Availability Trend
- DNS Traffic Control Resource Pool Availability Trend
- DNS Traffic Control Response Distribution Trend
- Memory Utilization Trend
- Traffic Rate by Member
- DNS Infrastructure Protection Event Count By Member
- DNS Infrastructure Protection Event Count By Member Trend
