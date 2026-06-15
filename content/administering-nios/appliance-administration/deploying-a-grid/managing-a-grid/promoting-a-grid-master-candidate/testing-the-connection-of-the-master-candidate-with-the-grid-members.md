---
title: "Testing the Connection of the Master Candidate with the Grid Members"
source: "/space/nios90/1340803098"
pageId: "1340803098"
---
Before promoting a Grid Master Candidate, you can check whether the Grid Master Candidate is connected to the rest of the Grid members by scheduling a test promotion. You can do this either by using Grid Manager or by using the NIOS CLI. For information about scheduling a test promotion using the NIOS CLI, see [*show test_promote_master*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280887720) and [*set test_promote_master*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/280855460).

The connection of the Grid Master Candidate to the rest of the Grid members is checked by sending specifically crafted test packets from the Grid Master Candidate and checking whether the Grid members are able to receive these packets.

To test the connection of the Grid Master Candidate with the Grid members, complete the following:

1. From the **Infoblox Grid** tab -> **Grid** **Manager** tab, expand the Toolbar, and then click **GMC Promote Test**.
2. In the *GMC Promote Test* editor, complete the following:
   
   1. Click the Schedule icon at the top of the wizard, and in the *Schedule Change* panel, complete one of the following:
      
      - To run the test promotion immediately, select **Now**.
      - To schedule the test promotion to run later, select **Later**, and then enter a date, a time, and select the time zone.
   2. From the **Select GMC** drop-down list, select the Grid Master Candidate that you want to promote to Grid Master.
   3. In the **Timeout (secs)** field, set the timeout for the packet to be received in seconds. That is, if the packet is not received by the Grid members within this timeout, the connection is deemed to have failed.
   4. Select the **Continuous Testing** checkbox if you want the Grid Master Candidate to send packets to the selected Grid members on a continual basis. The maximum period of time for which packets can be sent is 120 seconds.
   5. In the **Members** table, select the Grid members to which the Grid Master Candidate must establish a connection.
3. Click **Start** to start the test promotion. You can click **Stop** at any time to stop the test promotion.
4. Click **GMC Promotion Test Results** to view the status of the test promotion.

# Guidelines and Limitations of a Test Promotion

- You cannot upgrade the Grid during a test promotion.
- You can do a test promotion of only one Grid Master Candidate at a time.
- If new members are added when a test promotion is in progress, connection of the new members to the Grid Master Candidate will not be tested.
- If DNS Infrastructure Protection is enabled in the Grid and the member running the DNS Infrastructure Protection service is in the list of tested members, you must set the value in the **Timeout** field to at least 30 seconds. This is because DNS Infrastructure Protection needs to publish a new rule that allows traffic to pass from tested members. If you set a lower timeout value, the packets may be dropped, and the test will report that the member cannot connect to the tested Grid Master Candidate.
- If you do the test promotion when the Grid members are connected to the Grid through the management interface, the test fails.
- Communication between DUT and Grid Master is not tested because of firewall complications and running the OpenVPN connection. Communication is supposed to be already checked and DUT is already connected to Grid Master.
- You cannot run continuous testing when a regular test is in progress and you cannot run a regular test when continuous testing is in progress.
- If multiple public cloud instances such as AWS, Azure, Google Cloud and so on are configured as the Grid Master Candidate, ensure that these instances are able to communicate with other public cloud instances. Otherwise, the Grid Master Candidate promote test does not work.
- When you configure a Grid Master Candidate which includes an external NTP server and when you promote a Grid Master Candidate to Grid Master, the external NTP is enabled in the Grid Master Candidate. In case you try to edit the member properties an error message is displayed. Therefore, Infoblox recommends that you remove the External NTP configuration before you promote the Grid Master Candidate.
