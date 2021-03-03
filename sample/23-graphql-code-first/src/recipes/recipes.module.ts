import { Module, OnApplicationShutdown } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.log(signal);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        console.log('onApplicationShutdown from RecipesModule');
        resolve();
      }, 3000);
    });
  }
}
