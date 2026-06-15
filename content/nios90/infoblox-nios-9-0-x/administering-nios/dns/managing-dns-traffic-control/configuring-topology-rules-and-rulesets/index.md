---
title: "Configuring Topology Rules and Rulesets"
source: "/space/nios90/280664223"
pageId: "280664223"
---
A topology rule maps a client IP address to a DNS Traffic Control (DTC) pool or server. To use Topology as the load balancing method for a pool or an LBDN, you must define a topology ruleset containing at least one rule. The rulesets are configured globally. When the DNS Traffic Control returns a response, it evaluates the list of rules in the topology ruleset in order and uses the first match with an available destination. The method fails if there are no matches.

You can define the following topology rules in a ruleset:

- Extensible Attribute rule
- Subnet rule
- Geography rule

In the DTC Topology ruleset for Subnet rule, Geographical rule, and Extensible Attribute topology (EA) rules there are options to choose the **NOERR/NODATA** response or the **NXDOMAIN** response. It will also allow you to set the **Destination** as **SERVER** or **POOL** for the subnet from the IPAM object. The destination for a topology ruleset is either a server or a pool. An LBDN can use only topology rulesets with a pool as the destination. A pool can use only topology rulesets with a server as the destination. You can also use CSV import to import rules into NIOS.

To use DTC topology with extensible attribute rules, you must select the extensible attributes that support DTC balancing in the *Grid DNS Properties* editor. You can select up to four extensible attributes and the order in which you select them is required for filling the extensible attributes topology rule. For example, if a ruleset is to have three extensible attributes in the order A, B, and C, while creating the extensible attributes topology rule, you must select the value of A first, then B, and finally the value of C in the *Grid DNS Properties* editor. For more information, see [*Configuring Grid DNS Traffic Control Properties*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dns-services/configuring-dns-traffic-control-properties).

The extensible attributes topology rules work based on the IPAM configuration. The rules are supported only on IPv4 and IPv6 networks, and are not supported on network containers and hosts. For a correct DTC load balancing based on IPAM networks, you must assign extensible attributes that are selected for DTC and have valid values for IPv4/IPv6 Networks. You can also configure extensible attributes to be inherited from parent IPv4/IPv6 network containers. For more information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

DTC topology rulesets with extensible attribute rules use a separate database instance — DTC EA database that should be up to date to ensure correct navigation for the incoming DTC queries. Each time you make changes to extensible attributes in the IPAM object, or manage a set of extensible attributes for DTC in Grid Manager, a notification prompting you to rebuild the DTC EA database is displayed. If you choose to ignore the prompt, then all changes to DTC balancing behavior that require a database rebuild will not take effect. For more information about rebuilding the EA database, see Rebuilding EA Database below.

> **warning**
>
> ### Note
> 
> - If the DNS service is already running, you must not restart the service after the rebuild of the EA database. Instead, wait until the DTC members finish making the new EA database build active.
> - Once the DNS Traffic Control restores, you must manually rebuild the DNS Traffic Control EA database.
