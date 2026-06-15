---
title: "Sending Secure DDNS Updates to a DNS Server in the Same Domain"
source: "/space/nios90/1412432642"
pageId: "1412432642"
---
An Infoblox DHCP server can send GSS-TSIG authenticated DDNS updates to a DNS server in an AD domain whose domain controller is running Windows Server 2016, Windows Server 2019 or Windows Server 2022. The DHCP server, DNS server, and domain controller are all in the same AD domain. The process by which an Infoblox DHCP server dynamically updates resource records on a DNS server using GSS-TSIG authentication is shown in the below figure. In the illustration, the Kerberos Key Distribution Center (KDC) is running on an AD domain controller, which also provides DNS service.   
*An* *Infoblox* *DHCP* *Server* *Sends* *GSS-TSIG* *Updates* *to* *a* *DNS* *Server*

*[drawio]*

After you enable the NIOS appliance to send GSS-TSIG authenticated updates to a DNS server, the following process occurs:

1. Kerberos – Login, and TGT and Service Ticket Assignments
   
   1. The Infoblox appliance automatically logs in to the AD/Kerberos server.
   2. The Kerberos server sends the appliance a TGT (ticket-granting ticket).
   3. Using the TGT, the appliance requests a service ticket for the DNS server.
   4. The Kerberos server replies with a service ticket for that server.
2. TKEY negotiations (GSS Handshake):
   
   1. The appliance sends the DNS server a TKEY (transaction key) request. A Transaction Key record establishes shared secret keys for use with the TSIG resource record. For more information, see *RFC* *2930,* *Secret* *Key* *Establishment* *for* *DNS* *(TKEY* *RR)*.  
      The request includes the service ticket. The service ticket includes the appliance's principal and proposed TSIG (transaction signature) key, along with other items such as a ticket lifetime and a timestamp.
   2. The DNS server responds with a DNS server-signed TSIG, which is a "meta-record" that is never cached and never appears in zone data. A TSIG record is a signature of the update using an HMAC-MD5 hash that provides transaction-level authentication. For more information, see *RFC* *2845,* *Secret* *Key* *Transaction* *Authentication* *for* *DNS* *(TSIG)*.  
      The two participants have established a security context.  
      When a DHCP client sends a request for an IP address to the DHCP server, the following occurs:
3. DHCP – IP Address and Network Parameters Assignment
   
   1. The DHCP client requests an IP address.
   2. The DHCP server assigns an IP address, subnet mask, gateway address, DNS server address, and a domain name.  
      After the appliance assigns an IP address to the DHCP client, it sends the DDNS update to the DNS server as follows:
4. DDNS – Dynamic Update of the Client's Resource Records
   
   1. GSS-TSIG-Authenticated DDNS Update
      
      1. The appliance sends an authenticated DDNS update, which may include the following resource records:
         
         - A or AAAA – Address record   
           or  
           PTR – Pointer record
         - TKEY – Transaction Key record
         - TSIG – TSIG record
      2. The DNS server verifies the DDNS update and allows it to complete.
      3. The DNS server sends a GSS-TSIG-authenticated response to the appliance, confirming the update.
