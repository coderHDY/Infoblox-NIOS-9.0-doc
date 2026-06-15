---
title: "Locking, Unlocking, Enabling, Disabling Zones"
source: "/space/nios90/280763205"
pageId: "280763205"
---
You can lock a zone when you create or edit it to prevent other administrators from making conflicting changes.

# Locking and Unlocking Zones

When you lock a zone, Grid Manager displays **LOCKED** beside the zone name when you view the records and subzones of the zone in the Zones panel. When other administrators try to make changes to a locked zone, the system displays a warning message that the zone is locked by *admin_name*.

You can perform dynamic updates through mechanisms such as DDNS and nsupdate on a locked zone. The system can also add auto-generated records such as glue A records and NS records to a locked zone. Locks on a zone do not impact its child zones.  
Only a superuser or the administrator who locked the zone can unlock it. Locks do not expire; you must manually unlock a locked zone.

# Enabling and Disabling Zones

The NIOS appliance allows you to disable and enable a zone when you create or edit it. When you disable a zone, Grid Manager removes it from the DNS configuration file, but not from the database. This feature is especially helpful when you have to move or repair the server for a particular zone. You can easily disable a zone temporarily, and then enable it after the move or repair is completed.

> **warning**
>
> ### Notes
> 
> - When you temporarily disable a zone that has an associated NS group, the appliance removes all the automatically generated NS records, glue A or AAAA records, and PTR records from the zone. The appliance automatically generates the NS records, glue A or AAAA records, and PTR records when you re-enable the zone. Note that disabling a zone may take a longer time to complete depending on the size of the data.
> - Do not enable authoritative zones if your Grid members have smaller disk spaces and if you want to perform DDNS or other updates on the authoritative zone. Infoblox recommends that you have a disk space of 250 GB if you want to use authoritative zones with Grid members.
