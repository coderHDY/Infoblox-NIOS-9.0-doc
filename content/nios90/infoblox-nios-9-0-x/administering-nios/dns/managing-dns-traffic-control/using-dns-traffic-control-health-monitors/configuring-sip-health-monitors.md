---
title: "Configuring SIP Health Monitors"
source: "/space/nios90/1394574804"
pageId: "1394574804"
---
A SIP monitor sends a standard `SIP OPTIONS` request to the server. You cannot modify this request. The monitor accepts only direct responses from the server and does not open alternate connections. The SIP monitor determines the health of the SIP server such as SIP proxies and session border controllers, and SIP gateways by issuing `SIP OPTIONS` to the server and examining the response provided by the server. The service is considered available if the response received from the server matches the expected response.  
The SIP monitor does not support SCTP transport. It does not receive SIP connections. Responses are normally received over the same connection as the request was sent. The server does not attempt to open a new connection to send the response when it encounters an error message.

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the arrow next to the Add icon and select **SIP** **Health** **Monitor**.
3. In the *SIP* *Health* *Monitor* *Wizard,* complete the following:
   
   - **Name**: Enter a name for the SIP health monitor.
   - **Interval** **(seconds)**: Enter the interval value in seconds. The health monitor runs only for the specified interval and it is measured from the end of the previous monitor cycle. The default value is five.
   - **Timeout** **(seconds)**: Enter the timeout value in seconds. The monitor waits for the number of seconds that you specify after sending a response. If it does not receive a response within the number of seconds that you specify, then the appliance considers this check as failed. The monitor discards any response it receives after the timeout. The default value is 15.
   - **Retry** **Up** **Count**: Enter a retry up count integer value. Retry up count is a value that determines how many valid responses or good health checks in a row must be received by the Grid member from the DTC server for setting the DTC server health status to green. When you specify a value, the appliance computes the duration for which health check must be performed based on the following:
     
     `interval*retry up count`  
     For example, If the DTC server has had a red status for a long time because all the SIP health checks have failed, and when the Grid receives the first good SIP health check result, the health check counter is set as 1; however, the status of the DTC server is still retained as red. If you specify the **Retry Up Count** as 3 and the health check interval as 5,  when three consecutive good health check results are received, the health check counter value becomes 3 and the DTC server health status now changes to green (3 good health check results in a row at an interval of 5 seconds each over a span of 3*5=15 seconds).
   - **Retry** **Down** **Count**: Enter a retry down count integer value. It is the opposite of the retry up count. Retry down count is a value that determines how many red status health checks (server is unavailable) in a row must be collected by the Grid member from the DTC server to switch the health status from green to red.  
     For example, for a Grid member whose connection to the DTC server is not stable and has its Retry Down Count set as 5, if the health check results received by the Grid member is in the sequence: green, red, red, red, green, then the health status of the DTC server will be retained as green.  
     Note that red health status is set when the health monitor reaches the timeout value that is `[health check interval + timeout]` seconds without a valid response.
   - **Comment**: Enter information about the SIP health monitor.  
     When the DTC server is up, health checks are sent from the Infoblox member every number of seconds specified in the **Interval** field. When the DTC server is down, health checks are sent every number of seconds specified in the **Interval** field + the **Timeout** field.
4. Click **Next** and complete the following:

- **Expected** **Return** **Code:** The response code expected from the server. Select a value from the drop-down list: **any**, **equals**, and **does** **not** **equals**. When you select **equals** or **does** **not** **equals**, the appliance displays 200 by default. You can specify a value between zero and 999.
- **Port**: Specify a port for SIP connection. The appliance displays 5060 for **TCP** and **UDP** transport by default. When you select **SIPS** and **TLS** transport options, the appliance displays 5061 by default. You can specify a value between zero and 65535.
- **Transport**: Select a transport option from the drop-down list: **SIPS**, **TCP**, **TLS**, and **UDP**. If you select **SIPS** or **TLS**, specify any of the following related options that become available:
  
  - **Client** **Certificate**: Click **Certificate** to select a client certificate. Select a certificate from the dialog box. Click **Clear** to delete the certificate that you have uploaded. The monitor does not inspect or validate the server certificate, if any. For information about how to upload certificates, see Managing[ ](#)Health[ ](#)Monitor[ ](#)Certificates below.
  - **Ciphers**: Specify a list of SSL ciphers in an OpenSSL format. You can specify text up to 1024 character.
  - **Enable Certificate Validation**: It is highly recommended to select this for the DTC server certificate to be validated by NIOS.  
    The following example commands list some available ciphers:

Example 1:

`$ openssl ciphers 'HIGH:!DES'`  
`DHE-RSA-AES256-SHA:DHE-DSS-AES256-SHA:DHE-RSA-CAMELLIA256-SHA:`  
`DHE-DSS-CAMELLIA256-SHA:ADH-AES256-SHA:ADH-CAMELLIA256-SHA:AES256-SHA: CAMELLIA256-SHA:PSK-AES256-CBC-SHA:EDH-RSA-DES-CBC3-SHA:`  
`EDH-DSS-DES-CBC3-SHA:ADH-DES-CBC3-SHA:DES-CBC3-SHA:DES-CBC3-MD5:`  
`PSK-3DES-EDE-CBC-SHA:KRB5-DES-CBC3-SHA:KRB5-DES-CBC3-MD5:DHE-RSA-AES128-SHA: DHE-DSS-AES128-SHA:DHE-RSA-CAMELLIA128-SHA:DHE-DSS-CAMELLIA128-SHA:`  
`ADH-AES128-SHA:ADH-CAMELLIA128-SHA:AES128-SHA:CAMELLIA128-SHA: PSK-AES128-CBC-SHA`

Example 2:

`$ openssl ciphers 'DEFAULT:!EDH+aRSA'`  
`DHE-DSS-AES256-SHA:DHE-DSS-CAMELLIA256-SHA:AES256-SHA:CAMELLIA256-SHA:`  
`PSK-AES256-CBC-SHA:EDH-DSS-DES-CBC3-SHA:DES-CBC3-SHA:PSK-3DES-EDE-CBC-SHA: KRB5-DES-CBC3-SHA:KRB5-DES-CBC3-MD5:DHE-DSS-AES128-SHA:DHE-DSS-SEED-SHA: DHE-DSS-CAMELLIA128-SHA:AES128-SHA:SEED-SHA:CAMELLIA128-SHA:`  
`PSK-AES128-CBC-SHA:RC4-SHA:RC4-MD5:PSK-RC4-SHA:KRB5-RC4-SHA:KRB5-RC4-MD5: EDH-DSS-DES-CBC-SHA:DES-CBC-SHA:KRB5-DES-CBC-SHA:KRB5-DES-CBC-MD5:`  
`EXP-EDH-DSS-DES-CBC-SHA:EXP-DES-CBC-SHA:EXP-RC2-CBC-MD5:EXP-KRB5-RC2-CBC-SHA: EXP-KRB5-DES-CBC-SHA:EXP-KRB5-RC2-CBC-MD5:EXP-KRB5-DES-CBC-MD5:EXP-RC4-MD5: EXP-KRB5-RC4-SHA:EXP-KRB5-RC4-MD5`

### Note

> **custom**
>
> The DHE cipher list family ("Diffie-Hellman key agreement" plus "RSA authentication") could consume excessive CPU and is excluded from the defaults used by DNS Traffic Control health monitors. Although you can enable these ciphers by explicitly configuring them in the cipher list for HTTPS and SIP monitors, you should be aware that doing so will increase CPU usage. Since health monitoring in general does not require high security, Infoblox recommends that you enable these ciphers only for target servers that do not accept other types of ciphers.

1. Click **Next** to add extensible attributes. For information, see [*Using Extensible Attributes*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/managing-appliance-operations/managing-extensible-attributes).

1. To schedule the change, click **Next** or **Schedule for Later**. In the *Schedule Change* panel, select **Now** to immediately execute this task. Or select **Later** to schedule this task, and then specify a date, time, and time zone.

1. Save the configuration.
