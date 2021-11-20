# Generated by Django 3.2.4 on 2021-11-20 00:10

import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=50, verbose_name='Name')),
                ('description', models.TextField(max_length=500, verbose_name='description')),
                ('image', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image')),
                ('image_mobile', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image mobile')),
                ('release_type', models.CharField(choices=[('Newly Released', 'Newly Released'), ('Coming Soon', 'Coming Soon')], max_length=50, verbose_name='release_type')),
                ('rating', models.FloatField(verbose_name='rating')),
                ('release_date', models.IntegerField(max_length=10, verbose_name='release date')),
                ('trailer_link', models.CharField(max_length=500, verbose_name='Trailer Link')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated Datetime')),
                ('category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.category')),
            ],
            options={
                'db_table': 'movie',
            },
        ),
    ]
