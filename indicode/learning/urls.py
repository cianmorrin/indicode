from rest_framework import routers
from .api import LearningViewSet, LearningStyleQuestionnaireViewSet

router = routers.DefaultRouter()
router.register('api/learning/content', LearningViewSet, 'learning')
router.register('api/learning/questionnaire', LearningStyleQuestionnaireViewSet, 'questionnaire')

urlpatterns = router.urls