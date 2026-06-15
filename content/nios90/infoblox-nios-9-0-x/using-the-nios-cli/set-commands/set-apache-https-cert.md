---
title: "set apache_https_cert"
source: "/space/nios90/280659117"
pageId: "280659117"
---
Use the **set apache_https_cert**** **command to select one of the previously uploaded HTTPS certificates. NIOS displays the current certificate and all the previously uploaded certificates. You must choose the certificate that you want to use. The current certificate is then replaced with the certificate that you choose.

# Syntax

`set apache_https_cert`

# Example

`Infoblox &gt; set apache_https_cert`  
`Current apache certificate:`  
`    Serial: 7976560e71f701e1a7ee7865fe87d5a4`  
`    Common name: ib-10-34-128-114.infoblox.com`  
`Available certificates:`  
`    1. Serial: 0c8af1b24b1f58bb3d0d05e159841656 , Common name: www.infoblox.com`  
`    2. Serial: 4a73ac27c92a3f731696c1ec0874143d , Common name: ib-10-34-128-114.infoblox.com`  
`    3. Serial: 26a52734a316c30d43e30b66a6782b18 , Common name: ib-10-34-128-114.infoblox.com`  
`    4. Serial: 0720ccf94062234db372dd4c8df39dbb , Common name: ib-10-34-128-114.infoblox.com`  
`    5. Serial: 6bb99aedde38bfe1e1402aa19507a0e1 , Common name: ib-10-34-128-114.infoblox.com`  
`    6. Serial: 1dc7624dd221e1900aae0e1eec97fb59 , Common name: ib-10-34-128-114.infoblox.com`  
`    7. Serial: 7976560e71f701e1a7ee7865fe87d5a4 , Common name: ib-10-34-128-114.infoblox.com`  
  
`Select certificate (1-7) or q to quit: 2`  
`Are you sure you want to do this? (y or n): y`  
`Certificate updated`
