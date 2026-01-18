import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Server-side environment variables schema.
   * These are only available on the server.
   */
  server: {
    ANTHROPIC_API_KEY: z
      .string()
      .min(1, "ANTHROPIC_API_KEY is required")
      .startsWith("sk-ant-", "ANTHROPIC_API_KEY must start with 'sk-ant-'"),
  },

  /**
   * Client-side environment variables schema.
   * Expose them to the client by prefixing with `NEXT_PUBLIC_`.
   */
  client: {},

  /**
   * Runtime environment variables.
   * For Next.js >= 13.4.4, you only need to destructure server variables here.
   */
  runtimeEnv: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },

  /**
   * Skip validation in certain environments.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined.
   */
  emptyStringAsUndefined: true,
});
