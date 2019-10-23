from django.db import models

# Create your models here.
class Customer(models.Model):
    username = models.CharField("First name", max_length=255)
    full_name = models.CharField("Last name", max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.username
