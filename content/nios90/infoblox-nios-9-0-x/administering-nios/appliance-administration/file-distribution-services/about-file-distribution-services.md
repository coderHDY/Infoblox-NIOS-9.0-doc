---
title: "About File Distribution Services"
source: "/space/nios90/280764773"
pageId: "280764773"
---
You can upload files to the NIOS appliance and to individual Grid members using TFTP, HTTP, and FTP, clients. You can also upload files using the Grid Manager web interface or the API. Using access control lists, you can specify which network devices can upload files or retrieve files. You can use the **Group** **Results** function for file distribution services (TFTP, FTP, and HTTP) to group members by extensible attributes that contain the same values. For information about how to group members by extensible attributes, see [*Adding Grid Members*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/adding-grid-members).

> **warning**
>
> ### Note
> 
> File distribution services using TFTP, HTTP, and FTP is not supported by IPv6-only appliances.

Network devices, such as VoIP phones, can use the DHCP services on the appliance for IP address assignments and use the file distribution services for IP device configuration downloads. Downloads can be accomplished with TFTP, HTTP, or FTP.

*Uploading* *and* *retrieving* *files*

*[drawio]*

File uploads and downloads by FTP and TFTP file distribution clients are logged in the syslog under the **Administration**-&gt; **Logs** tabs. The logs store the following information:

- Client IP
- Date and Time
- Event type
- File(s) downloaded and/or uploaded
