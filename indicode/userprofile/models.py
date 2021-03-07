from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserLearningStyle(models.Model):
    user_ls = models.ForeignKey(User, related_name="userlearningstyle", on_delete=models.CASCADE, null=True)
    completed_questionnaire = models.BooleanField(default=False)
    active_score = models.IntegerField('Active Score')
    reflective_score = models.IntegerField('Reflective Score')  
    sensing_score = models.IntegerField('Sensing Score')
    intuitive_score = models.IntegerField('Intuitive Score')
    visual_score = models.IntegerField('Visual Score')
    verbal_score = models.IntegerField('Verbal Score')
    sequential_score = models.IntegerField('Sequential Score')
    global_score = models.IntegerField('Global Score')
    act_or_ref = models.CharField(max_length=10, blank=True)
    sen_or_int = models.CharField(max_length=10, blank=True)
    vis_or_verb = models.CharField(max_length=10, blank=True)
    seq_or_glob = models.CharField(max_length=10, blank=True)


class QuizResults(models.Model):
    user_quizres = models.ForeignKey(User, related_name="mcquizresults", on_delete=models.CASCADE, null=True)
    quiz_no = models.IntegerField()
    score = models.IntegerField()
    trophy = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)
    streak = models.IntegerField(default=0)

# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     streak = models.IntegerField()