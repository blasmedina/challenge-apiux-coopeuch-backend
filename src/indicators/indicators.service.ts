import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IndicatorsModel } from './indicators.interface';
import { map, catchError, Observable } from 'rxjs';

@Injectable()
export class IndicatorsService {
  constructor(private http: HttpService) {}

  public find(): Observable<IndicatorsModel> {
    return this.http
      .get<IndicatorsModel>('https://mindicador.cl/api')
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
