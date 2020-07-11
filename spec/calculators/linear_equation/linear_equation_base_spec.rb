require 'matrix'
require 'rails_helper'
require_relative '../../../app/calculators/linear_equation/linear_equation_base'

RSpec.describe 'ValidateTest' do

  it 'is invalid size matrix' do
    base  = LinearEquationBase.new([], [])
    expect(base.is_square_matrix(Matrix[[1,2]])).to eq(false)
  end

  it 'is diagonally dominant matrix' do
    base  = LinearEquationBase.new([], [])
    expect(base.is_diagonally_dominant_matrix(Matrix[[1,0,0],[0,1,0],[0,0,1]])).to eq(true)
  end

  it 'is not diagonally dominant matrix' do
    base  = LinearEquationBase.new([], [])
    expect(base.is_diagonally_dominant_matrix(Matrix[[1,2,3],[4,5,6],[7,8,9]])).to eq(false)
  end

  it 'is invalid matrix size' do
    base  = LinearEquationBase.new([[1,2,3],[4,5,6]], [1,2,3])
    base.validate
    expect(base.is_valid).to eq(false)
  end

  it 'is invalid vector size' do
    base  = LinearEquationBase.new([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,4])
    base.validate
    expect(base.is_valid).to eq(false)
  end

  it 'is invalid matrix mathematically' do
    base  = LinearEquationBase.new([[1,2,3],[4,5,6],[7,8,9]], [1,2,3])
    base.validate
    expect(base.is_valid).to eq(false)
  end

end