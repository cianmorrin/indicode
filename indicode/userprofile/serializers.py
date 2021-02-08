from rest_framework import serializers
from .models import UserLearningStyle

# User Learning Style Serializer
class UserLearningStyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLearningStyle
        fields = '__all__'