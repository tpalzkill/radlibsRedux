# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime


# Create your models here.
class user_submission(models.Model):
    text = models.CharField(max_length=5000)
    upvotes = models.IntegerField()
    created = models.DateTimeField(default=datetime.datetime.now, blank=True, null=True)

class saved_libs(models.Model):
    full_text = models.CharField(max_length=5000)
    original_text = models.CharField(max_length=5000)
    upvotes = models.IntegerField()
    created = models.DateTimeField(default=datetime.datetime.now, blank=True, null=True)
