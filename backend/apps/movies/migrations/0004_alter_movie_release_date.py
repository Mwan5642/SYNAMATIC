# Generated by Django 3.2.4 on 2021-11-19 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_auto_20211119_1507'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.CharField(max_length=10, verbose_name='release date'),
        ),
    ]