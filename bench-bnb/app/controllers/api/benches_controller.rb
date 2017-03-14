class Api::BenchesController < ApplicationController
  def index
    if (params[:bounds])
      # byebug
      @benches = Bench.in_bounds(params[:bounds])
    else
      @benches = Bench.all
    end

    @benches = @benches.select do |bench|
      if params[:maxSeating]
        next if bench.seating > params[:maxSeating].to_i
      end

      if params[:minSeating]
        next if bench.seating < params[:minSeating].to_i
      end
      true
    end
    # byebug
    render :index
  end

  def create
    @bench = Bench.new(benches_params)
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private
  def benches_params
    params.require(:bench).permit(:description, :seating, :lat, :lng)
  end
end
