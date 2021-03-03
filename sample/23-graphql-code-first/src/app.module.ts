import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    RecipesModule,
    // Reactivate those lines, and all the shutdown hooks disappear
    // GraphQLModule.forRoot({
    //   installSubscriptionHandlers: true,
    //   autoSchemaFile: 'schema.gql',
    // }),
  ],
})
export class AppModule {}
