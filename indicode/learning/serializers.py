from rest_framework import serializers
from learning.models import LearningModuleContent, LearningStyleQuestionnaire

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