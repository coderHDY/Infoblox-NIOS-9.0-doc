---
title: "Managing Directories"
source: "/space/nios90/280406872"
pageId: "280406872"
---
You can create directories on the Grid Master and on Grid members, in which you can store your files. You can manage the directories in the following ways:

- Create a directory structure for file distribution, as described in  Adding Directories below.
- Modify the directory name and permissions, as described in  Modifying Directories below.
- Create a Virtual TFTP root directory, as described in  Creating a Virtual TFTP Root Directory below.
- View the directories, as described in  Viewing Directories From the Files Tab below.

# Adding Directories

To add a directory:

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Click the parent directory link, and then click **Add** -> **Directory** from the Toolbar.
3. Grid Manager adds a new directory to the parent directory and gives it the default name **NewDirectory**. You can modify the directory name and permissions, as described in  Modifying Directories below.

# Modifying Directories

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Select a directory checkbox and click the Edit icon.
3. The *Directory* editor provides the following tabs from which you can modify data:
   
   - **General**: You can modify the directory name here, except for the Root directory.
   - **Virtual** **TFTP** **Root**: You can add an IP Address, a Network or a Range of IP addresses to support VMware ESX hosts who need different PXE boot images based on where they are in the network.
   - **Permissions**: You can add or delete admin permissions in this tab. For information, see [*About Administrative Permissions*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280275424).
4. Save the configuration and click **Restart** if it appears at the top of the screen.   
   You can also select a directory and click the Delete icon to delete it.

> **warning**
>
> ### Note
> 
> When you delete a directory, the appliance automatically removes all its contents in that directory.

# Creating a Virtual TFTP Root Directory

This section describes how to create a Virtual TFTP root directory for a specific IP address, network, or range of IP addresses. Note that Virtual TFTP root is supported only for file downloads, but not for file uploads using TFTP client.

> **warning**
>
> ### Note
> 
> Root directory can not be a virtual TFTP root.

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Select the directory checkbox and click the Edit icon.
3. In the *Directory* editor select **Virtual** **TFTP** **Root**. Click the Add icon and select one of the following:
   
   - **IP** **Address:** This creates a virtual TFTP directory that the clients from a specified IP address will see as the root directory.
   - **Network:** This creates a virtual TFTP directory that the clients on a specified network will see as the root directory.
   - **Range:** This creates a virtual TFTP directory that the clients in a specified range of IP addresses will see as the root directory.
4. From the drop-down in the **Member** column, select the member on which to make the virtual TFTP root directory.
5. In the **Address/Network** column, enter a value:
   
   - **IP** **Address:** Enter the IP address of the client that will have access to the virtual TFTP root directory. This IP address must be on the allow list in the TFTP access control list.
   - **Network:** Enter a network address using the format 10.0.0.0/24. This allows all clients in that network to access the virtual TFTP root directory. This network address must be on the allow list in the TFTP access control list.
   - **Range:** Enter the first IP address in the range Address/Network column, and the last IP address in the range in the End column. This allows all clients in that range to access the virtual TFTP root directory. This range must be on the allow list in the TFTP access control list.
6. Click Save & Close. Click **Restart** if it appears at the top of the screen.
7. To create more virtual TFTP root directories, repeat Steps 3 through 5.

# Viewing Directories From the Files Tab

1. From the **Data** **Management** tab, select the **File** **Distribution** tab -> **Files** tab.
2. Grid Manager displays the following information in the Root directory.
   
   - **Name**: The name of the directory or file.
   - **Type**: Depending on the file type, this can be **Directory** or **File**.
   - **Size**: The file size in B, KB, or MB depending on whether the file size crosses the unit limit or not. For example, if the file size is 1023, Grid Manager displays 1023 B. If the file size is 1025, Grid Manager displays 1 KB. For a directory, Grid Manager displays a dash (-).
   - **Date** **Modified**: The timestamp when the directory was last created or when the file was last modified.
3. Click the directory link to view files and directories in a specific directory. You can also do the following in this panel:

- Sort the information in ascending or descending order by columns.
- Use the breadcrumb to go to a specific directory.
- Use filters and the **Go** **to** function to narrow down the list. With the autocomplete feature, you can just enter the first few characters of an object name in the **Go** **to** field and select the object from the possible matches.
- Create a quick filter to save frequently used filter criteria. For information, see [*Using Quick Filters*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.*
- Modify some of the data in the table. Double click a row of data, and either edit the data in the field or select an item from a drop-down list. Note that some fields are read-only. For more information about this feature, see [*Modifying Data in Tables*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/500861569/About+the+Grid+Manager+Interface#%5BinlineExtension%5DModifying-Data-in-Tables).
- Print and export the information in this panel.
- Add a directory or a file. For information, see  Adding Directories  and [ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[*Managing*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[ ](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844)[*Files*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280406844).
- Open and edit a directory. For information, see  Modifying Directories above.
