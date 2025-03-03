from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),  
    path('', include('frontend.urls')),
    path('', include('learning.urls')),
    path('', include('accounts.urls')),
    path('', include('userprofile.urls')),
]