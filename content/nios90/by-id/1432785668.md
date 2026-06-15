---
title: "Computation of Conflicts (for RANGE or MAC ADDRESS Conflicts)"
source: "/space/nios90/1432785668"
pageId: "1432785668"
---
The conflicts are computed (raised or cleared) when:

- IP is discovered or re-discovered or has disappeared
- When the DHCP Range is updated (by UI, WAPI, PAPI)
- Any of the NIOS object that can change the slots in the RANGE are updated (Range reservation, Fixed Address, Reservation …) by UI, WAPI or PAPI.

> **warning**
>
> ### Note
> 
> LEASE operations DOES NOT trigger any recomputation of the conflict.

When computing a conflict, the process lookup for the IP discovered and verify this against any DHCP Range that includes the same IP:

- No Range : There will be no conflict with the Range (However, there can be other type of conflict see documentation
- There is a Range, but there is nothing in that IP slot, neither Reservation, Fixed Addresses … or LEASE: this IP is classified to be available for LEASE. If that IP is discovered, it means there is a device that uses that IP without holding the LEASE and a RANGE conflict is raised.
- There is a Range and this IP slot is used by:
  
  - Reservation or DHCP Reservation: no RANGE conflict.
  - Fixed Address or Host Address: no RANGE conflict. (There can be a MAC Conflict.)
  - LEASE:
    
    - If the lease has currently no activity or never had any activity (eg BACKUP state). A RANGE Conflict is raised because we consider there is no LEASE.
    - If the lease includes dates of activity (eg ACTIVE, RENEW, ABANDONED, FREE, …) , the “last-discovered” timestamp of the IP is checked against the dates of activity:
    - If the “last-discovered” is BEFORE start of LEASE : we cannot say if there was a conflict or not. A SYSLOG “Maybe conflict - IGNORED” is issued, but no RANGE, neither MAC ADDRESS conflict is raised.
      
      - If the “last-discovered” is DURING activity of LEASE, it is expected. No RANGE conflict. However if the MAC does not match, a MAC ADDRESS conflict will be raised.
      - If the “last-discovered” is AFTER the activity of the LEASE : a RANGE conflict is raised, as there is no LEASE at time of the timestamp.

> **warning**
>
> ### Note
> 
> Conflicts based on dates of “last-discovered” timestamp, depends on how the IP was discovered, with timestamps more or less accurate. Then a FALSE POSITIVE conflict can get raised. This condition needs to be manually verified along with the dates, assess the conflict and maybe resolve that conflict manually.  
> If there is a delay to collect the LEASE from the DHCP Member, a conflict is raised at the time of processing the IP, because the corresponding LEASE was not yet consolidated on GM. This require a manual assessment of the conflict, and needs to be resolved manually.
