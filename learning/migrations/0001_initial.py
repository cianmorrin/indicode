# Generated by Django 3.1.6 on 2021-02-07 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LearningModule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module', models.CharField(max_length=100, unique=True)),
                ('ed_content', models.CharField(max_length=1000)),
            ],
        ),
    ]
