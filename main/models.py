from django.db import models

# Create your models here.
class Miembro(models.Model):
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(null=True, max_length=30)
    foto = models.ImageField(null=True, blank=True, upload_to='Equipo')
    experiencia = models.TextField(max_length=30)
    pais = models.CharField(max_length=30)
    epecializacion = models.TextField(max_length=100)
    empresas = models.TextField(max_length=100)

    def __str__(self):
        return self.nombre + " " + self.apellido

class CasoDeExito(models.Model):
    nombre = models.CharField(max_length=30)
    imagen = models.ImageField(null=True, blank=True, upload_to='Casos de exito')
    ubicacion = models.TextField(null=True, max_length=50)
    situacion = models.TextField(max_length=450)
    servicio = models.TextField(max_length=100)
    resultados = models.TextField(max_length=450)

    def __str__(self):
        return self.nombre
    
class Servicio(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion1 = models.CharField(max_length=30)
    descripcion2 = models.CharField(max_length=30, null=True)
    descripcion3 = models.CharField(max_length=30, null=True)
    
    def __str__(self):
        return self.nombre