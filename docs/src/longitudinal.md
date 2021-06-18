# Longitudinal data sets

Longitudinal data are observations made on a set of experimental or observational "units" over time.
In these data sets we list the response first, then the grouping factor or observational unit, then the time covariate.
```@setup longitudinal
using NlmeData: dataset
using CairoMakie
using AlgebraOfGraphics
using DataFrames
```

## BodyWeight
```@example longitudinal
dataset(:BodyWeight)
```
Rat weight over time for different diets
- `weight`: body weight [g]
- `rat`: indicator of the rat being weighed
- `time`: time in the experiment [days]
- `diet`: one of three diets that the rat receives

The body weights of the rats (in grams) are measured on day 1 and every seven days thereafter until day 64, with an extra measurement on day 44.
The experiment started several weeks before `day 1.`
There are three groups of rats, each on a different diet.

### Source
Hand, D. and Crowder, M. (1996), *Practical Longitudinal Data Analysis*, Chapman and Hall

```@example longitudinal
let
    plt = data(dataset(:BodyWeight)) *
        mapping(
            :time => "Time in the experiment [days]",
            :weight => "Body weight [g]",
            color = :rat => "Rat",
            col = :diet,
        )
    draw(plt)
end
```

## Cefamandole
```@example longitudinal
dataset(:Cefamandole)
```
Pharmacokinetics of cefamandole
- `conc`: observed plasma concentration of cefamandole [μg/mL]
- `subject`: subject on which the sample was drawn
- `time`: time at which the sample was drawn (minutes post-injection)

#### Source
Davidian, M. and Giltinan, D. M. (1995), *Nonlinear Models for Repeated Measurement Data*, Chapman and Hall (1.1, p. 2) describe data obtained during a pilot study to investigate the pharmacokinetics of the drug cefamandole.
Plasma concentrations of the drug were measured on six healthy volunteers at 14 time points following an intraveneous dose of 15 mg/kg body weight of cefamandole.

```@example longitudinal
data(dataset(:Cefamandole)) *
    mapping(
        :time => "Time of sample (minutes post-injection)",
        :conc => "Plasma concentration of cefamandole [μg/mL]",
        color = :subject => "Subject",
        marker = :subject => "Subject",
    ) * (visual(Lines) + visual(Scatter)) |> draw
```

## ChickWeight
```@example longitudinal
dataset(:ChickWeight)
```
Effect of diet on early growth of chicks
- `weight`: body weight [g]
- `chick`: indicator of the chick being weighed
- `time`: time since hatching [days]
- `diet`: indicator of the diet for the chick

The body weights of the chicks were measured at birth and every second day thereafter until day 20.
They were also measured on day 21.
There were four groups on chicks on different protein diets.

#### Source
Hand, D. and Crowder, M. (1996), *Practical Longitudinal Data Analysis*, Chapman and Hall (table A.2)

```@example longitudinal
data(dataset(:ChickWeight)) *
    mapping(
        :time => "Time since hatching [days]",
        :weight => "Body weight [g]",
        color = :chick => "Chick",
        marker = :chick => "Chick",
        col = :diet,
    ) * (visual(Lines) + visual(Scatter)) |> draw
```

## Glucose
```@example longitudinal
dataset(:Glucose)
```
- `subject`:
- `conc`: concentration of glucose [units not given]
- `time`: time since meal [units not given but probably hr]
- `meal`: time of day of the meal

Glucose levels over time

#### Source
Hand, D. and Crowder, M. (1996), *Practical Longitudinal Data Analysis*, Chapman and Hall

The data for the first subject (out of 6) is shown below
```@example longitudinal
data(filter(:subject => ==("1"), DataFrame(dataset(:Glucose)))) *
mapping(
    :time => "Time since meal",
    :conc => "Glucose concentration",
    color = :meal => "Meal time",
) * (visual(Lines) + visual(Scatter)) |> draw
```

## Glucose2
```@example longitudinal
dataset(:Glucose2)
```
- `glucose`: blood glucose level [mg/dL]
- `subject`:
- `time`: time since alcohol injestion [min/10]
- `date`: the experiment was repeated on two different dates

Glucose levels following alcohol injestion

Hand and Crowder (Table A.14, pp. 180-181, 1996) describe data on the blood glucose levels measured at 14 time points over 5 hours  for 7 volunteers who took alcohol at time 0.
The same experiment was repeated on a second date with the same subjects but with a dietary additive used for all subjects.

The data for the first subject (out of 7) is shown below
```@example longitudinal
data(filter(:subject => ==("1"), DataFrame(dataset(:Glucose2)))) *
mapping(
    :time => "Time since meal [min/10]",
    :glucose => "Glucose concentration [mg/dL]",
    color = :date => "Date",
) * (visual(Lines) + visual(Scatter)) |> draw
```
## Orange
```@example longitudinal
dataset(:Orange)
```
Growth of a sample of orange trees.
- `tree`: tree on which the measurement was made
- `circumference`: circumference of the trunk, probably "circumference at breast height", a standard measurement in forestry [mm]
- `age`: age of tree [days]

#### Source
Draper, N. R. and Smith, H. (1998), *Applied Regression Analysis (3rd ed)*, Wiley (exercise 24.N).
See also Appendix A.16 of Pinheiro and Bates (2000), *Mixed-Effects Models in S and S-PLUS*, Springer for details.

```@example longitudinal
data(dataset(:Orange)) * 
    mapping(
        :age => "Age [days]",
        :circumference => "Circumference at breast height [cm]",
        color=:tree => "Tree",
        marker=:tree => "Tree",
        ) *
    (visual(Lines) + visual(Scatter)) |> draw
```
