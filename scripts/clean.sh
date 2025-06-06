#!/bin/bash

echo "Starting clean-up script..."

TARGET_DIRS=("." "apps" "packages")
REMOVABLE_ITEMS_IN_TARGET_DIRS=("node_modules" "dist" "package-lock.json" "yarn.lock" "pnpm-lock.yaml" ".turbo")

for target_dir in "${TARGET_DIRS[@]}"; do
    if [ -d "$target_dir" ]; then
        echo "👀 Searching within '$target_dir'..."

        # Remove node_modules directories
        matches=$(find "$target_dir" -name "node_modules" -type d -prune)
        if [ -n "$matches" ]; then
            echo "$matches" | xargs rm -rf
            echo "✅ Removed 'node_modules' directories in '$target_dir'."
        else
            echo "⚠️ No 'node_modules' directories found in '$target_dir'."
        fi

        # Remove other items
        for item in "${REMOVABLE_ITEMS_IN_TARGET_DIRS[@]}"; do
            if [[ "$item" == "node_modules" ]]; then
                continue
            fi

            echo "🔍 Looking for '$item' in '$target_dir'..."
            if [[ "$item" == .* || "$item" == "dist" ]]; then
                # Handle directories
                matches=$(find "$target_dir" -name "$item" -type d -prune)
                if [ -n "$matches" ]; then
                    echo "$matches" | xargs rm -rf
                    echo "✅ Removed '$item' directories in '$target_dir'."
                else
                    echo "⚠️ No '$item' directories found in '$target_dir'."
                fi
            else
                # Handle files
                matches=$(find "$target_dir" -name "$item" -type f)
                if [ -n "$matches" ]; then
                    echo "$matches" | xargs rm -f
                    echo "✅ Removed '$item' files in '$target_dir'."
                else
                    echo "⚠️ No '$item' files found in '$target_dir'."
                fi
            fi
        done
    else
        echo "❌ Directory '$target_dir' not found. Skipping."
    fi
done

echo "Clean-up complete! ✨"
echo "Need to run 'pnpm install'"
