---
title: "Defining Block (No Such Domain) Rules for Client IP Addresses or Networks"
source: "/space/nios90/1321174787"
pageId: "1321174787"
---
To define block rules for client IP addresses or networks:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Block** **(No** **Such** **Domain)** **Rule** -> **Block** **Client** **IP** **Address** **(No** **Such** **Domain)** **Rule**.   
   or   
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Block** **(No** **Such** **Domain)** **Rule** -> **Block** **Client** **IP** **Address** **(No** **Such** **Domain)** **Rule**.
2. The following fields are displayed in the *Add* *a* *Block* *Client* *IP* *Address* *(No* *Such* *Domain)* *Rule* wizard:
   
   - **Client** **IP** **Address** **or** **Network**: Enter the client IP address or specify the client address in CIDR format which you want to block. Click **Select** **Zone** to select a different zone.
   - **DNS** **View:** Displays the DNS view to which the selected RPZ belongs.
   - **Policy**: Displays the selected policy.
   - **Comment**: Optionally, enter additional information.
   - **Disable**: Clear the checkbox to enable the block rule. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
