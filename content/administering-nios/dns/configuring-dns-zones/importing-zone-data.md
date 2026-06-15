---
title: "Importing Zone Data"
source: "/space/nios90/280665197"
pageId: "280665197"
---
Importing zone information alleviates having to manually enter data through the Infoblox GUI. You can import data from existing name servers, as well as from NIOS appliances running version 3.1r4 or later. You can import existing zone data when you create a new zone and when you edit an existing zone. You can import one zone (and its subzones) at a time.

For the remainder of this section, the name server that stores the existing zone data (which is imported) is referred to as the *source* name server (regardless of whether it is a third-party server or another NIOS appliance). The appliance that receives the zone data is referred to as the *destination* appliance. The following illustration shows the import zone data process.

*Importing* *Zone* *Data* *Process*

*[drawio]*

The appliance imports zone data through a zone transfer. Therefore, the source name server must be authoritative for the zone data being imported. You must also configure the source name server to allow zone transfers to the destination appliance. On the source name server, you might need to modify the *allow-transfer* substatement to include the IP address of the destination appliance prior to importing the data. If you are importing zone data to an HA pair, use the VIP (virtual IP) address shared by the HA pair. For a single independent appliance, use the LAN IP address. If you are importing zone data to a Grid, always use the IP address of the Grid Master.

If the source name server is an Infoblox appliance, you can configure it to allow zone transfers as described in [*Enabling Zone Transfers*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280405834). Note that a NIOS appliance, acting as the primary name server for a zone, by default allows zone transfers to its secondary name servers. If the zone import fails, the zone to which the data is imported will be disabled and the system does not create records and delegated subzones.

> **warning**
>
> ### Note
> 
> The appliance does not encode punycode when you import zone data containing punycode. For example, a zone data containing IDNs in punycode is stored in punycode for the data being imported. The data is managed in punycode only.

#   
About Importing Data into a New Zone

When the appliance imports data to a newly created zone, it imports the existing A, CNAME, DNAME, SRV, TXT, MX, PTR, host, and bulk host records, but creates NS (and A records matching that NS record) and SOA records appropriate for the destination server. The NS and SOA records are auto-created when a destination appliance is specified as the primary or secondary name server for the new zone. If the imported zone has extra NS records, they are rewritten to specify the source server as an external secondary. Delegation is also added for any subzones. The subzone records are not imported.

# About Importing Data into an Existing Zone

When you import zone data into an existing zone, the zone retains the NS and SOA records automatically created when the zone was originally created and replaces all other records. The local appliance also retains subzones and records in the subzones that exist locally. If there are no duplicate records between the imported zone and the existing zone, the records in the existing zone are retained. If the imported zone has extra NS records, those records change to designate the source server as an external secondary.

# Importing Data into Zones

In Grid Manager, you can import zone data when you create the zone using the *Add* *Authoritative* *Zone* wizard and when you edit an existing zone. For information on how to add a new zone through the wizard, see [*Configuring Authoritative Zones*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280763330). The last step of the wizard provides the option to import zone data. The following procedure describes how to import data into an existing zone.   
  
**Note:** Only superusers can import zone data that contains A, AAAA, shared A, or shared AAAA records with a blank name. Limited-access users must have read/write permission to **Adding** **a** **blank** **A/AAAA** **record** in order to import zone data that contains A, AAAA, shared A, or shared AAAA records with a blank name, otherwise the import zone data operation might fail. You can assign global permission for specific admin groups and roles to allow to import A, AAAA, shared A, or shared AAAA records with a blank name. For more information, see [*Administrative Permissions for Adding Blank A or AAAA Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765861)  
  
To import data into an existing zone:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Zones** tab -> *zone* checkbox, and then click **Import** **Zone** in the Toolbar.
2. In the *Import* *Zone* dialog box, specify the following:
   
   - The IP address of the name server from which you want to import data.
   - Optionally, click the **Automatically** **create** **Infoblox** **host** **records** **from** **A** **records** checkbox.
3. Click **Import**.

When the local server successfully imports the zone data, a *Confirmation* message appears. If the local server cannot import the zone data, an *Error* message appears, recommending that you verify the correctness of the IP address of the remote server and zone information.

> **warning**
>
> ### Note
> 
> If NIOS resolves the IP address of the imported zone data, an external secondary member is added to the list of name servers with the exact IP address. If NIOS cannot resolve the IP address of the imported zone data, it adds an external secondary member with the IP address 255.255.255.255 to the list of name servers.
