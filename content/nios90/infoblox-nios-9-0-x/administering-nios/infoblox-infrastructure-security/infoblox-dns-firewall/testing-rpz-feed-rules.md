---
title: "Testing RPZ Feed Rules"
source: "/space/nios90/280760150"
pageId: "280760150"
---
After you have downloaded rules from an RPZ feed, you can test the downloaded policies by using the dig command and observing log messages that contain redirect or rewrite responses in the syslog. The NIOS appliance supports generation of RPZ log messages in CEF (Common Event Format). Note that non-RPZ messages cannot be generated in CEF.  
You must enable the **rpz** option in the **Logging** **Category** of the *Grid* *DNS* *Properties* editor to receive RPZ related messages in the syslog. For information about setting DNS logging categories, see *[Using a Syslog Server](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/using-a-syslog-server)*.  
To view RPZ log messages in the syslog, you can use the system filter **RPZ** **Logs** from the **Quick** **Filter** to filter the messages. Note that only messages in CEF are displayed.  
To view RPZ log messages:

1. From the **Administration** tab, select the **Logs** tab -&gt; **Syslog** tab.
2. From the drop-down list at the upper right corner, select the Grid member on which you want to view the syslog.
3. Click **Show** **Filters** to enable the filters. Select **RPZ** **Logs** from the **Quick** **Filter** drop-down list to narrow down the system messages you want to view.

The name server recursive cache makes a syslog entry when an RPZ functionality fails. The syslog message log format is as follows:

`rpz &lt;TYPE&gt; rewrite &lt;QUERY&gt; via &lt;RPZ_RECORD&gt;&lt;ERROR_MESSAGE&gt;`

where: `&lt;TYPE&gt;` is one of following RPZ action types: QNAME, IP, NSIP, NSDNAME, CLIENT-IP;  
`&lt;QUERY&gt;` is a query record to process;  
`&lt;RPZ_RECORD&gt;` is an RPZ record that is used to perform an action to the query;  
`&lt;ERROR_MESSAGE&gt;` is a message with error details. Example: `NS address rewrite rrset failed:, concatentate() failed:, NS db_find() failed:, stop on qresult in rpz_rewrite() failed:, stop on unrecognized qresult in rpz_rewrite() failed:,` etc.

To test RPZ feed policies:

1. Open a terminal console on your computer.
2. Type the command **dig** **@*****&lt;your*** ***DNS*** ***server*** ***IP&gt;*** ***&lt;queried*** ***domain&gt;***.
3. Go to the **Administration** tab -&gt; **Logs** tab -&gt; **Syslog** tab to view CEF log messages.
