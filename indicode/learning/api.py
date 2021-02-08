from rest_framework import viewsets, permissions
from .serializers import LearningModuleSerializer, LearningStyleQuestionnaireSerializer
from .models import LearningModule, LearningStyleQuestionnaire

# Learning Viewset
class LearningViewSet(viewsets.ModelViewSet):
    queryset = LearningModule.objects.all()
    serializer_class = LearningModuleSerializer
    permission_classes = [permissions.IsAuthenticated]

# LearningStyleQuestionnaire Viewset
class LearningStyleQuestionnaireViewSet(viewsets.ModelViewSet):
    queryset = LearningStyleQuestionnaire.objects.all()
    serializer_class = LearningStyleQuestionnaireSerializer
    permission_classes = [permissions.IsAuthenticated]