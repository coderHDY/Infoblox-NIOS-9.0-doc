---
title: "Administrative Permissions for Certificate Authentication Services and CA Certificates"
source: "/space/nios90/280765822"
pageId: "280765822"
---
Limited-access admins can configure certificate authentication services and CA certificates only if their administrative roles and permissions are defined. If you want to allow admins to configure two-factor authentication, you can assign the PKI Admin role to limited-access admins or grant them read/write permissions to the following:

- All certificate authentication services
- All CA Certificates

For information about setting permissions, see [*About Administrative Permissions*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-administrators/about-administrative-permissions). The following table lists the admin tasks and required permissions for configuring certificate authentication services and managing CA certificates.

*Administration* *Permissions*

| **Tasks** | **Grid** **Member(s)** | **All** **Certificate** **Authentication** **Services** | **All** **CA** **Certificates** |
| --- | --- | --- | --- |
| Create, modify, and delete certificate authentication services |  | **RW** |  |
| Create, modify, and delete CA certificates | **RW** |  | **RW** |
