---
title: "Splunk default fields"
source: "/space/nios90/1363836939"
pageId: "1363836939"
---
Splunk server adds the following default fields to each event in every index.

| **Field Name** | **Description** | **Values/Range** |
| --- | --- | --- |
| date_hour | Indicates the hour when an event occurred. To narrow your search for specific event timestamps, you can use the default datetime fields. Click [*here*](http://docs.splunk.com/Documentation/Splunk/6.5.2/Knowledge/Usedefaultfields)* *for more information on datetime fields. | Range: 0-23 |
| date_mday | Indicates the day of the month when the event occurred | Range: 1-31 |
| date_minute | Indicates the exact minute when the event occurred | Range: 0-59 |
| date_month | Indicates the month during which an event occurred |  |
| date_second | Indicates the second in which an event occurred | Range: 0-59 |
| date_wday | Indicates the day of the week in which an event occurred | Example: Sunday, Monday, etc. |
| date_year | Indicates the year in which an event occurred |  |
| date_zone | Indicates the time for the local timezone of an event, expressed as hours in Unix Time |  |
| eventtype | Indicates events of the same type based on a given search. Click [*here*](http://docs.splunk.com/Documentation/SplunkCloud/6.5.1/Knowledge/Configureeventtypes) for more information. | Example: splunkd-log |
| host | Contains information about the originating hostname or a network IP address that generates the event | Example: [reporting-1.com](http://reporting-1.com) |
| index | Contains the name of the index with which a given event is indexed | Example: ib_dns_summary |
| linecount | Contains information about the number of lines in an event before it is indexed | Example: 1 |
| punct | Contains information about the pattern of the first thirty punctuation characters in the first line of the event with which it is associated. It shows how an event looks when all letters, numbers, and spaces are removed and contains characters such as periods, colons, parentheses, quotes, question marks, dashes, and underscores. Click [*here*](https://docs.splunk.com/Splexicon:Punct) for more information. | Example: -_::._\[\]:___.../_=               |
| source | Contains the name of the file, stream, or other input details from which the event originates | Example: si-search-dns-query-reply |
| sourcetype | Specifies the format of data input from which the event originates | Stash |
| splunk_server | Contains the name of the Splunk server that comprises the event | Example: reporting-2.com-2-&lt;*secondary server*&gt; |
| splunk_server_group | Contains the name of the Splunk server group | String |
