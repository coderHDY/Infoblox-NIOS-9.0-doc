---
title: "show ssl_tls_ciphers"
source: "/space/nios90/415531149"
pageId: "415531149"
---
The `show ssl_tls_ciphers` command shows the SSL/TLS ciphers that are enabled for the NIOS appliance. You can use the set ssl_tls_ciphers command to enable or disable the cipher suites. For information, see [*set ssl_tls_ciphers*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ssl-tls-ciphers).

# Syntax

`show ssl_tls_ciphers`

This command has no arguments.

# Example

`Infoblox &gt; show ssl_tls_ciphers `

1. `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256   enabled `
2. `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384   enabled `
3. `TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA      enabled `
4. `TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA      enabled `
5. `TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256   enabled `
6. `TLS_DHE_RSA_WITH_AES_128_GCM_SHA256     enabled `
7. `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384     enabled `
8. `TLS_DHE_RSA_WITH_AES_128_CBC_SHA        enabled `
9. `TLS_DHE_RSA_WITH_AES_256_CBC_SHA        enabled `
10. `TLS_DHE_RSA_WITH_AES_128_CBC_SHA256     enabled `
11. `TLS_DHE_RSA_WITH_AES_256_CBC_SHA256     enabled `
12. `TLS_RSA_WITH_AES_128_GCM_SHA256         enabled `
13. `TLS_RSA_WITH_AES_128_CBC_SHA            enabled `
14. `TLS_RSA_WITH_AES_128_CBC_SHA256         enabled `
15. `TLS_RSA_WITH_3DES_EDE_CBC_SHA           enabled `
16. `TLS_RSA_WITH_AES_256_GCM_SHA384         enabled `
17. `TLS_RSA_WITH_AES_256_CBC_SHA            enabled `
18. `TLS_RSA_WITH_AES_256_CBC_SHA256         enabled `
19. `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 enabled `
20. `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 enabled `
21. `TLS_AES_256_GCM_SHA384                  enabled `
22. `TLS_CHACHA20_POLY1305_SHA256            enabled `
23. `TLS_AES_128_GCM_SHA256                  enabled `
24. `TLS_AES_128_CCM_8_SHA256                enabled `
25. `TLS_AES_128_CCM_SHA256                  enabled`  
   `TLS_DHE_DSS_WITH_AES_256_CBC_SHA        disabled`  
   `TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA        disabled`  
   `TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA        disabled`  
   `TLS_DHE_DSS_WITH_AES_128_CBC_SHA        disabled`  
   `TLS_RSA_WITH_RC4_128_SHA                disabled`  
   `TLS_DHE_DSS_WITH_AES_256_GCM_SHA384     disabled`  
   `TLS_DHE_DSS_WITH_AES_256_CBC_SHA256     disabled`  
   `TLS_DHE_DSS_WITH_AES_128_GCM_SHA256     disabled`  
   `TLS_DHE_DSS_WITH_AES_128_CBC_SHA256     disabled`  
   `Infoblox &gt;                `
