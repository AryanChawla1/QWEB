# Generated by Django 4.0.2 on 2022-04-03 20:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_alter_scores_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scores',
            name='time',
            field=models.DurationField(),
        ),
    ]
