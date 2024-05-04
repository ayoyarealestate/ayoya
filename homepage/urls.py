from django.urls import path

from ayoya.homepage import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
]
