---
title: "Support for RRL (Response Rate Limiting)"
source: "/space/nios90/280763562"
pageId: "280763562"
---
RRL provides the ability to control excessive UDP responses that are identical or almost identical. For more information about how RRL works, refer to the *BIND* *Administrators* *Reference* *Manual* at [*http://www.isc.org/downloads/bind/doc/*](http://www.isc.org/downloads/bind/doc/).  
You can configure parameters for this feature through the following CLI commands: `set dns_rrl` and `show dns_rrl`. For more information about these commands, refer to the Infoblox CLI Guide.  
You can also log RRL events to the syslog. To enable RRL logging, select **rate-limit** in the **Logging** **Category** when you configure logging for the Grid or member. For more information about how to select logging categories, see [*Setting DNS Logging Categories*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1381139017).
