from django.db import models
from django.contrib.auth.models import User

class Quiz(models.Model):
  author = models.ForeignKey(User, on_delete=models.DO_NOTHING)
  title = models.CharField(max_length=255, default='')
  created_at = models.DateTimeField(auto_now_add=True)
  times_taken = models.IntegerField(default=0, editable=False)
  
  @property
  def question_count(self):
    ''' Method to get num of Qs for this quiz, used in Serializer'''
    return self.questions.count()
 
  class Meta:
    verbose_name_plural = "Quizzes"
    ordering = ['id']
  def __str__(self):
    return self.title