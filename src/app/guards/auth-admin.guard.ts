import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.getCurrentUserIsAdmin().pipe(
    map(esAdmin => {
      if (!esAdmin) {
        router.navigate(['/**']);//redirijo al componente de error no autorizado
        return false;
      }
      return true;
    })
  );
};
