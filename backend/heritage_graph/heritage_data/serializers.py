from rest_framework import serializers
from .models import Submission, Moderation
from django import forms

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ['id', 'title', 'description', 'contributor', 'status', 'created_at']

class ModerationSerializer(serializers.ModelSerializer):
    submission = serializers.PrimaryKeyRelatedField(queryset=Submission.objects.filter(status='pending'))

    class Meta:
        model = Moderation
        fields = ['id', 'submission', 'moderator', 'comment', 'reviewed_at']
