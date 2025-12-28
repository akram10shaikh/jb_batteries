from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')


def bike_batteries(request):
    return render(request, 'bike.html')

def car_batteries(request):
    return render(request, 'car.html')

def scooter_batteries(request):
    return render(request, 'scooter.html')

def inverter_batteries(request):
    return render(request, 'inverter.html')

def product_page(request):
    return render(request,'product.html')

def contact(request):
    return render(request,'contact.html')