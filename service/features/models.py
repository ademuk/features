from __future__ import unicode_literals

from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=255)
    users = models.ManyToManyField('auth.User', related_name='projects', blank=True)

    def __str__(self):
        return self.name


class Feature(models.Model):
    project = models.ForeignKey(Project, related_name='features')
    name = models.CharField(max_length=255)
    body = models.TextField()

    def __str__(self):
        return self.name