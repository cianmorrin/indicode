# Generated by Django 3.1.6 on 2021-02-24 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0009_auto_20210223_1122'),
    ]

    operations = [
        migrations.AddField(
            model_name='learningmodulecontent',
            name='active_1_3',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='learningmodulecontent',
            name='active_2_3',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='learningmodulecontent',
            name='active_3_3',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='learningmodulecontent',
            name='reflective_1_3',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='learningmodulecontent',
            name='reflective_2_3',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='learningmodulecontent',
            name='reflective_3_3',
            field=models.TextField(blank=True),
        ),
    ]
