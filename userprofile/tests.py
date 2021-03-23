from django.test import TestCase
from .models import UserLearningStyle, QuizResults
from django.contrib.auth.models import User

class UserLearningStyleTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testUsername', email='test@mail.com', password='test_Pass')
        UserLearningStyle.objects.create(user_ls=self.user, completed_questionnaire=True, active_score=9, reflective_score=2, sensing_score=10, intuitive_score=1, visual_score=1, verbal_score=10, sequential_score=6, global_score=5)

    def test_save_model(self):
        saved_models = UserLearningStyle.objects.count()
        self.assertEqual(saved_models, 1)

class QuizResultsTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testUsername2', email='test2@mail.com', password='test2_Pass')
        QuizResults.objects.create(user_quizres=self.user, quiz_no=1, score=4, trophy=True, streak=2)

    def test_save_model(self):
        saved_models = QuizResults.objects.count()
        self.assertEqual(saved_models, 1)
