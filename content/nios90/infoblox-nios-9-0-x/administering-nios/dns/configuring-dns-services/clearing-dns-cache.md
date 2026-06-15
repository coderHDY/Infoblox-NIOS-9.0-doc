---
title: "Clearing DNS Cache"
source: "/space/nios90/280272937"
pageId: "280272937"
---
The NIOS appliance allows you to clear certain information from the DNS cache. You can do the following:

- Clearing DNS Cache
- Clearing Cache for DNS Views
- Clearing Domains and Subdomains from DNS Cache

# Clearing DNS Cache

You can clear all the entries that are saved in the DNS cache. When you clear DNS cache on the NIOS appliance, entire BIND recursive cache is cleared.  
To clear DNS cache:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; **Members** tab -&gt; *member* checkbox.
2. Expand the Toolbar, click **Clear** -&gt; **Clear** **DNS** **Cache**.
3. Click **Yes** in the confirmation dialog box to clear DNS cache.

# Clearing Cache for DNS Views

You can configure the NIOS appliance to clear cache of a specific DNS view. This feature clears cache entries of a specific DNS view that is associated with the selected member.  
To clear cache of a DNS view:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; click the **Members** tab.
2. Expand the Toolbar, click **Clear** -&gt; **Clear** **View's** **Cache**.
3. Specify the following in the *Clear* *View's* *Cache* dialog box:
   
   - **Member:** Click **Select** **Member** to select a member. If there are multiple members, the *Member* *Selector* dialog box is displayed, from which you can select a member. Click the required member name in the dialog box. You can also click **Clear** to clear the displayed member and select a new one.
   - **DNS** **View:** Select a **DNS** **View** from the drop-down list. This list box appears only when there are multiple DNS views in the network view.
   - Click **Clear** **Cache** to clear the cache entries of the corresponding DNS View.

> **warning**
>
> ### Note
> 
> The entire name server recursive cache is cleared, if you do not specify a DNS view when you clear cache using **Clear** **View's** **Cache** and **Clear** **Domain** **Name** features on the NIOS appliance.

# Clearing Domains and Subdomains from DNS Cache

You can clear a specific domain and its subdomains from the DNS cache. When you clear a domain from the DNS cache, it is also removed from the BIND recursive cache.  
To clear a specific domain and its subdomains:

1. From the **Data** **Management** tab, select the **DNS** tab -&gt; click the **Members** tab.
2. Expand the Toolbar, click **Clear** -&gt; **Clear** **Domain** **Name**.
3. Specify the following in the *Clear* *Domain* *Name* *from* *Cache* dialog box:
   
   - **Domain** **Name:** Enter a domain name you want to delete.
   - **Clear** **entire** **domain** **(including** **subdomains):** Select the checkbox to clear the specified domain and its subdomains from the DNS cache. For example, if you enter corpxyz.com in the **Domain** **Name** field, then selecting this checkbox clears the entire domain including its subdomains such as www.corpxyz.com, corpxyz.com, x.corpxyz.com, etc. This checkbox is deselected by default.
   - **Member:** Click **Select** **Member** to select a member. If there are multiple members, the *Member* *Selector* dialog box is displayed, from which you can select a member. Click the required member name in the dialog box. You can also click **Clear** to clear the displayed member and select a new one.
   - **DNS** **View:** Select a **DNS** **View** from the drop-down list. This list box appears only when there are multiple DNS views in the network view.
   - Click **Clear** **Domain** **Name** to clear the domain name from the cache.
