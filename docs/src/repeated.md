# Repeated measures data

Data consisting of several measurements on the same experimental or observational *unit* are sometimes called *repeated measures*.
If, furthermore, these repeated measurements are taken over time we refer to the data as *longitudinal*, as discussed in the next section.

In the descriptions of these data sets we always list the *response* first and the *grouping factor*, which defines the experimental or observational units on which the measurements are repeated, second.

```@setup repeated
using NlmeData: dataset, datasets
using CairoMakie
using AlgebraOfGraphics
```

## Alfalfa

```@example repeated
dataset(:Alfalfa)
```
Split-plot experiment on varieties of alfalfa
- `yield`: crop yield (units not given)
- `block`: block in which the crop was grown
- `variety`: `Cossack`, `Ladak`, or `Ranger`
- `date`: date of third cutting - `None`, `S1`, `S20`, or `O7` indicating Sept. 1, Sept. 20 or Oct. 7

#### Source
Snedecor, G. W. and Cochran, W. G. (1980), *Statistical Methods (7th ed)*, Iowa State University Press

## Assay
```@example repeated
dataset(:Assay)
```
Bioassay on cell culture plate
- `logdens`: log-optical density in the well
- `sample`: number of the sample in the well
- `block`: two-level factor identifying the block where the wells were measured
- `dilut`: the dilution applied to the well (5 levels)

#### Source
Rich Wolfe and David Lansky of Searle, Inc.
See Appendix A.2 of Pinheiro and Bates (2000), *Mixed-Effects Models in S and S-PLUS*, Springer for details.

```@example repeated
let
    figure = (width=800, height=450)
    plt = data(dataset(:Assay)) * 
        mapping(
            :dilut => "Dilution",
            :logdens => "log-optical density", 
            color=:block, 
            col=:sample,
            )
    draw(plt; figure)
end
```

## CO2

```@example repeated
dataset(:CO2)
```
Carbon dioxide uptake in grass plants.
- `uptake`: carbon dioxide uptake rates [μmol/m²s]
- `plant`: plant on which the uptake is measured
- `conc`: ambient carbon dioxide concentration [mL/L]
- `type`: grass type - `Mississippi` or `Quebec`
- `treatment`: `chilled` or `nonchilled`

The CO₂ uptake of six plants from Quebec and six plants from Mississippi was measured at several levels of ambient CO₂ concentration.
Half the plants of each type were chilled overnight before the experiment was conducted.

#### Source
Potvin, C., Lechowicz, M. J. and Tardif, S. (1990) “The statistical analysis of ecophysiological response curves obtained from experiments involving repeated measures”, *Ecology*, *71*, 1389-1400.

```@example repeated
data(dataset(:CO2)) * mapping(
    :conc => "Ambient CO₂ concentration [mL/L]",
    :uptake => "CO₂ uptake rate [μmol/m²s]",
    row = :treatment,
    col = :type,
    color = :plant,
) |> draw
```

## DNase
```@example repeated
dataset(:DNase)
```
Development of an ELISA assay for the recombinant protein DNase in rat serum
- `density`: measured optical density [dimensionless]
- `conc`: concentration of the protein
- `run`: assay run

#### Source
Davidian, M. and Giltinan, D. M. (1995) *Nonlinear Models for Repeated Measurement Data*, Chapman & Hall (section 5.2.4, p. 134)

```@example repeated
let dnase = dataset(:DNase)
    r = renamer([s => s for s in levels(dnase.run)])
    plt = data(dnase) *
        mapping(
            :conc => "Concentration of the protein DNase",
            :density => "Measured optical density",
            marker=(:run => r => "Run"),
            color=(:run => r => "Run"),
        ) *
    (visual(Lines) + visual(Scatter))
    draw(plt)
end
```
## Dialyzer
```@example repeated
dataset(:Dialyzer)
```
- `rate`: the hemodialyzer ultrafiltration rate [mL/hr]
- `subject`: indicator of the subject on which the measurement was made
- `pressure`: transmembrane pressure [dmHg]
- `qb`: bovine blood flow rate [dL/min]
- `index`: within-subject index of observation

Vonesh, E. F. and Carter, R. L. (1992), *Mixed-effects nonlinear regression for unbalanced repeated measures*, _Biometrics_, *48*, 1-18
describe data on high-flux hemodialyzers to asses their *in-vivo* ultrafiltration characteristics.

The ultrafiltration rates (in mL/hr) of 20 high-flux dialyzers were measured at seven different transmembrane pressures (in dmHg).
The _in vitro_ evaluation of the dialyzers used bovine blood at flow rates of either 200 dL/min or 300 dL/min.

```@example repeated
let dial = dataset(:Dialyzer)
    s = renamer(([s => s for s in levels(dial.subject)]))
    plt = data(dataset(:Dialyzer)) *
        mapping(
            :pressure => "Transmembrane pressure [dmHg]",
            :rate => "Hemodialyzer ultrafiltration rate [mL/hr]",
            color=:subject => s => "Subject",
            marker=:subject => s => "Subject",
            col = :qb,
        )
    plt * (visual(Lines) + visual(Scatter)) |> draw
end
```

## Rail

```@example repeated
dataset(:Rail)
```
- `travel`: measurements travel time for ultrasonic head-waves in a rail [ns].  The value recorded is the original travel time minus 36,100 ns.
- `rail`: the rail on which the measurement was made.

#### Source:
Example 10.10 (p. 427) of Devore, J. L. (2000), *Probability and Statistics for Engineering and the Sciences (5th ed)*, Duxbury.  The original source is an article in *Materials Evaluation*.
