from __future__ import unicode_literals

from django.db import models


class Project(models.Model):
    STATUS_ADDING = 'adding'
    STATUS_ADDED = 'added'
    STATUS_CHOICES = (
        (STATUS_ADDING, 'Adding'),
        (STATUS_ADDED, 'Added'),
    )

    name = models.CharField(max_length=255)
    git_repo_url = models.CharField(max_length=255, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=STATUS_ADDED)
    users = models.ManyToManyField('auth.User', related_name='projects', blank=True)

    def set_as_added(self):
        self.status = Project.STATUS_ADDED

    def __str__(self):
        return self.name


class Feature(models.Model):
    project = models.ForeignKey(Project, related_name='features')
    name = models.CharField(max_length=255)
    body = models.TextField(blank=True)

    def __str__(self):
        return self.name