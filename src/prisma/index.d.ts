
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
 * Model diagnostico
 * 
 */
export type diagnostico = $Result.DefaultSelection<Prisma.$diagnosticoPayload>
/**
 * Model empresa
 * 
 */
export type empresa = $Result.DefaultSelection<Prisma.$empresaPayload>
/**
 * Model resposta
 * 
 */
export type resposta = $Result.DefaultSelection<Prisma.$respostaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Diagnosticos
 * const diagnosticos = await prisma.diagnostico.findMany()
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
   * // Fetch zero or more Diagnosticos
   * const diagnosticos = await prisma.diagnostico.findMany()
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
   * `prisma.diagnostico`: Exposes CRUD operations for the **diagnostico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnosticos
    * const diagnosticos = await prisma.diagnostico.findMany()
    * ```
    */
  get diagnostico(): Prisma.diagnosticoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.empresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resposta`: Exposes CRUD operations for the **resposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas
    * const respostas = await prisma.resposta.findMany()
    * ```
    */
  get resposta(): Prisma.respostaDelegate<ExtArgs, ClientOptions>;
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
    diagnostico: 'diagnostico',
    empresa: 'empresa',
    resposta: 'resposta'
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
      modelProps: "diagnostico" | "empresa" | "resposta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      diagnostico: {
        payload: Prisma.$diagnosticoPayload<ExtArgs>
        fields: Prisma.diagnosticoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosticoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosticoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          findFirst: {
            args: Prisma.diagnosticoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosticoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          findMany: {
            args: Prisma.diagnosticoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>[]
          }
          create: {
            args: Prisma.diagnosticoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          createMany: {
            args: Prisma.diagnosticoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.diagnosticoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          update: {
            args: Prisma.diagnosticoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          deleteMany: {
            args: Prisma.diagnosticoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosticoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.diagnosticoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosticoPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnostico>
          }
          groupBy: {
            args: Prisma.diagnosticoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosticoCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticoCountAggregateOutputType> | number
          }
        }
      }
      empresa: {
        payload: Prisma.$empresaPayload<ExtArgs>
        fields: Prisma.empresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          findFirst: {
            args: Prisma.empresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          findMany: {
            args: Prisma.empresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>[]
          }
          create: {
            args: Prisma.empresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          createMany: {
            args: Prisma.empresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.empresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          update: {
            args: Prisma.empresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          deleteMany: {
            args: Prisma.empresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.empresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.empresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.empresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      resposta: {
        payload: Prisma.$respostaPayload<ExtArgs>
        fields: Prisma.respostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.respostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.respostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          findFirst: {
            args: Prisma.respostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.respostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          findMany: {
            args: Prisma.respostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>[]
          }
          create: {
            args: Prisma.respostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          createMany: {
            args: Prisma.respostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.respostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          update: {
            args: Prisma.respostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          deleteMany: {
            args: Prisma.respostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.respostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.respostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostaPayload>
          }
          aggregate: {
            args: Prisma.RespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResposta>
          }
          groupBy: {
            args: Prisma.respostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.respostaCountArgs<ExtArgs>
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
    diagnostico?: diagnosticoOmit
    empresa?: empresaOmit
    resposta?: respostaOmit
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
   * Count Type DiagnosticoCountOutputType
   */

  export type DiagnosticoCountOutputType = {
    resposta: number
  }

  export type DiagnosticoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resposta?: boolean | DiagnosticoCountOutputTypeCountRespostaArgs
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
  export type DiagnosticoCountOutputTypeCountRespostaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respostaWhereInput
  }


  /**
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    diagnostico: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | EmpresaCountOutputTypeCountDiagnosticoArgs
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
  export type EmpresaCountOutputTypeCountDiagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model diagnostico
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
    createdAt: Date | null
    empresaId: number | null
    nivelMaturidade: string | null
    notaGeral: number | null
    percentualMaturidade: number | null
  }

  export type DiagnosticoMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    empresaId: number | null
    nivelMaturidade: string | null
    notaGeral: number | null
    percentualMaturidade: number | null
  }

  export type DiagnosticoCountAggregateOutputType = {
    id: number
    createdAt: number
    empresaId: number
    nivelMaturidade: number
    notaGeral: number
    percentualMaturidade: number
    porDimensao: number
    porDiretoria: number
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
    createdAt?: true
    empresaId?: true
    nivelMaturidade?: true
    notaGeral?: true
    percentualMaturidade?: true
  }

  export type DiagnosticoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    empresaId?: true
    nivelMaturidade?: true
    notaGeral?: true
    percentualMaturidade?: true
  }

  export type DiagnosticoCountAggregateInputType = {
    id?: true
    createdAt?: true
    empresaId?: true
    nivelMaturidade?: true
    notaGeral?: true
    percentualMaturidade?: true
    porDimensao?: true
    porDiretoria?: true
    _all?: true
  }

  export type DiagnosticoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnostico to aggregate.
     */
    where?: diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticoOrderByWithRelationInput | diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnosticos
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




  export type diagnosticoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosticoWhereInput
    orderBy?: diagnosticoOrderByWithAggregationInput | diagnosticoOrderByWithAggregationInput[]
    by: DiagnosticoScalarFieldEnum[] | DiagnosticoScalarFieldEnum
    having?: diagnosticoScalarWhereWithAggregatesInput
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
    createdAt: Date
    empresaId: number
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonValue
    porDiretoria: JsonValue
    _count: DiagnosticoCountAggregateOutputType | null
    _avg: DiagnosticoAvgAggregateOutputType | null
    _sum: DiagnosticoSumAggregateOutputType | null
    _min: DiagnosticoMinAggregateOutputType | null
    _max: DiagnosticoMaxAggregateOutputType | null
  }

  type GetDiagnosticoGroupByPayload<T extends diagnosticoGroupByArgs> = Prisma.PrismaPromise<
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


  export type diagnosticoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    empresaId?: boolean
    nivelMaturidade?: boolean
    notaGeral?: boolean
    percentualMaturidade?: boolean
    porDimensao?: boolean
    porDiretoria?: boolean
    empresa?: boolean | empresaDefaultArgs<ExtArgs>
    resposta?: boolean | diagnostico$respostaArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnostico"]>



  export type diagnosticoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    empresaId?: boolean
    nivelMaturidade?: boolean
    notaGeral?: boolean
    percentualMaturidade?: boolean
    porDimensao?: boolean
    porDiretoria?: boolean
  }

  export type diagnosticoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "empresaId" | "nivelMaturidade" | "notaGeral" | "percentualMaturidade" | "porDimensao" | "porDiretoria", ExtArgs["result"]["diagnostico"]>
  export type diagnosticoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | empresaDefaultArgs<ExtArgs>
    resposta?: boolean | diagnostico$respostaArgs<ExtArgs>
    _count?: boolean | DiagnosticoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $diagnosticoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnostico"
    objects: {
      empresa: Prisma.$empresaPayload<ExtArgs>
      resposta: Prisma.$respostaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      empresaId: number
      nivelMaturidade: string
      notaGeral: number
      percentualMaturidade: number
      porDimensao: Prisma.JsonValue
      porDiretoria: Prisma.JsonValue
    }, ExtArgs["result"]["diagnostico"]>
    composites: {}
  }

  type diagnosticoGetPayload<S extends boolean | null | undefined | diagnosticoDefaultArgs> = $Result.GetResult<Prisma.$diagnosticoPayload, S>

  type diagnosticoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diagnosticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticoCountAggregateInputType | true
    }

  export interface diagnosticoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnostico'], meta: { name: 'diagnostico' } }
    /**
     * Find zero or one Diagnostico that matches the filter.
     * @param {diagnosticoFindUniqueArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosticoFindUniqueArgs>(args: SelectSubset<T, diagnosticoFindUniqueArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnostico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diagnosticoFindUniqueOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosticoFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticoFindFirstArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosticoFindFirstArgs>(args?: SelectSubset<T, diagnosticoFindFirstArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnostico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticoFindFirstOrThrowArgs} args - Arguments to find a Diagnostico
     * @example
     * // Get one Diagnostico
     * const diagnostico = await prisma.diagnostico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosticoFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosticoFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnosticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticoFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends diagnosticoFindManyArgs>(args?: SelectSubset<T, diagnosticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnostico.
     * @param {diagnosticoCreateArgs} args - Arguments to create a Diagnostico.
     * @example
     * // Create one Diagnostico
     * const Diagnostico = await prisma.diagnostico.create({
     *   data: {
     *     // ... data to create a Diagnostico
     *   }
     * })
     * 
     */
    create<T extends diagnosticoCreateArgs>(args: SelectSubset<T, diagnosticoCreateArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnosticos.
     * @param {diagnosticoCreateManyArgs} args - Arguments to create many Diagnosticos.
     * @example
     * // Create many Diagnosticos
     * const diagnostico = await prisma.diagnostico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosticoCreateManyArgs>(args?: SelectSubset<T, diagnosticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnostico.
     * @param {diagnosticoDeleteArgs} args - Arguments to delete one Diagnostico.
     * @example
     * // Delete one Diagnostico
     * const Diagnostico = await prisma.diagnostico.delete({
     *   where: {
     *     // ... filter to delete one Diagnostico
     *   }
     * })
     * 
     */
    delete<T extends diagnosticoDeleteArgs>(args: SelectSubset<T, diagnosticoDeleteArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnostico.
     * @param {diagnosticoUpdateArgs} args - Arguments to update one Diagnostico.
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
    update<T extends diagnosticoUpdateArgs>(args: SelectSubset<T, diagnosticoUpdateArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnosticos.
     * @param {diagnosticoDeleteManyArgs} args - Arguments to filter Diagnosticos to delete.
     * @example
     * // Delete a few Diagnosticos
     * const { count } = await prisma.diagnostico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosticoDeleteManyArgs>(args?: SelectSubset<T, diagnosticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticoUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends diagnosticoUpdateManyArgs>(args: SelectSubset<T, diagnosticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnostico.
     * @param {diagnosticoUpsertArgs} args - Arguments to update or create a Diagnostico.
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
    upsert<T extends diagnosticoUpsertArgs>(args: SelectSubset<T, diagnosticoUpsertArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnosticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosticoCountArgs} args - Arguments to filter Diagnosticos to count.
     * @example
     * // Count the number of Diagnosticos
     * const count = await prisma.diagnostico.count({
     *   where: {
     *     // ... the filter for the Diagnosticos we want to count
     *   }
     * })
    **/
    count<T extends diagnosticoCountArgs>(
      args?: Subset<T, diagnosticoCountArgs>,
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
     * @param {diagnosticoGroupByArgs} args - Group by arguments.
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
      T extends diagnosticoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosticoGroupByArgs['orderBy'] }
        : { orderBy?: diagnosticoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, diagnosticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnostico model
   */
  readonly fields: diagnosticoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnostico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosticoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends empresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empresaDefaultArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resposta<T extends diagnostico$respostaArgs<ExtArgs> = {}>(args?: Subset<T, diagnostico$respostaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the diagnostico model
   */
  interface diagnosticoFieldRefs {
    readonly id: FieldRef<"diagnostico", 'Int'>
    readonly createdAt: FieldRef<"diagnostico", 'DateTime'>
    readonly empresaId: FieldRef<"diagnostico", 'Int'>
    readonly nivelMaturidade: FieldRef<"diagnostico", 'String'>
    readonly notaGeral: FieldRef<"diagnostico", 'Float'>
    readonly percentualMaturidade: FieldRef<"diagnostico", 'Float'>
    readonly porDimensao: FieldRef<"diagnostico", 'Json'>
    readonly porDiretoria: FieldRef<"diagnostico", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * diagnostico findUnique
   */
  export type diagnosticoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which diagnostico to fetch.
     */
    where: diagnosticoWhereUniqueInput
  }

  /**
   * diagnostico findUniqueOrThrow
   */
  export type diagnosticoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which diagnostico to fetch.
     */
    where: diagnosticoWhereUniqueInput
  }

  /**
   * diagnostico findFirst
   */
  export type diagnosticoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which diagnostico to fetch.
     */
    where?: diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticoOrderByWithRelationInput | diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosticos.
     */
    cursor?: diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * diagnostico findFirstOrThrow
   */
  export type diagnosticoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which diagnostico to fetch.
     */
    where?: diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticoOrderByWithRelationInput | diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnosticos.
     */
    cursor?: diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * diagnostico findMany
   */
  export type diagnosticoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter, which diagnosticos to fetch.
     */
    where?: diagnosticoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnosticos to fetch.
     */
    orderBy?: diagnosticoOrderByWithRelationInput | diagnosticoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnosticos.
     */
    cursor?: diagnosticoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnosticos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnosticos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnosticos.
     */
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * diagnostico create
   */
  export type diagnosticoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnostico.
     */
    data: XOR<diagnosticoCreateInput, diagnosticoUncheckedCreateInput>
  }

  /**
   * diagnostico createMany
   */
  export type diagnosticoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnosticos.
     */
    data: diagnosticoCreateManyInput | diagnosticoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnostico update
   */
  export type diagnosticoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnostico.
     */
    data: XOR<diagnosticoUpdateInput, diagnosticoUncheckedUpdateInput>
    /**
     * Choose, which diagnostico to update.
     */
    where: diagnosticoWhereUniqueInput
  }

  /**
   * diagnostico updateMany
   */
  export type diagnosticoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnosticos.
     */
    data: XOR<diagnosticoUpdateManyMutationInput, diagnosticoUncheckedUpdateManyInput>
    /**
     * Filter which diagnosticos to update
     */
    where?: diagnosticoWhereInput
    /**
     * Limit how many diagnosticos to update.
     */
    limit?: number
  }

  /**
   * diagnostico upsert
   */
  export type diagnosticoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnostico to update in case it exists.
     */
    where: diagnosticoWhereUniqueInput
    /**
     * In case the diagnostico found by the `where` argument doesn't exist, create a new diagnostico with this data.
     */
    create: XOR<diagnosticoCreateInput, diagnosticoUncheckedCreateInput>
    /**
     * In case the diagnostico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosticoUpdateInput, diagnosticoUncheckedUpdateInput>
  }

  /**
   * diagnostico delete
   */
  export type diagnosticoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    /**
     * Filter which diagnostico to delete.
     */
    where: diagnosticoWhereUniqueInput
  }

  /**
   * diagnostico deleteMany
   */
  export type diagnosticoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnosticos to delete
     */
    where?: diagnosticoWhereInput
    /**
     * Limit how many diagnosticos to delete.
     */
    limit?: number
  }

  /**
   * diagnostico.resposta
   */
  export type diagnostico$respostaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    where?: respostaWhereInput
    orderBy?: respostaOrderByWithRelationInput | respostaOrderByWithRelationInput[]
    cursor?: respostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * diagnostico without action
   */
  export type diagnosticoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
  }


  /**
   * Model empresa
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
     * Filter which empresa to aggregate.
     */
    where?: empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresaOrderByWithRelationInput | empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empresas
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




  export type empresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empresaWhereInput
    orderBy?: empresaOrderByWithAggregationInput | empresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: empresaScalarWhereWithAggregatesInput
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

  type GetEmpresaGroupByPayload<T extends empresaGroupByArgs> = Prisma.PrismaPromise<
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


  export type empresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    diagnostico?: boolean | empresa$diagnosticoArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>



  export type empresaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
  }

  export type empresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt", ExtArgs["result"]["empresa"]>
  export type empresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | empresa$diagnosticoArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $empresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empresa"
    objects: {
      diagnostico: Prisma.$diagnosticoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type empresaGetPayload<S extends boolean | null | undefined | empresaDefaultArgs> = $Result.GetResult<Prisma.$empresaPayload, S>

  type empresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<empresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface empresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empresa'], meta: { name: 'empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {empresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empresaFindUniqueArgs>(args: SelectSubset<T, empresaFindUniqueArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {empresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empresaFindUniqueOrThrowArgs>(args: SelectSubset<T, empresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empresaFindFirstArgs>(args?: SelectSubset<T, empresaFindFirstArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empresaFindFirstOrThrowArgs>(args?: SelectSubset<T, empresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresaFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends empresaFindManyArgs>(args?: SelectSubset<T, empresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {empresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends empresaCreateArgs>(args: SelectSubset<T, empresaCreateArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {empresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empresaCreateManyArgs>(args?: SelectSubset<T, empresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empresa.
     * @param {empresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends empresaDeleteArgs>(args: SelectSubset<T, empresaDeleteArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {empresaUpdateArgs} args - Arguments to update one Empresa.
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
    update<T extends empresaUpdateArgs>(args: SelectSubset<T, empresaUpdateArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {empresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empresaDeleteManyArgs>(args?: SelectSubset<T, empresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends empresaUpdateManyArgs>(args: SelectSubset<T, empresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empresa.
     * @param {empresaUpsertArgs} args - Arguments to update or create a Empresa.
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
    upsert<T extends empresaUpsertArgs>(args: SelectSubset<T, empresaUpsertArgs<ExtArgs>>): Prisma__empresaClient<$Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends empresaCountArgs>(
      args?: Subset<T, empresaCountArgs>,
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
     * @param {empresaGroupByArgs} args - Group by arguments.
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
      T extends empresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empresaGroupByArgs['orderBy'] }
        : { orderBy?: empresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, empresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empresa model
   */
  readonly fields: empresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostico<T extends empresa$diagnosticoArgs<ExtArgs> = {}>(args?: Subset<T, empresa$diagnosticoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the empresa model
   */
  interface empresaFieldRefs {
    readonly id: FieldRef<"empresa", 'Int'>
    readonly nome: FieldRef<"empresa", 'String'>
    readonly createdAt: FieldRef<"empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * empresa findUnique
   */
  export type empresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter, which empresa to fetch.
     */
    where: empresaWhereUniqueInput
  }

  /**
   * empresa findUniqueOrThrow
   */
  export type empresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter, which empresa to fetch.
     */
    where: empresaWhereUniqueInput
  }

  /**
   * empresa findFirst
   */
  export type empresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter, which empresa to fetch.
     */
    where?: empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresaOrderByWithRelationInput | empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * empresa findFirstOrThrow
   */
  export type empresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter, which empresa to fetch.
     */
    where?: empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresaOrderByWithRelationInput | empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empresas.
     */
    cursor?: empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * empresa findMany
   */
  export type empresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter, which empresas to fetch.
     */
    where?: empresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empresas to fetch.
     */
    orderBy?: empresaOrderByWithRelationInput | empresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empresas.
     */
    cursor?: empresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * empresa create
   */
  export type empresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * The data needed to create a empresa.
     */
    data: XOR<empresaCreateInput, empresaUncheckedCreateInput>
  }

  /**
   * empresa createMany
   */
  export type empresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empresas.
     */
    data: empresaCreateManyInput | empresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empresa update
   */
  export type empresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * The data needed to update a empresa.
     */
    data: XOR<empresaUpdateInput, empresaUncheckedUpdateInput>
    /**
     * Choose, which empresa to update.
     */
    where: empresaWhereUniqueInput
  }

  /**
   * empresa updateMany
   */
  export type empresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empresas.
     */
    data: XOR<empresaUpdateManyMutationInput, empresaUncheckedUpdateManyInput>
    /**
     * Filter which empresas to update
     */
    where?: empresaWhereInput
    /**
     * Limit how many empresas to update.
     */
    limit?: number
  }

  /**
   * empresa upsert
   */
  export type empresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * The filter to search for the empresa to update in case it exists.
     */
    where: empresaWhereUniqueInput
    /**
     * In case the empresa found by the `where` argument doesn't exist, create a new empresa with this data.
     */
    create: XOR<empresaCreateInput, empresaUncheckedCreateInput>
    /**
     * In case the empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empresaUpdateInput, empresaUncheckedUpdateInput>
  }

  /**
   * empresa delete
   */
  export type empresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
    /**
     * Filter which empresa to delete.
     */
    where: empresaWhereUniqueInput
  }

  /**
   * empresa deleteMany
   */
  export type empresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empresas to delete
     */
    where?: empresaWhereInput
    /**
     * Limit how many empresas to delete.
     */
    limit?: number
  }

  /**
   * empresa.diagnostico
   */
  export type empresa$diagnosticoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnostico
     */
    select?: diagnosticoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnostico
     */
    omit?: diagnosticoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosticoInclude<ExtArgs> | null
    where?: diagnosticoWhereInput
    orderBy?: diagnosticoOrderByWithRelationInput | diagnosticoOrderByWithRelationInput[]
    cursor?: diagnosticoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticoScalarFieldEnum | DiagnosticoScalarFieldEnum[]
  }

  /**
   * empresa without action
   */
  export type empresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empresa
     */
    select?: empresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the empresa
     */
    omit?: empresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empresaInclude<ExtArgs> | null
  }


  /**
   * Model resposta
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
     * Filter which resposta to aggregate.
     */
    where?: respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas to fetch.
     */
    orderBy?: respostaOrderByWithRelationInput | respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned respostas
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




  export type respostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respostaWhereInput
    orderBy?: respostaOrderByWithAggregationInput | respostaOrderByWithAggregationInput[]
    by: RespostaScalarFieldEnum[] | RespostaScalarFieldEnum
    having?: respostaScalarWhereWithAggregatesInput
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

  type GetRespostaGroupByPayload<T extends respostaGroupByArgs> = Prisma.PrismaPromise<
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


  export type respostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosticoId?: boolean
    perguntaId?: boolean
    codigo?: boolean
    diretoria?: boolean
    dimensao?: boolean
    texto?: boolean
    valor?: boolean
    diagnostico?: boolean | diagnosticoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resposta"]>



  export type respostaSelectScalar = {
    id?: boolean
    diagnosticoId?: boolean
    perguntaId?: boolean
    codigo?: boolean
    diretoria?: boolean
    dimensao?: boolean
    texto?: boolean
    valor?: boolean
  }

  export type respostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosticoId" | "perguntaId" | "codigo" | "diretoria" | "dimensao" | "texto" | "valor", ExtArgs["result"]["resposta"]>
  export type respostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnostico?: boolean | diagnosticoDefaultArgs<ExtArgs>
  }

  export type $respostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resposta"
    objects: {
      diagnostico: Prisma.$diagnosticoPayload<ExtArgs>
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

  type respostaGetPayload<S extends boolean | null | undefined | respostaDefaultArgs> = $Result.GetResult<Prisma.$respostaPayload, S>

  type respostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<respostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespostaCountAggregateInputType | true
    }

  export interface respostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resposta'], meta: { name: 'resposta' } }
    /**
     * Find zero or one Resposta that matches the filter.
     * @param {respostaFindUniqueArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends respostaFindUniqueArgs>(args: SelectSubset<T, respostaFindUniqueArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {respostaFindUniqueOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends respostaFindUniqueOrThrowArgs>(args: SelectSubset<T, respostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostaFindFirstArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends respostaFindFirstArgs>(args?: SelectSubset<T, respostaFindFirstArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostaFindFirstOrThrowArgs} args - Arguments to find a Resposta
     * @example
     * // Get one Resposta
     * const resposta = await prisma.resposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends respostaFindFirstOrThrowArgs>(args?: SelectSubset<T, respostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostaFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends respostaFindManyArgs>(args?: SelectSubset<T, respostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resposta.
     * @param {respostaCreateArgs} args - Arguments to create a Resposta.
     * @example
     * // Create one Resposta
     * const Resposta = await prisma.resposta.create({
     *   data: {
     *     // ... data to create a Resposta
     *   }
     * })
     * 
     */
    create<T extends respostaCreateArgs>(args: SelectSubset<T, respostaCreateArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respostas.
     * @param {respostaCreateManyArgs} args - Arguments to create many Respostas.
     * @example
     * // Create many Respostas
     * const resposta = await prisma.resposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends respostaCreateManyArgs>(args?: SelectSubset<T, respostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resposta.
     * @param {respostaDeleteArgs} args - Arguments to delete one Resposta.
     * @example
     * // Delete one Resposta
     * const Resposta = await prisma.resposta.delete({
     *   where: {
     *     // ... filter to delete one Resposta
     *   }
     * })
     * 
     */
    delete<T extends respostaDeleteArgs>(args: SelectSubset<T, respostaDeleteArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resposta.
     * @param {respostaUpdateArgs} args - Arguments to update one Resposta.
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
    update<T extends respostaUpdateArgs>(args: SelectSubset<T, respostaUpdateArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respostas.
     * @param {respostaDeleteManyArgs} args - Arguments to filter Respostas to delete.
     * @example
     * // Delete a few Respostas
     * const { count } = await prisma.resposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends respostaDeleteManyArgs>(args?: SelectSubset<T, respostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostaUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends respostaUpdateManyArgs>(args: SelectSubset<T, respostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resposta.
     * @param {respostaUpsertArgs} args - Arguments to update or create a Resposta.
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
    upsert<T extends respostaUpsertArgs>(args: SelectSubset<T, respostaUpsertArgs<ExtArgs>>): Prisma__respostaClient<$Result.GetResult<Prisma.$respostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostaCountArgs} args - Arguments to filter Respostas to count.
     * @example
     * // Count the number of Respostas
     * const count = await prisma.resposta.count({
     *   where: {
     *     // ... the filter for the Respostas we want to count
     *   }
     * })
    **/
    count<T extends respostaCountArgs>(
      args?: Subset<T, respostaCountArgs>,
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
     * @param {respostaGroupByArgs} args - Group by arguments.
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
      T extends respostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: respostaGroupByArgs['orderBy'] }
        : { orderBy?: respostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, respostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resposta model
   */
  readonly fields: respostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__respostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnostico<T extends diagnosticoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, diagnosticoDefaultArgs<ExtArgs>>): Prisma__diagnosticoClient<$Result.GetResult<Prisma.$diagnosticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the resposta model
   */
  interface respostaFieldRefs {
    readonly id: FieldRef<"resposta", 'Int'>
    readonly diagnosticoId: FieldRef<"resposta", 'Int'>
    readonly perguntaId: FieldRef<"resposta", 'Int'>
    readonly codigo: FieldRef<"resposta", 'String'>
    readonly diretoria: FieldRef<"resposta", 'String'>
    readonly dimensao: FieldRef<"resposta", 'String'>
    readonly texto: FieldRef<"resposta", 'String'>
    readonly valor: FieldRef<"resposta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * resposta findUnique
   */
  export type respostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter, which resposta to fetch.
     */
    where: respostaWhereUniqueInput
  }

  /**
   * resposta findUniqueOrThrow
   */
  export type respostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter, which resposta to fetch.
     */
    where: respostaWhereUniqueInput
  }

  /**
   * resposta findFirst
   */
  export type respostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter, which resposta to fetch.
     */
    where?: respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas to fetch.
     */
    orderBy?: respostaOrderByWithRelationInput | respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respostas.
     */
    cursor?: respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * resposta findFirstOrThrow
   */
  export type respostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter, which resposta to fetch.
     */
    where?: respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas to fetch.
     */
    orderBy?: respostaOrderByWithRelationInput | respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respostas.
     */
    cursor?: respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * resposta findMany
   */
  export type respostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter, which respostas to fetch.
     */
    where?: respostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas to fetch.
     */
    orderBy?: respostaOrderByWithRelationInput | respostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing respostas.
     */
    cursor?: respostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respostas.
     */
    distinct?: RespostaScalarFieldEnum | RespostaScalarFieldEnum[]
  }

  /**
   * resposta create
   */
  export type respostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * The data needed to create a resposta.
     */
    data: XOR<respostaCreateInput, respostaUncheckedCreateInput>
  }

  /**
   * resposta createMany
   */
  export type respostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many respostas.
     */
    data: respostaCreateManyInput | respostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resposta update
   */
  export type respostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * The data needed to update a resposta.
     */
    data: XOR<respostaUpdateInput, respostaUncheckedUpdateInput>
    /**
     * Choose, which resposta to update.
     */
    where: respostaWhereUniqueInput
  }

  /**
   * resposta updateMany
   */
  export type respostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update respostas.
     */
    data: XOR<respostaUpdateManyMutationInput, respostaUncheckedUpdateManyInput>
    /**
     * Filter which respostas to update
     */
    where?: respostaWhereInput
    /**
     * Limit how many respostas to update.
     */
    limit?: number
  }

  /**
   * resposta upsert
   */
  export type respostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * The filter to search for the resposta to update in case it exists.
     */
    where: respostaWhereUniqueInput
    /**
     * In case the resposta found by the `where` argument doesn't exist, create a new resposta with this data.
     */
    create: XOR<respostaCreateInput, respostaUncheckedCreateInput>
    /**
     * In case the resposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<respostaUpdateInput, respostaUncheckedUpdateInput>
  }

  /**
   * resposta delete
   */
  export type respostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
    /**
     * Filter which resposta to delete.
     */
    where: respostaWhereUniqueInput
  }

  /**
   * resposta deleteMany
   */
  export type respostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which respostas to delete
     */
    where?: respostaWhereInput
    /**
     * Limit how many respostas to delete.
     */
    limit?: number
  }

  /**
   * resposta without action
   */
  export type respostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resposta
     */
    select?: respostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resposta
     */
    omit?: respostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostaInclude<ExtArgs> | null
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


  export const DiagnosticoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    empresaId: 'empresaId',
    nivelMaturidade: 'nivelMaturidade',
    notaGeral: 'notaGeral',
    percentualMaturidade: 'percentualMaturidade',
    porDimensao: 'porDimensao',
    porDiretoria: 'porDiretoria'
  };

  export type DiagnosticoScalarFieldEnum = (typeof DiagnosticoScalarFieldEnum)[keyof typeof DiagnosticoScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


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


  export const diagnosticoOrderByRelevanceFieldEnum: {
    nivelMaturidade: 'nivelMaturidade'
  };

  export type diagnosticoOrderByRelevanceFieldEnum = (typeof diagnosticoOrderByRelevanceFieldEnum)[keyof typeof diagnosticoOrderByRelevanceFieldEnum]


  export const empresaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type empresaOrderByRelevanceFieldEnum = (typeof empresaOrderByRelevanceFieldEnum)[keyof typeof empresaOrderByRelevanceFieldEnum]


  export const respostaOrderByRelevanceFieldEnum: {
    codigo: 'codigo',
    diretoria: 'diretoria',
    dimensao: 'dimensao',
    texto: 'texto'
  };

  export type respostaOrderByRelevanceFieldEnum = (typeof respostaOrderByRelevanceFieldEnum)[keyof typeof respostaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


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


  export type diagnosticoWhereInput = {
    AND?: diagnosticoWhereInput | diagnosticoWhereInput[]
    OR?: diagnosticoWhereInput[]
    NOT?: diagnosticoWhereInput | diagnosticoWhereInput[]
    id?: IntFilter<"diagnostico"> | number
    createdAt?: DateTimeFilter<"diagnostico"> | Date | string
    empresaId?: IntFilter<"diagnostico"> | number
    nivelMaturidade?: StringFilter<"diagnostico"> | string
    notaGeral?: FloatFilter<"diagnostico"> | number
    percentualMaturidade?: FloatFilter<"diagnostico"> | number
    porDimensao?: JsonFilter<"diagnostico">
    porDiretoria?: JsonFilter<"diagnostico">
    empresa?: XOR<EmpresaScalarRelationFilter, empresaWhereInput>
    resposta?: RespostaListRelationFilter
  }

  export type diagnosticoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    empresaId?: SortOrder
    nivelMaturidade?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    porDimensao?: SortOrder
    porDiretoria?: SortOrder
    empresa?: empresaOrderByWithRelationInput
    resposta?: respostaOrderByRelationAggregateInput
    _relevance?: diagnosticoOrderByRelevanceInput
  }

  export type diagnosticoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: diagnosticoWhereInput | diagnosticoWhereInput[]
    OR?: diagnosticoWhereInput[]
    NOT?: diagnosticoWhereInput | diagnosticoWhereInput[]
    createdAt?: DateTimeFilter<"diagnostico"> | Date | string
    empresaId?: IntFilter<"diagnostico"> | number
    nivelMaturidade?: StringFilter<"diagnostico"> | string
    notaGeral?: FloatFilter<"diagnostico"> | number
    percentualMaturidade?: FloatFilter<"diagnostico"> | number
    porDimensao?: JsonFilter<"diagnostico">
    porDiretoria?: JsonFilter<"diagnostico">
    empresa?: XOR<EmpresaScalarRelationFilter, empresaWhereInput>
    resposta?: RespostaListRelationFilter
  }, "id">

  export type diagnosticoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    empresaId?: SortOrder
    nivelMaturidade?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    porDimensao?: SortOrder
    porDiretoria?: SortOrder
    _count?: diagnosticoCountOrderByAggregateInput
    _avg?: diagnosticoAvgOrderByAggregateInput
    _max?: diagnosticoMaxOrderByAggregateInput
    _min?: diagnosticoMinOrderByAggregateInput
    _sum?: diagnosticoSumOrderByAggregateInput
  }

  export type diagnosticoScalarWhereWithAggregatesInput = {
    AND?: diagnosticoScalarWhereWithAggregatesInput | diagnosticoScalarWhereWithAggregatesInput[]
    OR?: diagnosticoScalarWhereWithAggregatesInput[]
    NOT?: diagnosticoScalarWhereWithAggregatesInput | diagnosticoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"diagnostico"> | number
    createdAt?: DateTimeWithAggregatesFilter<"diagnostico"> | Date | string
    empresaId?: IntWithAggregatesFilter<"diagnostico"> | number
    nivelMaturidade?: StringWithAggregatesFilter<"diagnostico"> | string
    notaGeral?: FloatWithAggregatesFilter<"diagnostico"> | number
    percentualMaturidade?: FloatWithAggregatesFilter<"diagnostico"> | number
    porDimensao?: JsonWithAggregatesFilter<"diagnostico">
    porDiretoria?: JsonWithAggregatesFilter<"diagnostico">
  }

  export type empresaWhereInput = {
    AND?: empresaWhereInput | empresaWhereInput[]
    OR?: empresaWhereInput[]
    NOT?: empresaWhereInput | empresaWhereInput[]
    id?: IntFilter<"empresa"> | number
    nome?: StringFilter<"empresa"> | string
    createdAt?: DateTimeFilter<"empresa"> | Date | string
    diagnostico?: DiagnosticoListRelationFilter
  }

  export type empresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    diagnostico?: diagnosticoOrderByRelationAggregateInput
    _relevance?: empresaOrderByRelevanceInput
  }

  export type empresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: empresaWhereInput | empresaWhereInput[]
    OR?: empresaWhereInput[]
    NOT?: empresaWhereInput | empresaWhereInput[]
    nome?: StringFilter<"empresa"> | string
    createdAt?: DateTimeFilter<"empresa"> | Date | string
    diagnostico?: DiagnosticoListRelationFilter
  }, "id">

  export type empresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    _count?: empresaCountOrderByAggregateInput
    _avg?: empresaAvgOrderByAggregateInput
    _max?: empresaMaxOrderByAggregateInput
    _min?: empresaMinOrderByAggregateInput
    _sum?: empresaSumOrderByAggregateInput
  }

  export type empresaScalarWhereWithAggregatesInput = {
    AND?: empresaScalarWhereWithAggregatesInput | empresaScalarWhereWithAggregatesInput[]
    OR?: empresaScalarWhereWithAggregatesInput[]
    NOT?: empresaScalarWhereWithAggregatesInput | empresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"empresa"> | number
    nome?: StringWithAggregatesFilter<"empresa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"empresa"> | Date | string
  }

  export type respostaWhereInput = {
    AND?: respostaWhereInput | respostaWhereInput[]
    OR?: respostaWhereInput[]
    NOT?: respostaWhereInput | respostaWhereInput[]
    id?: IntFilter<"resposta"> | number
    diagnosticoId?: IntFilter<"resposta"> | number
    perguntaId?: IntFilter<"resposta"> | number
    codigo?: StringFilter<"resposta"> | string
    diretoria?: StringFilter<"resposta"> | string
    dimensao?: StringFilter<"resposta"> | string
    texto?: StringFilter<"resposta"> | string
    valor?: IntFilter<"resposta"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, diagnosticoWhereInput>
  }

  export type respostaOrderByWithRelationInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
    diagnostico?: diagnosticoOrderByWithRelationInput
    _relevance?: respostaOrderByRelevanceInput
  }

  export type respostaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: respostaWhereInput | respostaWhereInput[]
    OR?: respostaWhereInput[]
    NOT?: respostaWhereInput | respostaWhereInput[]
    diagnosticoId?: IntFilter<"resposta"> | number
    perguntaId?: IntFilter<"resposta"> | number
    codigo?: StringFilter<"resposta"> | string
    diretoria?: StringFilter<"resposta"> | string
    dimensao?: StringFilter<"resposta"> | string
    texto?: StringFilter<"resposta"> | string
    valor?: IntFilter<"resposta"> | number
    diagnostico?: XOR<DiagnosticoScalarRelationFilter, diagnosticoWhereInput>
  }, "id">

  export type respostaOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
    _count?: respostaCountOrderByAggregateInput
    _avg?: respostaAvgOrderByAggregateInput
    _max?: respostaMaxOrderByAggregateInput
    _min?: respostaMinOrderByAggregateInput
    _sum?: respostaSumOrderByAggregateInput
  }

  export type respostaScalarWhereWithAggregatesInput = {
    AND?: respostaScalarWhereWithAggregatesInput | respostaScalarWhereWithAggregatesInput[]
    OR?: respostaScalarWhereWithAggregatesInput[]
    NOT?: respostaScalarWhereWithAggregatesInput | respostaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"resposta"> | number
    diagnosticoId?: IntWithAggregatesFilter<"resposta"> | number
    perguntaId?: IntWithAggregatesFilter<"resposta"> | number
    codigo?: StringWithAggregatesFilter<"resposta"> | string
    diretoria?: StringWithAggregatesFilter<"resposta"> | string
    dimensao?: StringWithAggregatesFilter<"resposta"> | string
    texto?: StringWithAggregatesFilter<"resposta"> | string
    valor?: IntWithAggregatesFilter<"resposta"> | number
  }

  export type diagnosticoCreateInput = {
    createdAt?: Date | string
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
    empresa: empresaCreateNestedOneWithoutDiagnosticoInput
    resposta?: respostaCreateNestedManyWithoutDiagnosticoInput
  }

  export type diagnosticoUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    empresaId: number
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
    resposta?: respostaUncheckedCreateNestedManyWithoutDiagnosticoInput
  }

  export type diagnosticoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
    empresa?: empresaUpdateOneRequiredWithoutDiagnosticoNestedInput
    resposta?: respostaUpdateManyWithoutDiagnosticoNestedInput
  }

  export type diagnosticoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresaId?: IntFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
    resposta?: respostaUncheckedUpdateManyWithoutDiagnosticoNestedInput
  }

  export type diagnosticoCreateManyInput = {
    id?: number
    createdAt?: Date | string
    empresaId: number
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
  }

  export type diagnosticoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
  }

  export type diagnosticoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresaId?: IntFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
  }

  export type empresaCreateInput = {
    nome: string
    createdAt?: Date | string
    diagnostico?: diagnosticoCreateNestedManyWithoutEmpresaInput
  }

  export type empresaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    diagnostico?: diagnosticoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type empresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: diagnosticoUpdateManyWithoutEmpresaNestedInput
  }

  export type empresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnostico?: diagnosticoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type empresaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type empresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type respostaCreateInput = {
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
    diagnostico: diagnosticoCreateNestedOneWithoutRespostaInput
  }

  export type respostaUncheckedCreateInput = {
    id?: number
    diagnosticoId: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type respostaUpdateInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
    diagnostico?: diagnosticoUpdateOneRequiredWithoutRespostaNestedInput
  }

  export type respostaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosticoId?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type respostaCreateManyInput = {
    id?: number
    diagnosticoId: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type respostaUpdateManyMutationInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type respostaUncheckedUpdateManyInput = {
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
    is?: empresaWhereInput
    isNot?: empresaWhereInput
  }

  export type RespostaListRelationFilter = {
    every?: respostaWhereInput
    some?: respostaWhereInput
    none?: respostaWhereInput
  }

  export type respostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type diagnosticoOrderByRelevanceInput = {
    fields: diagnosticoOrderByRelevanceFieldEnum | diagnosticoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type diagnosticoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    empresaId?: SortOrder
    nivelMaturidade?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
    porDimensao?: SortOrder
    porDiretoria?: SortOrder
  }

  export type diagnosticoAvgOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
  }

  export type diagnosticoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    empresaId?: SortOrder
    nivelMaturidade?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
  }

  export type diagnosticoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    empresaId?: SortOrder
    nivelMaturidade?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
  }

  export type diagnosticoSumOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    notaGeral?: SortOrder
    percentualMaturidade?: SortOrder
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

  export type DiagnosticoListRelationFilter = {
    every?: diagnosticoWhereInput
    some?: diagnosticoWhereInput
    none?: diagnosticoWhereInput
  }

  export type diagnosticoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empresaOrderByRelevanceInput = {
    fields: empresaOrderByRelevanceFieldEnum | empresaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type empresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type empresaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type empresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type empresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
  }

  export type empresaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiagnosticoScalarRelationFilter = {
    is?: diagnosticoWhereInput
    isNot?: diagnosticoWhereInput
  }

  export type respostaOrderByRelevanceInput = {
    fields: respostaOrderByRelevanceFieldEnum | respostaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type respostaCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type respostaAvgOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    valor?: SortOrder
  }

  export type respostaMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type respostaMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    codigo?: SortOrder
    diretoria?: SortOrder
    dimensao?: SortOrder
    texto?: SortOrder
    valor?: SortOrder
  }

  export type respostaSumOrderByAggregateInput = {
    id?: SortOrder
    diagnosticoId?: SortOrder
    perguntaId?: SortOrder
    valor?: SortOrder
  }

  export type empresaCreateNestedOneWithoutDiagnosticoInput = {
    create?: XOR<empresaCreateWithoutDiagnosticoInput, empresaUncheckedCreateWithoutDiagnosticoInput>
    connectOrCreate?: empresaCreateOrConnectWithoutDiagnosticoInput
    connect?: empresaWhereUniqueInput
  }

  export type respostaCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput> | respostaCreateWithoutDiagnosticoInput[] | respostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: respostaCreateOrConnectWithoutDiagnosticoInput | respostaCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: respostaCreateManyDiagnosticoInputEnvelope
    connect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
  }

  export type respostaUncheckedCreateNestedManyWithoutDiagnosticoInput = {
    create?: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput> | respostaCreateWithoutDiagnosticoInput[] | respostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: respostaCreateOrConnectWithoutDiagnosticoInput | respostaCreateOrConnectWithoutDiagnosticoInput[]
    createMany?: respostaCreateManyDiagnosticoInputEnvelope
    connect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type empresaUpdateOneRequiredWithoutDiagnosticoNestedInput = {
    create?: XOR<empresaCreateWithoutDiagnosticoInput, empresaUncheckedCreateWithoutDiagnosticoInput>
    connectOrCreate?: empresaCreateOrConnectWithoutDiagnosticoInput
    upsert?: empresaUpsertWithoutDiagnosticoInput
    connect?: empresaWhereUniqueInput
    update?: XOR<XOR<empresaUpdateToOneWithWhereWithoutDiagnosticoInput, empresaUpdateWithoutDiagnosticoInput>, empresaUncheckedUpdateWithoutDiagnosticoInput>
  }

  export type respostaUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput> | respostaCreateWithoutDiagnosticoInput[] | respostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: respostaCreateOrConnectWithoutDiagnosticoInput | respostaCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: respostaUpsertWithWhereUniqueWithoutDiagnosticoInput | respostaUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: respostaCreateManyDiagnosticoInputEnvelope
    set?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    disconnect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    delete?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    connect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    update?: respostaUpdateWithWhereUniqueWithoutDiagnosticoInput | respostaUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: respostaUpdateManyWithWhereWithoutDiagnosticoInput | respostaUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: respostaScalarWhereInput | respostaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type respostaUncheckedUpdateManyWithoutDiagnosticoNestedInput = {
    create?: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput> | respostaCreateWithoutDiagnosticoInput[] | respostaUncheckedCreateWithoutDiagnosticoInput[]
    connectOrCreate?: respostaCreateOrConnectWithoutDiagnosticoInput | respostaCreateOrConnectWithoutDiagnosticoInput[]
    upsert?: respostaUpsertWithWhereUniqueWithoutDiagnosticoInput | respostaUpsertWithWhereUniqueWithoutDiagnosticoInput[]
    createMany?: respostaCreateManyDiagnosticoInputEnvelope
    set?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    disconnect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    delete?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    connect?: respostaWhereUniqueInput | respostaWhereUniqueInput[]
    update?: respostaUpdateWithWhereUniqueWithoutDiagnosticoInput | respostaUpdateWithWhereUniqueWithoutDiagnosticoInput[]
    updateMany?: respostaUpdateManyWithWhereWithoutDiagnosticoInput | respostaUpdateManyWithWhereWithoutDiagnosticoInput[]
    deleteMany?: respostaScalarWhereInput | respostaScalarWhereInput[]
  }

  export type diagnosticoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput> | diagnosticoCreateWithoutEmpresaInput[] | diagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: diagnosticoCreateOrConnectWithoutEmpresaInput | diagnosticoCreateOrConnectWithoutEmpresaInput[]
    createMany?: diagnosticoCreateManyEmpresaInputEnvelope
    connect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
  }

  export type diagnosticoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput> | diagnosticoCreateWithoutEmpresaInput[] | diagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: diagnosticoCreateOrConnectWithoutEmpresaInput | diagnosticoCreateOrConnectWithoutEmpresaInput[]
    createMany?: diagnosticoCreateManyEmpresaInputEnvelope
    connect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
  }

  export type diagnosticoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput> | diagnosticoCreateWithoutEmpresaInput[] | diagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: diagnosticoCreateOrConnectWithoutEmpresaInput | diagnosticoCreateOrConnectWithoutEmpresaInput[]
    upsert?: diagnosticoUpsertWithWhereUniqueWithoutEmpresaInput | diagnosticoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: diagnosticoCreateManyEmpresaInputEnvelope
    set?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    disconnect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    delete?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    connect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    update?: diagnosticoUpdateWithWhereUniqueWithoutEmpresaInput | diagnosticoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: diagnosticoUpdateManyWithWhereWithoutEmpresaInput | diagnosticoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: diagnosticoScalarWhereInput | diagnosticoScalarWhereInput[]
  }

  export type diagnosticoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput> | diagnosticoCreateWithoutEmpresaInput[] | diagnosticoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: diagnosticoCreateOrConnectWithoutEmpresaInput | diagnosticoCreateOrConnectWithoutEmpresaInput[]
    upsert?: diagnosticoUpsertWithWhereUniqueWithoutEmpresaInput | diagnosticoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: diagnosticoCreateManyEmpresaInputEnvelope
    set?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    disconnect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    delete?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    connect?: diagnosticoWhereUniqueInput | diagnosticoWhereUniqueInput[]
    update?: diagnosticoUpdateWithWhereUniqueWithoutEmpresaInput | diagnosticoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: diagnosticoUpdateManyWithWhereWithoutEmpresaInput | diagnosticoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: diagnosticoScalarWhereInput | diagnosticoScalarWhereInput[]
  }

  export type diagnosticoCreateNestedOneWithoutRespostaInput = {
    create?: XOR<diagnosticoCreateWithoutRespostaInput, diagnosticoUncheckedCreateWithoutRespostaInput>
    connectOrCreate?: diagnosticoCreateOrConnectWithoutRespostaInput
    connect?: diagnosticoWhereUniqueInput
  }

  export type diagnosticoUpdateOneRequiredWithoutRespostaNestedInput = {
    create?: XOR<diagnosticoCreateWithoutRespostaInput, diagnosticoUncheckedCreateWithoutRespostaInput>
    connectOrCreate?: diagnosticoCreateOrConnectWithoutRespostaInput
    upsert?: diagnosticoUpsertWithoutRespostaInput
    connect?: diagnosticoWhereUniqueInput
    update?: XOR<XOR<diagnosticoUpdateToOneWithWhereWithoutRespostaInput, diagnosticoUpdateWithoutRespostaInput>, diagnosticoUncheckedUpdateWithoutRespostaInput>
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

  export type empresaCreateWithoutDiagnosticoInput = {
    nome: string
    createdAt?: Date | string
  }

  export type empresaUncheckedCreateWithoutDiagnosticoInput = {
    id?: number
    nome: string
    createdAt?: Date | string
  }

  export type empresaCreateOrConnectWithoutDiagnosticoInput = {
    where: empresaWhereUniqueInput
    create: XOR<empresaCreateWithoutDiagnosticoInput, empresaUncheckedCreateWithoutDiagnosticoInput>
  }

  export type respostaCreateWithoutDiagnosticoInput = {
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type respostaUncheckedCreateWithoutDiagnosticoInput = {
    id?: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type respostaCreateOrConnectWithoutDiagnosticoInput = {
    where: respostaWhereUniqueInput
    create: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput>
  }

  export type respostaCreateManyDiagnosticoInputEnvelope = {
    data: respostaCreateManyDiagnosticoInput | respostaCreateManyDiagnosticoInput[]
    skipDuplicates?: boolean
  }

  export type empresaUpsertWithoutDiagnosticoInput = {
    update: XOR<empresaUpdateWithoutDiagnosticoInput, empresaUncheckedUpdateWithoutDiagnosticoInput>
    create: XOR<empresaCreateWithoutDiagnosticoInput, empresaUncheckedCreateWithoutDiagnosticoInput>
    where?: empresaWhereInput
  }

  export type empresaUpdateToOneWithWhereWithoutDiagnosticoInput = {
    where?: empresaWhereInput
    data: XOR<empresaUpdateWithoutDiagnosticoInput, empresaUncheckedUpdateWithoutDiagnosticoInput>
  }

  export type empresaUpdateWithoutDiagnosticoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empresaUncheckedUpdateWithoutDiagnosticoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type respostaUpsertWithWhereUniqueWithoutDiagnosticoInput = {
    where: respostaWhereUniqueInput
    update: XOR<respostaUpdateWithoutDiagnosticoInput, respostaUncheckedUpdateWithoutDiagnosticoInput>
    create: XOR<respostaCreateWithoutDiagnosticoInput, respostaUncheckedCreateWithoutDiagnosticoInput>
  }

  export type respostaUpdateWithWhereUniqueWithoutDiagnosticoInput = {
    where: respostaWhereUniqueInput
    data: XOR<respostaUpdateWithoutDiagnosticoInput, respostaUncheckedUpdateWithoutDiagnosticoInput>
  }

  export type respostaUpdateManyWithWhereWithoutDiagnosticoInput = {
    where: respostaScalarWhereInput
    data: XOR<respostaUpdateManyMutationInput, respostaUncheckedUpdateManyWithoutDiagnosticoInput>
  }

  export type respostaScalarWhereInput = {
    AND?: respostaScalarWhereInput | respostaScalarWhereInput[]
    OR?: respostaScalarWhereInput[]
    NOT?: respostaScalarWhereInput | respostaScalarWhereInput[]
    id?: IntFilter<"resposta"> | number
    diagnosticoId?: IntFilter<"resposta"> | number
    perguntaId?: IntFilter<"resposta"> | number
    codigo?: StringFilter<"resposta"> | string
    diretoria?: StringFilter<"resposta"> | string
    dimensao?: StringFilter<"resposta"> | string
    texto?: StringFilter<"resposta"> | string
    valor?: IntFilter<"resposta"> | number
  }

  export type diagnosticoCreateWithoutEmpresaInput = {
    createdAt?: Date | string
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
    resposta?: respostaCreateNestedManyWithoutDiagnosticoInput
  }

  export type diagnosticoUncheckedCreateWithoutEmpresaInput = {
    id?: number
    createdAt?: Date | string
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
    resposta?: respostaUncheckedCreateNestedManyWithoutDiagnosticoInput
  }

  export type diagnosticoCreateOrConnectWithoutEmpresaInput = {
    where: diagnosticoWhereUniqueInput
    create: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput>
  }

  export type diagnosticoCreateManyEmpresaInputEnvelope = {
    data: diagnosticoCreateManyEmpresaInput | diagnosticoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type diagnosticoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: diagnosticoWhereUniqueInput
    update: XOR<diagnosticoUpdateWithoutEmpresaInput, diagnosticoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<diagnosticoCreateWithoutEmpresaInput, diagnosticoUncheckedCreateWithoutEmpresaInput>
  }

  export type diagnosticoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: diagnosticoWhereUniqueInput
    data: XOR<diagnosticoUpdateWithoutEmpresaInput, diagnosticoUncheckedUpdateWithoutEmpresaInput>
  }

  export type diagnosticoUpdateManyWithWhereWithoutEmpresaInput = {
    where: diagnosticoScalarWhereInput
    data: XOR<diagnosticoUpdateManyMutationInput, diagnosticoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type diagnosticoScalarWhereInput = {
    AND?: diagnosticoScalarWhereInput | diagnosticoScalarWhereInput[]
    OR?: diagnosticoScalarWhereInput[]
    NOT?: diagnosticoScalarWhereInput | diagnosticoScalarWhereInput[]
    id?: IntFilter<"diagnostico"> | number
    createdAt?: DateTimeFilter<"diagnostico"> | Date | string
    empresaId?: IntFilter<"diagnostico"> | number
    nivelMaturidade?: StringFilter<"diagnostico"> | string
    notaGeral?: FloatFilter<"diagnostico"> | number
    percentualMaturidade?: FloatFilter<"diagnostico"> | number
    porDimensao?: JsonFilter<"diagnostico">
    porDiretoria?: JsonFilter<"diagnostico">
  }

  export type diagnosticoCreateWithoutRespostaInput = {
    createdAt?: Date | string
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
    empresa: empresaCreateNestedOneWithoutDiagnosticoInput
  }

  export type diagnosticoUncheckedCreateWithoutRespostaInput = {
    id?: number
    createdAt?: Date | string
    empresaId: number
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
  }

  export type diagnosticoCreateOrConnectWithoutRespostaInput = {
    where: diagnosticoWhereUniqueInput
    create: XOR<diagnosticoCreateWithoutRespostaInput, diagnosticoUncheckedCreateWithoutRespostaInput>
  }

  export type diagnosticoUpsertWithoutRespostaInput = {
    update: XOR<diagnosticoUpdateWithoutRespostaInput, diagnosticoUncheckedUpdateWithoutRespostaInput>
    create: XOR<diagnosticoCreateWithoutRespostaInput, diagnosticoUncheckedCreateWithoutRespostaInput>
    where?: diagnosticoWhereInput
  }

  export type diagnosticoUpdateToOneWithWhereWithoutRespostaInput = {
    where?: diagnosticoWhereInput
    data: XOR<diagnosticoUpdateWithoutRespostaInput, diagnosticoUncheckedUpdateWithoutRespostaInput>
  }

  export type diagnosticoUpdateWithoutRespostaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
    empresa?: empresaUpdateOneRequiredWithoutDiagnosticoNestedInput
  }

  export type diagnosticoUncheckedUpdateWithoutRespostaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresaId?: IntFieldUpdateOperationsInput | number
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
  }

  export type respostaCreateManyDiagnosticoInput = {
    id?: number
    perguntaId: number
    codigo: string
    diretoria: string
    dimensao: string
    texto: string
    valor: number
  }

  export type respostaUpdateWithoutDiagnosticoInput = {
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type respostaUncheckedUpdateWithoutDiagnosticoInput = {
    id?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type respostaUncheckedUpdateManyWithoutDiagnosticoInput = {
    id?: IntFieldUpdateOperationsInput | number
    perguntaId?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    diretoria?: StringFieldUpdateOperationsInput | string
    dimensao?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type diagnosticoCreateManyEmpresaInput = {
    id?: number
    createdAt?: Date | string
    nivelMaturidade: string
    notaGeral: number
    percentualMaturidade: number
    porDimensao: JsonNullValueInput | InputJsonValue
    porDiretoria: JsonNullValueInput | InputJsonValue
  }

  export type diagnosticoUpdateWithoutEmpresaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
    resposta?: respostaUpdateManyWithoutDiagnosticoNestedInput
  }

  export type diagnosticoUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
    resposta?: respostaUncheckedUpdateManyWithoutDiagnosticoNestedInput
  }

  export type diagnosticoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivelMaturidade?: StringFieldUpdateOperationsInput | string
    notaGeral?: FloatFieldUpdateOperationsInput | number
    percentualMaturidade?: FloatFieldUpdateOperationsInput | number
    porDimensao?: JsonNullValueInput | InputJsonValue
    porDiretoria?: JsonNullValueInput | InputJsonValue
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