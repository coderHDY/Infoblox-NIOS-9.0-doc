---
title: "About the Grid Manager Interface"
source: "/space/nios90/500861569"
pageId: "500861569"
---
Grid Manager provides an easy-to-use interface that simplifies core network services management. Its navigational tools enable you to quickly move through the application and retrieve the information you need. You can customize different elements in your workspace, and hide and display panels as you need them. It also provides different types of Help, so you can immediately access the information you need to complete your tasks.  
The following Grid Manager Interface figure illustrates the typical layout of Grid Manager. It identifies common elements of the interface and features that you can use:   
*Grid* *Manager* *Interface*

*[drawio]*



## System Messages

Grid Manager displays system messages at the top of the screen. In wizards and editors, it displays messages at the top as well.

> **warning**
>
> ### Note
> 
> Some configuration changes require a service restart. Grid Manager displays a message whenever you make such a change. Click the **Restart** icon that appears in the message to restart services.

# Security and Informational Banners

Grid Manager displays banner messages on the header and footer of the screen. Only superusers can publish the informational and security banner. There are two types of banners:

- Security Banner - Security banner indicates the security level of the Infoblox Grid. There are five security levels to choose from the Security list box. The available security levels are Top Secret, Secret, Confidential, Restricted, and Unclassified.
- Informational Banner - You can use the informational banner for multiple uses, such as to indicate whether the Infoblox Grid is in production or a lab system. You can also publish messages of the day.

For more information about configuring security level banner and configuring informational level banner, see [*Managing a Grid*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/managing-a-grid).

# Breadcrumbs Navigation

Breadcrumbs navigation displays your path to the current page. It helps you keep track of your location in Infoblox Grid Manager. You can click any of the links to get back to a previous page.

# Global Search

Use Global Search to find data. Grid Manager searches the entire NIOS database for data that matches the criteria you specify. For additional information on Global Search, see [*Finding and Restoring Data*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/finding-and-restoring-data).

# Finder Panel

The *Finder* panel appears on all pages in Grid Manager. It provides the following tools:

- Smart Folders: Use smart folders to organize your data according to criteria that you specify.
- Bookmarks: Stores data that you have marked for easy retrieval.
- Recycle Bin: Stores deleted objects that you can either restore or permanently remove.
- URL Links: You can add, modify, and delete third party URL links of frequently used portals and destination pages.

You can resize, collapse, and expand the Finder panel.

# Toolbar Panel

The vertical Toolbar panel provides easy access to commands. The Toolbar is available in all pages, except the Dashboard. Its content changes depending on the type of data displayed in the work area. You can resize, collapse, and expand the *Toolbar* panel.

# Help Panel

The *Help* panel provides the following types of Help:

- **Help:** Expand this section to view information about the window currently displayed.
- **Documentation:** Expand this section to download the latest versions of the Infoblox Administrator Guide and Infoblox API Documentation.
- **Support:** Expand this section to view links to the Infoblox web site and Technical Support site.
- About: Expand this section to view information about the NIOS software version. You can resize, collapse, and expand the Help panel. In addition, each dialog box also provides a Help panel that contains information specific to the dialog box. You can expand and collapse the Help panel in dialog boxes as well.

# Wizards and Editors

Grid Manager provides a wizard for every object that you can create. You use wizards to enter basic information required to create an object. If you want to configure additional parameters, you can then save the object and edit it.  
Note that all required fields are denoted by asterisks.  
Your connection to Grid Manager may time out if a save operation takes longer than 120 seconds to complete. This can occur when multiple, complex operations are initiated by several users. It does not result in any data loss.

# Tooltips

Tooltips display the function of each button. Hover your mouse over a button or icon to display its label.

# Customizing Tables

Grid Manager uses dynamic tables to display information. You can customize tables by resizing columns, sorting the data, and selecting certain columns for display. Your settings remain active until you log out.  
To resize columns in a table:

1. In the table, place your pointer on the right border of the header of the column you want to resize.
2. Drag the border to the desired width.

To sort the data displayed in a table, click the header title. You can click the header title again to reverse the sort order. Alternatively, you can do the following:

1. In the table, mouse over to a header title and click the down arrow key.
2. Select **Sort** **Ascending** or **Sort** **Descending**. To edit columns:
3. In the table, mouse over to a header title and click the down arrow key.
4. Select **Columns** **&gt;** **Edit** **Columns**.
5. Do the following:
   
   - Width: Specify the width of the column in pixels. The minimum is five and the maximum is 999.
   - Sorted: Indicates whether the data in the column can be sorted
   - Visible: Click the checkboxes of the columns you want to display, and clear the checkboxes of those you want to hide.
6. Do one of the following:
   
   - Click **Apply** to apply your settings to the column.
   - Click **Cancel** to close the editor without saving your settings.
   - Click **Reset** to reset the settings to the default.

Grid Manager displays the selected column in the table.  
To reorder columns in a table, drag and drop the columns to the desired positions.

# Selecting Objects in Tables

In a table, Grid Manager displays data on multiple pages when the number of items to be displayed exceeds the maximum number of items that can be displayed on one page. Use the navigational buttons at the bottom of the table to page through the display.  
You can select multiple rows in a table. For example, in a Windows browser, you can do the following to select multiple rows:

- Use SHIFT+click to select multiple contiguous rows.
- Use CTRL+click to select multiple non-contiguous rows.
- Click the checkbox in the table header to select all rows on a page, as shown in the below figure Select all in a Table.

When you click the select all checkbox in a table that contains multiple pages, only the rows on the current page are selected. Grid Manager displays a message that indicates the total number of selected rows on the page. You can click **Select** **all** **objects** **in** **the** **dataset** to select all rows in the entire table. When you select all rows in the table, Grid Manager displays a message to indicate that. You can then click **Clear** **Selection** to deselect the rows.  
After you select all rows on a page, you can deselect a specific row by clearing the checkbox of the row. You can also click a row (not the checkbox) in the table to select the item and deselect the others.  
In a table, when you select all the objects for deletion, the objects that are not deleted from the database remain in the table after the operation is completed.   
  
*Select* *All* *in* *a* *Table*

*[drawio]*

# Modifying Data in Tables

Infoblox provides inline editing for certain fields in some tables. You can use this feature to modify data directly in a table instead of going through an editor.  
To update information in a table, you must have read/write permission to the data. When you enter or select a new value, the appliance validates the data format before saving the updated data.  
To modify data in a table:

1. From any panel that supports inline editing, double click the row of data that you want to modify. The appliance displays the inline editing editor in the selected row, as shown in the Inline Editing figure.
2. Depending on the data type, enter the new data in the field or select an item from the drop-down list. Note that some fields are read-only.
3. Click **Save** to save the changes, or click **Cancel** to discard them.

*Inline* *Editing*

*[drawio]*

# Printing from Grid Manager

In Grid Manager, you can print information from panels and pages that support the Print function. Grid Manager prints data one page at a time. The amount of data that is displayed in a specific panel depends on the table size configuration that you set in your user profile. For more information about specifying the table size, see [*Setting Login Options*](/nios90/infoblox-nios-9-0-x/using-the-grid-manager-interface/performing-basic-operations-using-grid-manager/setting-login-options).  
To print:

1. Click the **Print** icon. You must allow pop-up windows in your browser for printing. Infoblox Grid Manager displays a separate browser window.
2. Click **Print**.  
   Grid Manager displays the *Print* dialog box.
3. Configure printer settings and parameters.
4. Depending on your browser, click **OK** or **Print**.
