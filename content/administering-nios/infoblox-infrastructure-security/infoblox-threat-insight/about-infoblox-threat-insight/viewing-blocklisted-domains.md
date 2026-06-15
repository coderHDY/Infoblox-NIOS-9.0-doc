---
title: "Viewing Blocklisted Domains"
source: "/space/nios90/1426555426"
pageId: "1426555426"
---
To review the list of blocklisted domains, complete the following:

1. From the **Data** **Management** tab, select the **Data** **Management** tab -> **DNS** tab -> **Response** **Policy** **Zones** tab, click the mitigation blocklist RPZ name.
2. Grid Manager displays the following for each blocklisted domain:
   
   - **Name** **or** **Address**: Displays the name or IP address of the blocklisted domain.
   - **Policy**: Displays the policy used to handle the responses when NIOS detected the blocklisted domain.
   - **Data**: Displays the target data about this domain.
   - **Comment:** Displays additional information about this domain.
   - **Site**: This is a pre-defined extensible attribute (if configured) that is used to indicate the location of the domain.
   - **Disable**: Indicates whether this domain is disabled or not. When the domain is disabled, the appliance does not block activities on this domain, and configuration for this domain does not change. When the domain is enabled, it is considered as a blocklisted domain and all DNS activities are blocked.

You can also do the following in the blocklisted domain panel:

- Click **Go** **to** **Threat Insight** **Allowlist** **View** to view the insight allowlist. In the Allowlist panel, you can see all the trusted domains for Infoblox Threat Insight, and DNS activities are allowed on these domains.
- If you want to move a blocklisted domain to the insght allowlist so it becomes a trusted domain, select the domain checkbox and click the Action icon next to the domain, and then select **Move to Allowlist**.
- Navigate to the next or last page of the allowlist using the paging buttons at the bottom of the panel.
- Refresh the blocklist feed by clicking the Refresh button.
- Use filters and the **Go to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Select a quick filter to search for specific entries.
- Print the blocklist or export it in CSV format.
