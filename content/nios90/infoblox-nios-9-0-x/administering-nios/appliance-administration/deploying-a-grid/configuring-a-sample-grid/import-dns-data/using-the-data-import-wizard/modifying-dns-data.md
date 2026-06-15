---
title: "Modifying DNS Data"
source: "/space/nios90/1341292704"
pageId: "1341292704"
---
While importing data from the legacy DNS server, you cancel the importation of global configuration settings, and apply the name server groups you created in [*Before Using the Wizard*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/deploying-a-grid/configuring-a-sample-grid/import-dns-data/before-using-the-data-import-wizard) to the zones you want to import.

1. In the *Global DNS Configuration* table, select all rows by clicking the top row and then **SHIFT**+click the bottom row.
2. Right-click the selected rows to display the *Set* *Import* *Options* dialog box, select **Do** **not** **import**, and then click **Apply**.
3. In the *DNS Zones* table, clear the **Import** checkbox for the default view.
4. Select **corpxyz.com**, **lab.corpxyz.com** and all the corresponding reverse-mapping zones.
   
   **Tip:** You can use **SHIFT**+click to select multiple contiguous rows and **CTRL**+click to select multiple noncontiguous rows.
5. Right-click the selected rows, and then select **Set** **Import** **Options**.
6. In the *Set* *Import* *Options* dialog box, enter the following, and then click **Apply**:
   
   - **Set Zone Type**: No change
   - **Set Import Option**: No change
   - **Set View**: default
   - **Set Member**: HQ-Group master
7. Select **site1.corpxyz.com** and all the reverse-mapping zones with 1 in the second octet in the zone name (1.1.10.in-addr.arpa, 2.1.10.in-addr.arpa, 3.1.10.in-addr.arpa, and so on).
8. Right-click the selected rows, and then select **Set** **Import** **Options**.
9. In the *Set* *Import* *Options* dialog box, make the same selections as in [*6*](#), but choose **Site1-Group** master from the **Set** **Member** drop-down list.
10. Similarly, select **site2.corpxyz.com** and all the reverse-mapping zones with 2 in the second octet in the zone name.
11. Right-click the selected rows, and then select **Set** **Import** **Options**.
12. In the *Set* *Import* *Options* dialog box, make the same selections as in step 6, but choose **Site2-Group** master from the **Set** **Member** drop-down list.
