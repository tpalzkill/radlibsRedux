# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-29 22:09
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cjangoApp', '0004_auto_20180129_2207'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saved_libs',
            name='timestamp',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='user_submission',
            name='timestamp',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
