```@meta
CurrentModule = NlmeData
```

# NlmeData

Documentation for [NlmeData](https://github.com/dmbates/NlmeData.jl).

This package provides the data sets from the `nlme` package for [`R`](https://www.r-project.org) as [`Arrow`](https://github.com/JuliaData/Arrow.jl)
files.

There are only two functions, `datasets` and `dataset`, defined, but not exported, in this package.
The reason they are not exported is so that the names do not conflict with similar names in other packages.

```@autodocs
Modules = [NlmeData]
```

!!! note "Calling the unexported function names"
    Two idioms to call these unexported function names are either to load the package and use the fully qualified name
    ```
    using NlmeData
    NlmeData.datasets()
    ```
    or to load just the functions and use the unqualified name
    ```
    using NlmeData: dataset, datasets
    datasets()
    ```

The capitalization of the names of the datasets in the R package is preserved, even though it is more common to use lower case names in Julia.

```@example Main
using NlmeData: dataset, datasets
datasets()    # names of available data sets
```

An individual dataset always has a response variable and a grouping factor.
For example, in the `Rail` dataset on the travel times of ultrasonic head-waves in 6 different samples of railway rails
```@example Main
dataset(:Rail)
```
the response is `travel` and the grouping factor is `rail`.

!!! note "Caching of datasets"
    The data sets are cached in `NlmeData.nlmecache` when first read, and retrieved from the cache if already present.
    Thus, the second and subsequent calls to `dataset` for the same name have negligible overhead.

    The caching is done automatically with no user action required.
    If, for some reason, you wish to check the contents of the cache, use
    ```@example Main
    using NlmeData     # to be able to access the cache
    NlmeData.nlmecache
    ```

Frequently there are other covariates recorded.
For example, in a longitudinal data set, one of the covariates will represent the time of the observation.
```@example Main
dataset(:Orange)
```

A convenient way to view an individual dataset is to create a `GroupedDataFrame` with `DataFrames.groupby`.
(`DataFrames` is not a dependency of `NlmeData` - so as to avoid a heavyweight dependency.  You must load it separately.)
```@example Main
using DataFrames
groupby(DataFrame(dataset(:Orange)), :tree)
```
