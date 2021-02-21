from django.db import models

# Create your models here.
class LearningModuleContent(models.Model):
    module = models.CharField(max_length=100, unique=True)
    moduleNum = models.IntegerField()
    lessonNum  = models.IntegerField()
    active_1  = models.CharField(max_length=1000, blank=True)
    active_2 = models.CharField(max_length=1000, blank=True)
    active_3 = models.CharField(max_length=1000, blank=True)
    reflective_1 = models.CharField(max_length=1000, blank=True)
    reflective_2 = models.CharField(max_length=1000, blank=True)
    reflective_3 = models.CharField(max_length=1000, blank=True)
    visual_1 = models.CharField(max_length=1000, blank=True)
    visual_2 = models.CharField(max_length=1000, blank=True)
    visual_3 = models.CharField(max_length=1000, blank=True)
    visual_photo_1 = models.ImageField(upload_to='visual_photos', blank=True)
    visual_photo_2 = models.ImageField(upload_to='visual_photos', blank=True)
    visual_photo_3 = models.ImageField(upload_to='visual_photos', blank=True)
    verbal_1 = models.CharField(max_length=1000, blank=True)
    verbal_2 = models.CharField(max_length=1000, blank=True)
    verbal_3 = models.CharField(max_length=1000, blank=True)
    sensing_1 = models.CharField(max_length=1000, blank=True)
    sensing_2 = models.CharField(max_length=1000, blank=True)
    sensing_3 = models.CharField(max_length=1000, blank=True)
    intuitive_1 = models.CharField(max_length=1000, blank=True)
    intuitive_2 = models.CharField(max_length=1000, blank=True)
    intuitive_3 = models.CharField(max_length=1000, blank=True)
    code_example_1 = models.CharField(max_length=1000, blank=True)
    code_example_2 = models.CharField(max_length=1000, blank=True)
    code_answer_1 = models.CharField(max_length=1000, blank=True)
    code_answer_2 = models.CharField(max_length=1000, blank=True)


class LearningStyleQuestionnaire(models.Model):
    question = models.CharField(max_length=1000)
    option_A = models.CharField(max_length=1000)
    option_B = models.CharField(max_length=1000)