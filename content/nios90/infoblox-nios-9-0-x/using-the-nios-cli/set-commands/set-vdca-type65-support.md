---
title: "set vdca_type65_support"
source: "/space/nios90/400720591"
pageId: "400720591"
---
The `set vdca_type65_support` CLI command allows you to enable or disable caching of DNS type 65 records. If DNS type 65 caching is enabled, a response to a DNS type 65 query is cached and the response is returned from virtual DNS Cache Acceleration (vDCA) cache.

> **warning**
>
> **Note**
> 
> - You can execute the `set vdca_type65_support` CLI command only if the virtual DNS Cache Acceleration service is enabled in NIOS.
> - The virtual DNS Cache Acceleration caching for DNS type 65 response is enabled by default when the virtual DNS Cache Acceleration service is running.

# Syntax

`set vdca_type65_support` `[ on | off ]`

| **Argument** | **Description** |
| --- | --- |
| on | Enables caching of DNS type 65 response. |
| off | Disables caching of DNS type 65 response. |

# Example

The following example displays enabling caching for DNS type 65 response and disabling caching for a DNS type 65 response.

## Enabling Caching for DNS type 65 Response

`Infoblox &gt; set vdca_type65_support on`  
`Enabled caching for Type 65 queries`

## Disabling Caching for DNS type 65 Response

`Infoblox &gt; set vdca_type65_support off`  
`Disabled caching for Type 65 queries`
