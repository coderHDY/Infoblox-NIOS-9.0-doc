---
title: "Accepting DDNS Updates from DHCP Clients"
source: "/space/nios90/280405130"
pageId: "280405130"
---
A NIOS appliance serving DNS can support Active Directory and accept both unauthenticated and GSS-TSIG authenticated updates from DHCP clients, DHCP servers, and AD domain controllers. The appliance supports servers running Windows 2000 Server, Windows Server 2003, Windows Server 2008, Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, or Windows Server 2016 with the Active Directory service installed.  
When adding a NIOS appliance that serves DNS to an AD environment, you must configure the AD/Kerberos server and NIOS appliance as follows—based on whether or not you want the DNS server to support DDNS updates using GSS-TSIG authentication:

- AD/Kerberos Server

1. Enable zone transfers to the NIOS appliance.

2. (For GSS-TSIG) Create a user account for the NIOS appliance that it can use for authentication.

3. (For GSS-TSIG) Generate the keytab file of the DNS server and save it to your management system.

- NIOS Appliance

4. (GSS-TSIG) Enable GSS-TSIG support.

5. (GSS-TSIG) Import the keytab file of the DNS server from your management system to the NIOS appliance.

6. (GSS-TSIG) Enable GSS-TSIG authentication.

7. Add a forward-mapping zone and give it a name matching the AD DNS zone whose resource records you want to import.

8. Specify the domain controller from which the appliance can receive DDNS updates. An AD domain controller replicates its data among other domain controllers within its AD domain and among domain controllers in other domains.

9. Import zone data from the specified domain controller.

10. Enable the acceptance of DDNS updates from the AD domain controller and from the DHCP clients and servers whose addresses the DHCP server assigns. You can set this at the Grid, member, and zone levels.

11. (For GSS-TSIG) Enable acceptance of GSS-TSIG DDNS updates from the AD domain controller and from the addresses that the DHCP server assigns. You can set this at the Grid, member, and zone levels.

As you can see from the above task list, adding a NIOS appliance that serves DNS to an AD environment without GSS-TSIG support involves four simple steps. To include GSS-TSIG support, there are several additional steps.

# Supporting Active Directory and Unauthenticated DDNS Updates

Before configuring the NIOS appliance, configure the AD domain controller to permit zone transfers to the IP address of the appliance. Then on the appliance, you can do the following to configure a forward-mapping zone to support AD (Active Directory) and receive unauthenticated DDNS updates from DHCP clients, DHCP servers, and AD domain controllers.

- Create a forward-mapping zone, as described in [*Creating an Authoritative Forward-Mapping Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405638). Give it a name that matches the AD DNS zone whose resource records you want to import.
- Specify the domain controllers from which the appliance can receive updates, as described in Configuring AD Support below*.*
- Import the zone date from the domain controller. For information, see [*Importing Data into Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665197).
- Enable the appliance to accept DDNS updates from the DHCP clients and servers whose addresses the DHCP server assigns. You can set this at the Grid, member, and zone levels. For information, see [*Enabling DNS Servers to Accept DDNS Updates*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280272279).

## Configuring AD Support

You can configure a forward-mapping zone to support AD from the *Active* *Directory* wizard or from the **Active** **Directory** tab of the *Authoritative* *Zone* editor. This section describes both methods.  
To configure AD support using the *Active* *Directory* wizard:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Configure** **Active** **Directory**. Note that from the **Zones** tab, you must select a zone before you click **Configure** **Active** **Directory**.
2. In the *Active* *Directory* wizard, complete the following, and then click **Next**:
   
   - **Select** **Zone**: Click this and select a zone. The name of the zone must match the name in the AD domain controller so the zone transfer from the AD domain controller to the NIOS appliance can succeed.
   - **Allow** **unsigned** **updates** **from** **Domain** **Controllers**: Select this option.  
     If you have configured DNS resolvers in the Grid, the appliance sends DNS queries for the names and addresses of the AD domain's domain controllers. Since the name of the zone that you selected is the same as the AD domain name on the domain controller, the appliance can then send a DNS query for the SRV records attached to the domain name. It also sends a DNS query for the A record of each domain controller to determine its IP address. The query results are listed in the next panel.
3. You can edit the list of domain controllers, if necessary. Click **Next** to proceed to the next step.
   
   - To add a domain controller, click the Add icon and specify the IP address.
   - To delete a domain controller from the list, select it and click the Delete icon.
4. Complete the following:
   
   - **Do you want to create underscore zones to hold the records added by the Domain Controllers?**
     
     This option allows the appliance to create the following subzones that the DNS server must have to answer AD-related DNS queries:
     
     *_*msdcs*.zone*
     
     _sites*.zone*
     
     _tcp*.zone*
     
     _udp*.zone*
     
     domaindnszones.*zone*
     
     forestdnszones.*zone*
     
     Note that these zones are automatically generated. You cannot edit these zones or import data into them. They cannot be modified, thus providing protection against forged updates.
5. Save the configuration and click **Restart** if it appears at the top of the screen.

To configure AD support using the *Authoritative* *Zone* editor:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox -> Edit icon.
2. In the *Authoritative* *Zone* editor, select the **Active** **Directory** tab and do the following:
   
   - **Allow** **unsigned** **updates** **from** **these** **Domain** **Controllers:** Select this checkbox and specify the AD domain controllers from which the appliance can receive DDNS updates.
   - **Automatically** **create** **underscore** **zones:** Select this checkbox to automatically create the subzones.
3. Save the configuration and click **Restart** if it appears at the top of the screen.

You can then import zone data, as described in [*Importing Data into Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665197).
