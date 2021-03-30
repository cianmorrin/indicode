from django.db import models

# Create your models here.
class LearningModuleContent(models.Model):
    module = models.CharField(max_length=100)
    module_num = models.IntegerField()
    lesson_num  = models.IntegerField()
    learning_style_domain = models.TextField( blank=True)
    learning_style = models.TextField( blank=True)
    style_score  = models.IntegerField()
    sub_module =  models.TextField( blank=True)
    intro_text = models.TextField( blank=True)
    text_1  = models.TextField( blank=True)
    text_2  = models.TextField( blank=True)
    text_3  = models.TextField( blank=True)
    photo_1 = models.ImageField(upload_to='visual_photos', blank=True)
    photo_2 = models.ImageField(upload_to='visual_photos', blank=True)
    photo_3 = models.ImageField(upload_to='visual_photos', blank=True)
    code_example_1  = models.TextField( blank=True)
    code_example_2  = models.TextField( blank=True)
    code_example_3  = models.TextField( blank=True)

class LearningStyleQuestionnaire(models.Model):
    question = models.TextField(max_length=1000)
    option_A = models.TextField(max_length=1000)
    option_B = models.TextField(max_length=1000)


class MCQuiz(models.Model):
    moduleNum = models.IntegerField()
    question = models.TextField(max_length=1000)
    question_1 = models.TextField(max_length=1000, blank=True)
    option_A = models.TextField( blank=True)
    option_A_1 = models.TextField( blank=True)
    option_B = models.TextField( blank=True)
    option_B_1 = models.TextField( blank=True)
    option_C = models.TextField( blank=True)
    option_C_1 = models.TextField( blank=True)
    option_D = models.TextField( blank=True)
    option_D_1 = models.TextField( blank=True)
    correct = models.TextField(max_length=1000)