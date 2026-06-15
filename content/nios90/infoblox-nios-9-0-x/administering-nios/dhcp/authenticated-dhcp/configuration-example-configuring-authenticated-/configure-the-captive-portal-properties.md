---
title: "Configure the Captive Portal Properties"
source: "/space/nios90/1411317945"
pageId: "1411317945"
---
Configure the captive portal properties of [cp1.campus1.school.edu](http://cp1.campus1.school.edu).

1. From the **Infoblox** **Grid** tab, select the **Grid** **Manager** tab.
2. Click the **Captive** **Portal** tab **-&gt;** **Services** **tab.**
3. Select the member [**cp1.campus1.school.edu**](http://cp1.campus1.school.edu) and click the Edit icon.
4. In the **General** **Basic** tab of the *Member* *Captive* *Portal* *Properties* editor, complete the following:
   
   - **Use** **This** **Authentication** **Server** **Group** **for** **Authenticating** **Captive** **Portal** **Users:** Select **RADIUS** **ASG**.
   - **Captive** **Portal** **User** **Types:** Select **Both**.
   - **Portal** **IP** **Address:** Select **10.2.2.10**.
   - **Enable** **SSL** **on** **Portal:** Select this option.
   - **Log** **Registration** **Success:** Select **Informational**.
   - **Log** **Registration** **Failure:** Select **Informational**.
5. Click **Save** **&** **Close.**

Configure the captive portal properties of [cp2.campus2.school.edu](http://cp2.campus2.school.edu).

1. From the **Infoblox Grid** tab, select the **Grid** **Manager** tab.
2. Click the **Captive** **Portal** tab **-&gt;** **Services** **tab.**
3. Select the member [cp2.campus2.school.edu](http://cp2.campus2.school.edu) and click the Edit icon.
4. In the **General** **Basic** tab of the *Member* *Captive* *Portal* *Properties* editor, complete the following:
   
   - **Use** **This** **Authentication** **Server** **Group** **for** **Authenticating** **Captive** **Portal** **Users:** Select **RADIUS** **ASG**.
   - **Captive** **Portal** **User** **Types:** Select **Both**.
   - **Portal** **IP** **Address:** Select **10.1.3.10**.
   - **Enable** **SSL** **on** **Portal:** Select this option.
   - **Log** **Registration** **Success:** Select **Informational**.
   - **Log** **Registration** **Failure:** Select **Informational**.
5. Click **Save** **&** **Close.**
