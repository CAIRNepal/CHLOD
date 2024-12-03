from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Submission, Moderation
from .models import UserProfile
from .models import ActivityLog
from rest_framework.permissions import AllowAny  

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['id', 'title', 'description', 'contributor', 'status', 'created_at']

class ModerationSerializer(serializers.ModelSerializer):
    submission = serializers.PrimaryKeyRelatedField(queryset=Submission.objects.filter(status='pending'))
    class Meta:
        model = Moderation
        fields = ['id', 'submission', 'moderator', 'comment', 'reviewed_at']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['organization', 'score']  

class CustomUserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()  

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile']

class ActivityLogSerializer(serializers.ModelSerializer):
    permission_classes = [AllowAny]  
    user = serializers.StringRelatedField()  

    class Meta:
        model = ActivityLog
        fields = ['user', 'action', 'description', 'timestamp']