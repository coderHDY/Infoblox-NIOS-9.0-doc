---
title: "Configuring a Sample Grid"
source: "/space/nios90/280274920"
pageId: "280274920"
---
You can configure an IPv4-only, IPv6-only, or a dual mode (IPv4 and IPv6) Grid, but the configuration example uses IPv4 addresses. In this example, you configure seven NIOS appliances in a Grid serving internal DHCP and DNS for an enterprise with the domain name corpxyz.com. There are three sites: HQ and two branch offices. A hub-and-spoke VPN tunnel system connects the sites, with HQ at the hub. The distribution and roles of the NIOS appliances at the three sites are as follows:

- HQ site (four appliances in two HA pairs):
  
  - HA Grid Master: Hidden primary DNS server
  - HA member: Secondary DNS server and DHCP server for HQ
- Site 1 (two appliances in an HA pair): HA member, secondary DNS server and DHCP server for Site 1
- Site 2 (one appliance): Single member, secondary DNS server and DHCP server for Site 2

> **warning**
>
> **Note**
> 
> When adding an Infoblox appliance to an existing Grid, you must first check whether the Grid is running the minimum required software release of the appliance. For information, refer to the document, *Minimum* *Required* *Release* *Software* *for* *Hardware* *Platforms*, that was shipped with your product.

To create a Grid, you first create a Grid Master and then add members. The process involves these three steps:

1. Configuring two appliances at HQ as the Grid Master. For more details, see [*Creating the Grid Master*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/configuring-a-sample-grid/creating-the-grid-master) below.
2. Logging in to the Grid Master and defining the members that you want to add to the Grid; that is, you configure Grid member settings on the Grid Master in anticipation of later joining those appliances to the Grid. For more details, see [Defining Members on the Grid Master](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/configuring-a-sample-grid/defining-members-on-the-grid-master) below.
3. Logging in to the individual appliances and configuring them so that they can reach the Grid Master over the network and join the Grid. For more details, see [Join Appliances to the Grid](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members/joining-appliances-to-the-grid) below.

If you are setting up HA with vNIOS instances deployed in AWS, Google Cloud, or Azure cloud, as a prerequisite, you must set up a DNS resolver from the *Grid Properties Editor* for NIOS to resolve the cloud service URL. For more information, see [*Enabling DNS Resolution*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/enabling-dns-resolution).

After creating the Grid and adding members, you use the *Data Import Wizard* to import DHCP and DNS data from legacy servers. For more details, see [Import DHCP Data](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/configuring-a-sample-grid/import-dhcp-data) and [Import DNS Data](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/configuring-a-sample-grid/import-dns-data) below.  
Finally, you transition DHCP and DNS service from the legacy servers to the Infoblox Grid members. For more details, see [Enable DHCP and Switch Service to the Grid](/nios90/by-id/1341325444) below.

*Network* *Diagram*

*[drawio]*
