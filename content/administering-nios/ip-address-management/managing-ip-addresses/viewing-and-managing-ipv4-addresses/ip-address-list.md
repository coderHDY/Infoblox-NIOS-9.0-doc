---
title: "IP Address List"
source: "/space/nios90/1345030207"
pageId: "1345030207"
---
The IP address **List** panel displays all IPv4 addresses of a selected subnet in table format. The list provides information about the IP addresses in a hierarchy view. You can use this list to view detailed information about each IP address and its related objects in a selected network. This list provides information such as address status, object type, and usage.

You can configure filter criteria to display only IP addresses that you want to see in the table. For example, you can enter "MAC Address begins with 00" as the filter criteria to view only IP addresses that have associated MAC addresses that begin with 00. You can also enter a specific IP address in the **Go** **to** field to view information about the address.

Grid Manager can display the following information for the IP addresses. You can edit the columns to display information that is not shown by default.

- **IP** **Address**: The IP address of the corresponding record. The appliance highlights disabled DHCP objects in gray. A DHCP object can be an DHCP address range, fixed address, reservation, host configured for DHCP, or roaming host with an allocated IP address.
- **Name**: The name of the object type associated with the IP address. For example, if the IP address belongs to a host record, this field displays the hostname.
- **MAC** **Address**: The discovered MAC address of the host. This is the unique identifier of a network device. The discovery acquires the MAC address for hosts that are located on the same network as the Grid member that is running the discovery. This can also be the MAC address of a virtual entity on a specified vSphere server.
- **Bridge** **Domain**: The name of the discovered bridge domain. This column will display values only for IP addresses that are discovered from Cisco APIC through Network Insight or NetMRI. If discovered by NetMRI, the value will be populated through IPAM Sync. Otherwise, this column will be blank. For information about how to configure Cisco APIC, see [*Configuring Cisco Application Policy Infrastructure Controller (APIC)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248).
- **Tenant**: The name of the discovered tenant. This column will display values only for IP addresses that are discovered from Cisco APIC through Network Insight or NetMRI. If discovered by NetMRI, the value will be populated through IPAM Sync. Otherwise, this column will be blank. For information about how to configure Cisco APIC, see [*Configuring Cisco Application Policy Infrastructure Controller (APIC)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248) .
- **EPG**: The name of the end point group. This column will display values only for IP addresses that are discovered from Cisco APIC through Network Insight or NetMRI. If discovered by NetMRI, the value will be populated through IPAM Sync. Otherwise, this column will be blank. For information about how to configure Cisco APIC, see [*Configuring Cisco Application Policy Infrastructure Controller (APIC)*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406248).
- **DHCP** **Client** **Identifier**: For an IPv4 address, the DHCP Unique Identifier of the host.
- **Port** **Reservation**: Lists any Port Reservation from Network Insight that is associated with the IP address. The information takes the form of *device* *name*:*interface* *name*.
- **VIP**: Indicates when the IP address is operating as a Virtual IP and operates in router redundancy.
- **Status**: The current status of the corresponding record. This can be **Used** or **Unused**.
- **Type**: The object type that is associated with the IP address. For example, this can be **Broadcast**, **Lease,** **IPv4** **DHCP** **Range** or **Fixed** **Address**.
- **Discover** **Now**: Indicates when the network is undergoing a current discovery process. A "Pending" icon appears in this column when you start the discovery and displays **Completed** after the completion of the discovery process.
- **Usage**: Indicates whether the IP address is configured for DNS or DHCP.
- **Lease** **State**: The lease state of the IP address. This can be one of the following: **Free**, **Backup**, **Active**, **Expired,** **Released**, **Abandoned**, **Reset**, **BootP**, **Static**, **Offered**, or **Declined**.
- **User** **Name**: The name of the user who received the lease for the IP address.
- Task Name: The name of the task that collected the discovered data. It is usually the ID or task name that collected the data. It is defined on the corresponding Trinzic NetMRI appliance when you import the discovered data to the NIOS appliance. The task name should be defined in the vDiscovery task manager for vDiscovery.
- **Comment**: Additional information about the IP address.
- **First** **Discovered**: The timestamp when the IP address was initially discovered. This data is read-only.
- **Last** **Discovered**: The timestamp when the IP address was last discovered. This data is read-only.
- **OS**: The operating system of the discovered host. Sometimes this field also displays the percentage of certainty about the discovered OS. The OS value can be one of the following:
  
  - **Microsoft**: This value is displayed for all discovered hosts that have a non-null value in the MAC addresses using the NetBIOS discovery method.
  - A value that a TCP discovery returns.
  - The OS of a virtual entity on a vSphere server.
  - DHCP fingerprint.
  - Information about the device OS from Network Insight. For network devices, OS information is collected by SNMP. Depending on the device SNMP settings, this field can display the OS version or remain empty (rarely).   
    For end hosts, the OS information is collected using active TCP fingerprint scanning by nmap. To enable this, select the following checkboxes in the Grid basic discovery properties: **Port Scanning** and **Profile Device**.  
    For Windows end hosts, you can enable Network Insight to use the SMB v1 protocol during fingerprinting. To enable this, go to **Grid Discovery Properties** -> **Advanced** and add port 445 with smb1 service and TCP type.  
    If nmap fails to detect the OS precisely, a list of most likely guesses is displayed. The end host's **Device Type** field always displays the OS family.
- **NetBIOS** **Name**: The returned NetBIOS name from the last discovery.
- **Device** **Type(s)**: The type of device associated with the IP address, if any: Router, Switch-Router, and other types.
- **Open** **Port(s)**: Lists any TCP/UDP ports that are open on the current IP address.
- **VRF Name**: The name of the discovered VRF to which the interface with this IP address belongs, as discovered by Network Insight or NetMRI.
- **VRF Description**: The description of discovered VRF.
- **VRF RD**: The address of the route distinguisher of discovered VRF.
- **BGP AS**: The number of the discovered BGP Autonomous System that uses the IP address.
- **Discovered** **Name**: The name of the discovered IP address, if any was previously assigned by an administrator.
- **Discoverer**: The identity of the appliance that discovered the IP address.
- **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the network device that was identified through DHCP fingerprint detection. This field displays **No** **Match** for devices that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see [*DHCP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989)[*Fingerprint*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989)[*Detection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989).
- **Site**: The site to which the IP address belongs. This is a predefined extensible attribute.

**Disabled** (hidden): Indicates whether the DHCP or DNS record is disabled.

> **warning**
>
> **Note**
> 
> For an IP address that falls within a DHCP range, Grid Manager displays extensible attribute values for the DHCP range and fixed address or host record. When you view the same IP address in the **DHCP** tab however, Grid Manager displays only the extensible attribute values associated with the fixed address or host record, but not the DHCP range. For example, when you define extensible attribute **State** with the value **California** for DHCP range 1.0.0.1 – 1.0.0.5, and then define extensible attribute **State** with the value of **Alaska** for fixed address 1.0.0.3, Grid Manager displays both **California** and **Alaska** in the **State** field for IP address 1.0.0.3 in the IP Address List view. However, when you view 1.0.0.3 from the **DHCP** tab, the **State** field displays **Alaska** only
