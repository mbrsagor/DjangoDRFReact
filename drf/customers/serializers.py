from .models import Customer
from rest_framework.serializers import ModelSerializer


class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'username', 'full_name', 'email')
