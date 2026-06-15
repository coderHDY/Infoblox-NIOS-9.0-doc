---
title: "Creating an HA Grid Master"
source: "/space/nios90/684327064"
pageId: "684327064"
---
To create a Grid, you first create a Grid Master and then add members. Although you can define a single appliance as a Grid Master, using an HA pair provides hardware redundancy for this vital component of a Grid. You can create an HA Master in either IPv4, IPv6, or in dual mode. An IPv4 HA Master uses IPv4 as the communication protocol between the two nodes and for Grid communication. An IPv6 HA pair uses IPv6 as the communication protocol between the two nodes and for Grid communication. But in a dual mode HA pair, you can select either IPv4 or IPv6 as the communication protocol between the two nodes and for Grid communication. The following procedure explains how to put two NIOS appliances on the network and use the *Infoblox* *Grid Setup Wizard* to configure them as Nodes 1 and 2 to form an HA Grid Master. For information about which vNIOS appliance supports configuration as a Grid Master, see [*vNIOS Appliances*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/154712578).

If you are setting up HA with vNIOS instances deployed in AWS, Google Cloud or Azure cloud, as a prerequisite, you must set up a DNS resolver from the *Grid Properties Editor* for NIOS to resolve the cloud service URL. For more information, see [*Enabling DNS Resolution*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280764908).
