---
title: "Monitoring Subscriber Policy Violations"
source: "/space/nios90/280660618"
pageId: "280660618"
---
You can monitor RPZ hits based on subscriber security policies and parental control policies through the following:

*[toc]*

- Syslog, as described in Monitoring through Syslog below.
- *Detailed RPZ Violations by Subscriber ID* report, as described in Detailed RPZ Violations by Subscriber ID below.

# Monitoring through Syslog

To receive information about RPZ hits based on subscriber security policies and parental control policies in the syslog, make sure that you enable the **RPZ** option in the **Logging** tab of the Grid DNS Properties editor or Member Properties editor. For information about configuring logging properties, setting DNS Logging Categories, see *[Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*. Once the RPZ option is enabled, the appliance logs RPZ hits based on subscriber security policies and parental control policies in CEF (Common Event Format) in the syslog. For information about how to configure the syslog server, see *[Using a Syslog Server](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280403148)*.

Following is a sample RPZ hit log message:

`CEF:0|Infoblox|NIOS|8.2.0-359884|RPZ-QNAME|PASSTHRU|7|app=DNS dst=10.35.41.18 src=10.32.1.145 spt=52100 view=_default qtype=A msg="rpz QNAME PASSTHRU rewrite child.com [A] via child.com.bit6subscribers" IPSD=N/A Acct-Session-Id=29de847acde415ab User-Name=john NAS-IP-Address=10.36.120.10 MSISDN=9956182386 Subscriber-Secure-Policy=0000507f CAT=0x00000000000000000000000000008000`

Each log message contains the following information:

- **Infoblox|NIOS |x.x.x**: Indicates the Infoblox product, and `x.x.x` represents the NIOS version.
- The string following the NIOS version is a hard-coded constant. In this example, it is RPZ QNAME.
- The hard-coded constant is followed by mitigation action. In this example, it is PASSTHRU.
- The number following the mitigation action is the threat severity level. The following numbers indicate the severity levels:
  
  - **8** = **Critical**
  - **7** = **Major**
  - **6** = **Warning**
  - **4** = **Informational**
- **app**: DNS
- **dst**: Destination IP address.
- **src**: Source IP address.
- **spt**: Source port.
- **view**: DNS view.
- **qtype**: Query type.
- **msg**: RPZ rule.
- **IPSD**: IP space discriminator.
- **Acct-Session-Id**: Session ID.
- **User-Name**: Username of the subscriber.
- **NAS-IP-Address**: NAS IP address.
- **MSISDN**: The mobile phone number of the subscriber.
- **Subscriber-Secure-Policy**: Subscriber Secure Policy.
- **CAT**: The category bits that match the query name. This indicates the reason for blocking the domain listed in the event.

To view RPZ violation by subscriber related log messages:

1. From the **Administration** tab, select the **Logs** tab -> **Syslog** tab.
2. From the drop-down list at the upper right corner, select the Grid member on which you want to view the syslog.
3. From the **Quick Filter** drop-down list, select **RPZ Incident Logs** to view RPZ violation by subscriber related events. To narrow down the system messages you want to view, click **Show Filter** and then select the filters you want to use. For information about how to use filters, see *[Finding and Restoring Data](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280401588)*.

# Handling Splunk REST API Request

You can retrieve pre-defined reports by sending Splunk REST API requests. Before you send any Splunk REST API request, ensure that reporting service is enabled on the Grid. To accept the Splunk REST API requests, the apache httpd process is started on the reporting member. The Splunk REST API request process uses TCP port 9185 and you can use NIOS user credentials to send Splunk REST API requests. For information about Splunk REST API, see *[http://docs.splunk.com/Documentation/Splunk/latest/RESTUM/RESTusing](http://docs.splunk.com/Documentation/Splunk/latest/RESTUM/RESTusing)*.

Note:

- Only searches(/search/jobs/), saved searches(/saved/searches/) and auth login(*/auth/login) are supported and any other Splunk REST API requests are not supported.
- Splunk REST API requests cannot be sent by remote users.

Following are the supported Splunk REST API requests:

| `authentication`**/URI** | **Summary** | **GET** | **PUT** | **POST** | **DEL** |
| --- | --- | --- | --- | --- | --- |
| auth/login | Access control    Provide user authentication |  |  | ** Yes** |  |

| `saved`**/URI** | **Summary** | **GET** | **PUT** | **POST** | **DEL** |
| --- | --- | --- | --- | --- | --- |
| saved/searches | Search    Manage saved search configuration | ** Yes** |  | ** Yes** |  |
| saved/searches/{name} | Search    Manage specific saved search | ** Yes** |  | ** Yes** | ** Yes** |
| saved/searches/{name}/acknowledge | Search    Manage saved search alerts |  |  | ** Yes** |  |
| saved/searches/{name}/dispatch | Search    Dispatch saved search |  |  | ** Yes** |  |
| saved/searches/{name}/history | Search    Access saved search job history | ** Yes** |  |  |  |
| saved/searches/{name}/reschedule | Search    Manage saved search job schedules |  |  | ** Yes** |  |
| saved/searches/{name}/scheduled_times | Search    Access saved search scheduled time | ** Yes** |  |  |  |
| saved/searches/{name}/suppress | Search    Access saved search alert state | ** Yes** |  |  |  |

| `search`**/URI** | **Summary** | **GET** | **PUT** | **POST** | **DEL** |
| --- | --- | --- | --- | --- | --- |
| search/jobs | Search    Manage search jobs | ** Yes** |  | ** ****Yes** |  |
| search/jobs/{search_id} | Search    Manage specific search job | ** ****Yes** |  | ** ****Yes** | ** ****Yes** |
| search/jobs/{search_id}/control | Search    Execute job control command for a specific search |  |  | **Yes** |  |
| search/jobs/{search_id}/events | Search    Access events for a specific search | **Yes** |  |  |  |
| search/jobs/{search_id}/results | Search    Access results of a specific search | **Yes** |  |  |  |
| search/jobs/{search_id}/results_preview | Search    Access preview results for a specific search | **Yes** |  |  |  |
| search/jobs/{search_id}/search.log | Search    Access search.log file for a specific search | **Yes** |  |  |  |
| search/jobs/{search_id}/summary | Search    Access getFieldsAndStats output of so-far-read events | **Yes** |  |  |  |
| search/jobs/{search_id}/timeline | Search    Access event distribution over time | **Yes** |  |  |  |
| search/jobs/export | Search    Stream search results | **Yes** |  | **Yes** |  |

Samples of Splunk REST API requests:

- To search for subscriber IDs:

`curl -k -u splunk-api-usr:"tru[kl0ad" https://10.61.41.36:9185/services/search/jobs/ -d search="search source=ib:dns:query:top_rpz_hit index=ib_dns| stats count by SUB_VAL"`

The response is as follows:

`&lt;?xml version="1.0" encoding="UTF-8"?&gt;`  
`&lt;response&gt;`  
` &lt;sid&gt;1516833486.5665</sid>`  
`</response>`

To get the job status:

`curl -k -u splunk-api-usr:"tru[kl0ad" ``https://10.61.41.36:9185/services/search/jobs/1516833486.5665`` | grep "isDone"`

`% Total % Received % Xferd Average Speed Time Time Time Current`  
` Dload Upload Total Spent Left Speed`  
`100 14702 100 14702 0 0 14702 0 0:00:01 --:--:-- 0:00:01 358k`  
` &lt;s:key name="isDone"&gt;1</s:key>`

To get the job output in CSV format:

`curl -k -u splunk-api-usr:"tru[kl0ad" ``https://10.61.41.36:9185/services/search/jobs/1516833486.5665/results`` --get -d output_mode=csv`

`"SUB_VAL",count`

`"+123 (12) 123-0001",2049`  
`"+123 (12) 123-0002",1978`  
`"+123 (12) 123-0003",2105`  
`"+333 (33) 333-3333",121`  
`"+555 (55) 555-5555",3`  
`"+911 (12) 123-0066",1916`  
`"+911 (55) 555-5555",114`

`16661230001,11447`  
`16661230002,15464`  
`16661230003,15226`  
`911121230066,11245`

- To search for RPZ event by a subscriber:

`curl -k -u splunk-api-usr:"tru[kl0ad" https://10.61.41.36:9185/services/search/jobs/ -d search='search source=ib:dns:query:top_rpz_hit index=ib_dns SUB_VAL=16661230002 earliest=-4h latest=-1h | transaction fields="DOMAIN_NAME" maxspan=1h | eval MITIGATION_ACTION=case(MITIGATION_ACTION`

` == "PT", "Passthru", MITIGATION_ACTION == "NX", "Block (No Such Domain)", MITIGATION_ACTION == "ND", "Block (No Data)", MITIGATION_ACTION == "SB", "Substitute", MITIGATION_ACTION == "A1", "Substitute (A)", MITIGATION_ACTION == "A4", "Substitute (AAAA)", MITIGATION_ACTION`  
` == "AA", "Substitute (A/AAAA)", MITIGATION_ACTION == "DN", "Substitute (Domain Name)", MITIGATION_ACTION == "ER", "None") | table TIMESTAMP DOMAIN_NAME MITIGATION_ACTION'`

The response is as follows:

`&lt;?xml version="1.0" encoding="UTF-8"?&gt;`  
`&lt;response&gt;`  
` &lt;sid&gt;1516834187.5702</sid>`  
`</response>`

To get the job status:

`curl -k -u `splunk`-`api`-`usr`:"tru[kl0ad" ``https://10.61.41.36:9185/services/search/jobs/1516834187.5702`` | grep "isDone"`

`&lt;s:key name="isDone"&gt;1</s:key>`

To get the job output in csv format:

`curl -k -u splunk-api-usr:"tru[kl0ad" ``https://10.61.41.36:9185/services/search/jobs/1516834187.5702/results`` --get -d output_mode=csv`

`TIMESTAMP,"DOMAIN_NAME","MITIGATION_ACTION"`

`"2018-01-24 12:46:07 2018-01-24 12:56:07 2018-01-24 13:06:07 2018-01-24 13:16:07 2018-01-24 13:26:07 2018-01-24 13:36:07 2018-01-24 13:46:07","wpad.tme.infoblox.com","Block (No Such Domain)"`

`"2018-01-24 11:36:06 2018-01-24 11:46:06 2018-01-24 11:56:06 2018-01-24 12:06:06 2018-01-24 12:16:06 2018-01-24 12:26:06 2018-01-24 12:36:06","wpad.tme.infoblox.com","Block (No Such Domain)"`

`"2018-01-24 10:57:41 2018-01-24 11:07:41 2018-01-24 11:17:41 2018-01-24 11:27:41 2018-01-24 11:34:51 2018-01-24 11:35:06","wpad.tme.infoblox.com","Block (No Such Domain)"`
