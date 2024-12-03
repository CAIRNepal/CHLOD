from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from .models import Submission, Moderation, ActivityLog, UserProfile

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    else:
        instance.userprofile.save()


# Log when a new submission is created
@receiver(post_save, sender=Submission)
def log_submission_create(sender, instance, created, **kwargs):
    if created:
        ActionDescription = f"Created submission '{instance.title}'"
        ActivityLog.objects.create(
            user=instance.contributor,
            action='add',
            description=ActionDescription
        )
    else:
        ActionDescription = f"Updated submission '{instance.title}'"
        ActivityLog.objects.create(
            user=instance.contributor,
            action='edit',
            description=ActionDescription
        )


# Log when a submission is deleted
@receiver(post_delete, sender=Submission)
def log_submission_delete(sender, instance, **kwargs):
    ActionDescription = f"Deleted submission '{instance.title}'"
    ActivityLog.objects.create(
        user=instance.contributor,
        action='delete',
        description=ActionDescription
    )


# Log when moderation is added/updated
@receiver(post_save, sender=Moderation)
def log_moderation_update(sender, instance, created, **kwargs):
    if created:
        ActionDescription = f"Moderation added for submission '{instance.submission.title}'"
        ActivityLog.objects.create(
            user=instance.moderator,
            action='review',
            description=ActionDescription
        )
    else:
        ActionDescription = f"Moderation updated for submission '{instance.submission.title}'"
        ActivityLog.objects.create(
            user=instance.moderator,
            action='edit',
            description=ActionDescription
        )


# Log when a comment is added in moderation
@receiver(post_save, sender=Moderation)
def log_moderation_comment(sender, instance, **kwargs):
    if instance.comment:
        ActionDescription = f"Commented on submission '{instance.submission.title}'"
        ActivityLog.objects.create(
            user=instance.moderator,
            action='comment',
            description=ActionDescription
        )


# Log when a user's profile is updated
@receiver(post_save, sender=UserProfile)
def log_profile_update(sender, instance, created, **kwargs):
    if created:
        ActionDescription = f"User profile created for '{instance.user.username}'"
        ActivityLog.objects.create(
            user=instance.user,
            action='add',
            description=ActionDescription
        )
    else:
        ActionDescription = f"User profile updated for '{instance.user.username}'"
        ActivityLog.objects.create(
            user=instance.user,
            action='edit',
            description=ActionDescription
        )