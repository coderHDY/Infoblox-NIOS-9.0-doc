---
title: "Enabling DNSSEC Validation"
source: "/space/nios90/1502904483"
pageId: "1502904483"
---
To configure trust anchors and enable Infoblox name servers to validate responses:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab. Expand the Toolbar and click **Grid** **DNS** **Properties**.   
   **Member**: From the **Data** **Management** tab, select the **Members** tab -&gt; *member* checkbox and click the Edit icon.   
   **DNS** **View**: From the **Data** **Management** tab, select the **Zones** tab -&gt; *dns_view* checkbox and click the Edit icon. To override an inherited property, click **Override** next to the property to enable the configuration.
2. In the editor, click **Toggle Advanced Mode**.
3. When the additional tabs appear, click **DNSSEC**.
4. In the **DNSSEC** tab, complete the following:
   
   - **Enable** **DNSSEC** **validation**: If you allow the appliance to respond to recursive queries, you can select this checkbox to enable the appliance to validate responses to recursive queries for domains that you specify. You must configure the DNSKEY RR of each domain that you specify.
   - **Accept** **expired** **signatures**: Click this checkbox to enable the appliance to accept responses with signatures that have expired. Though enabling this feature might be necessary to work temporarily with zones that have not had their signatures updated in a timely fashion, note that it could also increase the vulnerability of your network to replay attacks.
   - **Trust Anchors**: Configure the DNSKEY record that holds the KSK as a trust anchor for each zone for which the Grid member returns validated data. Click the Add icon and complete the following:
     
     - **Zone:** Enter the FQDN of the domain for which the member validates responses to recursive queries.
     - **Secure** **Entry** **Point** **(SEP)**: This checkbox is enabled by default to indicate that you are configuring a KSK.
     - **Responses must be secure**: Enable this checkbox to make all responses to domains configured with a trust anchor to be DNSSEC secure and valid. When you enable this checkbox, the appliance returns SERVFAIL responses for the domains that are not DNSSEC secure. Note that for each anchor, the current setting of **Responses must be secure** will be preserved when NIOS is upgraded.
     - **Algorithm**: Select the algorithm of the DNSKEY record: **RSA/SHA1(5)**,** RSA/SHA1/NSEC3 (7)**,** RSA/SHA-256 (8)**,** RSA-SHA-512 (10)**, **ECDSAP/SHA-256 (13)**,** **or** ECDSAP/SHA-384 (14)**. This must be the same algorithm that was used to generate the keys that were used to sign the zones.
     - **Public Key**: Paste the key into this text box. You can use either of the following commands to retrieve the key:
       
       - `dig . dnskey +multiline`  
         The above command retrieves root zone keys and is the only public key you require for full chain of trust validation.
       - `dig \[@server_address\] &lt;zone&gt; dnskey +multiline +dnssec`  
         The above command retrieves public keys from the zone you specify on the server and can be used if the parent zone is not signed.  
         Note that the aforementioned command provides you with a key you need to cross validate against other servers to ensure you have an identical key.  
         As an alternative, you can use [*http://data.iana.org/root-anchors*](http://data.iana.org/root-anchors/)[/](http://data.iana.org/root-anchors/) to retrieve signed public keys. You can find the trust anchors in formats like XML and CSR. For more information, refer to [*http://data.iana.org/root-anchors*](http://data.iana.org/root-anchors/)[/](http://data.iana.org/root-anchors/).
   - **Negative** **Trust** **Anchors**: Configure negative trust anchors to suppress DNSSEC validation for certain domains. Click the Add icon to add the domain name to the list. You can define negative trust anchors at the Grid level and override them at the member and DNS view levels. For more information about negative trust anchors, see Defining Negative Trust Anchors below.  
     To delete a negative trust anchor, select the checkbox adjacent to the **Zone** column and click the Delete icon.

1. Save the configuration and click **Restart** if it appears at the top of the screen.
