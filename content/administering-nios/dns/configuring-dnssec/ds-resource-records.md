---
title: "DS Resource Records"
source: "/space/nios90/280271884"
pageId: "280271884"
---
A DS RR contains a hash of a child zone's KSK and can be used as a trust anchor in some security-aware resolvers and to create a secure delegation point for a signed subzone in DNS servers. As illustrated in the figure below, the DS RR in the parent zone exam100.com contains a hash of the KSK of the child zone sales.exam100.com, which in turn has a DS record that contains a hash of the KSK of its child zone, nw.sales.exam100.com.

*Figure* *22.1*

*[drawio]*

The first four fields specify the owner name, TTL, class and RR type. The succeeding fields are as follows:

- Key Tag: The key tag value that is used to determine which key to use to verify signatures.
- Algorithm: Identifies the algorithm of the DNSKEY RR to which this DS RR refers. It uses the same algorithm values and types as the corresponding DNSKEY RR.
- Digest Type: Identifies the algorithm used to construct the digest. The supported algorithms are:
  
  - 1 = SHA-1
  - 2 = SHA-256
- Digest: If SHA-1 is the digest type, this field contains a 20 octet digest. If SHA-256 is the digest type, this field contains a 32 octet digest.
