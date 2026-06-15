---
title: "Signing a Zone"
source: "/space/nios90/332562696"
pageId: "332562696"
---
When it signs a zone, the Grid Master generates new DNSKEY key pairs. As shown in the below figure, it uses the private key of the ZSK to sign the authoritative RRsets in the zone, and stores the corresponding public key in a DNSKEY record. It then uses the private key of the KSK to sign the DNSKEY records and stores the corresponding public key in another DNSKEY record. It stores the private keys in the Grid database and stores the public keys in the DNSKEY records in the database.   
  
*Zone* *Signing* *Process*

*[drawio]*



The Grid Master also does the following:

- It inserts NSEC or NSEC3 records. The use of NSEC or NSEC3 records depends on the NSEC type you selected for the Grid or the zone. When you select NSEC3, the Grid Master uses NSEC3 records in signed zones.
- It increments the SOA serial number and notifies the secondary servers that there is a change to its zone data. When the secondary servers check the serial number and see that it has been incremented, the secondary servers request a zone transfer.
- If the TTL of an RR in the zone exceeds the ZSK grace period, the Grid Master reduces the TTL to the ZSK grace period. (For information about the grace period, see [*About Key Rollovers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276).) Setting a TTL value that exceeds half of the rollover period is not allowed.
- If the KSK rollover period is less than the ZSK rollover period, the Grid Master sets the TTL of the DNSKEY RR to the KSK rollover period.
- The appliance sets the Grid Master as the primary server for zones, enables DNSSEC on the Grid Master, and starts DNS service on the Grid Master.

When it signs a subzone, the Grid Master automatically inserts DS records for parent zones that are hosted by Grid members. The appliance allows you to sign a single zone or multiple zones simultaneously. For example, if you have multiple zones that are due for rollover at the same time, you can select all such zones and sign them at once. Note that each operation is independent of the other. For example, if you want to sign five zones at the same time, and if one of the zones fails during this time, NIOS signs the remaining four zones. Note that the selected zones must have an associated primary server. The appliance displays an error message if the zone does not have a primary server. When the sign operation fails, the appliance displays the zone names, associated DNS views, and the error message indicating the reason for failure.

To sign a zone:

1. From the **Data** **Management** tab, select the **DNS** tab.
2. Expand the Toolbar and click **DNSSEC** -> **Sign** **Zones**.
3. In the *Sign* *Zones* dialog box, the displayed zone name can either be the last selected zone or the zone from which you are signing. If no zone name is displayed or if you want to select a different zone, click the Add icon. The appliance displays unsigned zones only. When there are multiple zones, Grid Manager displays the *Zone* *Selector* dialog box. Select a zone. To add multiple zones, click the Add icon and select a zone.  
   You can click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, either select **Now** or select **Later** and enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)
4. After you have selected the zones, click **Sign** **Zones**.
5. When the confirmation dialog displays, click **Yes**.

Signing an authoritative zone enables the **Enable DNSSEC** checkbox.

When you sign multiple zones, the appliance displays generic error messages for the following cases:

- The value to which the resource record TTL is reduced is not displayed.
- The appliance displays a message about name server group disassociation if at least one zone is associated with a name server group. It will not list the affected zones.
- When you sign a zone or multiple zones, the appliance displays a warning message indicating that the operation might take a longer time.
- The appliance displays an error message if the number of characters in the zone name, which you want to sign, exceeds 180 characters. You can sign a zone only when the name of the zone is less than 180 characters in size.

To remove a zone from the list, select the checkbox adjacent to the respective zone and click the Delete icon. To view the records of the signed zone, from the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone*. Expand the Records section to list the RRs of the zone, as shown in the below figure.

*[image: media]*
