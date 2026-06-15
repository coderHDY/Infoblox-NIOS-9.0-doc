---
title: "Enabling HSM Signing"
source: "/space/nios90/1502871913"
pageId: "1502871913"
---
When you enable HSM signing, the HSM starts generating the DNSSEC keys at the next key rollover. For information about key rollovers, see* *[*About Key Rollovers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276). You can enable this feature at the Grid level only.  
To enable HSM signing:

1. From the **Data** **Management** tab -> **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.
2. In the *Grid* *DNS* *Properties* editor, Click **Toggle** **Advanced** **Mode**, if the editor is in Basic mode, and then select the **DNSSEC** tab.
3. In the **DNSSEC** tab, select the **Enable** **DNSSEC** checkbox, if it is not selected, and then select the **Enable HSM** **Signing** checkbox.
4. Complete the other fields described in [*Configuring DNSSEC Parameters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280762276/Setting+DNSSEC+Parameters#Configuring-DNSSEC-Parameters). Note that Entrust nShield HSMs do not support DSA.
5. Save the configuration.
