/**
 * File generated by js-routes RubyVariables.GEM_VERSION
 * Based on Rails RubyVariables.RAILS_VERSION routes of RubyVariables.APP_CLASS
 */
declare type RouteParameter = unknown;
declare type RouteParameters = Record<string, RouteParameter>;
declare type Serializer = (value: unknown) => string;
declare type RouteHelper = {
  (...args: RouteParameter[]): string;
  requiredParams(): string[];
  toString(): string;
};
declare type RouteHelpers = Record<string, RouteHelper>;
declare type Configuration = {
  prefix: string;
  default_url_options: RouteParameters;
  special_options_key: string;
  serializer: Serializer;
};
declare type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
interface RouterExposedMethods {
  config(): Configuration;
  configure(arg: Partial<Configuration>): Configuration;
  serialize: Serializer;
}
declare type KeywordUrlOptions = Optional<{
  host: string;
  protocol: string;
  subdomain: string;
  port: string;
  anchor: string;
  trailing_slash: boolean;
}>;
declare type RouteOptions = KeywordUrlOptions & RouteParameters;
declare type PartsTable = Record<
  string,
  {
    r?: boolean;
    d?: unknown;
  }
>;
declare type ModuleType = "CJS" | "AMD" | "UMD" | "ESM";
declare const RubyVariables: {
  PREFIX: string;
  DEPRECATED_GLOBBING_BEHAVIOR: boolean;
  SPECIAL_OPTIONS_KEY: string;
  DEFAULT_URL_OPTIONS: RouteParameters;
  SERIALIZER: Serializer;
  NAMESPACE: string;
  ROUTES_OBJECT: RouteHelpers;
  MODULE_TYPE: ModuleType | null;
  WRAPPER: <T>(callback: T) => T;
};
declare const define:
  | undefined
  | (((arg: unknown[], callback: () => unknown) => void) & {
      amd?: unknown;
    });
declare const module:
  | {
      exports: any;
    }
  | undefined;
