---
title: "Removing UDDI Configuration from the NIOS Grid"
source: "/space/nios90/1863221253"
pageId: "1863221253"
---
This procedure explains how to remove the UDDI configuration from the NIOS Grid. It involves disabling cloud grid management and ensuring that any associated tokens and hosts are properly removed from the Infoblox Portal.

**Disabling Cloud Grid Management**

1. In the NIOS Grid Manager, go to *Infoblox* (*Grid Properties Editor) *&gt; **Infoblox Portal** **Configuration**.
2. Turn off the **Enable Cloud Grid Management** option.
3. Delete any existing **Join Token**, leave the field blank, and click **Save & Close** to apply the changes.

**Verifying Removal of NIOS On-Prem Host from Infoblox Portal**

1. Log in to the Infoblox Portal at [*csp.infoblox.com*](https://csp.infoblox.com/home).
2. Navigate to **Configure** &gt; **Servers**.
3. Locate the target server in the list. A disabled server will appear as **Offline**.
4. Select the checkbox next to the server you want to remove.
5. Click the ellipsis menu and choose the **Remove **option.

The NIOS on-premises host will be removed from the Infoblox Portal.

> **warning**
>
> **Note**
> 
> - Asset Insight data may still be visible in the Infoblox Portal if the discovery was performed using the NGC discovery feature.
