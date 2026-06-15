---
title: "DNS Cache Poisoning"
source: "/space/nios90/280668697"
pageId: "280668697"
---
With cache poisoning, attackers attempt to insert a spoofed DNS response to a DNS resolver, which then stores the response in its cache, where it lives until the TTL expires. The cache is poisoned and subsequent requests for the domain address to recursive name servers are answered with the address of a different server, presumably controlled by the attacker. So long as the fake entry resides in the DNS server cache (persistence of a cache entry is usually governed by time to live) it can result in hundreds of thousands of dangerous redirects. In such cases the URL is legitimate, but the destination servers are not. This process is often called a "pharming" attack. Web servers and mail servers are frequent targets. Other redirection attacks include DNS Changer and DNS Replay. Man-in-the-middle is another descriptive term for many redirection attacks.
