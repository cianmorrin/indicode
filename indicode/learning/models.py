from django.db import models

# Create your models here.
class LearningModule(models.Model):
    module = models.CharField(max_length=100, unique=True)
    ed_content = models.CharField(max_length=1000)

class LearningStyleQuestionnaire(models.Model):
    question = models.CharField(max_length=1000)
    option_A = models.CharField(max_length=1000)
    option_B = models.CharField(max_length=1000)