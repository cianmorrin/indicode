# Generated by Django 3.1.6 on 2021-02-07 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LearningStyleQuestionnaire',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=1000)),
                ('option_A', models.CharField(max_length=1000)),
                ('option_B', models.CharField(max_length=1000)),
            ],
        ),
    ]
