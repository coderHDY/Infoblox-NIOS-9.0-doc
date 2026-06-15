---
title: "Defining Policies for Handling Discovered Data"
source: "/space/nios90/1468466176"
pageId: "1468466176"
---
In this step, define how the appliance handles discovered data.

1. For a new vDiscovery job: From the **Data** **Management** tab, select the **IPAM** tab, then select **vDiscovery** -> **New** from the Toolbar; or from the **Cloud** tab, select **vDiscovery** -> **New** from the Toolbar.  
   or  
   To modify an existing job: From the **Data** **Management** tab, select the **IPAM** tab and click **vDiscovery** -> **Discovery** **Manager** from the Toolbar, or from the **Cloud** tab, select **vDiscovery** -> **Discovery** **Manager** from the Toolbar. In the **vDiscovery** **Job** **Manager** editor, click the Action icon
   
   
   
   next to a selected job and select **Edit** from the menu.
2. In *Step 4 of 5*  of the v*Discovery* *Job* wizard, or in the **Data** **Consolidation** tab of the *vDiscovery* *Job* *Properties* editor, complete the following:  
   Under **When** ** inserting** ** discovered ** **into** ** NIOS**, select one or both of the following:
   
   - **Merge** **the** **discovered** **data** **with** **existing** **data:** When you select this checkbox, the appliance merges the discovered data with the existing data. It appends newly discovered data to existing data and preserves the existing data when there is no newly discovered data. This checkbox is selected by default. If you clear this checkbox, the appliance replaces the existing data with the newly discovered data and if there are no newly discovered values for some fields, the appliance removes the existing values for these fields and the fields become empty.
   - **Update discovered data for managed objects:** Select this checkbox if you want the appliance to update discovered data for all corresponding NIOS objects (if they exist in NIOS). If you do not select this checkbox, the appliance updates only the discovered data for unmanaged objects. None of the managed data will be updated. This checkbox is selected by default.
   - **For every newly discovered IP address, create**: Select this checkbox to enable NIOS to automatically create or update DNS records for discovered network entities and VM instances. It does not include cloud adapters such as AWS or DDNS. This is applicable if the records were originally created by vDiscovery. If you select this checkbox, NIOS considers all records created in a zone as one and calculate it as one serial number change.
     
     - **Host**: Select this to automatically create Host records for discovered entities.
     - **A & PTR Record**: Select this to automatically create A and PTR records for discovered entities. Note that the DNS zones and reverse-mapping zones to which the records belong must exist in NIOS before the vDiscovery job is executed. Otherwise, vDiscovery does not create the records.
     - **The DNS name will be computed from the formula**: Enter the formula that NIOS uses to create the DNS records for each discovered VM address. For example, if there are two IP addresses associated with a VM, NIOS creates two DNS records, or a host record with two IP addresses, depending on your configuration. You must use the syntax of `${parameter name}` for the formula.
       
       For AWS, Azure, Google Cloud, OpenStack, and VMware cloud platforms, this field supports the following parameters: `           vm_id, vm_name, discovered_name, tenant_id, tenant_name, subnet_id, subnet_name, network_id, network_name, vport_name, ip_address, ip_address_octet1 or 1, ip_address_octet2 or 2, ip_address_octet3 or 3, ip_address_octet4 or 4`. Note that it does not support IPv6 addresses.
       
       For example, when you enter` ${vm_name}.corpxyz.com `and the discovered vm_name = XYZ, the DNS name for this IP becomes `           XYZ.corpxyz.com         `. When you enter `           ${discover_name}         ` here and the discovered name for the IP is` ip-172-31-1-64.us-west-1.compute.internal,` the DNS name for this IP is `           ip-172-31-1-64.us-west-1.compute.internal`.
     - Under **Select the DNS view to which the DNS records are being added**, select one or both of the following:
       
       - **Use this DNS view for public IPs**: Select this checkbox to add DNS records to a specific DNS view for public IPs. Select a DNS view from the drop-down list. If you do not select a DNS view, the DNS records are added to the default DNS view.
       - **Use this DNS view for private IPs**: Select this checkbox to add DNS records to a specific DNS view for private IPs. Select a DNS view from the drop-down list. If you do not select a DNS view, the DNS records are added to the default DNS view.  
         If you are changing the DNS view, ensure that the **Merge the discovered data with existing data** checkbox is not selected.  
         Note that the **Use this DNS view for public IPs** and **Use this DNS view for private IPs** fields will be disabled, if you select **The tenant’s network view (if it does not exist, create a new one)** option when you define the network views to which discovered data belongs for both public and private IP addresses, as described in Defining Network Views above.
         
         Under **When discovered data is linked to managed data**, select any combination of the following. Tenants and VMs are managed objects when they have NIOS objects, such as host records or fixed addresses, associated with them. Otherwise, they are unmanaged objects. The appliance always updates properties for all unmanaged objects.
     - **Auto-consolidate** **on** **managed** **Tenant's** **properties:** When you select this checkbox, the appliance updates properties with discovered data for managed tenants, as well as unmanaged tenants (NIOS always updates unmanaged tenants). When you clear this checkbox, the appliance does not update discovered data for managed tenants. This checkbox is selected by default.
     - **Auto-consolidate** **managed** **VM's** **properties:** When you select this checkbox, the appliance updates properties and extensible attributes with discovered data for managed VMs, as well as unmanaged tenants (NIOS always updates unmanaged tenants). When you clear this checkbox, the appliance does not update discovered data for managed VMs. This checkbox is selected by default.
     - **Auto-consolidate** **Cloud** **EAs** **on** **managed** **data:** When you select this checkbox, NIOS updates discovered extensible attribute values for managed objects that contain cloud extensible attributes, only if a cloud license is installed in the Grid. This includes the update of the extensible attribute **VM** **ID** (which links the NIOS object to the VM) whenever a VM is added, updated or removed depending on the information collected. As a result, when a VM instance reuses an IP address or when a VM instance is deleted in the Cloud, the DNS Records or fixed address tied to that IP address are also updated, reflecting the new value of the VM instance ID. To update cloud extensible attributes for unmanaged objects, convert the objects to managed objects in NIOS. For more information, see [ ](#)[*Managing Unmanaged Data*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432719297).  
       The extensible attribute **VM** **ID** is not updated if you do not enable the **Auto-consolidate** **Cloud** **EAs** **on** **managed** **data** checkbox, which leads to a conflict on that IP address. The NIOS object does not link to the same VM as the newly discovered IP. In such cases, you can use the **Resolve** **Conflicts** option to update either your NIOS objects or your discovered data. For information about resolving conflicts, see [*Resolving Conflicting Addresses*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1432719329).
3. Click **Next** to schedule this vDiscovery job and specify when the job should start, as described in *Scheduling vDiscovery Jobs* below.
