---
title: "Configuring DNS Infrastructure Protection Profiles"
source: "/space/nios90/280760256"
pageId: "280760256"
---
When you configure the Grid or Member security properties, you have an option to select an active ruleset or a DNS Infrastructure Protection profile. A DNS Infrastructure Protection profile defines specific security settings and ruleset that you want to apply to a specific member or a group of members. Infoblox uses event filters to limit the amount of logs that are generated due to the DNS Infrastructure Protection events. It drops packets for services or ports that are not enabled on the card.  
If you want to use the same DNS Infrastructure Protection rulesets and settings for multiple members, you can create a DNS Infrastructure Protection profile and associate it with multiple members so you do not have to configure them individually. You can configure DNS Infrastructure Protection profiles for both hardware and Software DNS Infrastructure Protection appliances.  
Infoblox automatically migrates DNS Infrastructure Protection profile settings when:

- you update an active ruleset at the Grid level and if a profile has inherited the respective active ruleset from the Grid.
- the profile inherits an active ruleset from the Grid and you override the active ruleset that is associated with the profile.
- the profile is set to override an active ruleset and you change an active ruleset for the profile.

You can do the following to configure DNS infrastructure protection profiles:

- Create DNS Infrastructure Protection profiles by associating rulesets, event filters and configuring multiple DNS requests over a single TCP session, as described in *[Adding DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668792)*.
- Clone DNS Infrastructure Protection profiles, as described in *[Cloning DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766264)*.
- Modify DNS Infrastructure Protection profiles, as described in *[Modifying DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280766293)*.
- View differences between an old and a new rulesets and merge changes from an old DNS Infrastructure Protection profile into the new one, as described in *[Merging DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408741)*.
- Inherit Grid rule settings for a DNS Infrastructure Protection profile, as described in *[Inheriting Grid Rule Settings](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275797)*.
- Delete a DNS Infrastructure Protection profile, as described in *[Deleting DNS Infrastructure Protection Profiles](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280408771)*.
- View the list of DNS Infrastructure Protection profiles, as described in *[Viewing DNS Infrastructure Protection Rulesets](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280668850)*.
