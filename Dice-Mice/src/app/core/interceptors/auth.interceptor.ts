import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  console.log('Intercepting request:', req);

  const clonedRequest = req.clone({
    withCredentials: true, // Include cookies for cross-site requests
    setHeaders: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });

  return next(clonedRequest);
};
