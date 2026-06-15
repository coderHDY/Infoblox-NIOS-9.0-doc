---
title: "Azure"
source: "/space/nios90/1468630134"
pageId: "1468630134"
---
For **Azure**, complete the following:

- **Service Endpoint**: This is the service endpoint for the desired VNet in the Microsoft Cloud. For more information about Azure service endpoints, see [*Integrating vDiscovery with Microsoft Entra ID*](https://docs.infoblox.com/space/vniosazure/37814282/Integrating+vDiscovery+with+Microsoft+Entra+ID).
- **Port**: Port **443** is selected by default.
- **Protocol**: **HTTPS** is selected by default.
- **Allow unsecured connection**: This option is not applicable for Azure connection.
- **Client ID** and **Client Secret**: Enter the client ID and client secret for the Microsoft Azure account. When you configure the client account, ensure that you have authorization to obtain device information on a wide network basis. If you replace the client secret of the vDiscovery job with the existing client ID, you must restart the vDiscovery job for the changes to take effect. For information about Azure client ID and client secret, see [*Integrating vDiscovery with Microsoft Entra ID*](https://docs.infoblox.com/space/vniosazure/37814282/Integrating+vDiscovery+with+Microsoft+Entra+ID).
