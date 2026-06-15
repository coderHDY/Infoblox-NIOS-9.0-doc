---
title: "About GSS-TSIG"
source: "/space/nios90/280664740"
pageId: "280664740"
---
GSS-TSIG (Generic Security Service Algorithm for Secret Key Transaction) is used to authenticate DDNS updates. It is a modified form of TSIG authentication that uses the Kerberos v5 authentication system.  
GSS-TSIG involves a set of client/server negotiations to establish a "security context." It makes use of a Kerberos server (running on the AD domain controller) that functions as the KDC (Kerberos Key Distribution Center) and provides session tickets and temporary session keys to users and computers within an Active Directory domain. The client and server collaboratively create and mutually verify transaction signatures on messages that they exchange. Windows Server 2016, Windows Server 2019 and Windows Server 2022 all support DDNS updates using GSS-TSIG.  
You can configure the appliance to accept GSS-TSIG signed DDNS updates from a single client or multiple clients that belong to different AD domains in which each domain has a unique GSS-TSIG key. You can also configure the appliance to support one or multiple GSS-TSIG keys for each Grid member. For information about how to configure GSS-TSIG for DHCP and DNS, see [*Configuring GSS-TSIG keys*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/configuring-gss-tsig-keys). This feature also supports HA pairs and is compatible with DNS zones that have multiple primary servers configured. For more information about HA pairs and DNS zones with multiple primary servers, see [*About HA Pairs*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/about-ha-pairs) and [*Assigning Zone Authority to Name Servers*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers)[ ](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/assigning-zone-authority-to-name-servers)respectively.  
You can upload keytab files that contain one or multiple GSS-TSIG keys and manage the keys globally. NIOS supports up to 256 GSS-TSIG keys for each member in the Grid. NIOS logs administrative changes to GSS-TSIG keys in the audit log and failures in parsing or loading the keytab files in the syslog. Note that this feature is enabled only when you have installed the DNS license.

> **warning**
>
> ### Note
> 
> For information about GSS-TSIG, see *RFC* *3645,* *Generic* *Security* *Service* *Algorithm* *for* *Secret* *Key* *Transaction* *Authentication* *for* *DNS* *(GSS-TSIG)*.

A NIOS appliance can use GSS-TSIG authentication for DDNS updates for either one of the following:

- A NIOS appliance serving DHCP can send GSS-TSIG authenticated DDNS updates to a DNS server in an AD domain or multiple AD domains whose domain controller is running Windows Server 2016, Windows Server 2019 or Windows Server 2022. The DNS server can be in the same AD domain as the DHCP server or in a different domain.
  
  - For information about sending secure DDNS updates to a DNS server in the same domain, see [*Sending Secure DDNS Updates to a DNS Server in the Same Domain*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-gss-tsig/kerberos-authentication-for-gss-tsig/sending-secure-ddns-updates-to-a-dns-server-in-t).
  - For information about sending secure DDNS updates to a DNS server in a different domain, see [*Sending Secure DDNS Updates to a DNS Server in Another Domain*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/about-gss-tsig/sending-secure-ddns-updates-to-a-dns-server-in-a).
- A NIOS appliance serving DNS can accept GSS-TSIG authenticated DDNS updates from DHCP clients and servers in an AD domain or multiple AD domains whose domain controller is running Windows Server 2016, Windows Server 2019 or Windows Server 2022.
  
  - For information, see [*Accepting GSS-TSIG-Authenticated Updates*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-ddns-updates/accepting-gss-tsig-authenticated-updates).
    
    Note that a NIOS appliance cannot support both of these features at the same time.
