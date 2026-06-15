---
title: "Using Forwarders"
source: "/space/nios90/317784896"
pageId: "317784896"
---
A forwarder is a name server to which all other name servers first send queries that they cannot resolve locally. The forwarder then sends these queries to DNS servers that are external to the network, avoiding the need for the other name servers in your network to send queries off-site. A forwarder eventually builds up a cache of information, which it uses to resolve queries. This reduces Internet traffic over the network and decreases the response time to DNS clients. This is useful in organizations that need to minimize off-site traffic, such as a remote office with a slow connection to a company's network.  
  
You can select any Grid member to function as a forwarder. You must configure your firewall to allow that Grid member to communicate with external DNS servers. You can also configure NIOS to send queries to one or more forwarders. You can define a list of forwarders for the entire Grid, for each Grid member, or for each DNS view.

If your network configuration includes Infoblox Threat Defense, you can configure NIOS Grid members (physical or virtual appliance) to forward recursive queries to Infoblox Threat Defense. For more information about Infoblox Threat Defense, see [*Infoblox Threat Defense*](https://infoblox-docs.atlassian.net/wiki/spaces/BloxOneThreatDefense). For information about how to configure NIOS members to forward recursive queries to Infoblox Threat Defense using the DNS Forwarding Proxy service, see the sections below:

*[children]*
