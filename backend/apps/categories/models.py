from django.db import models

# Create your models here.
class Category(models.Model):
    class Meta(object):
        db_table = 'category'
    name = models.CharField(
        'name', blank=False, null=False, max_length=50
    )
    def __str__(self):
        return self.name