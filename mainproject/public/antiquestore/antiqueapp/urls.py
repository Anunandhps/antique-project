from django.contrib import admin
from django.urls import path,include
from . import views 



urlpatterns = [

     path('customerregisterAPIView', views.customerregisterAPIView.as_view(), name='customerregisterAPIView'),
     path('customerview', views.customerview.as_view(), name='customerview'),
     path('loginAPIView', views.loginAPIView.as_view(), name='loginAPIView'),
     path('additem', views.additem.as_view(), name='additem'),
     path('allitemview', views.allitemview.as_view(), name='allitemview'),
     path('paintingview', views.paintingview.as_view(), name='paintingview'),
     path('jewelryview', views.jewelryview.as_view(), name='jewelryview'),
     path('decorview', views.decorview.as_view(), name='decorview'),
     path('instrumentview', views.instrumentview.as_view(), name='instrumentview'),
     path('singleitemview/<int:id>', views.singleitemview.as_view(), name='singleitemview'),
     path('deletesingleitem/<int:id>', views.deletesingleitem.as_view(), name='deletesingleitem'),
     path('updatesingleitem/<int:id>', views.updatesingleitem.as_view(), name='updatesingleitem'),
     path('TotalCustomersView', views.TotalCustomersView.as_view(), name='TotalCustomersView'),
     path('TotalitemsView', views.TotalitemsView.as_view(), name='TotalitemsView'),
     path('bookingAPIView', views.bookingAPIView.as_view(), name='bookingAPIView'),


]
