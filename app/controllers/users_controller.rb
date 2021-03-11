class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :login]
  # before_action :authorize_request
  before_action :authorize_request, only:[:destroy, :update, :login]

  # GET /users or /users.json
  def index
    @users = User.all
    render json: @users.as_json(),status: :ok
  end

  # GET /users/1 or /users/1.json
  def show
    render json: @user.as_json(),status: :ok
  end
  
  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end


  # Show posts made by user
  # /users/:id/posts


  # POST /users or /users.json
  def create
    
    @user = User.new(user_params)
    
    if @user.save
      render json: @user, status: :created
      # @token = encode({user_id: @user.id});
      # payload  = { user_id: user.id }
      # session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      # tokens = session.login
      # response.set_cookie(JWTSessions.access_cookie,
      # value: tokens[:access],
      # httponly: true, 
      # secure: Rails.env.production?)

      # render json: tokens
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  # PATCH/PUT /users/1 or /users/1.json
  # def update
  #   respond_to do |format|
  #     if @user.update(user_params)
  #       format.html { redirect_to @user, notice: "User was successfully updated." }
  #       format.json { render :show, status: :ok, location: @user }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @user.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /users/1 or /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: "User was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Confirms the correct user.
    # def correct_user
    #   @user = User.find(params[:id])
    #   redirect_to(root_url) unless current_user?(@user)
    # end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username,
                                  :email, 
                                  :password,
                                  watchlist: []
                                  )
    end
end
