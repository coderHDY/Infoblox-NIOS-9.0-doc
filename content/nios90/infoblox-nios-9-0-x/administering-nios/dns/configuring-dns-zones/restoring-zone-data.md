---
title: "Restoring Zone Data"
source: "/space/nios90/280763008"
pageId: "280763008"
---
After you import or delete a zone, if you want the original zone back, you can restore it using the Recycle Bin. When you import a zone for the first time, the appliance saves the zone and its resource records as a single object in the Recycle Bin. It keeps the subzones with the zone. See Restoring Zone Data After a Zone Import Example below.  
When you reimport data into a zone, the software saves the zones, its resource records, and the delegated subzones created by the previous import operation in the Recycle Bin. It keeps the subzones (not created during the zone import) with the zone. See Restoring Zone Data After a Zone Reimport Example below.  
If the zone import succeeds, the system adds resource records from the source to the target zone. It also adds delegated subzones for the source subzones. If the zone import fails, the system does not create records and delegated subzones. In either case, you can retrieve the original zone and its subzones from the Recycle Bin as follows:

1. Delete the zone using the steps described in the section [*Removing Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/removing-zones)*.*
2. Select **Remove** **zone** **only** to remove the zone and its resource records. The NIOS appliance reparents all subzones to the parent zone of the zone that you remove. Do not select **Remove** **all** **subzones**.  
   Automatically created AD (Active Directory) subzones are an exception. Even if you select **Remove** **zone** **only**, the NIOS appliance still removes AD subzones.
3. In the Finder panel, click **Recycle** **Bin**.
4. Select the zone you want to restore and click the Restore icon. Click **Yes **in the *Restore Item* dialog box to restore or **No **to cancel the process. Note that restoring a zone may take a longer time to complete depending on the size of the data.    
   The zone is restored back to its original state. The resource records are reparented back under it.

# Restoring Zone Data After a Zone Import Example

In the example shown in the figure Restoring Zones After a Zone Import below:

1. Import data from a source zone with subzones Sub x and Sub y into zone B with subzones Sub B1 and Sub B2.   
   The appliance stores zone B and its resource records in the Recycle Bin.  
   To retrieve zone B after the import:
2. Delete subzone B using the **Remove** **zone** **only** option.  
   The appliance reparents subzones Sub B1 and Sub B2 to the Zone A, which is the zone above Zone B.
3. After the import, you can restore zone B from the Recycle Bin. The appliance reparents the subzones Sub B1 and Sub B2 back to zone B.

*Restoring* *Zones* *After* *a* *Zone* *Import*

*[drawio]*

# Restoring Zone Data After a Zone Reimport Example

In the example shown in the figure Restoring Zones After a Zone Reimport below:

1. You reimport data from the source zone with subzones Sub x and Sub y into zone B with subzones Sub B1 and Sub B2.  
   To retrieve zone B after the import:
2. Delete the delegated subzones x and y and then remove subzone B using the **Remove** **zone** **only** option.  
   The appliance stores zone B and its resource records and the previously-imported subzones Sub x and Sub y (as delegated subzones) in the Recycle Bin. It reparents subzones Sub B1 and Sub B2 to the zone above zone B (Zone A).
3. After the import, you can restore zone B and the subzones Sub x and Sub y from the Recycle Bin. The appliance reparents the subzones Sub B1 and Sub B2 back to zone B.

*Restoring* *Zones* *After* *a* *Zone* *Reimport*

*[drawio]*
