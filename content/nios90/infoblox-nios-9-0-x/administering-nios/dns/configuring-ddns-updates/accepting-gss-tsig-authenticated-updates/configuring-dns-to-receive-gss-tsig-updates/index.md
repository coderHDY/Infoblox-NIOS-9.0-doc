---
title: "Configuring DNS to Receive GSS-TSIG Updates"
source: "/space/nios90/1333363575"
pageId: "1333363575"
---
You can configure an appliance to support Active Directory and accept secure DDNS updates from clients using GSS-TSIG. The initial configuration tasks are shown in *Figure 21.11*. The appliance supports servers running Windows 2000 Server, Windows Server 2003, Windows Server 2008, Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, or Windows Server 2016 with the Active Directory service installed.

*Figure* *21.11* *Adding* *a* *NIOS* *Appliance* *to* *an* *AD* *Environment* *with* *GSS-TSIG* *Support*

*[drawio]*

On an already functioning AD domain controller:

1. Enable zone transfers to the NIOS appliance.
2. Add a user account for the NIOS appliance serving DNS. A corresponding account on the Kerberos server is automatically created. For information, see Creating an AD User Account below.
3. Export the keytab file for the NIOS appliance account from the Kerberos server to a local directory on your management system. For information, see Generating and Exporting the Keytab File below.

On an Infoblox appliance:

1. Import the keytab file from your management system to the Infoblox appliance and enable GSS-TSIG authentication on the appliance. For information, see Importing the Keytab File and Enabling GSS-TSIG Authentication below.
2. Configure a forward-mapping zone with the same name as the AD zone. For information, see [*Creating an Authoritative Forward-Mapping Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-forward-mapping-zone).
3. (Optional) Create a reverse-mapping zone for the network address space that corresponds to the domain name space in the forward-mapping zone. For information, see [*Creating an Authoritative Reverse-Mapping Zone*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-reverse-mapping-zone)[.](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/creating-an-authoritative-reverse-mapping-zone)
4. Import the zone data from the AD domain controller. For information, see [*Importing Zone Data*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-zones/importing-zone-data).
5. Enable the acceptance of GSS-TSIG-signed updates from the AD controller and from the DHCP clients and servers whose addresses the DHCP server assigns. For information, see Accepting GSS-TSIG Updates below.
