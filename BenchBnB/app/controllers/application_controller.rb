class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
    @current_user.nil? ? nil : @current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_login
    render 'api/users/show'
  end

end
