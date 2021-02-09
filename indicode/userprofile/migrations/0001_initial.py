# Generated by Django 3.1.6 on 2021-02-08 23:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserLearningStyle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active_score', models.IntegerField(verbose_name='Active Score')),
                ('reflective_score', models.IntegerField(verbose_name='Reflective Score')),
                ('sensing_score', models.IntegerField(verbose_name='Sensing Score')),
                ('intuitive_score', models.IntegerField(verbose_name='Intuitive Score')),
                ('visual_score', models.IntegerField(verbose_name='Visual Score')),
                ('verbal_score', models.IntegerField(verbose_name='Verbal Score')),
                ('sequential_score', models.IntegerField(verbose_name='Sequential Score')),
                ('global_score', models.IntegerField(verbose_name='Global Score')),
                ('user_ls', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userlearningstyle', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
