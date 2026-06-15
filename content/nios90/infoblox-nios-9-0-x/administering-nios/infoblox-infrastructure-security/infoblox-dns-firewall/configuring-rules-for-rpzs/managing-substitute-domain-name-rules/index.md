---
title: "Managing Substitute (Domain Name) Rules"
source: "/space/nios90/1321174699"
pageId: "1321174699"
---
You can define an alternate IP address or a domain name to redirect a domain name or an IP address, which is malicious or unauthorized. When the response to the client query matches an RPZ rule, the actual domain name or IP address is substituted with the alternative domain name or IP address. The client will receive the substituted value instead of the actual response.

> **warning**
>
> ### Note
> 
> The domain name and substitute name for which you want to define a substitute rule are not case-sensitive.  
> For example, if a domain name is "[corpxyz.com](http://corpxyz.com)" and you want to substitute it with "[corpxyz.com](http://corpxyz.com)" or "[corpxyz.com](http://corpxyz.com)," the substitute rule you define becomes a passthru rule because no substitution will occur since "[corpxyz.com](http://corpxyz.com)" is the same as "[corpxyz.com](http://corpxyz.com)" and "[corpxyz.com](http://corpxyz.com)." Grid Manager displays such substitute rule as a passthru rule.

*[children]*
