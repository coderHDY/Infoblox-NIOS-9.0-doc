---
title: "Supported Cloud Platform Appliance Models"
source: "/space/nios90/280274532"
pageId: "280274532"
---
The cloud platform functionality provides DNS and DHCP services for virtual machines and network devices deployed through a Cloud Management Platform (CMP). This topic has information about appliances that support the cloud platform functionality in different versions of NIOS.

# NIOS 9.0.1 and Later

Starting from NIOS 9.0.1, Trinzic X6 series appliances are supported. All appliance models of X6 series (except the models that support network discovery and reporting) support the cloud platform feature. Unlike Trinzic X5 series appliances, there are no dedicated CP-Vxxxx appliances. To use the cloud platform functionality on a Trinzic X6 appliance, you must install the Cloud Platform license on the appliance. The license can be installed only on a Grid member but not on a Grid Master, Grid Master Candidate, or a standalone appliance.

To configure an HA pair, you must use the same vNIOS models for both the active and passive nodes. For information about HA pairs, see [*About HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644)[s](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644).

For the list of supported software models, refer to the latest Infoblox NIOS Release Notes available in the [*Infoblox Support*](http://support.infoblox.com) portal.

# NIOS 9.0.0

The below table lists the Infoblox vNIOS virtual appliances that you can use as Cloud Platform Appliances. A Cloud Platform Appliance can only be configured as a Grid member, not a standalone appliance. To configure an HA pair, you must use the same vNIOS models for both the active and passive nodes. For information about HA pairs, see [*About HA Pair*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644)[s](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765644).

> **warning**
>
> ### Note
> 
> Cloud Platform Appliances do not support auto-provisioning. Pre-provisioning is supported for DNS and DHCP data. For information about pre-provisioning Cloud Platform Appliances, see [Pre-Provisioning NIOS and vNIOS Appliances](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280765527).



*Supported* *Cloud* *Platform* *Appliances*

| **vNIOS** **Appliance** | **Storage** **(GB)** | **# of** **CPU** **Cores  ** | **Virtual** **CPU** **Core Frequency** | **Memory** **Allocation** |
| --- | --- | --- | --- | --- |
| CP-V805 | 250 | 2 | 2000 MHz | 16 GB |
| CP-V1405 | 250 | 4 | 6000 MHz | 32 GB |
| CP-V2205 | 250 | 8 | 12000 MHz | 64 GB |
