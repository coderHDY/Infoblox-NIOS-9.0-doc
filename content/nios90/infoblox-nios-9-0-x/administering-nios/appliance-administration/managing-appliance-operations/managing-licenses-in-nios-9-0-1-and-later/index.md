---
title: "Managing Licenses in NIOS 9.0.1 and Later"
source: "/space/nios90/318670359"
pageId: "318670359"
---
NIOS 9.0.1 and later versions support Trinzic X6 series hardware and software appliances. The base hardware models of the series are: TE-906, TE-1506, TE-1606, TE-2306, and TE-4106. The X6 series hardware appliances support software models of the Trinzic X6 series and some models of the X5 series. For information on the software models supported by a base model, refer to the respective hardware installation guide available in the [*Infoblox Documentation*](https://docs.infoblox.com)* *portal or the latest *Infoblox NIOS Release Notes* available in the Infoblox Support portal.

For services and features to function properly in an Infoblox Grid, valid licenses must be installed on the appliances. A Trinzic X6 series hardware appliance ships with no licenses installed. You can install a set of temporary licenses to use the features and functionality for the interim, while you wait for your subscription licenses to arrive. The temporary licenses are valid for 60-days. Contact the Infoblox Support to obtain the subscription licenses and then run the `set license` command to install the licenses.

NIOS allows you to install multiple licenses at a time, either from Grid Manager or the CLI. After installing the licenses, you can monitor them from Grid Manager. Licenses are listed on the **Infoblox** **Grid** tab -&gt; **Licenses** tab. Grid Manager also displays the number of licenses that have expired and those that will expire within the next 30 and 90 days respectively.

To enable the cloud platform feature on a Trinzic X6 series appliances, you must install the Cloud Platform feature license. All X6 series appliances support the Cloud Platform feature. Unlike the Trinzic X5 series, the X6 series does not have CP appliance models.

The impact of NIOS 9.0.1 and later versions on licensing is as follows:

- If you install new feature licenses on an appliance, NIOS compares the new licenses with the existing ones and returns the validity of the new licenses. When you save the result, all valid licenses are installed.
- If you replace a Trinzic X5 series appliance with an X6 series appliance, you can transfer active licenses from the X5 to X6 series appliance after obtaining new license-keys for the X6 series appliance. Active perpetual licenses will be applied as subscription licenses as perpetual licenses are not offered from NIOS 9.0.1 onwards.
- For VMs, reprovision VM resources according to the X6 series hardware model you chose.

For details on the types of Infoblox license and instructions to obtain and manage them, see the following topics:

*[children]*
