# Generated by Django 4.0.2 on 2022-04-03 21:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_rename_account_id_scores_account_alter_scores_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='scores',
            name='date',
        ),
    ]
