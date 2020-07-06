require 'rails_helper'

RSpec.describe 'JacobiMethodLinearEquationAPI', type: :request do

  let :headers do { "Content-Type": "application/json" } end

  it 'is valid matrix' do
    valid_params = {
        size: 3.to_d,
        matrix: [[3,1,1],[1,3,1],[1,1,3]],
        b: [1,2,3]
    }.to_json

    post '/api/v1/linear_equation/jacobi_method',
         params: valid_params, headers: headers

    expect(JSON.parse(response.body)['status']).to eq('SUCCESS')
    expect(response.status).to eq(200)
  end

  it 'is invalid matrix' do
    valid_params = {
        size: 3.to_d,
        matrix: [[1,3,3],[3,1,3],[3,3,1]],
        b: [1,2,3]
    }.to_json

    post '/api/v1/linear_equation/jacobi_method',
         params: valid_params, headers: headers

    expect(JSON.parse(response.body)['status']).to eq('FAILURE')
    expect(response.status).to eq(200)
  end

  it 'is invalid matrix size' do
    valid_params = {
        size: 3.to_d,
        matrix: [[1,3,3,3],[3,1,3,3],[3,3,1,3]],
        b: [1,2,3]
    }.to_json

    post '/api/v1/linear_equation/jacobi_method',
         params: valid_params, headers: headers

    expect(JSON.parse(response.body)['status']).to eq('FAILURE')
    expect(response.status).to eq(200)
  end

  it 'is invalid vector size' do
    valid_params = {
        size: 3.to_d,
        matrix: [[1,3,3],[3,1,3],[3,3,1]],
        b: [1,2,3,4]
    }.to_json

    post '/api/v1/linear_equation/jacobi_method',
         params: valid_params, headers: headers

    expect(JSON.parse(response.body)['status']).to eq('FAILURE')
    expect(response.status).to eq(200)
  end
end