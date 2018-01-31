# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from cjangoApp.models import user_submission, saved_libs
import json


# Create your views here.
def index(request):
    return render(request, 'index.html')

def assemble(request):
    selected = request.POST.get('selected')
    return render(request, 'assemble.html', {'selected':selected})

def libbed(request):
    blankA=request.POST.get('blankA')
    blankB=request.POST.get('blankB')
    blankC=request.POST.get('blankC')
    chunkA=request.POST.get('chunkA')
    chunkB=request.POST.get('chunkB')
    chunkC=request.POST.get('chunkC')
    chunkD=request.POST.get('chunkD')
    originalQ=request.POST.get('originalQ')
    fudge = chunkA+blankA+chunkB+blankB+chunkC+blankC+chunkD
    b = saved_libs(full_text=fudge, original_text=originalQ, upvotes=8)
    b.save()

    return render(request, 'libbed.html', { 'blankA':blankA,
                                            'blankB':blankB,
                                            'blankC':blankC,
                                            'chunkA':chunkA,
                                            'chunkB':chunkB,
                                            'chunkC':chunkC,
                                            'chunkD':chunkD,
                                            'originalQ':originalQ
                                            })
