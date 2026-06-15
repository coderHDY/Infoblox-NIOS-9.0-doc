---
title: "Managing Inheritable Extensible Attributes at the Parent and Descendant Level"
source: "/space/nios90/1340802820"
pageId: "1340802820"
---
You can define if descendants will inherit values from the parent when a new extensible attribute is added to the parent. You can also choose to override the values of the extensible attributes on the descendants.  
When you delete an existing attribute, you can choose to either preserve the values at the descendant level or delete the values inherited by the descendants.

> **warning**
>
> ### Note
> 
> The *Descendant* *Actions* dialog box is displayed only when an object has descendants and you are modifying extensible attributes that affects those descendants. However, the dialog box is always displayed when a join is performed for a network that has inheritable extensible attributes.

The following section describes configuration changes for inheritable extensible attributes:

1. **Network** Container: From the **Dashboards **tab, select the **Tasks **tab -> click **Add** **Networks**. Select a network, enter the required details. You can edit the inheritable extensible attributes that are displayed automatically. If this is a parent object, then you can add extensible attributes.  
   **IPv4 Network**: From the **Data Management** tab -> select the **DHCP** tab -> Networks tab. In the Networks section, select **IPv4 Network** from the Add drop-down menu. In the *Add IPv4 Network* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **IPv6 Networ**k: From the **Data Management** tab -> select the **DHCP** tab -> **Networks** tab. In the **Networks** section, select** IPv6 Network** from the Add drop-down menu. In the *Add IPv6 Network* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **IPv4 Range**: From the **Data Management** tab > select the **DHCP** tab -> **Networks** tab -> **Networks** tab -> network > click addr_range, select **Range** from the Add drop-down menu. In the *Add IPv4 Range* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **IPv6 Range**: From the **Data Management** tab > select the **DHCP** tab -> **Networks** tab -> **Networks** tab -> network > click addr_range, select **Range** from the Add drop-down menu. In the *Add IPv6 Range* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **Zones**: From the **Data Management** tab >  select the **DNS **tab - > **Zones** tab - > click Add. In the *Add Zone *wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.   
   **DNS View**: From the **Data Management** tab >  select the **DNS **tab - > In the toolbar select Add - > Select **DNS View**. In the *Add DSN View *wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **Host**: From the **Data Management** tab >  select the **DNS **tab - > **Zones** tab - > click Add. In the Add section, select **Host** or **Bulk Host** from the Add drop-down menu. In the *Add DNS View* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **Record**: From the **Data Management** tab >  select the **DNS **tab - > **Zones** tab - > click Add. In the Add section, select **Record **from the Add drop-down menu select the record type. In the *Add DNS View* wizard, enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **VLAN Range: **From the Data Management tab > select the **VLANs **tab - > click Add, select **VLAN Range **from the Add drop-down menu. In the *Add VLAN Range Wizard, *enter the attributes in the **Extensible Attributes** tab after specifying the required details.  
   **VLANs: **From the Data Management tab > select the **VLANs **tab - > click Add, select **VLAN **from the Add drop-down menu. In the *Add VLAN *wizard*, *enter the attributes in the **Extensible Attributes** tab after specifying the required details.
2. You can either add new extensible attributes to the parent object or modify original extensible attribute values. Click on the extensible attribute value displayed in the **Value** column of the respective attribute to modify the original value or click the Add icon to add a new attribute.
3. Select a state from the drop-down list displayed in the **Inheritance** **State** column. Note that you can only change the inheritance state of a descendant. You must select **Overridden** from the drop-down list to enter a new value. For more information about inheritance states, see Inheritance States* *table below. When an object has a parent and the parent does not have the object's inheritable extensible attribute, then the inheritance state of the extensible attribute is set to **No** **Parent** and the state cannot be changed.
4. **Select** **the** **inheritable** **extensible** **attributes** **for** **which** **you** **want** **to** **modify** **descendant** **actions:** Select this checkbox if you would like to apply the actions of the *Descendant* *Actions* dialog box for existing extensible attributes. Before you select this checkbox, you must select the extensible attributes which will be affected by the actions of the *Descendant* *Actions* dialog box.
   
   Note this checkbox is not displayed for hosts, fixed addresses, and reservations since they do not have descendants.
5. In the *Descendant* *Actions* dialog box, select options that will be applied for descendant objects as described in Configuring Inheritable Extensible Attributes.  
   The *Descendant* *Actions* dialog box displays all the mentioned options when you perform add and delete operations simultaneously. Consider an example where you add a new inheritable extensible attribute **Site**, and delete an existing inheritable attribute **Region** from the parent object, and then click **Save** to save both changes. In this case, the *Descendant* *Actions* dialog box displays all the options.
6. Save the configuration.
