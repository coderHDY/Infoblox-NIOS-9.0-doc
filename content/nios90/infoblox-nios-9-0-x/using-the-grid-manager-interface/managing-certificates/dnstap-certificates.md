---
title: "DNSTAP Certificates"
source: "/space/nios90/1321108426"
pageId: "1321108426"
---
DNSTAP certificates are necessary for sending TLS violations using DNSTAP. To enable **Violations over TLS** in *Grid DNS Properties or Member DNS Properties editor*, DNSTAP certificates are mandatory. For information about configuring dnstap and configuring dnstap for violations over TLS, see [*Configuring dnstap*](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/configuring-dnstap).

To upload a DNSTAP certificate:

1. From the **Infoblox Grid** tab, select the **Grid Manager** tab.
2. Select **Certificates** -&gt; **Manage DNSTAP Certificates** from the Toolbar.
3. In the *DNSTAP Certificates* editor, there are files used for mutual TLS communication between the DNSTAP receiver and external DNSTAP clients. Ensure to upload all the three required certificates to complete the TLS handshake:
   
   - **Client Certificate File**. The client certificate file Is a digital certificate used to authenticate the DNSTAP client to a receiver during a SSL/TLS handshake.
   - **Client Key File: **DNSTAP client key file is a private key file used in SSL/TLS encryption for TLS data.
   - **CA Certificate file: **This file is used for mutual TLS communication between the receiver and the client.
4. In the *Upload* dialog box, click **Select** and navigate to the certificate you want to upload.
5. Click **Close **to exit the *DNSTAP Certificates *dialog.
