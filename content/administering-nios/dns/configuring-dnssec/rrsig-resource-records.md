---
title: "RRSIG Resource Records"
source: "/space/nios90/280664613"
pageId: "280664613"
---
A signed zone has multiple RRsets, one for each record type and owner name. (The owner is the Fully Qualified Domain Name of the RRset.) When an authoritative name server uses the private key of the ZSK pair to sign each RRset in a zone, the digital signature on each RRset is stored in an RRSIG record. Therefore, a signed zone contains an RRSIG record for each RRset.  
  
Following is an example of an RRSIG record:

*[drawio]*

The first four fields specify the owner name, TTL, class, and RR type. The succeeding fields are:

- Type Covered: The RR type covered by the RRSIG record. The RRSIG record in the example covers the A records for corpxyz.com.
- Algorithm: The cryptographic algorithm that was used to create the signature. It uses the same algorithm types as the DNSKEY record indicated in the Key Tag field.
- Number of Labels: Indicates the number of labels in the owner name of the signed records. There are two labels in the example, corpxyz and com.
- RRset TTL: The TTL value of the RRset covered by the RRSIG record.
- Expiration Time: The signature expiration time in UTC format.
- Inception Time: The signature inception time in UTC format.
- Key Tag: The key tag value of the DNSKEY RR that validates the signature.
- Signature Name: The zone name of the RRset.
- Public Key: The Base64 encoding of the signature.
