---
title: "Sending GSS-TSIG Updates to a DNS Server in Another Forest"
source: "/space/nios90/1412367070"
pageId: "1412367070"
---
The Infoblox DHCP server can also send secure DDNS updates to a DNS server that belongs to a domain in another forest, as long as a forest trust exists. Refer to the Microsoft Active Directory documentation for information on establishing forest trusts.  
Similar to the authentication process between domains, the authentication process between forests also uses referrals. The appliance follows the referral chain until it reaches the domain controller of the domain in which the service is located. Note that forest trusts are not transitive. For example, if the DHCP server is in forest A and the DNS server is in forest C, a direct trust must exist between forest A and forest C for the DDNS updates to succeed. Having a trust between forest A and B, and between forest B and C is not sufficient.  
In the below figure, a trust exists between the A.Local forest and the B.Local forest. The Infoblox DHCP server in the A.Local forest needs to dynamically update the DNS server in the B.Local forest.

*Sending* *Secure* *DDNS* *Updates* *to* *a* *DNS* *Server* *in* *Another* *Forest*

*[drawio]*

The following authentication process occurs:

1. Kerberos – In Same Domain  
   The Infoblox appliance uses the TGT (ticket-granting ticket) from the AD/Kerberos server, [ad.child.corpxyz.com](http://ad.child.corpxyz.com), to request a service ticket for DNS/ns1.corp200.com@CORP200.COM. The Kerberos server does not find the principal name in its domain database and after consulting the global catalog, it replies with a referral ticket for its parent domain.
2. Kerberos — Referral Chain  
   The appliance contacts a domain controller in [corpxyz.com](http://corpxyz.com) and requests a referral to a domain controller in the [corp200.com](http://corp200.com) domain in B.Local Forest.  
   When it receives the referral, the DHCP server contacts the domain controller and requests a service ticket for the DNS server, [ns1.corp200.com](http://ns1.corp200.com). The domain controller replies with a service ticket for[ DNS/ns1.corp200.com@CORP200.COM.|mailto:DNS/ns1.corp200.com@CORP200.COM]
3. TKEY Negotiations (GSS Handshake)  
   The Infoblox appliance sends the DNS server [ns1.corp200.com](http://ns1.corp200.com) a TKEY (transaction key) request, which includes the service ticket. The DNS server replies with a TKEY response that includes a TSIG (transaction signature). The Infoblox appliance and the DNS server have established a security context.

## Configuring DHCP to Send GSS-TSIG Updates to a Different Forest

Configuring the Infoblox DHCP server for dynamic updates to a DNS server in another forest is similar to the configuration used to send dynamic updates to another domain in the same forest. For information, see Configuring DHCP to Send GSS-TSIG Updates to Another Domain section.
