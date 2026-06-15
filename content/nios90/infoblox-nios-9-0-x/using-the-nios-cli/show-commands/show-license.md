---
title: "show license"
source: "/space/nios90/280397311"
pageId: "280397311"
---
The `show`` ``license` command displays information about the licenses installed on NIOS appliances, vNIOS appliances, and Orchestration Servers. For information, refer to the *Infoblox* *NIOS* *Administrator* *Guide*. You can use this command to view licenses that were transferred from one vNIOS on VMware appliance to another. For information on how to set your licenses, see *[set license](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/set-commands/set-license)*.  
This command displays Grid-wide licenses when you specify gridwide or all arguments. Without any arguments, the static licenses for the member are displayed.

# Syntax

`show license [all | csv | gridwide | revoked]`

| **Argument** | **Description** |
| --- | --- |
| all | Displays all product licenses in a Grid. |
| csv | Displays all product licenses in a Grid in csv format. |
| gridwide | Displays Grid-wide licenses in a Grid. |
| revoked | Displays vNIOS licenses that were transferred from one vNIOS appliance to another. |

# Examples

## Showing product licenses installed on a NIOS appliance

`Infoblox &gt; ``show`` ``license`` `  
` `

`Version         : 4.3r2-5`  
` Hardware ID     : 6ddd3618a43027fdbb3b3ca9a29077a7 `  
` `

`License Type    : NIOS Maintenance `  
`Expiration Date : 05/13/2009`  
` License String  : GwAAAAsiM/VsmcoYLHostc8f6T7L7HDdR+HeL6U1WA== `  
` `

`License Type    : Grid `  
`Expiration Date : 05/13/2009`  
` License String  : GQAAAAAlKONBms0BL3Ai9M8bpnPKoHLUC+HEfPM= `  
` `

`License Type    : DNS `  
`Expiration Date : Permanent`  
` License String  : EQAAAAElL/oe28NFbWlz8M8arW7M `  
` `

`License Type    : DHCP`  
`Expiration Date : Permanent`  
` License String  : EgAAAAEjP/ZPx44UcSQi7IJW9D2Z9g== `  
` `

`License Type    : Grid Maintenance `  
`Expiration Date : 05/13/2009`  
` License String  : GwAAAA4uJfVHhdENA2Yrsc8f6T7L7HDdR+HeLfE2UQ== `

## Showing DCA licenses installed on a NIOS appliance

`Infoblox &gt; show license`  
`Version : 8.5.0-388388`  
`Hardware `ID :` 4015201710000011`

`License `Type :` DNS`  
`Expiration `Date :` Permanent`  
`License String : EQAAAA4P26wTb1p3eRM8dxnr7nH8`

`License `Type :` Grid`  
`Expiration `Date :` 12/27/2019`  
`License String : GgAAAA8P3LVMLlQzOwptd1en5Ce0NEBoc5DCGtFx`

`License `Type :` NIOS (Model IB-V4025)`  
`Expiration `Date :` 10/28/2019`  
`License String : GwAAAAQIx6NCbBQmeldtdFXq72z5IkRpeNnURtN/cA==`

`License `Type :` DNS Cache Acceleration (Tier 4)`  
`Expiration `Date :` Permanent`  
`License String : FQAAAA4CyawTb1p3eRM8dxnq8iTsZxVvLg==`

## Showing product licenses installed on a NIOS Discovery Probe appliance

`Infoblox &gt; show license `

`Version         : 6.9.0-271002`  
` Hardware ID     : 564d5d736f92734270264e24bd7f34ea `  
` `

`License Type    : Grid `  
`Expiration Date : 12/21/2015`  
` License String  : GgAAALb+k/nMu+ts7UIw7sK1+7B70RJDDrqZXLR8 `  
` `

`License Type    : vNIOS (model ND-V1405) `  
`Expiration Date : 12/21/2015`  
` License String  : HAAAAKX+jvPNt6sx4hV9oMT5+LJ70gZDCfabHOUm4tA= `  
` `

`License Type    : Discovery `  
`Expiration Date : 12/21/2015`  
` License String  : GQAAALf5lP/Rvfx351t+6Ir7+P010xNBQf6cCeU=`

## Showing product licenses installed on an Infoblox Orchestration Server

`Infoblox &gt; ``show`` ``license`` `  
` `

`Version         : 5.x-86034`  
` Hardware ID     : 6ddd3618a43027fdbb3b3ca9a29077a7 `  
` `

`License Type    : IF-MAP Service `  
`Expiration Date : 05/04/2010`  
` License String  : FAAAAAwtMedDlo5fICEi84MbpXPPpHCI`

## Showing product licenses of all Grid members in csv format

`Infoblox &gt; ``show`` ``license`` ``csv`` `  
`public_ip,license_type,exp_date,license_string `  
`10.0.0.18,DNS,Permanent,EQAAAAKS4n90WFGNUSirwvyUT9/z`  
` 10.0.0.18,Grid Maintenance,05/21/2009,EwAAAA4uJfVHhdENA2Yrsc8b6T3J7HDdR+HeLfQ2Cq== `  
`10.0.0.18,Grid,05/21/2009,GwAAAA2Z6HAtBkPFPyfzg/yVRsLzI2x0kYyKaPb22g==`  
` 10.0.0.18,NIOS Maintenance,01/21/2009,GwAAAAiV/nAGGljQEDv0h/yVRsLzI2x0kYyKb/P20Q==`  
` 10.0.0.18,DHCP,Permanent,EgAAAAEjP/ZPx44UcSQi7JW9D2Z9g==`  
` 10.0.0.22,DNS,05/21/2009,EgAAAAKU8nMlRBzcTWX63rHYFoymOQ==`  
` 10.0.0.22,Grid Maintenance,05/21/2009,GwAAAA4uJfVHhdENA2Yrsc8b6T3J7HDdR+HeLfQ2Cq== `  
`10.0.0.22,Grid,05/21/2009,GwAAAA2B6CftBkPFPyfzg/yVRsLzI2x0kZyKaPb22g==`  
` 10.0.0.22,NIOS Maintenance,05/21/2009,GwAAAAiV/nAGGljQEDv0h/yVRsLzI2x0kYyKb/P20Q==`  
` 10.0.0.22,DHCP,Permanent,EgAAAAEjP/ZPx96UcSQi7JW9D2Z9g==`

## Showing vNIOS on VMware licenses that were transferred

`Infoblox &gt; ``show`` ``license`` ``revoked`` `

`Public IP        License Type    Exp Date          Replaced Hardware ID `  
`10.34.196.221    Grid            Permanent         564dc31965c24cc2eb7ab2955e10e1c0`  
`License String`

`PQAAADUCMoaGagzzTP0jgMU8FjNONq8dY2Ux527eLxDjCxyqsaL3woZgtPdEzhTgV+4Xk+OEIvmVWk3rUf9s1Q`  
` =`  
` 10.34.196.221 vNIOS (550) Permanent564dc31965c24cc2eb7ab2955e10e1c0 AgAAACYCL4yHZ10rQ7vu0dlxRzAWLqtRdXQ39z+LKEW5DhjrrseLjgwfg9bZEz0L1ljkWkqOEN9zQD4wsRU=`

## Showing product licenses, including a transferred vNIOS license

`Infoblox &gt; ``show license`  
`Version         : 5.1r4-111576-ul`  
`Hardware ID     : 564d636db7a4892b1065c1d9493673a4`

`License Type    : DHCP`  
`Expiration Date : Permanent`  
`License String  : EgAAADQEJZOIN0/mEqkjgMU8WjBTfQ==`

`License Type    : DNS`  
`Expiration Date : Permanent`  
`License String  : EQAAADQCNZ/ZKwK3DuRynIhwA2MG`

`License Type    : Grid`  
`Expiration Date : Permanent`  
`Revoked Hardware ID : 564dc31965c24cc2eb7ab2955e10e1c0`

`License String  : PQAAADUCMoaGagzzTP0jgMU8FjNONq8dY2Ux527eLxDjCxyxqsaL3woZgtPdEzhTgV+4Xk+OEIwmVWk3rUf9s1Q=`  
`License Type    : MS Management`  
`Expiration Date : Permanent`  
`License String  : GwAAAD0fGY6VdB/9WvU6w4A8FjNONq8dfHB9pm+JeA==`

`License Type    : NIOS Maintenance`  
`Expiration Date : Permanent`  
`License String  : GgAAAD4FKZCraQvqT/ct2YhtCn4fKuJMYD1l9T7Z`  
  
`License Type    : vNIOS (550)`  
`Expiration Date : Permanent`  
`Revoked Hardware ID : 564dc31965c24cc2eb7ab2955e10e1c0`  
`License String  : OgAAACYCL4yHZlOrQ7Vu0dlxRzAWLqtRdXQ39z+LKEW5DhjrrseLjgwfg9bZEz0L1ljkWkqOEN9zQD4wsRU=`

`vNIOS: CPU cores detected: 1 - [License allows: 1]`  
`vNIOS: CPU frequency detected: 1200MHz - [License allows: 1200MHz]`  
`vNIOS: System memory detected: 2048MB - [License allows: 2048MB]`` `

## Showing all product licenses in a Grid

`Infoblox &gt; ``show`` ``license`` ``all`  
` Public IP      License Type       Kind         Exp Date       Replaced Hardware ID `  
`License String`  
`               Security Ecosystem Grid-wide    Permanent      `  
`HQAAALsakOzDKirMdaUsG2Yfk/j0BkhoFjhVfEtu36dJ`  
` 10.34.12.200   Grid               Static       01/27/2017     `  
`GQAAAN7S+Oj6JImWMzxZc8VyGvYoQJyH2i60L3Y=`  
` 10.34.12.200   DHCP               Static       Permanent      `  
`EgAAAN/U7/30ecqDbWhZb4g8TLh7Fg==`  
` 10.34.12.200   DNS                Static       Permanent      `  
`EQAAAN/S//GlZYfScSUIc8VwFesu`  
` 10.34.12.210   DNS                Static       Permanent      `  
`EQAAAN0m29pKq23n6iHHLriWhVRW`  
` 10.34.12.210   DHCP               Static       Permanent      `  
`EgAAAN0gy9YbtyC29myWMvXa3AcD6Q==`  
` 10.34.12.210   Grid               Static       Permanent      `  
`GgAAANwm3MMV6mOjqDiWLvXajwIevdQ7U0THmLU0`  
` 10.34.12.220   Grid               Static       11/28/2016     `  
`GgAAAGq4nPRvK7i2S03o7qMk9vaokCqkg6eUcc/g`  
` 10.34.12.220   vNIOS (model ND-V1405)Static    11/28/2016`  
` HAAAAHm4gf5uJ/jsRBqsoKJo9fiokz6kgeuWY57vO2w=`  
` 10.34.12.220  Discovery           Static       11/28/2016 `  
`GQAAAGu/m/JyLa+tQVSm7+xq/LLmkiujyeOTdsw=`

## Showing Grid-wide licenses in a Grid

`Infoblox &gt; ``show`` ``license`` ``gridwide`  
` License Type        Exp Date        License String`  
` Security Ecosystem  Permanent         HQAAALsakOzDKirMdaUsG2Yfk/j0BkhoFjhVfEtu36dJ`

## Showing Grid-wide licenses in a Grid when an Flex Grid Activation License is installed

`Infoblox &gt; ``show`` ``license`` `  
`Version         : 8.0.0-347398 `  
`Hardware ID     : 0800201605040013 `  
` `

`License Type    : Grid `  
`Expiration Date : 04/20/2017`  
` License String  : GQAAADmh7ID3wf0qOe98xJnJ79mgkh004FM2wrE= `  
` `

`License Type    : DHCP`  
`Expiration Date : Permanent`  
` License String  : EgAAADin+5X5nL4/Z7t83dSHvpfzxA== `  
` `  
`License Type    : DNS `  
`Expiration Date : Permanent`  
` License String  : EQAAADih65mogPNue/YtwZnL58Sm `  
` `

`Infoblox &gt; ``show`` ``license`` ``all`  
` Public IP License Type Kind Exp Date Replaced Hardware ID License String`  
` Flex Grid Activation Grid-wide 02/19/2017`  
` JAAAAPwgn32cIJAtloBgYTchXdVN71rdVRTO1cjljzOxvn9gygAz2g==`  
` 10.35.5.176 Grid Static 04/20/2017 GQAAADmh7ID3wf0qOe98xJnJ79mgkh004FM2wrE= `  
`10.35.5.176 DHCP Static Permanent EgAAADin+5X5nL4/Z7t83dSHvpfzxA== `  
`10.35.5.176 DNS Static Permanent EQAAADih65mogPNue/YtwZnL58Sm`  
` 10.35.105.10 Grid Static 02/19/2017 GgAAAOgU19juLjevCfnmAfIKoTGz4RzrxNR2mjdo`  
` 10.35.105.10 vNIOS (model IB-VM-1410) Static 02/19/2017`  
` GgAAAPsUytLvInTyBq2jTPRGoT+z4gjpwowgnz5g`  
` 10.35.105.10 Threat Protection (Software add-on) Static 02/19/2017 FQAAAP4N/MnsInTyBq2jTPRGoT+z50i8xQ==`  
` 10.35.105.10 Threat Protection Update Static 02/19/2017 FgAAAPkK/M7pPDn3TuCrCbpEoDn4r0rolZg=`  
` 10.35.105.10 DHCP Static 02/19/2017 FAAAAOkSwM3gb3G6S6XmAvZHp3T54xvo`  
` 10.35.105.10 DNS Static 02/20/2017 EwAAAOkU0MGtajn0SuCoAPdB7Guu5U0=`  
` Infoblox &gt;`

## Showing all licenses in a Grid when Software ADP is installed

`Infoblox &gt; ``show license`  
`Version         : 8.1.0-348290`  
`Hardware ID     : 564d6d00229a6cd6d197ffcd1383e37b`

`License Type    : Grid`  
`Expiration Date : 03/10/2017`  
`License String  : GgAAAN8Cp2mr0u/Es9xNAGCAeAvdy+7J5L/704mo`

`License Type    : vNIOS (model IB-VM-1410)`  
`Expiration Date : 03/10/2017`  
`License String  : GgAAAMwCumOq3qyYvIgBTWfMeAzdyPrL4ueth4Cm`

`vNIOS: CPU cores detected: 4 - [License allows: 4]`  
`vNIOS: System memory detected: 8192MB - [License allows: 8192MB]`

`License Type    : Threat Protection (Software add-on)`  
`Expiration Date : 03/10/2017`  
`License String  : FQAAAMkbjHip3qyYvIgBTWfMeAzdzb2etQ==`

`License Type    : Threat Protection Update`  
`Expiration Date : 03/10/2017`  
`License String  : FgAAAM4cjH+swOGc9cUAASnOeQqWhbiatqU=`

`License Type    : DNS`  
`Expiration Date : 03/10/2017`  
`License String  : EwAAAN4CoHDol+Gc8MUDAWTLNVjAz78=`

`License Type    : DHCP`  
`Expiration Date : 03/10/2017`  
`License String  : FAAAAN4EsHylk6jR8YlNA2XNfkeXwOnJ`
