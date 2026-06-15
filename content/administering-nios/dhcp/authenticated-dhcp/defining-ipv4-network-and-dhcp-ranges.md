---
title: "Defining IPv4 Network and DHCP Ranges"
source: "/space/nios90/280403608"
pageId: "280403608"
---
First define the IPv4 network that uses DHCP authentication, and then define the DHCP ranges and services for each access level that you want to provide on the network:

- Quarantine
- Authenticated
- Guest

For information about configuring DHCP IPv4 networks, ranges and services, see *[Managing IPv4 DHCP Data](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267800)*, and *[Configuring DHCP Properties](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758777)*.

# Quarantine DHCP Range

You must configure a DHCP range for the quarantine level so the member DHCP server can assign IP addresses within that range to unauthenticated DHCP clients. An unauthenticated client is allowed to access the captive portal only and must successfully pass the authentication process before it can receive an IP address from the authenticated range.  
Infoblox recommends 30-second leases for addresses in the quarantine DHCP range. This provides enough time for the user authentication process, so when the client attempts to renew the lease at the midpoint of its lease time, the member can then assign the client a new IP address, depending on the result of the authentication process.  
When you configure the quarantine DHCP range, you must specify the captive portal IP address as the DNS server for the address range. The captive portal runs a limited DNS server that resolves all queries with the IP address assigned to the web interface on the captive portal.  
Note that you can run the *Captive* *Portal* wizard to automatically set the lease time of the quarantine range to 30 seconds and to add the captive portal IP address as the DNS server. For information about the *Captive* *Portal* wizard, see *[Using the Captive Portal Wizard](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663106)*. Alternatively, you can set the lease time and the DNS server IP address in the **DHCP** tab of the *DHCP* *Range* editor. For information about the *DHCP* *Range* editor, see *[Configuring IPv4 Address Ranges](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280663590)*.  
To ensure that clients can reach the captive portal, you must specify a route to the captive portal. On a network where all systems can reach each other without going through a router, that is, all IP addresses are on the same subnet, you must configure Option 33 for the quarantine DHCP range. This option specifies a list of static routes that the client should install in its routing cache. The routes consist of a list of IP address pairs. For clients to reach the captive portal, specify the portal IP address first (destination address), and the LAN address of the NIOS appliance second. When the appliance assigns an IP address from the quarantine DHCP range, it also includes the static route that you specified in option 33. For information about configuring DHCP options, see *[Configuring IPv4 DHCP Options](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280271370)*. On a routed network, you must configure a default route via the router on the subnet.

# Authenticated DHCP Range

Configure a DHCP range for authenticated users if you want the Grid member to assign IP addresses within that range to authenticated DHCP clients. Users that receive an IP address in this range typically are allowed full access to the network.   
When a client successfully passes authentication, the member automatically stores its MAC address in the corresponding MAC address filter. When the client attempts to renew the lease at the midpoint of its lease time, the member matches the source MAC address in the request with a MAC address in the filter for the authenticated DHCP address range. The member then assigns the client a new IP address from the authenticated DHCP range.

# Guest DHCP Range

Configure a guest DHCP range if you want to provide guest access privileges. You can configure and customize a guest registration page when you configure the captive portal. For information about this feature, see *[Customizing the Captive Portal Interface](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403636)*.
