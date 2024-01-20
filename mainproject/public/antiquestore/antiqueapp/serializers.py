from rest_framework import serializers
from .models import customer,login,item,booking


class customerserializers(serializers.ModelSerializer):
    class Meta:
        model=customer
        fields='__all__'
    def create (self,validated_data):
        return customer.objects.create(**validated_data)





class loginserializers(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'
    def create (self,validated_data):
        return login.objects.create(**validated_data)

        
class itemserializers(serializers.ModelSerializer):
    class Meta:
        model=item
        fields='__all__'
    def Create (self,validated_data):
        return item.objects.Create(**validated_data)



class bookingserializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields='__all__'
    def Create (self,validated_data):
        return booking.objects.create(**validated_data)     


