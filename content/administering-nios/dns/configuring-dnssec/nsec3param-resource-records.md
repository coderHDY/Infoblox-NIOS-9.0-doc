---
title: "NSEC3PARAM Resource Records"
source: "/space/nios90/280405045"
pageId: "280405045"
---
An authoritative DNS server uses NSEC3PARAM RRs to determine which NSEC3 records it includes in its negative responses. An NSEC3PARAM RR contains the parameters that an authoritative server needs to calculate hashed owner names. As stated in RFC 5155, the presence of an NSEC3PARAM RR at a zone apex indicates that the specified parameters may be used by authoritative servers to choose an appropriate set of NSEC3 RRs for negative responses.

Following is an example of an NSEC3PARAM record:

*[drawio]*

The first four fields specify the owner name, TTL, class and RR type. The succeeding fields are:

- Algorithm: The hash algorithm that was used. The currently supported algorithm is SHA-1, which is represented by a value of 1.
- Flags Field: Contains 8 one-bit flags, of which only one flag, the Opt-Out flag, is defined by RFC 5155. The Opt-Out flag indicates whether the NSEC3 record covers unsigned delegations.
- Iterations: The number of times the hash function was performed. The number of NSEC3 iterations is set to 10.
- Salt Field: A series of case-insensitive hexadecimal digits. It is appended to the original owner name as protection against pre-calculated dictionary attacks. New salt value is generated when the ZSK rolls over, for which the user can control the period. For random salt, the selected length is between one and 15 octets.
