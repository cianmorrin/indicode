from django.db import models
from accounts.models import UserAccount

class Quiz(models.Model):
	author = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING)
	title = models.CharField(max_length=255, default='')
	created_at = models.DateTimeField(auto_now_add=True)
	times_taken = models.IntegerField(default=0, editable=False)

	@property
	def question_count(self):
		return self.questions.count()
	
	class Meta:
		verbose_name_plural = "Quizzes"
		ordering = ['id']

	def __str__(self):
		return self.title

class Question(models.Model):
	quiz = models.ForeignKey(
		Quiz, 
		related_name='questions', # need related name for hyper link related field to work ?!?
		on_delete=models.DO_NOTHING
	)
	prompt = models.CharField(max_length=255, default='')

	class Meta:
		ordering = ['id']

	def __str__(self):
		return self.prompt

class Answer(models.Model):
	question = models.ForeignKey(
		Question, 
		related_name='answers', 
		on_delete=models.DO_NOTHING
	)
	text = models.CharField(max_length=255)
	correct = models.BooleanField(default=False)

	def __str__(self):
		return self.text

class Profile(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)
    
    # Returns the string representation of the model.
    def _str_(self):
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

    def _str_(self):
        return self.user_style