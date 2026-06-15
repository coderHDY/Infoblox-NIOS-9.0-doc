---
title: "Generating a Client Certificate"
source: "/space/nios90/1320356250"
pageId: "1320356250"
---
To generate a client certificate:

1. Grid: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab.  
   Grid Master Candidate: From the **Infoblox** **Grid** tab, select the **Grid Manager** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. From the Toolbar, click **Certificates** -&gt; **Client Cert** -&gt; **Generate Client Certificate**, and select either **RSASHA1** or **RSASHA256**.
   
   - If you are generating a certificate for an HSM group with Thales Luna 4 devices, you must select **RSASHA1**; and if the certificate is for an HSM group with Thales Luna 5 or Luna 6 devices, select **RSASHA256**.

The appliance displays a confirmation dialog after it generates the certificate. If a certificate had been previously generated, the appliance displays a dialog warning that if the previous certificate was registered with a server, then the new certificate must be registered with the server.
