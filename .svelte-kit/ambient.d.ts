// this file is generated — do not edit it

/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 *
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 *
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 *
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 *
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 *
 * You can override `.env` values from the command line like so:
 *
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module "$env/static/private" {
  export const NVM_INC: string
  export const CAML_LD_LIBRARY_PATH: string
  export const npm_package_devDependencies__tailwindcss_typography: string
  export const npm_package_devDependencies_lint_staged: string
  export const npm_package_dependencies_bits_ui: string
  export const TERM_PROGRAM: string
  export const NODE: string
  export const _P9K_TTY: string
  export const NVM_CD_FLAGS: string
  export const PYENV_ROOT: string
  export const npm_package_devDependencies_typescript: string
  export const INIT_CWD: string
  export const TERM: string
  export const SHELL: string
  export const CPPFLAGS: string
  export const HOMEBREW_REPOSITORY: string
  export const TMPDIR: string
  export const npm_package_dependencies__sveltejs_kit: string
  export const npm_package_dependencies_svelte_check: string
  export const TERM_PROGRAM_VERSION: string
  export const npm_package_dependencies_tailwind_variants: string
  export const PHPBREW_ROOT: string
  export const npm_package_scripts_dev: string
  export const ZDOTDIR: string
  export const ORIGINAL_XDG_CURRENT_DESKTOP: string
  export const MallocNanoZone: string
  export const OPAM_SWITCH_PREFIX: string
  export const npm_package_devDependencies__sveltejs_kit: string
  export const npm_config_registry: string
  export const PNPM_HOME: string
  export const ZSH: string
  export const OCAML_TOPLEVEL_PATH: string
  export const NVM_DIR: string
  export const USER: string
  export const npm_package_description: string
  export const npm_package_license: string
  export const npm_package_scripts_check_watch: string
  export const npm_package_dependencies__sveltejs_adapter_auto: string
  export const COMMAND_MODE: string
  export const PNPM_SCRIPT_SRC_DIR: string
  export const SSH_AUTH_SOCK: string
  export const __CF_USER_TEXT_ENCODING: string
  export const npm_execpath: string
  export const PAGER: string
  export const LSCOLORS: string
  export const npm_config_frozen_lockfile: string
  export const npm_package_dependencies_tailwind_merge: string
  export const PATH: string
  export const PHPBREW_HOME: string
  export const USER_ZDOTDIR: string
  export const __CFBundleIdentifier: string
  export const npm_package_author: string
  export const PWD: string
  export const npm_package_devDependencies_tailwindcss: string
  export const npm_command: string
  export const npm_package_scripts_preview: string
  export const npm_package_dependencies__effect_platform_node: string
  export const P9K_SSH: string
  export const TRANSMISSION_WEB_HOME: string
  export const npm_lifecycle_event: string
  export const P9K_TTY: string
  export const LANG: string
  export const npm_package_name: string
  export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string
  export const NODE_PATH: string
  export const OPAM_LAST_ENV: string
  export const npm_package_scripts_build: string
  export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
  export const XPC_FLAGS: string
  export const npm_package_devDependencies_vitest: string
  export const DOCKER_DEFAULT_PLATFORM: string
  export const RBENV_SHELL: string
  export const LOCALSTACK_API_KEY: string
  export const npm_package_main: string
  export const npm_config_node_gyp: string
  export const XPC_SERVICE_NAME: string
  export const npm_package_version: string
  export const npm_package_devDependencies__sveltejs_adapter_auto: string
  export const npm_package_dependencies__effect_platform: string
  export const VSCODE_INJECTION: string
  export const npm_package_devDependencies_autoprefixer: string
  export const PYENV_SHELL: string
  export const SHLVL: string
  export const HOME: string
  export const npm_package_type: string
  export const VSCODE_GIT_ASKPASS_MAIN: string
  export const HOMEBREW_PREFIX: string
  export const npm_package_devDependencies_husky: string
  export const LESS: string
  export const LOGNAME: string
  export const npm_package_dependencies_vite: string
  export const npm_package_dependencies_svelte: string
  export const npm_lifecycle_script: string
  export const VSCODE_GIT_IPC_HANDLE: string
  export const BUN_INSTALL: string
  export const NVM_BIN: string
  export const SIMULATION_ACCOUNT_PROFILE: string
  export const npm_package_dependencies__supabase_supabase_js: string
  export const npm_config_user_agent: string
  export const VSCODE_GIT_ASKPASS_NODE: string
  export const GIT_ASKPASS: string
  export const ARCHFLAGS: string
  export const INFOPATH: string
  export const HOMEBREW_CELLAR: string
  export const npm_package_devDependencies__types_node: string
  export const npm_package_dependencies_clsx: string
  export const OPAMNOENVNOTICE: string
  export const npm_package_scripts_prepare: string
  export const npm_package_devDependencies__biomejs_biome: string
  export const npm_package_scripts_check: string
  export const npm_package_dependencies_effect: string
  export const COLORTERM: string
  export const npm_node_execpath: string
  export const NODE_ENV: string
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Values are replaced statically at build time.
 *
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module "$env/static/public" {
  export const PUBLIC_SUPABASE_URL: string
  export const PUBLIC_SUPABASE_KEY: string
  export const PUBLIC_LOG_LEVEL: string
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 *
 * This module cannot be imported into client-side code.
 *
 * Dynamic environment variables cannot be used during prerendering.
 *
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 *
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module "$env/dynamic/private" {
  export const env: {
    NVM_INC: string
    CAML_LD_LIBRARY_PATH: string
    npm_package_devDependencies__tailwindcss_typography: string
    npm_package_devDependencies_lint_staged: string
    npm_package_dependencies_bits_ui: string
    TERM_PROGRAM: string
    NODE: string
    _P9K_TTY: string
    NVM_CD_FLAGS: string
    PYENV_ROOT: string
    npm_package_devDependencies_typescript: string
    INIT_CWD: string
    TERM: string
    SHELL: string
    CPPFLAGS: string
    HOMEBREW_REPOSITORY: string
    TMPDIR: string
    npm_package_dependencies__sveltejs_kit: string
    npm_package_dependencies_svelte_check: string
    TERM_PROGRAM_VERSION: string
    npm_package_dependencies_tailwind_variants: string
    PHPBREW_ROOT: string
    npm_package_scripts_dev: string
    ZDOTDIR: string
    ORIGINAL_XDG_CURRENT_DESKTOP: string
    MallocNanoZone: string
    OPAM_SWITCH_PREFIX: string
    npm_package_devDependencies__sveltejs_kit: string
    npm_config_registry: string
    PNPM_HOME: string
    ZSH: string
    OCAML_TOPLEVEL_PATH: string
    NVM_DIR: string
    USER: string
    npm_package_description: string
    npm_package_license: string
    npm_package_scripts_check_watch: string
    npm_package_dependencies__sveltejs_adapter_auto: string
    COMMAND_MODE: string
    PNPM_SCRIPT_SRC_DIR: string
    SSH_AUTH_SOCK: string
    __CF_USER_TEXT_ENCODING: string
    npm_execpath: string
    PAGER: string
    LSCOLORS: string
    npm_config_frozen_lockfile: string
    npm_package_dependencies_tailwind_merge: string
    PATH: string
    PHPBREW_HOME: string
    USER_ZDOTDIR: string
    __CFBundleIdentifier: string
    npm_package_author: string
    PWD: string
    npm_package_devDependencies_tailwindcss: string
    npm_command: string
    npm_package_scripts_preview: string
    npm_package_dependencies__effect_platform_node: string
    P9K_SSH: string
    TRANSMISSION_WEB_HOME: string
    npm_lifecycle_event: string
    P9K_TTY: string
    LANG: string
    npm_package_name: string
    npm_package_devDependencies__sveltejs_vite_plugin_svelte: string
    NODE_PATH: string
    OPAM_LAST_ENV: string
    npm_package_scripts_build: string
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
    XPC_FLAGS: string
    npm_package_devDependencies_vitest: string
    DOCKER_DEFAULT_PLATFORM: string
    RBENV_SHELL: string
    LOCALSTACK_API_KEY: string
    npm_package_main: string
    npm_config_node_gyp: string
    XPC_SERVICE_NAME: string
    npm_package_version: string
    npm_package_devDependencies__sveltejs_adapter_auto: string
    npm_package_dependencies__effect_platform: string
    VSCODE_INJECTION: string
    npm_package_devDependencies_autoprefixer: string
    PYENV_SHELL: string
    SHLVL: string
    HOME: string
    npm_package_type: string
    VSCODE_GIT_ASKPASS_MAIN: string
    HOMEBREW_PREFIX: string
    npm_package_devDependencies_husky: string
    LESS: string
    LOGNAME: string
    npm_package_dependencies_vite: string
    npm_package_dependencies_svelte: string
    npm_lifecycle_script: string
    VSCODE_GIT_IPC_HANDLE: string
    BUN_INSTALL: string
    NVM_BIN: string
    SIMULATION_ACCOUNT_PROFILE: string
    npm_package_dependencies__supabase_supabase_js: string
    npm_config_user_agent: string
    VSCODE_GIT_ASKPASS_NODE: string
    GIT_ASKPASS: string
    ARCHFLAGS: string
    INFOPATH: string
    HOMEBREW_CELLAR: string
    npm_package_devDependencies__types_node: string
    npm_package_dependencies_clsx: string
    OPAMNOENVNOTICE: string
    npm_package_scripts_prepare: string
    npm_package_devDependencies__biomejs_biome: string
    npm_package_scripts_check: string
    npm_package_dependencies_effect: string
    COLORTERM: string
    npm_node_execpath: string
    NODE_ENV: string
    [key: `PUBLIC_${string}`]: undefined
    [key: `${string}`]: string | undefined
  }
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 *
 * Dynamic environment variables cannot be used during prerendering.
 *
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module "$env/dynamic/public" {
  export const env: {
    PUBLIC_SUPABASE_URL: string
    PUBLIC_SUPABASE_KEY: string
    PUBLIC_LOG_LEVEL: string
    [key: `PUBLIC_${string}`]: string | undefined
  }
}
