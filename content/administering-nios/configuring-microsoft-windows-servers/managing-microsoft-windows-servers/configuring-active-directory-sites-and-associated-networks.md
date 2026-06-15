---
title: "Configuring Active Directory Sites and Associated Networks"
source: "/space/nios90/280761209"
pageId: "280761209"
---
An Active Directory Domain is a collection of Active Directory Sites and associated networks. Each Active Directory Site can have multiple networks associated with it. The synchronization process ignores a network which is not assigned to an Active Directory Site. You can create and modify Active Directory Sites and networks on the NIOS appliance.  
You can use Active Directory Sites and services to synchronize sites and networks from the Active Directory server. After synchronization, the appliance displays these as networks or network containers in the appliance.  
The Active Directory Sites that are associated with a network are displayed as extensible attributes, which is a combination of the Active Directory Domain and Site name, for the respective networks on the appliance.  
To add Active Directory Sites, you must have Read/Write permission on the respective Active Directory Domain with which it is associated. For more information about permissions, see *[Configuring and Managing Server Permissions](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403325)*.  
  
To create Active Directory Sites and associate networks:

1. From the **Grid** tab, select the **Microsoft** **Servers** tab -> **Active** **Directory** **Domains** tab and click the respective Active Directory Domain name.
2. Click the Add icon in the *New* *Active* *Directory* *sites* wizard and specify a name for the Active Directory Site. You can associate multiple sites with an Active Directory Domain.
   
   *[legacy-content]*
   
   You can select an Active Directory Site and click the Delete icon to delete it.
3. Click **Next** to associate networks with an Active Directory Site. Select an Active Directory Site and click the Add icon to associate networks with the respective site.
4. Click **Cancel** to close the wizard without saving your settings. You can click **Save ****and ****Close** to save the settings and close the wizard or click **Save**** and ****Edit** to save the settings and edit the properties. The application will close the wizard and open the *Active** Directory** Site** Properties* editor. Click **Save**** and ****New** to save the Active Directory Sites in the list and open a new wizard.
