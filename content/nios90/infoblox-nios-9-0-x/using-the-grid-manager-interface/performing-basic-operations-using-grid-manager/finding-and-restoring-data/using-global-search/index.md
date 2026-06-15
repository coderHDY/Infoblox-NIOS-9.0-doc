---
title: "Using Global Search"
source: "/space/nios90/1343161415"
pageId: "1343161415"
---
You can use the global search function to search the entire NIOS database for data that matches a specific value and filter criteria. You can define filter criteria and enter applicable search values to refine the search. Grid Manager supports regular expressions in global search. Grid Manager can display up to 500 search results. When search results exceed 500, a warning message appears and you may want to refine your search. Search results remain in the *Search* dialog box until you reset the search parameters or log out of Grid Manager. You can search for DNS zones and resource records that contain IDNs. For information about IDNs, see [*Managing Internationalized Domain Names*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/managing-internationalized-domain-names).  
Based on your search requirements, you can choose to perform a basic search or an advanced search.  
A basic global search provides a faster way to locate frequently searched results using one specific filter criterion. It is designed to handle a large amount of data in an efficient manner. Supported filtering objects are DNS name (FQDN or CNAME only), DUID, IP address and MAC address. This is the recommended global search method if you have a large data set and only need to search by a single filter criterion. You cannot use regular expressions in a basic global search.  
An advanced global search allows you to perform complex searches by defining multiple filter criteria. You can add up to 10 filtering rules. You can also include existing extensible attributes for the matching objects.  
Note that if a search result contains duplicate records, the appliance displays only one record and discards others. For example, if the canonical name matches an alias name, the appliance displays only one CNAME record in the result.

> **warning**
>
> ### Note
> 
> - Depending on the size of your database, global search may take a long time to complete. Grid Manager times out when queries or searches take longer than 120 seconds. To expedite searches, use filters to refine the search criteria. You can also use basic global searches if you have a large data set and you only need to search by a single filter criterion.
> - To search for any DHCP objects or its attributes using Global Search, you must have DHCP license installed.

You can also do the following in the Results table:

- Click the Open icon to view detailed information of the matching object.
- Click the Edit icon to edit the matching object information. For information about [*Editing Matching Objects in Search Results*](/nios90/by-id/1343325187).
- Click the Extensible Attributes icon to edit the value of the respective extensible attribute. For information about [*Editing Multiple Extensible Attributes in Search Results*](#).
- Click the Export icon to export the data displayed in the Results table.
- Click the Print icon to print the data displayed in the Results table.

To perform a global search:

1. Click the Global Search icon on the navigation bar.   
   By default, the appliance opens the **Basic** tab of the *Search* dialog box.
2. Do one of the following:
   
   - If you want faster search results and you can search by DNS name, DUID, IP address, or MAC address, do the following in the **Basic** tab:  
     **Include** **Network** **Insight** **Devices** **and** **Interfaces**: This appears only when you have the Network Insight license installed. Select this checkbox to include devices and interfaces discovered through Network Insight. Note that it might take longer than expected for the appliance to return results for these objects. The setting is saved between user sessions.
     
     - **ChooseFilter**: Select a value from the drop-down list. You can explicitly search by DNS name (FQDN or CNAME only), DUID, IP address, or a MAC address. Note that you can apply only one filter at a time.
     - **ChooseOperator**: Select an operator for the filter criterion. Depending on what you select in the first filter field, this list displays the relevant operators for the selection. Possible values include **equals**, **beginswith**, and **contains**. For example, if you choose a **DNSName** filter, **contains** is the only applicable operator.
     - In the value field, enter the value for the filter field. For example, if you select DUID in the first filter field, you can enter the DUID of the client's device in the value field.
   - If you have a more complex search requirement and need to include multiple filter criteria, do the following in the **Advanced** tab:
     
     - In the first field, enter the value that you want your search results to match. For example, if you want to search for hostnames that contain "Infoblox," enter **Infoblox** in this field. You can also specify the value of an inheritable extensible attribute. You can use regular expressions in the search value.
     - In the **Type** drop-down list, select an object type, comment, or an extensible attribute (fields with a gray background) as the filter criterion. Grid Manager displays all the supported fields in the drop-down list. The default is **Type**. Grid Manager searches all objects when you use the default. You can narrow down the search and improve the search performance by selecting an object type. Extensible attributes are displayed with a gray background.
     - In the operator drop-down list, select an operator for the filter criterion. Depending on what you select in the first filter field, this list displays the relevant operators for the selection. The operator **InheritanceStateequals** is displayed only when you select an inheritable extensible attribute from the **Type **drop-down list. This operator is not displayed if the extensible attribute is not inheritable.
     - In the value field, enter or select the attribute value for the first filter field. Depending on what you select for the first two filter fields, you can either enter a value or select an attribute from a drop-down list. For example, if you select an extensible attribute in the first filter field, you can enter the attribute value here. If you use the default **Type** in the first filter field, you can select an object or record type from the drop-down list. The default is **ALL**. Grid Manager searches all object types when you use the default. If you select an inheritable extensible attribute from the **Type** drop-down list, and select **InheritanceStateequals** in the operator drop-down list, the value field displays a drop-down list with these values: **Inherited** and **Overridden/NoParent**. When you select **Inherited**, extensible attributes that are inherited by the descendants are listed. When you select **Overridden/NoParent**, extensible attributes which are overridden or do not have a parent are listed.
     - Optionally, click the **+** icon to add another filter. You can add up to 10 filter rules.
     - **IncludeExtensibleAttributesValues**: Select this checkbox to include extensible attributes in the search results for the matching objects. Once selected, this configuration affects all future searches for the current user. Note that it might take longer for the search results to appear if there are a large number of extensible attributes associated with the matching objects.
3. Optionally, you can click **Reset** to clear the search results and start a new search. You can also click the Refresh icon to refresh the search results.  
   Grid Manager stores the search results until you reset the search parameters or log out.
4. After you finish defining filters, click **Search** or press **Enter**.

> **warning**
>
> ### Note
> 
> You can save each search that contains multiple filter criteria as a quick filter for future use. For information about quick filters, see [*Using Quick Filters*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data/using-quick-filters).

In the Results table, Grid Manager displays the following information:

- **Name**: The name of the matching object. This field displays the name of the matching object and the path to the matching object if the object is a network or an IP address. You can click the link to open, view, and edit the object.
- **Type**: The type of the matching object. For example, bulk host, NS record, forward-mapping authoritative zone, or network container.
- **MatchedProperty**: The attribute or property of the matching object. For example, if the search value matches the email address that corresponds to a hostname, this field displays **Email**. If the search value matches the DNS view of a resource record in a DNS zone, this field displays **DNSView/FQDN**.
- **MatchedValue**: The value of the matching object. For example, if an IP address contains the search value, this field displays the IP address. If a hostname contains the search value, this field displays the hostname.
- **IPAddress**: The IP address of the matching object. When you click the IP address link, Grid Manager displays the corresponding IP address panel from which you can view detailed information.
- **Comment**: Comments that were entered for the matching object.
- **Site**: Values that were entered for the matching object.

> **warning**
>
> ### Note
> 
> If you have selected to include extensible attribute values, you can select the corresponding columns to be displayed in the search results. Extensible attribute columns are hidden by default.

In this section:

*[children]*
