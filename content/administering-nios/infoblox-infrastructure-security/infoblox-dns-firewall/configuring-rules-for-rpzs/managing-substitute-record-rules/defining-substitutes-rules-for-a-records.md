---
title: "Defining Substitutes Rules for A Records"
source: "/space/nios90/1320356891"
pageId: "1320356891"
---
An RPZ A (address) record maps a domain name to a substitute IPv4 address. To define a specific name-to-address mapping, add an A record to a previously defined RPZ.  
To define substitute rules for A records:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(A** **Record)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(A** **Record)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(A* *Record)* *Rule* wizard:
   
   - **Name:** Enter the domain name that you want to map to an IP address. The name that you specify, irrespective of the RPZ name, is used to determine a match for the RPZ rule. Click **Select** **Zone** to select a different zone.
   - **DNS** **View:** Displays the DNS view to which the selected RPZ belongs.
   - **IP** **Address:** Enter the IPv4 address to which you want the domain name to map.
   - **Comment**: Optionally, enter additional information about the A record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
