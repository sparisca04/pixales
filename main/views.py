from django.http import HttpResponse,JsonResponse
from django.shortcuts import render, get_object_or_404

# Create your views here.

def home(request):
    return render(request, "main/Home.html")

def conocenos(request):
    return render(request, "main/Conocenos.html")

def servicios(request):
    return render(request, "main/Servicios.html")

def casosDeExito(request):
    return render(request, "main/Casos_de_Exito.html")

def contactanos(request):
    return render(request, "main/contactanos.html")