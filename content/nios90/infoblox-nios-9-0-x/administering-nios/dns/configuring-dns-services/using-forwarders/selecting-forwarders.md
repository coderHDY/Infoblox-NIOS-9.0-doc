---
title: "Selecting Forwarders"
source: "/space/nios90/1468465464"
pageId: "1468465464"
---
When there is more than one forwarder in the Grid, the NIOS resolver uses a smoothed metric derived from RTT (Round Trip Time) to select the name server to send queries to. RTT is the length of time between when a query was sent and when its  response was received. This means that even if a NIOS resolver sends most of its recursive queries to the best forwarder on the list, it will occasionally send queries to the other servers on the list to check that they are still not as good as the currently selected best forwarder. This is standard BIND behavior.
