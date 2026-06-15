---
title: "About CA Certificates for Cisco ACI"
source: "/space/nios90/1321174196"
pageId: "1321174196"
---
Grid Manager accepts CA certificates and certificate chains, therefore you can upload both root and intermediate (one-file certificate chain) certificates. Following are recommendations and best practices for having valid Cisco ACI certificates authenticated via Grid Manager.

For a Root CA certificate, complete the following on the Cisco ACI side:

1. Select the Root CA certificate as the default Certificate Authority.
2. Issue a Key Ring certificate request signed by this Certificate Authority. Make sure that the APIC Key Ring certificate is created.
3. In the Cisco ACI GUI, select **Fabric** -&gt; **Fabric Policies** -&gt; **Pod Policies** -&gt; **Policies** -&gt; **Management Access** -&gt; **default**.
4. Make sure that the Admin Key Ring and Oper Key Ring correspond to the one created in step 2.  
   Now you can upload and select the Root CA certificate in Grid Manager.

For an Intermediate CA certificate, complete the following on the Cisco ACI side:

Select the certificate chain as the default Certificate Authority. This certificate chain must include at least one Intermediate and Root CA certificate.

1. Issue a Key Ring certificate request signed by this Certificate Authority. Make sure that the APIC Key Ring certificate is created.
2. In the Cisco ACI GUI, select **Fabric** -&gt; **Fabric Policies** -&gt; **Pod Policies** -&gt; **Policies** -&gt; **Management Access** -&gt; **default**.
3. Make sure that the Admin Key Ring and Oper Key Ring correspond to the one created in step 2.  
   Now you can upload and select the certificate chain in Grid Manager. If you are unable to select the whole chain in the CISCO APIC Configuration tab, choose the Intermediate certificate.

Recommended best practices:

- Make sure that the CA marker is set to "True" in the CA certificate. You can check it in OpenSSL.
- Make sure that the Subject (CN) of the APIC Key Ring certificate is a fully qualified domain name or a distinguished name of the requesting device.  
  When NIOS tries to establish a connection to the APIC using SSL, it compares the APIC hostname value with the value specified in the APIC Key Ring certificate CN (common name). If they do not match, the certificate verification fails. If you want to specify something different than FQDN, for example, an IP address, for the APIC Key Ring certificate CN, include an additional Subject Alternative Name marker in X509v3 extensions:
  
  X509v3 Subject Alternative Name:   
  IP Address:[ip-addr]  
  or  
  X509v3 Subject Alternative Name:   
  DNS:FQDN  
  or both of them  
  X509v3 Subject Alternative Name:   
  DNS:FQDN, IP Address:ip-addr  
  where ip-addr is a valid IP address of the APIC device, and FQDN is a valid fully qualified domain name.
- Make sure to include the following markers in the APIC Key Ring certificate:
  
  X509v3 extensions:  
  X509v3 Basic Constraints:   
  CA:FALSE  
  Netscape Cert Type:   
  SSL Server  
  ...  
  X509v3 Key Usage: critical  
  Digital Signature, Key Encipherment  
  X509v3 Extended Key Usage:   
  TLS Web Server Authentication
- Certificate date must be valid.
- The time settings in Cisco ACI and NIOS must be valid and accurate.
