from rest_framework import routers
from .api import UserLearningStyleViewSet

router = routers.DefaultRouter()
router.register('api/user/learningstyle', UserLearningStyleViewSet, 'userlearningstyle')

urlpatterns = router.urls

