---
title: "Tracking Object Changes in the Database"
source: "/space/nios90/280662600"
pageId: "280662600"
---
If you have external applications that use information in the NIOS database, you can use the Object Change Tracking feature to get informed about changes in the NIOS database. You can then periodically synchronize IPAM, DNS, and DHCP data through the Infoblox API or RESTful API, which returns updated object information. When you enable this feature, the appliance tracks the changes that are made to NIOS objects. It assigns sequence IDs to all the changed objects. These sequence IDs are incremented when there is a change in the high-level objects such as IPv4 and IPv6 fixed addresses, networks, network containers, and others. When you query using the db_objects through the Infoblox API for desired object types, the application returns all the objects of those object types that changed after the sequence ID given in the query.  
When you enable the Object Change Tracking feature, you can also specify the lifetime of deleted objects in the database and the total number of objects that must be present in the database. The deleted objects that are saved in the database are purged periodically. Note that you cannot track the user who created or updated an existing object.  
Infoblox supports full and incremental synchronization for these changes. Certain events such as Grid Master Candidate promotions and upgrades require a full synchronization.  
Users with read-only permission can use this feature. For more information, see [*Administrative Permissions for Object Change Tracking*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275126).  
To enable and use the Object Change Tracking feature to track and synchronize updates, complete the following:

1. Enable the feature, as described in Enabling Object Change Tracking below.
2. Select whether you want to use a full synchronization or an incremental synchronization. When you use one of these synchronization methods to synchronize data through Infoblox API or RESTful API, they return updated objects that can be used to update your relational database. For full synchronization, see Using Full Synchronization below. For incremental synchronization, see Using Incremental Synchronization below.
