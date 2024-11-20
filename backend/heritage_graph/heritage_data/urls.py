from django.urls import path
from .views import SubmissionCreateView, SubmissionListView, ModerationReviewView

urlpatterns = [
    path('submissions/', SubmissionListView.as_view(), name='submission-list'),  # Publicly visible list
    path('submissions/create/', SubmissionCreateView.as_view(), name='submission-create'),  # Contributor form
    path('moderation/<int:pk>/', ModerationReviewView.as_view(), name='moderation-review'),  # Moderator review
]
