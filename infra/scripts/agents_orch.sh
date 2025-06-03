#!/bin/bash

# ci.sh
# Description: A shell script to configure langgraph/CD settings.
# Author: [Ahmed Nabil]
# Date: [Date]
# Version: 1.0

_deployLanggraphStack_() {
    local stack_file="$1"
    local stack_name="$2"
    dryrun "Deploying langgraph Stack"
    if [ ! -f "$stack_file" ]; then
        error "langgraph stack file not found: $stack_file"
        exit 1
    fi

    info "Deploying langgraph stack '$stack_name' using file: $stack_file"
    docker stack deploy -c "$stack_file" "$stack_name" --prune --with-registry-auth -d

    if [ $? -eq 0 ]; then
        success "langgraph stack '$stack_name' deployed successfully!"
        success "Loki url: https://agents-orch.$DOMAIN"
    else
        error "Failed to deploy Registry stack '$stack_name'. Please check the Docker logs."
        exit 1
    fi
}
_centerOutputBlue_ "langgraph Configuration" "-"
# _checkmonorepoEnvironmentVariables_
_deployLanggraphStack_ "./infra/agents_orch/agents_orch.yml" "agents_orch"
