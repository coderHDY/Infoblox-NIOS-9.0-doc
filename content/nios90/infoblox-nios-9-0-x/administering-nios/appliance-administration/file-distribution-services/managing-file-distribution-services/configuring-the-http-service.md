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
- HTTP to HTTPS redirect becomes non-functional if the file distribution service is enabled and all administrative access is run on the LAN port. For more information on HTTP redirect, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[*Enabling*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[*HTTP*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[*Redirection*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-security-operations/Managing+Security+Operations#bookmark881) For information on how to specify the MGMT port for HTTP, see [  ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[*Using*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[*the*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[*MGMT*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[   ](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[*Port*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port)[.](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/using-the-mgmt-port) To configure the HTTP file distribution service on a member:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -&gt; **Members** tab -&gt; *member* checkbox, and then click the Edit icon.
2. In the *Member* *File* *Distribution* *Properties* editor, select the **HTTP** tab, and then complete the following:
   
   - **Allow these clients perform file transfers**: Select this to configure the access control list for allowing HTTP file distribution requests from clients, as described in  Configuring Access Control for File Distribution below.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
