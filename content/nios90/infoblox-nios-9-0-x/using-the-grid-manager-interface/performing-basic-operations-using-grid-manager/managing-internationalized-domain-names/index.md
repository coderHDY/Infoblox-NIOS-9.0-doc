---
title: "Managing Internationalized Domain Names"
source: "/space/nios90/280661204"
pageId: "280661204"
---
The Infoblox Grid supports IDNs (Internationalized Domain Names) for DNS zones and resource records to provide the flexibility of specifying domain names in non-English characters.  
An IDN is a domain name that contains a language-specific script or alphabet, such as Arabic, Chinese, Russian, Devanagari, or the Latin alphabet-based characters with diacritics, such as French. IDNs are encoded in multi-byte Unicode and are decoded into ASCII strings using a standardized mechanism known as Punycode transcription. For example, DNS Zone 'инфоблокс.рф' (IDN in Russian) can be written as ‘xn--90anhdigczv.xn--p1ai’ in the punycode representation. In addition, the appliance has a built-in conversion tool to assist you in identifying and troubleshooting an IDN or the punycode representation of an IDN. For information about how to decode IDNs, see [*Decoding IDNs and Encoding Punycode*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/managing-internationalized-domain-names/decoding-idns-and-encoding-punycode). The appliance supports IDNs in certain fields. There are certain guidelines and limitations about IDN support.

In this section:

*[children]*
