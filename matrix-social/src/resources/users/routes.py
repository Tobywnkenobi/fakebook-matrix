from flask.views import MethodView
from flask_smorest import abort
from sqlalchemy.exc import IntegrityError

from schemas import PostSchema, UpdateUserSchema, UserSchema, DeleteUserSchema, UserSchemaNested
from . import bp
from .models import UserModel

@bp.route('/user')
class UserList(MethodView):  
  
  @bp.response(200, UserSchema(many = True))
  def get(self):
    users = UserModel.query.all()
    return users
  
  # @jwt_required()
  # @bp.arguments(AuthUserSchema)
  # def delete(self, user_data):
  #   user_id = get__jwt

  @bp.arguments(UserSchema)
  @bp.response(201, UserSchema)
  def post(self, user_data):
    user = UserModel()
    user.from_dict(user_data)
    try:
      user.save()
      return user_data
    except IntegrityError:
      abort(400, message='Username or Email already Taken')

  @bp.arguments(DeleteUserSchema)
  def delete(self, user_data):
    user = UserModel.query.filter_by(username=user_data['username']).first()
    if user and user.check_password(user_data['password']):
      user.delete()
      return {'message':f'{user_data["username"]} deleted'}, 202
    abort(400, message='Username or Password Invalid')

@bp.route('/user/<user_id>')
class User(MethodView):

  @bp.response(200, UserSchemaNested)
  def get(self, user_id):
    user = UserModel.query.get_or_404(user_id, description='User Not Found')
    return user

  @bp.arguments(UpdateUserSchema)
  @bp.response(202, UserSchema)
  def put(self, user_data, user_id):
    user = UserModel.query.get_or_404(user_id, description='User Not Found')
    if user and user.check_password(user_data['password']):
      try:
        user.from_dict(user_data)
        user.save()
        return user
      except IntegrityError:
        abort(400, message='Username or Email already Taken')


@bp.route('/user/follow/<follower_id>/<followed_id>')
class FollowUser(MethodView):
  
  @bp.response(200, UserSchema(many=True))
  def post(self, follower_id, followed_id):
    user = UserModel.query.get(follower_id)
    user_to_follow = UserModel.query.get(followed_id)
    if user and user_to_follow:
      user.follow_user(user_to_follow)
      return user.followed.all()
    abort(400, message='Invalid user info')

  def put(self, follower_id, followed_id):
    user = UserModel.query.get(follower_id)
    user_to_unfollow = UserModel.query.get(followed_id)
    if user and user_to_unfollow:
      user.unfollow_user(user_to_unfollow)
      return {'message': f'User: {user_to_unfollow.username} unfollowed'}, 202
    abort(400, message='Invalid user info')  