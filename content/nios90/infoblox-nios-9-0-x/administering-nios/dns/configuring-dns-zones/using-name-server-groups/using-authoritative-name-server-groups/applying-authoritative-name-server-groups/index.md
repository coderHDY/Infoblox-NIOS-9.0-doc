---
title: "Applying Authoritative Name Server Groups"
source: "/space/nios90/1340736092"
pageId: "1340736092"
---
In Grid Manager, you can assign an authoritative name server group to an authoritative zone when you first create it using the *Add* *Authoritative* *Zone* wizard and when you edit an existing authoritative zone using the *Authoritative* *Zone* editor. For information on creating an authoritative zone using the wizard, see [*Configuring Authoritative Zones*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/configuring-authoritative-zones). The panels used to assign a name server group to a zone are the same in the wizard or and editor. The only difference is the way you access it. The following procedure describes how to specify an authoritative NS group when editing a forward-mapping zone:

1. From the **Data** **Management** tab -&gt; **DNS** tab -&gt; **Zones** tab -&gt; *zone* checkbox, and then click the Edit icon.
2. In the *Authoritative* *Zone* editor, click **Name** **Servers**.
3. Select **Use** **this** **name** **server** **group**, and then select the authoritative NS group from the drop-down list.

> **warning**
>
> ### Note
> 
> If you apply a name server group to at least one zone or specify it as the default group, you cannot rename or remove it. To rename or remove a group, you must first disassociate it from all zones and unassign it as the default group.
