from django.db import models

# Create your models here.



class login(models.Model):
    username = models.CharField(max_length = 50,null = True)
    password = models.CharField(max_length = 50,null = True)
    role = models.CharField(max_length = 50)
    def __str__(self):
         return self.username



class customer(models.Model):
    fullname= models.CharField(max_length = 50,null=True)
    username= models.CharField(max_length = 50,null=True)
    email= models.CharField(max_length = 50,null=True)
    phone= models.CharField(max_length = 50,null=True)
    password= models.CharField(max_length = 50,null=True)
    confirmpassword= models.CharField(max_length = 50,null=True)
    login=models.ForeignKey(login, on_delete=models.CASCADE, related_name='customers')
    def get_total_customers():
        return customer.objects.count()


    def __str__(self):

        return self.fullname



class item(models.Model):
    image=models.ImageField(upload_to='images',null=True,blank=True)
    name=models.CharField(max_length=30,null=True)
    price=models.CharField(max_length=30,null=True)
    description=models.CharField(max_length=100,null=True)
    category=models.CharField(max_length=30,null=True)
    def get_total_items():
        return item.objects.count()
   
    

    def __str__(self):
        return self.name    



class booking(models.Model):
    userid =models.ForeignKey(customer,on_delete=models.CASCADE)
    itemid=models.ForeignKey(item,on_delete=models.CASCADE)
   
    # -------
    username=models.CharField(max_length=30,null=True)
    phone=models.CharField(max_length=30,null=True)
    
    # ------
    image=models.ImageField(upload_to="images",null=True,blank=True)
    name=models.CharField(max_length=30,null=True)
    price=models.CharField(max_length=30,null=True)
    description=models.CharField(max_length=100,null=True)
    quantity=models.CharField(max_length=30,null=True)
    booking_date = models.CharField(max_length=100)  
    bookingstatus=models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.username

