from rest_framework import routers
from .api import LearningViewSet, LearningStyleQuestionnaireViewSet, MCQuizViewSet

router = routers.DefaultRouter()
router.register('api/learning/content', LearningViewSet, 'learning')
router.register('api/learning/questionnaire', LearningStyleQuestionnaireViewSet, 'questionnaire')
router.register('api/learning/mcquiz', MCQuizViewSet, 'mcquiz')

urlpatterns = router.urls