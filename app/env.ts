import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema.
   * These are only available on the server and will throw if accessed on the client.
   */
  server: {
    ANTHROPIC_API_KEY: z.string().min(1, "ANTHROPIC_API_KEY is required"),
  },

  /**
   * Client-side environment variables schema.
   * Prefix with NEXT_PUBLIC_ to expose to the browser.
   */
  client: {
    // NEXT_PUBLIC_EXAMPLE: z.string().optional(),
  },

  /**
   * Runtime environment variables.
   * This is used to destructure environment variables for validation.
   */
  runtimeEnv: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },

  /**
   * Skip validation in certain environments.
   * Set SKIP_ENV_VALIDATION=1 to skip validation during builds if needed.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Treat empty strings as undefined.
   * This ensures empty env vars are caught by the validation.
   */
  emptyStringAsUndefined: true,
});
