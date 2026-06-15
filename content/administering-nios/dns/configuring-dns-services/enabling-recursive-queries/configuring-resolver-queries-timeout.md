---
title: "Configuring Resolver Queries Timeout"
source: "/space/nios90/1420165938"
pageId: "1420165938"
---
You can configure the amount of time that a recursive query will wait for a response before timing out. The default timeout behavior is to wait for 10 seconds before timing out.  
To configure the resolver queries timeout value:

1. **Grid**: From the **Data** **Management** tab, select the **DNS** tab, expand the Toolbar and click **Grid** **DNS** **Properties**.  
   **Member**: From the **Data** **Management** tab, select the **DNS** tab and click the **Members** tab -> *member* checkbox -> Edit icon.  
   To override an inherited property, click **Override** next to it and complete the appropriate fields.
2. In the *Grid* *DNS* *Properties* or *Member* *DNS* *Properties* editor, click **Toggle** **Advanced** **Mode**, select the **Queries** tab and complete the following:
   
   - **Resolver** **queries** **timeout**: Specify the maximum time allowed for a recursive query to wait for a response before timing out. You can enter either 0 or a value between 10 and 30 seconds. Setting the timeout value to 0 returns to the default timeout behavior, which is to wait for 10 seconds before timing out.
3. Save the configuration.
