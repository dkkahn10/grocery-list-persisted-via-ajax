class Api::GroceriesController < ApiController
  def index
    groceries = Grocery.all
    render json: { groceries: groceries }, status: :ok
  end

  def create
    grocery = Grocery.new(grocery_params)
    if grocery.save
      render json: { grocery: grocery }, status: :created
    else
      render json: { errors: grocery.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    grocery = Grocery.find(params[:id])
    grocery.destroy
    head :no_content
  end

  private

  def grocery_params
    params.require(:grocery).permit(:name)
  end
end
