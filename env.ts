import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema.
   * These variables are only available on the server.
   */
  server: {
    ANTHROPIC_API_KEY: z.string().min(1, "ANTHROPIC_API_KEY is required"),
  },

  /**
   * Client-side environment variables schema.
   * To expose them to the client, prefix with `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_EXAMPLE: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in Next.js edge runtimes
   * or client-side, so we need to manually specify the runtime environment variables.
   * For Next.js >= 13.4.4, this is automatically handled.
   */
  runtimeEnv: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
