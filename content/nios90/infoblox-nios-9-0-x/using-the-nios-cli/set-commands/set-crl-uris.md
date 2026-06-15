---
title: "set crl_uris"
source: "/space/nios90/1580335535"
pageId: "1580335535"
---
The `set crl_uris` command allows you to add or remove the URIs that point to Certificate Revocation Lists (CRLs) maintained by Certificate Authorities (CAs). The Certificate Revocation List files are downloaded into the NIOS database every 12 hours. The listed URIs point to CRLs that reference the certificates that have been revoked by the CA prior to their expiration. Features such as Active Directory (AD), LDAP, TLS syslog clients, and DTC monitors use the CRL during user authentication to verify whether a CA certificate has been revoked.

This command can be run only from the FIPS mode or CC mode. For information about how to enable these modes, see [*set fips_mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-fips-mode) and [*set cc_mode*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-cc-mode).

# Syntax

`set crl_uris add [uri1 uri2 ... uriN]`

`set crl_uris remove [uri1 uri2 ... uriN]`

`set crl_uris remove all`

| Argument | Description |
| --- | --- |
| add [uri1 uri2 … uriN] | Adds the specified URIs to the Certificate Revocation List in the NIOS DB. |
| remove [uri1 uri2 … uriN] | Removes the specified URIs from the Certificate Revocation List in the NIOS DB. |
| remove all | Removes all URIs from the DB. |

# Examples

#### Add an URI to a Certificate Revocation List

`Infoblox &gt; set crl_uris add http://10.120.22.129:8000/revoked.crl.der`

#### Remove an URI from a Certificate Revocation List

`Infoblox &gt; set crl_uris remove http://10.120.22.129:8000/revoked.crl.der`  
`Are you sure you want to proceed? (y or n):y`

#### Remove all URIs in a Certificate Revocation List

`Infoblox &gt; set crl_uris remove all`  
`Are you sure you want to proceed? (y or n):y`
