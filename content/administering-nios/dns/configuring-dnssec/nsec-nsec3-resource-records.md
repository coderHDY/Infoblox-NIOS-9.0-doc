---
title: "NSEC/NSEC3 Resource Records"
source: "/space/nios90/280664563"
pageId: "280664563"
---
When a name server receives a request for a domain name that does not exist in a zone, the name server sends an authenticated negative response in the form of an NSEC or NSEC3 RR. NSEC and NSEC3 records contain the next secure domain name in a zone and list the RR types present at the NSEC or NSEC3 RR's owner name. The difference between an NSEC and NSEC3 RRs is that the owner name in an NSEC3 RR is a cryptographic hash of the original owner name prepended to the name of the zone. NSEC3 RRs protect against zone enumeration.  
 Following is an example of an NSEC record:

*[drawio]*

The first four fields specify the owner name, TT, class and RR type. The succeeding fields are:

- Next Owner Name: In the canonical order of the zone, the next owner name that has authoritative data or that contains a delegation point NS record.
- RRsets: The RRsets that exist at the owner name of the NSEC record, which are NS, SOA, RRSIG, NSEC, and DNSKEY in the example.

Following is an example of an NSEC3 RR:

*[drawio]*

The first field contains the hashed owner name. It is followed by the TTL ,class and RR type. The fields after the RR type are:

- Algorithm: The hash algorithm that was used. The currently supported algorithm is SHA-1, which is represented by a value of 1.
- Flags Field: Contains 8 one-bit flags, of which only one flag, the Opt-Out flag, is defined by RFC 5155. The Opt-Out flag indicates whether the NSEC3 record covers unsigned delegations.
- Iterations: The number of times the hash function was performed.
- Salt Field: A series of case-insensitive hexadecimal digits. It is appended to the original owner name as protection against pre-calculated dictionary attacks.
- Next Owner Name: Displays the next hashed owner name.
- RRsets: The RR types that are at the owner name.
