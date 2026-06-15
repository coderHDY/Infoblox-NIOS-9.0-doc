---
title: "Defining Substitute Rules for TXT Records"
source: "/space/nios90/1320422302"
pageId: "1320422302"
---
A TXT (text) record contains supplemental information for a host. SPF (Sender Policy Framework) records are specialized RPZ TXT records that identify the servers that send mail from a domain.  
To define substitute rules for TXT records:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(TXT** **Record)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(TXT** **Record)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(TXT* *Record)* *Rule* wizard:
   
   - **Name**: Enter the name to define a TXT record for a host or subdomain. The name that you specify, irrespective of the RPZ name, is used to determine a match with the RPZ rule. Click **Select** **Zone** to select a different zone.
   - **DNS** **View:** Displays the DNS view to which the selected RPZ belongs.
   - **Text**: Enter the text that you want to associate with the record. It can contain substrings of up to 255 bytes, up to a total of 512 bytes. Additionally, if you enter leading, trailing, or embedded spaces in the text, add quotes around the text to preserve the spaces. For example: " v=spf1 include:corp200.com -all ".
   - **Comment**: Optionally, enter additional information about the TXT record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
