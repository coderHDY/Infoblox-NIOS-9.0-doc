---
title: "set vdca_type64_support"
source: "/space/nios90/400785948"
pageId: "400785948"
---
The `set vdca_type64_support` CLI command allows you to enable or disable caching of DNS type 64 records. If DNS type 64 caching is enabled, a response to a DNS type 64 query is cached and the response is returned from virtual DNS Cache Acceleration (vDCA) cache.

> **warning**
>
> **Note**
> 
> - You can execute the `set vdca_type64_support` CLI command only if the virtual DNS Cache Acceleration service is enabled in NIOS.
> - The virtual DNS Cache Acceleration caching for DNS type 64 response is enabled by default when the virtual DNS Cache Acceleration service is running.

# Syntax

`set vdca_type64_support` `[ on | off ]`

| **Argument** | **Description** |
| --- | --- |
| on | Enables caching of DNS type 64 records. |
| off | Disables caching of DNS type 64 records. |

# Example

The following example displays enabling caching for DNS type 64 response and disabling caching for a DNS type 64 response.

## Enabling Caching for DNS type 64 Response

`Infoblox &gt; set vdca_type64_support on`  
`Enabled caching for Type 64 queries`

## Disabling Caching for DNS type 64 Response

`Infoblox &gt; set vdca_type64_support off`  
`Disabled caching for Type 64 queries`
