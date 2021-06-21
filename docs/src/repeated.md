# Repeated measures data

Data consisting of several measurements on the same experimental or observational *unit* are sometimes called *repeated measures*.
If, furthermore, these repeated measurements are taken over time we refer to the data as *longitudinal*, as discussed in the next section.

In the descriptions of these data sets we always list the *response* first and the *grouping factor*, which defines the experimental or observational units on which the measurements are repeated, second.

```@setup repeated
using NlmeData: dataset, datasets
using CairoMakie
using AlgebraOfGraphics
using DataFrames
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
    color = :plant => "Plant",
) * (visual(Lines) + visual(Scatter)) |> draw
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

## Earthquake
```@example repeated
dataset(:Earthquake)
```
- `accel`: maximum horizontal acceleration observed [g]
- `quake`: indicator of the earthquake on which the measurements were made
- `richter`: intensity of the earthquake on the Richter scale
- `distance`: distance of the seismological measuring station to the epicenter of the earthquake [km]
- `soil`: soil condition at the measuring station

Measures of earthquake intensity

#### Source:
Joyner and Boore (1981), *Peak horizontal acceleration and velocity from strong-motion records including records from the 1979 Imperial Valley, California, earthquake*, *Bulletin of the Seismological Society of America*, *71*, 2011-2038.

```@example repeated
data(dataset(:Earthquake)) *
mapping(
    :distance => "Distance from epicenter [km]",
    :accel => "Maximum horizontal acceleration [g]",
    color = :quake => "Quake",
) * (visual(Lines) + visual(Scatter)) |> draw
```

## Fatigue
```@example repeated
dataset(:Fatigue)
```
- `rellength`: relative crack length [dimensionless]
- `path`: test path (i.e. test unit) identifier
- `cycles`: number of test cycles at which the measurement was made (millions of cycles)

These relative length of cracks in metal for 21 test units.
An initial notch of length 0.90 inches was made on each unit which then was subjected to several thousand test cycles.
After every 10,000 test cycles the crack length was measured.
Testing was stopped if the crack length exceeded 1.60 inches, defined as a failure, or at 120,000 cycles.

Source:
These data are given in Lu and Meeker (1993) where they state ``We obtained the data in Table 1 visually from figure 4.5.2 on page 242 of Bogdanoff and Kozin (1985).''

Lu, C. Joséph , and Meeker, William Q. (1993), *Using degradation measures to estimate a time-to-failure distribution*, *Technometrics*, *35*, 161-174

This plot shows the data from 3 of the 21 test units.

```@example repeated
let datsub = filter(:path => in(["10", "15", "20"]), DataFrame(dataset(:Fatigue)))
    data(datsub) *
        mapping(
            :cycles => "Test cycles (millions)",
            :rellength => "Relative crack length",
            col = :path,
        ) * (visual(Lines) + visual(Scatter)) |> draw
end
```

## Gasoline
```@example repeated
dataset(:Gasoline)
```
- `yield`: percentage of crude oil converted to gasoline after distillation and fractionation
- `sample`: (inferred) crude oil sample number
- `endpoint`: temperature at which the gasoline is vaporized [°F]
- `vapor`: vapor pressure of the crude oil [lbf/in²]
- `api`: crude oil gravity [° API]
- `astm`: crude oil 10% point ASTM - the temperature at which 10% of the crude has become vapor.

Refinery yield of gasoline.

Prater (1955) provides data on crude oil properties and gasoline yields.
Atkinson (1985) uses these data to illustrate the use of diagnostics in multiple regression analysis.
Three of the covariates - `api`, `vapor`, and `astm` - measure characteristics of the crude oil used to produce the gasoline.
The other covariate - `endpoint` - is a characteristic of the refining process.
Daniel and Wood (1980) notice that the covariates characterizing the crude oil occur in only ten distinct groups and conclude that the data represent responses measured on ten different crude oil samples.

#### Source
Prater, N. H. (1955), *Estimate gasoline yields from crudes*, *Petroleum Refiner*, *35* (5).

Atkinson, A. C. (1985), *Plots, Transformations, and Regression*, Oxford Press.

Daniel, C. and Wood, F. S. (1980), *Fitting Equations to Data*, Wiley.

The data from samples 3 to 6 are shown below
```@example repeated
data(filter(:sample => in(string.(3:6)), DataFrame(dataset(:Gasoline)))) *
mapping(
    :endpoint => "Temp at which gasoline is vaporized [°F]",
    :yield => "Yield of gasoline after distillation and fractionation [% of crude]",
    col = :sample,
) * (visual(Lines) + visual(Scatter)) |> draw
```
## Gun
```@example repeated
dataset(:Gun)
```
- `rounds`: number of rounds per minute fired
- `team`: team loading and firing rounds
- `method`: one of two methods for loading
- `physique`: physique of the team

Data from a comparison of methods for firing naval guns.

#### Source

Hicks (p.180, 1993) reports data from an experiment on methods for firing naval guns.
Gunners of three different physiques (slight, average, and heavy) tested two firing methods.
Both methods were tested twice by each of nine teams of three gunners with identical physique.
The response was the number of rounds fired per minute.

Hicks, C. R. (1993), *Fundamental Concepts in the Design of Experiments (4th ed)*, Harcourt Brace, New York.

```@example repeated
groupby(DataFrame(dataset(:Gun)), :team)
```

## Machines

```@example repeated
dataset(:Machines)
```
- `score`: a productivity score
- `worker`: 
- `machine`: 

Productivity scores on different workers using one of three brands of machine.

 Data on an experiment to compare three brands of machines used in an industrial process are presented in Milliken and Johnson (p. 285, 1992).
 Six workers were chosen randomly among the employees of a factory to operate each machine three times.
 The response is an overall productivity score taking into account the number and quality of components produced.

#### Source:

 Milliken, G. A. and Johnson, D. E. (1992), *Analysis of Messy Data, Volume I: Designed Experiments*, Chapman and Hall

```@example repeated
data(dataset(:Machines)) * mapping(:machine=>"Machine", :score, col=:worker) |> draw
```

## MathAchieve and MathAchSchool
```@example repeated
dataset(:MathAchieve)
```
- `school`: school that the student attends
- `MathAch`: mathematics achievement score
- `minority`: `Yes` if the student is a member of a minority racial group, otherwise `No`
- `sex`: the student's sex, `Female` or `Male`
- `ses`: a measure of socio-economic status

Further characteristics of the school are given in

```@example repeated
dataset(:MathAchSchool)
```
- `school`:
- `size`: number of students in the school
- `sector`: `Public` or `Catholic`
- `pracad`: proportion of students on the academic track
- `disclim`: a measure of the discrimination climate in the area where the school's students live
- `himinty`: a binary indicator of high minority population
- `meanses`: mean socio-economic status score for the school

Mathematics achievement within schools

For analysis the two tables would be combined using a left-join, as in
```@example repeated
combined = leftjoin(
    DataFrame(dataset(:MathAchieve)),
    DataFrame(dataset(:MathAchSchool)),
    on=:school,
    makeunique=true);
first(combined, 10)
```
```@example repeated
last(combined, 10)
```

## Rail

```@example repeated
dataset(:Rail)
```
- `travel`: measurements travel time for ultrasonic head-waves in a rail [ns].  The value recorded is the original travel time minus 36,100 ns.
- `rail`: the rail on which the measurement was made.

#### Source:
Example 10.10 (p. 427) of Devore, J. L. (2000), *Probability and Statistics for Engineering and the Sciences (5th ed)*, Duxbury.  The original source is an article in *Materials Evaluation*.
