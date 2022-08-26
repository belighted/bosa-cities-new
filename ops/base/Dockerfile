ARG RUBY_VERSION=2.6.6
FROM docker.pkg.github.com/belighted/docker-ruby-jemalloc/ruby-jemalloc:$RUBY_VERSION
ARG PG_MAJOR=12
ARG NODE_MAJOR=12
ARG BUNDLER_VERSION=2.1.4

# Configure locale, bundler
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
ENV BUNDLE_IGNORE_CONFIG=1
ENV BUNDLE_WITHOUT=test:production:development

# Common dependencies
RUN apt-get update -qq \
  && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    build-essential \
    gnupg2 \
    curl \
    less \
    git \
  && apt-get clean \
  && rm -rf /var/cache/apt/archives/* \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
  && truncate -s 0 /var/log/*log \
  && curl -sSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
  && echo 'deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main' $PG_MAJOR > /etc/apt/sources.list.d/pgdg.list && \
  curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash -

# Application dependencies
COPY ops/base/Aptfile /tmp/Aptfile

RUN apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get -yq dist-upgrade && \
  DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    libpq-dev \
    postgresql-client-$PG_MAJOR \
    $(cat /tmp/Aptfile | xargs) && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    truncate -s 0 /var/log/*log

WORKDIR /app

COPY Gemfile* /app/

# Upgrade RubyGems, add github to known_hosts, add .gitconfig, install required Bundler version
RUN gem update && \
    gem install bundler:$BUNDLER_VERSION

RUN mkdir -p ~/.ssh && \
    umask 0077 && \
    touch ~/.ssh/known_hosts && \
    ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN bundle check || bundle install
