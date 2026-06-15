---
title: "Example - Adding an extensible attribute filter"
source: "/space/nios90/1356825192"
pageId: "1356825192"
---
If your reporting data contains the "location" extensible attributes associated to members, adding the following sample XML code to the XML source code will create an extensible attribute filter, **Member** **Location**:

`&lt;input type="dropdown" token="ea_location"&gt;`

`       &lt;label&gt;Member Location</label>`

`       &lt;choice value="All"&gt;All</choice>`

`       &lt;default&gt;All</default>`

`       &lt;search&gt;`

`         &lt;query&gt;| inputlookup __grouping_by_ea_tag_lookup`

`                | spath input=EA path=Location output=EA_Location`

`                | stats count by EA_Location </query>`

`         &lt;earliest&gt;$time.earliest$</earliest>`

`         &lt;latest&gt;$time.latest$</latest>`

`      </search>`

`      &lt;fieldForLabel&gt;EA_Location</fieldForLabel>`

`      &lt;fieldForValue&gt;EA_Location</fieldForValue>`

`      &lt;change&gt;`

`        &lt;condition value="All"&gt;`

`          &lt;set token="ea_location_str"&gt; | noop </set>`

`        </condition>`

`        &lt;condition value="*"&gt;`

`         &lt;set token="ea_location_str"&gt; | spath input=EA path=Location output=EA_Location`

`                                       | where EA_Location="$value$"</set>`

`        </condition>`

`      </change>`

`</input>`



`&lt;search id="base_search"&gt;`

`   &lt;query&gt;index=ib_system_summary report=si_cpu_usage`

`          $members$`

`          $ea_site_str$`

`          $ea_location_str$`

`          $group_by_str$`

`          $group_by_stats$`

`            | timechart bins=1000 $calculation_method$(CPU_PERCENT) by $time_chart_field$`

`where max in $topn$ useother=f`

`         | interpolate 1200</query>`

`   &lt;earliest&gt;$time.earliest$</earliest>`

`   &lt;latest&gt;$time.latest$</latest>`

`</search>`
