# bosa_cities_new

[![Maintainability](https://api.codeclimate.com/v1/badges/7cf3bc92360f76a4dc07/maintainability)](https://codeclimate.com/github/belighted/bosa-cities-new/maintainability)
[![[CI] Lint code](https://github.com/belighted/bosa-cities-new/actions/workflows/lint_code.yml/badge.svg)](https://github.com/belighted/bosa-cities-new/actions/workflows/lint_code.yml)
[![[CI] Core](https://github.com/belighted/bosa-cities-new/actions/workflows/ci_core.yml/badge.svg)](https://github.com/belighted/bosa-cities-new/actions/workflows/ci_core.yml)
[![[CI] System](https://github.com/belighted/bosa-cities-new/actions/workflows/ci_system.yml/badge.svg)](https://github.com/belighted/bosa-cities-new/actions/workflows/ci_system.yml)
[![codecov](https://codecov.io/gh/belighted/bosa-cities-new/branch/master/graph/badge.svg?token=TUVERZ4NBU)](https://codecov.io/gh/belighted/bosa-cities-new)

Free Open-Source participatory democracy, citizen participation and open government for cities and organizations

This is the open-source repository for bosa_cities_new, based on [Decidim](https://github.com/decidim/decidim).

## Setting up the application

You will need to do some steps before having the app working properly once you've deployed it:

1. Open a Rails console in the server: `bundle exec rails console`
2. Create a System Admin user:
```ruby
user = Decidim::System::Admin.new(email: <email>, password: <password>, password_confirmation: <password>)
user.save!
```
3. Visit `<your app url>/system` and login with your system admin credentials
4. Create a new organization. Check the locales you want to use for that organization, and select a default locale.
5. Set the correct default host for the organization, otherwise the app will not work properly. Note that you need to include any subdomain you might be using.
6. Fill the rest of the form and submit it.

You're good to go!
