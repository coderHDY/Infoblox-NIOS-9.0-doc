---
title: "IDN Support Limitations"
source: "/space/nios90/1346109637"
pageId: "1346109637"
---
The appliance has the following IDN support limitations:

- F5® load balancers does not support IDNs. The NIOS appliance does not encode punycode to IDNs for F5 load balancer related objects. Only the punycode representation is available.
- Multi-Grid configuration does not support IDNs.
- The Infoblox CLI does not support IDNs.
- If a resource record containing an IDN is added to the Infoblox Grid through DDNS updates, the domain name field displays the record name in UTF-8 encoded format. For more information, see [*Managing Resource Records*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-resource-records/managing-resource-records).
- The following FQDNs does not support IDNs:
  
  - FQDN of an external DNS Server (direct or via name server group)
  - FQDN of a DNS root server
  - FQDN of a Microsoft server
  - FQDN of an Infoblox Grid Member
  - FQDN of an external authentication source (Active Directory, LDAP, OCSP, RADIUS, TACACS+)
  - FQDN of an NTP server
  - FQDN of a Thales Luna HSM Module
  - FQDN of an email relay server
  - FQDN of a vSphere/ESX server
  - FQDN of a Kerberos Key Distribution Center

For more details, see

*[children]*
