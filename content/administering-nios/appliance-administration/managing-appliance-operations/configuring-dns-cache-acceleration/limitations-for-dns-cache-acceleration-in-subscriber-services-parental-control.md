---
title: "Limitations for DNS Cache Acceleration in Subscriber Services Parental Control"
source: "/space/nios90/1468498987"
pageId: "1468498987"
---
Enabling DNS Cache Acceleration for subscriber services in the **Parental Control** tab has the following limitations:

- The DNS Cache Acceleration subscriber site features, query count logging and blocked and allowed list support, are applicable on virtual DNS Cache Acceleration.
- The DNS Cache Acceleration subscriber site features, query count logging and blocked and allowed list support and retain only unknown bits and do not support unknown policies (AVP).
- DNS Cache Acceleration uses BIND to process the guests behind Customer Premises Equipment (CPEs).
- The appliance prompts for a reboot when there is a configuration change.
- DNSTAP is required for query count logging.
- DNS Cache Acceleration does not cache blocked domains from BIND as it only uses category information for resolved domains.
- At Virtual DNS Cache Acceleration, the subscriber has access only to the primary MSP IP address.
- DNS Cache Acceleration subscriber site feature supports only 16 additional blocking policies.
- Before blocking another opt in subscriber at DNS Cache Acceleration, an opt in subscriber must resolve a domain.
- Proxy-All replies comes from DNS Cache Acceleration as long as the client connection status to MSP is "connected." If the client connection status is "disconnected," the first few queries goes to BIND, and future requests comes from DNS Cache Acceleration. Note that, TCP idle connections are closed every 20 seconds by MSP.
- The query name for the subscriber allowed and blocked list must contain a known TLD (top-level domain) and, if there are any prefixes, must conclude with a '.'.
- Only domain names are supported by the subscriber allowed and blocked lists, the wildcards and services are not supported.
- DNS Cache Acceleration extracts and supports only EDNS0 option 65073, which is used for subscriber service MAC addresses. It does not answer queries if the EDNS0 option code 65073 is sent with an additional option code; instead it bypasses other options to the BIND server thus impacting DNS performance.
