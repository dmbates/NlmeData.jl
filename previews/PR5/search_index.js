var documenterSearchIndex = {"docs":
[{"location":"longitudinal/#Longitudinal-data-sets","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Longitudinal data are observations made on a set of experimental or observational \"units\" over time. In these data sets we list the response first, then the grouping factor or observational unit, then the time covariate.","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"using NlmeData: dataset\nusing CairoMakie\nusing AlgebraOfGraphics\nusing DataFrames","category":"page"},{"location":"longitudinal/#BodyWeight","page":"Longitudinal data sets","title":"BodyWeight","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:BodyWeight)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Rat weight over time for different diets","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"weight: body weight [g]\nrat: indicator of the rat being weighed\ntime: time in the experiment [days]\ndiet: one of three diets that the rat receives","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"The body weights of the rats (in grams) are measured on day 1 and every seven days thereafter until day 64, with an extra measurement on day 44. The experiment started several weeks before day 1. There are three groups of rats, each on a different diet.","category":"page"},{"location":"longitudinal/#Source","page":"Longitudinal data sets","title":"Source","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Hand, D. and Crowder, M. (1996), Practical Longitudinal Data Analysis, Chapman and Hall","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"let\n    plt = data(dataset(:BodyWeight)) *\n        mapping(\n            :time => \"Time in the experiment [days]\",\n            :weight => \"Body weight [g]\",\n            color = :rat => \"Rat\",\n            col = :diet,\n        )\n    draw(plt)\nend","category":"page"},{"location":"longitudinal/#Cefamandole","page":"Longitudinal data sets","title":"Cefamandole","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:Cefamandole)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Pharmacokinetics of cefamandole","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"conc: observed plasma concentration of cefamandole [μg/mL]\nsubject: subject on which the sample was drawn\ntime: time at which the sample was drawn (minutes post-injection)","category":"page"},{"location":"longitudinal/#Source-2","page":"Longitudinal data sets","title":"Source","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Davidian, M. and Giltinan, D. M. (1995), Nonlinear Models for Repeated Measurement Data, Chapman and Hall (1.1, p. 2) describe data obtained during a pilot study to investigate the pharmacokinetics of the drug cefamandole. Plasma concentrations of the drug were measured on six healthy volunteers at 14 time points following an intraveneous dose of 15 mg/kg body weight of cefamandole.","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"data(dataset(:Cefamandole)) *\n    mapping(\n        :time => \"Time of sample (minutes post-injection)\",\n        :conc => \"Plasma concentration of cefamandole [μg/mL]\",\n        color = :subject => \"Subject\",\n        marker = :subject => \"Subject\",\n    ) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"longitudinal/#ChickWeight","page":"Longitudinal data sets","title":"ChickWeight","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:ChickWeight)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Effect of diet on early growth of chicks","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"weight: body weight [g]\nchick: indicator of the chick being weighed\ntime: time since hatching [days]\ndiet: indicator of the diet for the chick","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"The body weights of the chicks were measured at birth and every second day thereafter until day 20. They were also measured on day 21. There were four groups on chicks on different protein diets.","category":"page"},{"location":"longitudinal/#Source-3","page":"Longitudinal data sets","title":"Source","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Hand, D. and Crowder, M. (1996), Practical Longitudinal Data Analysis, Chapman and Hall (table A.2)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"data(dataset(:ChickWeight)) *\n    mapping(\n        :time => \"Time since hatching [days]\",\n        :weight => \"Body weight [g]\",\n        color = :chick => \"Chick\",\n        marker = :chick => \"Chick\",\n        col = :diet,\n    ) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"longitudinal/#Glucose","page":"Longitudinal data sets","title":"Glucose","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:Glucose)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"subject:\nconc: concentration of glucose [units not given]\ntime: time since meal [units not given but probably hr]\nmeal: time of day of the meal","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Glucose levels over time","category":"page"},{"location":"longitudinal/#Source-4","page":"Longitudinal data sets","title":"Source","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Hand, D. and Crowder, M. (1996), Practical Longitudinal Data Analysis, Chapman and Hall","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"The data for the first subject (out of 6) is shown below","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"data(filter(:subject => ==(\"1\"), DataFrame(dataset(:Glucose)))) *\nmapping(\n    :time => \"Time since meal\",\n    :conc => \"Glucose concentration\",\n    color = :meal => \"Meal time\",\n) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"longitudinal/#Glucose2","page":"Longitudinal data sets","title":"Glucose2","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:Glucose2)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"glucose: blood glucose level [mg/dL]\nsubject:\ntime: time since alcohol injestion [min/10]\ndate: the experiment was repeated on two different dates","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Glucose levels following alcohol injestion","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Hand and Crowder (Table A.14, pp. 180-181, 1996) describe data on the blood glucose levels measured at 14 time points over 5 hours  for 7 volunteers who took alcohol at time 0. The same experiment was repeated on a second date with the same subjects but with a dietary additive used for all subjects.","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"The data for the first subject (out of 7) is shown below","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"data(filter(:subject => ==(\"1\"), DataFrame(dataset(:Glucose2)))) *\nmapping(\n    :time => \"Time since meal [min/10]\",\n    :glucose => \"Glucose concentration [mg/dL]\",\n    color = :date => \"Date\",\n) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"longitudinal/#Orange","page":"Longitudinal data sets","title":"Orange","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"dataset(:Orange)","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Growth of a sample of orange trees.","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"tree: tree on which the measurement was made\ncircumference: circumference of the trunk, probably \"circumference at breast height\", a standard measurement in forestry [mm]\nage: age of tree [days]","category":"page"},{"location":"longitudinal/#Source-5","page":"Longitudinal data sets","title":"Source","text":"","category":"section"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"Draper, N. R. and Smith, H. (1998), Applied Regression Analysis (3rd ed), Wiley (exercise 24.N). See also Appendix A.16 of Pinheiro and Bates (2000), Mixed-Effects Models in S and S-PLUS, Springer for details.","category":"page"},{"location":"longitudinal/","page":"Longitudinal data sets","title":"Longitudinal data sets","text":"data(dataset(:Orange)) * \n    mapping(\n        :age => \"Age [days]\",\n        :circumference => \"Circumference at breast height [cm]\",\n        color=:tree => \"Tree\",\n        marker=:tree => \"Tree\",\n        ) *\n    (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = NlmeData","category":"page"},{"location":"#NlmeData","page":"Home","title":"NlmeData","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for NlmeData.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package provides the data sets from the nlme package for R as Arrow files.","category":"page"},{"location":"","page":"Home","title":"Home","text":"There are only two functions, datasets and dataset, defined, but not exported, in this package. The reason they are not exported is so that the names do not conflict with similar names in other packages.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [NlmeData]","category":"page"},{"location":"#NlmeData.dataset-Tuple{AbstractString}","page":"Home","title":"NlmeData.dataset","text":"dataset(nm)\n\nReturn, as an Arrow.Table, the data set named nm, which can be a String or Symbol\n\n\n\n\n\n","category":"method"},{"location":"#NlmeData.datasets-Tuple{}","page":"Home","title":"NlmeData.datasets","text":"datasets()\n\nReturn a vector of names of the available data sets\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"note: Calling the unexported function names\nTwo idioms to call these unexported function names are either to load the package and use the fully qualified nameusing NlmeData\nNlmeData.datasets()or to load just the functions and use the unqualified nameusing NlmeData: dataset, datasets\ndatasets()","category":"page"},{"location":"","page":"Home","title":"Home","text":"The capitalization of the names of the datasets in the R package is preserved, even though it is more common to use lower case names in Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using NlmeData: dataset, datasets\ndatasets()    # names of available data sets","category":"page"},{"location":"","page":"Home","title":"Home","text":"An individual dataset always has a response variable and a grouping factor. For example, in the Rail dataset on the travel times of ultrasonic head-waves in 6 different samples of railway rails","category":"page"},{"location":"","page":"Home","title":"Home","text":"dataset(:Rail)","category":"page"},{"location":"","page":"Home","title":"Home","text":"the response is travel and the grouping factor is rail.","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Caching of datasets\nThe data sets are cached in NlmeData.nlmecache when first read, and retrieved from the cache if already present. Thus, the second and subsequent calls to dataset for the same name have negligible overhead.The caching is done automatically with no user action required. If, for some reason, you wish to check the contents of the cache, useusing NlmeData     # to be able to access the cache\nNlmeData.nlmecache","category":"page"},{"location":"","page":"Home","title":"Home","text":"Frequently there are other covariates recorded. For example, in a longitudinal data set, one of the covariates will represent the time of the observation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"dataset(:Orange)","category":"page"},{"location":"","page":"Home","title":"Home","text":"A convenient way to view an individual dataset is to create a GroupedDataFrame with DataFrames.groupby. (DataFrames is not a dependency of NlmeData - so as to avoid a heavyweight dependency.  You must load it separately.)","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DataFrames\ngroupby(DataFrame(dataset(:Orange)), :tree)","category":"page"},{"location":"repeated/#Repeated-measures-data","page":"Repeated measures","title":"Repeated measures data","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Data consisting of several measurements on the same experimental or observational unit are sometimes called repeated measures. If, furthermore, these repeated measurements are taken over time we refer to the data as longitudinal, as discussed in the next section.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"In the descriptions of these data sets we always list the response first and the grouping factor, which defines the experimental or observational units on which the measurements are repeated, second.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"using NlmeData: dataset, datasets\nusing CairoMakie\nusing AlgebraOfGraphics\nusing DataFrames","category":"page"},{"location":"repeated/#Alfalfa","page":"Repeated measures","title":"Alfalfa","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Alfalfa)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Split-plot experiment on varieties of alfalfa","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"yield: crop yield (units not given)\nblock: block in which the crop was grown\nvariety: Cossack, Ladak, or Ranger\ndate: date of third cutting - None, S1, S20, or O7 indicating Sept. 1, Sept. 20 or Oct. 7","category":"page"},{"location":"repeated/#Source","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Snedecor, G. W. and Cochran, W. G. (1980), Statistical Methods (7th ed), Iowa State University Press","category":"page"},{"location":"repeated/#Assay","page":"Repeated measures","title":"Assay","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Assay)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Bioassay on cell culture plate","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"logdens: log-optical density in the well\nsample: number of the sample in the well\nblock: two-level factor identifying the block where the wells were measured\ndilut: the dilution applied to the well (5 levels)","category":"page"},{"location":"repeated/#Source-2","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Rich Wolfe and David Lansky of Searle, Inc. See Appendix A.2 of Pinheiro and Bates (2000), Mixed-Effects Models in S and S-PLUS, Springer for details.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"let\n    figure = (width=800, height=450)\n    plt = data(dataset(:Assay)) * \n        mapping(\n            :dilut => \"Dilution\",\n            :logdens => \"log-optical density\", \n            color=:block, \n            col=:sample,\n            )\n    draw(plt; figure)\nend","category":"page"},{"location":"repeated/#CO2","page":"Repeated measures","title":"CO2","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:CO2)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Carbon dioxide uptake in grass plants.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"uptake: carbon dioxide uptake rates [μmol/m²s]\nplant: plant on which the uptake is measured\nconc: ambient carbon dioxide concentration [mL/L]\ntype: grass type - Mississippi or Quebec\ntreatment: chilled or nonchilled","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"The CO₂ uptake of six plants from Quebec and six plants from Mississippi was measured at several levels of ambient CO₂ concentration. Half the plants of each type were chilled overnight before the experiment was conducted.","category":"page"},{"location":"repeated/#Source-3","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Potvin, C., Lechowicz, M. J. and Tardif, S. (1990) “The statistical analysis of ecophysiological response curves obtained from experiments involving repeated measures”, Ecology, 71, 1389-1400.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"data(dataset(:CO2)) * mapping(\n    :conc => \"Ambient CO₂ concentration [mL/L]\",\n    :uptake => \"CO₂ uptake rate [μmol/m²s]\",\n    row = :treatment,\n    col = :type,\n    color = :plant => \"Plant\",\n) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"repeated/#DNase","page":"Repeated measures","title":"DNase","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:DNase)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Development of an ELISA assay for the recombinant protein DNase in rat serum","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"density: measured optical density [dimensionless]\nconc: concentration of the protein\nrun: assay run","category":"page"},{"location":"repeated/#Source-4","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Davidian, M. and Giltinan, D. M. (1995) Nonlinear Models for Repeated Measurement Data, Chapman & Hall (section 5.2.4, p. 134)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"let dnase = dataset(:DNase)\n    r = renamer([s => s for s in levels(dnase.run)])\n    plt = data(dnase) *\n        mapping(\n            :conc => \"Concentration of the protein DNase\",\n            :density => \"Measured optical density\",\n            marker=(:run => r => \"Run\"),\n            color=(:run => r => \"Run\"),\n        ) *\n    (visual(Lines) + visual(Scatter))\n    draw(plt)\nend","category":"page"},{"location":"repeated/#Dialyzer","page":"Repeated measures","title":"Dialyzer","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Dialyzer)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"rate: the hemodialyzer ultrafiltration rate [mL/hr]\nsubject: indicator of the subject on which the measurement was made\npressure: transmembrane pressure [dmHg]\nqb: bovine blood flow rate [dL/min]\nindex: within-subject index of observation","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Vonesh, E. F. and Carter, R. L. (1992), Mixed-effects nonlinear regression for unbalanced repeated measures, Biometrics, 48, 1-18 describe data on high-flux hemodialyzers to asses their in-vivo ultrafiltration characteristics.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"The ultrafiltration rates (in mL/hr) of 20 high-flux dialyzers were measured at seven different transmembrane pressures (in dmHg). The in vitro evaluation of the dialyzers used bovine blood at flow rates of either 200 dL/min or 300 dL/min.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"let dial = dataset(:Dialyzer)\n    s = renamer(([s => s for s in levels(dial.subject)]))\n    plt = data(dataset(:Dialyzer)) *\n        mapping(\n            :pressure => \"Transmembrane pressure [dmHg]\",\n            :rate => \"Hemodialyzer ultrafiltration rate [mL/hr]\",\n            color=:subject => s => \"Subject\",\n            marker=:subject => s => \"Subject\",\n            col = :qb,\n        )\n    plt * (visual(Lines) + visual(Scatter)) |> draw\nend","category":"page"},{"location":"repeated/#Earthquake","page":"Repeated measures","title":"Earthquake","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Earthquake)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"accel: maximum horizontal acceleration observed [g]\nquake: indicator of the earthquake on which the measurements were made\nrichter: intensity of the earthquake on the Richter scale\ndistance: distance of the seismological measuring station to the epicenter of the earthquake [km]\nsoil: soil condition at the measuring station","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Measures of earthquake intensity","category":"page"},{"location":"repeated/#Source:","page":"Repeated measures","title":"Source:","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Joyner and Boore (1981), Peak horizontal acceleration and velocity from strong-motion records including records from the 1979 Imperial Valley, California, earthquake, Bulletin of the Seismological Society of America, 71, 2011-2038.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"data(dataset(:Earthquake)) *\nmapping(\n    :distance => \"Distance from epicenter [km]\",\n    :accel => \"Maximum horizontal acceleration [g]\",\n    color = :quake => \"Quake\",\n) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"repeated/#Fatigue","page":"Repeated measures","title":"Fatigue","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Fatigue)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"rellength: relative crack length [dimensionless]\npath: test path (i.e. test unit) identifier\ncycles: number of test cycles at which the measurement was made (millions of cycles)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"These relative length of cracks in metal for 21 test units. An initial notch of length 0.90 inches was made on each unit which then was subjected to several thousand test cycles. After every 10,000 test cycles the crack length was measured. Testing was stopped if the crack length exceeded 1.60 inches, defined as a failure, or at 120,000 cycles.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Source: These data are given in Lu and Meeker (1993) where they state ``We obtained the data in Table 1 visually from figure 4.5.2 on page 242 of Bogdanoff and Kozin (1985).''","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Lu, C. Joséph , and Meeker, William Q. (1993), Using degradation measures to estimate a time-to-failure distribution, Technometrics, 35, 161-174","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"This plot shows the data from 3 of the 21 test units.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"let datsub = filter(:path => in([\"10\", \"15\", \"20\"]), DataFrame(dataset(:Fatigue)))\n    data(datsub) *\n        mapping(\n            :cycles => \"Test cycles (millions)\",\n            :rellength => \"Relative crack length\",\n            col = :path,\n        ) * (visual(Lines) + visual(Scatter)) |> draw\nend","category":"page"},{"location":"repeated/#Gasoline","page":"Repeated measures","title":"Gasoline","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Gasoline)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"yield: percentage of crude oil converted to gasoline after distillation and fractionation\nsample: (inferred) crude oil sample number\nendpoint: temperature at which the gasoline is vaporized [°F]\nvapor: vapor pressure of the crude oil [lbf/in²]\napi: crude oil gravity [° API]\nastm: crude oil 10% point ASTM - the temperature at which 10% of the crude has become vapor.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Refinery yield of gasoline.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Prater (1955) provides data on crude oil properties and gasoline yields. Atkinson (1985) uses these data to illustrate the use of diagnostics in multiple regression analysis. Three of the covariates - api, vapor, and astm - measure characteristics of the crude oil used to produce the gasoline. The other covariate - endpoint - is a characteristic of the refining process. Daniel and Wood (1980) notice that the covariates characterizing the crude oil occur in only ten distinct groups and conclude that the data represent responses measured on ten different crude oil samples.","category":"page"},{"location":"repeated/#Source-5","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Prater, N. H. (1955), Estimate gasoline yields from crudes, Petroleum Refiner, 35 (5).","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Atkinson, A. C. (1985), Plots, Transformations, and Regression, Oxford Press.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Daniel, C. and Wood, F. S. (1980), Fitting Equations to Data, Wiley.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"The data from samples 3 to 6 are shown below","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"data(filter(:sample => in(string.(3:6)), DataFrame(dataset(:Gasoline)))) *\nmapping(\n    :endpoint => \"Temp at which gasoline is vaporized [°F]\",\n    :yield => \"Yield of gasoline after distillation and fractionation [% of crude]\",\n    col = :sample,\n) * (visual(Lines) + visual(Scatter)) |> draw","category":"page"},{"location":"repeated/#Gun","page":"Repeated measures","title":"Gun","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Gun)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"rounds: number of rounds per minute fired\nteam: team loading and firing rounds\nmethod: one of two methods for loading\nphysique: physique of the team","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Data from a comparison of methods for firing naval guns.","category":"page"},{"location":"repeated/#Source-6","page":"Repeated measures","title":"Source","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Hicks (p.180, 1993) reports data from an experiment on methods for firing naval guns. Gunners of three different physiques (slight, average, and heavy) tested two firing methods. Both methods were tested twice by each of nine teams of three gunners with identical physique. The response was the number of rounds fired per minute.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Hicks, C. R. (1993), Fundamental Concepts in the Design of Experiments (4th ed), Harcourt Brace, New York.","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"groupby(DataFrame(dataset(:Gun)), :team)","category":"page"},{"location":"repeated/#Rail","page":"Repeated measures","title":"Rail","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"dataset(:Rail)","category":"page"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"travel: measurements travel time for ultrasonic head-waves in a rail [ns].  The value recorded is the original travel time minus 36,100 ns.\nrail: the rail on which the measurement was made.","category":"page"},{"location":"repeated/#Source:-2","page":"Repeated measures","title":"Source:","text":"","category":"section"},{"location":"repeated/","page":"Repeated measures","title":"Repeated measures","text":"Example 10.10 (p. 427) of Devore, J. L. (2000), Probability and Statistics for Engineering and the Sciences (5th ed), Duxbury.  The original source is an article in Materials Evaluation.","category":"page"}]
}
