# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-29 22:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cjangoApp', '0007_auto_20180129_2221'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saved_libs',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='user_submission',
            name='created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
