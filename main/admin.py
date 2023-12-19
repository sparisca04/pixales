from django.contrib import admin
from .models import Miembro, CasoDeExito, Servicio

# Register your models here.

admin.site.register(Miembro)
admin.site.register(CasoDeExito)
admin.site.register(Servicio)