from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LogoutView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView

# DefaultRouter for API endpoints
router = DefaultRouter()

urlpatterns = [
    # API Documentation
    path('schema/', SpectacularAPIView.as_view(), name='schema'),  # OpenAPI schema
    path('', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),  # Swagger UI
    path('redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),  # ReDoc

    # Admin
    path('admin/', admin.site.urls),

    # API Endpoints
    path('', include(router.urls)),  # DefaultRouter URLs
    path('data/', include('heritage_data.urls')),  # Heritage Data App

    # Authentication
    path("auth/", include("djoser.urls")),  # Djoser URLs
    path("auth/", include("djoser.urls.jwt")),  # Djoser JWT URLs
    path("auth/logout/", LogoutView.as_view(), name='logout'),  # Logout

    # JWT Token
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obtain JWT Token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh JWT Token
]