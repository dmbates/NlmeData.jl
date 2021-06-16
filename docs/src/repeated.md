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

## Rail

```@example repeated
dataset(:Rail)
```
- `travel`: measurements travel time for ultrasonic head-waves in a rail [ns].  The value recorded is the original travel time minus 36,100 ns.
- `rail`: the rail on which the measurement was made.

#### Source:
Example 10.10 (p. 427) of Devore, J. L. (2000), *Probability and Statistics for Engineering and the Sciences (5th ed)*, Duxbury.  The original source is an article in *Materials Evaluation*.
