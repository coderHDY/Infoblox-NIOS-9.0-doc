---
title: "Configuring Emergency KSK Rollover"
source: "/space/nios90/1455030384"
pageId: "1455030384"
---
The appliance supports emergency rollover that can be used when the keys are compromised. In an emergency operation, you must delete the compromised key and the associated compromised data from the zone. The ability to perform emergency rollovers enable administrators to react quickly when a zone is compromised. To initiate an emergency rollover, you must first perform a manual rollover. For information about rolling over a KSK manually, see Rolling Key-Signing Keys below. After the rollover, you must delete the compromised key. For information about deleting the compromised key, see Deleting Server Keys below.  
An emergency KSK rollover involves the following:

- The administrator of the compromised zone, which is hosted on the Infoblox appliance, must initiate the emergency KSK rollover and later export the corresponding DS record.
- The administrator of the parent zone, which is hosted on an external server, must import the DS record of the child zone. This is required to maintain the chain of trust.

During this emergency procedure, the chain of trust is temporarily broken. As stated in RFC 6781, the effect depends on the order of the operations:

- You must perform the KSK rollover first. The chain of trust is broken until the administrator of the parent zone replaces the DS record. In the meantime, the zone appears bogus to a validating client.
- You must remove the compromised DS record first. The chain of trust is broken until the NIOS administrator performs the KSK rollover, communicates the new DS record to the administrator of the parent zone who then adds it. In the meantime, the zone appears insecure to validating resolvers.
