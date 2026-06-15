---
title: "Adding Passthru Rules for Client IP Addresses or Networks"
source: "/space/nios90/1321109032"
pageId: "1321109032"
---
You can define a passthru rule for a client IP address or network, if you do not want to modify the response to a query from a specific client IP address or network and forward the actual response to the client.  
To define passthru rules for the client IP addresses or networks:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, select *DNS_View* -> *Zone,* and then click **Add** -> select **Rule **-> Select** Passthru** **Rule** -> **Passthru** **Client** **IP** **Address** **Rule**.  
   or  
   From the **Data** **Management** tab, select the **DNS** tab -> **Response** **Policy** **Zones** tab, and then select a zone. Expand the Toolbar, click **Add** -> select **Rule** ->** **select **Passthru** **Rule** -> **Passthru** **Client** **IP** **Address** **Rule**.
2. The following fields are displayed in the *Add* *a* *Passthru* *Client* *IP* *Address* *Rule* wizard:
   
   - **Client** **IP** **Address** **or** **Network**: Enter the client IP address or specify the client address in CIDR format for which you want to define the passthru rule. Click **Select** **Zone** to select a different zone.
   - **DNS** **View:** Displays the DNS view to which the selected RPZ belongs.
   - **Policy**: Displays the selected policy.
   - **Comment**: Optionally, enter additional information.
   - **Disable**: Clear the checkbox to enable the passthru rule. Select the checkbox to disable it.
3. Click **Next** to define extensible attributes.
4. Save the configuration.
