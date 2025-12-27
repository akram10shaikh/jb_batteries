from django.urls import path, include
from batteries.views import *

urlpatterns = [
    path('',index,name='index'),
    path('bike/', bike_batteries, name='bike'),
    path('car/', car_batteries, name='car'),
    path('scooter/', scooter_batteries, name='scooter'),
    path('inverter/', inverter_batteries, name='inverter'),
]

