---
title: "Enabling the Match Recursive Only Option"
source: "/space/nios90/1416561163"
pageId: "1416561163"
---
You can enable the match-recursive-only option for the DNS view. When you enable this option, only recursive queries from matching clients match the selected DNS view. This option can be used in conjunction with the match client list and match destination list. Ensure that you configure those options and the order of the DNS views accordingly if you want to also enable the match-recursive-only option.  
To enable the match-recursive-only option, complete the following:

1. From the **Data Management** tab, click the **DNS** tab > **Zones** tab> dns_view checkbox -> Edit icon. Or, if there is only one DNS view, for example the predefined default view, you can just click the Edit icon beside it.
2. In the *DNS* *View* editor, select the **General** tab -> **Advanced** tab, and select the following:
   
   - **Enable** **match** **recursive** **only** **option**: This option is disabled by default. Select this option to enable the match-recursive-only option for the DNS view. When you select this option, only recursive queries from matching clients match this view. Note that this option can be used in conjunction with the match-clients and match-destinations options. Ensure that you configure those options and the order of the DNS views accordingly if you want to also enable match-recursive-only.
3. Save the configuration.

> **warning**
>
> ### Note
> 
> You can also enable or disable the match-recursive-only option for a specific DNS view on a specific member by using the CLI command **set** **enable_match_recursive_only**. For information about this command, refer to the *Infoblox* *CLI* *Guide*.
