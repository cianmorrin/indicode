from rest_framework import serializers
from .models import UserLearningStyle, QuizResults

# User Learning Style Serializer
class UserLearningStyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLearningStyle
        fields = '__all__'

class QuizResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizResults
        fields = '__all__'

# class ProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = '__all__'