from rest_framework import routers
from .api import UserLearningStyleViewSet, QuizResultsViewSet

router = routers.DefaultRouter()
router.register('api/user/learningstyle', UserLearningStyleViewSet, 'userlearningstyle')
router.register('api/user/quizresults', QuizResultsViewSet, 'mcquizresults')

urlpatterns = router.urls

