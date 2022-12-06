import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IndicatorsModel } from './indicators.interface';
import { IndicatorsService } from './indicators.service';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Get()
  public find(): Observable<IndicatorsModel> {
    return this.indicatorsService.find();
  }
}
