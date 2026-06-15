---
title: "Specifying Forwarders for Microsoft Servers"
source: "/space/nios90/280760906"
pageId: "280760906"
---
A forwarder is a name server to which all other name servers first send queries that they cannot resolve locally. The forwarder then sends these queries to DNS servers that are external to the network, avoiding the need for the other name servers in your network to send queries off-site. You can define a list of forwarders for each managed Microsoft server as follows:

1. From the **Data** **Management** tab, select the **DNS** tab -> **Members/Servers** tab -> *ms_server* checkbox -> Edit icon.
2. Click the Add icon and enter the IP address of the forwarder in the text field.
3. Save the configuration and click **Restart** if it appears at the top of the screen.
