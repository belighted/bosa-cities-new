# List of configurations

## Modules
#### Term Customizer Module
```
gem 'decidim-term_customizer', git: 'https://github.com/mainio/decidim-module-term_customizer'
```

## Settings in system panel
- Set SMTP credentials
- Enable participants impersonations authorization

## Settings in app
##### Activate HTML snippets in header
Set ENV variable `DECIDIM_ENABLE_HTML_HEADER_SNIPPETS=true`

##### Auth handler for participants impersonations (Managed participants)
[PR](https://github.com/belighted/bosa-cities-new/pull/8)

##### Configure active storage to use minio in production env
[Commit](https://github.com/belighted/bosa-cities-new/commit/dac40c0c01117e5ece62039c396a71435312839f)

Set ENV variable `STORAGE_PROVIDER=minio`

If not set, by default it also falls back to `:minio` in production environment (`config/environments/production.rb`):
```
config.active_storage.service = Rails.application.secrets.dig(:storage, :provider) || :minio
```

---

# List of customizations

Basic auth: 
[commit](https://github.com/belighted/bosa-cities-new/commit/0008810e75a0ef972e773b4745b81a12ec50468e)
