---
title: "NIOS 9.0.1 - Changes to Default Behavior"
source: "/space/nios90/1323565182"
pageId: "1323565182"
---
- You cannot add a Cloud Platform license to a standalone system, or on a standalone Grid Manager, or on a Grid Master Candidate. You can only add the license if the node is a Grid member and there are no other license conflicts. If you try to add the license to a standalone system, the license is not applied.
- During a normal upgrade, until the entire Grid is upgraded, Infoblox does not recommend that you toggle between the SSL security levels. If you have offline members prior to the upgrade migration, Infoblox recommends that you upgrade the members manually to the current version and then join.
- You cannot downgrade any Trinzic X6 appliances to a NIOS version below 9.0.1.
- You cannot install a NIOS license type from the Grid Manager on Trinzic X6 series hardware appliances. You must use the CLI to install the licenses.
- In the Trinzic X6 series of appliances, you can install the Cloud Network Automation and the Cloud Platform licenses together on a Grid member.
- If you install a Multi-Grid Management license, you have to manually perform a product restart using either the CLI or the Grid Manager to set up Multi-Grid Management.
- When you configure an Trinzic X6 series appliance as TR-5005, repartitioning automatically takes place and a new partition is created for reporting.
- In NIOS 9.0.1, you cannot upload CA certificates that contain the md5WithRSAEncryption and sha1WithRSAEncryption ciphers.
- From NIOS 9.0.1 onwards, fetching threat details using the API displays the “Authorization Failure” error message if the dynamic token fetch fails and error messages are logged in the infoblox.log and syslog files.
- When you enable the threat indicator caching feature, you must configure the credentials to access the Cloud Services Portal for NIOS to interact with the Cloud Services Portal. For more information, see *Configuring Integration with BloxOne Threat Defense Cloud* in the BloxOne Threat Defense online documentation.
- In NIOS 9.0.1, the default image disk size has been changed from 250 GB to 500 GB. For public cloud deployments (such as Microsoft Azure, Google Cloud, and so on), you must provision the minimum disk size as 250 GB if you are using the resizable image.
- In NIOS 9.0.1, discovery is part of the NIOS image. You must install the ND appliance license to be able to use the discovery feature.
- From NIOS 9.0.1 onwards, the value in the **License String** column in the *Verifying License(s)* screen is decoded from the actual license string and not from what you upload in the CSV file or from what you paste as the license type.
- You must first install a NIOS license type before installing any dependent license for the NIOS license type. For example, you must install NIOS license type IB-1526 before installing a Multi-Grid-Management license.
- The sequence of licenses must be maintained for dependent licenses. For example, if you are installing both the Threat Protection (Software add-on) license and the Threat Protection Update license, install them in the order of Threat Protection (Software add-on), Threat Protection Update so that both the licenses are installed in the same session.
- The license type and other data related to licenses are decoded from the license key and displayed when you install the licenses.
- Grid Manager restarts immediately in the background when you install licenses that require UI restarts.
