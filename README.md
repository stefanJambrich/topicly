# topicly
Social network, modern design, features from twitter/instagram

# Routes - Default = /api:
  # Auth:
    - Default: '/auth'
      - Login: '/login'
        Needs email, password
      - Register: '/register'
        Needs first name, last name, nickname, email, password
      - Logout: '/logout'
  # Posts:
    - Default: '/post'
      - Get all posts: '/all'
      - New post: '/new'
        Needs title, picture, description, like, userId
      - Edit: '/:postId'
          You can change title, picture, description and like number here
      - Delete: '/:postId'
