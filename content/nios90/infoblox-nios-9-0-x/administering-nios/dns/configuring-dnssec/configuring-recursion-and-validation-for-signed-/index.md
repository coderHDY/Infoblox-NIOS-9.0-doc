---
title: "Configuring Recursion and Validation for Signed Zones"
source: "/space/nios90/280664316"
pageId: "280664316"
---
When you enable recursion on a Grid member and it receives a recursive query for DNS data it does not have, it queries remote name servers that you specified in the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor. It then includes the DNSSEC data it retrieved through recursion in its responses to clients that requested DNSSEC RRs. You can enable the appliance to validate the responses of these servers for certain zones. On the appliance, you specify the zones to validate and configure their DNSKEY records as trust anchors. When the appliance validates a response for a zone configured with a trust anchor or for any of its child zones, the appliance starts with the DNSKEY that you configured and proceeds recursively down the DNS tree.  
In the example shown in the below figure, the following was configured on the NIOS appliance:

- Forwarder with the following IP address: 10.2.2.1
- Recursion was enabled
- DNSSEC and validation were enabled
- The example.com zone and its DNSKEY record were configured

*[drawio]*
