---
title: "Resolving Port Reservation Conflicts"
source: "/space/nios90/1432817922"
pageId: "1432817922"
---
Sometimes, administrators may accidentally request a device port to be reserved for an IP address when the port is already reserved for another object, or try to apply a different port to an object that already has a port reservation. When these cases arise, Grid Manager reports a *conflict*.  
To resolve port reservation conflicts:

1. Click the link provided in the **Conflicts** Smart Folder.
2. Expand the Toolbar and click **Resolve Conflict**, as shown in the figure Locating conflicts and beginning their resolution above.  
   The Resolve Port Reservation Conflict dialog opens, showing the differences between the reserved and discovered information.
3. Choose from the following options:
   
   - **Change the reserved port to be the same as the discovered port**.
   - **Keep the configured port reservation and clear the conflict for the next 1 day(s)**.
     
     Note that in the **Grid Discovery Properties **–>** Advanced** tab, the **Ignore Conflict Duration** setting governs the default time duration to ignore (clear) certain types of conflicts that may occur when defining IPAM objects that are associated with discovered and managed devices, interfaces, or IP addresses. Increments can be defined in **Hours** or **Days**. For more information, see [*Defining Seed Routers for Probe Members*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/1343161733).
4. Click **OK** to save changes.
   
   Note that for other conflict examples, see Resolving Multiple Conflicts below.  
   Another category of conflicts involves incorrectly defined device information for the object:

- The reserved Device Type information provided is different from the discovered vendor and device type (Router vs. Switch, for example).
- The defined Device Vendor information does not match with the discovered information.
- A User Port Reservation conflict occurs when an unmanaged IP address attempts to use a port that is already reserved by an IPAM object on a different IP address.
  
  You can choose from the following options:

- **Change** **configured** **information** **to** **discovered** **information**.
- **Keep** **the** **current** **device** **configuration** **and** **clear** **the** **conflict** **for** **the** **next** **1** **day(s)**.

In virtually all cases, replacing the configured information with the discovered information successfully clears the conflict; click **OK** to commit changes or to temporarily clear the conflict.
