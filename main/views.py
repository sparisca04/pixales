from django.http import HttpResponse,JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import Miembro, CasoDeExito, Servicio

# Create your views here.

def home(request):
    return render(request, "main/Home.html")

def conocenos(request):
    miembros = Miembro.objects.all
    return render(request, "main/Conocenos.html", {'miembros': miembros})

def servicios(request):
    servicios = Servicio.objects.all
    return render(request, "main/Servicios.html", {'servicios': servicios})

def casosDeExito(request):
    casosDeExito = CasoDeExito.objects.all
    return render(request, "main/Casos_de_Exito.html", {'casosDeExito': casosDeExito})

def contactanos(request):
    return render(request, "main/contactanos.html")