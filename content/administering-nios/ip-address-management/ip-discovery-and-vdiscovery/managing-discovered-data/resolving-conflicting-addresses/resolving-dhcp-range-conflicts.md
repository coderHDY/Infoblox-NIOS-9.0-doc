---
title: "Resolving DHCP Range Conflicts"
source: "/space/nios90/1432786110"
pageId: "1432786110"
---
When an IP address is in a DHCP range and does not match an existing DHCP lease, fixed address, or exclusion range and it shows an active state during a discovery, the IP address has a DHCP range conflict.  
To resolve a DHCP range conflict:

1. In the *Resolve* *Conflict* or *Resolve* *multiple* *conflicts* dialog, Grid Manager displays the nature of the conflict and the discovered data versus the current data. Select one of the following to resolve the conflict:
   
   - **Create** **a** **fixed** **address**: Creates a fixed address with the discovered data.  
     If the fixed address is served by a Microsoft server, but is outside of a scope, you must then navigate to the *Fixed* *Address* editor and assign the fixed address to the appropriate Microsoft server.
   - **Create** **a** **reservation**: Creates a reservation with the discovered data. This creates an Infoblox reservation, and therefore cannot be used for IP addresses that are served by Microsoft servers. Note that you cannot convert an IPv6 address to a reservation.
   - **Clear** **discovered** **data**: Clears the discovered data and no object is created for the IP address.
2. Click **OK** or **Resolve** (when you have multiple conflicts). If you have multiple conflicts, Grid Manager returns to the *Resolve* *multiple* *conflicts* dialog so that you can resolve other conflicts.
