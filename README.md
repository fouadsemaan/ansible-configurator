fouadsemaan.configurator
=========

A configurator tool which will install the application-configurator node module. It will also install node and npm to run the module.

After installation, a typical entrypoint command can be found in the [application-configurator](https://www.npmjs.com/package/application-configurator) readme section.

```js
const client = require("application-configurator");
client.properties_extractor("/opt/spark/conf", "spark", "http://configserver.myhost.com:8889", "spark-env.sh", "export")
```

Requirements
------------

See [meta/main.yml](meta/main.yml)

Role Variables
--------------

See [defaults/main.yml](defaults/main.yml)

Dependencies
------------

See [meta/main.yml](meta/main.yml)

Example Playbook
----------------

```yml
- hosts: servers
  vars:
    - configurator_version: 1.0.0 
  roles:
    - fouadsemaan.configurator
```

License
-------

MIT

Author Information
------------------

Fouad Semaan semaanfouad@gmail.com
