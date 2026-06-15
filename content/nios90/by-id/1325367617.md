---
title: "Configuring Admin Groups on the Remote RADIUS Server"
source: "/space/nios90/1325367617"
pageId: "1325367617"
---
Infoblox supports admin accounts on one or more RADIUS servers.  
On the remote RADIUS server, do the following to set up admins and associate them with an admin group:

- Import Infoblox VSAs (vendor-specific attributes) to the dictionary file on the RADIUS server
- For third-party RADIUS servers, import the Infoblox vendor file (the Infoblox vendor ID is 7779* *and the vendor attribute number for the group name is 9)
- Define the admin group
- Associate one or more remote admin accounts with the admin group
- Add and activate a policy for the admin accounts, but do not associate the policy with a policy group that contains an infoblox-group-info attribute.

Refer to the documentation for your RADIUS server for more information.
