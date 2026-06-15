---
title: "SYN Flood"
source: "/space/nios90/280408632"
pageId: "280408632"
---
A host sends a long stream of TCP SYN packets, frequently using a forged sender address. Because TCP regards a SYN packet as part of a legitimate connection request, the requested server starts a half-open connection by responding with a SYN ACK packet. Since the sender address is faked, the final ACK response from the sender never comes, and the half-open TCP socket closes only after a time out interval. A massive wave of SYN requests with fake senders can wipe out the connection resources of a network device, effectively locking it away from legitimate users.
