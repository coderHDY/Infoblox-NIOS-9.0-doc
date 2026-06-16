---
title: "Resolving Multiple Conflicts"
source: "/space/nios90/1432785704"
pageId: "1432785704"
---
You can define objects for IP addresses, attempt to apply a port reservation, or incorrectly specify a value such as a MAC address or a vendor name, and accidentally cause multiple conflicts after creating the new object.  
To resolve multiple conflicts for a particular IP address, use a Resolve Multiple Conflicts wizard:

1. To quickly locate any conflicts, open the Smart Folders panel and open the **Conflicts** list.
2. Click the IP address for any entry in the Conflicts list. The IPAM page opens for the selected IP address, with the top panel highlighted in pink to indicate the conflict.
3. Open the vertical toolbar and click **Resolve Conflict**.
4. If multiple issues are involved with the conflict entry, the Resolve Conflicts wizard lists each of them as shown in the below figure.   
   *Resolution of Multiple Conflicts*
   
   ![image](/assets/1432785704/9e08ef28-112c-4063-bd6a-1c5caac529ab.png)
   
   
5. Select the conflict that you want to resolve first and click Next. For example, consider choosing to resolve the MAC Address conflict as shown in above figure. The second step of the wizard appears, listing the differences between the Existing and Discovered information for the conflict as shown in the figure below.  
    *Troubleshooting* *the* *first* *selected* *conflict*
   
   ![image](/assets/1432785704/35815144-a243-401c-bf26-bb958e2885f7.png)
   
   
   
   1. In this case, the MAC address specified in the last fixed address object configuration, for that object, conflicts with the *discoveredMACaddress* associated with the IP. (You can verify this by checking the **RelatedObjects** tab in the IPAM page for the IP address.) Choose from one out of two options:
      
      - **Change the configured MAC address to be the same as the discovered MAC address**;
      - Keep fixed address and ignore this conflict for the next 1 day(s).  
        In this example, the **Discovered** information for the MAC address associated with the Fixed Address object is one digit off from the **Existing** MAC information, which was entered incorrectly by the administrator. The DIscovered MAC, shown in red, is the correct value and should be used to overwrite the record for the conflict.
6. Select the **Update... with discovered data** option and click **Resolve**.
7. The wizard updates with a return to the first step, in which you select the next conflict to resolve. A banner shows the result of the first resolution.
8. Select the next conflict to resolve and click **Next**. As an example, the below figure shows a device configuration conflict.  
   *Device* *Information* *conflict* *for* *an* *object*
9. ![image](/assets/1432785704/7656cea2-4463-40b3-9611-ab9e69b7abe1.png)
   
   1. To resolve the conflict, the Configured information must be overwritten with the Discovered information. Choose any of the following:
      
      - **Change configured device type and vendor to be the same as the discovered device type and vendor**
      - **Keep current device configuration and clear the conflict for the next 1 day(s)**
      
      Other conflict types have similar options.
10. Select from the above choices and click **Resolve**.
11. Continue through the wizard to resolve the last conflict associated with the IP address.

> **warning**
>
> ### Note
> 
> In the **Polling** tab –&gt; **Advanced** page of the* Grid Discovery Properties* editor, the **Ignore Conflict Duration** setting governs the default time duration to ignore (clear) certain types of conflicts that may occur when defining IPAM objects that are associated with discovered and managed devices, interfaces, or IP addresses. Increments can be defined in **Hours** or **Days**. This setting cannot be modified when resolving conflicts.
