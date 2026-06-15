---
title: "Changing the SOA Name for a Zone"
source: "/space/nios90/1457652299"
pageId: "1457652299"
---
If the primary name server of a zone is a Grid member, the NIOS appliance allows you to change the SOA (start of authority) name that is automatically created when you initially configure the zone. For example, you might want to hide the primary server for a zone. If your appliance is named dns1.zone.tld, and for security reasons, you may want to show a secondary server called dns2.zone.tld as the primary server. To do so, you would go to dns1.zone.tld zone (being the true primary) and change the SOA to dns2.zone.tld to hide the true identity of the real primary server.  
To change the SOA name for a zone:

1. From the **Data Management** tab, select the **DNS** tab > **Zones** tab> *dns_view* *-> zone* checkbox -> Edit icon.
2. In the *Authoritative* *Zone* editor, click **Settings**.
3. Click **Override** beside the **Primary** **name** **server** field and enter the new SOA name. This field supports IDN.
4. Save the configuration and click **Restart** if it appears at the top of the screen.   
   or  
   Click the Schedule icon at the top of the wizard to schedule this task. In the *Schedule* *Change* panel, enter a date, time, and time zone. For information, see [*Scheduling Tasks*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280790666)*.*
