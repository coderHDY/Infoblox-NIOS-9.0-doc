---
title: "Sending Secure DDNS Updates to a DNS Server in Another Domain"
source: "/space/nios90/1412367027"
pageId: "1412367027"
---
Domain and forest trust relationships provide clients authenticated access to resources in other domains. Some trusts are automatically created, such as the two-way, direct trust between parent and child domains in a forest. Other trusts must be created manually. Refer to the Microsoft Active Directory documentation for information on establishing trusts between domains.  
Once a direct trust exists between two AD domains, a KDC from one domain can grant a referral to the KDC of the other domain. The Infoblox DHCP server can then use the referral to request access to services in the other domain.  
In the following figure the Infoblox DHCP server in the [child.corpxyz.com](http://child.corpxyz.com) domain needs to send GSS-TSIG authenticated DDNS updates to the DNS server in its parent domain, [corpxyz.com](http://corpxyz.com) domain. There is an automatic two-way trust between the domains because [corpxyz.com](http://corpxyz.com) domain is the parent of [child.corpxyz.com](http://child.corpxyz.com) domain.

*Sending* *Secure* *DDNS* *Updates* *to* *a* *DNS* *Server* *in* *Another* *Domain*

*[drawio]*

After you configure the Infoblox DHCP server and AD domain controller, the following occurs:

1. Kerberos – In Same Domain  
   The Infoblox DHCP server uses the TGT (ticket-granting ticket) from the AD/Kerberos server, [ad.child.corpxyz.com](http://ad.child.corpxyz.com), to request a service ticket for DNS/ns1.corpxyz.com@corpxyz.COM. The Kerberos server replies with a referral ticket for the Kerberos server in the [corpxyz.com](http://corpxyz.com) domain, [ad.corpxyz.com](http://ad.corpxyz.com).
2. Kerberos — In the Other Domain  
   The Infoblox DHCP server uses the referral ticket and requests a service ticket from [ad.corpxyz.com](http://ad.corpxyz.com) for DNS/ns1.corpxyz.com@corpxyz.COM. The Kerberos server replies with a service ticket for DNS/ns1.corpxyz.com@corpxyz.COM.
3. TKEY Negotiations (GSS Handshake)  
   The Infoblox DHCP server sends the DNS server [ns1.corpxyz.com](http://ns1.corpxyz.com) a TKEY (transaction key) request, which includes the service ticket. The DNS server replies with a TKEY response that includes a TSIG (transaction signature). The Infoblox appliance and the DNS server have established a security context, enabling the DHCP server to send DDNS updates to the DNS server.
