# Generated by Django 3.1.6 on 2021-02-25 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0014_mcquiz_modulenum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mcquiz',
            name='option_A',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='mcquiz',
            name='option_B',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='mcquiz',
            name='option_C',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='mcquiz',
            name='option_D',
            field=models.TextField(blank=True),
        ),
    ]
