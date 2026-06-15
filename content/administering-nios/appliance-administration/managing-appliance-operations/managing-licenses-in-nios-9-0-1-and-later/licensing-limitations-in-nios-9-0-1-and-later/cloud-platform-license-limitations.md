---
title: "Cloud Platform License Limitations"
source: "/space/nios90/1446871497"
pageId: "1446871497"
---
- The license can be applied only on a Grid member but not on a Grid Master, a Grid Master Candidate, or a standalone appliance.
- The license cannot be applied on a member that has Network Insight or Reporting license installed.
- The license is independent of Cloud Network Automation license.
- The license is supported on a Trinzic X6 series hardware and software models (VM) but not on X5 series hardware and VM.
- If you need to delete a Grid member that has a Cloud Platform license installed, you must first delete the Cloud Platform license and then delete the member.
- The license can be installed on a Grid Master through cloud-init, However, Infoblox recommends that you set it as a Grid member before joining it to the Grid.
- A vNIOS member that has a Cloud Platform license installed, is not allowed to join a Grid if it is being configured as a Grid Master or a Grid Master Candidate.
- If a Grid member that has the Cloud Platform license installed is disassociated from its Grid Master by running the `set nogrid` command, you must retain it as a Grid member because the Cloud Platform license is not supported on a Grid Master or a standalone appliance.
