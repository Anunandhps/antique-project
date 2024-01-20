from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework import filters
from django.conf import settings
from datetime import date
from .models import customer,login,item,booking
from antiqueapp.serializers import customerserializers,loginserializers,itemserializers,bookingserializer

# Create your views here.





class customerregisterAPIView(GenericAPIView):
    serializers_class = customerserializers
    serializers_class_login = loginserializers 
    def post(self,request):
        
        login_id=''

        fullname=request.data.get("fullname")
        username=request.data.get("username")
        email=request.data.get("email")
        phone=request.data.get("phone")
        password=request.data.get("password")
        confirmpassword=request.data.get("confirmpassword")
        role="customer"
        


        if (login.objects.filter(username=username)):
            return Response({'message' : 'duplicate username found'},status.HTTP_400_BAD_REQUEST)
        
        elif(password!=confirmpassword):
            return Response({'message' : 'password is wrong'},status.HTTP_400_BAD_REQUEST)
    
        else:
            serializers_login = self.serializers_class_login(data={'username' : username,'password' : password, 'role' : role})

        if serializers_login.is_valid():
            Log = serializers_login.save()
            login_id = Log.id
            print(login_id)
        serializers = self.serializers_class(
            data = {
                'fullname': fullname,
                'username': username,
                'email': email,
                'phone': phone,
                'password': password,
                'confirmpassword': confirmpassword,
                'login':login_id,
                
                



            }
            
        )

        print(serializers)
        if serializers.is_valid():
            print("hi")
            # sentmail()
            serializers.save()
            return Response({'data':serializers.data,'message' : 'registration succesful','success': True},status =status.HTTP_201_CREATED)
        return Response({'data':serializers.errors,'message':'registration failed','success':False},status=status.HTTP_400_BAD_REQUEST)



class customerview(GenericAPIView):
    serializer_class = customerserializers
    def get(self,request):
        queryset = customer.objects.all()
        if(queryset.count()>0):
            serializers = customerserializers(queryset,many= True)

            return Response({'data': serializers.data, 'message': 'all  data set', 'success': True}, status= status.HTTP_200_OK)
        else:
            return Response({'data':'non data available','success': False}, status= status.HTTP_201_CREATED)








class loginAPIView(GenericAPIView):
    serializer_class = loginserializers
    def post (self,request):
        u_id= ''
        username = request.data.get('username')
        password = request.data.get('password')
        print(username)
        print(password)
        logreg=login.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serializers = loginserializers(logreg, many=True)
            for i in read_serializers.data:
                id=i['id']
                role=i['role']
                print(id)
                regdata = customer.objects.all().filter(login = id).values()
                print(regdata)

                for i in regdata:
                    u_id = i['id']
                    name = i['username']
                 
                    print(u_id)




    
        

            return Response({
                'data':{


                    'userid':u_id,
                    'login_id':id,
                    'username':username,
                    'password':password,
                    'role':role
                    
                }
            })           

        else:
            return Response({'message':'username is invalid','success':'false' },status=status.HTTP_400_BAD_REQUEST)          
        


class additem(GenericAPIView):
    serializer_class=itemserializers


    def post(self,request):
        image=request.data.get("image")
        name=request.data.get("name")
        price=request.data.get("price")
        description=request.data.get("description")
        category=request.data.get("category")
       



        serializer=self.serializer_class(data={'image':image,'name':name,'price':price,'description':description, 'category':category })
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'item was added susccesfully','success':'1'},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'adding item was failed','success':'0'},status=status.HTTP_400_BAD_REQUEST)            


class allitemview(GenericAPIView):
    serializer_class=itemserializers
    def get(self,request):
        queryset=item.objects.all()
        if(queryset.count()>0):
            serializer=itemserializers(queryset,many=True)
            return Response({'data':serializer.data,'message':'all item data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    



class singleitemview(GenericAPIView):
    def get(self,request,id):
        queryset = item.objects.get(pk=id)
        serializers = itemserializers(queryset)
        return Response({'data': serializers.data, 'message': 'single item data', 'success': True}, status= status.HTTP_200_OK)


class deletesingleitem(GenericAPIView):
    def delete(self, request, id): 
        delmember = item.objects.get(pk=id)
        delmember.delete()
        return Response({'message':'Deleted successfully', 'success':True}, status=status.HTTP_200_OK)

class updatesingleitem(GenericAPIView):
    serializers_class=itemserializers
    def put(self,request,id):
        queryset = item.objects.get(pk=id)
        print(queryset)
        serializers = itemserializers(instance = queryset,data=request.data,partial= True)
        print(serializers)
        if serializers.is_valid():
            serializers.save()
            return Response({'data':serializers.data,'message':'updated succesfully','success':True},status = status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','success': False},status = status.HTTP_400_BAD_REQUEST)






class paintingview(GenericAPIView): 
    serializer_class = itemserializers

    def get(self, request):
        queryset = item.objects.filter(category='Paintings')

        if queryset.exists():
            serializer = itemserializers(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Items categorized by paintings', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No items found for category painting', 'success': 0}, status=status.HTTP_404_NOT_FOUND)



class paintingview(GenericAPIView):
    serializer_class = itemserializers

    def get(self, request):
        queryset = item.objects.filter(category='Paintings')

        if queryset.exists():
            serializer = itemserializers(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Items categorized by paintings', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No items found for category painting', 'success': 0}, status=status.HTTP_404_NOT_FOUND)


class jewelryview(GenericAPIView):
    serializer_class = itemserializers

    def get(self, request):
        queryset = item.objects.filter(category='Jewelry')

        if queryset.exists():
            serializer = itemserializers(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Items categorized by Jewelry', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No items found for category Jewelry', 'success': 0}, status=status.HTTP_404_NOT_FOUND)


class decorview(GenericAPIView):
    serializer_class = itemserializers

    def get(self, request):
        queryset = item.objects.filter(category='Decorative')

        if queryset.exists():
            serializer = itemserializers(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Items categorized by Decorative', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No items found for category Decorative', 'success': 0}, status=status.HTTP_404_NOT_FOUND)


class instrumentview(GenericAPIView):
    serializer_class = itemserializers

    def get(self, request):
        queryset = item.objects.filter(category='Instruments')

        if queryset.exists():
            serializer = itemserializers(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Items categorized by Instrument', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No items found for category Instrument', 'success': 0}, status=status.HTTP_404_NOT_FOUND)



class TotalCustomersView(GenericAPIView):
    def get(self, request, format=None):
        total_customers = customer.get_total_customers()
        return Response({ total_customers}, status=status.HTTP_200_OK)

class TotalitemsView(GenericAPIView):
    def get(self, request, format=None):
        total_items = item.get_total_items()
        return Response({ total_items}, status=status.HTTP_200_OK)



#   ---------------------------Booking---------------------------------


class bookingAPIView(GenericAPIView):
    serializer_class = bookingserializer

    def post(self, request):
        

        
        userid = request.data.get('userid')
        itemo=request.data.get('itemid')
        booking_date = str(date.today())
        print(item)
        
        bookingstatus="0"
        
        bookings = booking.objects.filter(userid=userid, itemid=itemo)
        if bookings.exists():
            return Response({'message':'Item is already in cart','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            data=item.objects.all().filter(id=itemo).values()
            for i in data:
                # print(i)
                name=i['name']
                price=i['price']
                description=i['description']




                data2=customer.objects.all().filter(id=userid).values()
                for i in data2:
                    print(i)
                    username=i['username']
                    uphone=i['phone']
                




                items = item.objects.get(id=itemo)
                item_image =items.image
                print(item_image)
                    


                serializer = self.serializer_class(data= {'username':username,'phone':uphone,'userid':userid,'itemid':itemo,'price':price,'name':name,'image':item_image,'booking_date':booking_date,'description':description,'bookingstatus':bookingstatus})
                print(serializer)
                
                if serializer.is_valid():           
                    print("hi")
                    serializer.save()
                    return Response({'data':serializer.data,'message':'booking added successfully', 'success':True}, status = status.HTTP_201_CREATED)

                return Response({'data':serializer.errors,'message':'Invalid','success':False}, status=status.HTTP_400_BAD_REQUEST)




# class bookingAPIView(GenericAPIView):
#     serializer_class = bookingserializer

#     def post(self, request):
#         userid = request.data.get('userid')
#         item_id = request.data.get('itemid')
#         booking_date = str(date.today())

#         bookingstatus = "0"

#         bookings = booking.objects.filter(userid=userid, itemid=item_id)
#         if bookings.exists():
#             return Response({'message': 'Item is already in the cart', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

#         try:
#             selected_item = item.objects.get(id=item_id)
#         except Item.DoesNotExist:
#             raise Http404("Item not found")

#         serializer = self.serializer_class(data={
#             'username': username,
#             'phone': phone,
#             'userid': userid,
#             'itemid': item_id,
#             'price': selected_item.price,
#             'name': selected_item.name,
#             'image': selected_item.image,
#             'booking_date': booking_date,
#             'description': selected_item.description,
#             'bookingstatus': bookingstatus
#         })

#         if serializer.is_valid():
#             serializer.save()
#             return Response({'data': serializer.data, 'message': 'Booking added successfully', 'success': True},
#                             status=status.HTTP_201_CREATED)

#         return Response({'data': serializer.errors, 'message': 'Invalid', 'success': False},
#                         status=status.HTTP_400_BAD_REQUEST)