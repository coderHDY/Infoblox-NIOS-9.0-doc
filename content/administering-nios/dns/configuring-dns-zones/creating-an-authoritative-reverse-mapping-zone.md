---
title: "Creating an Authoritative Reverse-Mapping Zone"
source: "/space/nios90/280272705"
pageId: "280272705"
---
An authoritative reverse-mapping zone is an area of network space for which one or more name servers—primary and secondary—have the responsibility to respond to address-to-name queries. Infoblox supports reverse-mapping zones for both IPv4 and IPv6 addresses. You can add in-addr.arpa and ip6.arpa as the top-level reverse-mapping zones. Note that you cannot add these zones using their IP addresses or netmasks, however, you can add them by name "in-addr.arpa" and "ip6.arpa" respectively.

# Specifying an RFC 2317 Prefix

*RFC* *2317,* *Classless* *IN-ADDR.ARPA* *delegation* is an IETF (Internet Engineering Task Force) document that describes a method of delegating parts of the DNS IPv4 reverse-mapping tree that correspond to subnets smaller than a /24 (from a /25 to a /31). The DNS IPv4 reverse-mapping tree has nodes broken at octet boundaries of IP addresses, which correspond to the old classful network masks. So, IPv4 reverse-mapping zones (and delegation points) usually fall on /8, /16, or /24 boundaries.  
With the proliferation of CIDR (Classless Inter-Domain Routing) support for routing, ISPs no longer assign entire /24 networks to customers that only need a handful of IPv4 addresses. In general, IPv4 address assignments no longer fall on classful boundaries. For DNS, a problem comes into play when an ISP gives a customer an address range that is smaller than a /24, but the customer also wants to be delegated the DNS reverse-mapping zone.  
If the ISP gives you, for example, a subnet with a 25-bit mask, then you only have half of the /24 address range. If you configure your DNS server to be authoritative for the zone corresponding to a /24 subnet, the DNS server cannot resolve half of the possible reverse-mapping records in the zone. RFC 2317 defines an approach, considered a best practice, which addresses this issue.  
In addition to IPv4 reverse-mapping zones, you can also configure IPv4 reverse-mapping delegation zones that have an RFC2317 prefix. For more information about configuring a delegation for a reverse-mapping zone, see [*Configuring a Delegation*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909).

> **warning**
>
> ### Note
> 
> Before enabling RFC 2317 support for zones, disable forwarders for the zone, especially when any sort of delegation (including RFC 2317) is being used. If you do not, reverse lookups may fail. For more information, contact Infoblox Support for the Tech Note on RFC 2317 delegation.

# Adding an IPv4 Reverse-Mapping Zone

To add an IPv4 reverse-mapping zone:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add Auth Zone**.
2. In the *Add Authoritative Zone* wizard, click **Add an authoritative IPv4 reverse-mapping zone** and click **Next**.
3. Specify the following zone information:
   
   - Enter one of the following to identify the zone:
     
     - **IPv4Network:** Enter the IPv4 address for the address space for which you want to define the reverse-mapping zone and select a netmask from the **Netmask** drop-down list. Alternatively, you can specify the address in CIDR format, such as 192/8.  
       To use an RFC 2317 prefix, select a netmask value that is between 25 to 31, inclusive. Grid Manager displays the **RFC 2317 Prefix** field. Enter a prefix in the text field. Prefixes can include alphanumeric characters. For information, see  Specifying an RFC 2317 Prefix above.
     - **Name:** Enter the domain name of the reverse-mapping zone.
   - **DNS View:** This field displays only when there is more than one DNS view in the current network view. Select a DNS view from the drop-down list.
   - **Comment:** Optionally, enter additional information about the zone.
   - **Disable this zone:** Select this option to temporarily disable this zone. For information, see [*Enabling and Disabling Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205). Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock this zone**: Select this option to lock the zone so that you can make changes to it and prevent others from making conflicting changes. For information, see [*Locking and Unlocking Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205).
   - The **Sync to MGM** is used for synchronizing the selected zone from the managed Grid to the Multi-Grid Master and is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this to inherit synchronization settings from the parent level, i.e. the DNS view.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
4. Save the configuration, or click **Next** to continue to the next steps in the wizard as follows:
   
   - Define the name servers for the zone. For information on specifying primary and secondary servers, see [*Assigning Zone Authority to Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599). For information on specifying authoritative name server groups, see [*Using Authoritative Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   - If you have assigned a Microsoft server as the primary server for the zone and if the zone is AD-integrated, you can configure a list of domain controllers that are allowed to add NS records to the zone. For information see, [*Configuring Domain Controller List*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763152).
   - Define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
5. Click **Restart** if it appears at the top of the screen.

# Adding an IPv6 Reverse-Mapping Zone

To add an IPv6 reverse-mapping zone:

1. From the **Data Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Zone** -> **Add Auth Zone**.
2. In the *Add Authoritative Zone* wizard, click **Add an authoritative IPv6 reverse-mapping zone** and click **Next**.
3. Enter the following zone information:
   
   - Enter one of the following to identify the zone:
     
     - **IPv6 Network Prefix:** Enter the 128-bit IPv6 address for the address space for which you want to define the reverse-mapping zone. When you enter an IPv6 address, you can use double colons to compress a contiguous sequence of zeros. You can also omit any leading zeros in a four-hexadecimal group. For example, the complete IPv6 address 2006:0000:0000:0123:4567:89ab:0000:cdef can be shortened to 2006::123:4567:89ab:0:cdef. Note that if there are multiple noncontiguous groups of zeros, the double colon can only be used for one group to avoid ambiguity. The NIOS appliance displays an IPv6 address in its shortened form, regardless of its form when it was entered. Choose the network prefix that defines the IPv6 network address space.
     - **Name:** Enter the domain name of the reverse-mapping zone.
   - **DNS View:** This field displays only when there is more than one DNS view in the current network view. Select a DNS view from the drop-down list.
   - **Comment:** Enter a descriptive comment about the zone.
   - Disable: Click this checkbox to temporarily disable this zone. For information, see [*Enabling and Disabling Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205)*.* Note that disabling a zone may take a longer time to complete depending on the size of the data.
   - **Lock**: Click this checkbox to lock the zone so that you can make changes to it and prevent others from making conflicting changes. For information, see [*Locking and Unlocking Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763205).
   - The **Sync to MGM** drop-down list is available only on the managed Grid when it remains joined with the Multi-Grid Master. Select one of the following from the **Sync to MGM** drop-down list:
     
     - **Use Inherited Setting**: ** **Select this is to inherit synchronization settings from the parent level.
     - **Yes**: Select this to enable synchronization of zones between the managed Grid and Multi-Grid  
       Master.
     - **No**: Select this to disable synchronization of zones between the managed Grid and Multi-Grid  
       Master.
       
       **Note: **  If you have selected **No** at the parent level i.e DNS view (disabled synchronization) and if you try to select **Yes** when adding a zone, the appliance returns an error. This means that you cannot override the settings at the child level if you have already restricted synchronization at the parent level.
4. Save the configuration, or click **Next** to continue to the next steps in the wizard as follows:
   
   - Define the name servers for the zone. For information on specifying primary and secondary servers, see [*Assigning Zone Authority to Name Servers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272599). For information on specifying authoritative name server groups, see [*Using Authoritative Name Server Groups*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272489).
   - Define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666).
