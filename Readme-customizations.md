# List of configurations

## Modules

```
gem 'decidim-term_customizer', git: 'https://github.com/mainio/decidim-module-term_customizer'
```

## Settings in system panel
- Set SMTP credentials
- Enable participants impersonations authorization

## UAT only
- Given we're using Mailtrap on UAT and that smtp_authentication is not configurable in system panel:
```
SMTP_AUTHENTICATION = cram_md5
```

## Settings in app and configurations
- Activate HTML snippets in header - set ENV variable `DECIDIM_ENABLE_HTML_HEADER_SNIPPETS=true`
- Auth handler for participants impersonations (Managed participants) - [PR](https://github.com/belighted/bosa-cities-new/pull/8)
- Configure active storage to use minio in production env:
  - [Commit](https://github.com/belighted/bosa-cities-new/commit/dac40c0c01117e5ece62039c396a71435312839f)
  - Set ENV variable `STORAGE_PROVIDER=minio`
  - If not set, by default it also falls back to `:minio` in production environment.
  `config/environments/production.rb`:
```
config.active_storage.service = Rails.application.secrets.dig(:storage, :provider) || :minio
```
- Set number of authentication tries before locking an account to 5 instead of 20.
 `config/initializers/devise.rb`:
```
config.maximum_attempts = 5
```
- 

---

# List of customizations

### Additional functionalities
- App level basic auth - [commit](https://github.com/belighted/bosa-cities-new/commit/0008810e75a0ef972e773b4745b81a12ec50468e)
- Org level basic auth - [PR](https://github.com/belighted/bosa-cities-new/pull/10)

### Bugfixes
###### Temporary fixes (to remove after it is fixed in decidim)
- Fix participatory processes counter shows wrong amount of processes - [PR](https://github.com/belighted/bosa-cities-new/pull/13)
###### Fixed locally that won't be applied in decidim
- None

