module nlmedata

using Pkg.Artifacts
import Arrow

function __init__()
    global Datadir = artifact"Data"
end

cacheddatasets = Dict{String, Arrow.Table}()
"""
    dataset(nm)

Return, as an `Arrow.Table`, the data set named `nm`, which can be a `String` or `Symbol`
"""
function dataset(nm::AbstractString)
    get!(cacheddatasets, nm) do
        path = joinpath(Datadir, nm * ".arrow")
        if !isfile(path)
            throw(ArgumentError(
                "Dataset \"$nm\" is not available.\nUse nlmedata.datasets() for available names."))
        end
        Arrow.Table(path)
    end
end
dataset(nm::Symbol) = dataset(string(nm))

"""
    datasets()

Return a vector of names of the available test data sets
"""
datasets() = first.(Base.Filesystem.splitext.(filter(endswith(".arrow"), readdir(Datadir))))

end
