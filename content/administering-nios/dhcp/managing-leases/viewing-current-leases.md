---
title: "Viewing Current Leases"
source: "/space/nios90/280663001"
pageId: "280663001"
---
To view current IPv4 and IPv6 leases:

1. From the **Data** **Management** tab, select the **DHCP** tab -> **Leases** tab -> **Current** **Leases**.
2. Grid Manager displays the following information:
   
   - **IP** **Address**: The IPv4 address or IPv6 prefix or address that the appliance assigned to a DHCP client for this lease.
   - **Protocol:** Indicates whether the lease is for an IPv4 or IPv6 address.
   - **Members/Servers**: The Grid member or Microsoft server (for IPv4 leases only) that granted the lease.
   - **MAC** **address**: The MAC address of one of the following:
     
     - The IPv4 DHCP client that received the lease for an IPv4 address.
     - The IPv6 DHCP client that received the lease for an IPv6 address.
   - **DUID**: The DHCP Unique Identifier (DUID) of the IPv6 DHCP client that received the lease for an IPv6 address.
   - **Host** **Name**: The hostname that the DHCP client sent with its DHCP request. For IPv4 leases, this field displays the hostname of the DHCP client. For IPv6 leases, this field typically displays the FQDN.
   - **Fingerprint**: The name of the DHCP fingerprint or vendor ID of the DHCP client that was identified through DHCP fingerprint detection. This field displays **No** **Match** for devices that do not have any DHCP fingerprint information. For information about DHCP fingerprints, see [*DHCP Fingerprint Detection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280402989).
   - **State**: The binding state of the current lease. The lease state can be one of the following:
     
     - **Free**: The lease is available for clients to use.
     - **Active**: The lease is currently in use by a DHCP client.
     - **Static**: The lease is a fixed address lease.
     - **Expired**: The lease was in use, but the DHCP client never renewed it, so it is no longer valid.
     - **Released**: The DHCP client returned the lease to the appliance.
     - **Abandoned**: The appliance cannot lease this IP address because the appliance received a response when pinging the address.
   - **End**: The day, date, and time when the state of the lease ends.
   - **Start**: The day, date, and time when the state of the lease starts.
   - **Username**: Displays the name of the user who receives the lease for the IP address. The username enables you to differentiate between guest users and authenticated users. If you log in as an authenticated user, your username is whatever you choose when you log in. If you log in as a guest, your username is First: first_name Last: last_name.  
     For example, if your first name is John and last name is Doe and your username is jdoe, when you log in as an authenticated user, your username is jdoe. If you log in as a guest user, your username is First: John, Last: Doe.
   - **Client ID**: The DHCP client identifier (option 61) in an IPv4 lease. The client sends the client identifier as option 61 in the DHCP DISCOVER and REQUEST packets, as described in *RFC2132,* *DHCP* *Options* *and* *BOOTP* *Vendor* *Extensions*. The client identifier is either the MAC address of the network interface card requesting the address or any string uniquely identifying the client. This field is not displayed by default.  
     Note that the dates and timestamps in the Leases tab are determined by the time zone setting of the admin account that you use to log in to the appliance.  
       
     You can display the following discovered data for IPv4 leases:
     
     - **Last Discovered**: The timestamp when the IP address was last discovered. This data is read-only.
     - **OS**: The operating system of the detected host or virtual entity. The OS can be one of the following:
       
       - **Microsoft** for all discovered hosts that have a non-null value in the MAC addresses using the NetBIOS discovery method.
       - A value that a TCP discovery returns.
       - The OS of a virtual entity on a vSphere server.
   - **NetBIOS Name**: The name returned in the NetBIOS reply or the name you manually register for the discovered host.
   - **Discovered Name**: The name of the network device associated with the discovered IP address.
   - **Discoverer**: Specifies whether the IP address was discovered by a PortIQ or NIOS discovery process.

You can do the following on this tab:

- Sort the data in ascending or descending order by column.
- View the lease detailed information of a current lease by selecting the checkbox of the lease, and then clicking the Open icon.
- Change a current lease state to **Free** by selecting the checkbox of a current lease, and then clicking the Delete icon.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588).
- Print and export the data in this tab.
