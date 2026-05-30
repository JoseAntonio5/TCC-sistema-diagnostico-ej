
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Diagnostico
 * 
 */
export type Diagnostico = $Result.DefaultSelection<Prisma.$DiagnosticoPayload>
/**
 * Model Resposta
 * 
 */
export type Resposta = $Result.DefaultSelection<Prisma.$RespostaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnostico`: Exposes CRUD operations for the **Diagnostico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosticos
    * const diagnosticos = await prisma.diagnostico.findMany()
    * ```
    */
  get diagnostico(): Prisma.DiagnosticoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resposta`: Exposes CRUD operations for the **Resposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas
    * const respostas = await prisma.resposta.findMany()
    * ```
    */
  get resposta(): Prisma.RespostaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Empresa: 'Empresa',
    Diagnostico: 'Diagnostico',
    Resposta: 'Resposta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "empresa" | "diagnostico" | "resposta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Diagnostico: {
        payload: Prisma.$DiagnosticoPayload<ExtArgs>
        fields: Prisma.DiagnosticoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          findMany: {
            args: Prisma.DiagnosticoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>[]
          }
          create: {
            args: Prisma.DiagnosticoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          createMany: {
            args: Prisma.DiagnosticoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          update: {
            args: Prisma.DiagnosticoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticoPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostico>
          }
          groupBy: {
            args: Prisma.DiagnosticoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticoCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoCountAggregateOutputType> | number
          }
        }
      }
      Resposta: {
        payload: Prisma.$RespostaPayload<ExtArgs>
        fields: Prisma.RespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findFirst: {
            args: Prisma.RespostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          findMany: {
            args: Prisma.RespostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>[]
          }
          create: {
            args: Prisma.RespostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          createMany: {
            args: Prisma.RespostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RespostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          update: {
            args: Prisma.RespostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          deleteMany: {
            args: Prisma.RespostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RespostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespostaPayload>
          }
          aggregate: {
            args: Prisma.RespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResposta>
          }
          groupBy: {
            args: Prisma.RespostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespostaCountArgs<ExtArgs>
            result: $Utils.Optional<RespostaCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    empresa?: EmpresaOmit
    diagnostico?: DiagnosticoOmit
    resposta?: RespostaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    diagnosticos: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | EmpresaCountOutputTypeCountDiagnosticosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountDiagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
  }


  /**
   * Count Type DiagnosticoCountOutputType
   */

  export type DiagnosticoCountOutputType = {
    respostas: number
  }

  export type DiagnosticoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | DiagnosticoCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticoCountOutputType without action
   */
  export type DiagnosticoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticoCountOutputType
     */
    select?: DiagnosticoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticoCountOutputType without action
   */
  export type DiagnosticoCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    diagnosticos?: boolean | Empresa$diagnosticosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticos?: boolean | Empresa$diagnosticosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      diagnosticos: Prisma.$DiagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticos<T extends Empresa$diagnosticosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$diagnosticosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly createdAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.diagnosticos
   */
  export type Empresa$diagnosticosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    cursor?: DiagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Diagnostico
   */

  export type AggregateDiagnostico = {
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  export type DiagnosticoAvgAggregateOutputType = {
    id: number | null
    empresaId: number | null
    notaGeral: number | null
    percentualMaturidade: number | null
  }

  export type DiagnosticoSumAggregateOutputType = {
    id: number | null
    empresaId: number | null
    notaGeral: number | null
    percentualMaturidade: number | null
  }

  export type DiagnosticoMinAggregateOutputType = {
    id: number | null
    empresaId: number | null
    notaGeral: number | null
    percentualMaturidade: number | null
    nivelMaturidade: string | null
    createdAt: Date | null
  }

  export type DiagnosticoMaxAggregateOutputType = {
    id: number | null
    empresaId: number | null
    notaGeral: number | null
    percentualMaturidade: number | null
    nivelMaturidade: string | null
    createdAt: Date | null
  }

  export type DiagnosticoCountAggregateOutputType = {
    id: number
    empresaId: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: number
    porDiretoria: number
    porDimensao: number
    createdAt: number
    _all: number
  }


  export type DiagnosticoAvgAggregateInputType = {
    id?: true
    empresaId?: true
    notaGeral?: true
    percentualMaturidade?: true
  }

  export type DiagnosticoSumAggregateInputType = {
    id?: true
    empresaId?: true
    notaGeral?: true
    percentualMaturidade?: true
  }

  export type DiagnosticoMinAggregateInputType = {
    id?: true
    empresaId?: true
    notaGeral?: true
    percentualMaturidade?: true
    nivelMaturidade?: true
    createdAt?: true
  }

  export type DiagnosticoMaxAggregateInputType = {
    id?: true
    empresaId?: true
    notaGeral?: true
    percentualMaturidade?: true
    nivelMaturidade?: true
    createdAt?: true
  }

  export type DiagnosticoCountAggregateInputType = {
    id?: true
    empresaId?: true
    notaGeral?: true
    percentualMaturidade?: true
    nivelMaturidade?: true
    porDiretoria?: true
    porDimensao?: true
    createdAt?: true
    _all?: true
  }

  export type DiagnosticoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnostico to aggregate.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnosticos
    **/
    _count?: true | DiagnosticoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosticoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosticoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type GetDiagnosticoAggregateType<T extends DiagnosticoAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnostico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnostico[P]>
      : GetScalarType<T[P], AggregateDiagnostico[P]>
  }




  export type DiagnosticoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticoWhereInput
    orderBy?: DiagnosticoOrderByWithAggregationInput | DiagnosticoOrderByWithAggregationInput[]
    by: DiagnosticoScalarFieldEnum[] | DiagnosticoScalarFieldEnum
    having?: DiagnosticoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticoCountAggregateInputType | true
    _avg?: DiagnosticoAvgAggregateInputType
    _sum?: DiagnosticoSumAggregateInputType
    _min?: DiagnosticoMinAggregateInputType
    _max?: DiagnosticoMaxAggregateInputType
  }

  export type DiagnosticoGroupByOutputType = {
    id: number
    empresaId: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonValue
    porDimensao: JsonValue
    createdAt: Date
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  type GetDiagnosticoGroupByPayload<T extends DiagnosticoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticoGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    notaGeral?: boolean
    percentualMaturidade?: boolean
    nivelMaturidade?: boolean
    porDiretoria?: boolean
    porDimensao?: boolean
    createdAt?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    respostas?: boolean | Diagnostico$respostasArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>



  export type DiagnosticoSelectScalar = {
    id?: boolean
    empresaId?: boolean
    notaGeral?: boolean
    percentualMaturidade?: boolean
    nivelMaturidade?: boolean
    porDiretoria?: boolean
    porDimensao?: boolean
    createdAt?: boolean
  }

  export type DiagnosticoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "notaGeral" | "percentualMaturidade" | "nivelMaturidade" | "porDiretoria" | "porDimensao" | "createdAt", ExtArgs["result"]["diagnostico"]>
  export type DiagnosticoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    respostas?: boolean | Diagnostico$respostasArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosticoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnostico"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      respostas: Prisma.$RespostaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      empresaId: number
      notaGeral: number
      percentualMaturidade: number
      nivelMaturidade: string
      porDiretoria: Prisma.JsonValue
      porDimensao: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["diagnostico"]>
    composites: {}
  }

  type DiagnosticoGetPayload<S extends boolean | null | undefined | DiagnosticoDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticoPayload, S>

  type DiagnosticoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticoCountAggregateInputType | true
    }

  export interface DiagnosticoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnostico'], meta: { name: 'Diagnostico' } }
    /**
     * Find zero or one Diagnostico that matches the filter.
     * @param {DiagnosticoFindUniqueArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticoFindUniqueArgs>(args: SelectSubset<T, DiagnosticoFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticoFindUniqueOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticoFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticoFindFirstArgs>(args?: SelectSubset<T, DiagnosticoFindFirstArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindFirstOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticoFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany()
     * 
     * // Get first 10 Diagnosticos
     * const diagnosticos = await prisma.diagnostico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticoWithIdOnly = await prisma.diagnostico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticoFindManyArgs>(args?: SelectSubset<T, DiagnosticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostico.
     * @param {DiagnosticoCreateArgs} args - Arguments to create a Diagnostico.
     * @example
     * // Create one Diagnostico
     * const Diagnostico = await prisma.diagnostico.create({
     *   data: {
     *     // ... data to create a Diagnostico
     *   }
     * })
     * 
     */
    create<T extends DiagnosticoCreateArgs>(args: SelectSubset<T, DiagnosticoCreateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosticos.
     * @param {DiagnosticoCreateManyArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticoCreateManyArgs>(args?: SelectSubset<T, DiagnosticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnostico.
     * @param {DiagnosticoDeleteArgs} args - Arguments to delete one Diagnostico.
     * @example
     * // Delete one Diagnostico
     * const Diagnostico = await prisma.diagnostico.delete({
     *   where: {
     *     // ... filter to delete one Diagnostico
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticoDeleteArgs>(args: SelectSubset<T, DiagnosticoDeleteArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostico.
     * @param {DiagnosticoUpdateArgs} args - Arguments to update one Diagnostico.
     * @example
     * // Update one Diagnostico
     * const diagnostico = await prisma.diagnostico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticoUpdateArgs>(args: SelectSubset<T, DiagnosticoUpdateArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosticos.
     * @param {DiagnosticoDeleteManyArgs} args - Arguments to filter Diagnosticos to delete.
     * @example
     * // Delete a few Diagnosticos
     * const { count } = await prisma.diagnostico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticoDeleteManyArgs>(args?: SelectSubset<T, DiagnosticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnosticos
     * const diagnostico = await prisma.diagnostico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticoUpdateManyArgs>(args: SelectSubset<T, DiagnosticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnostico.
     * @param {DiagnosticoUpsertArgs} args - Arguments to update or create a Diagnostico.
     * @example
     * // Update or create a Diagnostico
     * const diagnostico = await prisma.diagnostico.upsert({
     *   create: {
     *     // ... data to create a Diagnostico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnostico we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticoUpsertArgs>(args: SelectSubset<T, DiagnosticoUpsertArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoCountArgs} args - Arguments to filter Diagnosticos to count.
     * @example
     * // Count the number of Diagnosticos
     * const count = await prisma.diagnostico.count({
     *   where: {
     *     // ... the filter for the Diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticoCountArgs>(
      args?: Subset<T, DiagnosticoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticoAggregateArgs>(args: Subset<T, DiagnosticoAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticoAggregateType<T>>

    /**
     * Group by Diagnostico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticoGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticoGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnostico model
   */
  readonly fields: DiagnosticoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnostico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostas<T extends Diagnostico$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Diagnostico$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Diagnostico model
   */
  interface DiagnosticoFieldRefs {
    readonly id: FieldRef<"Diagnostico", 'Int'>
    readonly empresaId: FieldRef<"Diagnostico", 'Int'>
    readonly notaGeral: FieldRef<"Diagnostico", 'Float'>
    readonly percentualMaturidade: FieldRef<"Diagnostico", 'Float'>
    readonly nivelMaturidade: FieldRef<"Diagnostico", 'String'>
    readonly porDiretoria: FieldRef<"Diagnostico", 'Json'>
    readonly porDimensao: FieldRef<"Diagnostico", 'Json'>
    readonly createdAt: FieldRef<"Diagnostico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnostico findUnique
   */
  export type DiagnosticoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findUniqueOrThrow
   */
  export type DiagnosticoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico findFirst
   */
  export type DiagnosticoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findFirstOrThrow
   */
  export type DiagnosticoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnostico to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico findMany
   */
  export type DiagnosticoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which Diagnosticos to fetch.
     */
    where?: DiagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnosticos to fetch.
     */
    orderBy?: DiagnosticoOrderByWithRelationInput | DiagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnosticos.
     */
    cursor?: DiagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * Diagnostico create
   */
  export type DiagnosticoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnostico.
     */
    data: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
  }

  /**
   * Diagnostico createMany
   */
  export type DiagnosticoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnosticos.
     */
    data: DiagnosticoCreateManyInput | DiagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diagnostico update
   */
  export type DiagnosticoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnostico.
     */
    data: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
    /**
     * Choose, which Diagnostico to update.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico updateMany
   */
  export type DiagnosticoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnosticos.
     */
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which Diagnosticos to update
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to update.
     */
    limit?: number
  }

  /**
   * Diagnostico upsert
   */
  export type DiagnosticoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnostico to update in case it exists.
     */
    where: DiagnosticoWhereUniqueInput
    /**
     * In case the Diagnostico found by the `where` argument doesn't exist, create a new Diagnostico with this data.
     */
    create: XOR<DiagnosticoCreateInput, DiagnosticoUncheckedCreateInput>
    /**
     * In case the Diagnostico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticoUpdateInput, DiagnosticoUncheckedUpdateInput>
  }

  /**
   * Diagnostico delete
   */
  export type DiagnosticoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
    /**
     * Filter which Diagnostico to delete.
     */
    where: DiagnosticoWhereUniqueInput
  }

  /**
   * Diagnostico deleteMany
   */
  export type DiagnosticoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnosticos to delete
     */
    where?: DiagnosticoWhereInput
    /**
     * Limit how many Diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * Diagnostico.respostas
   */
  export type Diagnostico$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    where?: RespostaWhereInput
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    cursor?: RespostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Diagnostico without action
   */
  export type DiagnosticoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnostico
     */
    select?: DiagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnostico
     */
    omit?: DiagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticoInclude<ExtArgs> | null
  }


  /**
   * Model Resposta
   */

  export type AggregateResposta = {
    _count: RespostaCountAggregateOutputType | null
    _avg: RespostaAvgAggregateOutputType | null
    _sum: RespostaSumAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  export type RespostaAvgAggregateOutputType = {
    id: number | null
    diagnosticoId: number | null
    perguntaId: number | null
    valor: number | null
  }

  export type RespostaSumAggregateOutputType = {
    id: number | null
    diagnosticoId: number | null
    perguntaId: number | null
    valor: number | null
  }

  export type RespostaMinAggregateOutputType = {
    id: number | null
    diagnosticoId: number | null
    perguntaId: number | null
    codigo: string | null
    diretoria: string | null
    dimensao: string | null
    texto: string | null
    valor: number | null
  }

  export type RespostaMaxAggregateOutputType = {
    id: number | null
    diagnosticoId: number | null
    perguntaId: number | null
    codigo: string | null
    diretoria: string | null
    dimensao: string | null
    texto: string | null
    valor: number | null
  }

  export type RespostaCountAggregateOutputType = {
    id: number
    diagnosticoId: number
    perguntaId: number
    codigo: number
    diretoria: number
    dimensao: number
    texto: number
    valor: number
    _all: number
  }


  export type RespostaAvgAggregateInputType = {
    id?: true
    diagnosticoId?: true
    perguntaId?: true
    valor?: true
  }

  export type RespostaSumAggregateInputType = {
    id?: true
    diagnosticoId?: true
    perguntaId?: true
    valor?: true
  }

  export type RespostaMinAggregateInputType = {
    id?: true
    diagnosticoId?: true
    perguntaId?: true
    codigo?: true
    diretoria?: true
    dimensao?: true
    texto?: true
    valor?: true
  }

  export type RespostaMaxAggregateInputType = {
    id?: true
    diagnosticoId?: true
    perguntaId?: true
    codigo?: true
    diretoria?: true
    dimensao?: true
    texto?: true
    valor?: true
  }

  export type RespostaCountAggregateInputType = {
    id?: true
    diagnosticoId?: true
    perguntaId?: true
    codigo?: true
    diretoria?: true
    dimensao?: true
    texto?: true
    valor?: true
    _all?: true
  }

  export type RespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resposta to aggregate.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respostas
    **/
    _count?: true | RespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RespostaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RespostaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespostaMaxAggregateInputType
  }

  export type GetRespostaAggregateType<T extends RespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResposta[P]>
      : GetScalarType<T[P], AggregateResposta[P]>
  }




  export type RespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespostaWhereInput
    orderBy?: RespostaOrderByWithAggregationInput | RespostaOrderByWithAggregationInput[]
    by: RespostaScalarFieldEnum[] | RespostaScalarFieldEnum
    having?: RespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespostaCountAggregateInputType | true
    _avg?: RespostaAvgAggregateInputType
    _sum?: RespostaSumAggregateInputType
    _min?: RespostaMinAggregateInputType
    _max?: RespostaMaxAggregateInputType
  }

  export type RespostaGroupByOutputType = {
    id: number
    diagnosticoId: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
    _count: RespostaCountAggregateOutputType | null
    _avg: RespostaAvgAggregateOutputType | null
    _sum: RespostaSumAggregateOutputType | null
    _min: RespostaMinAggregateOutputType | null
    _max: RespostaMaxAggregateOutputType | null
  }

  type GetRespostaGroupByPayload<T extends RespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespostaGroupByOutputType[P]>
            : GetScalarType<T[P], RespostaGroupByOutputType[P]>
        }
      >
    >


  export type RespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticoId?: boolean
    perguntaId?: boolean
    codigo?: boolean
    diretoria?: boolean
    dimensao?: boolean
    texto?: boolean
    valor?: boolean
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>



  export type RespostaSelectScalar = {
    id?: boolean
    diagnosticoId?: boolean
    perguntaId?: boolean
    codigo?: boolean
    diretoria?: boolean
    dimensao?: boolean
    texto?: boolean
    valor?: boolean
  }

  export type RespostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosticoId" | "perguntaId" | "codigo" | "diretoria" | "dimensao" | "texto" | "valor", ExtArgs["result"]["resposta"]>
  export type RespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | DiagnosticoDefaultArgs<ExtArgs>
  }

  export type $RespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resposta"
    objects: {
      diagnostico: Prisma.$DiagnosticoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diagnosticoId: number
      perguntaId: number
      codigo: string
      diretoria: string
      dimensao: string
      texto: string
      valor: number
    }, ExtArgs["result"]["resposta"]>
    composites: {}
  }

  type RespostaGetPayload<S extends boolean | null | undefined | RespostaDefaultArgs> = $Result.GetResult<Prisma.$RespostaPayload, S>

  type RespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespostaCountAggregateInputType | true
    }

  export interface RespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resposta'], meta: { name: 'Resposta' } }
    /**
     * Find zero or one Resposta that matches the filter.
     * @param {RespostaFindUniqueArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespostaFindUniqueArgs>(args: SelectSubset<T, RespostaFindUniqueArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespostaFindUniqueOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespostaFindUniqueOrThrowArgs>(args: SelectSubset<T, RespostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespostaFindFirstArgs>(args?: SelectSubset<T, RespostaFindFirstArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindFirstOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespostaFindFirstOrThrowArgs>(args?: SelectSubset<T, RespostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respostas
     * const respostas = await prisma.resposta.findMany()
     * 
     * // Get first 10 Respostas
     * const respostas = await prisma.resposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respostaWithIdOnly = await prisma.resposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespostaFindManyArgs>(args?: SelectSubset<T, RespostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resposta.
     * @param {RespostaCreateArgs} args - Arguments to create a Resposta.
     * @example
     * // Create one Resposta
     * const Resposta = await prisma.resposta.create({
     *   data: {
     *     // ... data to create a Resposta
     *   }
     * })
     * 
     */
    create<T extends RespostaCreateArgs>(args: SelectSubset<T, RespostaCreateArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respostas.
     * @param {RespostaCreateManyArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const resposta = await prisma.resposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespostaCreateManyArgs>(args?: SelectSubset<T, RespostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resposta.
     * @param {RespostaDeleteArgs} args - Arguments to delete one Resposta.
     * @example
     * // Delete one Resposta
     * const Resposta = await prisma.resposta.delete({
     *   where: {
     *     // ... filter to delete one Resposta
     *   }
     * })
     * 
     */
    delete<T extends RespostaDeleteArgs>(args: SelectSubset<T, RespostaDeleteArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resposta.
     * @param {RespostaUpdateArgs} args - Arguments to update one Resposta.
     * @example
     * // Update one Resposta
     * const resposta = await prisma.resposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespostaUpdateArgs>(args: SelectSubset<T, RespostaUpdateArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respostas.
     * @param {RespostaDeleteManyArgs} args - Arguments to filter Respostas to delete.
     * @example
     * // Delete a few Respostas
     * const { count } = await prisma.resposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespostaDeleteManyArgs>(args?: SelectSubset<T, RespostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respostas
     * const resposta = await prisma.resposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespostaUpdateManyArgs>(args: SelectSubset<T, RespostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resposta.
     * @param {RespostaUpsertArgs} args - Arguments to update or create a Resposta.
     * @example
     * // Update or create a Resposta
     * const resposta = await prisma.resposta.upsert({
     *   create: {
     *     // ... data to create a Resposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resposta we want to update
     *   }
     * })
     */
    upsert<T extends RespostaUpsertArgs>(args: SelectSubset<T, RespostaUpsertArgs<ExtArgs>>): Prisma__RespostaClient<$Result.GetResult<Prisma.$RespostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaCountArgs} args - Arguments to filter Respostas to count.
     * @example
     * // Count the number of Respostas
     * const count = await prisma.resposta.count({
     *   where: {
     *     // ... the filter for the Respostas we want to count
     *   }
     * })
    **/
    count<T extends RespostaCountArgs>(
      args?: Subset<T, RespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespostaAggregateArgs>(args: Subset<T, RespostaAggregateArgs>): Prisma.PrismaPromise<GetRespostaAggregateType<T>>

    /**
     * Group by Resposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespostaGroupByArgs} args - Group by arguments.
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
      T extends RespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespostaGroupByArgs['orderBy'] }
        : { orderBy?: RespostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resposta model
   */
  readonly fields: RespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostico<T extends DiagnosticoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticoDefaultArgs<ExtArgs>>): Prisma__DiagnosticoClient<$Result.GetResult<Prisma.$DiagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resposta model
   */
  interface RespostaFieldRefs {
    readonly id: FieldRef<"Resposta", 'Int'>
    readonly diagnosticoId: FieldRef<"Resposta", 'Int'>
    readonly perguntaId: FieldRef<"Resposta", 'Int'>
    readonly codigo: FieldRef<"Resposta", 'String'>
    readonly diretoria: FieldRef<"Resposta", 'String'>
    readonly dimensao: FieldRef<"Resposta", 'String'>
    readonly texto: FieldRef<"Resposta", 'String'>
    readonly valor: FieldRef<"Resposta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resposta findUnique
   */
  export type RespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta findUniqueOrThrow
   */
  export type RespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta findFirst
   */
  export type RespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta findFirstOrThrow
   */
  export type RespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Resposta to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta findMany
   */
  export type RespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter, which Respostas to fetch.
     */
    where?: RespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respostas to fetch.
     */
    orderBy?: RespostaOrderByWithRelationInput | RespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respostas.
     */
    cursor?: RespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * Resposta create
   */
  export type RespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a Resposta.
     */
    data: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
  }

  /**
   * Resposta createMany
   */
  export type RespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respostas.
     */
    data: RespostaCreateManyInput | RespostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resposta update
   */
  export type RespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a Resposta.
     */
    data: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
    /**
     * Choose, which Resposta to update.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta updateMany
   */
  export type RespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respostas.
     */
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyInput>
    /**
     * Filter which Respostas to update
     */
    where?: RespostaWhereInput
    /**
     * Limit how many Respostas to update.
     */
    limit?: number
  }

  /**
   * Resposta upsert
   */
  export type RespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the Resposta to update in case it exists.
     */
    where: RespostaWhereUniqueInput
    /**
     * In case the Resposta found by the `where` argument doesn't exist, create a new Resposta with this data.
     */
    create: XOR<RespostaCreateInput, RespostaUncheckedCreateInput>
    /**
     * In case the Resposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespostaUpdateInput, RespostaUncheckedUpdateInput>
  }

  /**
   * Resposta delete
   */
  export type RespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
    /**
     * Filter which Resposta to delete.
     */
    where: RespostaWhereUniqueInput
  }

  /**
   * Resposta deleteMany
   */
  export type RespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respostas to delete
     */
    where?: RespostaWhereInput
    /**
     * Limit how many Respostas to delete.
     */
    limit?: number
  }

  /**
   * Resposta without action
   */
  export type RespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resposta
     */
    select?: RespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resposta
     */
    omit?: RespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespostaInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const DiagnosticoScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    notaGeral: 'notaGeral',
    percentualMaturidade: 'percentualMaturidade',
    nivelMaturidade: 'nivelMaturidade',
    porDiretoria: 'porDiretoria',
    porDimensao: 'porDimensao',
    createdAt: 'createdAt'
  };

  export type DiagnosticoScalarFieldEnum = (typeof DiagnosticoScalarFieldEnum)[keyof typeof DiagnosticoScalarFieldEnum]


  export const RespostaScalarFieldEnum: {
    id: 'id',
    diagnosticoId: 'diagnosticoId',
    perguntaId: 'perguntaId',
    codigo: 'codigo',
    diretoria: 'diretoria',
    dimensao: 'dimensao',
    texto: 'texto',
    valor: 'valor'
  };

  export type RespostaScalarFieldEnum = (typeof RespostaScalarFieldEnum)[keyof typeof RespostaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const EmpresaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type EmpresaOrderByRelevanceFieldEnum = (typeof EmpresaOrderByRelevanceFieldEnum)[keyof typeof EmpresaOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const DiagnosticoOrderByRelevanceFieldEnum: {
    nivelMaturidade: 'nivelMaturidade'
  };

  export type DiagnosticoOrderByRelevanceFieldEnum = (typeof DiagnosticoOrderByRelevanceFieldEnum)[keyof typeof DiagnosticoOrderByRelevanceFieldEnum]


  export const RespostaOrderByRelevanceFieldEnum: {
    codigo: 'codigo',
    diretoria: 'diretoria',
    dimensao: 'dimensao',
    texto: 'texto'
  };

  export type RespostaOrderByRelevanceFieldEnum = (typeof RespostaOrderByRelevanceFieldEnum)[keyof typeof RespostaOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    nome?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    diagnosticos?: DiagnosticoListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    diagnosticos?: DiagnosticoOrderByRelationAggregateInput
    _relevance?: EmpresaOrderByRelevanceInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    diagnosticos?: DiagnosticoListRelationFilter
  }, "id">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type DiagnosticoWhereInput = {
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    id?: IntFilter<"Diagnostico"> | number
    empresaId?: IntFilter<"Diagnostico"> | number
    notaGeral?: FloatFilter<"Diagnostico"> | number
    percentualMaturidade?: FloatFilter<"Diagnostico"> | number
    nivelMaturidade?: StringFilter<"Diagnostico"> | string
    porDiretoria?: JsonFilter<"Diagnostico">
    porDimensao?: JsonFilter<"Diagnostico">
    createdAt?: DateTimeFilter<"Diagnostico"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    respostas?: RespostaListRelationFilter
  }

  export type DiagnosticoOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    nivelMaturidade?: SortOrder
    porDiretoria?: SortOrder
    porDimensao?: SortOrder
    createdAt?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    respostas?: RespostaOrderByRelationAggregateInput
    _relevance?: DiagnosticoOrderByRelevanceInput
  }

  export type DiagnosticoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    OR?: DiagnosticoWhereInput[]
    NOT?: DiagnosticoWhereInput | DiagnosticoWhereInput[]
    empresaId?: IntFilter<"Diagnostico"> | number
    notaGeral?: FloatFilter<"Diagnostico"> | number
    percentualMaturidade?: FloatFilter<"Diagnostico"> | number
    nivelMaturidade?: StringFilter<"Diagnostico"> | string
    porDiretoria?: JsonFilter<"Diagnostico">
    porDimensao?: JsonFilter<"Diagnostico">
    createdAt?: DateTimeFilter<"Diagnostico"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    respostas?: RespostaListRelationFilter
  }, "id">

  export type DiagnosticoOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    nivelMaturidade?: SortOrder
    porDiretoria?: SortOrder
    porDimensao?: SortOrder
    createdAt?: SortOrder
    _count?: DiagnosticoCountOrderByAggregateInput
    _avg?: DiagnosticoAvgOrderByAggregateInput
    _max?: DiagnosticoMaxOrderByAggregateInput
    _min?: DiagnosticoMinOrderByAggregateInput
    _sum?: DiagnosticoSumOrderByAggregateInput
  }

  export type DiagnosticoScalarWhereWithAggregatesInput = {
    AND?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    OR?: DiagnosticoScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticoScalarWhereWithAggregatesInput | DiagnosticoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diagnostico"> | number
    empresaId?: IntWithAggregatesFilter<"Diagnostico"> | number
    notaGeral?: FloatWithAggregatesFilter<"Diagnostico"> | number
    percentualMaturidade?: FloatWithAggregatesFilter<"Diagnostico"> | number
    nivelMaturidade?: StringWithAggregatesFilter<"Diagnostico"> | string
    porDiretoria?: JsonWithAggregatesFilter<"Diagnostico">
    porDimensao?: JsonWithAggregatesFilter<"Diagnostico">
    createdAt?: DateTimeWithAggregatesFilter<"Diagnostico"> | Date | string
  }

  export type RespostaWhereInput = {
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    id?: IntFilter<"Resposta"> | number
    diagnosticoId?: IntFilter<"Resposta"> | number
    perguntaId?: IntFilter<"Resposta"> | number
    codigo?: StringFilter<"Resposta"> | string
    diretoria?: StringFilter<"Resposta"> | string
    dimensao?: StringFilter<"Resposta"> | string
    texto?: StringFilter<"Resposta"> | string
    valor?: IntFilter<"Resposta"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, DiagnosticoWhereInput>
  }

  export type RespostaOrderByWithRelationInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
    diagnostico?: DiagnosticoOrderByWithRelationInput
    _relevance?: RespostaOrderByRelevanceInput
  }

  export type RespostaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RespostaWhereInput | RespostaWhereInput[]
    OR?: RespostaWhereInput[]
    NOT?: RespostaWhereInput | RespostaWhereInput[]
    diagnosticoId?: IntFilter<"Resposta"> | number
    perguntaId?: IntFilter<"Resposta"> | number
    codigo?: StringFilter<"Resposta"> | string
    diretoria?: StringFilter<"Resposta"> | string
    dimensao?: StringFilter<"Resposta"> | string
    texto?: StringFilter<"Resposta"> | string
    valor?: IntFilter<"Resposta"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, DiagnosticoWhereInput>
  }, "id">

  export type RespostaOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
    _count?: RespostaCountOrderByAggregateInput
    _avg?: RespostaAvgOrderByAggregateInput
    _max?: RespostaMaxOrderByAggregateInput
    _min?: RespostaMinOrderByAggregateInput
    _sum?: RespostaSumOrderByAggregateInput
  }

  export type RespostaScalarWhereWithAggregatesInput = {
    AND?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    OR?: RespostaScalarWhereWithAggregatesInput[]
    NOT?: RespostaScalarWhereWithAggregatesInput | RespostaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resposta"> | number
    diagnosticoId?: IntWithAggregatesFilter<"Resposta"> | number
    perguntaId?: IntWithAggregatesFilter<"Resposta"> | number
    codigo?: StringWithAggregatesFilter<"Resposta"> | string
    diretoria?: StringWithAggregatesFilter<"Resposta"> | string
    dimensao?: StringWithAggregatesFilter<"Resposta"> | string
    texto?: StringWithAggregatesFilter<"Resposta"> | string
    valor?: IntWithAggregatesFilter<"Resposta"> | number
  }

  export type EmpresaCreateInput = {
    nome: string
    createdAt?: Date | string
    diagnosticos?: DiagnosticoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    diagnosticos?: DiagnosticoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticos?: DiagnosticoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoCreateInput = {
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutDiagnosticosInput
    respostas?: RespostaCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoUncheckedCreateInput = {
    id?: number
    empresaId: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    respostas?: RespostaUncheckedCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoUpdateInput = {
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutDiagnosticosNestedInput
    respostas?: RespostaUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUncheckedUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoCreateManyInput = {
    id?: number
    empresaId: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DiagnosticoUpdateManyMutationInput = {
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaCreateInput = {
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
    diagnostico: DiagnosticoCreateNestedOneWithoutRespostasInput
  }

  export type RespostaUncheckedCreateInput = {
    id?: number
    diagnosticoId: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type RespostaUpdateInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    diagnostico?: DiagnosticoUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type RespostaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosticoId?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type RespostaCreateManyInput = {
    id?: number
    diagnosticoId: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type RespostaUpdateManyMutationInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type RespostaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosticoId?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
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
    search?: string
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

  export type DiagnosticoListRelationFilter = {
    every?: DiagnosticoWhereInput
    some?: DiagnosticoWhereInput
    none?: DiagnosticoWhereInput
  }

  export type DiagnosticoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaOrderByRelevanceInput = {
    fields: EmpresaOrderByRelevanceFieldEnum | EmpresaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type RespostaListRelationFilter = {
    every?: RespostaWhereInput
    some?: RespostaWhereInput
    none?: RespostaWhereInput
  }

  export type RespostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticoOrderByRelevanceInput = {
    fields: DiagnosticoOrderByRelevanceFieldEnum | DiagnosticoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticoCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    nivelMaturidade?: SortOrder
    porDiretoria?: SortOrder
    porDimensao?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosticoAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
  }

  export type DiagnosticoMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    nivelMaturidade?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosticoMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    nivelMaturidade?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosticoSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DiagnosticoScalarRelationFilter = {
    is?: DiagnosticoWhereInput
    isNot?: DiagnosticoWhereInput
  }

  export type RespostaOrderByRelevanceInput = {
    fields: RespostaOrderByRelevanceFieldEnum | RespostaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RespostaCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type RespostaAvgOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    valor?: SortOrder
  }

  export type RespostaMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type RespostaMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type RespostaSumOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    valor?: SortOrder
  }

  export type DiagnosticoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput> | DiagnosticoCreateWithoutEmpresaInput[] | DiagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutEmpresaInput | DiagnosticoCreateOrConnectWithoutEmpresaInput[]
    createMany?: DiagnosticoCreateManyEmpresaInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type DiagnosticoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput> | DiagnosticoCreateWithoutEmpresaInput[] | DiagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutEmpresaInput | DiagnosticoCreateOrConnectWithoutEmpresaInput[]
    createMany?: DiagnosticoCreateManyEmpresaInputEnvelope
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DiagnosticoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput> | DiagnosticoCreateWithoutEmpresaInput[] | DiagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutEmpresaInput | DiagnosticoCreateOrConnectWithoutEmpresaInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutEmpresaInput | DiagnosticoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: DiagnosticoCreateManyEmpresaInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutEmpresaInput | DiagnosticoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutEmpresaInput | DiagnosticoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiagnosticoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput> | DiagnosticoCreateWithoutEmpresaInput[] | DiagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutEmpresaInput | DiagnosticoCreateOrConnectWithoutEmpresaInput[]
    upsert?: DiagnosticoUpsertWithWhereUniqueWithoutEmpresaInput | DiagnosticoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: DiagnosticoCreateManyEmpresaInputEnvelope
    set?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    disconnect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    delete?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    connect?: DiagnosticoWhereUniqueInput | DiagnosticoWhereUniqueInput[]
    update?: DiagnosticoUpdateWithWhereUniqueWithoutEmpresaInput | DiagnosticoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: DiagnosticoUpdateManyWithWhereWithoutEmpresaInput | DiagnosticoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutDiagnosticosInput = {
    create?: XOR<EmpresaCreateWithoutDiagnosticosInput, EmpresaUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutDiagnosticosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type RespostaCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput> | RespostaCreateWithoutDiagnosticoInput[] | RespostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutDiagnosticoInput | RespostaCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: RespostaCreateManyDiagnosticoInputEnvelope
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
  }

  export type RespostaUncheckedCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput> | RespostaCreateWithoutDiagnosticoInput[] | RespostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutDiagnosticoInput | RespostaCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: RespostaCreateManyDiagnosticoInputEnvelope
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpresaUpdateOneRequiredWithoutDiagnosticosNestedInput = {
    create?: XOR<EmpresaCreateWithoutDiagnosticosInput, EmpresaUncheckedCreateWithoutDiagnosticosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutDiagnosticosInput
    upsert?: EmpresaUpsertWithoutDiagnosticosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutDiagnosticosInput, EmpresaUpdateWithoutDiagnosticosInput>, EmpresaUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type RespostaUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput> | RespostaCreateWithoutDiagnosticoInput[] | RespostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutDiagnosticoInput | RespostaCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: RespostaUpsertWithWhereUniqueWithoutDiagnosticoInput | RespostaUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: RespostaCreateManyDiagnosticoInputEnvelope
    set?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    disconnect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    delete?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    update?: RespostaUpdateWithWhereUniqueWithoutDiagnosticoInput | RespostaUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: RespostaUpdateManyWithWhereWithoutDiagnosticoInput | RespostaUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
  }

  export type RespostaUncheckedUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput> | RespostaCreateWithoutDiagnosticoInput[] | RespostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: RespostaCreateOrConnectWithoutDiagnosticoInput | RespostaCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: RespostaUpsertWithWhereUniqueWithoutDiagnosticoInput | RespostaUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: RespostaCreateManyDiagnosticoInputEnvelope
    set?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    disconnect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    delete?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    connect?: RespostaWhereUniqueInput | RespostaWhereUniqueInput[]
    update?: RespostaUpdateWithWhereUniqueWithoutDiagnosticoInput | RespostaUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: RespostaUpdateManyWithWhereWithoutDiagnosticoInput | RespostaUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
  }

  export type DiagnosticoCreateNestedOneWithoutRespostasInput = {
    create?: XOR<DiagnosticoCreateWithoutRespostasInput, DiagnosticoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutRespostasInput
    connect?: DiagnosticoWhereUniqueInput
  }

  export type DiagnosticoUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<DiagnosticoCreateWithoutRespostasInput, DiagnosticoUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: DiagnosticoCreateOrConnectWithoutRespostasInput
    upsert?: DiagnosticoUpsertWithoutRespostasInput
    connect?: DiagnosticoWhereUniqueInput
    update?: XOR<XOR<DiagnosticoUpdateToOneWithWhereWithoutRespostasInput, DiagnosticoUpdateWithoutRespostasInput>, DiagnosticoUncheckedUpdateWithoutRespostasInput>
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
    search?: string
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
    search?: string
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DiagnosticoCreateWithoutEmpresaInput = {
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    respostas?: RespostaCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoUncheckedCreateWithoutEmpresaInput = {
    id?: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    respostas?: RespostaUncheckedCreateNestedManyWithoutDiagnosticoInput
  }

  export type DiagnosticoCreateOrConnectWithoutEmpresaInput = {
    where: DiagnosticoWhereUniqueInput
    create: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput>
  }

  export type DiagnosticoCreateManyEmpresaInputEnvelope = {
    data: DiagnosticoCreateManyEmpresaInput | DiagnosticoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: DiagnosticoWhereUniqueInput
    update: XOR<DiagnosticoUpdateWithoutEmpresaInput, DiagnosticoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<DiagnosticoCreateWithoutEmpresaInput, DiagnosticoUncheckedCreateWithoutEmpresaInput>
  }

  export type DiagnosticoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: DiagnosticoWhereUniqueInput
    data: XOR<DiagnosticoUpdateWithoutEmpresaInput, DiagnosticoUncheckedUpdateWithoutEmpresaInput>
  }

  export type DiagnosticoUpdateManyWithWhereWithoutEmpresaInput = {
    where: DiagnosticoScalarWhereInput
    data: XOR<DiagnosticoUpdateManyMutationInput, DiagnosticoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type DiagnosticoScalarWhereInput = {
    AND?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
    OR?: DiagnosticoScalarWhereInput[]
    NOT?: DiagnosticoScalarWhereInput | DiagnosticoScalarWhereInput[]
    id?: IntFilter<"Diagnostico"> | number
    empresaId?: IntFilter<"Diagnostico"> | number
    notaGeral?: FloatFilter<"Diagnostico"> | number
    percentualMaturidade?: FloatFilter<"Diagnostico"> | number
    nivelMaturidade?: StringFilter<"Diagnostico"> | string
    porDiretoria?: JsonFilter<"Diagnostico">
    porDimensao?: JsonFilter<"Diagnostico">
    createdAt?: DateTimeFilter<"Diagnostico"> | Date | string
  }

  export type EmpresaCreateWithoutDiagnosticosInput = {
    nome: string
    createdAt?: Date | string
  }

  export type EmpresaUncheckedCreateWithoutDiagnosticosInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type EmpresaCreateOrConnectWithoutDiagnosticosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutDiagnosticosInput, EmpresaUncheckedCreateWithoutDiagnosticosInput>
  }

  export type RespostaCreateWithoutDiagnosticoInput = {
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type RespostaUncheckedCreateWithoutDiagnosticoInput = {
    id?: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type RespostaCreateOrConnectWithoutDiagnosticoInput = {
    where: RespostaWhereUniqueInput
    create: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput>
  }

  export type RespostaCreateManyDiagnosticoInputEnvelope = {
    data: RespostaCreateManyDiagnosticoInput | RespostaCreateManyDiagnosticoInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutDiagnosticosInput = {
    update: XOR<EmpresaUpdateWithoutDiagnosticosInput, EmpresaUncheckedUpdateWithoutDiagnosticosInput>
    create: XOR<EmpresaCreateWithoutDiagnosticosInput, EmpresaUncheckedCreateWithoutDiagnosticosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutDiagnosticosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutDiagnosticosInput, EmpresaUncheckedUpdateWithoutDiagnosticosInput>
  }

  export type EmpresaUpdateWithoutDiagnosticosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateWithoutDiagnosticosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaUpsertWithWhereUniqueWithoutDiagnosticoInput = {
    where: RespostaWhereUniqueInput
    update: XOR<RespostaUpdateWithoutDiagnosticoInput, RespostaUncheckedUpdateWithoutDiagnosticoInput>
    create: XOR<RespostaCreateWithoutDiagnosticoInput, RespostaUncheckedCreateWithoutDiagnosticoInput>
  }

  export type RespostaUpdateWithWhereUniqueWithoutDiagnosticoInput = {
    where: RespostaWhereUniqueInput
    data: XOR<RespostaUpdateWithoutDiagnosticoInput, RespostaUncheckedUpdateWithoutDiagnosticoInput>
  }

  export type RespostaUpdateManyWithWhereWithoutDiagnosticoInput = {
    where: RespostaScalarWhereInput
    data: XOR<RespostaUpdateManyMutationInput, RespostaUncheckedUpdateManyWithoutDiagnosticoInput>
  }

  export type RespostaScalarWhereInput = {
    AND?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
    OR?: RespostaScalarWhereInput[]
    NOT?: RespostaScalarWhereInput | RespostaScalarWhereInput[]
    id?: IntFilter<"Resposta"> | number
    diagnosticoId?: IntFilter<"Resposta"> | number
    perguntaId?: IntFilter<"Resposta"> | number
    codigo?: StringFilter<"Resposta"> | string
    diretoria?: StringFilter<"Resposta"> | string
    dimensao?: StringFilter<"Resposta"> | string
    texto?: StringFilter<"Resposta"> | string
    valor?: IntFilter<"Resposta"> | number
  }

  export type DiagnosticoCreateWithoutRespostasInput = {
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutDiagnosticosInput
  }

  export type DiagnosticoUncheckedCreateWithoutRespostasInput = {
    id?: number
    empresaId: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DiagnosticoCreateOrConnectWithoutRespostasInput = {
    where: DiagnosticoWhereUniqueInput
    create: XOR<DiagnosticoCreateWithoutRespostasInput, DiagnosticoUncheckedCreateWithoutRespostasInput>
  }

  export type DiagnosticoUpsertWithoutRespostasInput = {
    update: XOR<DiagnosticoUpdateWithoutRespostasInput, DiagnosticoUncheckedUpdateWithoutRespostasInput>
    create: XOR<DiagnosticoCreateWithoutRespostasInput, DiagnosticoUncheckedCreateWithoutRespostasInput>
    where?: DiagnosticoWhereInput
  }

  export type DiagnosticoUpdateToOneWithWhereWithoutRespostasInput = {
    where?: DiagnosticoWhereInput
    data: XOR<DiagnosticoUpdateWithoutRespostasInput, DiagnosticoUncheckedUpdateWithoutRespostasInput>
  }

  export type DiagnosticoUpdateWithoutRespostasInput = {
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutDiagnosticosNestedInput
  }

  export type DiagnosticoUncheckedUpdateWithoutRespostasInput = {
    id?: IntFieldUpdateOperationsInput | number
    empresaId?: IntFieldUpdateOperationsInput | number
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticoCreateManyEmpresaInput = {
    id?: number
    notaGeral: number
    percentualMaturidade: number
    nivelMaturidade: string
    porDiretoria: JsonNullValueInput | InputJsonValue
    porDimensao: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DiagnosticoUpdateWithoutEmpresaInput = {
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: RespostaUncheckedUpdateManyWithoutDiagnosticoNestedInput
  }

  export type DiagnosticoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    porDiretoria?: JsonNullValueInput | InputJsonValue
    porDimensao?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespostaCreateManyDiagnosticoInput = {
    id?: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type RespostaUpdateWithoutDiagnosticoInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type RespostaUncheckedUpdateWithoutDiagnosticoInput = {
    id?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type RespostaUncheckedUpdateManyWithoutDiagnosticoInput = {
    id?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }



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