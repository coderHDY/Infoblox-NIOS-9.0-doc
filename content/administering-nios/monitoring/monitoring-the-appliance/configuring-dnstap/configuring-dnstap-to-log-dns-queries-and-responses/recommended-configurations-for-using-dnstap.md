---
title: "Recommended Configurations for Using dnstap"
source: "/space/nios90/1432748261"
pageId: "1432748261"
---
The dnstap will either support violations over TLS or a DNS query/response at a time.

Infoblox recommends the configurations in the following table to meet high-performance query logging using the dnstap log format:

| **Feature** | **Total CPU** | **Total Virtual Memory **   **(without DNS Infrastructure Protection software)** | **Total Virtual Memory**   **(with DNS Infrastructure Protection software)** | **Database Object Count ** | **Grid Master Capable** |
| --- | --- | --- | --- | --- | --- |
| Small recursive DNS (with acceleration) | 10 | 16 | 24 | 100,000 | No |
| Medium recursive DNS (with acceleration) | 16 | 24 | 32 | 100,000 | No |
| Large recursive DNS (with acceleration) | 26 | 34 | 42 | 100,000 | No |
