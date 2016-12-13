const client = require("cloud-config-client");
const fs = require("fs");
const minimist = require("minimist");
const mkdirp = require('mkdirp');
const Handlebars = require('handlebars');

const argv = minimist(process.argv.slice(2));
const dir = argv.folder;

client.load({
        application: argv.application_name, endpoint: argv.config_server_ip
}).then((config) => {
    mkdirp(argv["folder"]);
    var stream = fs.createWriteStream(dir + "/" + argv["properties_file"]);
    var source;
    if(argv.template === "export")
    {
        source = 'export {{key}}=\'{{value}}\' \n';
    } else {
        source = '{{key}} \t {{value}} \n';
    }
    const template = Handlebars.compile(source);
    config.forEach((key, value) => stream.write(template({key: key, value: value})));

    stream.end();
});
