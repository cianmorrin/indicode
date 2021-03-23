from django.test import TestCase
from learning.models import LearningModuleContent, LearningStyleQuestionnaire, MCQuiz

class LearningStyleQuestionnaireTestCase(TestCase):
    def setUp(self):
        LearningStyleQuestionnaire.objects.create(question="testQuestion1", option_A="testAnswer1A", option_B="testAnswer1B")
        LearningStyleQuestionnaire.objects.create(question="testQuestion2", option_A="testAnswer2A", option_B="testAnswer2B")

    def test_save_model(self):
        saved_models = LearningStyleQuestionnaire.objects.count()
        self.assertEqual(saved_models, 2)

class LearningModuleContentTestCase(TestCase):
    def setUp(self):
        LearningModuleContent.objects.create(module = "moduleTest1", moduleNum = 1, lessonNum  = 1, sub_module =  "submoduleTest1")
        LearningModuleContent.objects.create(module = "moduleTest2", moduleNum = 2, lessonNum  = 1, sub_module =  "submoduleTest2")
        LearningModuleContent.objects.create(module = "moduleTest3", moduleNum = 3, lessonNum  = 1, sub_module =  "submoduleTest3")

    def test_save_model(self):
        saved_models = LearningModuleContent.objects.count()
        self.assertEqual(saved_models, 3)
        

class MCQuizTestCase(TestCase):
    def setUp(self):
        MCQuiz.objects.create(moduleNum = 1, question =  "testQuestion1", option_A="optionA_Answer1", option_B="optionB_Answer1", option_C="optionC_Answer1", option_D="optionD_Answer1", correct="testAnswer1")
        MCQuiz.objects.create(moduleNum = 2, question =  "testQuestion2", option_A="optionA_Answer2", option_B="optionB_Answer2", option_C="optionC_Answer2", option_D="optionD_Answer2", correct="testAnswer2")

    def test_save_model(self):
        saved_models = MCQuiz.objects.count()
        self.assertEqual(saved_models, 2)