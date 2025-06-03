#!/bin/bash

# ci.sh
# Description: A shell script to configure dashboards/CD settings.
# Author: [Ahmed Nabil]
# Date: [Date]
# Version: 1.0

_deploydashboardsStack_() {
  local stack_file="$1"
  local stack_name="$2"
  dryrun "Deploying dashboards Stack"
  if [ ! -f "$stack_file" ]; then
    error "dashboards stack file not found: $stack_file"
    exit 1
  fi

  info "Deploying dashboards stack '$stack_name' using file: $stack_file"
  docker stack deploy -c "$stack_file" "$stack_name" --prune --with-registry-auth -d

  if [ $? -eq 0 ]; then
    success "dashboards stack '$stack_name' deployed successfully!"
  else
    error "Failed to deploy Registry stack '$stack_name'. Please check the Docker logs."
    exit 1
  fi
}
_centerOutputBlue_ "dashboards/CD Configuration" "-"
# _checkdashboardsEnvironmentVariables_
_deploydashboardsStack_ "./infra/dashboards/dashboards.yml" "dashboards"
