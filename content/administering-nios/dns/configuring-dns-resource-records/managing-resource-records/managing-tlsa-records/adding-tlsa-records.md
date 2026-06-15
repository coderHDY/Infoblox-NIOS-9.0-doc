---
title: "Adding TLSA Records"
source: "/space/nios90/1423114395"
pageId: "1423114395"
---
In NIOS 8.5, you can add a TLSA record to a DNSSEC signed zone only. You cannot unsign a zone that contains a TLSA record. In NIOS 8.5.1 or later, you can add a TLSA record to a DNSSEC signed zone or an unsigned zone. To add a TLSA record:

1. From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Add** -> **Record** -> **TLSA** **Record**.
2. In the *Add * *TLSA* * Record* wizard, complete the following fields:
   
   - **Display ** **input ** **as**: Select either **Strict ** **format (_port._protocol.domain)** or **Free ** **format**. Grid Manager selects **Strict ** **format** by default. In this format, you can choose port and protocol values from the list. When you select **Free ** **format**, you cannot specify these values.
   - **Port**: Select a value from the drop-down list to indicate the port on which the TLS-based service is active.  
     The values in the drop-down list are:
     
     - 21 (FTP)
     - 22 (SSH)
     - 23 (Telnet)
     - 25 (SMTP)
     - 80 (HTTP)
     - 88 (Kerberos)
     - 389 (LDAP)
     - 443 (HTTPS)
     - 464 (KPASSWD)
     - 3268 (GC)
   - **Protocol**: Select a value from the drop-down list to indicate the protocol that is used for secure communication. The values in the drop-down list are:
     
     - _msdcs
     - _sites
     - _tcp
     - _udp
       
       When you select **Strict** **format,** **Port** and **Protocol** values are set to **443** **(HTTPS)** and _**tcp**, by default. You can change these values. When you select **Free format**, you cannot edit the mentioned values.
   - **Name**: Enter a name for the TLSA resource record. You can specify a name only when you select **Free ** **format**.
   - **Select ** **Zone**: Click to select a zone. In NIOS 8.5, you must select only a signed zone to associate with a TLSA resource record. In NIOS 8.5.1 or later, you can select a signed zone or an unsigned zone. For more information, see [*Signing a Zone*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/332562696). Click **Clear** to clear the **Name** that you have entered.
   - **FQDN**: This is displayed by default. You cannot modify the value. TLSA resource records are stored using the domain name that you select. When you select **Free** ** format**, *name.domain* is displayed as the FQDN. Example: [abc.example.com](http://abc.example.com). When you select **Strict** **format**, _*port._protocol.domain* is displayed as the FQDN, where:
     
     - _*port* indicates the port on which the TLS-based service is active.
     - _*protocol* indicates the name of the transport protocol that you have selected.
     
     Consider an example where you are the owner of the domain [http://www.example.com](http://www.example.com)  and you have set the **Port** to **443(HTTPS)** and **Protocol** to ** *****tcp***** ** *,* which indicates that the HTTP server is running TLS on port 443. To request TLSA record for [http://www.example.com](http://www.example.com) , you must use* __443._tcp.* [http://www.example.com](http://www.example.com) *.* Similarly, to request a TLSA resource record for an SMTP server running the STARTTLS protocol on port 25 at [mail.example.com](http://mail.example.com), you must use _*25._tcp.mail.example.com*.
   - **DNS** ** View**: The DNS View associated with the selected DNS zone is displayed.
   - **Certificate** ** Usage**: Select a value from the drop-down list to indicate how the certificate or the public key associated with the domain name is matched when the client queries for the domain name on the TLS server. The values in the drop-down list are: **PKIX-TA**, **PKIX-EE**, **DANE-TA**, and **DANE-EE**.
     
     - With **PKIX-TA** and **PKIX-EE**, you need additional Trust Anchors to validate peer certificate chains. These Trust Anchors must be mutually trusted by both the TLS server and the client. For more information, refer to *RFC* *6698 * *The * *DNS-Based * *Authentication* * of* * Named * *Entities* *(DANE)* *Transport * *Layer * *Security * *(TLS)* * Protocol: * *TLSA.*
     - When you select **DANE-TA** and **DANE-EE**, the TLSA records that you define using Grid Manager are sufficient to verify the client's certificate chain and additional Trust Anchors are not required to authenticate the public key or certificate data. For more information, refer to *RFC* *6698* *The* *DNS-Based * *Authentication * *of* * Named* * Entities * *(DANE) * *Transport* * Layer * *Security * *(TLS)* * Protocol:* * TLSA.*
   - **Selector**: Select a value from the drop-down list to indicate whether you are associating an entire certificate or only the public key with the domain. When you select a value, it indicates which part of the TLS certificate presented by the server is matched with the associated data. The values in the drop-down list are **Full** ** certificate** and **Subject** ** Public** ** Key** ** Info**. NIOS builds a hexadecimal format for the entire certificate when you select **Full** ** certificate**. If you select **Subject ** **Public** ** Key ** **Info**, NIOS extracts the public key and builds a hexadecimal format for it.
   - **Matched ** **Type**: Select a value from the drop-down list to indicate how a TLS certificate or the public key of the domain received from the client must be matched with the certificate or the key that you have specified for the respective domain in the TLS server. You can select to match the entire content or only the hash of the selector. The values in the drop-down list are: **No ** **hash**, **SHA** **256** **bit**, and **SHA** **512** **bit.** If you select **No ** **hash**, the TLS server performs an exact match on the selected content. When you select either **SHA** **256** **bit** or **SHA** **512** **bit**, only the hash of the selected content is matched by the TLS server.
   - **Certificate** **Data**: Enter the certificate data that must be matched for authentication. You can either paste the full certificate or the corresponding public key when the **Matched** **Type** is set to **No** **hash**. Based on the values that you select for the **Selector** and the **Matched** **Type**, the server builds a hexadecimal format for the TLSA record. If you set the **Matched** **Type** to **SHA** **256** **bit** or **SHA** **512** **bit**, you must specify only the hash of the full certificate or the public key.
   - **Get** ** From ** **File**: Click this to upload the certificate or the public key to the server.  
     Note the following:
     
     - When you select **Strict ** **format**, you must provide either the certificate or public key or hash of any of them. The value must be based on the **Selector** and **Matched** ** Type** field values.
     - When you select **Free** **format,** you must upload the certificate in DER format. The server builds an appropriate hexadecimal format for the TLSA record based on the **Selector** value.
   - **Comment**: Optionally, enter a descriptive comment for the TLSA record.
   - **Disable:** Clear the checkbox to enable the record. Select the checkbox to disable it.

You can also perform the following steps:

- Use **Global** **Search** to search for TLSA records. For information, see [*Global Search*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569).
- Use **Copy** **Records** to copy TLSA records between DNS zones. For information, see [*Copying Zone Records*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280665456)*.*
- Define global permission for **All** **TLSA** **records** with read-only, read/write or deny access. You can also define object level permission for TLSA records. For information, see [*Defining Global Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424) and [*Defining Object Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424)*.*
- Import and export records in CSV format. For information, see* *[*Importing and Exporting Data using CSV Import*](https://infoblox-docs.atlassian.net/wiki/pages/createpage.action?spaceKey=nios90&title=Importing%20and%20Exporting%20Data%20using%20%20CSV%20Import&linkCreation=true&fromPageId=1423114395).
- View audit log entries for the TLSA record. For information, see [*Viewing the Audit Log*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403049).
