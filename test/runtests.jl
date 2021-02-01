using nlmedata
using Test

@testset "nlmedata.jl" begin
    ds = nlmedata.datasets()
    @test length(ds) == 48
    @test eltype(ds) == String
    oxboys = nlmedata.dataset(:Oxboys)
    @test length(oxboys) == 4
    @test keys(oxboys) == [:subject, :age, :height, :occasion]
    @test eltype(oxboys.age) == Float64
end
