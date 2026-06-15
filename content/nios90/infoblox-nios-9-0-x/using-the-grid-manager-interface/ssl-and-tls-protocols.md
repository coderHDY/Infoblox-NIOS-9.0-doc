---
title: "SSL and TLS Protocols"
source: "/space/nios90/280266998"
pageId: "280266998"
---
When you log in to the NIOS appliance, your computer makes an HTTPS (Hypertext Transfer Protocol over Secure Sockets Layer protocol) connection to the NIOS appliance. HTTPS is the secure version of HTTP, the client-server protocol used to send and receive communications throughout the Web. HTTPS uses SSL (Secure Sockets Layer) and/or TLS (Transport Layer Security) protocols to secure the connection between a client and server. SSL/TLS provides server authentication and encryption.

The NIOS appliance supports TLS versions 1.0, 1.1, 1.2 and 1.3. TLS version 1.3 is supported in NIOS 9.0.4 and later versions.

TLS provides cipher suites that are used to negotiate the security settings for the secure connection. Infoblox has provided a few CLI commands so you can enable and disable specific cipher suites. For detailed information see [set ssl_tls_ciphers](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-ssl-tls-ciphers) to enable or disable the SSL/TLS ciphers only for Apache and SAML services and [show ssl_tls_ciphers](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-ssl-tls-ciphers) to display the the SSL/TLS ciphers that are enabled for your NIOS appliance.

The following tables list the TLS suite name and the corresponding OpenSSL suite name, SSHd cipher name, and SSHd MAC name:

*TLS* *cipher* *suites*

| **TLS** **Suite** **Name** | **Open** **SSL** **Suite** **Name** |
| --- | --- |
| **Supported cipher suites for TLS versions earlier than 1.3 ** |
| TLS_DHE_RSA_WITH_AES_256_CBC_SHA | DHE-RSA-AES256-SHA |
| TLS_DHE_DSS_WITH_AES_256_CBC_SHA | DHE-DSS-AES256-SHA |
| TLS_RSA_WITH_AES_256_CBC_SHA | AES256-SHA |
| TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA | EDH-RSA-DES-CBC3-SHA |
| TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA | EDH-DSS-DES-CBC3-SHA |
| TLS_RSA_WITH_3DES_EDE_CBC_SHA | DES-CBC3-SHA |
| TLS_DHE_DSS_WITH_AES_128_CBC_SHA | DHE-DSS-AES128-SHA |
| TLS_DHE_DSS_WITH_AES_128_CBC_SHA | DHE-DSS-AES128-SHA |
| TLS_RSA_WITH_AES_128_CBC_SHA | AES128-SHA |
| TLS_RSA_WITH_RC4_128_SHA | RC4-SHA |
| TLS_DHE_DSS_WITH_AES_256_GCM_SHA384 | DHE-DSS-AES256-GCM-SHA384 |
| TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 | DHE-DSS-AES256-GCM-SHA384 |
| TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 | DHE-RSA-AES256-SHA256 |
| TLS_DHE_DSS_WITH_AES_256_CBC_SHA256 | DHE-DSS-AES256-SHA256 |
| TLS_RSA_WITH_AES_256_GCM_SHA384 | AES256-GCM-SHA384 |
| TLS_DHE_DSS_WITH_AES_128_GCM_SHA256 | DHE-DSS-AES128-GCM-SHA256 |
| TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 | DHE-RSA-AES128-GCM-SHA256 |
| TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 | DHE-RSA-AES128-SHA256 |
| TLS_DHE_DSS_WITH_AES_128_CBC_SHA256 | DHE-DSS-AES128-SHA256 |
| TLS_RSA_WITH_AES_128_GCM_SHA256 | AES128-GCM-SHA256 |
| TLS_RSA_WITH_AES_128_CBC_SHA256 | AES128-SHA256 |
| **TLS version 1.3 cipher suites supported from NIOS 9.0.4 onwards** |
| TLS_AES_256_GCM_SHA384 |  |
| TLS_CHACHA20_POLY1305_SHA256 |  |
| TLS_AES_128_GCM_SHA256 |  |
| TLS_AES_128_CCM_8_SHA256 |  |
| TLS_AES_128_CCM_SHA256 |  |

The following table lists the supported SSHd ciphers and the SSHd MACs.

| **SSHd  Cipher** | **SSHd MACs** |
| --- | --- |
| aes256-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| aes256-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| aes256-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| 3des-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| 3des-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| 3des-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| aes128-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| aes128-cbc | hmac-sha1, hmac-sha1-etm@openssh.com |
| aes128-cbc | hmac-sha1,    hmac-sha1-etm@openssh.com |
| arcfour128 | hmac-sha1,    hmac-sha1-etm@openssh.com |
| aes256-gcm@openssh.com | hmac-sha2-512,     hmac-sha2-512-etm@openssh.com |
| aes256-gcm@openssh.com | hmac-sha2-512,    hmac-sha2-512-etm@openssh.com |
| aes256-cbc | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes256-cbc | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes256-gcm@openssh.com | hmac-sha2-512,    hmac-sha2-512-etm@openssh.com |
| aes128-gcm@openssh.com | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes128-gcm@openssh.com | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes128-cbc | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes128-cbc | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |
| aes128-gcm@openssh.com | hmac-sha2-256, hmac-sha2-256-etm@openssh.com |
| aes128-cbc | hmac-sha2-256,    hmac-sha2-256-etm@openssh.com |

When a client first connects to a server, it starts a series of message exchanges, called the SSL/TLS handshake. During this exchange, the server authenticates itself to the client by sending its server certificate. A certificate is an electronic form that verifies the identity and public key of the subject of the certificate. (In SSL/TLS, the subject of the certificate is the server.) Certificates are typically issued and digitally signed by a trusted third party, the Certificate Authority (CA). A certificate contains the following information: the dates it is valid, the issuing CA, the server name, and the public key of the server. For information about certificates, see [*Managing*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates)[ ](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates)[*Certificates*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/managing-certificates).  
A server generates two distinct but related keys: a public key and a private key. During the SSL/TLS handshake, the server sends its public key to the client. Once the client validates the certificate, it encrypts a random value with the public key and sends it to the server. The server decrypts the random value with its private key.  
The server and the client use the random value to generate the master secret, which they in turn use to generate symmetric keys. The client and server end the handshake when they exchange messages indicating that they are using the symmetric keys to encrypt further communications.   
  
*SSL/TLS* *Handshake*

*[drawio]*

To avoid possible attacks in which HTTP or HTTPS connections are made to a web server and stay open much longer than they should be, Infoblox provides the `set connection_limit` and `show connection_limit` CLI commands that you can use to mitigate these attacks. In general, these attacks can result in the web server reaching its maximum number of concurrent connections, and thus denying connections from legitimate sources. You can use the CLI commands to limit the number of concurrent HTTP and HTTPS connections from a given client that corresponds to a particular IP address. For information about the CLI commands and how to use them, see [*Using the NIOS CLI*](/nios90/infoblox-nios-9-0-x/using-the-nios-cli)*.*
