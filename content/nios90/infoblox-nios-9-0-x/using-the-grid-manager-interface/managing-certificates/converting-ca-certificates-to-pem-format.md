---
title: "Converting CA Certificates to PEM Format"
source: "/space/nios90/1320356317"
pageId: "1320356317"
---
NIOS can only upload certificates that are in PEM format. PEM files are Base64 encoded ASCII files. You can use OpenSSL to convert other certificate formats, such as P7B and DER, into PEM format.  
You can run OpenSSL on Linux and Windows systems. For Linux, OpenSSL is pre-installed. For Windows, you can manually install an OpenSSL for Windows. For information about OpenSSL, visit its web site at [http://www.openssl.org/](http://www.openssl.org/) .  
To convert a P7B file to PEM format using OpenSSL:

1. Download and unzip the CA certificate file in P7B format.
2. Navigate to the directory where you unzip the CA certificate file.
3. Identify the PKCS7 directory.
4. Use the following OpenSSL command to convert the P7B file to PEM format:  
   `$ openssl pkcs7 -in xxxx.p7b -print_certs -out yyyy.pem`  
   where xxxx is the name of the P7B file and yyyy is the name of the converted PEM file.

To convert a DER file to PEM format using OpenSSL:

1. Download and unzip the CA certificate file in DER format.
2. Navigate to the directory where you unzip the CA certificate file.
3. Use the following OpenSSL command to convert the DER file to PEM format:  
   `$ openssl x509 -inform DER -outform PEM -in xxxx.cer -out yyyy.pem`  
   where xxxx is the name of the DER file and yyyy is the name of the converted PEM file.
