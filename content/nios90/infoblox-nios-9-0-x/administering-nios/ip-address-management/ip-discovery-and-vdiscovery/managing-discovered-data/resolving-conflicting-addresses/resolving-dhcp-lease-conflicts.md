---
title: "Resolving DHCP Lease Conflicts"
source: "/space/nios90/1432719433"
pageId: "1432719433"
---
When an IP address has a DHCP lease and the discovered MAC address is in conflict with the existing MAC address, the IP address has a DHCP lease conflict.  
To resolve a DHCP lease conflict, perform the following:

1. In the *Resolve* *Conflict* or *Resolve* *multiple* *conflicts* dialog, Grid Manager displays the nature of the conflict and the discovered data versus the current data. Select one of the following to resolve the conflict:
   
   - **Clear** **lease** **and** **create** **fixed** **address** **from** **discovered** **data**: Clears the existing DHCP lease and creates a fixed address with the discovered data. The *Fixed* *Address* editor appears with the discovered data populated.
   - **Clear** **lease** **and** **create** **a** **reservation** **from** **discovered** **data**: Clears the existing DHCP lease and creates a new reservation using the discovered data. The *Reservation* editor appears with the discovered data populated.  
     This option does not apply to leases served by Microsoft DHCP servers because they do not support Infoblox reservations.
   - **Keep** **the** **existing** **and** **ignore** **this** **conflict**: Keeps the current DHCP lease for the address and ignores the lease conflict.
2. Click **OK** or **Resolve** (when you have multiple conflicts). If you have multiple conflicts, Grid Manager returns to the *Resolve* *multiple* *conflicts* dialog so that you can resolve other conflicts.
