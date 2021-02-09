from rest_framework import viewsets, permissions
from .serializers import UserLearningStyleSerializer
from .models import UserLearningStyle

class UserLearningStyleViewSet(viewsets.ModelViewSet):
    serializer_class = UserLearningStyleSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.userlearningstyle.all()

    def perform_create(self, serializer):
        serializer.save(user_ls=self.request.user)