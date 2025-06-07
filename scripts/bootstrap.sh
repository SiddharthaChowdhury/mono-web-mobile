#!/bin/bash

# Prompt user for API domain
read -p "Enter API domain (e.g. https://www.hunqz.com): " api_domain

# Check input is not empty
if [ -z "$api_domain" ]; then
  echo "Error: API domain cannot be empty."
  exit 1
fi

# Define paths
NATIVE_ENV="./apps/native/.env"
WEB_ENV="./apps/web/.env"

# Create .env for native
echo "EXPO_PUBLIC_API_DOMAIN=$api_domain" > "$NATIVE_ENV"
echo "✅ Created $NATIVE_ENV"

# Create .env for web
echo "VITE_API_DOMAIN=" > "$WEB_ENV"
echo "VITE_API_DEV_DOMAIN=$api_domain" >> "$WEB_ENV"
echo "✅ Created $WEB_ENV"

echo "✅ Environment setup complete."
