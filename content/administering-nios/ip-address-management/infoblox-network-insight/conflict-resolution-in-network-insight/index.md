---
title: "Conflict Resolution in Network Insight"
source: "/space/nios90/280763722"
pageId: "280763722"
---
You can sometimes encounter conflicts when defining port reservations for IPAM-managed objects such as Fixed IP addresses or host records. The quickest way to locate any conflicts in Grid Manager is to open the Conflicts Smart Folder as noted in the below figure.

*Locating* c*onflicts* *and* b*eginning* *their* r*esolution*

*[drawio]*

Numerous types of conflicts are possible:

- Device Information conflict
- Port Reservation conflict, including Used Port Reservation conflicts (usually resulting from a request to reserve a port that has already been assigned to another IPAM object)
- Fixed address conflict
- IP Address conflicts
- DHCP Range conflicts (such as: *Discovered* *address* *is* *within* *an* *existing* *DHCP* *range* *but* *does* *not* *match* *an* *existing* *lease,* *fixed* *address,* *or* *exclusion* *range*)
- MAC Address conflict (such as: *Discovered* *MAC* *Address* *conflicts* *with* *existing* *fixed* *address*)

> **warning**
>
> ### Note
> 
> When you execute discovery (**Discovery** -> **Discover** **Now** from the Toolbar), the appliance does not send SNMP trap if it finds any conflicting information between the NIOS data and the discovered data.

The Conflict Resolution wizard automatically recognizes the object associated with the conflict (which is listed in the **Related** **Objects** pane as noted in the figure Locating conflicts and beginning their resolution above) and ensures that changes you make during resolution are applied correctly to the object. An example appears in the below figure.  
*Conflict* *resolution* *example*
