from __future__ import absolute_import
import time
import json

from celery import shared_task

from channels import Group

from .models import Project


@shared_task
def import_features_from_git_repo(project_id):
    project = Project.objects.get(pk=project_id)

    print('%s - Importing features from: %s' % (project.name, project.git_repo_url))

    time.sleep(2)

    project.set_as_added()
    project.save()

    print('import_features_from_git_repo: %s' % project.id)

    Group('project-%d' % project.id).send({
        'text': json.dumps({
            'status': 'added'
        })
    })
