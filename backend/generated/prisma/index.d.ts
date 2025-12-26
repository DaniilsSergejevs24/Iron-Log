
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model exercises
 * 
 */
export type exercises = $Result.DefaultSelection<Prisma.$exercisesPayload>
/**
 * Model workouts
 * 
 */
export type workouts = $Result.DefaultSelection<Prisma.$workoutsPayload>
/**
 * Model workout_exercises
 * 
 */
export type workout_exercises = $Result.DefaultSelection<Prisma.$workout_exercisesPayload>
/**
 * Model sets
 * 
 */
export type sets = $Result.DefaultSelection<Prisma.$setsPayload>
/**
 * Model goals
 * 
 */
export type goals = $Result.DefaultSelection<Prisma.$goalsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.exercisesDelegate<ExtArgs>;

  /**
   * `prisma.workouts`: Exposes CRUD operations for the **workouts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workouts.findMany()
    * ```
    */
  get workouts(): Prisma.workoutsDelegate<ExtArgs>;

  /**
   * `prisma.workout_exercises`: Exposes CRUD operations for the **workout_exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workout_exercises
    * const workout_exercises = await prisma.workout_exercises.findMany()
    * ```
    */
  get workout_exercises(): Prisma.workout_exercisesDelegate<ExtArgs>;

  /**
   * `prisma.sets`: Exposes CRUD operations for the **sets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sets
    * const sets = await prisma.sets.findMany()
    * ```
    */
  get sets(): Prisma.setsDelegate<ExtArgs>;

  /**
   * `prisma.goals`: Exposes CRUD operations for the **goals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goals.findMany()
    * ```
    */
  get goals(): Prisma.goalsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    exercises: 'exercises',
    workouts: 'workouts',
    workout_exercises: 'workout_exercises',
    sets: 'sets',
    goals: 'goals'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "exercises" | "workouts" | "workout_exercises" | "sets" | "goals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      exercises: {
        payload: Prisma.$exercisesPayload<ExtArgs>
        fields: Prisma.exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findFirst: {
            args: Prisma.exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          findMany: {
            args: Prisma.exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>[]
          }
          create: {
            args: Prisma.exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          createMany: {
            args: Prisma.exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          update: {
            args: Prisma.exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          deleteMany: {
            args: Prisma.exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
      workouts: {
        payload: Prisma.$workoutsPayload<ExtArgs>
        fields: Prisma.workoutsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workoutsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workoutsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          findFirst: {
            args: Prisma.workoutsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workoutsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          findMany: {
            args: Prisma.workoutsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>[]
          }
          create: {
            args: Prisma.workoutsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          createMany: {
            args: Prisma.workoutsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workoutsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          update: {
            args: Prisma.workoutsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          deleteMany: {
            args: Prisma.workoutsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workoutsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workoutsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workoutsPayload>
          }
          aggregate: {
            args: Prisma.WorkoutsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkouts>
          }
          groupBy: {
            args: Prisma.workoutsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsGroupByOutputType>[]
          }
          count: {
            args: Prisma.workoutsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutsCountAggregateOutputType> | number
          }
        }
      }
      workout_exercises: {
        payload: Prisma.$workout_exercisesPayload<ExtArgs>
        fields: Prisma.workout_exercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workout_exercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workout_exercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          findFirst: {
            args: Prisma.workout_exercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workout_exercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          findMany: {
            args: Prisma.workout_exercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>[]
          }
          create: {
            args: Prisma.workout_exercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          createMany: {
            args: Prisma.workout_exercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workout_exercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          update: {
            args: Prisma.workout_exercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          deleteMany: {
            args: Prisma.workout_exercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workout_exercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workout_exercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workout_exercisesPayload>
          }
          aggregate: {
            args: Prisma.Workout_exercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout_exercises>
          }
          groupBy: {
            args: Prisma.workout_exercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workout_exercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workout_exercisesCountArgs<ExtArgs>
            result: $Utils.Optional<Workout_exercisesCountAggregateOutputType> | number
          }
        }
      }
      sets: {
        payload: Prisma.$setsPayload<ExtArgs>
        fields: Prisma.setsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          findFirst: {
            args: Prisma.setsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          findMany: {
            args: Prisma.setsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>[]
          }
          create: {
            args: Prisma.setsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          createMany: {
            args: Prisma.setsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.setsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          update: {
            args: Prisma.setsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          deleteMany: {
            args: Prisma.setsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.setsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setsPayload>
          }
          aggregate: {
            args: Prisma.SetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSets>
          }
          groupBy: {
            args: Prisma.setsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.setsCountArgs<ExtArgs>
            result: $Utils.Optional<SetsCountAggregateOutputType> | number
          }
        }
      }
      goals: {
        payload: Prisma.$goalsPayload<ExtArgs>
        fields: Prisma.goalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          findFirst: {
            args: Prisma.goalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          findMany: {
            args: Prisma.goalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>[]
          }
          create: {
            args: Prisma.goalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          createMany: {
            args: Prisma.goalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.goalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          update: {
            args: Prisma.goalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          deleteMany: {
            args: Prisma.goalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.goalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goalsPayload>
          }
          aggregate: {
            args: Prisma.GoalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoals>
          }
          groupBy: {
            args: Prisma.goalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.goalsCountArgs<ExtArgs>
            result: $Utils.Optional<GoalsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    workouts: number
    goals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | UsersCountOutputTypeCountWorkoutsArgs
    goals?: boolean | UsersCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workoutsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalsWhereInput
  }


  /**
   * Count Type ExercisesCountOutputType
   */

  export type ExercisesCountOutputType = {
    workout_exercises: number
    goals: number
  }

  export type ExercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_exercises?: boolean | ExercisesCountOutputTypeCountWorkout_exercisesArgs
    goals?: boolean | ExercisesCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExercisesCountOutputType
     */
    select?: ExercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountWorkout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
  }

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalsWhereInput
  }


  /**
   * Count Type WorkoutsCountOutputType
   */

  export type WorkoutsCountOutputType = {
    workout_exercises: number
  }

  export type WorkoutsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_exercises?: boolean | WorkoutsCountOutputTypeCountWorkout_exercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutsCountOutputType
     */
    select?: WorkoutsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutsCountOutputType without action
   */
  export type WorkoutsCountOutputTypeCountWorkout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
  }


  /**
   * Count Type Workout_exercisesCountOutputType
   */

  export type Workout_exercisesCountOutputType = {
    sets: number
  }

  export type Workout_exercisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sets?: boolean | Workout_exercisesCountOutputTypeCountSetsArgs
  }

  // Custom InputTypes
  /**
   * Workout_exercisesCountOutputType without action
   */
  export type Workout_exercisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout_exercisesCountOutputType
     */
    select?: Workout_exercisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Workout_exercisesCountOutputType without action
   */
  export type Workout_exercisesCountOutputTypeCountSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    name: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    email: string
    password: string
    name: string
    role: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    workouts?: boolean | users$workoutsArgs<ExtArgs>
    goals?: boolean | users$goalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | users$workoutsArgs<ExtArgs>
    goals?: boolean | users$goalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      workouts: Prisma.$workoutsPayload<ExtArgs>[]
      goals: Prisma.$goalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      name: string
      role: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workouts<T extends users$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, users$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends users$goalsArgs<ExtArgs> = {}>(args?: Subset<T, users$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.workouts
   */
  export type users$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    where?: workoutsWhereInput
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    cursor?: workoutsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * users.goals
   */
  export type users$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    where?: goalsWhereInput
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    cursor?: goalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesAvgAggregateOutputType = {
    exercise_id: number | null
  }

  export type ExercisesSumAggregateOutputType = {
    exercise_id: number | null
  }

  export type ExercisesMinAggregateOutputType = {
    exercise_id: number | null
    name: string | null
    description: string | null
    video_url: string | null
    muscle_group: string | null
  }

  export type ExercisesMaxAggregateOutputType = {
    exercise_id: number | null
    name: string | null
    description: string | null
    video_url: string | null
    muscle_group: string | null
  }

  export type ExercisesCountAggregateOutputType = {
    exercise_id: number
    name: number
    description: number
    video_url: number
    muscle_group: number
    _all: number
  }


  export type ExercisesAvgAggregateInputType = {
    exercise_id?: true
  }

  export type ExercisesSumAggregateInputType = {
    exercise_id?: true
  }

  export type ExercisesMinAggregateInputType = {
    exercise_id?: true
    name?: true
    description?: true
    video_url?: true
    muscle_group?: true
  }

  export type ExercisesMaxAggregateInputType = {
    exercise_id?: true
    name?: true
    description?: true
    video_url?: true
    muscle_group?: true
  }

  export type ExercisesCountAggregateInputType = {
    exercise_id?: true
    name?: true
    description?: true
    video_url?: true
    muscle_group?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to aggregate.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exercisesWhereInput
    orderBy?: exercisesOrderByWithAggregationInput | exercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _avg?: ExercisesAvgAggregateInputType
    _sum?: ExercisesSumAggregateInputType
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    exercise_id: number
    name: string
    description: string | null
    video_url: string | null
    muscle_group: string
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exercise_id?: boolean
    name?: boolean
    description?: boolean
    video_url?: boolean
    muscle_group?: boolean
    workout_exercises?: boolean | exercises$workout_exercisesArgs<ExtArgs>
    goals?: boolean | exercises$goalsArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>


  export type exercisesSelectScalar = {
    exercise_id?: boolean
    name?: boolean
    description?: boolean
    video_url?: boolean
    muscle_group?: boolean
  }

  export type exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_exercises?: boolean | exercises$workout_exercisesArgs<ExtArgs>
    goals?: boolean | exercises$goalsArgs<ExtArgs>
    _count?: boolean | ExercisesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercises"
    objects: {
      workout_exercises: Prisma.$workout_exercisesPayload<ExtArgs>[]
      goals: Prisma.$goalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      exercise_id: number
      name: string
      description: string | null
      video_url: string | null
      muscle_group: string
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type exercisesGetPayload<S extends boolean | null | undefined | exercisesDefaultArgs> = $Result.GetResult<Prisma.$exercisesPayload, S>

  type exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<exercisesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercises'], meta: { name: 'exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {exercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exercisesFindUniqueArgs>(args: SelectSubset<T, exercisesFindUniqueArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {exercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exercisesFindFirstArgs>(args?: SelectSubset<T, exercisesFindFirstArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `exercise_id`
     * const exercisesWithExercise_idOnly = await prisma.exercises.findMany({ select: { exercise_id: true } })
     * 
     */
    findMany<T extends exercisesFindManyArgs>(args?: SelectSubset<T, exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exercises.
     * @param {exercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends exercisesCreateArgs>(args: SelectSubset<T, exercisesCreateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exercises.
     * @param {exercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exercisesCreateManyArgs>(args?: SelectSubset<T, exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercises.
     * @param {exercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends exercisesDeleteArgs>(args: SelectSubset<T, exercisesDeleteArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exercises.
     * @param {exercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exercisesUpdateArgs>(args: SelectSubset<T, exercisesUpdateArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exercises.
     * @param {exercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exercisesDeleteManyArgs>(args?: SelectSubset<T, exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exercisesUpdateManyArgs>(args: SelectSubset<T, exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercises.
     * @param {exercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends exercisesUpsertArgs>(args: SelectSubset<T, exercisesUpsertArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends exercisesCountArgs>(
      args?: Subset<T, exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exercisesGroupByArgs['orderBy'] }
        : { orderBy?: exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercises model
   */
  readonly fields: exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_exercises<T extends exercises$workout_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, exercises$workout_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany"> | Null>
    goals<T extends exercises$goalsArgs<ExtArgs> = {}>(args?: Subset<T, exercises$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercises model
   */ 
  interface exercisesFieldRefs {
    readonly exercise_id: FieldRef<"exercises", 'Int'>
    readonly name: FieldRef<"exercises", 'String'>
    readonly description: FieldRef<"exercises", 'String'>
    readonly video_url: FieldRef<"exercises", 'String'>
    readonly muscle_group: FieldRef<"exercises", 'String'>
  }
    

  // Custom InputTypes
  /**
   * exercises findUnique
   */
  export type exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findUniqueOrThrow
   */
  export type exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises findFirst
   */
  export type exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findFirstOrThrow
   */
  export type exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises findMany
   */
  export type exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter, which exercises to fetch.
     */
    where?: exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercises to fetch.
     */
    orderBy?: exercisesOrderByWithRelationInput | exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercises.
     */
    cursor?: exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercises.
     */
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * exercises create
   */
  export type exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a exercises.
     */
    data: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
  }

  /**
   * exercises createMany
   */
  export type exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercises.
     */
    data: exercisesCreateManyInput | exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercises update
   */
  export type exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a exercises.
     */
    data: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
    /**
     * Choose, which exercises to update.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises updateMany
   */
  export type exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercises.
     */
    data: XOR<exercisesUpdateManyMutationInput, exercisesUncheckedUpdateManyInput>
    /**
     * Filter which exercises to update
     */
    where?: exercisesWhereInput
  }

  /**
   * exercises upsert
   */
  export type exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the exercises to update in case it exists.
     */
    where: exercisesWhereUniqueInput
    /**
     * In case the exercises found by the `where` argument doesn't exist, create a new exercises with this data.
     */
    create: XOR<exercisesCreateInput, exercisesUncheckedCreateInput>
    /**
     * In case the exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exercisesUpdateInput, exercisesUncheckedUpdateInput>
  }

  /**
   * exercises delete
   */
  export type exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
    /**
     * Filter which exercises to delete.
     */
    where: exercisesWhereUniqueInput
  }

  /**
   * exercises deleteMany
   */
  export type exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercises to delete
     */
    where?: exercisesWhereInput
  }

  /**
   * exercises.workout_exercises
   */
  export type exercises$workout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    cursor?: workout_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * exercises.goals
   */
  export type exercises$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    where?: goalsWhereInput
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    cursor?: goalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[]
  }

  /**
   * exercises without action
   */
  export type exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercises
     */
    select?: exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exercisesInclude<ExtArgs> | null
  }


  /**
   * Model workouts
   */

  export type AggregateWorkouts = {
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  export type WorkoutsAvgAggregateOutputType = {
    workout_id: number | null
    user_id: number | null
  }

  export type WorkoutsSumAggregateOutputType = {
    workout_id: number | null
    user_id: number | null
  }

  export type WorkoutsMinAggregateOutputType = {
    workout_id: number | null
    user_id: number | null
    name: string | null
    date: Date | null
    notes: string | null
  }

  export type WorkoutsMaxAggregateOutputType = {
    workout_id: number | null
    user_id: number | null
    name: string | null
    date: Date | null
    notes: string | null
  }

  export type WorkoutsCountAggregateOutputType = {
    workout_id: number
    user_id: number
    name: number
    date: number
    notes: number
    _all: number
  }


  export type WorkoutsAvgAggregateInputType = {
    workout_id?: true
    user_id?: true
  }

  export type WorkoutsSumAggregateInputType = {
    workout_id?: true
    user_id?: true
  }

  export type WorkoutsMinAggregateInputType = {
    workout_id?: true
    user_id?: true
    name?: true
    date?: true
    notes?: true
  }

  export type WorkoutsMaxAggregateInputType = {
    workout_id?: true
    user_id?: true
    name?: true
    date?: true
    notes?: true
  }

  export type WorkoutsCountAggregateInputType = {
    workout_id?: true
    user_id?: true
    name?: true
    date?: true
    notes?: true
    _all?: true
  }

  export type WorkoutsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workouts to aggregate.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workouts
    **/
    _count?: true | WorkoutsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutsMaxAggregateInputType
  }

  export type GetWorkoutsAggregateType<T extends WorkoutsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkouts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkouts[P]>
      : GetScalarType<T[P], AggregateWorkouts[P]>
  }




  export type workoutsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workoutsWhereInput
    orderBy?: workoutsOrderByWithAggregationInput | workoutsOrderByWithAggregationInput[]
    by: WorkoutsScalarFieldEnum[] | WorkoutsScalarFieldEnum
    having?: workoutsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutsCountAggregateInputType | true
    _avg?: WorkoutsAvgAggregateInputType
    _sum?: WorkoutsSumAggregateInputType
    _min?: WorkoutsMinAggregateInputType
    _max?: WorkoutsMaxAggregateInputType
  }

  export type WorkoutsGroupByOutputType = {
    workout_id: number
    user_id: number
    name: string | null
    date: Date
    notes: string | null
    _count: WorkoutsCountAggregateOutputType | null
    _avg: WorkoutsAvgAggregateOutputType | null
    _sum: WorkoutsSumAggregateOutputType | null
    _min: WorkoutsMinAggregateOutputType | null
    _max: WorkoutsMaxAggregateOutputType | null
  }

  type GetWorkoutsGroupByPayload<T extends workoutsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutsGroupByOutputType[P]>
        }
      >
    >


  export type workoutsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workout_id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    notes?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    workout_exercises?: boolean | workouts$workout_exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workouts"]>


  export type workoutsSelectScalar = {
    workout_id?: boolean
    user_id?: boolean
    name?: boolean
    date?: boolean
    notes?: boolean
  }

  export type workoutsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    workout_exercises?: boolean | workouts$workout_exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $workoutsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workouts"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      workout_exercises: Prisma.$workout_exercisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      workout_id: number
      user_id: number
      name: string | null
      date: Date
      notes: string | null
    }, ExtArgs["result"]["workouts"]>
    composites: {}
  }

  type workoutsGetPayload<S extends boolean | null | undefined | workoutsDefaultArgs> = $Result.GetResult<Prisma.$workoutsPayload, S>

  type workoutsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workoutsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutsCountAggregateInputType | true
    }

  export interface workoutsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workouts'], meta: { name: 'workouts' } }
    /**
     * Find zero or one Workouts that matches the filter.
     * @param {workoutsFindUniqueArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workoutsFindUniqueArgs>(args: SelectSubset<T, workoutsFindUniqueArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workouts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {workoutsFindUniqueOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workoutsFindUniqueOrThrowArgs>(args: SelectSubset<T, workoutsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindFirstArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workoutsFindFirstArgs>(args?: SelectSubset<T, workoutsFindFirstArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workouts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindFirstOrThrowArgs} args - Arguments to find a Workouts
     * @example
     * // Get one Workouts
     * const workouts = await prisma.workouts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workoutsFindFirstOrThrowArgs>(args?: SelectSubset<T, workoutsFindFirstOrThrowArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workouts.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workouts.findMany({ take: 10 })
     * 
     * // Only select the `workout_id`
     * const workoutsWithWorkout_idOnly = await prisma.workouts.findMany({ select: { workout_id: true } })
     * 
     */
    findMany<T extends workoutsFindManyArgs>(args?: SelectSubset<T, workoutsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workouts.
     * @param {workoutsCreateArgs} args - Arguments to create a Workouts.
     * @example
     * // Create one Workouts
     * const Workouts = await prisma.workouts.create({
     *   data: {
     *     // ... data to create a Workouts
     *   }
     * })
     * 
     */
    create<T extends workoutsCreateArgs>(args: SelectSubset<T, workoutsCreateArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workouts.
     * @param {workoutsCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workouts = await prisma.workouts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workoutsCreateManyArgs>(args?: SelectSubset<T, workoutsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workouts.
     * @param {workoutsDeleteArgs} args - Arguments to delete one Workouts.
     * @example
     * // Delete one Workouts
     * const Workouts = await prisma.workouts.delete({
     *   where: {
     *     // ... filter to delete one Workouts
     *   }
     * })
     * 
     */
    delete<T extends workoutsDeleteArgs>(args: SelectSubset<T, workoutsDeleteArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workouts.
     * @param {workoutsUpdateArgs} args - Arguments to update one Workouts.
     * @example
     * // Update one Workouts
     * const workouts = await prisma.workouts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workoutsUpdateArgs>(args: SelectSubset<T, workoutsUpdateArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workouts.
     * @param {workoutsDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workouts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workoutsDeleteManyArgs>(args?: SelectSubset<T, workoutsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workouts = await prisma.workouts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workoutsUpdateManyArgs>(args: SelectSubset<T, workoutsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workouts.
     * @param {workoutsUpsertArgs} args - Arguments to update or create a Workouts.
     * @example
     * // Update or create a Workouts
     * const workouts = await prisma.workouts.upsert({
     *   create: {
     *     // ... data to create a Workouts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workouts we want to update
     *   }
     * })
     */
    upsert<T extends workoutsUpsertArgs>(args: SelectSubset<T, workoutsUpsertArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workouts.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends workoutsCountArgs>(
      args?: Subset<T, workoutsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutsAggregateArgs>(args: Subset<T, WorkoutsAggregateArgs>): Prisma.PrismaPromise<GetWorkoutsAggregateType<T>>

    /**
     * Group by Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workoutsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workoutsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workoutsGroupByArgs['orderBy'] }
        : { orderBy?: workoutsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workoutsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workouts model
   */
  readonly fields: workoutsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workouts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workoutsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    workout_exercises<T extends workouts$workout_exercisesArgs<ExtArgs> = {}>(args?: Subset<T, workouts$workout_exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workouts model
   */ 
  interface workoutsFieldRefs {
    readonly workout_id: FieldRef<"workouts", 'Int'>
    readonly user_id: FieldRef<"workouts", 'Int'>
    readonly name: FieldRef<"workouts", 'String'>
    readonly date: FieldRef<"workouts", 'DateTime'>
    readonly notes: FieldRef<"workouts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * workouts findUnique
   */
  export type workoutsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts findUniqueOrThrow
   */
  export type workoutsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts findFirst
   */
  export type workoutsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts findFirstOrThrow
   */
  export type workoutsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workouts.
     */
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts findMany
   */
  export type workoutsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter, which workouts to fetch.
     */
    where?: workoutsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workouts to fetch.
     */
    orderBy?: workoutsOrderByWithRelationInput | workoutsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workouts.
     */
    cursor?: workoutsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workouts.
     */
    skip?: number
    distinct?: WorkoutsScalarFieldEnum | WorkoutsScalarFieldEnum[]
  }

  /**
   * workouts create
   */
  export type workoutsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The data needed to create a workouts.
     */
    data: XOR<workoutsCreateInput, workoutsUncheckedCreateInput>
  }

  /**
   * workouts createMany
   */
  export type workoutsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workouts.
     */
    data: workoutsCreateManyInput | workoutsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workouts update
   */
  export type workoutsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The data needed to update a workouts.
     */
    data: XOR<workoutsUpdateInput, workoutsUncheckedUpdateInput>
    /**
     * Choose, which workouts to update.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts updateMany
   */
  export type workoutsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workouts.
     */
    data: XOR<workoutsUpdateManyMutationInput, workoutsUncheckedUpdateManyInput>
    /**
     * Filter which workouts to update
     */
    where?: workoutsWhereInput
  }

  /**
   * workouts upsert
   */
  export type workoutsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * The filter to search for the workouts to update in case it exists.
     */
    where: workoutsWhereUniqueInput
    /**
     * In case the workouts found by the `where` argument doesn't exist, create a new workouts with this data.
     */
    create: XOR<workoutsCreateInput, workoutsUncheckedCreateInput>
    /**
     * In case the workouts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workoutsUpdateInput, workoutsUncheckedUpdateInput>
  }

  /**
   * workouts delete
   */
  export type workoutsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
    /**
     * Filter which workouts to delete.
     */
    where: workoutsWhereUniqueInput
  }

  /**
   * workouts deleteMany
   */
  export type workoutsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workouts to delete
     */
    where?: workoutsWhereInput
  }

  /**
   * workouts.workout_exercises
   */
  export type workouts$workout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    cursor?: workout_exercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workouts without action
   */
  export type workoutsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workouts
     */
    select?: workoutsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workoutsInclude<ExtArgs> | null
  }


  /**
   * Model workout_exercises
   */

  export type AggregateWorkout_exercises = {
    _count: Workout_exercisesCountAggregateOutputType | null
    _avg: Workout_exercisesAvgAggregateOutputType | null
    _sum: Workout_exercisesSumAggregateOutputType | null
    _min: Workout_exercisesMinAggregateOutputType | null
    _max: Workout_exercisesMaxAggregateOutputType | null
  }

  export type Workout_exercisesAvgAggregateOutputType = {
    workout_exercise_id: number | null
    workout_id: number | null
    exercise_id: number | null
    order: number | null
  }

  export type Workout_exercisesSumAggregateOutputType = {
    workout_exercise_id: number | null
    workout_id: number | null
    exercise_id: number | null
    order: number | null
  }

  export type Workout_exercisesMinAggregateOutputType = {
    workout_exercise_id: number | null
    workout_id: number | null
    exercise_id: number | null
    order: number | null
  }

  export type Workout_exercisesMaxAggregateOutputType = {
    workout_exercise_id: number | null
    workout_id: number | null
    exercise_id: number | null
    order: number | null
  }

  export type Workout_exercisesCountAggregateOutputType = {
    workout_exercise_id: number
    workout_id: number
    exercise_id: number
    order: number
    _all: number
  }


  export type Workout_exercisesAvgAggregateInputType = {
    workout_exercise_id?: true
    workout_id?: true
    exercise_id?: true
    order?: true
  }

  export type Workout_exercisesSumAggregateInputType = {
    workout_exercise_id?: true
    workout_id?: true
    exercise_id?: true
    order?: true
  }

  export type Workout_exercisesMinAggregateInputType = {
    workout_exercise_id?: true
    workout_id?: true
    exercise_id?: true
    order?: true
  }

  export type Workout_exercisesMaxAggregateInputType = {
    workout_exercise_id?: true
    workout_id?: true
    exercise_id?: true
    order?: true
  }

  export type Workout_exercisesCountAggregateInputType = {
    workout_exercise_id?: true
    workout_id?: true
    exercise_id?: true
    order?: true
    _all?: true
  }

  export type Workout_exercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_exercises to aggregate.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workout_exercises
    **/
    _count?: true | Workout_exercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workout_exercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workout_exercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workout_exercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workout_exercisesMaxAggregateInputType
  }

  export type GetWorkout_exercisesAggregateType<T extends Workout_exercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout_exercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout_exercises[P]>
      : GetScalarType<T[P], AggregateWorkout_exercises[P]>
  }




  export type workout_exercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workout_exercisesWhereInput
    orderBy?: workout_exercisesOrderByWithAggregationInput | workout_exercisesOrderByWithAggregationInput[]
    by: Workout_exercisesScalarFieldEnum[] | Workout_exercisesScalarFieldEnum
    having?: workout_exercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workout_exercisesCountAggregateInputType | true
    _avg?: Workout_exercisesAvgAggregateInputType
    _sum?: Workout_exercisesSumAggregateInputType
    _min?: Workout_exercisesMinAggregateInputType
    _max?: Workout_exercisesMaxAggregateInputType
  }

  export type Workout_exercisesGroupByOutputType = {
    workout_exercise_id: number
    workout_id: number
    exercise_id: number
    order: number
    _count: Workout_exercisesCountAggregateOutputType | null
    _avg: Workout_exercisesAvgAggregateOutputType | null
    _sum: Workout_exercisesSumAggregateOutputType | null
    _min: Workout_exercisesMinAggregateOutputType | null
    _max: Workout_exercisesMaxAggregateOutputType | null
  }

  type GetWorkout_exercisesGroupByPayload<T extends workout_exercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workout_exercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workout_exercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workout_exercisesGroupByOutputType[P]>
            : GetScalarType<T[P], Workout_exercisesGroupByOutputType[P]>
        }
      >
    >


  export type workout_exercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workout_exercise_id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    order?: boolean
    workout?: boolean | workoutsDefaultArgs<ExtArgs>
    exercise?: boolean | exercisesDefaultArgs<ExtArgs>
    sets?: boolean | workout_exercises$setsArgs<ExtArgs>
    _count?: boolean | Workout_exercisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout_exercises"]>


  export type workout_exercisesSelectScalar = {
    workout_exercise_id?: boolean
    workout_id?: boolean
    exercise_id?: boolean
    order?: boolean
  }

  export type workout_exercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | workoutsDefaultArgs<ExtArgs>
    exercise?: boolean | exercisesDefaultArgs<ExtArgs>
    sets?: boolean | workout_exercises$setsArgs<ExtArgs>
    _count?: boolean | Workout_exercisesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $workout_exercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workout_exercises"
    objects: {
      workout: Prisma.$workoutsPayload<ExtArgs>
      exercise: Prisma.$exercisesPayload<ExtArgs>
      sets: Prisma.$setsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      workout_exercise_id: number
      workout_id: number
      exercise_id: number
      order: number
    }, ExtArgs["result"]["workout_exercises"]>
    composites: {}
  }

  type workout_exercisesGetPayload<S extends boolean | null | undefined | workout_exercisesDefaultArgs> = $Result.GetResult<Prisma.$workout_exercisesPayload, S>

  type workout_exercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workout_exercisesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Workout_exercisesCountAggregateInputType | true
    }

  export interface workout_exercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workout_exercises'], meta: { name: 'workout_exercises' } }
    /**
     * Find zero or one Workout_exercises that matches the filter.
     * @param {workout_exercisesFindUniqueArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workout_exercisesFindUniqueArgs>(args: SelectSubset<T, workout_exercisesFindUniqueArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workout_exercises that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {workout_exercisesFindUniqueOrThrowArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workout_exercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, workout_exercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workout_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindFirstArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workout_exercisesFindFirstArgs>(args?: SelectSubset<T, workout_exercisesFindFirstArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workout_exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindFirstOrThrowArgs} args - Arguments to find a Workout_exercises
     * @example
     * // Get one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workout_exercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, workout_exercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workout_exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findMany()
     * 
     * // Get first 10 Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.findMany({ take: 10 })
     * 
     * // Only select the `workout_exercise_id`
     * const workout_exercisesWithWorkout_exercise_idOnly = await prisma.workout_exercises.findMany({ select: { workout_exercise_id: true } })
     * 
     */
    findMany<T extends workout_exercisesFindManyArgs>(args?: SelectSubset<T, workout_exercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workout_exercises.
     * @param {workout_exercisesCreateArgs} args - Arguments to create a Workout_exercises.
     * @example
     * // Create one Workout_exercises
     * const Workout_exercises = await prisma.workout_exercises.create({
     *   data: {
     *     // ... data to create a Workout_exercises
     *   }
     * })
     * 
     */
    create<T extends workout_exercisesCreateArgs>(args: SelectSubset<T, workout_exercisesCreateArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workout_exercises.
     * @param {workout_exercisesCreateManyArgs} args - Arguments to create many Workout_exercises.
     * @example
     * // Create many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workout_exercisesCreateManyArgs>(args?: SelectSubset<T, workout_exercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workout_exercises.
     * @param {workout_exercisesDeleteArgs} args - Arguments to delete one Workout_exercises.
     * @example
     * // Delete one Workout_exercises
     * const Workout_exercises = await prisma.workout_exercises.delete({
     *   where: {
     *     // ... filter to delete one Workout_exercises
     *   }
     * })
     * 
     */
    delete<T extends workout_exercisesDeleteArgs>(args: SelectSubset<T, workout_exercisesDeleteArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workout_exercises.
     * @param {workout_exercisesUpdateArgs} args - Arguments to update one Workout_exercises.
     * @example
     * // Update one Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workout_exercisesUpdateArgs>(args: SelectSubset<T, workout_exercisesUpdateArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workout_exercises.
     * @param {workout_exercisesDeleteManyArgs} args - Arguments to filter Workout_exercises to delete.
     * @example
     * // Delete a few Workout_exercises
     * const { count } = await prisma.workout_exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workout_exercisesDeleteManyArgs>(args?: SelectSubset<T, workout_exercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workout_exercisesUpdateManyArgs>(args: SelectSubset<T, workout_exercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workout_exercises.
     * @param {workout_exercisesUpsertArgs} args - Arguments to update or create a Workout_exercises.
     * @example
     * // Update or create a Workout_exercises
     * const workout_exercises = await prisma.workout_exercises.upsert({
     *   create: {
     *     // ... data to create a Workout_exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout_exercises we want to update
     *   }
     * })
     */
    upsert<T extends workout_exercisesUpsertArgs>(args: SelectSubset<T, workout_exercisesUpsertArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesCountArgs} args - Arguments to filter Workout_exercises to count.
     * @example
     * // Count the number of Workout_exercises
     * const count = await prisma.workout_exercises.count({
     *   where: {
     *     // ... the filter for the Workout_exercises we want to count
     *   }
     * })
    **/
    count<T extends workout_exercisesCountArgs>(
      args?: Subset<T, workout_exercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workout_exercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workout_exercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workout_exercisesAggregateArgs>(args: Subset<T, Workout_exercisesAggregateArgs>): Prisma.PrismaPromise<GetWorkout_exercisesAggregateType<T>>

    /**
     * Group by Workout_exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workout_exercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workout_exercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workout_exercisesGroupByArgs['orderBy'] }
        : { orderBy?: workout_exercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workout_exercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkout_exercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workout_exercises model
   */
  readonly fields: workout_exercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workout_exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workout_exercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends workoutsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workoutsDefaultArgs<ExtArgs>>): Prisma__workoutsClient<$Result.GetResult<Prisma.$workoutsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exercise<T extends exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exercisesDefaultArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sets<T extends workout_exercises$setsArgs<ExtArgs> = {}>(args?: Subset<T, workout_exercises$setsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workout_exercises model
   */ 
  interface workout_exercisesFieldRefs {
    readonly workout_exercise_id: FieldRef<"workout_exercises", 'Int'>
    readonly workout_id: FieldRef<"workout_exercises", 'Int'>
    readonly exercise_id: FieldRef<"workout_exercises", 'Int'>
    readonly order: FieldRef<"workout_exercises", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workout_exercises findUnique
   */
  export type workout_exercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises findUniqueOrThrow
   */
  export type workout_exercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises findFirst
   */
  export type workout_exercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_exercises.
     */
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises findFirstOrThrow
   */
  export type workout_exercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workout_exercises.
     */
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises findMany
   */
  export type workout_exercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter, which workout_exercises to fetch.
     */
    where?: workout_exercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workout_exercises to fetch.
     */
    orderBy?: workout_exercisesOrderByWithRelationInput | workout_exercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workout_exercises.
     */
    cursor?: workout_exercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workout_exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workout_exercises.
     */
    skip?: number
    distinct?: Workout_exercisesScalarFieldEnum | Workout_exercisesScalarFieldEnum[]
  }

  /**
   * workout_exercises create
   */
  export type workout_exercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a workout_exercises.
     */
    data: XOR<workout_exercisesCreateInput, workout_exercisesUncheckedCreateInput>
  }

  /**
   * workout_exercises createMany
   */
  export type workout_exercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workout_exercises.
     */
    data: workout_exercisesCreateManyInput | workout_exercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workout_exercises update
   */
  export type workout_exercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a workout_exercises.
     */
    data: XOR<workout_exercisesUpdateInput, workout_exercisesUncheckedUpdateInput>
    /**
     * Choose, which workout_exercises to update.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises updateMany
   */
  export type workout_exercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workout_exercises.
     */
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyInput>
    /**
     * Filter which workout_exercises to update
     */
    where?: workout_exercisesWhereInput
  }

  /**
   * workout_exercises upsert
   */
  export type workout_exercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the workout_exercises to update in case it exists.
     */
    where: workout_exercisesWhereUniqueInput
    /**
     * In case the workout_exercises found by the `where` argument doesn't exist, create a new workout_exercises with this data.
     */
    create: XOR<workout_exercisesCreateInput, workout_exercisesUncheckedCreateInput>
    /**
     * In case the workout_exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workout_exercisesUpdateInput, workout_exercisesUncheckedUpdateInput>
  }

  /**
   * workout_exercises delete
   */
  export type workout_exercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
    /**
     * Filter which workout_exercises to delete.
     */
    where: workout_exercisesWhereUniqueInput
  }

  /**
   * workout_exercises deleteMany
   */
  export type workout_exercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workout_exercises to delete
     */
    where?: workout_exercisesWhereInput
  }

  /**
   * workout_exercises.sets
   */
  export type workout_exercises$setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    where?: setsWhereInput
    orderBy?: setsOrderByWithRelationInput | setsOrderByWithRelationInput[]
    cursor?: setsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SetsScalarFieldEnum | SetsScalarFieldEnum[]
  }

  /**
   * workout_exercises without action
   */
  export type workout_exercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workout_exercises
     */
    select?: workout_exercisesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workout_exercisesInclude<ExtArgs> | null
  }


  /**
   * Model sets
   */

  export type AggregateSets = {
    _count: SetsCountAggregateOutputType | null
    _avg: SetsAvgAggregateOutputType | null
    _sum: SetsSumAggregateOutputType | null
    _min: SetsMinAggregateOutputType | null
    _max: SetsMaxAggregateOutputType | null
  }

  export type SetsAvgAggregateOutputType = {
    set_id: number | null
    workout_exercise_id: number | null
    set_number: number | null
    weight: number | null
    reps: number | null
  }

  export type SetsSumAggregateOutputType = {
    set_id: number | null
    workout_exercise_id: number | null
    set_number: number | null
    weight: number | null
    reps: number | null
  }

  export type SetsMinAggregateOutputType = {
    set_id: number | null
    workout_exercise_id: number | null
    set_number: number | null
    weight: number | null
    reps: number | null
    completed: boolean | null
  }

  export type SetsMaxAggregateOutputType = {
    set_id: number | null
    workout_exercise_id: number | null
    set_number: number | null
    weight: number | null
    reps: number | null
    completed: boolean | null
  }

  export type SetsCountAggregateOutputType = {
    set_id: number
    workout_exercise_id: number
    set_number: number
    weight: number
    reps: number
    completed: number
    _all: number
  }


  export type SetsAvgAggregateInputType = {
    set_id?: true
    workout_exercise_id?: true
    set_number?: true
    weight?: true
    reps?: true
  }

  export type SetsSumAggregateInputType = {
    set_id?: true
    workout_exercise_id?: true
    set_number?: true
    weight?: true
    reps?: true
  }

  export type SetsMinAggregateInputType = {
    set_id?: true
    workout_exercise_id?: true
    set_number?: true
    weight?: true
    reps?: true
    completed?: true
  }

  export type SetsMaxAggregateInputType = {
    set_id?: true
    workout_exercise_id?: true
    set_number?: true
    weight?: true
    reps?: true
    completed?: true
  }

  export type SetsCountAggregateInputType = {
    set_id?: true
    workout_exercise_id?: true
    set_number?: true
    weight?: true
    reps?: true
    completed?: true
    _all?: true
  }

  export type SetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sets to aggregate.
     */
    where?: setsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sets to fetch.
     */
    orderBy?: setsOrderByWithRelationInput | setsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sets
    **/
    _count?: true | SetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetsMaxAggregateInputType
  }

  export type GetSetsAggregateType<T extends SetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSets[P]>
      : GetScalarType<T[P], AggregateSets[P]>
  }




  export type setsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setsWhereInput
    orderBy?: setsOrderByWithAggregationInput | setsOrderByWithAggregationInput[]
    by: SetsScalarFieldEnum[] | SetsScalarFieldEnum
    having?: setsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetsCountAggregateInputType | true
    _avg?: SetsAvgAggregateInputType
    _sum?: SetsSumAggregateInputType
    _min?: SetsMinAggregateInputType
    _max?: SetsMaxAggregateInputType
  }

  export type SetsGroupByOutputType = {
    set_id: number
    workout_exercise_id: number
    set_number: number
    weight: number
    reps: number
    completed: boolean
    _count: SetsCountAggregateOutputType | null
    _avg: SetsAvgAggregateOutputType | null
    _sum: SetsSumAggregateOutputType | null
    _min: SetsMinAggregateOutputType | null
    _max: SetsMaxAggregateOutputType | null
  }

  type GetSetsGroupByPayload<T extends setsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetsGroupByOutputType[P]>
            : GetScalarType<T[P], SetsGroupByOutputType[P]>
        }
      >
    >


  export type setsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    set_id?: boolean
    workout_exercise_id?: boolean
    set_number?: boolean
    weight?: boolean
    reps?: boolean
    completed?: boolean
    workout_exercise?: boolean | workout_exercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sets"]>


  export type setsSelectScalar = {
    set_id?: boolean
    workout_exercise_id?: boolean
    set_number?: boolean
    weight?: boolean
    reps?: boolean
    completed?: boolean
  }

  export type setsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout_exercise?: boolean | workout_exercisesDefaultArgs<ExtArgs>
  }

  export type $setsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sets"
    objects: {
      workout_exercise: Prisma.$workout_exercisesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      set_id: number
      workout_exercise_id: number
      set_number: number
      weight: number
      reps: number
      completed: boolean
    }, ExtArgs["result"]["sets"]>
    composites: {}
  }

  type setsGetPayload<S extends boolean | null | undefined | setsDefaultArgs> = $Result.GetResult<Prisma.$setsPayload, S>

  type setsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<setsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SetsCountAggregateInputType | true
    }

  export interface setsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sets'], meta: { name: 'sets' } }
    /**
     * Find zero or one Sets that matches the filter.
     * @param {setsFindUniqueArgs} args - Arguments to find a Sets
     * @example
     * // Get one Sets
     * const sets = await prisma.sets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setsFindUniqueArgs>(args: SelectSubset<T, setsFindUniqueArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {setsFindUniqueOrThrowArgs} args - Arguments to find a Sets
     * @example
     * // Get one Sets
     * const sets = await prisma.sets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setsFindUniqueOrThrowArgs>(args: SelectSubset<T, setsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsFindFirstArgs} args - Arguments to find a Sets
     * @example
     * // Get one Sets
     * const sets = await prisma.sets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setsFindFirstArgs>(args?: SelectSubset<T, setsFindFirstArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsFindFirstOrThrowArgs} args - Arguments to find a Sets
     * @example
     * // Get one Sets
     * const sets = await prisma.sets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setsFindFirstOrThrowArgs>(args?: SelectSubset<T, setsFindFirstOrThrowArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sets
     * const sets = await prisma.sets.findMany()
     * 
     * // Get first 10 Sets
     * const sets = await prisma.sets.findMany({ take: 10 })
     * 
     * // Only select the `set_id`
     * const setsWithSet_idOnly = await prisma.sets.findMany({ select: { set_id: true } })
     * 
     */
    findMany<T extends setsFindManyArgs>(args?: SelectSubset<T, setsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sets.
     * @param {setsCreateArgs} args - Arguments to create a Sets.
     * @example
     * // Create one Sets
     * const Sets = await prisma.sets.create({
     *   data: {
     *     // ... data to create a Sets
     *   }
     * })
     * 
     */
    create<T extends setsCreateArgs>(args: SelectSubset<T, setsCreateArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sets.
     * @param {setsCreateManyArgs} args - Arguments to create many Sets.
     * @example
     * // Create many Sets
     * const sets = await prisma.sets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setsCreateManyArgs>(args?: SelectSubset<T, setsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sets.
     * @param {setsDeleteArgs} args - Arguments to delete one Sets.
     * @example
     * // Delete one Sets
     * const Sets = await prisma.sets.delete({
     *   where: {
     *     // ... filter to delete one Sets
     *   }
     * })
     * 
     */
    delete<T extends setsDeleteArgs>(args: SelectSubset<T, setsDeleteArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sets.
     * @param {setsUpdateArgs} args - Arguments to update one Sets.
     * @example
     * // Update one Sets
     * const sets = await prisma.sets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setsUpdateArgs>(args: SelectSubset<T, setsUpdateArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sets.
     * @param {setsDeleteManyArgs} args - Arguments to filter Sets to delete.
     * @example
     * // Delete a few Sets
     * const { count } = await prisma.sets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setsDeleteManyArgs>(args?: SelectSubset<T, setsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sets
     * const sets = await prisma.sets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setsUpdateManyArgs>(args: SelectSubset<T, setsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sets.
     * @param {setsUpsertArgs} args - Arguments to update or create a Sets.
     * @example
     * // Update or create a Sets
     * const sets = await prisma.sets.upsert({
     *   create: {
     *     // ... data to create a Sets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sets we want to update
     *   }
     * })
     */
    upsert<T extends setsUpsertArgs>(args: SelectSubset<T, setsUpsertArgs<ExtArgs>>): Prisma__setsClient<$Result.GetResult<Prisma.$setsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsCountArgs} args - Arguments to filter Sets to count.
     * @example
     * // Count the number of Sets
     * const count = await prisma.sets.count({
     *   where: {
     *     // ... the filter for the Sets we want to count
     *   }
     * })
    **/
    count<T extends setsCountArgs>(
      args?: Subset<T, setsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SetsAggregateArgs>(args: Subset<T, SetsAggregateArgs>): Prisma.PrismaPromise<GetSetsAggregateType<T>>

    /**
     * Group by Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends setsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setsGroupByArgs['orderBy'] }
        : { orderBy?: setsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, setsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sets model
   */
  readonly fields: setsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout_exercise<T extends workout_exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workout_exercisesDefaultArgs<ExtArgs>>): Prisma__workout_exercisesClient<$Result.GetResult<Prisma.$workout_exercisesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sets model
   */ 
  interface setsFieldRefs {
    readonly set_id: FieldRef<"sets", 'Int'>
    readonly workout_exercise_id: FieldRef<"sets", 'Int'>
    readonly set_number: FieldRef<"sets", 'Int'>
    readonly weight: FieldRef<"sets", 'Float'>
    readonly reps: FieldRef<"sets", 'Int'>
    readonly completed: FieldRef<"sets", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * sets findUnique
   */
  export type setsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter, which sets to fetch.
     */
    where: setsWhereUniqueInput
  }

  /**
   * sets findUniqueOrThrow
   */
  export type setsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter, which sets to fetch.
     */
    where: setsWhereUniqueInput
  }

  /**
   * sets findFirst
   */
  export type setsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter, which sets to fetch.
     */
    where?: setsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sets to fetch.
     */
    orderBy?: setsOrderByWithRelationInput | setsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sets.
     */
    cursor?: setsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sets.
     */
    distinct?: SetsScalarFieldEnum | SetsScalarFieldEnum[]
  }

  /**
   * sets findFirstOrThrow
   */
  export type setsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter, which sets to fetch.
     */
    where?: setsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sets to fetch.
     */
    orderBy?: setsOrderByWithRelationInput | setsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sets.
     */
    cursor?: setsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sets.
     */
    distinct?: SetsScalarFieldEnum | SetsScalarFieldEnum[]
  }

  /**
   * sets findMany
   */
  export type setsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter, which sets to fetch.
     */
    where?: setsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sets to fetch.
     */
    orderBy?: setsOrderByWithRelationInput | setsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sets.
     */
    cursor?: setsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sets.
     */
    skip?: number
    distinct?: SetsScalarFieldEnum | SetsScalarFieldEnum[]
  }

  /**
   * sets create
   */
  export type setsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * The data needed to create a sets.
     */
    data: XOR<setsCreateInput, setsUncheckedCreateInput>
  }

  /**
   * sets createMany
   */
  export type setsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sets.
     */
    data: setsCreateManyInput | setsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sets update
   */
  export type setsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * The data needed to update a sets.
     */
    data: XOR<setsUpdateInput, setsUncheckedUpdateInput>
    /**
     * Choose, which sets to update.
     */
    where: setsWhereUniqueInput
  }

  /**
   * sets updateMany
   */
  export type setsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sets.
     */
    data: XOR<setsUpdateManyMutationInput, setsUncheckedUpdateManyInput>
    /**
     * Filter which sets to update
     */
    where?: setsWhereInput
  }

  /**
   * sets upsert
   */
  export type setsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * The filter to search for the sets to update in case it exists.
     */
    where: setsWhereUniqueInput
    /**
     * In case the sets found by the `where` argument doesn't exist, create a new sets with this data.
     */
    create: XOR<setsCreateInput, setsUncheckedCreateInput>
    /**
     * In case the sets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setsUpdateInput, setsUncheckedUpdateInput>
  }

  /**
   * sets delete
   */
  export type setsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
    /**
     * Filter which sets to delete.
     */
    where: setsWhereUniqueInput
  }

  /**
   * sets deleteMany
   */
  export type setsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sets to delete
     */
    where?: setsWhereInput
  }

  /**
   * sets without action
   */
  export type setsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sets
     */
    select?: setsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: setsInclude<ExtArgs> | null
  }


  /**
   * Model goals
   */

  export type AggregateGoals = {
    _count: GoalsCountAggregateOutputType | null
    _avg: GoalsAvgAggregateOutputType | null
    _sum: GoalsSumAggregateOutputType | null
    _min: GoalsMinAggregateOutputType | null
    _max: GoalsMaxAggregateOutputType | null
  }

  export type GoalsAvgAggregateOutputType = {
    goal_id: number | null
    user_id: number | null
    exercise_id: number | null
    target_weight: number | null
    target_reps: number | null
  }

  export type GoalsSumAggregateOutputType = {
    goal_id: number | null
    user_id: number | null
    exercise_id: number | null
    target_weight: number | null
    target_reps: number | null
  }

  export type GoalsMinAggregateOutputType = {
    goal_id: number | null
    user_id: number | null
    exercise_id: number | null
    target_weight: number | null
    target_reps: number | null
    achieved: boolean | null
    created_at: Date | null
  }

  export type GoalsMaxAggregateOutputType = {
    goal_id: number | null
    user_id: number | null
    exercise_id: number | null
    target_weight: number | null
    target_reps: number | null
    achieved: boolean | null
    created_at: Date | null
  }

  export type GoalsCountAggregateOutputType = {
    goal_id: number
    user_id: number
    exercise_id: number
    target_weight: number
    target_reps: number
    achieved: number
    created_at: number
    _all: number
  }


  export type GoalsAvgAggregateInputType = {
    goal_id?: true
    user_id?: true
    exercise_id?: true
    target_weight?: true
    target_reps?: true
  }

  export type GoalsSumAggregateInputType = {
    goal_id?: true
    user_id?: true
    exercise_id?: true
    target_weight?: true
    target_reps?: true
  }

  export type GoalsMinAggregateInputType = {
    goal_id?: true
    user_id?: true
    exercise_id?: true
    target_weight?: true
    target_reps?: true
    achieved?: true
    created_at?: true
  }

  export type GoalsMaxAggregateInputType = {
    goal_id?: true
    user_id?: true
    exercise_id?: true
    target_weight?: true
    target_reps?: true
    achieved?: true
    created_at?: true
  }

  export type GoalsCountAggregateInputType = {
    goal_id?: true
    user_id?: true
    exercise_id?: true
    target_weight?: true
    target_reps?: true
    achieved?: true
    created_at?: true
    _all?: true
  }

  export type GoalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goals to aggregate.
     */
    where?: goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goals
    **/
    _count?: true | GoalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalsMaxAggregateInputType
  }

  export type GetGoalsAggregateType<T extends GoalsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoals[P]>
      : GetScalarType<T[P], AggregateGoals[P]>
  }




  export type goalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalsWhereInput
    orderBy?: goalsOrderByWithAggregationInput | goalsOrderByWithAggregationInput[]
    by: GoalsScalarFieldEnum[] | GoalsScalarFieldEnum
    having?: goalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalsCountAggregateInputType | true
    _avg?: GoalsAvgAggregateInputType
    _sum?: GoalsSumAggregateInputType
    _min?: GoalsMinAggregateInputType
    _max?: GoalsMaxAggregateInputType
  }

  export type GoalsGroupByOutputType = {
    goal_id: number
    user_id: number
    exercise_id: number
    target_weight: number | null
    target_reps: number | null
    achieved: boolean
    created_at: Date
    _count: GoalsCountAggregateOutputType | null
    _avg: GoalsAvgAggregateOutputType | null
    _sum: GoalsSumAggregateOutputType | null
    _min: GoalsMinAggregateOutputType | null
    _max: GoalsMaxAggregateOutputType | null
  }

  type GetGoalsGroupByPayload<T extends goalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalsGroupByOutputType[P]>
            : GetScalarType<T[P], GoalsGroupByOutputType[P]>
        }
      >
    >


  export type goalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    goal_id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    target_weight?: boolean
    target_reps?: boolean
    achieved?: boolean
    created_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    exercise?: boolean | exercisesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goals"]>


  export type goalsSelectScalar = {
    goal_id?: boolean
    user_id?: boolean
    exercise_id?: boolean
    target_weight?: boolean
    target_reps?: boolean
    achieved?: boolean
    created_at?: boolean
  }

  export type goalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    exercise?: boolean | exercisesDefaultArgs<ExtArgs>
  }

  export type $goalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goals"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      exercise: Prisma.$exercisesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      goal_id: number
      user_id: number
      exercise_id: number
      target_weight: number | null
      target_reps: number | null
      achieved: boolean
      created_at: Date
    }, ExtArgs["result"]["goals"]>
    composites: {}
  }

  type goalsGetPayload<S extends boolean | null | undefined | goalsDefaultArgs> = $Result.GetResult<Prisma.$goalsPayload, S>

  type goalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<goalsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoalsCountAggregateInputType | true
    }

  export interface goalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goals'], meta: { name: 'goals' } }
    /**
     * Find zero or one Goals that matches the filter.
     * @param {goalsFindUniqueArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goalsFindUniqueArgs>(args: SelectSubset<T, goalsFindUniqueArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Goals that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {goalsFindUniqueOrThrowArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goalsFindUniqueOrThrowArgs>(args: SelectSubset<T, goalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindFirstArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goalsFindFirstArgs>(args?: SelectSubset<T, goalsFindFirstArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Goals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindFirstOrThrowArgs} args - Arguments to find a Goals
     * @example
     * // Get one Goals
     * const goals = await prisma.goals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goalsFindFirstOrThrowArgs>(args?: SelectSubset<T, goalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goals.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goals.findMany({ take: 10 })
     * 
     * // Only select the `goal_id`
     * const goalsWithGoal_idOnly = await prisma.goals.findMany({ select: { goal_id: true } })
     * 
     */
    findMany<T extends goalsFindManyArgs>(args?: SelectSubset<T, goalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Goals.
     * @param {goalsCreateArgs} args - Arguments to create a Goals.
     * @example
     * // Create one Goals
     * const Goals = await prisma.goals.create({
     *   data: {
     *     // ... data to create a Goals
     *   }
     * })
     * 
     */
    create<T extends goalsCreateArgs>(args: SelectSubset<T, goalsCreateArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Goals.
     * @param {goalsCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goals = await prisma.goals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goalsCreateManyArgs>(args?: SelectSubset<T, goalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goals.
     * @param {goalsDeleteArgs} args - Arguments to delete one Goals.
     * @example
     * // Delete one Goals
     * const Goals = await prisma.goals.delete({
     *   where: {
     *     // ... filter to delete one Goals
     *   }
     * })
     * 
     */
    delete<T extends goalsDeleteArgs>(args: SelectSubset<T, goalsDeleteArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Goals.
     * @param {goalsUpdateArgs} args - Arguments to update one Goals.
     * @example
     * // Update one Goals
     * const goals = await prisma.goals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goalsUpdateArgs>(args: SelectSubset<T, goalsUpdateArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Goals.
     * @param {goalsDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goalsDeleteManyArgs>(args?: SelectSubset<T, goalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goals = await prisma.goals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goalsUpdateManyArgs>(args: SelectSubset<T, goalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goals.
     * @param {goalsUpsertArgs} args - Arguments to update or create a Goals.
     * @example
     * // Update or create a Goals
     * const goals = await prisma.goals.upsert({
     *   create: {
     *     // ... data to create a Goals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goals we want to update
     *   }
     * })
     */
    upsert<T extends goalsUpsertArgs>(args: SelectSubset<T, goalsUpsertArgs<ExtArgs>>): Prisma__goalsClient<$Result.GetResult<Prisma.$goalsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goals.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends goalsCountArgs>(
      args?: Subset<T, goalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalsAggregateArgs>(args: Subset<T, GoalsAggregateArgs>): Prisma.PrismaPromise<GetGoalsAggregateType<T>>

    /**
     * Group by Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalsGroupByArgs['orderBy'] }
        : { orderBy?: goalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goals model
   */
  readonly fields: goalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exercise<T extends exercisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, exercisesDefaultArgs<ExtArgs>>): Prisma__exercisesClient<$Result.GetResult<Prisma.$exercisesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goals model
   */ 
  interface goalsFieldRefs {
    readonly goal_id: FieldRef<"goals", 'Int'>
    readonly user_id: FieldRef<"goals", 'Int'>
    readonly exercise_id: FieldRef<"goals", 'Int'>
    readonly target_weight: FieldRef<"goals", 'Float'>
    readonly target_reps: FieldRef<"goals", 'Int'>
    readonly achieved: FieldRef<"goals", 'Boolean'>
    readonly created_at: FieldRef<"goals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * goals findUnique
   */
  export type goalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where: goalsWhereUniqueInput
  }

  /**
   * goals findUniqueOrThrow
   */
  export type goalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where: goalsWhereUniqueInput
  }

  /**
   * goals findFirst
   */
  export type goalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[]
  }

  /**
   * goals findFirstOrThrow
   */
  export type goalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goals.
     */
    cursor?: goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goals.
     */
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[]
  }

  /**
   * goals findMany
   */
  export type goalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter, which goals to fetch.
     */
    where?: goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goals to fetch.
     */
    orderBy?: goalsOrderByWithRelationInput | goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goals.
     */
    cursor?: goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goals.
     */
    skip?: number
    distinct?: GoalsScalarFieldEnum | GoalsScalarFieldEnum[]
  }

  /**
   * goals create
   */
  export type goalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * The data needed to create a goals.
     */
    data: XOR<goalsCreateInput, goalsUncheckedCreateInput>
  }

  /**
   * goals createMany
   */
  export type goalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goals.
     */
    data: goalsCreateManyInput | goalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goals update
   */
  export type goalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * The data needed to update a goals.
     */
    data: XOR<goalsUpdateInput, goalsUncheckedUpdateInput>
    /**
     * Choose, which goals to update.
     */
    where: goalsWhereUniqueInput
  }

  /**
   * goals updateMany
   */
  export type goalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalsUpdateManyMutationInput, goalsUncheckedUpdateManyInput>
    /**
     * Filter which goals to update
     */
    where?: goalsWhereInput
  }

  /**
   * goals upsert
   */
  export type goalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * The filter to search for the goals to update in case it exists.
     */
    where: goalsWhereUniqueInput
    /**
     * In case the goals found by the `where` argument doesn't exist, create a new goals with this data.
     */
    create: XOR<goalsCreateInput, goalsUncheckedCreateInput>
    /**
     * In case the goals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalsUpdateInput, goalsUncheckedUpdateInput>
  }

  /**
   * goals delete
   */
  export type goalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
    /**
     * Filter which goals to delete.
     */
    where: goalsWhereUniqueInput
  }

  /**
   * goals deleteMany
   */
  export type goalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goals to delete
     */
    where?: goalsWhereInput
  }

  /**
   * goals without action
   */
  export type goalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goals
     */
    select?: goalsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: goalsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    exercise_id: 'exercise_id',
    name: 'name',
    description: 'description',
    video_url: 'video_url',
    muscle_group: 'muscle_group'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const WorkoutsScalarFieldEnum: {
    workout_id: 'workout_id',
    user_id: 'user_id',
    name: 'name',
    date: 'date',
    notes: 'notes'
  };

  export type WorkoutsScalarFieldEnum = (typeof WorkoutsScalarFieldEnum)[keyof typeof WorkoutsScalarFieldEnum]


  export const Workout_exercisesScalarFieldEnum: {
    workout_exercise_id: 'workout_exercise_id',
    workout_id: 'workout_id',
    exercise_id: 'exercise_id',
    order: 'order'
  };

  export type Workout_exercisesScalarFieldEnum = (typeof Workout_exercisesScalarFieldEnum)[keyof typeof Workout_exercisesScalarFieldEnum]


  export const SetsScalarFieldEnum: {
    set_id: 'set_id',
    workout_exercise_id: 'workout_exercise_id',
    set_number: 'set_number',
    weight: 'weight',
    reps: 'reps',
    completed: 'completed'
  };

  export type SetsScalarFieldEnum = (typeof SetsScalarFieldEnum)[keyof typeof SetsScalarFieldEnum]


  export const GoalsScalarFieldEnum: {
    goal_id: 'goal_id',
    user_id: 'user_id',
    exercise_id: 'exercise_id',
    target_weight: 'target_weight',
    target_reps: 'target_reps',
    achieved: 'achieved',
    created_at: 'created_at'
  };

  export type GoalsScalarFieldEnum = (typeof GoalsScalarFieldEnum)[keyof typeof GoalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    workouts?: WorkoutsListRelationFilter
    goals?: GoalsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    workouts?: workoutsOrderByRelationAggregateInput
    goals?: goalsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    workouts?: WorkoutsListRelationFilter
    goals?: GoalsListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type exercisesWhereInput = {
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    exercise_id?: IntFilter<"exercises"> | number
    name?: StringFilter<"exercises"> | string
    description?: StringNullableFilter<"exercises"> | string | null
    video_url?: StringNullableFilter<"exercises"> | string | null
    muscle_group?: StringFilter<"exercises"> | string
    workout_exercises?: Workout_exercisesListRelationFilter
    goals?: GoalsListRelationFilter
  }

  export type exercisesOrderByWithRelationInput = {
    exercise_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    muscle_group?: SortOrder
    workout_exercises?: workout_exercisesOrderByRelationAggregateInput
    goals?: goalsOrderByRelationAggregateInput
  }

  export type exercisesWhereUniqueInput = Prisma.AtLeast<{
    exercise_id?: number
    AND?: exercisesWhereInput | exercisesWhereInput[]
    OR?: exercisesWhereInput[]
    NOT?: exercisesWhereInput | exercisesWhereInput[]
    name?: StringFilter<"exercises"> | string
    description?: StringNullableFilter<"exercises"> | string | null
    video_url?: StringNullableFilter<"exercises"> | string | null
    muscle_group?: StringFilter<"exercises"> | string
    workout_exercises?: Workout_exercisesListRelationFilter
    goals?: GoalsListRelationFilter
  }, "exercise_id">

  export type exercisesOrderByWithAggregationInput = {
    exercise_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    muscle_group?: SortOrder
    _count?: exercisesCountOrderByAggregateInput
    _avg?: exercisesAvgOrderByAggregateInput
    _max?: exercisesMaxOrderByAggregateInput
    _min?: exercisesMinOrderByAggregateInput
    _sum?: exercisesSumOrderByAggregateInput
  }

  export type exercisesScalarWhereWithAggregatesInput = {
    AND?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    OR?: exercisesScalarWhereWithAggregatesInput[]
    NOT?: exercisesScalarWhereWithAggregatesInput | exercisesScalarWhereWithAggregatesInput[]
    exercise_id?: IntWithAggregatesFilter<"exercises"> | number
    name?: StringWithAggregatesFilter<"exercises"> | string
    description?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"exercises"> | string | null
    muscle_group?: StringWithAggregatesFilter<"exercises"> | string
  }

  export type workoutsWhereInput = {
    AND?: workoutsWhereInput | workoutsWhereInput[]
    OR?: workoutsWhereInput[]
    NOT?: workoutsWhereInput | workoutsWhereInput[]
    workout_id?: IntFilter<"workouts"> | number
    user_id?: IntFilter<"workouts"> | number
    name?: StringNullableFilter<"workouts"> | string | null
    date?: DateTimeFilter<"workouts"> | Date | string
    notes?: StringNullableFilter<"workouts"> | string | null
    user?: XOR<UsersRelationFilter, usersWhereInput>
    workout_exercises?: Workout_exercisesListRelationFilter
  }

  export type workoutsOrderByWithRelationInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    workout_exercises?: workout_exercisesOrderByRelationAggregateInput
  }

  export type workoutsWhereUniqueInput = Prisma.AtLeast<{
    workout_id?: number
    AND?: workoutsWhereInput | workoutsWhereInput[]
    OR?: workoutsWhereInput[]
    NOT?: workoutsWhereInput | workoutsWhereInput[]
    user_id?: IntFilter<"workouts"> | number
    name?: StringNullableFilter<"workouts"> | string | null
    date?: DateTimeFilter<"workouts"> | Date | string
    notes?: StringNullableFilter<"workouts"> | string | null
    user?: XOR<UsersRelationFilter, usersWhereInput>
    workout_exercises?: Workout_exercisesListRelationFilter
  }, "workout_id">

  export type workoutsOrderByWithAggregationInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: workoutsCountOrderByAggregateInput
    _avg?: workoutsAvgOrderByAggregateInput
    _max?: workoutsMaxOrderByAggregateInput
    _min?: workoutsMinOrderByAggregateInput
    _sum?: workoutsSumOrderByAggregateInput
  }

  export type workoutsScalarWhereWithAggregatesInput = {
    AND?: workoutsScalarWhereWithAggregatesInput | workoutsScalarWhereWithAggregatesInput[]
    OR?: workoutsScalarWhereWithAggregatesInput[]
    NOT?: workoutsScalarWhereWithAggregatesInput | workoutsScalarWhereWithAggregatesInput[]
    workout_id?: IntWithAggregatesFilter<"workouts"> | number
    user_id?: IntWithAggregatesFilter<"workouts"> | number
    name?: StringNullableWithAggregatesFilter<"workouts"> | string | null
    date?: DateTimeWithAggregatesFilter<"workouts"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"workouts"> | string | null
  }

  export type workout_exercisesWhereInput = {
    AND?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    OR?: workout_exercisesWhereInput[]
    NOT?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    workout_exercise_id?: IntFilter<"workout_exercises"> | number
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    order?: IntFilter<"workout_exercises"> | number
    workout?: XOR<WorkoutsRelationFilter, workoutsWhereInput>
    exercise?: XOR<ExercisesRelationFilter, exercisesWhereInput>
    sets?: SetsListRelationFilter
  }

  export type workout_exercisesOrderByWithRelationInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
    workout?: workoutsOrderByWithRelationInput
    exercise?: exercisesOrderByWithRelationInput
    sets?: setsOrderByRelationAggregateInput
  }

  export type workout_exercisesWhereUniqueInput = Prisma.AtLeast<{
    workout_exercise_id?: number
    AND?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    OR?: workout_exercisesWhereInput[]
    NOT?: workout_exercisesWhereInput | workout_exercisesWhereInput[]
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    order?: IntFilter<"workout_exercises"> | number
    workout?: XOR<WorkoutsRelationFilter, workoutsWhereInput>
    exercise?: XOR<ExercisesRelationFilter, exercisesWhereInput>
    sets?: SetsListRelationFilter
  }, "workout_exercise_id">

  export type workout_exercisesOrderByWithAggregationInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
    _count?: workout_exercisesCountOrderByAggregateInput
    _avg?: workout_exercisesAvgOrderByAggregateInput
    _max?: workout_exercisesMaxOrderByAggregateInput
    _min?: workout_exercisesMinOrderByAggregateInput
    _sum?: workout_exercisesSumOrderByAggregateInput
  }

  export type workout_exercisesScalarWhereWithAggregatesInput = {
    AND?: workout_exercisesScalarWhereWithAggregatesInput | workout_exercisesScalarWhereWithAggregatesInput[]
    OR?: workout_exercisesScalarWhereWithAggregatesInput[]
    NOT?: workout_exercisesScalarWhereWithAggregatesInput | workout_exercisesScalarWhereWithAggregatesInput[]
    workout_exercise_id?: IntWithAggregatesFilter<"workout_exercises"> | number
    workout_id?: IntWithAggregatesFilter<"workout_exercises"> | number
    exercise_id?: IntWithAggregatesFilter<"workout_exercises"> | number
    order?: IntWithAggregatesFilter<"workout_exercises"> | number
  }

  export type setsWhereInput = {
    AND?: setsWhereInput | setsWhereInput[]
    OR?: setsWhereInput[]
    NOT?: setsWhereInput | setsWhereInput[]
    set_id?: IntFilter<"sets"> | number
    workout_exercise_id?: IntFilter<"sets"> | number
    set_number?: IntFilter<"sets"> | number
    weight?: FloatFilter<"sets"> | number
    reps?: IntFilter<"sets"> | number
    completed?: BoolFilter<"sets"> | boolean
    workout_exercise?: XOR<Workout_exercisesRelationFilter, workout_exercisesWhereInput>
  }

  export type setsOrderByWithRelationInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    completed?: SortOrder
    workout_exercise?: workout_exercisesOrderByWithRelationInput
  }

  export type setsWhereUniqueInput = Prisma.AtLeast<{
    set_id?: number
    AND?: setsWhereInput | setsWhereInput[]
    OR?: setsWhereInput[]
    NOT?: setsWhereInput | setsWhereInput[]
    workout_exercise_id?: IntFilter<"sets"> | number
    set_number?: IntFilter<"sets"> | number
    weight?: FloatFilter<"sets"> | number
    reps?: IntFilter<"sets"> | number
    completed?: BoolFilter<"sets"> | boolean
    workout_exercise?: XOR<Workout_exercisesRelationFilter, workout_exercisesWhereInput>
  }, "set_id">

  export type setsOrderByWithAggregationInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    completed?: SortOrder
    _count?: setsCountOrderByAggregateInput
    _avg?: setsAvgOrderByAggregateInput
    _max?: setsMaxOrderByAggregateInput
    _min?: setsMinOrderByAggregateInput
    _sum?: setsSumOrderByAggregateInput
  }

  export type setsScalarWhereWithAggregatesInput = {
    AND?: setsScalarWhereWithAggregatesInput | setsScalarWhereWithAggregatesInput[]
    OR?: setsScalarWhereWithAggregatesInput[]
    NOT?: setsScalarWhereWithAggregatesInput | setsScalarWhereWithAggregatesInput[]
    set_id?: IntWithAggregatesFilter<"sets"> | number
    workout_exercise_id?: IntWithAggregatesFilter<"sets"> | number
    set_number?: IntWithAggregatesFilter<"sets"> | number
    weight?: FloatWithAggregatesFilter<"sets"> | number
    reps?: IntWithAggregatesFilter<"sets"> | number
    completed?: BoolWithAggregatesFilter<"sets"> | boolean
  }

  export type goalsWhereInput = {
    AND?: goalsWhereInput | goalsWhereInput[]
    OR?: goalsWhereInput[]
    NOT?: goalsWhereInput | goalsWhereInput[]
    goal_id?: IntFilter<"goals"> | number
    user_id?: IntFilter<"goals"> | number
    exercise_id?: IntFilter<"goals"> | number
    target_weight?: FloatNullableFilter<"goals"> | number | null
    target_reps?: IntNullableFilter<"goals"> | number | null
    achieved?: BoolFilter<"goals"> | boolean
    created_at?: DateTimeFilter<"goals"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    exercise?: XOR<ExercisesRelationFilter, exercisesWhereInput>
  }

  export type goalsOrderByWithRelationInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrderInput | SortOrder
    target_reps?: SortOrderInput | SortOrder
    achieved?: SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    exercise?: exercisesOrderByWithRelationInput
  }

  export type goalsWhereUniqueInput = Prisma.AtLeast<{
    goal_id?: number
    AND?: goalsWhereInput | goalsWhereInput[]
    OR?: goalsWhereInput[]
    NOT?: goalsWhereInput | goalsWhereInput[]
    user_id?: IntFilter<"goals"> | number
    exercise_id?: IntFilter<"goals"> | number
    target_weight?: FloatNullableFilter<"goals"> | number | null
    target_reps?: IntNullableFilter<"goals"> | number | null
    achieved?: BoolFilter<"goals"> | boolean
    created_at?: DateTimeFilter<"goals"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    exercise?: XOR<ExercisesRelationFilter, exercisesWhereInput>
  }, "goal_id">

  export type goalsOrderByWithAggregationInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrderInput | SortOrder
    target_reps?: SortOrderInput | SortOrder
    achieved?: SortOrder
    created_at?: SortOrder
    _count?: goalsCountOrderByAggregateInput
    _avg?: goalsAvgOrderByAggregateInput
    _max?: goalsMaxOrderByAggregateInput
    _min?: goalsMinOrderByAggregateInput
    _sum?: goalsSumOrderByAggregateInput
  }

  export type goalsScalarWhereWithAggregatesInput = {
    AND?: goalsScalarWhereWithAggregatesInput | goalsScalarWhereWithAggregatesInput[]
    OR?: goalsScalarWhereWithAggregatesInput[]
    NOT?: goalsScalarWhereWithAggregatesInput | goalsScalarWhereWithAggregatesInput[]
    goal_id?: IntWithAggregatesFilter<"goals"> | number
    user_id?: IntWithAggregatesFilter<"goals"> | number
    exercise_id?: IntWithAggregatesFilter<"goals"> | number
    target_weight?: FloatNullableWithAggregatesFilter<"goals"> | number | null
    target_reps?: IntNullableWithAggregatesFilter<"goals"> | number | null
    achieved?: BoolWithAggregatesFilter<"goals"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"goals"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    workouts?: workoutsCreateNestedManyWithoutUserInput
    goals?: goalsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    workouts?: workoutsUncheckedCreateNestedManyWithoutUserInput
    goals?: goalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: workoutsUpdateManyWithoutUserNestedInput
    goals?: goalsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: workoutsUncheckedUpdateManyWithoutUserNestedInput
    goals?: goalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type exercisesCreateInput = {
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    workout_exercises?: workout_exercisesCreateNestedManyWithoutExerciseInput
    goals?: goalsCreateNestedManyWithoutExerciseInput
  }

  export type exercisesUncheckedCreateInput = {
    exercise_id?: number
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutExerciseInput
    goals?: goalsUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exercisesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    workout_exercises?: workout_exercisesUpdateManyWithoutExerciseNestedInput
    goals?: goalsUpdateManyWithoutExerciseNestedInput
  }

  export type exercisesUncheckedUpdateInput = {
    exercise_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutExerciseNestedInput
    goals?: goalsUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type exercisesCreateManyInput = {
    exercise_id?: number
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
  }

  export type exercisesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type exercisesUncheckedUpdateManyInput = {
    exercise_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
  }

  export type workoutsCreateInput = {
    name?: string | null
    date?: Date | string
    notes?: string | null
    user: usersCreateNestedOneWithoutWorkoutsInput
    workout_exercises?: workout_exercisesCreateNestedManyWithoutWorkoutInput
  }

  export type workoutsUncheckedCreateInput = {
    workout_id?: number
    user_id: number
    name?: string | null
    date?: Date | string
    notes?: string | null
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type workoutsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutWorkoutsNestedInput
    workout_exercises?: workout_exercisesUpdateManyWithoutWorkoutNestedInput
  }

  export type workoutsUncheckedUpdateInput = {
    workout_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type workoutsCreateManyInput = {
    workout_id?: number
    user_id: number
    name?: string | null
    date?: Date | string
    notes?: string | null
  }

  export type workoutsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workoutsUncheckedUpdateManyInput = {
    workout_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workout_exercisesCreateInput = {
    order?: number
    workout: workoutsCreateNestedOneWithoutWorkout_exercisesInput
    exercise: exercisesCreateNestedOneWithoutWorkout_exercisesInput
    sets?: setsCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesUncheckedCreateInput = {
    workout_exercise_id?: number
    workout_id: number
    exercise_id: number
    order?: number
    sets?: setsUncheckedCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    workout?: workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    exercise?: exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    sets?: setsUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesUncheckedUpdateInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: setsUncheckedUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesCreateManyInput = {
    workout_exercise_id?: number
    workout_id: number
    exercise_id: number
    order?: number
  }

  export type workout_exercisesUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type workout_exercisesUncheckedUpdateManyInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type setsCreateInput = {
    set_number: number
    weight: number
    reps: number
    completed?: boolean
    workout_exercise: workout_exercisesCreateNestedOneWithoutSetsInput
  }

  export type setsUncheckedCreateInput = {
    set_id?: number
    workout_exercise_id: number
    set_number: number
    weight: number
    reps: number
    completed?: boolean
  }

  export type setsUpdateInput = {
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    workout_exercise?: workout_exercisesUpdateOneRequiredWithoutSetsNestedInput
  }

  export type setsUncheckedUpdateInput = {
    set_id?: IntFieldUpdateOperationsInput | number
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type setsCreateManyInput = {
    set_id?: number
    workout_exercise_id: number
    set_number: number
    weight: number
    reps: number
    completed?: boolean
  }

  export type setsUpdateManyMutationInput = {
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type setsUncheckedUpdateManyInput = {
    set_id?: IntFieldUpdateOperationsInput | number
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type goalsCreateInput = {
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
    user: usersCreateNestedOneWithoutGoalsInput
    exercise: exercisesCreateNestedOneWithoutGoalsInput
  }

  export type goalsUncheckedCreateInput = {
    goal_id?: number
    user_id: number
    exercise_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type goalsUpdateInput = {
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutGoalsNestedInput
    exercise?: exercisesUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type goalsUncheckedUpdateInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goalsCreateManyInput = {
    goal_id?: number
    user_id: number
    exercise_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type goalsUpdateManyMutationInput = {
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goalsUncheckedUpdateManyInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkoutsListRelationFilter = {
    every?: workoutsWhereInput
    some?: workoutsWhereInput
    none?: workoutsWhereInput
  }

  export type GoalsListRelationFilter = {
    every?: goalsWhereInput
    some?: goalsWhereInput
    none?: goalsWhereInput
  }

  export type workoutsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Workout_exercisesListRelationFilter = {
    every?: workout_exercisesWhereInput
    some?: workout_exercisesWhereInput
    none?: workout_exercisesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type workout_exercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exercisesCountOrderByAggregateInput = {
    exercise_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    muscle_group?: SortOrder
  }

  export type exercisesAvgOrderByAggregateInput = {
    exercise_id?: SortOrder
  }

  export type exercisesMaxOrderByAggregateInput = {
    exercise_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    muscle_group?: SortOrder
  }

  export type exercisesMinOrderByAggregateInput = {
    exercise_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    muscle_group?: SortOrder
  }

  export type exercisesSumOrderByAggregateInput = {
    exercise_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type workoutsCountOrderByAggregateInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type workoutsAvgOrderByAggregateInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
  }

  export type workoutsMaxOrderByAggregateInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type workoutsMinOrderByAggregateInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    notes?: SortOrder
  }

  export type workoutsSumOrderByAggregateInput = {
    workout_id?: SortOrder
    user_id?: SortOrder
  }

  export type WorkoutsRelationFilter = {
    is?: workoutsWhereInput
    isNot?: workoutsWhereInput
  }

  export type ExercisesRelationFilter = {
    is?: exercisesWhereInput
    isNot?: exercisesWhereInput
  }

  export type SetsListRelationFilter = {
    every?: setsWhereInput
    some?: setsWhereInput
    none?: setsWhereInput
  }

  export type setsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workout_exercisesCountOrderByAggregateInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
  }

  export type workout_exercisesAvgOrderByAggregateInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
  }

  export type workout_exercisesMaxOrderByAggregateInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
  }

  export type workout_exercisesMinOrderByAggregateInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
  }

  export type workout_exercisesSumOrderByAggregateInput = {
    workout_exercise_id?: SortOrder
    workout_id?: SortOrder
    exercise_id?: SortOrder
    order?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Workout_exercisesRelationFilter = {
    is?: workout_exercisesWhereInput
    isNot?: workout_exercisesWhereInput
  }

  export type setsCountOrderByAggregateInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    completed?: SortOrder
  }

  export type setsAvgOrderByAggregateInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
  }

  export type setsMaxOrderByAggregateInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    completed?: SortOrder
  }

  export type setsMinOrderByAggregateInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
    completed?: SortOrder
  }

  export type setsSumOrderByAggregateInput = {
    set_id?: SortOrder
    workout_exercise_id?: SortOrder
    set_number?: SortOrder
    weight?: SortOrder
    reps?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type goalsCountOrderByAggregateInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrder
    target_reps?: SortOrder
    achieved?: SortOrder
    created_at?: SortOrder
  }

  export type goalsAvgOrderByAggregateInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrder
    target_reps?: SortOrder
  }

  export type goalsMaxOrderByAggregateInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrder
    target_reps?: SortOrder
    achieved?: SortOrder
    created_at?: SortOrder
  }

  export type goalsMinOrderByAggregateInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrder
    target_reps?: SortOrder
    achieved?: SortOrder
    created_at?: SortOrder
  }

  export type goalsSumOrderByAggregateInput = {
    goal_id?: SortOrder
    user_id?: SortOrder
    exercise_id?: SortOrder
    target_weight?: SortOrder
    target_reps?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type workoutsCreateNestedManyWithoutUserInput = {
    create?: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput> | workoutsCreateWithoutUserInput[] | workoutsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUserInput | workoutsCreateOrConnectWithoutUserInput[]
    createMany?: workoutsCreateManyUserInputEnvelope
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
  }

  export type goalsCreateNestedManyWithoutUserInput = {
    create?: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput> | goalsCreateWithoutUserInput[] | goalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutUserInput | goalsCreateOrConnectWithoutUserInput[]
    createMany?: goalsCreateManyUserInputEnvelope
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
  }

  export type workoutsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput> | workoutsCreateWithoutUserInput[] | workoutsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUserInput | workoutsCreateOrConnectWithoutUserInput[]
    createMany?: workoutsCreateManyUserInputEnvelope
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
  }

  export type goalsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput> | goalsCreateWithoutUserInput[] | goalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutUserInput | goalsCreateOrConnectWithoutUserInput[]
    createMany?: goalsCreateManyUserInputEnvelope
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type workoutsUpdateManyWithoutUserNestedInput = {
    create?: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput> | workoutsCreateWithoutUserInput[] | workoutsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUserInput | workoutsCreateOrConnectWithoutUserInput[]
    upsert?: workoutsUpsertWithWhereUniqueWithoutUserInput | workoutsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workoutsCreateManyUserInputEnvelope
    set?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    disconnect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    delete?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    update?: workoutsUpdateWithWhereUniqueWithoutUserInput | workoutsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workoutsUpdateManyWithWhereWithoutUserInput | workoutsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
  }

  export type goalsUpdateManyWithoutUserNestedInput = {
    create?: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput> | goalsCreateWithoutUserInput[] | goalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutUserInput | goalsCreateOrConnectWithoutUserInput[]
    upsert?: goalsUpsertWithWhereUniqueWithoutUserInput | goalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goalsCreateManyUserInputEnvelope
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    update?: goalsUpdateWithWhereUniqueWithoutUserInput | goalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goalsUpdateManyWithWhereWithoutUserInput | goalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type workoutsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput> | workoutsCreateWithoutUserInput[] | workoutsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workoutsCreateOrConnectWithoutUserInput | workoutsCreateOrConnectWithoutUserInput[]
    upsert?: workoutsUpsertWithWhereUniqueWithoutUserInput | workoutsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workoutsCreateManyUserInputEnvelope
    set?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    disconnect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    delete?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    connect?: workoutsWhereUniqueInput | workoutsWhereUniqueInput[]
    update?: workoutsUpdateWithWhereUniqueWithoutUserInput | workoutsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workoutsUpdateManyWithWhereWithoutUserInput | workoutsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
  }

  export type goalsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput> | goalsCreateWithoutUserInput[] | goalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutUserInput | goalsCreateOrConnectWithoutUserInput[]
    upsert?: goalsUpsertWithWhereUniqueWithoutUserInput | goalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goalsCreateManyUserInputEnvelope
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    update?: goalsUpdateWithWhereUniqueWithoutUserInput | goalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goalsUpdateManyWithWhereWithoutUserInput | goalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[]
  }

  export type workout_exercisesCreateNestedManyWithoutExerciseInput = {
    create?: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput> | workout_exercisesCreateWithoutExerciseInput[] | workout_exercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExerciseInput | workout_exercisesCreateOrConnectWithoutExerciseInput[]
    createMany?: workout_exercisesCreateManyExerciseInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type goalsCreateNestedManyWithoutExerciseInput = {
    create?: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput> | goalsCreateWithoutExerciseInput[] | goalsUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutExerciseInput | goalsCreateOrConnectWithoutExerciseInput[]
    createMany?: goalsCreateManyExerciseInputEnvelope
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
  }

  export type workout_exercisesUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput> | workout_exercisesCreateWithoutExerciseInput[] | workout_exercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExerciseInput | workout_exercisesCreateOrConnectWithoutExerciseInput[]
    createMany?: workout_exercisesCreateManyExerciseInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type goalsUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput> | goalsCreateWithoutExerciseInput[] | goalsUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutExerciseInput | goalsCreateOrConnectWithoutExerciseInput[]
    createMany?: goalsCreateManyExerciseInputEnvelope
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type workout_exercisesUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput> | workout_exercisesCreateWithoutExerciseInput[] | workout_exercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExerciseInput | workout_exercisesCreateOrConnectWithoutExerciseInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutExerciseInput | workout_exercisesUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: workout_exercisesCreateManyExerciseInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutExerciseInput | workout_exercisesUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutExerciseInput | workout_exercisesUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type goalsUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput> | goalsCreateWithoutExerciseInput[] | goalsUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutExerciseInput | goalsCreateOrConnectWithoutExerciseInput[]
    upsert?: goalsUpsertWithWhereUniqueWithoutExerciseInput | goalsUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: goalsCreateManyExerciseInputEnvelope
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    update?: goalsUpdateWithWhereUniqueWithoutExerciseInput | goalsUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: goalsUpdateManyWithWhereWithoutExerciseInput | goalsUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[]
  }

  export type workout_exercisesUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput> | workout_exercisesCreateWithoutExerciseInput[] | workout_exercisesUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutExerciseInput | workout_exercisesCreateOrConnectWithoutExerciseInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutExerciseInput | workout_exercisesUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: workout_exercisesCreateManyExerciseInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutExerciseInput | workout_exercisesUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutExerciseInput | workout_exercisesUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type goalsUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput> | goalsCreateWithoutExerciseInput[] | goalsUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: goalsCreateOrConnectWithoutExerciseInput | goalsCreateOrConnectWithoutExerciseInput[]
    upsert?: goalsUpsertWithWhereUniqueWithoutExerciseInput | goalsUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: goalsCreateManyExerciseInputEnvelope
    set?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    disconnect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    delete?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    connect?: goalsWhereUniqueInput | goalsWhereUniqueInput[]
    update?: goalsUpdateWithWhereUniqueWithoutExerciseInput | goalsUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: goalsUpdateManyWithWhereWithoutExerciseInput | goalsUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: goalsScalarWhereInput | goalsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkoutsInput
    connect?: usersWhereUniqueInput
  }

  export type workout_exercisesCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput> | workout_exercisesCreateWithoutWorkoutInput[] | workout_exercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutInput | workout_exercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: workout_exercisesCreateManyWorkoutInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type workout_exercisesUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput> | workout_exercisesCreateWithoutWorkoutInput[] | workout_exercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutInput | workout_exercisesCreateOrConnectWithoutWorkoutInput[]
    createMany?: workout_exercisesCreateManyWorkoutInputEnvelope
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkoutsInput
    upsert?: usersUpsertWithoutWorkoutsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkoutsInput, usersUpdateWithoutWorkoutsInput>, usersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type workout_exercisesUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput> | workout_exercisesCreateWithoutWorkoutInput[] | workout_exercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutInput | workout_exercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutWorkoutInput | workout_exercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: workout_exercisesCreateManyWorkoutInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutWorkoutInput | workout_exercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutWorkoutInput | workout_exercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type workout_exercisesUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput> | workout_exercisesCreateWithoutWorkoutInput[] | workout_exercisesUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutWorkoutInput | workout_exercisesCreateOrConnectWithoutWorkoutInput[]
    upsert?: workout_exercisesUpsertWithWhereUniqueWithoutWorkoutInput | workout_exercisesUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: workout_exercisesCreateManyWorkoutInputEnvelope
    set?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    disconnect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    delete?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    connect?: workout_exercisesWhereUniqueInput | workout_exercisesWhereUniqueInput[]
    update?: workout_exercisesUpdateWithWhereUniqueWithoutWorkoutInput | workout_exercisesUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: workout_exercisesUpdateManyWithWhereWithoutWorkoutInput | workout_exercisesUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
  }

  export type workoutsCreateNestedOneWithoutWorkout_exercisesInput = {
    create?: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_exercisesInput
    connect?: workoutsWhereUniqueInput
  }

  export type exercisesCreateNestedOneWithoutWorkout_exercisesInput = {
    create?: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_exercisesInput
    connect?: exercisesWhereUniqueInput
  }

  export type setsCreateNestedManyWithoutWorkout_exerciseInput = {
    create?: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput> | setsCreateWithoutWorkout_exerciseInput[] | setsUncheckedCreateWithoutWorkout_exerciseInput[]
    connectOrCreate?: setsCreateOrConnectWithoutWorkout_exerciseInput | setsCreateOrConnectWithoutWorkout_exerciseInput[]
    createMany?: setsCreateManyWorkout_exerciseInputEnvelope
    connect?: setsWhereUniqueInput | setsWhereUniqueInput[]
  }

  export type setsUncheckedCreateNestedManyWithoutWorkout_exerciseInput = {
    create?: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput> | setsCreateWithoutWorkout_exerciseInput[] | setsUncheckedCreateWithoutWorkout_exerciseInput[]
    connectOrCreate?: setsCreateOrConnectWithoutWorkout_exerciseInput | setsCreateOrConnectWithoutWorkout_exerciseInput[]
    createMany?: setsCreateManyWorkout_exerciseInputEnvelope
    connect?: setsWhereUniqueInput | setsWhereUniqueInput[]
  }

  export type workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput = {
    create?: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: workoutsCreateOrConnectWithoutWorkout_exercisesInput
    upsert?: workoutsUpsertWithoutWorkout_exercisesInput
    connect?: workoutsWhereUniqueInput
    update?: XOR<XOR<workoutsUpdateToOneWithWhereWithoutWorkout_exercisesInput, workoutsUpdateWithoutWorkout_exercisesInput>, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput = {
    create?: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutWorkout_exercisesInput
    upsert?: exercisesUpsertWithoutWorkout_exercisesInput
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutWorkout_exercisesInput, exercisesUpdateWithoutWorkout_exercisesInput>, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type setsUpdateManyWithoutWorkout_exerciseNestedInput = {
    create?: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput> | setsCreateWithoutWorkout_exerciseInput[] | setsUncheckedCreateWithoutWorkout_exerciseInput[]
    connectOrCreate?: setsCreateOrConnectWithoutWorkout_exerciseInput | setsCreateOrConnectWithoutWorkout_exerciseInput[]
    upsert?: setsUpsertWithWhereUniqueWithoutWorkout_exerciseInput | setsUpsertWithWhereUniqueWithoutWorkout_exerciseInput[]
    createMany?: setsCreateManyWorkout_exerciseInputEnvelope
    set?: setsWhereUniqueInput | setsWhereUniqueInput[]
    disconnect?: setsWhereUniqueInput | setsWhereUniqueInput[]
    delete?: setsWhereUniqueInput | setsWhereUniqueInput[]
    connect?: setsWhereUniqueInput | setsWhereUniqueInput[]
    update?: setsUpdateWithWhereUniqueWithoutWorkout_exerciseInput | setsUpdateWithWhereUniqueWithoutWorkout_exerciseInput[]
    updateMany?: setsUpdateManyWithWhereWithoutWorkout_exerciseInput | setsUpdateManyWithWhereWithoutWorkout_exerciseInput[]
    deleteMany?: setsScalarWhereInput | setsScalarWhereInput[]
  }

  export type setsUncheckedUpdateManyWithoutWorkout_exerciseNestedInput = {
    create?: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput> | setsCreateWithoutWorkout_exerciseInput[] | setsUncheckedCreateWithoutWorkout_exerciseInput[]
    connectOrCreate?: setsCreateOrConnectWithoutWorkout_exerciseInput | setsCreateOrConnectWithoutWorkout_exerciseInput[]
    upsert?: setsUpsertWithWhereUniqueWithoutWorkout_exerciseInput | setsUpsertWithWhereUniqueWithoutWorkout_exerciseInput[]
    createMany?: setsCreateManyWorkout_exerciseInputEnvelope
    set?: setsWhereUniqueInput | setsWhereUniqueInput[]
    disconnect?: setsWhereUniqueInput | setsWhereUniqueInput[]
    delete?: setsWhereUniqueInput | setsWhereUniqueInput[]
    connect?: setsWhereUniqueInput | setsWhereUniqueInput[]
    update?: setsUpdateWithWhereUniqueWithoutWorkout_exerciseInput | setsUpdateWithWhereUniqueWithoutWorkout_exerciseInput[]
    updateMany?: setsUpdateManyWithWhereWithoutWorkout_exerciseInput | setsUpdateManyWithWhereWithoutWorkout_exerciseInput[]
    deleteMany?: setsScalarWhereInput | setsScalarWhereInput[]
  }

  export type workout_exercisesCreateNestedOneWithoutSetsInput = {
    create?: XOR<workout_exercisesCreateWithoutSetsInput, workout_exercisesUncheckedCreateWithoutSetsInput>
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutSetsInput
    connect?: workout_exercisesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type workout_exercisesUpdateOneRequiredWithoutSetsNestedInput = {
    create?: XOR<workout_exercisesCreateWithoutSetsInput, workout_exercisesUncheckedCreateWithoutSetsInput>
    connectOrCreate?: workout_exercisesCreateOrConnectWithoutSetsInput
    upsert?: workout_exercisesUpsertWithoutSetsInput
    connect?: workout_exercisesWhereUniqueInput
    update?: XOR<XOR<workout_exercisesUpdateToOneWithWhereWithoutSetsInput, workout_exercisesUpdateWithoutSetsInput>, workout_exercisesUncheckedUpdateWithoutSetsInput>
  }

  export type usersCreateNestedOneWithoutGoalsInput = {
    create?: XOR<usersCreateWithoutGoalsInput, usersUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGoalsInput
    connect?: usersWhereUniqueInput
  }

  export type exercisesCreateNestedOneWithoutGoalsInput = {
    create?: XOR<exercisesCreateWithoutGoalsInput, exercisesUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutGoalsInput
    connect?: exercisesWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<usersCreateWithoutGoalsInput, usersUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGoalsInput
    upsert?: usersUpsertWithoutGoalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGoalsInput, usersUpdateWithoutGoalsInput>, usersUncheckedUpdateWithoutGoalsInput>
  }

  export type exercisesUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<exercisesCreateWithoutGoalsInput, exercisesUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: exercisesCreateOrConnectWithoutGoalsInput
    upsert?: exercisesUpsertWithoutGoalsInput
    connect?: exercisesWhereUniqueInput
    update?: XOR<XOR<exercisesUpdateToOneWithWhereWithoutGoalsInput, exercisesUpdateWithoutGoalsInput>, exercisesUncheckedUpdateWithoutGoalsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type workoutsCreateWithoutUserInput = {
    name?: string | null
    date?: Date | string
    notes?: string | null
    workout_exercises?: workout_exercisesCreateNestedManyWithoutWorkoutInput
  }

  export type workoutsUncheckedCreateWithoutUserInput = {
    workout_id?: number
    name?: string | null
    date?: Date | string
    notes?: string | null
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type workoutsCreateOrConnectWithoutUserInput = {
    where: workoutsWhereUniqueInput
    create: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput>
  }

  export type workoutsCreateManyUserInputEnvelope = {
    data: workoutsCreateManyUserInput | workoutsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type goalsCreateWithoutUserInput = {
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
    exercise: exercisesCreateNestedOneWithoutGoalsInput
  }

  export type goalsUncheckedCreateWithoutUserInput = {
    goal_id?: number
    exercise_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type goalsCreateOrConnectWithoutUserInput = {
    where: goalsWhereUniqueInput
    create: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput>
  }

  export type goalsCreateManyUserInputEnvelope = {
    data: goalsCreateManyUserInput | goalsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type workoutsUpsertWithWhereUniqueWithoutUserInput = {
    where: workoutsWhereUniqueInput
    update: XOR<workoutsUpdateWithoutUserInput, workoutsUncheckedUpdateWithoutUserInput>
    create: XOR<workoutsCreateWithoutUserInput, workoutsUncheckedCreateWithoutUserInput>
  }

  export type workoutsUpdateWithWhereUniqueWithoutUserInput = {
    where: workoutsWhereUniqueInput
    data: XOR<workoutsUpdateWithoutUserInput, workoutsUncheckedUpdateWithoutUserInput>
  }

  export type workoutsUpdateManyWithWhereWithoutUserInput = {
    where: workoutsScalarWhereInput
    data: XOR<workoutsUpdateManyMutationInput, workoutsUncheckedUpdateManyWithoutUserInput>
  }

  export type workoutsScalarWhereInput = {
    AND?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
    OR?: workoutsScalarWhereInput[]
    NOT?: workoutsScalarWhereInput | workoutsScalarWhereInput[]
    workout_id?: IntFilter<"workouts"> | number
    user_id?: IntFilter<"workouts"> | number
    name?: StringNullableFilter<"workouts"> | string | null
    date?: DateTimeFilter<"workouts"> | Date | string
    notes?: StringNullableFilter<"workouts"> | string | null
  }

  export type goalsUpsertWithWhereUniqueWithoutUserInput = {
    where: goalsWhereUniqueInput
    update: XOR<goalsUpdateWithoutUserInput, goalsUncheckedUpdateWithoutUserInput>
    create: XOR<goalsCreateWithoutUserInput, goalsUncheckedCreateWithoutUserInput>
  }

  export type goalsUpdateWithWhereUniqueWithoutUserInput = {
    where: goalsWhereUniqueInput
    data: XOR<goalsUpdateWithoutUserInput, goalsUncheckedUpdateWithoutUserInput>
  }

  export type goalsUpdateManyWithWhereWithoutUserInput = {
    where: goalsScalarWhereInput
    data: XOR<goalsUpdateManyMutationInput, goalsUncheckedUpdateManyWithoutUserInput>
  }

  export type goalsScalarWhereInput = {
    AND?: goalsScalarWhereInput | goalsScalarWhereInput[]
    OR?: goalsScalarWhereInput[]
    NOT?: goalsScalarWhereInput | goalsScalarWhereInput[]
    goal_id?: IntFilter<"goals"> | number
    user_id?: IntFilter<"goals"> | number
    exercise_id?: IntFilter<"goals"> | number
    target_weight?: FloatNullableFilter<"goals"> | number | null
    target_reps?: IntNullableFilter<"goals"> | number | null
    achieved?: BoolFilter<"goals"> | boolean
    created_at?: DateTimeFilter<"goals"> | Date | string
  }

  export type workout_exercisesCreateWithoutExerciseInput = {
    order?: number
    workout: workoutsCreateNestedOneWithoutWorkout_exercisesInput
    sets?: setsCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesUncheckedCreateWithoutExerciseInput = {
    workout_exercise_id?: number
    workout_id: number
    order?: number
    sets?: setsUncheckedCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesCreateOrConnectWithoutExerciseInput = {
    where: workout_exercisesWhereUniqueInput
    create: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput>
  }

  export type workout_exercisesCreateManyExerciseInputEnvelope = {
    data: workout_exercisesCreateManyExerciseInput | workout_exercisesCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type goalsCreateWithoutExerciseInput = {
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
    user: usersCreateNestedOneWithoutGoalsInput
  }

  export type goalsUncheckedCreateWithoutExerciseInput = {
    goal_id?: number
    user_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type goalsCreateOrConnectWithoutExerciseInput = {
    where: goalsWhereUniqueInput
    create: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput>
  }

  export type goalsCreateManyExerciseInputEnvelope = {
    data: goalsCreateManyExerciseInput | goalsCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type workout_exercisesUpsertWithWhereUniqueWithoutExerciseInput = {
    where: workout_exercisesWhereUniqueInput
    update: XOR<workout_exercisesUpdateWithoutExerciseInput, workout_exercisesUncheckedUpdateWithoutExerciseInput>
    create: XOR<workout_exercisesCreateWithoutExerciseInput, workout_exercisesUncheckedCreateWithoutExerciseInput>
  }

  export type workout_exercisesUpdateWithWhereUniqueWithoutExerciseInput = {
    where: workout_exercisesWhereUniqueInput
    data: XOR<workout_exercisesUpdateWithoutExerciseInput, workout_exercisesUncheckedUpdateWithoutExerciseInput>
  }

  export type workout_exercisesUpdateManyWithWhereWithoutExerciseInput = {
    where: workout_exercisesScalarWhereInput
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyWithoutExerciseInput>
  }

  export type workout_exercisesScalarWhereInput = {
    AND?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
    OR?: workout_exercisesScalarWhereInput[]
    NOT?: workout_exercisesScalarWhereInput | workout_exercisesScalarWhereInput[]
    workout_exercise_id?: IntFilter<"workout_exercises"> | number
    workout_id?: IntFilter<"workout_exercises"> | number
    exercise_id?: IntFilter<"workout_exercises"> | number
    order?: IntFilter<"workout_exercises"> | number
  }

  export type goalsUpsertWithWhereUniqueWithoutExerciseInput = {
    where: goalsWhereUniqueInput
    update: XOR<goalsUpdateWithoutExerciseInput, goalsUncheckedUpdateWithoutExerciseInput>
    create: XOR<goalsCreateWithoutExerciseInput, goalsUncheckedCreateWithoutExerciseInput>
  }

  export type goalsUpdateWithWhereUniqueWithoutExerciseInput = {
    where: goalsWhereUniqueInput
    data: XOR<goalsUpdateWithoutExerciseInput, goalsUncheckedUpdateWithoutExerciseInput>
  }

  export type goalsUpdateManyWithWhereWithoutExerciseInput = {
    where: goalsScalarWhereInput
    data: XOR<goalsUpdateManyMutationInput, goalsUncheckedUpdateManyWithoutExerciseInput>
  }

  export type usersCreateWithoutWorkoutsInput = {
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    goals?: goalsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutWorkoutsInput = {
    user_id?: number
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    goals?: goalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutWorkoutsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
  }

  export type workout_exercisesCreateWithoutWorkoutInput = {
    order?: number
    exercise: exercisesCreateNestedOneWithoutWorkout_exercisesInput
    sets?: setsCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesUncheckedCreateWithoutWorkoutInput = {
    workout_exercise_id?: number
    exercise_id: number
    order?: number
    sets?: setsUncheckedCreateNestedManyWithoutWorkout_exerciseInput
  }

  export type workout_exercisesCreateOrConnectWithoutWorkoutInput = {
    where: workout_exercisesWhereUniqueInput
    create: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type workout_exercisesCreateManyWorkoutInputEnvelope = {
    data: workout_exercisesCreateManyWorkoutInput | workout_exercisesCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutWorkoutsInput = {
    update: XOR<usersUpdateWithoutWorkoutsInput, usersUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<usersCreateWithoutWorkoutsInput, usersUncheckedCreateWithoutWorkoutsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkoutsInput, usersUncheckedUpdateWithoutWorkoutsInput>
  }

  export type usersUpdateWithoutWorkoutsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: goalsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkoutsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: goalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type workout_exercisesUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: workout_exercisesWhereUniqueInput
    update: XOR<workout_exercisesUpdateWithoutWorkoutInput, workout_exercisesUncheckedUpdateWithoutWorkoutInput>
    create: XOR<workout_exercisesCreateWithoutWorkoutInput, workout_exercisesUncheckedCreateWithoutWorkoutInput>
  }

  export type workout_exercisesUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: workout_exercisesWhereUniqueInput
    data: XOR<workout_exercisesUpdateWithoutWorkoutInput, workout_exercisesUncheckedUpdateWithoutWorkoutInput>
  }

  export type workout_exercisesUpdateManyWithWhereWithoutWorkoutInput = {
    where: workout_exercisesScalarWhereInput
    data: XOR<workout_exercisesUpdateManyMutationInput, workout_exercisesUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type workoutsCreateWithoutWorkout_exercisesInput = {
    name?: string | null
    date?: Date | string
    notes?: string | null
    user: usersCreateNestedOneWithoutWorkoutsInput
  }

  export type workoutsUncheckedCreateWithoutWorkout_exercisesInput = {
    workout_id?: number
    user_id: number
    name?: string | null
    date?: Date | string
    notes?: string | null
  }

  export type workoutsCreateOrConnectWithoutWorkout_exercisesInput = {
    where: workoutsWhereUniqueInput
    create: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
  }

  export type exercisesCreateWithoutWorkout_exercisesInput = {
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    goals?: goalsCreateNestedManyWithoutExerciseInput
  }

  export type exercisesUncheckedCreateWithoutWorkout_exercisesInput = {
    exercise_id?: number
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    goals?: goalsUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exercisesCreateOrConnectWithoutWorkout_exercisesInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
  }

  export type setsCreateWithoutWorkout_exerciseInput = {
    set_number: number
    weight: number
    reps: number
    completed?: boolean
  }

  export type setsUncheckedCreateWithoutWorkout_exerciseInput = {
    set_id?: number
    set_number: number
    weight: number
    reps: number
    completed?: boolean
  }

  export type setsCreateOrConnectWithoutWorkout_exerciseInput = {
    where: setsWhereUniqueInput
    create: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput>
  }

  export type setsCreateManyWorkout_exerciseInputEnvelope = {
    data: setsCreateManyWorkout_exerciseInput | setsCreateManyWorkout_exerciseInput[]
    skipDuplicates?: boolean
  }

  export type workoutsUpsertWithoutWorkout_exercisesInput = {
    update: XOR<workoutsUpdateWithoutWorkout_exercisesInput, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
    create: XOR<workoutsCreateWithoutWorkout_exercisesInput, workoutsUncheckedCreateWithoutWorkout_exercisesInput>
    where?: workoutsWhereInput
  }

  export type workoutsUpdateToOneWithWhereWithoutWorkout_exercisesInput = {
    where?: workoutsWhereInput
    data: XOR<workoutsUpdateWithoutWorkout_exercisesInput, workoutsUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type workoutsUpdateWithoutWorkout_exercisesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type workoutsUncheckedUpdateWithoutWorkout_exercisesInput = {
    workout_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type exercisesUpsertWithoutWorkout_exercisesInput = {
    update: XOR<exercisesUpdateWithoutWorkout_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
    create: XOR<exercisesCreateWithoutWorkout_exercisesInput, exercisesUncheckedCreateWithoutWorkout_exercisesInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutWorkout_exercisesInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutWorkout_exercisesInput, exercisesUncheckedUpdateWithoutWorkout_exercisesInput>
  }

  export type exercisesUpdateWithoutWorkout_exercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    goals?: goalsUpdateManyWithoutExerciseNestedInput
  }

  export type exercisesUncheckedUpdateWithoutWorkout_exercisesInput = {
    exercise_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    goals?: goalsUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type setsUpsertWithWhereUniqueWithoutWorkout_exerciseInput = {
    where: setsWhereUniqueInput
    update: XOR<setsUpdateWithoutWorkout_exerciseInput, setsUncheckedUpdateWithoutWorkout_exerciseInput>
    create: XOR<setsCreateWithoutWorkout_exerciseInput, setsUncheckedCreateWithoutWorkout_exerciseInput>
  }

  export type setsUpdateWithWhereUniqueWithoutWorkout_exerciseInput = {
    where: setsWhereUniqueInput
    data: XOR<setsUpdateWithoutWorkout_exerciseInput, setsUncheckedUpdateWithoutWorkout_exerciseInput>
  }

  export type setsUpdateManyWithWhereWithoutWorkout_exerciseInput = {
    where: setsScalarWhereInput
    data: XOR<setsUpdateManyMutationInput, setsUncheckedUpdateManyWithoutWorkout_exerciseInput>
  }

  export type setsScalarWhereInput = {
    AND?: setsScalarWhereInput | setsScalarWhereInput[]
    OR?: setsScalarWhereInput[]
    NOT?: setsScalarWhereInput | setsScalarWhereInput[]
    set_id?: IntFilter<"sets"> | number
    workout_exercise_id?: IntFilter<"sets"> | number
    set_number?: IntFilter<"sets"> | number
    weight?: FloatFilter<"sets"> | number
    reps?: IntFilter<"sets"> | number
    completed?: BoolFilter<"sets"> | boolean
  }

  export type workout_exercisesCreateWithoutSetsInput = {
    order?: number
    workout: workoutsCreateNestedOneWithoutWorkout_exercisesInput
    exercise: exercisesCreateNestedOneWithoutWorkout_exercisesInput
  }

  export type workout_exercisesUncheckedCreateWithoutSetsInput = {
    workout_exercise_id?: number
    workout_id: number
    exercise_id: number
    order?: number
  }

  export type workout_exercisesCreateOrConnectWithoutSetsInput = {
    where: workout_exercisesWhereUniqueInput
    create: XOR<workout_exercisesCreateWithoutSetsInput, workout_exercisesUncheckedCreateWithoutSetsInput>
  }

  export type workout_exercisesUpsertWithoutSetsInput = {
    update: XOR<workout_exercisesUpdateWithoutSetsInput, workout_exercisesUncheckedUpdateWithoutSetsInput>
    create: XOR<workout_exercisesCreateWithoutSetsInput, workout_exercisesUncheckedCreateWithoutSetsInput>
    where?: workout_exercisesWhereInput
  }

  export type workout_exercisesUpdateToOneWithWhereWithoutSetsInput = {
    where?: workout_exercisesWhereInput
    data: XOR<workout_exercisesUpdateWithoutSetsInput, workout_exercisesUncheckedUpdateWithoutSetsInput>
  }

  export type workout_exercisesUpdateWithoutSetsInput = {
    order?: IntFieldUpdateOperationsInput | number
    workout?: workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    exercise?: exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput
  }

  export type workout_exercisesUncheckedUpdateWithoutSetsInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutGoalsInput = {
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    workouts?: workoutsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutGoalsInput = {
    user_id?: number
    email: string
    password: string
    name: string
    role?: string
    created_at?: Date | string
    workouts?: workoutsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutGoalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGoalsInput, usersUncheckedCreateWithoutGoalsInput>
  }

  export type exercisesCreateWithoutGoalsInput = {
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    workout_exercises?: workout_exercisesCreateNestedManyWithoutExerciseInput
  }

  export type exercisesUncheckedCreateWithoutGoalsInput = {
    exercise_id?: number
    name: string
    description?: string | null
    video_url?: string | null
    muscle_group: string
    workout_exercises?: workout_exercisesUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type exercisesCreateOrConnectWithoutGoalsInput = {
    where: exercisesWhereUniqueInput
    create: XOR<exercisesCreateWithoutGoalsInput, exercisesUncheckedCreateWithoutGoalsInput>
  }

  export type usersUpsertWithoutGoalsInput = {
    update: XOR<usersUpdateWithoutGoalsInput, usersUncheckedUpdateWithoutGoalsInput>
    create: XOR<usersCreateWithoutGoalsInput, usersUncheckedCreateWithoutGoalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGoalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGoalsInput, usersUncheckedUpdateWithoutGoalsInput>
  }

  export type usersUpdateWithoutGoalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: workoutsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutGoalsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: workoutsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type exercisesUpsertWithoutGoalsInput = {
    update: XOR<exercisesUpdateWithoutGoalsInput, exercisesUncheckedUpdateWithoutGoalsInput>
    create: XOR<exercisesCreateWithoutGoalsInput, exercisesUncheckedCreateWithoutGoalsInput>
    where?: exercisesWhereInput
  }

  export type exercisesUpdateToOneWithWhereWithoutGoalsInput = {
    where?: exercisesWhereInput
    data: XOR<exercisesUpdateWithoutGoalsInput, exercisesUncheckedUpdateWithoutGoalsInput>
  }

  export type exercisesUpdateWithoutGoalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    workout_exercises?: workout_exercisesUpdateManyWithoutExerciseNestedInput
  }

  export type exercisesUncheckedUpdateWithoutGoalsInput = {
    exercise_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: StringFieldUpdateOperationsInput | string
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type workoutsCreateManyUserInput = {
    workout_id?: number
    name?: string | null
    date?: Date | string
    notes?: string | null
  }

  export type goalsCreateManyUserInput = {
    goal_id?: number
    exercise_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type workoutsUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout_exercises?: workout_exercisesUpdateManyWithoutWorkoutNestedInput
  }

  export type workoutsUncheckedUpdateWithoutUserInput = {
    workout_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workout_exercises?: workout_exercisesUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type workoutsUncheckedUpdateManyWithoutUserInput = {
    workout_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type goalsUpdateWithoutUserInput = {
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: exercisesUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type goalsUncheckedUpdateWithoutUserInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goalsUncheckedUpdateManyWithoutUserInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workout_exercisesCreateManyExerciseInput = {
    workout_exercise_id?: number
    workout_id: number
    order?: number
  }

  export type goalsCreateManyExerciseInput = {
    goal_id?: number
    user_id: number
    target_weight?: number | null
    target_reps?: number | null
    achieved?: boolean
    created_at?: Date | string
  }

  export type workout_exercisesUpdateWithoutExerciseInput = {
    order?: IntFieldUpdateOperationsInput | number
    workout?: workoutsUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    sets?: setsUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesUncheckedUpdateWithoutExerciseInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: setsUncheckedUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesUncheckedUpdateManyWithoutExerciseInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    workout_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type goalsUpdateWithoutExerciseInput = {
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type goalsUncheckedUpdateWithoutExerciseInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goalsUncheckedUpdateManyWithoutExerciseInput = {
    goal_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    target_weight?: NullableFloatFieldUpdateOperationsInput | number | null
    target_reps?: NullableIntFieldUpdateOperationsInput | number | null
    achieved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workout_exercisesCreateManyWorkoutInput = {
    workout_exercise_id?: number
    exercise_id: number
    order?: number
  }

  export type workout_exercisesUpdateWithoutWorkoutInput = {
    order?: IntFieldUpdateOperationsInput | number
    exercise?: exercisesUpdateOneRequiredWithoutWorkout_exercisesNestedInput
    sets?: setsUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesUncheckedUpdateWithoutWorkoutInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    sets?: setsUncheckedUpdateManyWithoutWorkout_exerciseNestedInput
  }

  export type workout_exercisesUncheckedUpdateManyWithoutWorkoutInput = {
    workout_exercise_id?: IntFieldUpdateOperationsInput | number
    exercise_id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type setsCreateManyWorkout_exerciseInput = {
    set_id?: number
    set_number: number
    weight: number
    reps: number
    completed?: boolean
  }

  export type setsUpdateWithoutWorkout_exerciseInput = {
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type setsUncheckedUpdateWithoutWorkout_exerciseInput = {
    set_id?: IntFieldUpdateOperationsInput | number
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type setsUncheckedUpdateManyWithoutWorkout_exerciseInput = {
    set_id?: IntFieldUpdateOperationsInput | number
    set_number?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    reps?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExercisesCountOutputTypeDefaultArgs instead
     */
    export type ExercisesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExercisesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutsCountOutputTypeDefaultArgs instead
     */
    export type WorkoutsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Workout_exercisesCountOutputTypeDefaultArgs instead
     */
    export type Workout_exercisesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Workout_exercisesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use exercisesDefaultArgs instead
     */
    export type exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = exercisesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workoutsDefaultArgs instead
     */
    export type workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workoutsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workout_exercisesDefaultArgs instead
     */
    export type workout_exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workout_exercisesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use setsDefaultArgs instead
     */
    export type setsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = setsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use goalsDefaultArgs instead
     */
    export type goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = goalsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}