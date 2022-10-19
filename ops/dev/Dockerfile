FROM nexus.asergo.com/2483/base/bosa-cities-new-0.27-base:jemalloc

# Configure locale, bundler, define app dir
ENV BUNDLE_WITHOUT=production:test
ENV BUNDLE_WITH=development
ENV RAILS_ENV=development
ENV NODE_ENV=development

COPY Gemfile* /app/

# Upgrade RubyGems, add github to known_hosts, add .gitconfig, install required Bundler version
RUN bundle check || bundle install
