# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-01-29 22:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cjangoApp', '0002_auto_20180129_2127'),
    ]

    operations = [
        migrations.AlterField(
            model_name='saved_libs',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created'),
        ),
        migrations.AlterField(
            model_name='user_submission',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created'),
        ),
    ]
