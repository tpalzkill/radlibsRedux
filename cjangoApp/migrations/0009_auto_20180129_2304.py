# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-29 23:04
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cjangoApp', '0008_auto_20180129_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saved_libs',
            name='created',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='user_submission',
            name='created',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
