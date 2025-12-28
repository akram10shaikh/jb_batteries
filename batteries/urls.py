from django.urls import path, include
from batteries.views import *

urlpatterns = [
    path('',index,name='index'),
    path('bike/', bike_batteries, name='bike'),
    path('car/', car_batteries, name='car'),
    path('scooter/', scooter_batteries, name='scooter'),
    path('inverter/', inverter_batteries, name='inverter'),
    path('product/',product_page,name='product'),
    path('contact/',contact,name='contact'),
    path('bike-detail/',bike_detail,name='bike_detail'),
    path('scooter-ultra/',scooter_ultra,name='scooter_ultra'),
    path('scooter_pro/',scooter_pro,name='scooter_pro'),
    path('inverte/',inverter_basic,name='inverter_basic'),
    path('inverte-pro/',inverter_pro,name='inverter_pro'),
    path('inverte-ultra/',inverter_ultra,name='inverter_ultra'),

]

