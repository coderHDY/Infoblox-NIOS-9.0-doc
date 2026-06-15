---
title: "Accepting GSS-TSIG-Authenticated Updates"
source: "/space/nios90/280272071"
pageId: "280272071"
---
A NIOS appliance can support Active Directory and process secure GSS-TSIG-authenticated DDNS updates from DHCP clients, DHCP servers, and AD domain controllers. The appliance supports servers running Windows Server 2016, Windows Server 2019 or Windows Server 2022 with the Active Directory service installed. The process in which a DHCP client dynamically updates its resource records on a DNS server using GSS-TSIG authentication is shown in *Figure 21.10* below. The illustration also shows the relationship of the clients, the DHCP server, the DNS server, and the Kerberos server (running on the AD domain controller).

> **warning**
>
> ### Note
> 
> For explanations of the alphanumerically notated steps in *Figure 21.10 below*, see the section following the illustration.

*Figure 21.10 Authenticating DDNS Updates with GSS-TSIG*

*[drawio]*

1. DHCP – IP Address and Network Parameters Assignment
   
   1. The DHCP client requests an IP address.
   2. The DHCP server assigns an IP address, subnet mask, gateway address, and a DNS server address.
2. Active Directory – Computer and User Logins
   
   1. The computer sends a DNS request to locate the AD domain controller, and then logs in to the domain controller.
      
      Note that the computer accounts have passwords that the AD domain controller and computer maintain automatically. There are two passwords for each computer: a computer account password and a private key password. By default, both passwords are automatically changed every 30 days.
   2. The user manually logs in to a domain.
3. DNS – Query for the Kerberos Server
   
   1. The computer (or *client*) automatically sends a query for *kerberos._udp.dc_msdcs.*dom_name_ to the DNS server whose IP address it received through DHCP.
   2. The NIOS appliance replies with the name of the Kerberos server.
4. Kerberos – Login, and TGT and Service Ticket Assignments
   
   1. The client automatically logs in to the Kerberos server.
   2. The Kerberos server sends the client a TGT (ticket-granting ticket).
   3. Using the TGT, the AD member requests a service ticket for the DNS server.
   4. The Kerberos server replies with a service ticket for that server.
5. DDNS – Dynamic Update of the Client's Resource Records
   
   1. Unauthenticated DDNS Update Attempt (Refused)
      
      1. The client sends an unauthenticated DDNS update.
      2. The DNS server refuses the update.
   2. TKEY negotiations (GSS Handshake):
      
      1. The client sends the DNS server a TKEY (transaction key) request. A Transaction Key record estab- lishes shared secret keys for use with the TSIG resource record. For more information, see *RFC 2930,Secret Key Establishment for DNS (TKEYRR)*.  
         The request includes the service ticket. The service ticket includes the appliance's principal and proposed TSIG (transaction signature) key, along with other items such as a ticket lifetime and a timestamp.
      2. The DNS server responds with a DNS server-signed TSIG, which is a "meta-record" that is never cached and never appears in zone data. A TSIG record is a signature of the update using an HMAC-MD5 hash that provides transaction-level authentication. For more information, see *RFC 2845,Secret Key Transaction Authentication for DNS (TSIG)*.  
         The two participants have established a security context.
   3. GSS-TSIG-Authenticated DDNS Update (Accepted).
      
      1. The client sends an authenticated DDNS update, which includes the following resource records:
         
         - A – Address record   
           or  
           PTR – Pointer record
         - TKEY – Transaction Key record
         - TSIG – TSIG record
      2. The DNS server authenticates the DDNS update and processes it.
      3. The DNS server sends a GSS-TSIG-authenticated response to the AD member, confirming the update.

> **warning**
>
> ### Note
> 
> For GSS-TSIG authentication to work properly, the system clock times of the Infoblox DHCP server, AD domain controller and DNS server must be synchronized. One approach is to use NTP and synchronize all three devices with the same NTP servers.

In this section:

*[children]*
