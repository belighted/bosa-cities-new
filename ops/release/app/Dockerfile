FROM nexus.asergo.com/2483/base/bosa-cities-new-027-base:jemalloc
LABEL maintainer="Dominique Lebrun <dominique.lebrun@belighted.com>"
ENV BUNDLE_WITHOUT=test:development
ENV BUNDLE_WITH=production
ENV RAILS_ENV=production

COPY Gemfile* /app/
RUN bundle install

ADD . /app/

RUN mkdir -p /app/public/uploads/tmp
CMD rm -f /tmp/pid && bundle exec puma -C config/puma.rb
