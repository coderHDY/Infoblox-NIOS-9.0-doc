---
title: "show federation_api_timeout_retry_values"
source: "/space/nios90/1453817905"
pageId: "1453817905"
---
The `show federation_api_timeout_retry_values`CLI command displays Federation connection timers.

# Syntax

`show federation_api_timeout_retry_values `

# Example

`Infoblox &gt; show federation_api_timeout_retry_values`

The timers for the Federation API connection have not been set,the default values are being used.

| **Service** | **Connection timeout** | **Response timeout** | **Retries** |
| --- | --- | --- | --- |
| opa | 6 | 6 | 3 |
| fed | 8 | 8 | 2 |
