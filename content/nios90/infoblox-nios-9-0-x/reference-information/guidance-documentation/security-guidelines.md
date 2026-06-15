---
title: "Security Guidelines"
source: "/space/nios90/280856798"
pageId: "280856798"
---
Following are security assumptions to ensure that the TOE is administered in a secure manner after it is delivered:

- The environment ensures the physical security of the TOE, commensurate with its value and the value of the data that it contains.
- Administrators are non-hostile, properly trained and trusted to apply all administrator guidance.
- Administrators will take appropriate measures to prevent unauthorized individuals from accessing the TOE.

# Installation and Configuration

To ensure the security of the installation and configuration of the TOE:

- Administrators must install the appliance according to the procedures in the installation guides.
- The TOE contains an option for upgrading the system. This is available only for security administrators. The security administrator will be able to upgrade to a validated release package only. The security administrator can verify the TOE by the version number included in the file name as well as through the administrative interface before and after the upgrade.  
  When upgrading, ensure that the .bin2 file is uploaded, and not the .bin file. Refer to the Release Notes of the NIOS version to which the TOE is upgrading for additional upgrade instructions.
- Users' access to the TOE is controlled by security mechanisms and unauthorized users are denied access to the TOE. For more information, see [*Administration*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686901186).
- The TOE provides external authentication mechanisms for remote users using SSL with Active Directory. For more information, see [*Authenticating Admins Using Active Directory*](https://infoblox-docs.atlassian.net/wiki/spaces/NOIS91xDRAFT/pages/1686799777).
