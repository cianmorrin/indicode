# Generated by Django 3.1.6 on 2021-02-25 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning', '0013_mcquiz'),
    ]

    operations = [
        migrations.AddField(
            model_name='mcquiz',
            name='moduleNum',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
