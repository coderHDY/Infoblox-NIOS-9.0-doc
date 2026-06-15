---
title: "Validating the IF-MAP Server Certificate"
source: "/space/nios90/1462337892"
pageId: "1462337892"
---
You can configure the IF-MAP client to validate the IF-MAP server certificate before the client establishes a connection or performs IF-MAP transactions. To validate an IF-MAP server certificate, you must first import the certificate of the CA that signs the IF-MAP server certificate.  
To configure the IF-MAP client to validate the IF-MAP server certificate:

1. From the **Data** **Management** tab, select the **DHCP** tab, and then click **Grid** **DHCP** **Properties** from the Toolbar.
2. In the *Grid* *DHCP* *Properties* editor, click **Toggle** **Advanced** **Mode**.
3. Click the **IF-MAP** tab and complete the following:
   
   - **Enable** **IF-MAP**: Select this checkbox to enable the IF-MAP service for the Grid.
   - **Enable** **IF-MAP** **server** **certificate** **validation**: Select this checkbox to enable the validation of the IF-MAP server certificate, and then click **Import** to import the CA certificate. In the *Upload* dialog box, click **Select** to navigate to the certificate, and then click **Upload**. You can also copy and paste the CA certificate here.
4. Save the configuration and click **Restart** if it appears at the top of the screen.
