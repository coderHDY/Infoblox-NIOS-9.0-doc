---
title: "Viewing DNS Cache Entries"
source: "/space/nios90/280405970"
pageId: "280405970"
---
The NIOS appliance allows you to view certain information that is stored in the DNS cache. You can do the following:

- View DNS configuration
- View DNS cache details
- View statistics

# Viewing DNS Configuration

The NIOS appliance enables you to view DNS configuration details. You can view the configuration details by using a browser. To view the DNS configuration:

1. From the **Data** **Management** tab, select the **DNS** tab -> click the **Members** tab.
2. Expand the Toolbar, click **View** -> **View** **Configuration**.

## Sample Output

`include "/infoblox/var/named_conf/tsig.key";`  
`options {`  
`zone-statistics yes;`  
`directory "/infoblox/var/named_conf"; version none;`  
`hostname none; recursion yes;`  
`listen-on { &lt;loopback address&gt;; 10.34.1.18; };`  
`query-source address 10.34.1.18 port *; notify-source 10.34.1.18 port *; transfer-source 10.34.1.18; `  
`minimal-responses yes; max-cache-size 536870912; infoblox-top-query yes;`  
`infoblox-top-query-log-interval 60;`  
`infoblox-top-query-client 500;`  
`infoblox-top-query-name 500;`  
`infoblox-top-query-rr-type 500;`  
`infoblox-top-query-nxdomain 500;`  
`infoblox-top-query-servfail 500;`  
`infoblox-top-query-rpz 99;`  
`infoblox-top-query-rpz-items-per-client 100;`  
`lame-ttl 600;`  
  
`# for service restart: allow_bulkhost_ddns = Refusal allow-transfer { any; };`  
`forwarders { 10.32.0.177; };`  
`avoid-v4-udp-ports { 2114; 2113; 2115; 8000; 8089; 9997; 2222; 7911; 7912; 8000; 8089; 9997;`  
`8080; 9000; 9999; 9004; 2022; 3374; 3115; 1194; };`  
`transfer-format many-answers;`  
`}; `  
  
`# Worker threads: default `  
`# Bulk Host Name Templates:`  
`#Four Octets: "$1$2-$3-$4" (Default)`  
`#One Octet: "-$4"`  
`#Three Octets: "$2$3-$4"`  
`#Two Octets: "$3$4" `  
`include "/infoblox/var/named_conf/dhcp_updater.key"; `  
`include "/infoblox/var/named_conf/rndc.key";`  
`controls {`  
`inet &lt;loopback address&gt; port 953`  
`allow { &lt;loopback address&gt;; } keys { "rndc-key"; };`  
`}; `  
`logging {`  
`channel ib_syslog { syslog daemon; severity info;`  
`};`  
`category default { ib_syslog; }; category rpz { null; };`  
`}; `  
`acl all_dns_views_updater_keys { key DHCP_UPDATER_default; key DHCP_UPDATER1; key DHCP_UPDATER3; };`

### Corresponding Dashboards and Settings

- The `infoblox-top-query-log-interval 60` setting logs the DNS top queries with an interval of 60 seconds.
- The `infoblox-top-query-name 500` setting captures the DNS top query domain names with the limit of 500.
- The` infoblox-top-query-client 500` setting corresponds to the *DNS Domain Queried by Client* dashboard. For more information about the dashboard, see [*Predefined Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280758557).
- The `infoblox-top-query-rpz` and `infoblox-top-query-rpz-items-per-client` settings are RPZ-specific settings. They correspond to the **Top N Limit** and **Total RPZ Entries per Client** fields under *Grid Reporting Properties* > **DNS** > **DNS RPZ Rule Hit Configuration**. For more information, see [*Grid Reporting Properties*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280267688).
- You can also choose the number of filter options to display by using the Top N . The default is 10. For more information, see [*About Dashboards*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280400911).

# Viewing DNS Cache Details

You can view data stored in cache for the DNS views that are configured in the NIOS appliance. You can view the details through a browser.  
To view cache details:

1. From the **Data Management** tab, select the **DNS** tab -> click the **Members** tab.
2. Expand the Toolbar, click **View** -> **View Cache**.

## Sample Output

`;; Start view _default`  
`;;; Cache dump of view '_default' (cache _default)`  
`;$DATE 20121018180555`  
`; authanswer `[a.test.com](http://a.test.com)`.23876IN A4.4.4.4`  
`;; Address database dump`  
`;; Dump complete`

# Viewing Statistics

The View Statistics feature enables you to view DNS Statistics of a Grid member. You can view statistics through a browser.  
To view statistics:

1. From the **Data** **Management** tab, select the **DNS** tab -> click the **Members** tab.
2. Expand the Toolbar, click **View** -> **View** **Cache**.

You can view statistics in the *DNS* *Statistics* *for* *Member* dialog box.
