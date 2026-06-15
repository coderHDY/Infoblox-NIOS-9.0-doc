---
title: "Configuring Network Views"
source: "/space/nios90/280404336"
pageId: "280404336"
---
A network view is a single routing domain with its own networks and shared networks. A network view can contain both IPv4 and IPv6 networks. All networks must belong to a network view.

You can manage the networks in one network view independently of the other network views. Changes in one network view are not reflected in other network views. Because network views are mutually exclusive, the networks in each view can have overlapping address spaces with multiple duplicate IP addresses without impacting network integrity.  
For example, two corporations, Corp 100 and Corp 200, merge. They each have their own networks and DNS domains. They also have their own private IP address spaces in the 10.0.0.0/24 network. Both corporations have DHCP and DNS servers, and use dynamic DNS updates. The DHCP servers of each corporation serve IP addresses for networks in their respective corporations. The DHCP clients in each corporation update DNS zones within their DNS domains.  
They plan to migrate the networks and hosts in Corp 200 to the Corp 100 address space and the corpxyz.com domain. To support both networks in the meantime and to facilitate the migration, you can configure an Infoblox Grid to centrally manage the networks and domains of both corporations. As shown in the figure *Two Network Views Managed by a Grid*, you can configure network views for each corporation and manage their networks independently of the other.  
Member 1 serves DNS and DHCP to Corp 100. The networks of Corp 100 are contained in the corp 100 network view, which is associated with both the internal and external DNS views of the corpxyz.com domain. Member 2 serves DNS and DHCP to Corp 200. The networks of Corp 200 are in the corp 200 network view, which is associated with both the internal and external DNS views of the corp200.com domain The two corporations have one overlapping network, 10.1.1.0/24.  
*Two* *Network* *Views* *Managed* *by* *a* *Grid*

*[drawio]*

A DHCP Grid member can serve one network view only, but a network view can be served by multiple Grid members. DHCP failover associations must be defined within a single network view, and both the primary and secondary peer must serve the same network view.  
The NIOS appliance provides one default network view. You can rename the default view and change its settings, but you cannot delete it. There must always be at least one network view in the appliance. If you do not need to manage overlapping IP address spaces in your organization, you can use the system-defined network view for all your networks. You do not need to create additional network views. But if there are overlapping IP address spaces and you need more than one network view, you can create up to 1000 network views.  
Each network view must be associated with at least one DNS view. The default network view is always associated with the default DNS view, which also cannot be deleted. When you create a network view, the appliance automatically creates a corresponding DNS view with the same name as the network view, but with "default" prepended to the name. You can then rename that system-defined DNS view, but you cannot delete it.  
A network view can be associated with multiple DNS views (as shown in the figure *Two Network Views Managed by a Grid *), but a DNS view cannot be associated with more than one network view. Each network view must be associated with a unique set of DNS views.  
You can initiate a network discovery in only one network view at a time. When you run a discovery task, the appliance sends updates to all DNS views associated with the network view. (For information about network discoveries, see [*IP Discovery and vDiscovery*](/nios90/infoblox-nios-9-0-x/administering-nios/ip-address-management/ip-discovery-and-vdiscovery/about-discovery).

# Adding Network Views

All networks must belong to a network view. You can use the default network view on the appliance and create additional network views, as needed. If you plan to enable DDNS (dynamic DNS) updates on any of the networks, DHCP ranges and fixed addresses in the network view, you must set parameters that specify which DNS view is updated for each network view.

> **warning**
>
> ### Note
> 
> If there are more than 20 network views, the appliance lists the available network views in the *Network* *View* *Selector* dialog box. If there are 20 or less than 20 network views, the appliance displays them in the drop-down list.

To create a network view:

1. From the **Administration** tab, select the **Network** **Views** tab, and then click the Add icon.
2. In the *Network* *View* wizard, do the following:
   
   - **Name**: Enter the name of the network view.
   - **Comment**: Enter useful information about the network view.  
     The **Cloud** section displays if the Cloud Network Automation license is installed on the Grid Master. For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation).  
       
     **Delegate** **authority** **from** **the** **Grid** **Master**
   - **Delegate To**: This field indicates whether the authority for the network view you want to create has already been delegated to a Cloud Platform Appliance. Click **Select** to choose the Cloud Platform Appliance to which you want to delegate authority. The *Member* *Selector* displays only Cloud Platform Appliances in the Grid. Click the member, and Grid Manager displays the member name next to this field. This cloud member now assumes authority for this network view, and the Grid Master does not have authority anymore. You can also click **Clear** to remove authority delegation from the selected Cloud Platform Appliance and return authority back to the Grid Master.  
     Note that you need to install CP license before you configure a Grid with CP member. If you attempt to add a network view without installing CP license, the **Delegate To** field shows the following warning message:   
     *There are no objects to select*.
     
     NIOS does not display any warning message that prompts you to install the CP license.  
       
     **Restricting** **synchronization** **of** **network** **views**
   - **Disable** **sync** **to** **MGM**: Select this checkbox to disable synchronization. This will restrict the synchronization of all objects that are associated with the network view. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.
   - **Disable discovered data sync with MGM:** Select this checkbox to disable the synchronization of discovered data with Multi-Grid Master. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.
3. Click **Next** to enter values for required extensible attributes or add optional extensible attributes for the network view. For information, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
4. Click **Next**, and then save the configuration or select:

**Configure** **DDNS** **Properties**: Configure the DNS zones that are associated with the network view to receive DDNS updates. When you select this option, the *Configure* *DDNS* *Properties* dialog box appears. The appliance saves the network view entry before it opens the *Configure* *DDNS* *Properties* dialog box. For information, see [*Configuring DDNS Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/understanding-ddns-updates-from-dhcp).

# Modifying Network Views

1. From the **Administration** tab, select the **Network Views** tab -&gt; *network_view* checkbox, and then click the Edit icon.
2. The *Network View* editor provides the following tabs from which you can edit data:
   
   - **General**: You can modify **Name** and **Comments** in this tab. When the Cloud Network Automation license is installed on the Grid Master, Grid Manager displays the following in the **Cloud** section:  
     You see the following when Cloud Network Automation is deployed (For information, see [*Deploying Cloud Network Automation*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-cloud-network-automation)):
     
     - **Cloud Usage**: This field indicates whether this object is associated with any specific cloud extensible attributes or within a scope of delegation. It can be one of the following:
       
       - **Cloud from adapter**: Indicates that this object has been created by a cloud adapter and it may or may not be within a scope of delegation at the moment.
       - **Cloud from delegation**: Indicates that this object is within the scope of delegation or the object itself defines a scope of authority delegation, and it is not created by a cloud adapter.
       - **Used by cloud**: Indicates that this network or network container is associated with the extensible attribute **Is External** or **Is Shared** and the value is set to True, which implies the network is a private or shared network managed by the CMP, and it is not **Cloud from adapter** or **Cloud from delegation**.
       - **Non-cloud**: The object is a regular NIOS object and is not within the scope of any authority delegation nor is it associated with any of these extensible attributes: **Cloud API Owned**, **Is External**, or **Is Shared**. NIOS admin users can modify this object based on their permissions.
     - **Owned By**: A cloud object can be owned by the Grid Master or the cloud adapter. When the object is created by the Cloud Platform member, this shows **Grid**. If the object is created by the cloud adapter, this shows **Adapter**.
     - **Delegated To**: This tells you whether a cloud object has been delegated to a Cloud Platform Appliance or not. If the cloud object has a parent object and the parent has been delegated, this field shows the parent delegation and you cannot modify the field.  
       **Restricting synchronization of network views**
     - **Disable sync to MGM**: Select this checkbox to disable synchronization. This will restrict the synchronization of all objects that are associated with the selected network view. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.
     - **Disable discovered data sync with MGM:** Select this checkbox to disable the synchronization of discovered data with Multi-Grid Master. This checkbox is available only on the managed Grid when it remains joined with the Multi-Grid Master.
   - **Members**: This tab displays the members that provide DHCP services for the networks in this network view.  
     You cannot modify information in this tab. It displays the following:
     
     - **Name**: The name of the DHCP member.
     - **IP Address**: The IP address of the DHCP member.
     - **Failover Association**: The name of the failover association to which the DHCP member belongs. If there are multiple failover associations, only the first one is displayed.
     - **Comment**: The information that you entered for the DHCP member.  
       You can sort the information in the table by column. You can also print and export the information.
   - **Extensible Attributes**: Add and delete extensible attributes that are associated with a specific network view. You can also modify the values of extensible attributes. For information, see [*About Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes)
   - **Permissions**: This tab displays only if you belong to a superuser admin group. For information, see* *[*Administrative Permissions for DHCP Resources*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/administrative-permissions-for-dhcp-resources).

# Deleting Network Views

You can delete any network view, except for the default network view. You can delete a network view that has only one DNS view associated with it. You cannot delete a network view that has more than one DNS view associated with it. When you delete a network view, the appliance deletes all the networks and records within the network view.   
  
To delete a network view:

1. From the **Administration** tab, select the **Network** **Views** tab -&gt; *network_view* checkbox, and then click the Delete icon.
2. In the *Delete* *Confirmation* dialog box, click **Yes**.

The appliance removes the network view and its associated DNS views. You can restore the network view from the Recycle Bin, if enabled. If you restore a network view, the appliance restores the associated DNS views as well. For information about the Recycle Bin, see [*Using the Recycle Bin*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).

> **warning**
>
> ### Note
> 
> You cannot delete a network view that has a VLAN object assigned to it. For more information, see [*Assigning VLANs to a Network*](/nios90/infoblox-nios-9-0-x/administering-nios/vlan-management/assigning-vlans-to-a-network).
