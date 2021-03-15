from rest_framework import viewsets, permissions
from .serializers import LearningModuleSerializer, LearningStyleQuestionnaireSerializer, MCQuizSerializer
from .models import LearningModuleContent, LearningStyleQuestionnaire, MCQuiz

# Learning Viewset
class LearningViewSet(viewsets.ModelViewSet):
    queryset = LearningModuleContent.objects.all()
    serializer_class = LearningModuleSerializer
    permission_classes = [permissions.IsAuthenticated]

# LearningStyleQuestionnaire Viewset
class LearningStyleQuestionnaireViewSet(viewsets.ModelViewSet):
    queryset = LearningStyleQuestionnaire.objects.all()
    serializer_class = LearningStyleQuestionnaireSerializer
    permission_classes = [permissions.IsAuthenticated]


class MCQuizViewSet(viewsets.ModelViewSet):
    queryset = MCQuiz.objects.all()
    serializer_class = MCQuizSerializer
    permission_classes = [permissions.IsAuthenticated]