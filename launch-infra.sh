#!/bin/sh
export $(grep -v '^#' infra/monorepo/.env | xargs)

git pull origin main

for project in $(npx nx show projects --type app --affected --base=HEAD~1 --plain); do
  echo "Building and pushing container for $project"
  sh -c "npx nx container $project"
  sh -c "docker push manager.node:9000/monorepo:$project"
done

bash "./infra/scripts/main.sh"
