from rest_framework import viewsets, permissions
from .serializers import UserLearningStyleSerializer
from .models import UserLearningStyle

class UserLearningStyleViewSet(viewsets.ModelViewSet):
    queryset = UserLearningStyle.objects.all()
    serializer_class = UserLearningStyleSerializer
    permission_classes = [permissions.IsAuthenticated]