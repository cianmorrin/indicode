from rest_framework import routers
from .api import LearningViewSet

router = routers.DefaultRouter()
router.register('api/learning', LearningViewSet, 'learning')

urlpatterns = router.urls