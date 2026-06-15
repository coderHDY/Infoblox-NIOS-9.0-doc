---
title: "Specifying Minimal Responses"
source: "/space/nios90/281247849"
pageId: "281247849"
---
A NIOS appliance returns a minimal amount of data in response to a query, by default. It includes records in the authority and additional data sections of its response only when required, such as in negative responses. This feature speeds up the DNS services provided by the appliance.  
To disable returning minimal responses:

1. From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.
2. In the *Member* *DNS* *Configuration* editor, click **General** -> **Basic** tab.
3. Clear the Return minimal responses checkbox.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
