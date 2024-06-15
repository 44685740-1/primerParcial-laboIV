import { Routes } from '@angular/router';
import BienvenidaComponent from './components/bienvenida/bienvenida.component';
import ErrorComponent from './components/error/error.component';
import LoginComponent from './components/login/login.component';
import HomeComponent from './components/home/home.component';

import ListadoPaisesComponent from './components/listado-paises/listado-paises.component';
import ListaProductosComponent from './components/lista-productos/lista-productos.component';
import AltaProductosComponent from './components/alta-productos/alta-productos.component';
import DetalleProductoComponent from './components/detalle-producto/detalle-producto.component';
import ContainerProductoComponent from './components/container-producto/container-producto.component';

import AltaContenedorComponent from './components/alta-contenedor/alta-contenedor.component';
import ModificarContenedorComponent from './components/modificar-contenedor/modificar-contenedor.component';
import EliminarContenedorComponent from './components/eliminar-contenedor/eliminar-contenedor.component';
import ContenedorContenedoresComponent from './components/contenedor-contenedores/contenedor-contenedores.component';
import ListaContenedoresComponent from './components/lista-contenedores/lista-contenedores.component';
import ListadoPublicoComponent from './components/listado-publico/listado-publico.component';

import { authLoguedGuard } from './guards/auth-logued.guard';
import { authAdminGuard } from './guards/auth-admin.guard';

export const routes: Routes = [
    {
        path: 'bienvenida',
        loadComponent: () => import('./components/bienvenida/bienvenida.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component'),
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component'),
    },
    {
        path: 'listadoPublico',
        loadComponent: () => import('./components/listado-publico/listado-publico.component'),
    },
    {
        path: 'productoVista',
        loadComponent: () => import('./components/container-producto/container-producto.component'),
        canActivate:[authLoguedGuard]
    },
    {
        path: 'contenedorVista',
        loadComponent: () => import('./components/contenedor-contenedores/contenedor-contenedores.component'),
        canActivate:[authAdminGuard]
    },
    {
        path: '',
        redirectTo: 'bienvenida', pathMatch: 'full',
    },
    {
        path: '**',
        loadComponent: () => import('./components/error/error.component')
    }
];
