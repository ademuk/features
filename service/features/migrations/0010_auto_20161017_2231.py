# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-17 21:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('features', '0009_auto_20161016_1229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.CharField(choices=[('adding', 'Adding'), ('added', 'Added'), ('adding_error', 'Adding Error')], default='added', max_length=100),
        ),
    ]