---
title: "Adding an Email Address to the SOA Record"
source: "/space/nios90/281247903"
pageId: "281247903"
---
If the primary name server of a zone is a Grid member, you can add an administrator email address to the SOA record to help admins determine who to contact about this zone.

# Adding an Email Address for SOA Records in the Grid

If all zones hosted by the Grid members have the same administrator, you can add the email address once for the Grid. The appliance then adds the email address to the RNAME field of the SOA records of the zones.  
To add an email address to the SOA records at the Grid level:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties.**
2. In the **General** -> **Basic** tab of the *Grid* *DNS* *Properties* editor, enter the email address in the **E-mail** **Address** **(for** **SOA** **RNAME** **field)** field.
   
   Note the appliance does not support IDN for the **E-mail** **Address** **(for** **SOA** **RNAME** **field)** field at the Grid level. You can add an email address containing IDN for the SOA records at the zone level.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

# Adding an Email Address for the Zone SOA Record

To add an email address to the SOA record of a zone:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Zones** tab-> *dns_view* -> *zone* checkbox -> Edit icon.
2. In the *Authoritative* *Zone* editor, click **Settings**.
3. Click **Override** beside the **Email** **address** **(for** **SOA** **RNAME** **field)** field and enter the email address of the zone administrator.
4. Save the configuration and click **Restart** if it appears at the top of the screen.

> **warning**
>
> ### Note
> 
> The appliance supports IDN for the host name of the **Email** **address** **(for** **SOA** **RNAME** **field)** field. For example, you can create [admin@инфоблокс.рф](mailto:admin@инфоблокс.рф) but not админ@инфоблокс.рф.com.
