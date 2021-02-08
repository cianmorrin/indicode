from rest_framework import serializers
from learning.models import LearningModule, LearningStyleQuestionnaire

# Learning Serializer
class LearningModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningModule
        fields = '__all__'

# Learning Serializer
class LearningStyleQuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningStyleQuestionnaire
        fields = '__all__'