---
title: "Common fields in summary indexes"
source: "/space/nios90/1363608852"
pageId: "1363608852"
---
Splunk server adds the following fields to every event in each summary index.

| **Field Name** | **Description of the field** | **Values/Range** | **Remarks** |
| --- | --- | --- | --- |
| info_max_time | The **info_*** fields are added to each event when you use the **addinfo** command. This command is primarily an internally-used component of Summary Indexing. Click [*here*](https://docs.splunk.com/Documentation/Splunk/6.5.2/SearchReference/Addinfo)* *for more information.    The latest time boundary for the search. | Integer | Splunk added special field |
| info_min_time | Specifies the earliest time boundary for search | Integer | Splunk added special field |
| info_search_time | Specifies the time when search was initiated | Integer | Splunk added special field |
| search_name | Specifies the name of the saved search | Example: si-search-dns-query-reply | Splunk added special field |
| search_now | Specifies the time when search was scheduled to run | Integer | Splunk added special field |
