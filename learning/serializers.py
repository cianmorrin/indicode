from rest_framework import serializers
from learning.models import LearningModuleContent, LearningStyleQuestionnaire, MCQuiz

# Learning Serializer
class LearningModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningModuleContent
        fields = '__all__'

# Learning Serializer
class LearningStyleQuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningStyleQuestionnaire
        fields = '__all__'

# Learning Serializer
class MCQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCQuiz
        fields = '__all__'