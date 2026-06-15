---
title: "Configuring the HTTP Service"
source: "/space/nios90/1395163343"
pageId: "1395163343"
---
To allow file distribution access using HTTP, you must specify clients that can request the service and then enable the HTTP service on the appliance.  
Before you enable the HTTP service, however, be aware of the following configuration rules:

- HTTP only runs on the active member of an HA pair.
- HTTP can run on the master or any member.
- HTTP always runs on the LAN port, never the MGMT port.
- HTTP to HTTPS redirect becomes non-functional if the file distribution service is enabled and all administrative access is run on the LAN port. For more information on HTTP redirect, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[*Enabling*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[*HTTP*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[*Redirection*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280407257/Managing+Security+Operations#bookmark881) For information on how to specify the MGMT port for HTTP, see [  ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[*Using*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[*the*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[*MGMT*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[   ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[*Port*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129)[.](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/660144129) To configure the HTTP file distribution service on a member:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Members** tab -> *member* checkbox, and then click the Edit icon.
2. In the *Member* *File* *Distribution* *Properties* editor, select the **HTTP** tab, and then complete the following:
   
   - **Allow these clients perform file transfers**: Select this to configure the access control list for allowing HTTP file distribution requests from clients, as described in  Configuring Access Control for File Distribution below.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
