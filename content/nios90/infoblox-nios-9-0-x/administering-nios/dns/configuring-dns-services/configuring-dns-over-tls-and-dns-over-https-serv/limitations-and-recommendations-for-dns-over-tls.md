---
title: "Limitations and Recommendations for DNS over TLS and DNS over HTTPS"
source: "/space/nios90/1420100088"
pageId: "1420100088"
---
Consider the following limitations and recommendations when you enable the DNS over TLS and/or the DNS over HTTPS features:

- If an appliance configured with DNS over TLS or DNS over HTTPS has both vDCA and DNS Infrastructure Protection running, the configuration is set to the DCA-first mode.
- TSIG queries for which responses are larger than the max EDNS/UDP buffer size are not supported.
- DNS queries coming with EDNS padding over port 53 are dropped.
- DNS over TLS and DNS over HTTPS features are not supported on unbound-based DNS servers.
- When DNS over TLS or DNS over HTTPS is enabled, queries decrypted at DNS over TLS or DNS over HTTPS that do not receive a response from the vDCA cache are forwarded to the recursive DNS engine over UDP. Therefore, rules added for TCP requests over TLS or HTTPS may not be honored. Infoblox recommends that you add the corresponding UDP-specific rules instead of only the TCP request rules.
- For NIOS 8.5.2 only: Infoblox recommends that you manually set the maximum packet size of both the UDP buffer and the EDNS buffer to 4096 bytes. If the packet size exceeds 4096, packets are dropped by the DNS over TLS or the DNS over HTTPS server. For more information about setting buffer sizes, see [*Configuring the EDNS0 Buffer Size and UDP Buffer Size*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-service-properties/using-extension-mechanisms-for-dns-edns0).
- DNS over TLS only:
  
  - The TLS versions that are currently supported by NIOS are TLS 1.2 and TLS 1.3.
  - DNS over TLS supports queries and responses from both DNS and DNS Cache Acceleration services.
  - DNS over TLS is not supported for recursive queries when performing upstream lookups.
  - DNS zone transfer requests over DNS over TLS are not supported.
  - For DNS over TLS clients that use systemd-resolved service, the Subject Alternative Name (SAN) must point to the IP address of the DNS service. By default, the self-signed certificates issued to Infoblox members do not meet this requirement. Therefore, for Infoblox to support systemd-resolved, you must install certificates that include SAN IP address from a trusted certificate authority.
- DNS over HTTPS only:
  
  - DNS over HTTPS is supported on the HTTP/2 protocol.
  - DNS over HTTPS is supported only if the NIOS appliance has an MGMT interface set up. The DNS over HTTPS module listens on port 443 for interfaces other than MGMT and any incoming UI request to the MGMT interface is bypassed directly to the host.
  - When DNS over HTTPS is enabled on a member, HTTP redirection from the member to its Grid Master is disabled.
