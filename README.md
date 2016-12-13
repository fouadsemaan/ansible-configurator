username.rolename
=========

A configurator tool to extract properties from Spring Boot Config Server to startup your application.

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
    - dir: /home/semaanfouad/myserver/properties
    - application_name: myserver 
    - properties_file: initMyServer.sh 
    - template: export
    - config_server_ip: myConfigServer 
  roles:
    - fouadsemaan.configurator
```

License
-------

MIT

Author Information
------------------

Fouad Semaan semaanfouad@gmail.com
