# Generated by Django 4.0.2 on 2022-04-03 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_scores_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scores',
            name='date',
            field=models.DateTimeField(),
        ),
    ]
