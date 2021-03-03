import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    console.log(signal);
    return new Promise<void>(resolve => {
      setTimeout(() => {
        console.log('onApplicationShutdown from RecipesService');
        resolve();
      }, 3000);
    });
  }
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
