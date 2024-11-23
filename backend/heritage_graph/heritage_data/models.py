from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Submission(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('review', 'Review'), 
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    contributor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='submissions')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"

class Moderation(models.Model):
    submission = models.OneToOneField(Submission, on_delete=models.CASCADE, related_name='moderation')
    moderator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='moderated_items')
    comment = models.TextField(blank=True)
    reviewed_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        moderator_name = self.moderator.username if self.moderator else "No Moderator"
        return f"Moderation for {self.submission.title} by {moderator_name}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    organization = models.CharField(max_length=255, blank=True, null=True)
    score = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username