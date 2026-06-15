---
title: "Adding a Thales Luna HSM Group"
source: "/space/nios90/1502937203"
pageId: "1502937203"
---
When you configure a Thales Luna HSM group, add the Thales Luna HSM devices to the group and upload their certificates to the Grid. You can add only one HSM group. To add a Thales Luna HSM Group:

1. From the **Infoblox Grid** tab, select the **HSM** **Group** tab.
2. Click the Add drop-down list and select **Thales Luna Group**.
3. In the *Add* *Thales Luna* *Group* wizard, complete the following and click **Next**:
   
   - **Name**: Enter a name for the HSM group.
   - **Partition** **Password**: Enter the partition password, and re-enter it in the **Confirm** **Partition** **Password** field.
   - **Version**: Select the Thales Luna HSM version, which is either **Luna** **4**, **Luna** **5**, **Luna** **6**, or **Luna 7 CPL**.
   - **Comment**: You can enter additional information about the HSM.
4. Click the Add icon to add a Thales Luna HSM device, and complete the following:
   
   - **Name** **or** **IP** **Address**: Enter the hostname or IP address of the HSM device.
   - **Partition** **SN**: Enter the partition serial number (PSN) of the HSM. The **Partition** **ID** field automatically displays the ID after the configuration is saved and the appliance has successfully connected to the device.
   - **Disabled**: Select this checkbox to disable use of this HSM.
   - **Server** **Certificate**: Upload the certificate of the Thales Luna HSM.
5. Save the configuration.

After you add the HSM group, the Add icon and Add button in the Toolbar are greyed out. Note that if the HSM is configured in FIPS 140-2 compliant mode, certain key algorithms and key sizes are disallowed. Requests for those key algorithms or key sizes result in an error. The following algorithms are FIPS 140-2 compliant: DSA, DSA/NSEC3, RSA/SHA1, RSA/SHA1/NSEC3, RSA/SHA-256, and RSA/SHA-512. For additional information about selecting key algorithms, see [*About the DNSKEY Algorithm*](/nios90/infoblox-nios-9-0-x/administering-nios/dns/configuring-dnssec/setting-dnssec-parameters).  
You can verify whether the Grid Master Candidate is properly registered with the HSM by navigating to the **Infoblox** **Grid** -&gt;** Grid** **Manager** -&gt; **Members** page. It's Status icon is yellow if it is not registered with the HSM.  
If DNS service is enabled, you can also verify whether the Grid Master was able to contact the Thales Luna HSMs by navigating to the **Data** **Management** &gt; **DNS** &gt; **Members** page. If the Grid Master status is yellow, check the status of the HSMs in the **Grid** &gt; **HSM** **Group** page. (For more information, see *Monitoring the HSM Group* below.) If the status is not green, check the configuration of the HSMs and restart the DNS service.
