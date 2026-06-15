---
title: "Defining Substitute Rules for PTR Records"
source: "/space/nios90/1321174924"
pageId: "1321174924"
---
In a forward-mapping zone, a PTR (pointer) record maps a domain name to another domain name. In an RPZ, a PTR (pointer) record maps an address to a domain name. To define a specific address-to-name mapping, add an RPZ PTR record to a previously defined RPZ.  
To define substitute rules for PTR records:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(PTR** **Record)** **Rule.**  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Substitute** **(Record)** **Rule** -> **Substitute** **(PTR** **Record)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Substitute* *(PTR* *Record)* *Rule* wizard: You can select either **Name** or **IP** **address** from the drop-down list.
   
   - **Name:** Enter a domain name for which you want to create a pointer to another domain. The name that you specify, irrespective of the RPZ name, is used to determine a match with the RPZ rule. Click **Select** **Zone** to select a different zone. The name should be in the following format for RPZ:
     
     ipaddress.in-addr.arpa.
     
     Note that the IP address should be in the reverse format. For example, if the IP address is 10.2.1.4, then the name format for RPZ is 4.1.2.10.in-addr.arpa. The following fields are displayed when you select **Name** from the drop-down list:
     
     - **DNS View:** Displays the DNS view to which the selected RPZ belongs.
     - **Domain Name:** Enter the domain name to which you want the PTR record to point. Make sure that you enter a valid FQDN. Example: [test.com](http://test.com), [http://foo.com](http://foo.com) , etc.
   - **IP Address:** Enter an IP address for which you want to create a pointer to a domain. The following fields are displayed when you select **IP Address** from the drop-down list:
     
     - **Zone:** Displays the RPZ you have selected. Click **Select Zone** to select a different zone.
     - **DNS View:** Displays the DNS view to which the selected RPZ belongs.
     - **Domain Name:** Enter the domain name to which you want the PTR record to point. Make sure that you enter a valid FQDN. Example: [test.com](http://test.com), [http://foo.com](http://foo.com) , etc.
   - **Comment**: Optionally, enter additional information about the PTR record.
   - **Disable**: Clear the checkbox to enable the record. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
