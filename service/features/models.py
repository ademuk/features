from __future__ import unicode_literals
import json
import subprocess

from django.db import models

from channels import Group


def git(*args):
    return subprocess.call(['git'] + list(args))


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

    def import_features_from_git(self):
        repo_path = 'repo-project-%d' % self.id
        git("clone", self.git_repo_url, repo_path)

        import os
        for root, dirs, files in os.walk("./%s" % repo_path):
            for file in files:
                if file.endswith(".feature"):
                    print(os.path.join(root, file))

        self.status = Project.STATUS_ADDED
        self.save()

        Group('project-%d' % self.id).send({
            'text': json.dumps({
                'status': self.status
            })
        })

    def __str__(self):
        return self.name


class Feature(models.Model):
    project = models.ForeignKey(Project, related_name='features')
    name = models.CharField(max_length=255)
    body = models.TextField(blank=True)

    def __str__(self):
        return self.name