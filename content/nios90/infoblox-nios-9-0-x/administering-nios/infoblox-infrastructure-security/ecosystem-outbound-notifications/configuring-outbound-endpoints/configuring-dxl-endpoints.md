---
title: "Configuring DXL Endpoints"
source: "/space/nios90/1285947839"
pageId: "1285947839"
---
When adding a DXL endpoint, you must configure the DXL client and the broker. DXL brokers that are installed on managed systems route messages between connected clients. The network of brokers tracks active consumers and dynamically adjusts the message routing as needed. As shown in the figure below, a broker relays a message when a client requests a service or when an update is broadcast.

*[drawio]*

An Outbound worker that acts as a DXL client sends data and templates using the DXL protocol to the DXL brokers fabric. You can change the format of the DXL message using relevant template. A connection is established as soon as the outbound worker starts transmitting the data.

You can manually configure the list of DXL brokers that are used by DXL clients in NIOS or import the broker configuration file. The DXL endpoint configuration requires import of DXL brokers list and their certificates on the Infoblox side as well as import of Infoblox certificate on the McAfee side. Note that you must install the Security Ecosystem license before you configure a DXL endpoint.

For a McAfee ePolice Orchestrator, you must do the following:

1. Import NIOS certificate.
2. Export DXL broker certificates.
3. Export a DXL broker list.

To configure a DXL endpoint, complete the following:

1. From the **Grid/System **tab, select the **Ecosystem** tab -&gt; **Outbound Endpoint** tab and then click **Add** -&gt; **Add DXL Endpoint** from the Toolbar.
2. In the **Add DXL Endpoint** wizard, complete the following:
   
   - **Name**: Specify the name used to identify the endpoint.
   - **Vendor Type**: The DXL vendor type associated with the endpoint. This is optional.
   - **Client Certificate**: Click **Generate** to generate and upload both the client and CA certificates of the endpoint on NIOS. When you click **Generate**, the client certificate is automatically uploaded on NIOS and a copy of CA certificate is downloaded. Import this downloaded CA certificate to the DXL server. For information about how to import the CA certificate, refer to the McAfee documentation. If you already have the client certificate, you can upload it by clicking the Upload icon. Click **Upload** to upload the client certificate. In the *Upload* dialog box, click **Select** to navigate to the certificate, and then click **Upload**.
   - **CA Certificates**: Click **CA Certificates** to upload the broker Certificate. Download the broker certificate from the DXL server and upload it to NIOS. In the *CA Certificates* dialog box, click the Add icon, and then navigate to the certificate to upload it.
   - **WAPI Integration Username**: If you have included at least one “wapi” related field in your action template, you must configure WAPI integration; otherwise, the WAPI step will fail due to an authorization error. Enter the username of the admin user you want to designate for DXL notifications.
   - **WAPI Integration Password**: Enter the password of the admin user you have designated for DXL notifications.
   - **Member Source outbound API requests from**: Select one of the following to process for sending outbound notifications:
     
     - **Selected Grid Master Candidate (Recommended)**: Select this to use the Grid Master Candidate to process and send outbound notifications to the endpoint. If there are multiple Grid Master candidates, select a Grid Master Candidate from the drop-down list. This is the recommended choice and is selected by default because the CPU and memory required for processing and sending outbound events from the Grid Master Candidate can be offloaded or manually load balanced across multiple Grid Master Candidates if required.
     - **Current Grid Master**: Click this to use the Grid Master to send outbound notifications to the endpoint. When you use the Grid Master as the outbound member, ensure that it has enough CPU and memory to process all the workloads and processes, in addition to being an outbound member. Infoblox recommends that you use the Grid Master as an outbound member only for testing purposes to avoid overloading the Grid Master and to maintain optimal performance for the Grid.
   - **Comment**: Enter additional information about the DXL endpoint.
   - **Disable**: Select this if you want to save the configuration but do not want to use it yet. You can clear this checkbox when you are ready to use this configuration.
3. Click** Next** to add the DXL broker. There are two ways to configure the DXL broker. You can either manually enter the host name of the broker or you can import the broker configuration file using the **Import** option.  
   **To create your own file with brokers list**:  
   In the *Brokers* wizard, complete the following:
   
   - Click **Add** to open the *Add Broker* wizard. Enter the host name in the Host Name text box. Optionally, you can enter the following information as well:
     
     - **IP address**: Enter the IP address of the DXL broker.
     - **Unique ID**: A unique identifier for the broker. This is useful for identifying the DXL broker in log messages.
     - **Port information**: The port number used to communicate with the DXL broker.  
       **To import the broker configuration file:**  
       **In the *****Brokers***** wizard, complete the following:**
     - Click **Import** to upload the broker configuration file. In the *Upload* dialog box, click **Select** to navigate to the certificate. You can export the Broker configuration file `brokerlist.properties` file from McAfee ePolice Orchestrator (McAfee ePO). For information how to export, refer to the McAfee documentation. Click **Upload** to upload the broker configuration file.  
       Click **Test Connection** to validate the connectivity between the DXL broker fabric and the Grid Master.
4. Click **Next** to add a DXL topic. DXL uses topics to send data. You can then add the topic to a notification rule so that NIOS can send notifications when an event related to the topic occurs.  
   **To add a topic:**
   
   - Click the **Topics** tab. Click the Add icon to enter a topic. Topics may be in the format defined in the session management template. For example, /infoblox/outbound/LEASE.
5. Click **Next** to set the severity level for the events.
   
   - **Timeout**: Specify the session timeout value for the endpoint. The default value is 30 seconds.
   - **Log Level**: From the drop-down list, select the severity level for the events. The severity level you select here determines the type of events that are being logged. This can be **Debug**, **Info**, **Warning**, or **Error**. When you select **Debug**, all fields or variables used in the events that were sent to the endpoint are logged, including deduplicated events for RPZ hits. For information about deduplication, see [*Deduplicating Events*](/nios90/infoblox-nios-9-0-x/administering-nios/infoblox-infrastructure-security/ecosystem-outbound-notifications/configuring-notification-rules). Note that setting this to **Debug** might slightly affect the performance of your production system.
   - **Vendor Type**: Displays the vendor information for the endpoint.
   - **Template Type**: Displays the Session Management template.
   - **Parameters**: Displays the parameters of the template you select. You can access these values in the notification rules.
6. Click **Next** to add extensible attributes for the endpoint. For information, see [*Managing Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).
7. Save the configuration.

> **warning**
>
> Note
> 
> If your outbound member is a Grid Master Candidate and in case the Grid Master Candidate is promoted to the Grid Master, make sure that you modify the outbound member to the Grid Master on the endpoint configuration to avoid any outbound notification failures.
