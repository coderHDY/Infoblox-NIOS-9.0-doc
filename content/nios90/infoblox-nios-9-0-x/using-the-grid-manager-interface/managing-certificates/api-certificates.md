---
title: "API Certificates"
source: "/space/nios90/1320421638"
pageId: "1320421638"
---
If a member is added to a subscriber site of type API, API certificates are necessary to activate the subscriber service on that Grid member.

To upload an API certificate:

1. From the **Infoblox** **Grid** tab, select the **Grid Manager** tab.  
   From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. Select **Certificates** -&gt; **Manage API Certificates** from the Toolbar.
3. In the *API Certificates* editor, there are files used for mutual TLS communication between the gRPC server and external gRPC clients. Ensure to upload all the three required certificates to complete the TLS handshake:
   
   - **Server Certificate File**.** **The server certificate file is a digital certificate used by the API server to authenticate the API client during SSL/TLS handshake.
   - **Server Key File**.** **The server key file is an RSA key file of size 4096.
   - **CA Certificate file**. This file is used for mutual TLS communication between API server and API Client.
4. In the *Upload* dialog box, click **Select** and navigate to the certificate you want to upload.
5. Click **Close **to exit the *API Certificates* dialog.
