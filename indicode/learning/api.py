from learning.models import LearningModule
from rest_framework import viewsets, permissions
from .serializers import LearningModuleSerializer
from .models import LearningModule

# Learning Viewset
class LearningViewSet(viewsets.ModelViewSet):
    queryset = LearningModule.objects.all()
    serializer_class = LearningModuleSerializer
    permission_classes = [permissions.IsAuthenticated]