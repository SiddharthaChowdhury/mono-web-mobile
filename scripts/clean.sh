#!/bin/bash

echo "Starting clean-up script..."

TARGET_DIRS=("." "apps" "packages")
REMOVABLE_ITEMS_IN_TARGET_DIRS=("node_modules" "dist" "package-lock.json" "yarn.lock" "pnpm-lock.yaml" ".turbo")

# Loop through each target directory (apps/ and packages/)
for target_dir in "${TARGET_DIRS[@]}"; do
    if [ -d "$target_dir" ]; then
        echo "👀 Searching within '$target_dir'..."
        # Find and remove node_modules directories
        find "$target_dir" -name "node_modules" -type d -prune -exec rm -rf {} +
        if [ $? -eq 0 ]; then
            echo "✅ Removed 'node_modules' directories in '$target_dir'."
        else
            echo "⚠️ Warn removing 'node_modules' in '$target_dir', or none found."
        fi

        # Find and remove lock files
        for item in "${REMOVABLE_ITEMS_IN_TARGET_DIRS[@]}"; do
            if [[ "$item" != "node_modules" ]]; then # Skip node_modules as it's handled above
                find "$target_dir" -name "$item" -type f -delete
                if [ $? -eq 0 ]; then
                    echo "✅ Removed '$item' files in '$target_dir'."
                else
                    echo "⚠️ Error removing '$item' in '$target_dir', or none found."
                fi
            fi
        done
    else
        echo "❌ Directory '$target_dir' not found. Skipping."
    fi
done

echo "Clean-up complete! ✨"
echo "Need to run 'pnpm install'"
