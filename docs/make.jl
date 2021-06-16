using NlmeData
using Documenter

DocMeta.setdocmeta!(NlmeData, :DocTestSetup, :(using NlmeData); recursive=true)

makedocs(;
    modules=[NlmeData],
    authors="Douglas Bates <dmbates@gmail.com> and contributors",
    repo="https://github.com/dmbates/NlmeData.jl/blob/{commit}{path}#{line}",
    doctest = true,
    sitename="NlmeData.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://dmbates.github.io/NlmeData.jl",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Repeated measures" => "repeated.md",
        "Longitudinal data sets" => "longitudinal.md"
    ],
)

deploydocs(;
    repo="github.com/dmbates/NlmeData.jl",
    devbranch = "main",
    push_preview = true,
)
