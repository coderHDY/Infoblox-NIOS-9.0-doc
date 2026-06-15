---
title: "About Configuring a Thales Luna HSM Device"
source: "/space/nios90/1502937177"
pageId: "1502937177"
---
Do the following for each Thales Luna HSM device that you are adding to the group:

1. On the Grid, generate a client certificate for the Grid Master and Grid Master Candidate. For information, see* *[*About Client Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates/about-client-certificates). If you are upgrading the Thales Luna HSM from Luna 5 or 6 to Luna 7 CPL, you must generate a new client certificate.
2. On the Thales Luna HSM, do the following:
   
   - Assign the Grid Master and Grid Master Candidate to a partition on the HSM to avoid any service interruptions, in case the Grid Master Candidate is promoted to Grid Master.
   - Upload the certificates of the Grid Master and Grid Master Candidate to the HSM and register the certificates in the HSM's list of clients. The certificates of the Grid Master and Grid Master Candidate are linked to their IP addresses. Therefore, if any of their IP addresses change, you must generate a new client certificate and register it with the HSM.  
     Note that if the HSM is configured and you replace an appliance that was a Grid Master or Grid Master Candidate and you backed up the database of the old appliance and restored it on the replacement appliance, the certificates remain intact. Therefore, you do not need to regenerate a new certificate for the replacement, as long as the IP address does not change.
   - If you are upgrading from a previous version of Thales Luna HSM to a later version, such as from Luna 6 to Luna 7 CPL, you must complete the following before adding the new Luna configuration to NIOS:
     
     - Remove the previous certificate registration from the HSM server and then re-register the Grid Master and Grid Master Candidate certificates.
     - Generate a new HSM certificate if you want to retain the current IP settings for the Grid Master.
   - Download the HSM certificate.

> **warning**
>
> **Note**
> 
> - Make sure that the common name used in the certificates is distinct when you configure HSM servers in HA mode.
> - To configure Thales Luna on an HA pair, add a static route with the virtual IP address of the Grid to the HSM server.

For additional information, refer to your Thales Luna HSM documentation.
