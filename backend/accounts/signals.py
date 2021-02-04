from django.db.models.signals import post_save
from django.contrib.auth.models import UserAccount
from django.dispatch import receiver
from .models import Profile


@receiver(post_save, sender=UserAccount)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=UserAccount)
def manage_user_profile(sender, instance, created, **kwargs):
    try:
        my_profile = instance.profile
        my_profile.save()
    except Profile.DoesNotExist:
        Profile.objects.create(user=instance)