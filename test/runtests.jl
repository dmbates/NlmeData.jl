using NlmeData: dataset, datasets
using Test

@testset "NlmeData" begin
    ds = datasets()
    @test length(ds) == 48
    @test eltype(ds) == String
    oxboys = dataset(:Oxboys)
    @test length(oxboys) == 4
    @test keys(oxboys) == [:subject, :age, :height, :occasion]
    @test eltype(oxboys.age) == Float64
end
