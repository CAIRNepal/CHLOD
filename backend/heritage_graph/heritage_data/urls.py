from django.urls import path
from .views import SubmissionCreateView, SubmissionListView, ModerationReviewView
from .views import CustomUserMeView
from .views import ActivityLogView

urlpatterns = [
    path('submissions/', SubmissionListView.as_view(), name='submission-list'),  # Publicly visible list
    path('submissions/create/', SubmissionCreateView.as_view(), name='submission-create'),  # Contributor form
    path('moderation/<int:pk>/', ModerationReviewView.as_view(), name='moderation-review'),  # Moderator review
    path('auth/users/me/', CustomUserMeView.as_view(), name='user-me'),
    path('activity-logs/', ActivityLogView.as_view(), name='activity-logs'),

]
