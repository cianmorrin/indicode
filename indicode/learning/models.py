from django.db import models

# Create your models here.
class LearningModuleContent(models.Model):
    module = models.CharField(max_length=100, unique=True)
    moduleNum = models.IntegerField()
    lessonNum  = models.IntegerField()
    active_1  = models.CharField(max_length=1000)
    active_2 = models.CharField(max_length=1000)
    active_3 = models.CharField(max_length=1000)
    reflective_1 = models.CharField(max_length=1000)
    reflective_2 = models.CharField(max_length=1000)
    reflective_3 = models.CharField(max_length=1000)
    visual_1 = models.CharField(max_length=1000)
    visual_2 = models.CharField(max_length=1000)
    visual_3 = models.CharField(max_length=1000)
    visual_photo_1 = models.ImageField(upload_to='visual_photos', blank=True)
    visual_photo_2 = models.ImageField(upload_to='visual_photos', blank=True)
    visual_photo_3 = models.ImageField(upload_to='visual_photos', blank=True)
    verbal_1 = models.CharField(max_length=1000)
    verbal_2 = models.CharField(max_length=1000)
    verbal_3 = models.CharField(max_length=1000)
    sensing_1 = models.CharField(max_length=1000)
    sensing_2 = models.CharField(max_length=1000)
    sensing_3 = models.CharField(max_length=1000)
    intuitive_1 = models.CharField(max_length=1000)
    intuitive_2 = models.CharField(max_length=1000)
    intuitive_3 = models.CharField(max_length=1000)
    code_example_1 = models.CharField(max_length=1000)
    code_example_2 = models.CharField(max_length=1000)
    code_answer_1 = models.CharField(max_length=1000)
    code_answer_2 = models.CharField(max_length=1000)


class LearningStyleQuestionnaire(models.Model):
    question = models.CharField(max_length=1000)
    option_A = models.CharField(max_length=1000)
    option_B = models.CharField(max_length=1000)