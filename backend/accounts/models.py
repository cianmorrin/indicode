from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.dispatch import receiver
from django.db.models.signals import post_save


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name
    
    def get_short_name(self):
        return self.name
    
    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    
    # Returns the string representation of the model.
    def __str__(self):
        return f"{self.user}"

class UserLearningStyle(models.Model):
    user_style = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    active_score = models.IntegerField('Active Score')
    reflective_score = models.IntegerField('Reflective Score')  
    sensing_score = models.IntegerField('Sensing Score')
    intuitive_score = models.IntegerField('Intuitive Score')
    visual_score = models.IntegerField('Visual Score')
    verbal_score = models.IntegerField('Verbal Score')
    sequential_score = models.IntegerField('Sequential Score')
    global_score = models.IntegerField('Global Score')

    def __str__(self):
        return self.user_style