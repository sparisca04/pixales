# Generated by Django 4.2.5 on 2023-12-11 17:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0002_alter_miembro_epecializacion"),
    ]

    operations = [
        migrations.AlterField(
            model_name="miembro",
            name="empresas",
            field=models.TextField(max_length=100),
        ),
        migrations.AlterField(
            model_name="miembro",
            name="epecializacion",
            field=models.TextField(max_length=100),
        ),
    ]
