---
title: "Defining Substitute Rules for IPv4 Addresses or Networks"
source: "/space/nios90/1320422335"
pageId: "1320422335"
---
You can define a substitute for an IPv4 address or a network address. When a client queries for A records of a domain name, if the IP address in A records in the response match the specified address or network, then the response is modified to instead contain the substituted address.  
To define substitute rules for IPv4 addresses or networks:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(IPv4** **Address)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(IPv4** **Address)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(IPv4* *Address)* *Rule* wizard:
   
   - **IP** **Address** **or** **Network**: Enter the IPv4 address which you want to substitute with another IPv4 address. Click **Select** **Zone** to select a different zone.
   - **DNS View:** Displays the DNS view to which the selected RPZ belongs.
   - **Policy**: Displays the selected policy.
   - **Substituted IP Address:** Enter the IPv4 address that must be returned to the user when the response matches the A records.
   - **Comment**: Optionally, enter additional information about the IPv4 address.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.4. Save the configuration.

> **warning**
>
> You cannot define a substitute rule for the same IP address or a network address for which you have already defined a passthru rule.
