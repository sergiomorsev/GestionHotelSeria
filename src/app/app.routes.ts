import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { PortadaComponent } from './component/portada/portada.component';
import { FotosComponent } from './component/fotos/fotos.component';
import { RegistroComponent } from './component/registro/registro.component';
import { RegistroSesionComponent } from './component/registro-sesion/registro-sesion.component';
import { HabitacionTarjetaComponent } from './component/habitacion-tarjeta/habitacion-tarjeta.component';
import { HabitacionesComponent } from './component/habitaciones/habitaciones.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { ActividadesComponent } from './component/actividades/actividades.component';
import { UltimoPasoComponent } from './component/ultimo-paso/ultimo-paso.component';
import { ConfirmarReservaComponent } from './component/confirmar-reserva/confirmar-reserva.component'
import { PortadaAdministradorComponent } from './component/portada-administrador/portada-administrador.component';
import { AddHabitacionComponent } from './component/add-habitacion/add-habitacion.component';
import { EliminarHuespedComponent } from './component/eliminar-huesped/eliminar-huesped.component';
import {EditarComponent} from './component/editar/editar.component'
const APP_ROUTES: Routes = [
    { path: 'nosotros', component: NosotrosComponent },
   // { path: 'habitaciones', component: HabitacionesComponent },
    { path: 'fecha/:id', component: HabitacionComponent },
    { path: 'InicioSesion', component: RegistroComponent },
    { path: 'resumen', component: PortadaComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'habitaciones', component: HabitacionTarjetaComponent },
    { path: 'Registro', component: RegistroSesionComponent },
    { path: 'Reservar', component: HabitacionesComponent },
    { path: 'actividades', component: ActividadesComponent },
    { path: 'confirmarReserva', component: ConfirmarReservaComponent },
    { path: 'ultimoPaso', component: UltimoPasoComponent },
    { path: 'admin', component: PortadaAdministradorComponent },
    { path: 'addHab', component: AddHabitacionComponent },
    { path: 'editar', component: EditarComponent },
    {path: 'editar/:id', component: EditarComponent },
    { path: 'EliminarHuesped', component: EliminarHuespedComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'resumen' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

/*const APP_ROUTES1: Routes = [
    { path: 'registro', component: RegistroComponent },
];
export const APP_ROUTING1 = RouterModule.forRoot(APP_ROUTES1, { useHash: true })*/