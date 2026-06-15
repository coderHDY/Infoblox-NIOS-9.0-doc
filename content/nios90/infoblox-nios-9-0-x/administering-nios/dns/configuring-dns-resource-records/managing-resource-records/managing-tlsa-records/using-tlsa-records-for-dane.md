---
title: "Using TLSA Records for DANE"
source: "/space/nios90/1423048995"
pageId: "1423048995"
---
Infoblox supports DANE (DNS-based Authentication of Named Entities) protocol to secure information about domain names. DANE uses DNSSEC to sign certificates and keys that are used by the TLS and distributes secure information about the domain name using DNS. With DANE, you can make an authoritative binding between the domain name and a certificate or a public key, whichever is used by a host for the respective domain. You can define what kind of certificates or public keys must be associated with a domain name to prevent vulnerability attacks and to reduce or prevent the interaction of third-party Certification Authorities to issue PKIX certificates. For detailed information about the TLSA record format and certificate usage, refer to *RFC* *6698* *The* *DNS-Based* *Authentication* *of* *Named* *Entities* *(DANE)* *Transport* *Layer* *Security* *(TLS)* *Protocol:* *TLSA.*
