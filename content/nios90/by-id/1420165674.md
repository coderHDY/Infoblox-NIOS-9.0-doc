---
title: "Configuration Requirements if Parental Control is Enabled"
source: "/space/nios90/1420165674"
pageId: "1420165674"
---
NIOS appliances require additional memory if you intend to run DNS over TLS and/or DNS over HTTPS along with the Parental Control features such as proxy RPZ passthru, DCA subscriber query count logging, and DCA subscriber allowed and blocked listing simultaneously. The following table lists the base configuration required on IB-FLEX appliances for configuring these features simultaneously:

| **IB-FLEX Flavor Configuration** | **Total CPU** | **Total System Memory in GB (With virtual DNS Cache Acceleration only)** | **Total System Memory in GB (With virtual DNS Cache Acceleration and DNS Infrastructure Protection Software)** | **Grid Master Capable** |
| --- | --- | --- | --- | --- |
| Medium   recursive DNS (with acceleration) | 16 | 64 | 64 | No |
| Medium-Large   recursive DNS (with acceleration) | 16 | 86 | 86 | No |
| Large   recursive DNS (with acceleration) | 26 | 100 | 100 | No |



> **warning**
>
> **Note**
> 
> - When a NIOS appliance does not have the required base memory configuration, if you try to enable and run DNS over TLS, DNS over HTTPS, and Parental Control features simultaneously, all of these features will be disabled.
> - For information about CPU and memory requirements of NIOS appliance models other than IB-FLEX, see the [vNIOS X5 and X6 Series Appliance Specification documentation](https://docs.infoblox.com/space/vniosspec/1334542471/vNIOS+X5+and+X6+Series+Appliance+Specifications).
