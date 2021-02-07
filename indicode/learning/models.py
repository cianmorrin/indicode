from django.db import models

# Create your models here.
class LearningModule(models.Model):
    module = models.CharField(max_length=100, unique=True)
    ed_content = models.CharField(max_length=1000)
