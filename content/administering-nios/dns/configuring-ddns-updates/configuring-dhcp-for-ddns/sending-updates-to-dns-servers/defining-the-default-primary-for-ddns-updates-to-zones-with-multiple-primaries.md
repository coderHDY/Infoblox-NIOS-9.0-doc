---
title: "Defining the Default Primary for DDNS Updates to Zones with Multiple Primaries"
source: "/space/nios90/1480949948"
pageId: "1480949948"
---
If you have configured multiple primary servers for an authoritative zone, you can define the default primary that the appliance uses to perform DDNS updates for the zone. Note that you can configure a Grid primary, but not an external primary, as the default primary. If you do not configure a default primary, the Grid Master becomes the default primary for the zones that it serves. Otherwise, the appliance selects a primary server that serves the zone as the default primary. For external zones that have multiple primaries, the first external primary server becomes the default primary.

Configuring a default primary for DDNS updates is useful when you have DHCP members that span across different locations. Performing DDNS updates becomes more efficient when you configure a default primary that is close in proximity to the DHCP member. For example, zone [corpxyz.com](http://corpxyz.com) has two primaries ([usa.corpxyz.com](http://usa.corpxyz.com) and [japan.corpxyz.com](http://japan.corpxyz.com)) serving two locations (USA and Japan). Service performance is faster when you select [usa.corpxyz.com](http://usa.corpxyz.com) as the default primary for DDNS updates in the USA region and [japan.corpxyz.com](http://japan.corpxyz.com) as the default primary for the Japan region.

When you configure a preferred or default primary server for DDNS updates to a zone that has multiple primaries, ensure that the following are in place:

- The zone that you select contains multiple primary servers.
- The primary server has DNS service enabled and is authoritative for the zone.
- The appliance has DHCP service enabled.

> **warning**
>
> ### Note
> 
> You can define the default primary for the Grid and override the setting at the member level, and you must restart service for the configuration to take effect. Primary selection is performed at service restart, not at runtime.

To define the default primary:

1. **Grid:** From the **Data** **Management** tab, select the **DHCP** tab, expand the Toolbar and click **Configure** **DDNS**. In the DDNS Properties editor, scroll down to the **Master** **Preferences** **for** **DDNS** **Updates** **to** **Multi-master** **DNS** **Zones** section.  
   **Member**: From the **Data** **Management** tab, select the **DHCP** tab and click the **Members** tab -> *member* checkbox -> Edit icon. In the *Member* *DHCP* *Properties* editor, select the **Multi-master** **DDNS** tab.
2. In the **Master** **Preferences** **for** **DDNS** **Updates** **to** **Multi-master** **DNS** **Zones** section, click the Add icon and select one of the following from the list:
   
   - **Grid** **Zone**: In the Add Grid Zone panel, complete the following:
     
     - **Zone**: Click **Select** **Zone** to select the zone that has multiple primaries. Note that when configuring for the Grid, only zones that belong to the selected DNS view are displayed in the *Zone* *Selector* dialog box. For a Grid member however, if it is associated with a network view or if you have defined a DNS view for DDNS updates for that network view, only zones that belong to the DNS view configured for the associated network view are displayed.
     - **DNS** **View**: Displays the DNS view to which this zone belongs.
     - **DNS** **Primary**: From the drop-down list, select the primary name server you want the appliance to use when performing DDNS updates. Note that the list displays only primary servers that are defined for the selected zone.
   - **Default** **Primary**: In the Add Default Primary panel, complete the following:
     
     - **DNS** **Primary**: Click **Select** to select a primary name server from the *Member* *Selector* dialog. When you select a default primary, the appliance uses this name server for DDNS updates to all zones.
3. Click **Add** to add the zone and primary name server to the table, which displays the following information:
   
   - **DNS** **View**: The DNS view to which the zone belongs.
   - **Zone**: The selected zone that has multiple primaries. All zones added to the table belong to the same DNS view.
   - **DNS** **Primary**: The primary server to be used when performing DDNS updates from a NIOS DHCP server to the selected zone. If you have configured more than one Grid DNS primary server for DDNS updates for multi-master zones, DHCP servers use the first available DNS primary server that is configured. If the first DNS primary server is not reachable or is offline, then the DHCP servers reach for the next DNS primary server in the preferred multi-domain DDNS list and so on. You can add upto a maximum of three DNS primary nameservers for each zone.
4. **Concatenated** **with** **the** **following** **rules** **defined** **at** **the** **Grid** **level**: This section appears only in the *Member* *DHCP* *Properties* editor. This table displays rules that are defined for zones with multiple primaries at the Grid level. Rules configured at the member level automatically override those configured for the Grid. Note that all rules configured for both the Grid and the member apply.
