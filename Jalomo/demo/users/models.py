from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager



# Create your models here.


class UserProfileManager(BaseUserManager):
    """ Manager para Perfiles de Usuario """
    def create_user(self, email, name, password=None):
        """ Crear Nuevo User Profile """
        if not email:
            raise ValueError('Usuario debe tener un Email')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)
        
        return user

    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        
        return user

class UserProfile(AbstractBaseUser, PermissionsMixin):
    """ Modelo base de Datos para Usuarios en el Sistema """
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserProfileManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =  ['name']
    
    def get_full_name(self):
        """ Obtener Nombre Completo"""
        return self.name
    
    def get_short_name(self):
        """ Obtener Nombre Corto"""
        return self.name
    
    def __str__(self):
        """ Retornar Cadena Representando Nuestro Usuario """
        return self.email