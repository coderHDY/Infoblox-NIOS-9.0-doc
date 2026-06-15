---
title: "Creating a Shared Record Group"
source: "/space/nios90/1340540559"
pageId: "1340540559"
---
When you create a shared record group, the only requirement is that you give it a name. You can associate it with one or multiple zones when you first create the group or at a later time, by editing the shared record group. You can associate a shared record group with authoritative zones only. Associating the shared record group with a zone adds the shared records to the zone. The zone handles the shared records like any other resource records.  
To create a shared record group:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Shared** **Record** **Groups** tab, and then click the Add icon.
2. In the *Shared* *Record* *Group* wizard, specify the following:
   
   - **Name:** Enter the name of the shared record group. It can be up to 64 characters long and can contain any combination of printable characters. You can change the shared record group name even after you create the group. It does not impact the shared records in the group.
   - **Hostname** **Policy:** Click **Override** to supersede the hostname restriction policy set at the zone level or click I**nherit** to use the zone policy. This sets the hostname policy for the shared records in the group. See [*Specifying Hostname Policies*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272861)*.*
   - **Comment:** Optionally, enter additional information about the shared record group.
3. Click **Next** to associate the shared record group with at least one zone.
4. Click the Add icon in the Associated Zones panel.
5. In the *Zone* *Selector* dialog box, select a zone by clicking the zone name. You can add multiple zones.
6. Click **Next** to define extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
7. Save the configuration.
