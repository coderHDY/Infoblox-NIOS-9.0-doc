---
title: "Configuring Security Status Thresholds"
source: "/space/nios90/1457652815"
pageId: "1457652815"
---
You can configure thresholds to determine the overall status of DNS Infrastructure Protection, DNS RPZ (Response Policy Zone), and DNS Threat Insight services in the Grid. Grid Manager provides a view of the overall security status of the Grid in the *Security* *Status* *for* *Grid* dashboard widget.

To configure the thresholds for security status, complete the following:

1. From the **Dashboards** -&gt; **Status** tab, click the Configure icon -&gt; **Global Dashboard Properties**.
2. In the *Global Dashboard Properties* editor, complete the following:
   
   - **DNS Infrastructure Protection Thresholds**: Define the thresholds for each severity level of the DNS Infrastructure Protection events for the following colors:
     
     - **Yellow**: Specify the low threshold value for **Critical**, **Major**, and **Warning** severity level. The default values are 1, 20, and 100 for **Critical**, **Major**, and **Warning** respectively.
     - **Red**: Specify the high threshold value for **Critical**, **Major**, and **Warning** severity level. The default values are 5, 100, and 1000 for **Critical**, **Major**, and **Warning** respectively.  
       Depending on the specified thresholds, Grid Manager determines the status of DNS Infrastructure Protection service as follows, which is displayed in the **Status** column of the *Security* *Status* *for* *Grid* widget:
       
       - **Green** **(OK)**: When the number of DNS Infrastructure Protection events are less than the low threshold value specified for the yellow color for all the severity levels
       - **Yellow (Warning)**: When the number of DNS Infrastructure Protection events equals or exceeds the threshold value specified for the yellow color but less than the threshold value specified for the red color for any of the severity levels.
       - **Red (Critical)**: When the number of DNS Infrastructure Protection events equals or exceeds the high threshold value specified for the red color for any of the severity levels.
     - **Response Policy Zone Thresholds**: Define the threshold values for the following colors to determine the overall status of RPZ:
       
       - **Yellow**: Specify the low threshold value for **Blocked**, **Substitute**, and **Passthru** RPZ rules. The default values are 10, 1, and 100 for **Blocked**, **Substitute**, and **Passthru** respectively.
       - **Red**: Specify the high threshold value for **Blocked**, **Substitute**, and **Passthru** RPZ rules. The default values are 100, 10, and 1000 for **Blocked**, **Substitute**, and **Passthru** respectively.  
         Depending on the specified thresholds, Grid Manager determines the status of RPZ as follows, which is displayed in the **Status** column of the *Grid* *Security* *Status* widget:
         
         - **Green** **(OK)**: When the number of RPZ hits are less than the low threshold value specified for the yellow color for all the rule types.
         - **Yellow (Warning)**: When the number of RPZ hits equals or exceeds the threshold value specified for the yellow color but less than the threshold value specified for the red color for any of the rule types.
         - **Red (Critical)**: When the number of RPZ hits equals or exceeds the high threshold value specified for the red color for any of the rule types.
       - **Threat Insight Thresholds**: Define the thresholds for the following colors, to determine the overall status of DNS Threat Insight:
         
         - **Yellow**: Specify the low threshold value for DNS Tunneling events. The default value is 1.
         - **Red**: Specify the high threshold value for DNS Tunneling events. The default value is 5.  
           Depending on the specified thresholds, Grid Manager determines the status of DNS Threat Insight as follows, which is displayed in the **Status** column of the *Grid* *Security* *Status* widget:
           
           - **Green(OK)**: When the number of DNS tunneling attacks are less than the low threshold value specified for the yellow color.
           - **Yellow(Warning)**: When the number of DNS tunneling attacks equals or exceeds the threshold value specified for the yellow color but less than the threshold value specified for the red color.
           - **Red(Critical)**: When the number of DNS tunneling attacks equals or exceeds the high threshold value specified for the red color.
3. Save the configuration.



> **warning**
>
> ### Note
> 
> If you have configured the same threshold value for both Yellow and Red color in the *Global* *Dashboard* *Properties* editor and if the same number of events are triggered, then Grid Manager displays the status in red in the *Grid* *Security* *Status* widget.
