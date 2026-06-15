---
title: "show ssl_cert_details"
source: "/space/nios90/1456504850"
pageId: "1456504850"
---
The `show ssl_cert_details`CLI command is used to display the SSL certificate details.

# Syntax

`show ssl_cert_details`

# Example

```
Infoblox > show ssl_cert_deatils
Certificate         : /infoblox/security/certs/ocsp_ca_cert.pem
Subject              : OneThousandYearSelfSignedCACertificate.rchow.infoblox.com
Issuer                : OneThousandYearSelfSignedCACertificate.rchow.infoblox.com
Signed By          : CA Certificate
Valid From         : Mar  1 00:59:06 2012 GMT
Valid Till            : Jul  3 00:59:06 3011 GMT
Signature Algorithm : sha1WithRSAEncryption
Key Length          : 1024

------------------------------------------------------------------

Certificate         : /infoblox/security/certs/one-httpd.crt
Subject              : ib-10-35-1-114.infoblox.com
Issuer                : ib-10-35-1-114.infoblox.com
Signed By          : Self-signed
Valid From         : May 11 19:59:01 2025 GMT
Valid Till            : May 11 19:59:01 2026 GMT
Signature Algorithm : sha256WithRSAEncryption
Key Length         : 2048

------------------------------------------------------------------
```

##
