---
title: "Defining Substitute Rules for MX Records"
source: "/space/nios90/1320356927"
pageId: "1320356927"
---
An RPZ MX (mail exchanger) record maps a domain name to a mail exchanger. A mail exchanger is a server that either delivers or forwards mail. A wildcard MX record applies to an RPZ and all its subdomains of the owner name.  
To define substitute rules for MX records:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(MX** **Record)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(MX** **Record)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(MX* *Record)* *Rule* wizard:
   
   - **Mail** **Destination**: Enter the owner name of the MX record you want to substitute.
   - **DNS** **View:** Displays the DNS view to which the selected RPZ belongs.
   - **Host** **Name** **Policy:** Displays the hostname policy of the selected zone. Ensure that the hostname you enter complies with the hostname restriction policy defined for the zone.
   - **Mail** **Exchanger:** Enter the fully qualified domain name of the mail exchanger.
   - **Preference:** Select an integer from 10 to 100. The preference determines the order in which a client attempts to contact the target mail exchanger.
   - **Comment**: Optionally, enter additional information about the MX record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
