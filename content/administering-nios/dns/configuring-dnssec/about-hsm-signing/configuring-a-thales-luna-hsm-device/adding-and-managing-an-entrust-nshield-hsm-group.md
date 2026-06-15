---
title: "Adding and Managing an Entrust nShield HSM Group"
source: "/space/nios90/1502937236"
pageId: "1502937236"
---
On the Entrust nShield HSM, configure the Grid Master and Grid Master Candidate as HSM clients. Enroll the IP addresses of both the Grid Master and Grid Master Candidate to avoid any service interruptions, in case the Grid Master Candidate is promoted to Grid Master. If the Grid Master and Grid Master Candidates are HA pairs, you must enroll their VIPs.

> **warning**
>
> **Note**
> 
> In the unlikely event that the Grid Master Candidate was registered with the Entrust nShield HSM after the Grid Master promotion, you must restart the DNS service on the newly promoted Grid Master.

In addition, you must also set up client cooperation to allow both the Grid Master and Grid Master Candidate access to the Remote File Server (RFS). Note that anytime you add a new Grid Master Candidate, you must enroll its IP address and set up a client cooperation to allow it access to the RFS. For more information on these procedures, refer to your HSM documentation.  
Note that DSA cannot be used as the DNSSEC cryptographic algorithm for Entrust nShield HSMs. Therefore, migrating to Entrust nShield HSMs is not allowed if the Grid Master uses DSA as the DNSSEC cryptographic algorithm.  
You can create one Entrust nShield HSM group in the Grid, and then add HSMs to the group. The appliance tries to connect to each of the HSMs in the order that they are listed.  
To add an Entrust nShield HSM group:

1. From the **Grid** tab, select the **HSM** **Group** tab and click the Add icon.
2. In the **Add** **HSM** **Group** wizard complete the following, and then click **Next**:
   
   - **Name**: Enter a name for the HSM group.
   - **Protection:** Select the level of protection that the HSM group uses for the DNSSEC key data.
     
     - **Module**: Select this if the HSM group uses a module-protected key. You do not have to enter a password phrase for this type of key.
     - **Softcard**: Select this if the HSM group uses a softcard-protected key. You must then specify the card name and password.
   - **Card** **Name**: Enter a name for the softcard.
   - **Password** **Phrase**: Enter the password and re-enter it in the **Confirm** **Password** **Phrase** field.
   - **RFS** **IP** **Addressb** Enter the remote file server (RFS) IP address. Note that you must ensure that you enter a valid RFS IP address for the Security World. Validation is limited to IP address checking. Infoblox recommends that you use **Test** **HSM** **Group** to check the HSM group configuration before proceeding.
   - **RFS** **Port**: Specify the port of the RFS.
   - **Comment**: Optionally, enter additional information about the group.
3. To add modules to the group, click the Add icon and complete the following:
   
   - **Remote** **IP**: Enter the IP address of the HSM.
   - **Remote** **Port**: Specify the destination port on the HSM. The firewall must be configured to allow connection to this port.
   - **Disabled**: Select this checkbox to disable use of this HSM.
   - **Keyhash**: Enter the keyhash, which is displayed on the console of the HSM. It can be obtained through an out of band mechanism from the HSM administrator. Note that the appliance validates the keyhash. If the entry is correct, the appliance displays the Electronic Serial Number (ESN) of the HSM when the editor is next launched. If the keyhash is incorrect, the appliance does not connect to the HSM.
   - **ESN**: This is a read-only field that displays the ESN of the HSM after you save the configuration and relaunch the editor. Infoblox strongly recommends that you verify the ESN displayed by the appliance with the one obtained from the HSM administrator to ensure that the appliance is communicating with the correct HSM.
4. Save the configuration.
