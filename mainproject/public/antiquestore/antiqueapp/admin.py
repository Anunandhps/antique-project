from django.contrib import admin

# Register your models here.
from .models import customer,login,item
admin.site.register(customer)
admin.site.register(login)
admin.site.register(item)