---
title: "Applying Forward/Stub Server Name Server Groups"
source: "/space/nios90/1340474315"
pageId: "1340474315"
---
You can assign a forward/stub server NS group to a forward zone as default forwarders and as primary servers to a stub zone when you first create it and when you edit an existing forward zone and stub zone. For information about creating a forward zone using the wizard, see [*Configuring a Forward Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909). For information about creating a stub zone using the wizard, see [*Configuring Stub Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762909).  
Complete the following to assign a forward/stub server NS group to a forward zone:

1. From the **Data** **Management** tab -> **DNS** tab -> **Zones** tab -> *forward* *zone* checkbox, and then click the Edit icon.
2. In the *Forward* *Zone* editor, click **Forwarders**.
3. Select **Use** **this** **name** **server** **group**, and then select the forward/stub server NS group from the drop-down list. Complete the following to assign a forward/stub server NS group to a stub zone:
4. From the **Data** **Management** tab -> **DNS** tab -> **Zones** tab -> *stub* *zone* checkbox, and then click the Edit icon.
5. In the *Stub* *Zone* editor, click **Masters**.
6. Select **Use** **this** **name** **server** **group**, and then select the forward/stub server NS group from the drop-down list.
