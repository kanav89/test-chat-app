#!/usr/bin/env node

/**
 * Pre-deployment environment variable check script.
 * Validates that all required environment variables are set before build.
 */

const requiredEnvVars = [
  {
    name: "ANTHROPIC_API_KEY",
    pattern: /^sk-ant-/,
    description: "Anthropic API key for Claude AI",
  },
];

function checkEnv() {
  console.log("🔍 Checking environment variables...\n");

  const errors = [];
  const warnings = [];

  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.name];

    if (!value) {
      errors.push(`❌ ${envVar.name} is not set. ${envVar.description}`);
      continue;
    }

    if (envVar.pattern && !envVar.pattern.test(value)) {
      errors.push(
        `❌ ${envVar.name} has invalid format. Expected pattern: ${envVar.pattern}`
      );
      continue;
    }

    console.log(`✅ ${envVar.name} is set and valid`);
  }

  console.log("");

  if (errors.length > 0) {
    console.error("Environment validation failed:\n");
    errors.forEach((error) => console.error(error));
    console.error(
      "\nPlease set the required environment variables before deploying."
    );
    process.exit(1);
  }

  console.log("✨ All environment variables are valid!\n");
}

checkEnv();
