---
title: "About Monitoring with SNMP"
source: "/space/nios90/1412006313"
pageId: "1412006313"
---
Infoblox MIBs (IB-TRAP-MIB, IB-PLATFORMONE-MIB) are updated to include a notification for BFD process failure (ibBFDSoftwareFailure). By default, SNMP notifications are enabled for the BFD process failure event. You can enable or disable SNMP and email notifications for specific event types, by selecting the corresponding checkboxes in the **Notification** tab of the *Grid* *Properties* or *Member* *Properties* editor.

*Grid* *Properties* *Editor*

In addition, the BFD process can generate SNMP traps for session state changes according to the standard BFD MIBs described in *RFC* *7330* and *RFC* *7331*:

- .1.3.6.1.2.1.222.0.1 (bfdSessUp): This notification (aka trap) is sent when one of the neighbors changes the BFD-session state as 'Up.'
- .1.3.6.1.2.1.222.0.2 (bfdSessDown): This notification (aka trap) is sent when one of the neighbors changes the BFD-session state as 'Down' or 'AdminDown.'
- .1.3.6.1.2.1.222.1.2.1.13 (bfdSessDiag): The diagnostic code which can be one of the following:
  
  - noDiagnostic (0)
  - controlDetectionTimeExpired (1)
  - echoFunctionFailed (2)
  - neighborSignaledSessionDown (3)
  - forwardingPlaneReset (4)
  - pathDown (5)
  - concatenatedPathDown (6)
  - administrativelyDown (7)
  - reverseConcatenatedPathDown (8)
  - misConnectivityDefect (9)

Note that you must download the following MIBs to enable the trap-receiver to parse the notifications:

- BFD-STD-MIB
- BFD-TC-STD-MIB
- DIFFSERV-MIB
- DIFFSERV-DSCP-TC
- INTEGRATED-SERVICES-MIB
- IANA-BFD-TC-STD-MIB
