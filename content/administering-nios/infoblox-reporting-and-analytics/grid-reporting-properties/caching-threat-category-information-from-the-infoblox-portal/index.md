---
title: "Caching Threat Category Information from the Infoblox Portal"
source: "/space/nios90/1457094747"
pageId: "1457094747"
---
The threat category information (Threat indicator database and Threat description) is downloaded from the Infoblox Portal and stored locally. The threat category information is then sent to the reporting server to augment RPZ hits and reports are generated. Caching threat category information from the Infoblox Portal helps enhance the performance of threat reports as data is fetched from the cache that is stored locally.

You can configure the Infoblox Portal credentials and schedule the entire threat indicator database download from the Infoblox Portal. If you have already downloaded the entire threat indicator database, then consecutive full downloads take place only after 24 hours.

> **warning**
>
> ### Note
> 
> - For the threat indicator caching feature to work on a Grid, the Grid must have at least one user with **can delete** permission set up on the Grid.
> - When you enable the threat indicator caching feature, you must configure the credentials to access the Infoblox Portal for NIOS to interact with the Infoblox Portal. For more information, see [*Configuring Integration with Infoblox Threat Defense Cloud*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280759852).
