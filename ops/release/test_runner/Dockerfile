FROM nexus.asergo.com/2483/base/bosa-cities-new:jemalloc
LABEL maintainer="Dominique Lebrun <dominique.lebrun@belighted.com>"
ENV BUNDLE_WITHOUT=production:development
ENV BUNDLE_WITH=test
ENV RAILS_ENV=test

COPY Gemfile* /app/
RUN bundle install

ADD . /app/

CMD rake db:prepare && rspec
