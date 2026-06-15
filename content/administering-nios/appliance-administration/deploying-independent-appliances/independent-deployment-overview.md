---
title: "Independent Deployment Overview"
source: "/space/nios90/280667929"
pageId: "280667929"
---
> **warning**
>
> ### Note
> 
> Infoblox appliances support IPv4 and IPv6 networking configurations in most deployments cited in this chapter. You can set the LAN1 port to an IPv6 address and use that address to access the NIOS UI and the NIOS Setup Wizard. All HA operations can be applied across IPv6. You can also set a dual mode appliance by configuring both IPv4 and IPv6 address for the LAN1 port. Topics in this and following chapters generally use IPv4 examples. Also note that LAN2 and the MGMT port also support IPv6. DNS services are fully supported in IPv6 for the LAN1, LAN2, MGMT and VLAN ports. DHCP services are fully supported in IPv6 for the LAN1 and LAN2 ports. Example networks throughout this chapter use IPv4 addressing.

You can deploy the NIOS appliance as a Grid member in an Infoblox Grid or independently as a standalone deployment. NIOS appliances support both IPv4 and IPv6 networks and you can deploy them in either IPv4, IPv6, or dual mode (IPv4 and IPv6). Grids offer many advantages for large organizations while independent deployments can be sufficient for smaller sites. For example, if your ISP hosts one name server to respond to external DNS queries, you can deploy a single independent NIOS appliance as the other name server, as shown in the below figure.

*Single* *Independent* *Appliance* *as* *a* *DNS* *Server*

*[drawio]*

Using primary and secondary name servers provides DNS protocol redundancy, and configuring two DHCP servers as DHCP failover peers provides DHCP protocol redundancy. However, you can only have hardware redundancy if you deploy appliances in an HA (high availability) pair. Should the active node in an HA pair fail, the passive node becomes active and begins serving data, as shown in the below figure. For more information about HA pairs, see* *[*About HA Pairs*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644).

*Independent HA Pair*

*[drawio]*

# System Manager GUI

When you deploy an independent appliance, you use System Manager to manage the appliance. Though other chapters in this guide contain information that assumes a Grid deployment and describes the Grid Manager GUI, most of the configuration procedures are applicable to an independent appliance, with the following differences:

- In the Dashboard, there is no *Infoblox* *Grid* *Status* widget, and the *Members* *Status* widget in Grid Manager is the *System* *Status* widget in System Manager.
- Functions related to a Grid, such as joining a Grid and managing Grid licenses, do not exist in System Manager.
- The Grid related tabs and functions in Grid Manager are the system related tabs and functions in System Manager.
- Functions related to the **Members** tab in Grid Manager appear in the **Nodes** tab or the Toolbar of another subtab in System Manager.

For example, the following navigation path for a Grid:

- From the **Infoblox Grid** tab, select the **Grid** **Manager** tab -> **Members** tab -> *member* checkbox, and then click **HTTPS** **Cert** -> **Download** **Certificate** from the Toolbar.

is the following for an independent appliance:

- From the **System** tab, select the **System** **Manager** tab -> **Nodes** tab, and then click **HTTPS** **Cert** -> **Download** **Certificate** from the Toolbar.
