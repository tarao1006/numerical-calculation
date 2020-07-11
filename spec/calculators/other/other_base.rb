require 'matrix'
require 'rails_helper'
require_relative '../../../app/calculators/other/other_base'

RSpec.describe 'ValidateTest' do

  it 'is invalid size matrix' do
    base  = OtherBase.new([], [])
    expect(base.is_square_matrix(Matrix[[1,2]])).to eq(false)
  end

  it 'is invalid matrix size' do
    base  = OtherBase.new([[1,2,3],[4,5,6]], [1,2,3])
    base.validate
    expect(base.is_valid).to eq(false)
  end

  it 'is invalid vector size' do
    base  = OtherBase.new([[1,2,3],[4,5,6],[7,8,9]], [1,2,3,4])
    base.validate
    expect(base.is_valid).to eq(false)
  end
end
