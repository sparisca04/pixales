from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('conocenos/', views.conocenos, name='Conocenos'),
    path('servicios', views.servicios, name="Servicios"),
    path('casos_de_exito/', views.casosDeExito, name='Casos_de_Exito'),
    path('contactanos/', views.contactanos, name='contactanos'),
]