from rest_framework import serializers
from learning.models import LearningModule

# Learning Serializer
class LearningModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningModule
        fields = '__all__'