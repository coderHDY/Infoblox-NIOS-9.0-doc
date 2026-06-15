---
title: "Enabling and Disabling DNS Zone Synchronization"
source: "/space/nios90/280761068"
pageId: "280761068"
---
You can enable and disable synchronization for a DNS zone that is assigned to a Microsoft server. Zone synchronization setting is valid for the selected zone in the DNS view for which it is defined. When you disable the synchronization for a DNS zone, the NIOS appliance stops synchronizing data with the zone but it does not disable the zone. In addition, the zone synchronization setting takes effect regardless of the role of the zone (primary, secondary, or stub), synchronization mode, and permission (read-only or read-write).  
Users who have permissions to edit zone properties can enable or disable zone synchronization. Note that you can enable and disable zone synchronization for Microsoft zones only and when you add Microsoft primary or secondary servers.  
To configure Microsoft zone synchronization:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* editor, click **Name** **Servers**.
3. Select **Use** **this** **set** **of** **name** **servers**, and enter the details as specified in *[Assigning Zone Authority to Name Servers](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers)*.
   
   - **Disable** **Zone** **Synchronization**: Select this to disable zone synchronization for the selected zone. Zone synchronization is enabled when you clear the checkbox.
4. Save the configuration.

# Enabling and Disabling DNS Zone Synchronization for Multiple Zones

You can enable or disable Microsoft zone synchronization for multiple zones:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Zones** tab, and select the *zone* checkboxes. You can either select a single zone or multiple zones.
2. Expand the Toolbar and click the arrow beside **MS** **Zone** **Sync** to select an option.
   
   - **Enable**: Click **Enable** to enable zone synchronization for the selected zones. Click **Yes** in the *Enable* *MS* *Zone* *Synchronization* dialog box to enable synchronization or click **No** to cancel the process.
   - **Disable:** Click **Disable** to disable zone synchronization for the selected zones. Click **Yes** in the *Disable* *MS* *Zone* *Synchronization* dialog box to disable synchronization or click **No** to cancel the process.

# Considerations about Zone Synchronization

Before you enable and disable zone synchronization for a Microsoft DNS zone, consider the following:

- Zone synchronization is enabled by default.
- A zone must be synchronized at least once before you can disable synchronization.
- Zones defined on a Microsoft DNS server are listed in the NIOS appliance, regardless of whether they are synchronized or not.
- When you delete a zone on the Microsoft server, it is automatically deleted from NIOS, irrespective of its synchronization setting.
- When you create a zone on the NIOS appliance and disable zone synchronization, the zone is not created on the Microsoft server until you enable zone synchronization.
- When you disable zone synchronization, you can perform operations for which you have access rights on the NIOS appliance. This includes changes made directly to the zone or as a result of changes made in another zone. Examples: delegation creations and editing name servers.
- When you disable synchronization for a zone and perform certain operations on the respective zone, the outcomes of those operations are not replicated on any Microsoft servers assigned to the zone. For Microsoft primary servers, any resource records or zone properties (including name servers) that you create, modify, or delete on the NIOS appliance are not copied to the Microsoft server. For Microsoft secondary servers and stub servers, any zone properties (including name servers and masters) that you create, modify, or delete on the NIOS appliance are not copied to the Microsoft server.
- When you disable synchronization for a zone, the zone retains the Microsoft server that was last selected as the master before synchronization was disabled. The master retains its role when you enable synchronization again.
- When you disable synchronization, NIOS completes the ongoing process. The synchronization effectively stops at the end of the synchronization. NIOS resumes the synchronization of the zone as soon as the member assigned to the master MS server is notified through Grid replication that the zone is no longer disabled for synchronization and the zone is overdue for synchronization. This is based on the last time the zone was successfully synchronized and the synchronization interval at the time of re-enabling the synchronization.
- Note that the zones that are disabled for synchronization are not accounted in the overall synchronization status.
- NIOS retains the zone synchronization disable setting when you enable or disable the DNS synchronization setting of any MS server that is assigned to the zone.
