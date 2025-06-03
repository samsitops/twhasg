#!/bin/bash

# supabase.sh
# Description: A shell script to configure Supabase settings.
# Author: [Ahmed Nabil]
# Date: [Date]
# Version: 1.0

# Function: _createDockerOverlayNetwork
# Description: Creates a Docker overlay network for Traefik.
_createDockerOverlayNetwork_() {
  local network_name="supabase-net"

  # Check if the Docker overlay network exists
  if docker network ls | grep -q "${network_name}"; then
    info "Docker overlay network '${network_name}' already exists."
  else
    info "Creating Docker overlay network '${network_name}'..."
    if docker network create --driver=overlay "${network_name}"; then
      success "Docker overlay network '${network_name}' created successfully."
    else
      # error "Failed to create Docker overlay network. Verify Docker and Swarm configurations."
      # exit 1
      warning "Docker overlay network '${network_name}' already exists."
    fi
  fi
}

# Function: _checkSupabaseEnvironmentVariables_
# Description: Checks if the required environment variables are set.
_checkSupabaseEnvironmentVariables_() {
  dryrun "Checking Supabase Environment Variables"
  # Check if the required environment variables are set
  if [[ -z "$DOMAIN" ]]; then
    error "Required environment variables are not set!"
    exit 1
  fi
  info "Domain: $DOMAIN"
}

# Function: _deploySupabaseStack_
# Description: Deploys the Supabase stack using the provided configuration file.
_deploySupabaseStack_() {
  local stack_file="$1"
  local stack_name="$2"
  dryrun "Deploying Supabase Stack"
  if [ ! -f "$stack_file" ]; then
    error "Supabase stack file not found: $stack_file"
    exit 1
  fi

  info "Deploying Supabase stack '$stack_name' using file: $stack_file"
  docker stack deploy -c "$stack_file" "$stack_name" --prune --with-registry-auth -d

  if [ $? -eq 0 ]; then
    success "Supabase stack '$stack_name' deployed successfully!"
    success "Supabase Dashboard: https://supabase.$DOMAIN"
  else
    error "Failed to deploy Supabase stack '$stack_name'. Please check the Docker logs."
    exit 1
  fi
}

_createDockerOverlayNetwork_
_centerOutputBlue_ "Supabase Configuration" "-"
_exportEnvironmentVariables_ "./infra/supabase/.env"
_checkSupabaseEnvironmentVariables_
_deploySupabaseStack_ "./infra/supabase/supabase.yml" "supabase"
