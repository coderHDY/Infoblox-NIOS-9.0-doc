---
title: "Disabling BloxConnect"
source: "/space/nios90/1324220716"
pageId: "1324220716"
---
From NIOS 9.0.6 onwards, BloxConnect is enabled by default. However, you can disable the BloxConnect configuration.

To disable BloxConnect, perform the following steps:

1. Generate an authorization key token by running the `set bloxconnect token` CLI command. The command displays an authorization key token along with a serial number.
2. Log on to the Support Portal and navigate to **My Products**,** **and click the  **Disable Bloxconnect **button. The *Disable Bloxconnect *screen is displayed.
   
   ![Disable BloxConnect screen](/assets/1324220716/69eb94c3-c1c6-40af-bd49-ae0c55c89659.png)
3. The **Customer** field is auto-populated. In the **Grid Master Serial Number** field, enter the serial number that was displayed when you generated the authorization key token in step 1. Alternatively, you can select the serial number by clicking the lens icon and choosing from the drop-down list.
4. In the **Authorization Key Token** field, enter the authorization key token that was generated in step 1.
5. In the **Reason** field, select a reason to disable BloxConnect.
6. In the **Reason** **Details** field, you can enter the details of the reason if required.
7. Click **Generate Key**. The *Disable Bloxconnect* screen displays the key that is generated. The key will expire in 30 days (for NIOS 9.0.7 customers) and 7 days (for NIOS 9.0.6 customers) from the date of the authorization key token generation.
   
   ![disable_bloxconnect.png](/assets/1324220716/2545577a-0162-4ad6-8052-469be90a3b33.png)
8. Run the `set bloxconnect disable &lt;key&gt;` CLI command to disable BloxConnect.
9. Because the status of the BloxConnect configuration (whether enabled or disabled) is not displayed explicitly, run the `show bloxconnect status` CLI command to view the status of the BloxConnect configuration.

> **note**
>
> **Note:**
> 
> - During a Grid Master Candidate promotion, all existing authorization key tokens become invalid. You must generate a new authorization key token after the promotion to Grid Master.
> - Promotion of a Grid Master Candidate to Grid Master does not change BloxConnect status to enabled.
> - If a standalone Grid Master is converted to an HA Grid Master, you must generate a new authorization key token after an HA failover.

# BloxConnect Guidelines in an HA Setup

In an HA environment, once the authorization key generated from the Support Portal has been applied to the Grid, the key is permanently stored in the database and there is no need to generate a new authorization key token after the following events:

- Promotion of a Grid Master Candidate to Grid Master
- Grid Master HA failover
- Conversion of a standalone Grid Master to an HA pair

However, if the authorization key generated from the Support Portal is not applied to the Grid and any of the listed changes occur in the meantime, you must generate a new authorization key.
