---
title: "Adding Custom Allowlisted Domains"
source: "/space/nios90/1426555389"
pageId: "1426555389"
---
The insight allowlist is populated with trusted domains that carry legitimate DNS tunneling traffic such as Avast, Sophos, McAfee, Boingo, Barracuda, and others.You can add domains that you deem trustworthy to this list. When you add a custom domain, it is marked as **Custom** in the allowlist.

To add a custom allowlisted domain, complete the following:

1. From the **Data** **Management** tab, select the **Threat Insight** tab -> **Allowlist** tab, click the Add icon or click **Add** **Custom** **Allowlist** from the Toolbar.
2. In the *Add* *Custom* *Allowlist* wizard, complete the following:
   
   - **Domain** **Name**: Enter the name of the domain that you want to add to the insight allowlist.
   - **Comment**: Enter additional information about this domain.
   - **Disable**: When you select this, the appliance does not treat this domain as a trusted domain. When you enable the domain again, it is considered as a allowlisted domain.
3. Save the configuration. You do not need to restart DNS service to update the insight allowlist.
