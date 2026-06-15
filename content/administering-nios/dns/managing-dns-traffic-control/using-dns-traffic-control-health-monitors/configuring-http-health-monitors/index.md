---
title: "Configuring HTTP Health Monitors"
source: "/space/nios90/1393460825"
pageId: "1393460825"
---
An HTTP health monitor sends either an HTTP or HTTPS request to the server. The health monitor then examines the response received from the server. The validation is successful if the server returns a response with the expected result code.  
The HTTP/HTTPS monitor can validate the response code and response content. The response content is checked only when the response code is valid. You can define regular expressions to use for the response content check. The supported regular expression syntax is POSIX Extended Regular Expression. For information, see [*Supported Expressions for Search Parameters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280756716).   
If the DTC server certificate validation is enabled in the HTTPS health monitor, you can use the Server Name Indication (SNI) feature for remote DTC servers. SNI is an extension to the TLS computer networking protocol by which a client indicates which hostname it attempts to connect to at the start of the handshaking process. This allows a server to present multiple certificates on the same IP address and TCP port number. Thus, multiple secure (HTTPS) websites (or any other service over TLS) can be served off the same IP address without all those sites having to use the same certificate.  
After you configure an HTTP/S monitor, you can test its performance. See Testing[ ](#)HTTP[ ](#)Health[ ](#)Monitors below[.](#)

> **warning**
>
> **Note**
> 
> The HTTP health monitor does not support user name or password authentication.

To configure an HTTP health monitor, complete the following:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Traffic** **Control** tab, and then click **Manage** **Health** **Monitors** in the Toolbar.
2. In the Health Monitors Manager, click the arrow next to the Add icon and select **HTTP** **Health** **Monitor**.
3. In the *HTTP* *Health* *Monitor* *Wizard*, complete the following:
   
   - **Name**: Enter a name for the HTTP monitor.
   - **Interval** **(seconds)**: Enter the interval value in seconds. The interval value is measured from the end of the previous monitor cycle. The default value is five.
   - **Timeout** **(seconds)**: Enter the timeout value in seconds. The monitor waits for the number of seconds that you specify after sending a response. If it does not receive a response within the number of seconds that you specify, then the appliance considers this check as failed. The monitor discards any response it receives after the timeout. The default value is 15.
   - **Retry** **Up** **Count**: Enter a retry up count integer value. Retry up count is a value that determines how many valid responses or good health checks in a row must be received by the Grid member from the DTC server for setting the DTC server health status to green. When you specify a value, the appliance computes the duration for which health check must be performed based on the following:  
     `interval*retry up count`  
     For example, If the DTC server has had a red status for a long time because all the HTTP health checks have failed, and when the Grid receives the first good HTTP health check result, the health check counter is set as 1; however, the status of the DTC server is still retained as red. If you specify the **Retry Up Count** as 3 and the health check interval as 5, when three consecutive good health check results are received, the health check counter value becomes 3 and the DTC server health status now changes to green (3 good health check results in a row at an interval of 5 seconds each over a span of 3*5=15 seconds).
   - **Retry** **Down** **Count**: Enter a retry down count integer value. It is the opposite of the retry up count. Retry down count is a value that determines how many red status health checks (server is unavailable) in a row must be collected by the Grid member from the DTC server to switch the health status from green to red.  
     For example, for a Grid member whose connection to the DTC server is not stable and has its Retry Down Count set as 5, if the health check results received by the Grid member is in the sequence: green, red, red, red, green, then the health status of the DTC server will be retained as green.  
     Note that red health status is set when the health monitor reaches the timeout value that is `[health check interval + timeout]` seconds without a valid response.
   - **Comment**: Enter information about the HTTP monitor.
4. Click **Next** and complete the following:  
   **Port**: For HTTP, the appliance displays port number 80 by default. If you select Use HTTPS, the appliance displays 443 by default.  
   **Use** **HTTPS**: Select the checkbox to enable HTTPS. Specify any of the following options that become available when you select to use HTTPS:
   
   - **Client** **Certificate**: Optionally, you can select a certificate to use while opening the SSL connection for HTTPS. The monitor does not inspect or validate the server certificate, if any. For information about how to upload certificates, see Managing[ ](#)Health[ ](#)Monitor[ ](#)Certificates below.
   - **Ciphers**: Specify a list of SSL ciphers in an OpenSSL format. You can specify cipher texts up to 1024 characters. The client certificate and cipher list are only used for HTTPS transport.  
     The following example commands list some available ciphers:
     
     Example 1:
     
     `$ openssl ciphers 'HIGH:!DES'`  
     `DHE-RSA-AES256-SHA:DHE-DSS-AES256-SHA:DHE-RSA-CAMELLIA256-SHA:`  
     `DHE-DSS-CAMELLIA256-SHA:ADH-AES256-SHA:ADH-CAMELLIA256-SHA:AES256-SHA: CAMELLIA256-SHA:PSK-AES256-CBC-SHA:EDH-RSA-DES-CBC3-SHA: `  
     `EDH-DSS-DES-CBC3-SHA:ADH-DES-CBC3-SHA:DES-CBC3-SHA:DES-CBC3-MD5:`  
     `PSK-3DES-EDE-CBC-SHA:KRB5-DES-CBC3-SHA:KRB5-DES-CBC3-MD5:DHE-RSA-AES128-SHA: DHE-DSS-AES128-SHA:DHE-RSA-CAMELLIA128-SHA:DHE-DSS-CAMELLIA128-SHA:`  
     `ADH-AES128-SHA:ADH-CAMELLIA128-SHA:AES128-SHA:CAMELLIA128-SHA: PSK-AES128-CBC-SHA`
     
     Example 2:
     
     `$ openssl ciphers 'DEFAULT:!EDH+aRSA'`  
     `DHE-DSS-AES256-SHA:DHE-DSS-CAMELLIA256-SHA:AES256-SHA:CAMELLIA256-SHA:`  
     `PSK-AES256-CBC-SHA:EDH-DSS-DES-CBC3-SHA:DES-CBC3-SHA:PSK-3DES-EDE-CBC-SHA: KRB5-DES-CBC3-SHA:KRB5-DES-CBC3-MD5:DHE-DSS-AES128-SHA:DHE-DSS-SEED-SHA: DHE-DSS-CAMELLIA128-SHA:AES128-SHA:SEED-SHA:CAMELLIA128-SHA:`  
     `PSK-AES128-CBC-SHA:RC4-SHA:RC4-MD5:PSK-RC4-SHA:KRB5-RC4-SHA:KRB5-RC4-MD5: EDH-DSS-DES-CBC-SHA:DES-CBC-SHA:KRB5-DES-CBC-SHA:KRB5-DES-CBC-MD5:`  
     `EXP-EDH-DSS-DES-CBC-SHA:EXP-DES-CBC-SHA:EXP-RC2-CBC-MD5:EXP-KRB5-RC2-CBC-SHA: EXP-KRB5-DES-CBC-SHA:EXP-KRB5-RC2-CBC-MD5:EXP-KRB5-DES-CBC-MD5:EXP-RC4-MD5: EXP-KRB5-RC4-SHA:EXP-KRB5-RC4-MD5`
     
     Note:
     
     The DHE cipher list family ("Diffie-Hellman key agreement" plus "RSA authentication") could consume excessive CPU and is excluded from the defaults used by DNS Traffic Control health monitors. Although you can enable these ciphers by explicitly configuring them in the cipher list for HTTPS and SIP monitors, you should be aware that doing so will increase CPU usage. Since health monitoring in general does not require high security, Infoblox recommends that you enable these ciphers only for target servers that do not accept other types of ciphers.
   - **Enable Certificate Validation**: It is highly recommended to select this for the DTC server certificate to be validated by NIOS.
     
     - **Enable** **SNI** **(Server** **Name** **Indication)**: Specify if you want to use SNI for the health monitor to connect to a specific DTC server by hostname. In addition, you should indicate an alternate SNI hostname in the DTC server editor.
5. Click **Next** and complete the following:
   
   - **HTTP Request**: Specify the HTTP request to send the query from the client to the server. The appliance displays **GET/** by default. You can specify an HTTP request up to 1024 characters. For more information, see Editing[ ](#)HTTP[ ](#)Request[ ](#)for[ ](#)HTTP[ ](#)Health[ ](#)Monitor below.
   - **Response Code Check**: Specify in which case the response code from the server is valid:
     
     - Select **Any response code is valid**, if any response code from the server is required.
     - Select **A valid response code**, select **equals** or **does not equal**, and then specify a value. The default value is 200.
   - **Response Content Check**: Specify an option for checking the server response content:
     
     - Select **Do not check the response content** to not perform any content check.
     - Select **Search for a string in the response content** to search for a string in the response content. Then do the following:
       
       1. In the **Search in** drop-down list, choose where to perform the search for a string: in **Both the header or body**, **Body**, or **Headers** of the HTTP request. The search is limited to the first five kilobytes of the response.
       2. In the **Regular Expression** field, specify a regular expression that will be used to search for a string in the response content.
       3. In the drop-down list **The content is valid if the regular expression is**, select either **found** or **not found**. If you select **found**, the content is valid if it corresponds to the regular expression you specify. If you select **not found**, the content is valid if it does not correspond to the regular expression you specify.
     - Select **Extract content from the response and compare it to a value** to extract a certain part of the content and compare it to a specific string or integer value. Then do the following:
       
       1. In the **Search in** drop-down list, choose where to perform the search for a string: in **Both the header or body**, **Body**, or **Headers** of the HTTP request. Note that the search is limited to the first five kilobytes.
       2. In the **Regular Expression** field, specify a regular expression for content extraction. The regular expression can contain subexpressions that you may specify in the next step. If you set **1st** as the value for **Check content that is extracted using the &lt;...&gt; subexpression**, the format of the **Regular Expression** must be `expression(sub_expression1)`. The number of subexpressions must be same as or can be more than the value you specify for **Check content that is extracted using the &lt;...&gt; subexpression**. For example, the format must be `expression(sub_expression1)(sub_expression2)`when the **Check content that is extracted using the &lt;...&gt; subexpression** is set to **2nd**, which means that there must be at least two subexpressions.
       3. Select **Check all extracted content** to or select **Check content that is extracted using the &lt;...&gt; subexpression** and choose a number of the subexpression from the drop-down list. You can choose from the first to the eighth subexpression previously defined in the **Regular Expression** field.
       4. In the field **The extracted content is valid if it is a**, select the expected data type of the extracted content, **string** or **integer**, and select a comparison operator. Then specify a value in the text field.
6. Click **Next** to add extensible attributes. For information, see [*Using Extensible Attributes*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280274215).
7. To schedule the change, click **Next** or **ScheduleforLater**. In the *ScheduleChange* panel, click **Now** to immediately execute this task. Or, click **Later** to schedule this task, and then specify a date, time, and time zone.
8. Save the configuration.
