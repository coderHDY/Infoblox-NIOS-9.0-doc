---
title: "Defining Negative Trust Anchors"
source: "/space/nios90/1502904512"
pageId: "1502904512"
---
A DNSSEC misconfiguration is not uncommon, and it can lead to failures in validating clients for particular domains.  
You can use negative trust anchors to enhance the deployment of DNSSEC validation even with misconfigured domains, as the administrator can enable DNSSEC validation without worrying about resolution failure for misconfigured signed domains that succeeds without DNSSEC validation.  
A negative trust anchor is a domain name for which DNSSEC validation must be suppressed even if the domain name is listed under a trust anchor.  
You can define a negative trust anchor at the Grid level and override it at the member and DNS view levels. You can define negative trust anchors within a view or at the Grid level. If you define it at both levels, only the configuration with the view will be effective for the respective view.  
For any specific domain name, negative trust anchors are mutually exclusive of trusted anchors; if a negative trust anchor is specified for a domain name, you cannot configure a trust anchor using the same name. Likewise, if a trust anchor is configured for a domain name, you cannot configure negative trust anchor using the same name.  
Note that if there is a trust anchor for a specific name under a negative trust anchor, that trust anchor will re-enable DNSSEC validation for query names covered by the trust anchor. For example, if you configure trust anchors for "." and "[http://example.com](http://example.com) ," and "com" is in the negative trust anchor list, queries for "[http://www.example.com](http://www.example.com) " are subject to DNSSEC validation, while DNSSEC validation will be suppressed for [http://www.insecure.com](http://www.insecure.com) , even if "." is listed in the trust anchor.   
The appliance does not support automatic cleanup of negative trust anchors, nor does it provide any information about their expiration. Administrators must manually keep track of the status of domains listed as a negative trust anchor, and must remove them from the list as soon as the domains become DNSSEC signed correctly. Infoblox recommends that you do not use negative trust anchors, and rather disable DNSSEC validation, if the administrator is not familiar with negative trust anchors or is not able to maintain the negative trust anchors properly; careless use of negative trust anchors would rather hinder the deployment of DNSSEC, which is the opposite to the purpose of negative trust anchors. For more information about general technical details of negative trust anchors, refer to [http://tools.ietf.org/html/draft-livingood-negative-trust-anchors](http://tools.ietf.org/html/draft-livingood-negative-trust-anchors) .  
Note the following about negative trust anchors:

- You must restart the DNS service when you modify the list of negative trust anchors.
- The appliance displays an error message if an entry is present in both the trust anchors and the negative trust anchors list for the same FQDN.
- The appliance displays an error message if the same FQDN is present multiple times in a negative trust anchor.
- When DNSSEC validation is suppressed due to a negative trust anchor, the corresponding response from the validating resolver does not include the AD bit.
