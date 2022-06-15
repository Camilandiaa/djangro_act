from django.http import HttpResponse
from django.template import Template, Context
from matplotlib import pyplot as plt
from django.shortcuts import render

def index(request):
    doc_externo = open("static/index.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento= plt.render(ctx)
    return HttpResponse(documento)

def login(request):
    doc_externo = open("static/login.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento= plt.render(ctx)
    return HttpResponse(documento)  

def productos(request):
    doc_externo = open("static/productos.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento= plt.render(ctx)
    return HttpResponse(documento)

def carritodecompras(request):
    doc_externo = open("static/carritodecompras.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)


def registro(request):
    doc_externo = open("static/formulario.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento= plt.render(ctx)
    return HttpResponse(documento)

def contacto(request):
    doc_externo = open("static/contacto.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def seguimiento(request):
    doc_externo = open("static/seguimiento.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)
    
