# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-04 23:53
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('features', '0003_auto_20161004_2238'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feature',
            name='body',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='feature',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='features', to='features.Project'),
        ),
        migrations.AlterField(
            model_name='project',
            name='users',
            field=models.ManyToManyField(blank=True, related_name='projects', to=settings.AUTH_USER_MODEL),
        ),
    ]