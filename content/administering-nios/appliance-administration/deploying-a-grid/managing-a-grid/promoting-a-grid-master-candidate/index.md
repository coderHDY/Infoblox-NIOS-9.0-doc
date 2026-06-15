---
title: "Promoting a Grid Master Candidate"
source: "/space/nios90/1340541197"
pageId: "1340541197"
---
To promote a Master candidate to a Grid Master, you must have previously designated a Grid member as a Master Candidate. Select the **Master** **Candidate** option in the **General** tab of the *Grid* *Member* *Properties* editor to designate the member as a Master Candidate. You can designate any member as a Master Candidate. The Grid Master Candidate gets a complete copy of the Grid database. Therefore, Infoblox recommends that you configure the same appliance models for the Grid Master and Grid Master Candidates. By default, Grid Master promotion uses UDP port 1194. Make sure that UDP 2114 and UDP 1194 ports are open between the Grid members and newly designated Grid Master. During a Grid Master promotion, the newly-promoted Grid Master continuously contacts all Grid members, including the original Grid Master on UDP port 2114 until it reaches them. It notifies all Grid members that it is the new Grid Master. The Grid Members restart and then attempt to establish normal Grid communications (via BloxSync) with the newly promoted Grid Master. Before promoting a Master Candidate, check your firewall rules to ensure that the Master Candidate can communicate with all the Grid members. For information about grid communications, see [*About Grids*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407969).

> **warning**
>
> Note
> 
> - Before a Grid Master Candidate promotion, ensure that valid client SSL certificates are installed. For more information about installing certificates, see [*Managing Certificates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280266962).
> - It is not recommended to make changes to the old Grid Master when the promotion is in progress. This may result in a loss of configuration.
