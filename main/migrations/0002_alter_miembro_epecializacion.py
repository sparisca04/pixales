# Generated by Django 4.2.5 on 2023-12-11 17:36

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("main", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="miembro",
            name="epecializacion",
            field=models.TextField(max_length=50),
        ),
    ]
